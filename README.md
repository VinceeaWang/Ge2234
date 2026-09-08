# GE2234 课程网站：GitHub Pages 上传说明

适用仓库：https://github.com/VinceeaWang/Ge2234

## 上传与发布

1. 解压 ZIP，打开 Ge2234 文件夹。
2. 进入 GitHub 仓库，选择 Add file → Upload files（空仓库可点击 uploading an existing file）。
3. 将 Ge2234 文件夹里面的所有文件和子文件夹拖入上传区域，点击 Commit changes。
   请上传文件夹里面的内容，不要把外层 Ge2234 文件夹一起上传，也不要只上传 ZIP。
   上传后，仓库首页应直接看到 index.html、styles.css、week2、week3、w3-slides 等。
4. 打开 Settings → Pages。
5. Source 选择 Deploy from a branch；Branch 选择 main；目录选择 / (root)，点击 Save。
6. 等待部署完成，在 Pages 页面点击 Visit site。如果失败，在仓库 Actions 中查看部署记录。

发布地址：https://vinceeawang.github.io/Ge2234/

Week 2：https://vinceeawang.github.io/Ge2234/week2/

Week 3：https://vinceeawang.github.io/Ge2234/week3/

Week 4–10 使用相同格式。

## 内容与维护

- 首页是 Week 1，也可从 /Ge2234/week1/ 进入。
- 包含现有 Week 1–3 课程内容、互动练习和 Week 3 的 64 张原始 slides。
- Week 4–10 是课程占位页；R tutorial 导航保留，内容尚待加入。
- 学习进度和反思保存在学生自己的浏览器中，不会集中提交给教师。
- 文件已经适配大小写敏感的 /Ge2234/ 路径。改仓库名称时，需要同步调整 base 和导航路径。
- .nojekyll 是用于关闭 Jekyll 处理的空文件。如果系统隐藏了它，可在 GitHub 用 Add file → Create new file 创建名为 .nojekyll 的文件并提交。
- 未来更新文件并提交到 main 后，GitHub Pages 会重新发布。
- 本包用于 GitHub Pages，建议通过部署后的网站访问；直接双击本地 HTML 不能完整运行模块脚本。

## 检查

发布后打开首页、Week 2、Week 3，试做一道题，并在 Week 3 展开 Original lecture slides 检查图片显示。
