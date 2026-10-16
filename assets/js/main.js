(() => {
  const root = document.documentElement;
  const header = document.querySelector('.site-header');
  const menuToggle = document.querySelector('.menu-toggle');
  const languageToggle = document.querySelector('.language-toggle');
  const themeToggle = document.querySelector('.theme-toggle');
  const themeLabel = document.querySelector('.theme-label');
  const themeColor = document.querySelector('meta[name="theme-color"]');
  const navLinks = [...document.querySelectorAll('.primary-nav a')];
  const filterButtons = [...document.querySelectorAll('.filter-button')];
  const groups = [...document.querySelectorAll('.publication-group')];
  const papers = [...document.querySelectorAll('.publication-item')];
  const sections = [...document.querySelectorAll('.section-anchor')];
  const language = () => root.dataset.language === 'zh' ? 'zh' : 'en';

  const persist = (key, value) => {
    try { localStorage.setItem(key, value); } catch (error) { /* Preferences still work for this visit. */ }
  };

  const updateControls = () => {
    const chinese = language() === 'zh';
    const dark = root.dataset.theme === 'dark';
    const menuOpen = header.classList.contains('menu-open');
    languageToggle.textContent = chinese ? 'EN' : '中文';
    languageToggle.setAttribute('aria-label', chinese ? 'Switch to English' : '切换到中文');
    themeLabel.textContent = chinese ? (dark ? '浅色' : '深色') : (dark ? 'Light' : 'Dark');
    themeToggle.setAttribute('aria-label', chinese ? (dark ? '切换到浅色主题' : '切换到深色主题') : (dark ? 'Switch to light theme' : 'Switch to dark theme'));
    themeToggle.setAttribute('aria-pressed', String(dark));
    menuToggle.setAttribute('aria-label', chinese ? (menuOpen ? '关闭导航' : '打开导航') : (menuOpen ? 'Close navigation' : 'Open navigation'));
    menuToggle.setAttribute('aria-expanded', String(menuOpen));
  };

  const setTheme = (theme, save = true) => {
    root.dataset.theme = theme === 'light' ? 'light' : 'dark';
    themeColor.setAttribute('content', root.dataset.theme === 'dark' ? '#0b1020' : '#ffffff');
    if (save) persist('site-theme', root.dataset.theme);
    updateControls();
  };

  const setLanguage = (next, save = true) => {
    root.dataset.language = next === 'zh' ? 'zh' : 'en';
    root.lang = language() === 'zh' ? 'zh-CN' : 'en';
    document.querySelectorAll('[data-en][data-zh]').forEach((node) => {
      node.textContent = node.dataset[language()];
    });
    document.querySelectorAll('[data-alt-en][data-alt-zh]').forEach((node) => {
      node.setAttribute('alt', node.getAttribute(`data-alt-${language()}`));
    });
    document.title = language() === 'zh' ? '杨志伟 | 学术主页' : 'Zhiwei Yang | Academic Homepage';
    if (save) persist('site-language', language());
    updateControls();
  };

  const closeMenu = () => {
    header.classList.remove('menu-open');
    updateControls();
  };

  const updateActiveSection = () => {
    const threshold = header.getBoundingClientRect().height + 95;
    const atBottom = scrollY > 0 && innerHeight + scrollY >= document.documentElement.scrollHeight - 2;
    const current = atBottom ? sections[sections.length - 1].id : sections.reduce((active, section) => section.getBoundingClientRect().top <= threshold ? section.id : active, 'about-me');
    const target = current === 'selected-work' ? 'publications' : current;
    navLinks.forEach((link) => {
      const active = link.dataset.section === target;
      link.classList.toggle('is-active', active);
      if (active) link.setAttribute('aria-current', 'location');
      else link.removeAttribute('aria-current');
    });
  };

  const applyFilter = (filter) => {
    filterButtons.forEach((button) => {
      const active = button.dataset.filter === filter;
      button.classList.toggle('is-active', active);
      button.setAttribute('aria-pressed', String(active));
    });
    papers.forEach((paper) => {
      paper.hidden = !(filter === 'all' || paper.dataset.year === filter || (filter === 'earlier' && Number(paper.dataset.year) < 2023));
    });
    groups.forEach((group) => {
      group.hidden = ![...group.querySelectorAll('.publication-item')].some((paper) => !paper.hidden);
    });
    document.querySelector('.count-value').textContent = String(papers.filter((paper) => !paper.hidden).length);
    updateActiveSection();
  };

  languageToggle.addEventListener('click', () => setLanguage(language() === 'en' ? 'zh' : 'en'));
  themeToggle.addEventListener('click', () => setTheme(root.dataset.theme === 'dark' ? 'light' : 'dark'));
  menuToggle.addEventListener('click', () => {
    header.classList.toggle('menu-open');
    updateControls();
  });
  navLinks.forEach((link) => link.addEventListener('click', closeMenu));
  document.querySelector('.home-link').addEventListener('click', closeMenu);
  filterButtons.forEach((button) => button.addEventListener('click', () => applyFilter(button.dataset.filter)));
  document.addEventListener('keydown', (event) => {
    if (event.key === 'Escape' && header.classList.contains('menu-open')) {
      closeMenu();
      menuToggle.focus();
    }
  });
  document.addEventListener('click', (event) => {
    if (!header.contains(event.target)) closeMenu();
  });
  window.matchMedia('(min-width: 701px)').addEventListener('change', closeMenu);
  let scheduled = false;
  window.addEventListener('scroll', () => {
    if (scheduled) return;
    scheduled = true;
    requestAnimationFrame(() => {
      updateActiveSection();
      scheduled = false;
    });
  }, { passive: true });

  // Keep incoming links from the previous homepage version working.
  const legacySections = { '#overview': 'about-me', '#research': 'about-me', '#profile': 'about-me' };
  const resolveLegacySection = () => {
    const target = legacySections[location.hash];
    if (!target) return;
    history.replaceState(null, '', `#${target}`);
    document.getElementById(target).scrollIntoView();
  };
  window.addEventListener('hashchange', resolveLegacySection);

  document.querySelector('.current-year').textContent = String(new Date().getFullYear());
  setTheme(root.dataset.theme, false);
  setLanguage(root.dataset.language, false);
  applyFilter('all');
  resolveLegacySection();
})();
