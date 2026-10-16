# 杨志伟 / Zhiwei Yang — 学术主页

面向 GitHub Pages 的纯静态个人主页，无需安装 Node.js、配置数据库或购买服务器。支持中英文切换、深浅主题、论文年份筛选和手机导航。

站点地址：**https://yzw66.github.io/**。已配置从 `main` 分支根目录发布，推送更新后 GitHub Pages 会自动部署。

页面参照 [statusrank.github.io](https://statusrank.github.io/) 的布局与视觉风格：紧凑导航、左侧资料栏、About Me、带 🎉 的 News、一作/共一/通讯论文、按年份分组的论文列表、学术服务、教育经历和 🎖 荣誉与奖励。默认深蓝主题，支持切换白底浅色主题。内容为杨志伟本人的资料，不包含参考站作者的经历与成果。

## 本地预览

在本目录执行：

```bash
python3 -m http.server 4173 --bind 127.0.0.1
```

打开 http://127.0.0.1:4173/。远程服务器上运行时，可通过编辑器的端口转发访问 4173 端口。

## 发布到 GitHub Pages

1. 登录 GitHub 账号 **yzw66**，创建公开仓库 **yzw66.github.io**。首次创建时不要自动添加 README、许可证或 `.gitignore`，以便上传现有文件。
2. 将本目录的 `index.html`、`assets/`、`favicon.svg`、`.nojekyll` 和 `README.md` 上传到仓库的 `main` 分支根目录。`index.html` 必须直接位于根目录，不能套在 `my_github_io/` 文件夹内。可使用 GitHub 网页的 **Add file → Upload files**。
3. 进入仓库 **Settings → Pages**，在 **Build and deployment** 中选择 **Deploy from a branch**，分支选 **main**，目录选 **/ (root)**，点击 **Save**。
4. 等待 Pages 部署完成（通常几分钟），访问 https://yzw66.github.io/。部署状态可在 **Actions** 或 **Settings → Pages** 查看。

也可以在这台机器已配置你自己的 GitHub 登录凭据后，用 Git 上传。以下命令仅适用于刚创建的空仓库：

```bash
git add index.html assets favicon.svg .nojekyll README.md
git commit -m "Build Zhiwei Yang academic homepage"
git remote add origin https://github.com/yzw66/yzw66.github.io.git
git push -u origin main
```

本地仓库已初始化为 `main` 分支。若提示缺少提交者信息，先在本仓库设置自己的 `git config user.name` 和 `git config user.email`。若已经有 `origin`，先用 `git remote -v` 核对地址，不必重复添加。不要将密码或访问令牌写进网页、README 或远程仓库地址。

## 已填入的资料

- 姓名：杨志伟 / Zhiwei Yang。
- 身份：中国科学院信息工程研究所博士研究生，导师为姜磊研究员（本人确认）。
- 研究领域：自然语言处理与数据挖掘。
- 重点方向：AI Agent、LLM/VLM 后训练、多模态大语言模型；多模态社交事件检测、多模态信息内容挖掘、结构熵。
- 邮箱：yangzhiwei@iie.ac.cn、yzw377986686@gmail.com。
- GitHub：https://github.com/yzw66。
- DBLP：https://dblp.org/pid/78/8054-9（按本人提供的链接使用）。
- 完整论文列表：共 17 篇，包含该 DBLP 作者 ID 下的全部 12 篇去重作品，以及原有的 5 篇 Google Scholar 来源论文；每篇保留作者、发表信息、链接和中英文研究标签。
- 学术服务：AAAI、ICLR、ACM Multimedia 审稿人；未添加未经确认的年份。
- 一作/共一/通讯论文：共 9 篇，包括 3 篇已发表会议论文，以及本人确认共一身份的 OmniStepBench、Making Every Tool Call Count、ClueWeaver、MOF-Sleuth、CARE 和 Musical Forgetting。参照参考站中文页，展示论文图、题目、会议或预印本状态、每篇 1–2 个研究主题标签及一句话工作说明；OmniStepBench 按本人指定展示 Figure 1，其余新增论文使用方法总览图。卡片不展示作者列表、具体作者角色或在投分组。
- 荣誉与奖励：按本人简历整理 2022–2025 年奖项及本科连续四年校一等奖学金，支持中英文切换。
- 照片：使用本人提供的 `assets/images/yzw.jpg`，在侧栏展示并适配桌面与手机布局。

教育经历：新增中国科学院信息工程研究所信息内容分析实验室博士、硕士，以及华北理工大学理学院本科经历；按倒序展示官方院所/学校图标，支持中英文切换。
工作经历、ORCID 和 CV 文件暂不展示，可后续添加。当前博士研究生身份与导师信息已在开头介绍中展示，审稿经历单独列在学术服务中。

## 后续维护

- `index.html`：个人资料、研究方向、论文、近期动态、学术服务、教育经历和荣誉奖励。中英文文案分别在 `data-en`、`data-zh` 属性中；修改时同步更新默认英文正文。
- `assets/css/styles.css`：配色和响应式布局。
- `assets/js/main.js`：语言、主题、手机菜单和论文筛选。
- `assets/images/`：论文 overview 图及保留的配图素材；点击 overview 图可查看原尺寸图片。

论文与动态为静态内容，不会自动从 Google Scholar 更新。增加论文时，将条目加到对应 `.publication-group` 下的 `.publication-list`，填写 `data-year`；新增年份还需添加年份分组和对应的筛选按钮。修改并推送 `main` 后，Pages 会自动重新部署。

一作/共一/通讯论文区域使用独立的 `.lead-paper-list`，不参与完整论文列表的年份筛选和计数。每张卡片由 `.lead-paper-overview` 和 `.lead-paper-info` 组成，两部分使用固定网格区域定位；桌面端左右排列，手机端上下排列。精选卡片和完整论文列表都使用 `.paper-topics` 展示研究主题标签，标签的 `data-en`、`data-zh` 需同步维护；同一论文在两个区域的标签应保持一致。精选卡片另以 `.lead-paper-summary` 展示一句话工作说明，完整论文列表不展示该说明。荣誉奖励在 `#honors` 中按年份维护。

## 内容来源

初始论文列表整理日期：2026-10-16。

- [Google Scholar](https://scholar.google.com.hk/citations?user=mNw4PDEAAAAJ&hl=zh-CN) 公开资料与各论文的出版页面。
- 2026-10-16 根据 [DBLP 作者页](https://dblp.org/pid/78/8054-9.html) 补齐 MOF-Sleuth、ClueWeaver、Making Every Tool Call Count、DAREBench / OmniStepBench 和 PB-CLIP。作者页访问验证阻止直接读取时，使用 [DBLP 官方 SPARQL 接口](https://sparql.dblp.org/) 按同一作者 URI `https://dblp.org/pid/78/8054-9` 查询：14 条记录合并 ADP-SEM 与 HyperSED 的预印本/正式版后为 12 篇作品，均已覆盖；原有 Scholar 条目保留。
- 新增条目的作者顺序和题目由 arXiv 元数据或 Crossref DOI 元数据核对。[ClueWeaver](https://arxiv.org/abs/2608.25531) 原文标注已被 ICONIP 2026 接收；DBLP 的 DAREBench 对应同一 arXiv ID `2609.06059`，现按[最新原文](https://arxiv.org/abs/2609.06059)题目 OmniStepBench 展示并注明原名；[PB-CLIP](https://doi.org/10.1007/978-981-96-9794-6_35) 为 ICIC 2025 Part V，第 419–430 页。
- 本人提供的 GitHub、邮箱、DBLP、审稿服务信息，以及 2026-10-16 提供的简历中的论文角色、投稿状态和荣誉奖励；个人介绍中的博士研究生身份、导师、研究方向及两个公开邮箱采用本人最新确认的信息。
- 教育经历的学校、时间、专业和培养方式由本人本次提供；`iie-logo.png` 使用[中国科学院信息工程研究所官方所徽](https://iie.cas.cn/jggk/xxbs/202511/t20251118_8013614.html)，`ncst-logo.png` 使用[华北理工大学官方校徽](https://www.ncst.edu.cn/col/1511504054082/index.html)。
- Musical Forgetting、CARE、OmniStepBench、Making Every Tool Call Count、ClueWeaver 和 MOF-Sleuth 的共一身份由本人补充确认。CARE 的录用状态来自 [arXiv 原文页面](https://arxiv.org/abs/2607.21642) 的 “Accepted by ISSRE 2026” 注释；ClueWeaver 标记为 ICONIP 2026 已录用，其他四篇继续标记为 arXiv 预印本。研究主题标签根据各论文题目及摘要归纳。
- 论文配图素材从作者公开 PDF 中裁出方法图（`*-teaser.png`），原始页面图片保留供后续维护。

当前图文论文卡片的 overview 来源：

- `omnistepbench-figure1.png`：按本人要求，使用 [OmniStepBench v2 Figure 1](https://arxiv.org/html/2609.06059v2#S1.F1) 的准确率与成本对比图；[arXiv 原始图片](https://arxiv.org/html/2609.06059v2/acc_cost.png)。
- `ntep-overview.png`：[Making Every Tool Call Count v1 Figure 2](https://arxiv.org/html/2609.03493v1#S2.F2) 的 NTEP-R 方法总览；[arXiv 原始图片](https://arxiv.org/html/2609.03493v1/overview.png)。
- `clueweaver-overview.png`：[ClueWeaver v2](https://arxiv.org/html/2608.25531v2) Figure 2 的双智能体推理及训练框架；[arXiv 原始图片](https://arxiv.org/html/2608.25531v2/main.png)。
- `mof-sleuth-overview.png`：[MOF-Sleuth v1](https://arxiv.org/html/2607.19935v1) Figure 2 的 Forensic Lab 与 Sleuth Agent 框架；[arXiv 原始图片](https://arxiv.org/html/2607.19935v1/overview.png)。
- `care-teaser.png`：[CARE 论文](https://arxiv.org/abs/2607.21642) 中已有的方法总览图，展示 Canonicalization、Attribution 和 Resolution 三个阶段。
- `musical-forgetting-overview.png`：[Musical Forgetting 论文 v2](https://arxiv.org/html/2606.15088v2#S2.F2) Figure 2 的 PPCP 方法总览；使用 arXiv HTML 中的[原始图片](https://arxiv.org/html/2606.15088v2/overview.png)。
- `seinevent-overview.png`：AAAI 2026 [官方开放论文](https://ojs.aaai.org/index.php/AAAI/article/download/38647/42609) 第 3 页 Figure 2，裁出完整方法图。
- `label-free-overview.svg`：根据 WSDM 2026 [论文摘要](https://doi.org/10.1145/3773966.3777919) 绘制的方法示意图，并非论文原图。流程为 MLLM 语义增强 → 正样本构建与孪生网络无标签对比学习 → 结构熵引导的事件聚类。摘要通过 [Semantic Scholar](https://www.semanticscholar.org/paper/451af0863cb52e31ddebeb4ae98aa8213bf7734f) 核对；当前环境无法读取 ACM 官网原图，后续可替换为作者提供的 overview。
- `adp-sem-teaser.png`：CIKM 2024 ADP-SEMEvent 论文中已有的方法总览图。
