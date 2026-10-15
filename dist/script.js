const views = {
  home: 'Momcozy 学院设计策略 / 首页', strategy: 'Momcozy 学院设计策略 / 战略承接', brand: 'Momcozy 学院设计策略 / 品牌策略', visual: 'Momcozy 学院设计策略 / 视觉策略', identity: 'Momcozy 学院设计策略 / 视觉系统', content: 'Momcozy 学院设计策略 / 内容系统', digital: 'Momcozy 学院设计策略 / 数字体验', applications: 'Momcozy 学院设计策略 / 应用验证', assets: 'Momcozy 学院设计策略 / 资产规范',
};
const visualViews = { framework: '策略框架', competitor: 'Every Mother 视觉研究', keywords: '视觉关键词', directions: '创意路线' };
const strategyViews = { handoff: '战略输入', 'source-summary': '内容组品牌线索' };
const legacyHashes = { top: 'home', overview: 'home', 'source-strategy': 'strategy', landscape: 'visual', cases: 'visual', matrix: 'visual', opportunity: 'visual' };

const visualSystemGroups = [
  { id: 'identity', number: '01', name: '核心识别', moduleIds: ['logo', 'color', 'type'] },
  { id: 'imagery', number: '02', name: '图像语言', moduleIds: ['graphics', 'illustration', 'photo'] },
  { id: 'behavior', number: '03', name: '数字行为', moduleIds: ['layout', 'motion', 'data-state'] },
  { id: 'application', number: '04', name: '应用表现', moduleIds: ['content-template', 'campaign', 'consistency'] },
];

const moduleDefinitions = [
  { id: 'logo', number: '01', group: '核心识别', name: 'Logo 与品牌签名', question: '字标、符号及组合关系如何出现？' },
  { id: 'color', number: '02', group: '核心识别', name: '色彩系统', question: '颜色承担哪些可观察角色？' },
  { id: 'type', number: '03', group: '核心识别', name: '字体与信息层级', question: '标题、正文与操作信息如何分层？' },
  { id: 'graphics', number: '04', group: '图像语言', name: '图形与图标', question: '图形、图标和功能符号使用什么语法？' },
  { id: 'illustration', number: '05', group: '图像语言', name: '插画系统', question: '造型、线条、色块和场景如何重复？' },
  { id: 'photo', number: '06', group: '图像语言', name: '摄影与影像', question: '人物、场景、光线和构图如何呈现？' },
  { id: 'layout', number: '07', group: '数字行为', name: '网格与版式', question: '网格、留白、卡片和阅读顺序如何组织？' },
  { id: 'motion', number: '08', group: '数字行为', name: '动态与交互', question: '转场、反馈与交互状态如何表现？' },
  { id: 'data-state', number: '09', group: '数字行为', name: '数据与功能状态', question: '进度、数据及功能状态如何可视化？' },
  { id: 'content-template', number: '10', group: '应用表现', name: '内容与课程模板', question: '课程和内容是否使用可重复模板？' },
  { id: 'campaign', number: '11', group: '应用表现', name: 'Campaign、社交与联名', question: '传播、社交和合作场景如何署名与延展？' },
  { id: 'consistency', number: '12', group: '应用表现', name: '跨触点一致性', question: '哪些规则在不同官方触点重复？' },
];
const moduleMap = Object.fromEntries(moduleDefinitions.map((module) => [module.id, module]));

