# Deck case — DeepSeek V4.1 Flash（2026-09-09）

## 风格决定
- mode = night（突发技术新闻 / 深夜发布 / 工程叙事）
- 10 页节奏：dark hero → dark toc → paper evidence → paper evidence → dark section → paper table → paper evidence → dark statement → dark statement → dark closing
- 内容语言：中文正文 + mono 英文元数据

## 已核实事实（来源见尾页，全部 2026-09-08 当天多家科技媒体报道）
1. 2026-09-08 下午，DeepSeek 在官方交流群开启 V4.1 Flash「中间版本」限日内测；无发布会、无预热。
2. 模型 ID：`deepseek-v4.1-flash-expires-on-0910`；base_url 不变，改模型名即可调用。
3. 2026-09-10 自动下线，测试窗口仅两天。
4. 官方表述：采用新的模型结构（V4 系列沿用旧架构）；原生多模态支持（文本/图像/音频统一处理，不再是 V4 Flash 的外挂 Vision 扩展包）；能力更强、速度更快、成本更低。
5. 计费与 V4 Flash 完全相同：每百万 tokens 错峰 输入缓存命中 ¥0.05 / 未命中 ¥1.5 / 输出 ¥4.5；高峰 ¥0.1 / ¥3 / ¥9。
6. 并发限流 20/账号（正式版 V4 Flash 为 2500、V4 Pro 为 500）→ 功能验证而非生产负载。
7. 开发者实测输出速度普遍 >300 tokens/s，最高 507 tokens/s（含「鹈鹕骑自行车 SVG」测试 328 tokens/s）。
8. 官方匿名问卷询问：V4.1 Flash 中间版本能否全面替换线上 V4 Pro → Flash 架构想吃 Pro 负载的信号。
9. 时间线：4/24 V4 Preview 开源发布（V4-Pro 1.6T/49B 激活、V4-Flash 284B/13B，1M 上下文，MIT）→ 7/31 V4 Flash 生产 API 公测 → 8/13 V4 Pro 生产 API + Harness v0.1 开源 → 8/21 V4-Flash-Vision-Exp → 9/8 V4.1 Flash 中间版内测。

## 图片来源
复用仓库既有 4 张原创概念图（night 全幅 hero、noon/morning 备用、illustration 证据页）。不换图——图是非官方概念图，不承载事实，与 skill 契约一致。
