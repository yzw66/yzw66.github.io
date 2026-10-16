(() => {
  const root = document.documentElement;
  const header = document.querySelector('.site-header');
  const menuToggle = document.querySelector('.menu-toggle');
  const themeToggle = document.querySelector('.theme-toggle');
  const languageToggle = document.querySelector('.language-toggle');
  const themeColor = document.querySelector('meta[name="theme-color"]');
  const navLinks = [...document.querySelectorAll('.primary-nav a')];
  const filterButtons = [...document.querySelectorAll('.filter-button')];
  const publications = [...document.querySelectorAll('.publication-item')];
  const countValue = document.querySelector('.count-value');
  let activeFilter = 'all';

  const persist = (key, value) => {
    try {
      localStorage.setItem(key, value);
    } catch (error) {
      // The preference still applies for the current page view.
    }
  };

  const currentLanguage = () => root.dataset.language === 'zh' ? 'zh' : 'en';

  const updateControlLabels = () => {
    const language = currentLanguage();
    const isDark = root.dataset.theme === 'dark';
    themeToggle.setAttribute(
      'aria-label',
      language === 'zh'
        ? (isDark ? '切换到浅色主题' : '切换到深色主题')
        : (isDark ? 'Switch to light theme' : 'Switch to dark theme')
    );
    menuToggle.setAttribute(
      'aria-label',
      language === 'zh'
        ? (header.classList.contains('menu-open') ? '关闭导航' : '打开导航')
        : (header.classList.contains('menu-open') ? 'Close navigation' : 'Open navigation')
    );
  };

  const setTheme = (theme, save = true) => {
    const nextTheme = theme === 'light' ? 'light' : 'dark';
    root.dataset.theme = nextTheme;
    themeColor.setAttribute('content', nextTheme === 'dark' ? '#0b0e12' : '#ffffff');
    if (save) persist('site-theme', nextTheme);
    updateControlLabels();
  };

  const updatePublicationCount = () => {
    const visibleCount = publications.filter((item) => !item.hidden).length;
    countValue.textContent = String(visibleCount);
  };

  const setLanguage = (language, save = true) => {
    const nextLanguage = language === 'zh' ? 'zh' : 'en';
    root.dataset.language = nextLanguage;
    root.lang = nextLanguage === 'zh' ? 'zh-CN' : 'en';

    document.querySelectorAll('[data-en][data-zh]').forEach((element) => {
      element.textContent = element.dataset[nextLanguage];
    });

    languageToggle.textContent = nextLanguage === 'en' ? '中文' : 'EN';
    languageToggle.setAttribute(
      'aria-label',
      nextLanguage === 'en' ? '切换到中文' : 'Switch to English'
    );
    document.title = nextLanguage === 'zh'
      ? '杨志伟 | 学术主页'
      : 'Zhiwei Yang | Academic Homepage';

    if (save) persist('site-language', nextLanguage);
    updateControlLabels();
    updatePublicationCount();
  };

  const closeMenu = () => {
    header.classList.remove('menu-open');
    menuToggle.setAttribute('aria-expanded', 'false');
    updateControlLabels();
  };

  const applyFilter = (filter) => {
    activeFilter = filter;
    filterButtons.forEach((button) => {
      const selected = button.dataset.filter === filter;
      button.classList.toggle('is-active', selected);
      button.setAttribute('aria-pressed', String(selected));
    });

    publications.forEach((item) => {
      const year = Number(item.dataset.year);
      const visible = filter === 'all'
        || item.dataset.year === filter
        || (filter === 'earlier' && year < 2023);
      item.hidden = !visible;
    });

    updatePublicationCount();
  };

  themeToggle.addEventListener('click', () => {
    setTheme(root.dataset.theme === 'dark' ? 'light' : 'dark');
  });

  languageToggle.addEventListener('click', () => {
    setLanguage(currentLanguage() === 'en' ? 'zh' : 'en');
  });

  menuToggle.addEventListener('click', () => {
    const isOpen = header.classList.toggle('menu-open');
    menuToggle.setAttribute('aria-expanded', String(isOpen));
    updateControlLabels();
  });

  navLinks.forEach((link) => {
    link.addEventListener('click', closeMenu);
  });

  filterButtons.forEach((button) => {
    button.addEventListener('click', () => applyFilter(button.dataset.filter));
  });

  document.addEventListener('keydown', (event) => {
    if (event.key === 'Escape') closeMenu();
  });

  const revealElements = [...document.querySelectorAll('.reveal')];
  if ('IntersectionObserver' in window) {
    const revealObserver = new IntersectionObserver((entries, observer) => {
      entries.forEach((entry) => {
        if (!entry.isIntersecting) return;
        entry.target.classList.add('is-visible');
        observer.unobserve(entry.target);
      });
    }, { threshold: 0.08, rootMargin: '0px 0px -35px' });

    revealElements.forEach((element) => revealObserver.observe(element));
  } else {
    revealElements.forEach((element) => element.classList.add('is-visible'));
  }

  const sections = [...document.querySelectorAll('.section-anchor')];
  if ('IntersectionObserver' in window) {
    const sectionObserver = new IntersectionObserver((entries) => {
      const visible = entries
        .filter((entry) => entry.isIntersecting)
        .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];
      if (!visible) return;

      navLinks.forEach((link) => {
        const isActive = link.dataset.section === visible.target.id;
        link.classList.toggle('is-active', isActive);
        if (isActive) link.setAttribute('aria-current', 'page');
        else link.removeAttribute('aria-current');
      });
    }, { rootMargin: '-28% 0px -60%', threshold: [0, 0.1, 0.4] });

    sections.forEach((section) => sectionObserver.observe(section));
  }

  document.querySelector('.current-year').textContent = String(new Date().getFullYear());
  applyFilter(activeFilter);
  setTheme(root.dataset.theme, false);
  setLanguage(root.dataset.language, false);
})();