const everyMotherResearch = {
  researchScope: {
    brand: 'Every Mother', officialUrl: 'https://every-mother.com/', domain: 'every-mother.com', researchedAt: '2026-10-15',
    sourcePolicy: '仅使用 Codex 主动打开并重新采集的官方公开触点。',
    scopeStatement: '完成官网、公开应用商店与官方社交频道的主动采集；用户截图不作为正式证据。',
    coveredTouchpointIds: ['EM-TP01', 'EM-TP02', 'EM-TP03', 'EM-TP04', 'EM-TP05', 'EM-TP06', 'EM-TP07', 'EM-TP08', 'EM-TP10', 'EM-TP12'],
    limitations: [
      'Apple App Store 在当前地区重定向到商店首页，未获得可归档的 Every Mother 视觉截图。',
      'Instagram 公开主页被注册弹层遮挡，未将遮挡后的内容缩略图作为正式证据。',
      '未登录会员区或安装 App，课程进度、完成、错误和个性化状态无法确认。',
      '本轮为静态截图和可访问性核验，未录制完整动效时序。',
      '未获得公开品牌规范，不能确认字体名称、色值、内部组件规则或设计治理流程。',
      '所有截图只代表 2026-10-15 可核对到的页面状态。',
    ],
  },
  touchpoints: [
    { id: 'EM-TP01', type: '官网首页', sourceType: '官网', title: 'Exercise Program for Core and Pelvic Floor Health', url: 'https://every-mother.com/', status: '已采集', accessState: '已访问', capturedAt: '2026-10-15', evidenceIds: ['EM-E01', 'EM-E02', 'EM-E12'], note: '桌面端首屏、课程分类区与 390px 移动端首屏。' },
    { id: 'EM-TP02', type: '产前项目页', sourceType: '官网', title: 'Prenatal Exercise Program', url: 'https://every-mother.com/prenatal', status: '已采集', accessState: '已访问', capturedAt: '2026-10-15', evidenceIds: ['EM-E03', 'EM-E13'], note: '桌面端与 390px 移动端首屏。' },
    { id: 'EM-TP03', type: '产后项目页', sourceType: '官网', title: 'Postpartum Recovery', url: 'https://every-mother.com/postpartum-recovery', status: '已采集', accessState: '已访问', capturedAt: '2026-10-15', evidenceIds: ['EM-E04'], note: '桌面端与移动端已归档，模块结论引用桌面端。' },
    { id: 'EM-TP04', type: '流程说明页', sourceType: '官网', title: 'How It Works', url: 'https://every-mother.com/how-it-works/', status: '已采集', accessState: '已访问', capturedAt: '2026-10-15', evidenceIds: ['EM-E05', 'EM-E14'], note: '该页保留了与新版首页不同的旧版模板。' },
    { id: 'EM-TP05', type: '研究证据页', sourceType: '官网', title: 'Evidence', url: 'https://every-mother.com/evidence/', status: '已采集', accessState: '已访问', capturedAt: '2026-10-15', evidenceIds: ['EM-E06'], note: '研究机构、媒体与专家内容的公开页面。' },
    { id: 'EM-TP06', type: '知识文章', sourceType: '官网', title: 'A Guide to Kegel Exercises', url: 'https://every-mother.com/empower/kegel-exercises-guide', status: '已采集', accessState: '已访问', capturedAt: '2026-10-15', evidenceIds: ['EM-E07'], note: '内容模板、摄影与解剖插图均在官方文章中可见。' },
    { id: 'EM-TP07', type: '品牌与团队', sourceType: '官网', title: 'About', url: 'https://every-mother.com/about-us/leah-keller-1/', status: '已采集', accessState: '已访问', capturedAt: '2026-10-15', evidenceIds: ['EM-E08'], note: '愿景、品牌故事、创始人与团队页面。' },
    { id: 'EM-TP08', type: '媒体页', sourceType: '官网', title: 'Press', url: 'https://every-mother.com/press/', status: '已采集', accessState: '已访问', capturedAt: '2026-10-15', evidenceIds: ['EM-E09'], note: '媒体报道卡片和合作方标识的公开集合。' },
    { id: 'EM-TP09', type: 'Apple App Store', sourceType: '应用商店', title: 'Every Mother App', url: 'https://apps.apple.com/us/app/every-mother/id1369750567', status: '无法采集', accessState: '地区重定向', capturedAt: '2026-10-15', evidenceIds: [], accessCapture: './assets/competitors/every-mother/source/app-store-desktop.png', note: '页面在当前环境重定向至本地 App Store Today，不作视觉证据。' },
    { id: 'EM-TP10', type: 'Google Play', sourceType: '应用商店', title: 'Every Mother', url: 'https://play.google.com/store/apps/details?id=com.everymother&hl=en_US', status: '已采集', accessState: '已访问', capturedAt: '2026-10-15', evidenceIds: ['EM-E10'], note: '公开应用列表页、图标、视频帧与应用截图序列。' },
    { id: 'EM-TP11', type: 'Instagram', sourceType: '官方社交媒体', title: '@every_mother', url: 'https://www.instagram.com/every_mother/', status: '部分访问', accessState: '注册墙遮挡', capturedAt: '2026-10-15', evidenceIds: [], accessCapture: './assets/competitors/every-mother/source/instagram-desktop.png', note: '账号链接由官网页尾确认；内容被注册弹层遮挡，未纳入结论。' },
    { id: 'EM-TP12', type: 'YouTube', sourceType: '官方社交媒体', title: 'Every Mother', url: 'https://www.youtube.com/thediamethod', status: '已采集', accessState: '已访问', capturedAt: '2026-10-15', evidenceIds: ['EM-E11'], note: '频道链接由官网页尾确认；频道首屏可公开访问。' },
  ],
  evidence: [
    { id: 'EM-E01', touchpointId: 'EM-TP01', pageTitle: '官网首页 / 首屏', url: 'https://every-mother.com/', capturedAt: '2026-10-15', sourceType: '官网', accessState: '已访问', captureMethod: '自动化浏览器 + 人工视觉核验', viewport: '1440×1800', type: '页面区段', image: './assets/competitors/every-mother/modules/home-hero.png', sourceImage: './assets/competitors/every-mother/source/home-desktop.png', alt: 'Every Mother 官网首页首屏，全大写字标、衬线标题、深青绿按钮和圆角人物影像', annotations: [
      { n: 1, x: 5, y: 3, w: 18, h: 8, label: '导航左侧使用带字距的全大写字标' },
      { n: 2, x: 11, y: 28, w: 37, h: 30, label: '首屏标题使用大尺寸衬线字' },
      { n: 3, x: 11, y: 59, w: 18, h: 13, label: '说明文字与深青绿按钮使用无衬线字' },
      { n: 4, x: 51, y: 27, w: 38, h: 45, label: '运动人物影像置于大圆角容器中' },
    ] },
    { id: 'EM-E02', touchpointId: 'EM-TP01', pageTitle: '官网首页 / 课程分类与证据区', url: 'https://every-mother.com/', capturedAt: '2026-10-15', sourceType: '官网', accessState: '已访问', captureMethod: '自动化浏览器 + 人工视觉核验', viewport: '1440×3200', type: '页面区段', image: './assets/competitors/every-mother/modules/home-programs.png', sourceImage: './assets/competitors/every-mother/source/home-full.png', alt: 'Every Mother 首页八张课程卡片，低饱和色块与无五官线描人物重复出现', annotations: [
      { n: 1, x: 12, y: 10, w: 75, h: 47, label: '八张卡片使用相同的标题、箭头、插画和圆角骨架' },
      { n: 2, x: 16, y: 17, w: 65, h: 32, label: '人物无五官，以细线和身体姿态区分课程' },
      { n: 3, x: 12, y: 10, w: 75, h: 47, label: '陶土、灰绿、灰蓝和灰褐在卡片中循环使用' },
      { n: 4, x: 54, y: 62, w: 28, h: 28, label: '临床证据区改用解剖绘画，与课程人物插画并置' },
    ] },
    { id: 'EM-E03', touchpointId: 'EM-TP02', pageTitle: 'Prenatal / 首屏与优势区', url: 'https://every-mother.com/prenatal', capturedAt: '2026-10-15', sourceType: '官网', accessState: '已访问', captureMethod: '自动化浏览器 + 人工视觉核验', viewport: '1440×1800', type: '页面区段', image: './assets/competitors/every-mother/modules/prenatal-hero.png', sourceImage: './assets/competitors/every-mother/source/prenatal-desktop.png', alt: 'Prenatal 页面的孕妇运动影像、衬线标题、深青绿按钮和浅冷色背景', annotations: [
      { n: 1, x: 12, y: 10, w: 36, h: 44, label: '两位孕期运动人物置于圆角影像容器' },
      { n: 2, x: 51, y: 20, w: 35, h: 26, label: '大尺寸衬线标题与无衬线说明并置' },
      { n: 3, x: 51, y: 45, w: 13, h: 8, label: '深青绿圆角按钮与首页一致' },
      { n: 4, x: 0, y: 4, w: 100, h: 53, label: '整个首屏使用浅冷灰蓝底色' },
    ] },
    { id: 'EM-E04', touchpointId: 'EM-TP03', pageTitle: 'Postpartum Recovery / 首屏与课程信息', url: 'https://every-mother.com/postpartum-recovery', capturedAt: '2026-10-15', sourceType: '官网', accessState: '已访问', captureMethod: '自动化浏览器 + 人工视觉核验', viewport: '1440×1800', type: '页面区段', image: './assets/competitors/every-mother/modules/postpartum-hero.png', sourceImage: './assets/competitors/every-mother/source/postpartum-desktop.png', alt: 'Postpartum Recovery 页面的产后运动场景、衬线标题和浅粉背景', annotations: [
      { n: 1, x: 12, y: 8, w: 34, h: 42, label: '人物与讲师同时出现在居家运动场景' },
      { n: 2, x: 51, y: 18, w: 31, h: 16, label: '首屏标题缩减为简短的衬线语句' },
      { n: 3, x: 0, y: 4, w: 100, h: 48, label: '首屏以浅粉色区分产后项目' },
      { n: 4, x: 12, y: 61, w: 74, h: 28, label: '优势内容使用纵向文字卡和手机界面图' },
    ] },
    { id: 'EM-E05', touchpointId: 'EM-TP04', pageTitle: 'How It Works / 流程与阶段', url: 'https://every-mother.com/how-it-works/', capturedAt: '2026-10-15', sourceType: '官网', accessState: '已访问', captureMethod: '自动化浏览器 + 人工视觉核验', viewport: '1440×1800', type: '页面区段', image: './assets/competitors/every-mother/modules/how-it-works-flow.png', sourceImage: './assets/competitors/every-mother/source/how-it-works-desktop.png', alt: 'How It Works 旧版页面，四步流程图标和三张线描人物课程卡', annotations: [
      { n: 1, x: 10, y: 0, w: 78, h: 10, label: '导航项、按钮轮廓和间距与新版页面不同' },
      { n: 2, x: 13, y: 27, w: 73, h: 23, label: '四个线性图标以箭头连接成流程' },
      { n: 3, x: 10, y: 66, w: 78, h: 31, label: '三张阶段卡重用首页可见的线描人物姿态' },
      { n: 4, x: 35, y: 62, w: 32, h: 8, label: '该模板的正文和卡片标题更多使用衬线字' },
    ] },
    { id: 'EM-E06', touchpointId: 'EM-TP05', pageTitle: 'Evidence / 机构证据与专家证言', url: 'https://every-mother.com/evidence/', capturedAt: '2026-10-15', sourceType: '官网', accessState: '已访问', captureMethod: '自动化浏览器 + 人工视觉核验', viewport: '1440×1800', type: '页面区段', image: './assets/competitors/every-mother/modules/evidence-press.png', sourceImage: './assets/competitors/every-mother/source/evidence-desktop.png', alt: 'Evidence 页面的三列机构与媒体证据，下方为专家证言', annotations: [
      { n: 1, x: 10, y: 10, w: 79, h: 32, label: '三列使用机构标识、衬线标题和长段衬线正文' },
      { n: 2, x: 0, y: 51, w: 100, h: 36, label: '专家证言放在浅暖色区域，包含头像和引语' },
      { n: 3, x: 2, y: 1, w: 96, h: 49, label: '页面整体没有新版官网的大圆角卡片和导航按钮' },
    ] },
    { id: 'EM-E07', touchpointId: 'EM-TP06', pageTitle: 'Kegel Guide / 文章模板', url: 'https://every-mother.com/empower/kegel-exercises-guide', capturedAt: '2026-10-15', sourceType: '官网', accessState: '已访问', captureMethod: '自动化浏览器 + 人工视觉核验', viewport: '1440×1800', type: '页面区段', image: './assets/competitors/every-mother/modules/article-template.png', sourceImage: './assets/competitors/every-mother/source/kegel-guide-desktop-clean.png', alt: 'Kegel Guide 文章页，居中文章标题、圆角头图、无衬线正文和解剖插图', annotations: [
      { n: 1, x: 31, y: 11, w: 39, h: 13, label: '文章标题使用衬线字，日期与返回链接使用无衬线字' },
      { n: 2, x: 20, y: 25, w: 60, h: 40, label: '文章头图使用宽幅大圆角容器' },
      { n: 3, x: 20, y: 67, w: 60, h: 30, label: '正文使用单列宽度与黑色无衬线小标题' },
    ] },
    { id: 'EM-E08', touchpointId: 'EM-TP07', pageTitle: 'About / 愿景与创始人', url: 'https://every-mother.com/about-us/leah-keller-1/', capturedAt: '2026-10-15', sourceType: '官网', accessState: '已访问', captureMethod: '自动化浏览器 + 人工视觉核验', viewport: '1440×1800', type: '页面区段', image: './assets/competitors/every-mother/modules/about-hero.png', sourceImage: './assets/competitors/every-mother/source/about-desktop.png', alt: 'About 页面的母亲与婴儿居家摄影、深青绿愿景区和品牌故事', annotations: [
      { n: 1, x: 5, y: 7, w: 46, h: 45, label: '母亲与婴儿出现在家庭场景中' },
      { n: 2, x: 51, y: 7, w: 44, h: 45, label: '愿景文字使用深青绿大色块和浅色按钮' },
      { n: 3, x: 29, y: 60, w: 43, h: 23, label: '品牌故事使用居中衬线标题和无衬线正文' },
    ] },
    { id: 'EM-E09', touchpointId: 'EM-TP08', pageTitle: 'Press / 媒体报道', url: 'https://every-mother.com/press/', capturedAt: '2026-10-15', sourceType: '官网', accessState: '已访问', captureMethod: '自动化浏览器 + 人工视觉核验', viewport: '1440×1800', type: '页面区段', image: './assets/competitors/every-mother/modules/press-grid.png', sourceImage: './assets/competitors/every-mother/source/press-desktop.png', alt: 'Press 页面的逆光户外影像、深青绿分隔带与六张媒体卡片', annotations: [
      { n: 1, x: 0, y: 7, w: 100, h: 26, label: '头图为高亮逆光户外人物摄影' },
      { n: 2, x: 0, y: 33, w: 100, h: 7, label: '深青绿水平分隔带与三角指示形同时出现' },
      { n: 3, x: 7, y: 48, w: 85, h: 45, label: '六张卡片重复衬线标题与合作媒体标识' },
    ] },
    { id: 'EM-E10', touchpointId: 'EM-TP10', pageTitle: 'Google Play / 应用列表', url: 'https://play.google.com/store/apps/details?id=com.everymother&hl=en_US', capturedAt: '2026-10-15', sourceType: '应用商店', accessState: '已访问', captureMethod: '自动化浏览器 + 人工视觉核验', viewport: '1440×1800', type: '公开应用页', image: './assets/competitors/every-mother/modules/app-store-listing.png', sourceImage: './assets/competitors/every-mother/source/google-play-desktop.png', alt: 'Google Play Every Mother 应用页，EM 字母图标、运动人物视频帧和一组应用推广截图', annotations: [
      { n: 1, x: 3, y: 35, w: 25, h: 25, label: '应用图标使用浅底与细线 EM 字母签名' },
      { n: 2, x: 47, y: 5, w: 47, h: 60, label: '头部视频帧使用人物运动近景' },
      { n: 3, x: 3, y: 74, w: 62, h: 24, label: '商店截图重复浅色底、深青绿文字、摄影和手机界面' },
    ] },
    { id: 'EM-E11', touchpointId: 'EM-TP12', pageTitle: 'YouTube / 官方频道', url: 'https://www.youtube.com/thediamethod', capturedAt: '2026-10-15', sourceType: '官方社交媒体', accessState: '已访问', captureMethod: '自动化浏览器 + 人工视觉核验', viewport: '1440×1800', type: '频道首屏', image: './assets/competitors/every-mother/modules/youtube-channel.png', sourceImage: './assets/competitors/every-mother/source/youtube-desktop.png', alt: 'Every Mother YouTube 频道，EM 圆形头像、运动人物横幅、低饱和片头与真人视频缩略图', annotations: [
      { n: 1, x: 20, y: 20, w: 12, h: 22, label: '频道头像使用深青绿圆底与浅色 EM 字母' },
      { n: 2, x: 20, y: 3, w: 77, h: 20, label: '频道横幅使用居家运动人物的横向裁切' },
      { n: 3, x: 20, y: 54, w: 78, h: 20, label: '长视频区同时使用低饱和色标题卡与真人训练画面' },
      { n: 4, x: 20, y: 80, w: 62, h: 18, label: 'Shorts 缩略图主要为人物对镜讲述与居家运动纪录' },
    ] },
    { id: 'EM-E12', touchpointId: 'EM-TP01', pageTitle: '官网首页 / 390px 移动端', url: 'https://every-mother.com/', capturedAt: '2026-10-15', sourceType: '官网', accessState: '已访问', captureMethod: '自动化浏览器 + 人工视觉核验', viewport: '390×844', type: '移动端首屏', image: './assets/competitors/every-mother/source/home-mobile-clean.png', sourceImage: './assets/competitors/every-mother/source/home-mobile-clean.png', alt: 'Every Mother 首页 390px 视口，右侧导航按钮、横幅和部分标题超出截图右缘', annotations: [
      { n: 1, x: 0, y: 0, w: 100, h: 13, label: '字标完整显示，右侧操作按钮被视口裁切' },
      { n: 2, x: 11, y: 20, w: 89, h: 33, label: '首屏标题与正文右侧超出 390px 截图边界' },
      { n: 3, x: 11, y: 58, w: 89, h: 38, label: '影像移至文字下方，但右侧内容仍未完整进入视口' },
    ] },
    { id: 'EM-E13', touchpointId: 'EM-TP02', pageTitle: 'Prenatal / 390px 移动端', url: 'https://every-mother.com/prenatal', capturedAt: '2026-10-15', sourceType: '官网', accessState: '已访问', captureMethod: '自动化浏览器 + 人工视觉核验', viewport: '390×844', type: '移动端首屏', image: './assets/competitors/every-mother/source/prenatal-mobile-clean.png', sourceImage: './assets/competitors/every-mother/source/prenatal-mobile-clean.png', alt: 'Prenatal 390px 视口，影像在上、文字在下，文字右侧超出截图范围', annotations: [
      { n: 1, x: 12, y: 16, w: 88, h: 48, label: '桌面端左右分栏在移动端改为影像在上、文字在下' },
      { n: 2, x: 10, y: 69, w: 90, h: 27, label: '标题和说明文字右侧超出 390px 截图边界' },
    ] },
    { id: 'EM-E14', touchpointId: 'EM-TP04', pageTitle: 'How It Works / 390px 移动端', url: 'https://every-mother.com/how-it-works/', capturedAt: '2026-10-15', sourceType: '官网', accessState: '已访问', captureMethod: '自动化浏览器 + 人工视觉核验', viewport: '390×844', type: '移动端流程区', image: './assets/competitors/every-mother/source/how-it-works-mobile.png', sourceImage: './assets/competitors/every-mother/source/how-it-works-mobile.png', alt: 'How It Works 390px 视口，四步流程改为两行，右侧图标和文字被截图边界裁切', annotations: [
      { n: 1, x: 12, y: 27, w: 88, h: 24, label: '前两个步骤位于第一行，右侧步骤内容未完整进入视口' },
      { n: 2, x: 12, y: 58, w: 88, h: 32, label: '后两个步骤位于第二行，仍存在水平裁切' },
    ] },
  ],
  modules: [
    { id: 'logo', status: '规律', keywords: ['全大写字标', 'EM 字母标'], conclusion: '官网多页稳定使用全大写字标；应用商店与 YouTube 改用 EM 字母标。', evidenceIds: ['EM-E01', 'EM-E03', 'EM-E08', 'EM-E10', 'EM-E11'], claims: [
      { type: '事实', text: '首页、Prenatal 与 About 导航左侧均出现带字距的全大写 EVERY MOTHER。', evidenceIds: ['EM-E01', 'EM-E03', 'EM-E08'] },
      { type: '事实', text: 'Google Play 与 YouTube 均使用 EM 字母标，但底色和容器形状不同。', evidenceIds: ['EM-E10', 'EM-E11'] },
      { type: '规律', text: '官网与应用/社交触点使用两类标识形式：全称字标与 EM 字母标。', evidenceIds: ['EM-E01', 'EM-E03', 'EM-E08', 'EM-E10', 'EM-E11'] },
    ], limitation: '未观察到公开的最小尺寸、安全空间、单色版或联名锁定规则。' },
    { id: 'color', status: '规律', keywords: ['深青绿', '低饱和浅色'], conclusion: '深青绿跨页用于行动按钮和识别底色；项目与内容区使用浅粉、灰蓝、灰绿和米色。', evidenceIds: ['EM-E01', 'EM-E02', 'EM-E03', 'EM-E04', 'EM-E08', 'EM-E11'], claims: [
      { type: '事实', text: '首页、Prenatal 与 Postpartum 的主行动按钮都使用深青绿。', evidenceIds: ['EM-E01', 'EM-E03', 'EM-E04'] },
      { type: '事实', text: '课程卡、项目首屏和 YouTube 标题卡使用低饱和陶土、灰绿、灰蓝、浅粉与米色。', evidenceIds: ['EM-E02', 'EM-E03', 'EM-E04', 'EM-E11'] },
      { type: '规律', text: '深青绿承担主要操作和频道识别，低饱和浅色承担项目、阶段和内容分区。', evidenceIds: ['EM-E01', 'EM-E02', 'EM-E03', 'EM-E04', 'EM-E08', 'EM-E11'] },
    ], limitation: '截图不提供准确色值，也未测量对比度与可访问性。' },
    { id: 'type', status: '规律', keywords: ['衬线展示字', '无衬线界面字'], conclusion: '衬线字用于高层级标题，无衬线字用于导航、按钮和多数说明；旧版页面的衬线正文比例更高。', evidenceIds: ['EM-E01', 'EM-E03', 'EM-E05', 'EM-E06', 'EM-E07', 'EM-E08'], claims: [
      { type: '事实', text: '首页、Prenatal、文章与 About 均使用衬线大标题和无衬线导航。', evidenceIds: ['EM-E01', 'EM-E03', 'EM-E07', 'EM-E08'] },
      { type: '事实', text: 'How It Works 和 Evidence 页面的步骤文字或长段正文更多使用衬线字。', evidenceIds: ['EM-E05', 'EM-E06'] },
      { type: '规律', text: '“衬线展示字＋无衬线界面字”跨多个官网触点重复，但正文分配存在新旧模板差异。', evidenceIds: ['EM-E01', 'EM-E03', 'EM-E05', 'EM-E06', 'EM-E07', 'EM-E08'] },
    ], limitation: '未获得字体文件或公开规范，不确认字体名称、字重或数字样式。' },
    { id: 'graphics', status: '规律', keywords: ['线性图标', '流程箭头'], conclusion: '首页功能说明与 How It Works 流程都使用线性图标，但两页的线宽和细节不完全相同。', evidenceIds: ['EM-E01', 'EM-E05'], claims: [
      { type: '事实', text: '首页的证据、结果、设备与人物图标使用深青绿线条。', evidenceIds: ['EM-E01'] },
      { type: '事实', text: 'How It Works 使用人物、表单、视频与循环图标，并以细箭头连接。', evidenceIds: ['EM-E05'] },
      { type: '规律', text: '线性图标是官网解释功能和流程时重复出现的图形手段。', evidenceIds: ['EM-E01', 'EM-E05'] },
    ], limitation: '两个页面的图标时代和线宽有差异，不能确认为同一套可复用图标库。' },
    { id: 'illustration', status: '规律', keywords: ['无五官人物', '身体姿态', '解剖绘画'], conclusion: '无五官线描人物在首页与 How It Works 重复出现；临床内容另用解剖绘画。', evidenceIds: ['EM-E02', 'EM-E05', 'EM-E07'], claims: [
      { type: '事实', text: '首页八张课程卡使用无五官、细线和不同身体姿态。', evidenceIds: ['EM-E02'] },
      { type: '事实', text: 'How It Works 的三张阶段卡重用了相同的坐姿人物图形。', evidenceIds: ['EM-E05'] },
      { type: '事实', text: 'Kegel 文章使用具体的骨盆和肌肉解剖插图。', evidenceIds: ['EM-E07'] },
      { type: '规律', text: '课程分类用抽象人物，解剖知识用具体医学绘画，两种图像在官方内容中并行。', evidenceIds: ['EM-E02', 'EM-E05', 'EM-E07'] },
    ], limitation: '未观察到插画线宽、比例、肤色或全部角色库的公开规则。' },
    { id: 'photo', status: '规律', keywords: ['真实人物', '居家运动', '阶段场景'], conclusion: '首页、项目页、About 与 YouTube 均以真实女性为主体，场景主要是居家运动、孕期和产后。', evidenceIds: ['EM-E01', 'EM-E03', 'EM-E04', 'EM-E08', 'EM-E09', 'EM-E10', 'EM-E11'], claims: [
      { type: '事实', text: '首页、Prenatal 和 Postpartum 首屏均使用居家空间中的运动人物。', evidenceIds: ['EM-E01', 'EM-E03', 'EM-E04'] },
      { type: '事实', text: 'About 使用母亲与婴儿的家庭场景；Press 首图则使用高亮户外影像。', evidenceIds: ['EM-E08', 'EM-E09'] },
      { type: '规律', text: '女性人物、运动或母婴生活场景跨官网、应用商店和视频频道重复出现。', evidenceIds: ['EM-E01', 'EM-E03', 'EM-E04', 'EM-E08', 'EM-E10', 'EM-E11'] },
    ], limitation: '未取得原始影片与摄影指南，不推断镜头、光比、调色或模特选择标准。' },
    { id: 'layout', status: '规律', keywords: ['左右首屏', '卡片网格', '移动端溢出'], conclusion: '新版网页在桌面端重复使用左右首屏和大圆角容器；390px 截图中多处右侧内容未完整进入视口。', evidenceIds: ['EM-E01', 'EM-E02', 'EM-E03', 'EM-E04', 'EM-E07', 'EM-E12', 'EM-E13', 'EM-E14'], claims: [
      { type: '事实', text: '首页、Prenatal 与 Postpartum 桌面端首屏都是图文左右分栏。', evidenceIds: ['EM-E01', 'EM-E03', 'EM-E04'] },
      { type: '事实', text: '首页课程分类为两行四列卡片，Kegel 文章为单列阅读宽度。', evidenceIds: ['EM-E02', 'EM-E07'] },
      { type: '事实', text: '首页、Prenatal 和 How It Works 的 390px 截图都有文字、按钮或流程内容超出右缘。', evidenceIds: ['EM-E12', 'EM-E13', 'EM-E14'] },
      { type: '规律', text: '新版项目页共享桌面端图文首屏模板；本轮三个 390px 样本均观察到水平内容溢出。', evidenceIds: ['EM-E01', 'EM-E03', 'EM-E04', 'EM-E12', 'EM-E13', 'EM-E14'] },
    ], limitation: '未覆盖平板、更小屏幕或用户缩放情况；截图只证明本次采集环境的可见结果。' },
    { id: 'motion', status: '未观察到', keywords: ['未观察到'], conclusion: '未录制或验证足够的转场、轮播、视频播放与微交互时序。', evidenceIds: [], claims: [], limitation: '页面中可见轮播和视频入口，但静态截图不能证明其动效规则。' },
    { id: 'data-state', status: '单点现象', keywords: ['手机界面', '底部导航'], conclusion: 'Google Play 公开素材显示了手机界面和底部导航，但尺寸不足以判断进度、完成或错误状态。', evidenceIds: ['EM-E10'], claims: [
      { type: '事实', text: '商店第三张素材中可见手机界面、视频卡和底部导航栏。', evidenceIds: ['EM-E10'] },
    ], limitation: '未安装或登录 App，应用商店缩略图不足以建立数据与功能状态系统。' },
    { id: 'content-template', status: '规律', keywords: ['项目首屏模板', '课程卡', '文章单列'], conclusion: 'Prenatal 与 Postpartum 共用图文首屏和优势模块；课程分类与知识文章另有固定骨架。', evidenceIds: ['EM-E02', 'EM-E03', 'EM-E04', 'EM-E07'], claims: [
      { type: '事实', text: 'Prenatal 与 Postpartum 均包含图文首屏、行动按钮、优势列表和手机界面图。', evidenceIds: ['EM-E03', 'EM-E04'] },
      { type: '事实', text: '首页八张课程卡重复标题、箭头、人物插画和分类底色。', evidenceIds: ['EM-E02'] },
      { type: '事实', text: 'Kegel 文章重复文章标题、日期、大头图、分级小标题和单列正文。', evidenceIds: ['EM-E07'] },
      { type: '规律', text: '项目页、课程分类与知识文章各自使用稳定的内容骨架。', evidenceIds: ['EM-E02', 'EM-E03', 'EM-E04', 'EM-E07'] },
    ], limitation: '未覆盖登录后的课程详情、课程封面全集和消息通知模板。' },
    { id: 'campaign', status: '局部模式', keywords: ['EM 头像', '低饱和片头', '真人缩略图'], conclusion: 'YouTube 频道以 EM 头像和运动横幅统一频道首屏，内容缩略图在低饱和标题卡与真人画面之间变化。', evidenceIds: ['EM-E11'], claims: [
      { type: '事实', text: '频道头像使用 EM 字母标，横幅使用居家运动人物摄影。', evidenceIds: ['EM-E11'] },
      { type: '规律', text: '同一频道内，产品与支持类长视频使用低饱和标题卡，训练和 Shorts 主要使用真人画面。', evidenceIds: ['EM-E11'] },
    ], limitation: 'Instagram 被注册墙遮挡，未观察到可与 YouTube 交叉验证的社交模板；未采集官方联名 Campaign。' },
    { id: 'consistency', status: '规律', keywords: ['标志延续', '色彩延续', '新旧模板并存'], conclusion: '字标、EM 字母标、深青绿和衬线/无衬线分工跨触点重复；How It Works、Evidence、About 与 Press 保留与新版项目页不同的模板细节。', evidenceIds: ['EM-E01', 'EM-E03', 'EM-E04', 'EM-E05', 'EM-E06', 'EM-E08', 'EM-E09', 'EM-E10', 'EM-E11'], claims: [
      { type: '事实', text: '全大写字标在多个官网页头重复，EM 字母标在应用商店与 YouTube 重复。', evidenceIds: ['EM-E01', 'EM-E03', 'EM-E08', 'EM-E10', 'EM-E11'] },
      { type: '事实', text: 'How It Works、Evidence、About 与 Press 使用了与新版首页、Prenatal、Postpartum 不同的导航密度、按钮轮廓和正文排版。', evidenceIds: ['EM-E01', 'EM-E03', 'EM-E04', 'EM-E05', 'EM-E06', 'EM-E08', 'EM-E09'] },
      { type: '规律', text: '识别层的字标、EM 字母标和深青绿跨官网、应用商店和视频频道延续；网页模板层明显并存新旧两组表现。', evidenceIds: ['EM-E01', 'EM-E03', 'EM-E04', 'EM-E05', 'EM-E06', 'EM-E08', 'EM-E09', 'EM-E10', 'EM-E11'] },
    ], limitation: '没有公开发布日期证明各模板的先后关系，“新版/旧版”只用于描述本轮观察到的两组页面形态。' },
  ],
  summary: [
    { keywords: ['字标', 'EM 字母标'], sentence: '官网使用全称字标，应用商店与 YouTube 使用 EM 字母标。', moduleId: 'logo', evidenceIds: ['EM-E01', 'EM-E03', 'EM-E08', 'EM-E10', 'EM-E11'] },
    { keywords: ['深青绿', '低饱和浅色'], sentence: '深青绿承担主操作与部分识别，浅粉、灰蓝、灰绿和米色区分项目与内容。', moduleId: 'color', evidenceIds: ['EM-E01', 'EM-E02', 'EM-E03', 'EM-E04', 'EM-E11'] },
    { keywords: ['衬线展示字', '无衬线界面字'], sentence: '衬线标题与无衬线界面文字跨页重复，旧版页面的衬线正文比例更高。', moduleId: 'type', evidenceIds: ['EM-E01', 'EM-E03', 'EM-E05', 'EM-E06', 'EM-E07'] },
    { keywords: ['无五官线描', '解剖绘画'], sentence: '课程分类用抽象人物，解剖内容用具体医学绘画。', moduleId: 'illustration', evidenceIds: ['EM-E02', 'EM-E05', 'EM-E07'] },
    { keywords: ['新旧模板并存'], sentence: '标志和色彩跨触点延续，但官网的导航、按钮、正文和移动端表现并非全部一致。', moduleId: 'consistency', evidenceIds: ['EM-E01', 'EM-E03', 'EM-E05', 'EM-E06', 'EM-E08', 'EM-E09'] },
  ],
  crossTouchpointPatterns: [
    { keywords: ['全称 / 字母标'], sentence: '官网重复使用 EVERY MOTHER 全称字标，应用商店和 YouTube 重复使用 EM 字母标。', evidenceIds: ['EM-E01', 'EM-E03', 'EM-E08', 'EM-E10', 'EM-E11'], variation: '字母标在 Google Play 为浅底方形，在 YouTube 为深青绿圆形。' },
    { keywords: ['深青绿', '操作层'], sentence: '深青绿在多个官网页面承担主按钮、横幅或大色块。', evidenceIds: ['EM-E01', 'EM-E03', 'EM-E04', 'EM-E08', 'EM-E09'], variation: '不同项目的大面积辅助底色在浅蓝、浅粉、米色之间变化。' },
    { keywords: ['衬线标题', '无衬线操作'], sentence: '衬线展示标题和无衬线导航/按钮在多个官网触点重复。', evidenceIds: ['EM-E01', 'EM-E03', 'EM-E05', 'EM-E07', 'EM-E08'], variation: 'How It Works 和 Evidence 的衬线正文比例高于新版首页与项目页。' },
    { keywords: ['同图复用', '姿态插画'], sentence: '同类无五官坐姿人物在首页课程卡和 How It Works 阶段卡中重复。', evidenceIds: ['EM-E02', 'EM-E05'], variation: '首页使用大圆角卡片和无衬线课程名，How It Works 使用旧版方形卡和衬线项目名。' },
  ],
};

