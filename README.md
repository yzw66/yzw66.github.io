# 杨志伟 / Zhiwei Yang — 学术主页

面向 GitHub Pages 的纯静态个人主页，无需安装 Node.js、配置数据库或购买服务器。支持中英文切换、深浅主题、论文年份筛选和手机导航。

站点地址：**https://yzw66.github.io/**。已配置从 `main` 分支根目录发布，推送更新后 GitHub Pages 会自动部署。

页面参照 [statusrank.github.io](https://statusrank.github.io/) 的布局与视觉风格：紧凑导航、左侧资料栏、About Me、带 🎉 的 News、一作/共一/通讯论文、按年份分组的论文列表、学术服务和 🎖 荣誉与奖励。默认深蓝主题，支持切换白底浅色主题。内容为杨志伟本人的资料，不包含参考站作者的经历与成果。

## 本地预览

在本目录执行：

```bash
python3 -m http.server 4173 --bind 127.0.0.1
```

打开 http://127.0.0.1:4173/。远程服务器上运行时，可通过编辑器的端口转发访问 4173 端口。

## 发布到 GitHub Pages

1. 登录 GitHub 账号 **yzw66**，创建公开仓库 **yzw66.github.io**。首次创建时不要自动添加 README、许可证或 `.gitignore`，以便上传现有文件。
2. 将本目录的 `index.html`、`assets/`、`favicon.svg`、`.nojekyll` 和 `README.md` 上传到仓库的 `main` 分支根目录。`index.html` 必须直接位于根目录，不能套在 `my_github_io/` 文件夹内。可使用 GitHub 网页的 **Add file → Upload files**；照片无需上传。
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
- 机构：中国科学院信息工程研究所（来自公开 Google Scholar 资料）。
- 邮箱：yangzhiwei@iie.ac.cn。
- GitHub：https://github.com/yzw66。
- DBLP：https://dblp.org/pid/78/8054-9（按本人提供的链接使用）。
- 学术服务：AAAI、ICLR、ACM Multimedia 审稿人；未添加未经确认的年份。
- 一作/共一/通讯论文：按本人简历选列 3 篇已发表会议论文和 4 篇在投论文，只展示题目、会议与投稿状态；不展示作者列表。
- 荣誉与奖励：按本人简历整理 2022–2025 年奖项及本科连续四年校一等奖学金，支持中英文切换。
- 照片：按当前偏好不展示照片，侧栏直接显示姓名与联系方式。

教育、工作经历、ORCID 和 CV 文件暂不展示，可后续添加。尚未填入正式职务；审稿经历单独列在学术服务中。

备用邮箱尚未确认，当前只展示机构邮箱。

## 后续维护

- `index.html`：个人资料、研究方向、论文、近期动态、学术服务和荣誉奖励。中英文文案分别在 `data-en`、`data-zh` 属性中；修改时同步更新默认英文正文。
- `assets/css/styles.css`：配色和响应式布局。
- `assets/js/main.js`：语言、主题、手机菜单和论文筛选。
- `assets/images/`：保留的论文配图素材；当前一作/共一/通讯论文区域采用纯文字列表。

论文与动态为静态内容，不会自动从 Google Scholar 更新。增加论文时，将条目加到对应 `.publication-group` 下的 `.publication-list`，填写 `data-year`；新增年份还需添加年份分组和对应的筛选按钮。修改并推送 `main` 后，Pages 会自动重新部署。

一作/共一/通讯论文区域使用独立的 `.lead-paper-list`，不参与完整论文列表的年份筛选和计数。在投论文须保留“在投 / Under review”状态，录用或发表后再移动到已发表分组。荣誉奖励在 `#honors` 中按年份维护。

## 内容来源

初始论文列表整理日期：2026-10-16。

- [Google Scholar](https://scholar.google.com.hk/citations?user=mNw4PDEAAAAJ&hl=zh-CN) 公开资料与各论文的出版页面。
- 本人提供的 GitHub、邮箱、DBLP、审稿服务信息，以及 2026-10-16 提供的简历中的论文角色、投稿状态和荣誉奖励。
- 论文配图素材从作者公开 PDF 中裁出方法图（`*-teaser.png`），原始页面图片保留供后续维护。