const pendingBrands = ['MUTU System', 'The Bloom Method', 'Get Mom Strong', 'MamasteFit', 'Nourish Move Love', 'Expectful', 'The Sculpt Society'];
const evidenceMap = Object.fromEntries(everyMotherResearch.evidence.map((item) => [item.id, item]));
const tabs = [...document.querySelectorAll('[data-tab]')];
const panels = [...document.querySelectorAll('[data-panel]')];
const subTabs = [...document.querySelectorAll('[data-subtab]')];
const subPanels = [...document.querySelectorAll('[data-subpanel]')];
const strategyTabs = [...document.querySelectorAll('[data-strategy-subtab]')];
const strategyPanels = [...document.querySelectorAll('[data-strategy-subpanel]')];
const viewTitle = document.querySelector('#viewTitle');
const visualDetailNav = document.querySelector('#visualDetailNav');
const researchSectionNav = document.querySelector('#researchSectionNav');
const caseDetail = document.querySelector('#caseDetail');
const modal = document.querySelector('#imageModal');
const modalImage = modal.querySelector('img');
const modalTitle = document.querySelector('#modalTitle');
const modalClose = modal.querySelector('.modal-close');
let activeView = 'home';
let activeVisualView = 'framework';
let activeStrategyView = 'handoff';

function setTab(name, updateUrl = true) {
  if (!views[name]) name = 'home'; activeView = name;
  tabs.forEach((tab) => { const active = tab.dataset.tab === name; tab.classList.toggle('is-active', active); tab.setAttribute('aria-selected', String(active)); tab.tabIndex = active ? 0 : -1; });
  panels.forEach((panel) => { const active = panel.dataset.panel === name; panel.hidden = !active; panel.classList.toggle('is-active', active); });
  if (name === 'visual') viewTitle.textContent = `${views[name]} / ${visualViews[activeVisualView]}`;
  else if (name === 'strategy') viewTitle.textContent = `${views[name]} / ${strategyViews[activeStrategyView]}`;
  else viewTitle.textContent = views[name];
  if (name === 'visual' && activeVisualView === 'competitor') renderResearch();
  if (updateUrl) history.replaceState(null, '', `#${name}`);
}
function setStrategyTab(name) {
  if (!strategyViews[name]) name = 'handoff'; activeStrategyView = name;
  strategyTabs.forEach((tab) => { const active = tab.dataset.strategySubtab === name; tab.classList.toggle('is-active', active); tab.setAttribute('aria-selected', String(active)); });
  strategyPanels.forEach((panel) => { const active = panel.dataset.strategySubpanel === name; panel.hidden = !active; panel.classList.toggle('is-active', active); });
  if (activeView === 'strategy') viewTitle.textContent = `${views.strategy} / ${strategyViews[name]}`;
}
function setVisualTab(name) {
  if (!visualViews[name]) name = 'framework'; activeVisualView = name;
  subTabs.forEach((tab) => { const active = tab.dataset.subtab === name; tab.classList.toggle('is-active', active); tab.setAttribute('aria-selected', String(active)); });
  subPanels.forEach((panel) => { const active = panel.dataset.subpanel === name; panel.hidden = !active; panel.classList.toggle('is-active', active); });
  visualDetailNav.hidden = name !== 'competitor';
  if (activeView === 'visual') viewTitle.textContent = `${views.visual} / ${visualViews[name]}`;
  if (name === 'competitor') renderResearch();
}
function statusClass(status) { return { '未观察到': 'is-unobserved', '单点现象': 'is-single', '局部模式': 'is-local', '页面内模式': 'is-local', '规律': 'is-pattern' }[status] || ''; }
function touchpointClass(item) {
  if (item.status === '已采集') return 'is-collected';
  if (item.status === '部分访问') return 'is-partial';
  if (item.status === '无法采集') return 'is-blocked';
  return '';
}

function renderEvidence(id, moduleId) {
  const item = evidenceMap[id]; if (!item) return '';
  return `<article class="research-evidence" id="${moduleId}-evidence-${item.id}">
    <header><div><span>${item.id} · ${item.type}</span><h4>${item.pageTitle}</h4></div><span class="evidence-touchpoint">${item.touchpointId}</span></header>
    <div class="evidence-media"><button class="evidence-figure" data-open-image="${item.image}" data-image-alt="${item.alt}" data-image-title="${item.id} / ${item.pageTitle}" aria-label="打开 ${item.id} 高清截图">
      <img src="${item.image}" alt="${item.alt}" /><span class="annotation-layer" aria-hidden="true">${item.annotations.map((a) => `<i class="evidence-annotation" style="left:${a.x}%;top:${a.y}%;width:${a.w}%;height:${a.h}%"><b>${a.n}</b></i>`).join('')}</span><span class="zoom-hint">VIEW FULL ↗</span>
    </button><div class="evidence-meta"><button type="button" data-toggle-annotations aria-pressed="true">隐藏标注</button><span>${item.sourceType} · ${item.viewport}</span><span>截图日期 ${item.capturedAt}</span><button type="button" data-open-image="${item.sourceImage}" data-image-alt="${item.alt}" data-image-title="${item.id} / 原始完整截图">完整截图 ↗</button><a href="${item.url}" target="_blank" rel="noreferrer">原始页面 ↗</a></div>
    <ol class="annotation-notes">${item.annotations.map((a) => `<li><b>${a.n}</b><span>${a.label}</span></li>`).join('')}</ol></div></article>`;
}
function renderClaims(module) {
  if (!module.claims.length) return '<p class="no-claim">没有足够证据，不补写推测。</p>';
  return `<div class="claim-list">${module.claims.map((claim) => `<div class="claim-item claim-${claim.type}"><span>${claim.type}</span><p>${claim.text}</p><div>${claim.evidenceIds.map((id) => `<a href="#${module.id}-evidence-${id}">${id}</a>`).join('')}</div></div>`).join('')}</div>`;
}
function renderModule(module) {
  const def = moduleMap[module.id];
  return `<details class="research-module ${statusClass(module.status)}" id="module-${module.id}" ${module.status !== '未观察到' ? 'open' : ''}>
    <summary><span class="module-number">${def.number}</span><div><small>${def.group}</small><h3>${def.name}</h3></div><span class="module-status">${module.status}</span></summary>
    <div class="module-body"><div class="module-conclusion"><div class="keyword-row">${module.keywords.map((k) => `<span>${k}</span>`).join('')}</div><p>${module.conclusion}</p></div>${renderClaims(module)}
      ${module.evidenceIds.length ? `<div class="module-evidence-grid">${module.evidenceIds.map((id) => renderEvidence(id, module.id)).join('')}</div>` : ''}<div class="module-limit"><span>LIMIT / 限制</span><p>${module.limitation}</p></div></div>
  </details>`;
}

function renderResearch() {
  const data = everyMotherResearch;
  const nav = [['research-top','研究说明'],['research-summary','结论摘要'],['research-coverage','12 模块覆盖'],['research-evidence','模块证据'],['research-cross','跨触点规律'],['research-limits','研究限制'],['research-queue','待研究品牌']];
  researchSectionNav.innerHTML = nav.map(([id,label],i) => `<a href="#${id}"><b>${String(i+1).padStart(2,'0')}</b><span>${label}</span></a>`).join('');
  caseDetail.innerHTML = `
  <section class="research-hero" id="research-top"><div class="research-hero-copy"><div class="case-tags"><span>OFFICIAL SOURCES ONLY</span><span>ACTIVE BROWSER RESEARCH</span><span>NO SCORING</span></div><span class="case-index">SAMPLE 01 / VISUAL STRATEGY RESEARCH</span><h1>${data.researchScope.brand}</h1><p>${data.researchScope.scopeStatement}事实、规律与推论分别标记；证据不足的模块保持“未观察到”。</p><a class="case-site-link" href="${data.researchScope.officialUrl}" target="_blank" rel="noreferrer"><span>${data.researchScope.domain}</span><span>OPEN OFFICIAL SITE ↗</span></a></div>
    <div class="research-scope-card"><span>RESEARCH SCOPE</span><dl><div><dt>研究日期</dt><dd>${data.researchScope.researchedAt}</dd></div><div><dt>正式触点</dt><dd>${data.researchScope.coveredTouchpointIds.length} 个</dd></div><div><dt>正式证据</dt><dd>${data.evidence.length} 条</dd></div><div><dt>来源规则</dt><dd>${data.researchScope.sourcePolicy}</dd></div></dl></div></section>
  <section class="research-section touchpoint-section"><header><span>01 / SCOPE</span><h2>研究说明</h2><p>已采集、部分访问和受限触点同时列出。受限页面不进入视觉结论。</p></header><div class="touchpoint-list">${data.touchpoints.map((item) => `<article class="${touchpointClass(item)}"><span>${item.id} · ${item.sourceType}</span><strong>${item.type}</strong><em>${item.status} · ${item.accessState}</em><p>${item.note}</p><div class="touchpoint-links">${item.accessCapture?`<button type="button" data-open-image="${item.accessCapture}" data-image-alt="${item.type} 访问限制截图" data-image-title="${item.id} / 访问状态">ACCESS CAPTURE ↗</button>`:''}${item.url?`<a href="${item.url}" target="_blank" rel="noreferrer">SOURCE ↗</a>`:'<small>NO SOURCE CAPTURED</small>'}</div></article>`).join('')}</div></section>
  <section class="research-section" id="research-summary"><header><span>02 / VERIFIED SUMMARY</span><h2>结论摘要</h2><p>每条摘要都来自下方已标注结论；点击卡片可定位模块。</p></header><div class="research-summary-grid">${data.summary.map((item,i) => `<a href="#module-${item.moduleId}"><b>${String(i+1).padStart(2,'0')}</b><div class="keyword-row">${item.keywords.map((k)=>`<span>${k}</span>`).join('')}</div><p>${item.sentence}</p><small>${item.evidenceIds.join(' · ')}</small></a>`).join('')}</div></section>
  <section class="research-section" id="research-coverage"><header><span>03 / SYSTEM COVERAGE</span><h2>视觉系统覆盖图</h2><p>这是证据状态，不是评分。局部模式只代表同一页面内重复，单点现象只代表一次出现。</p></header><div class="coverage-groups">${visualSystemGroups.map((group)=>`<article><header><b>${group.number}</b><span>${group.name}</span></header><div>${group.moduleIds.map((id)=>{const m=data.modules.find(x=>x.id===id);return `<a href="#module-${id}" class="${statusClass(m.status)}"><b>${moduleMap[id].number}</b><span>${moduleMap[id].name}</span><em>${m.status}</em></a>`;}).join('')}</div></article>`).join('')}</div></section>
  <section class="research-section" id="research-evidence"><header><span>04 / MODULE EVIDENCE</span><h2>模块证据</h2><p>12 个模块按视觉系统分组。打开模块查看事实、规律、推论、截图与限制。</p></header><div class="module-groups">${visualSystemGroups.map((group)=>`<section class="module-group"><div class="module-group-title"><b>${group.number}</b><h3>${group.name}</h3></div><div>${group.moduleIds.map((id)=>renderModule(data.modules.find((m)=>m.id===id))).join('')}</div></section>`).join('')}</div></section>
  <section class="research-section" id="research-cross"><header><span>05 / CROSS-TOUCHPOINT</span><h2>跨触点规律</h2><p>以下规律均由至少两个不同官方触点支持；同时列出变化或不一致之处。</p></header><div class="cross-pattern-grid">${data.crossTouchpointPatterns.map((item,i)=>`<article><b>${String(i+1).padStart(2,'0')}</b><div class="keyword-row">${item.keywords.map((k)=>`<span>${k}</span>`).join('')}</div><h3>${item.sentence}</h3><p><strong>VARIATION / 变化</strong>${item.variation}</p><small>${item.evidenceIds.join(' · ')}</small></article>`).join('')}</div></section>
  <section class="research-section" id="research-limits"><header><span>06 / LIMITATIONS</span><h2>研究限制</h2><p>以下缺口限制了当前结论范围。</p></header><ol class="research-limit-list">${data.researchScope.limitations.map((item)=>`<li>${item}</li>`).join('')}</ol></section>
  <section class="research-section" id="research-queue"><header><span>07 / NEXT STUDIES</span><h2>其他品牌</h2><p>以下品牌保留在研究队列，但没有使用未经充分验证的旧分析。</p></header><div class="pending-brand-grid">${pendingBrands.map((brand,i)=>`<article><span>${String(i+2).padStart(2,'0')}</span><strong>${brand}</strong><em>待使用同一方法研究</em></article>`).join('')}</div><p class="matrix-hold-note">对比矩阵与机会判断已暂时隐藏；至少完成三个品牌并通过同一证据标准后再恢复。</p></section>`;
}

tabs.forEach((tab,index)=>{ tab.addEventListener('click',()=>setTab(tab.dataset.tab)); tab.addEventListener('keydown',(event)=>{if(!['ArrowLeft','ArrowRight'].includes(event.key))return;event.preventDefault();const direction=event.key==='ArrowRight'?1:-1;const next=tabs[(index+direction+tabs.length)%tabs.length];next.focus();setTab(next.dataset.tab);}); });
subTabs.forEach((tab)=>tab.addEventListener('click',()=>setVisualTab(tab.dataset.subtab)));
strategyTabs.forEach((tab)=>tab.addEventListener('click',()=>setStrategyTab(tab.dataset.strategySubtab)));
document.querySelectorAll('[data-visual-open]').forEach((control)=>control.addEventListener('click',()=>setVisualTab(control.dataset.visualOpen)));
document.querySelectorAll('[data-strategy-open]').forEach((control)=>control.addEventListener('click',()=>setStrategyTab(control.dataset.strategyOpen)));
document.querySelectorAll('[data-open-tab]').forEach((control)=>control.addEventListener('click',(event)=>{event.preventDefault();setTab(control.dataset.openTab);}));
caseDetail.addEventListener('click',(event)=>{const toggle=event.target.closest('[data-toggle-annotations]');if(toggle){const card=toggle.closest('.research-evidence');const hidden=card.classList.toggle('is-annotations-hidden');toggle.setAttribute('aria-pressed',String(!hidden));toggle.textContent=hidden?'显示标注':'隐藏标注';return;}const button=event.target.closest('[data-open-image]');if(!button)return;modalImage.src=button.dataset.openImage;modalImage.alt=button.dataset.imageAlt;modalTitle.textContent=`${button.dataset.imageTitle} / WEBSITE SCREEN`;modal.showModal();});
modalClose.addEventListener('click',()=>modal.close()); modal.addEventListener('click',(event)=>{if(event.target===modal)modal.close();});
window.addEventListener('hashchange',()=>{const hash=location.hash.slice(1);if(!views[hash]&&!legacyHashes[hash])return;if(['cases','landscape','matrix','opportunity'].includes(hash))activeVisualView='competitor';setVisualTab(activeVisualView);setTab(legacyHashes[hash]??hash,false);});
const initialHash=location.hash.slice(1);const isResearchHash=initialHash.startsWith('research-')||initialHash.startsWith('module-')||initialHash.includes('-evidence-');if(['cases','landscape','matrix','opportunity'].includes(initialHash)||isResearchHash)activeVisualView='competitor';setVisualTab(activeVisualView);setStrategyTab(activeStrategyView);setTab(isResearchHash?'visual':((legacyHashes[initialHash]??initialHash)||'home'),false);renderResearch();
