const views = {
  home: 'Momcozy 学院设计策略 / 首页',
  strategy: 'Momcozy 学院设计策略 / 战略承接',
  brand: 'Momcozy 学院设计策略 / 品牌策略',
  visual: 'Momcozy 学院设计策略 / 视觉策略',
  identity: 'Momcozy 学院设计策略 / 视觉系统',
  content: 'Momcozy 学院设计策略 / 内容系统',
  digital: 'Momcozy 学院设计策略 / 数字体验',
  applications: 'Momcozy 学院设计策略 / 应用验证',
  assets: 'Momcozy 学院设计策略 / 资产规范',
};

const visualViews = {
  framework: '策略框架',
  competitor: '竞品案例',
  matrix: '对比矩阵',
  opportunity: '机会判断',
  keywords: '视觉关键词',
  directions: '创意路线',
};

const strategyViews = {
  handoff: '战略输入',
  'source-summary': '内容组品牌线索',
};

const legacyHashes = {
  top: 'home',
  overview: 'home',
  'source-strategy': 'strategy',
  landscape: 'visual',
  cases: 'visual',
  matrix: 'visual',
  opportunity: 'visual',
};

const cases = [
  {
    id: 'every-mother',
    number: '01',
    name: 'Every Mother',
    category: 'direct',
    categoryLabel: 'DIRECT',
    descriptor: 'CLINICAL / PLATFORM',
    tags: ['DIRECT', 'CLINICAL', 'PLATFORM'],
    image: './assets/competitors/every-mother.jpg',
    alt: 'Every Mother 官网首页截图',
    url: 'https://every-mother.com/',
    domain: 'every-mother.com',
    thesis: '专业可信感最完整：把临床证据做成品牌的第一视觉层。',
    visual: '大留白、深墨绿、编辑感衬线字体，接近高端数字健康服务。',
    mechanism: '按症状与阶段进入，Quiz 先于课程货架；研究、医学顾问与媒体背书被前置。',
    risk: '可信但略有距离感，生活情绪与真实照护场景较弱。',
    takeaway: '证据结构、专家身份、问题入口，以及“短时可完成”的产品承诺。',
  },
  {
    id: 'mutu',
    number: '02',
    name: 'MUTU System',
    category: 'direct',
    categoryLabel: 'DIRECT',
    descriptor: 'INCLUSIVE / LIFECYCLE',
    tags: ['DIRECT', 'INCLUSIVE', 'LIFECYCLE'],
    image: './assets/competitors/mutu-micro.jpg',
    alt: 'MUTU System 官网首页截图',
    url: 'https://mutusystem.com/en-us/',
    domain: 'mutusystem.com',
    thesis: '品牌语言最有立场：让女性先感到“被理解”，再接受专业方案。',
    visual: '深紫、珊瑚橙、青绿形成高识别；不同年龄、肤色与身体状态同框。',
    mechanism: '从身体感受进入，以 Foundation / Build / Sustain 建立渐进路径，并用 12 分钟降低门槛。',
    risk: '营销文字和效果数据密度高，容易接近过度承诺。',
    takeaway: '包容性摄影、跨年龄表达，以及“现在开始也不晚”的长期陪伴语言。',
  },
  {
    id: 'studio-bloom',
    number: '03',
    name: 'The Bloom Method',
    category: 'direct',
    categoryLabel: 'DIRECT',
    descriptor: 'APP / COACHING',
    tags: ['DIRECT', 'APP', 'COACHING'],
    image: './assets/competitors/studio-bloom.jpg',
    alt: 'The Bloom Method 官网首页截图',
    url: 'https://www.thebloommethod.com/',
    domain: 'thebloommethod.com',
    thesis: '数字产品呈现最完整：课程之外，明确展示路径、进度、社区和教练服务。',
    visual: '黑白结构、高对比字体与活力粉色，强调训练动作和即时行动。',
    mechanism: 'TTC、孕期、产后形成连续阶段；App 界面、日历和一对一支持构成价值证据。',
    risk: '传统健身气质偏强，“快速恢复”式话语不适合直接复制。',
    takeaway: '将数字体验本身视觉化：先让用户看见如何使用，再解释课程数量。',
  },
  {
    id: 'get-mom-strong',
    number: '04',
    name: 'Get Mom Strong',
    category: 'direct',
    categoryLabel: 'DIRECT',
    descriptor: 'PERSONALITY / COMMUNITY',
    tags: ['DIRECT', 'PERSONALITY', 'COMMUNITY'],
    image: './assets/competitors/get-mom-strong.jpg',
    alt: 'Get Mom Strong 官网首页截图',
    url: 'https://getmomstrong.com/',
    domain: 'getmomstrong.com',
    thesis: '态度与社群最鲜明：从“变小”转向“变强”，建立妈妈运动身份。',
    visual: '粗体大字、高饱和玫红、真实家庭训练视频，直接、有能量。',
    mechanism: '创始人经历、SLAM 命名、进阶课程和大量真实反馈共同建立社群身份。',
    risk: '健身压迫感较强，依赖创始人人格，对产后早期用户不够柔和。',
    takeaway: '“重新获得力量”的价值观，以及不以减重为默认目标的内容立场。',
  },
  {
    id: 'mamastefit',
    number: '05',
    name: 'MamasteFit',
    category: 'coopetition',
    categoryLabel: 'COOPETITION',
    descriptor: 'EXPERT IP / COMMERCE',
    tags: ['COOPETITION', 'EXPERT IP', 'COURSE COMMERCE'],
    image: './assets/competitors/mamastefit.jpg',
    alt: 'MamasteFit 官网首页截图',
    url: 'https://mamastefit.com/',
    domain: 'mamastefit.com',
    thesis: '专家 IP 商品化的代表：把专业身份、真实母亲经验和课程交易结合。',
    visual: '柔和紫色、暖调摄影、编辑式大标题；专家本人持续成为主画面。',
    mechanism: '教育课、训练计划、Bundle、Podcast 和专业认证形成多层产品矩阵。',
    risk: '课程与系统入口较分散，品牌包装一致性仍有提升空间。',
    takeaway: '专家联名与课程包装；Momcozy 应用自己的学习体验统一承接内容。',
  },
  {
    id: 'nourish-move-love',
    number: '06',
    name: 'Nourish Move Love',
    category: 'coopetition',
    categoryLabel: 'COOPETITION',
    descriptor: 'FREE CONTENT / SEO',
    tags: ['COOPETITION', 'FREE CONTENT', 'SEO'],
    image: './assets/competitors/nourish-move-love-micro.jpg',
    alt: 'Nourish Move Love 产后计划页面截图',
    url: 'https://www.nourishmovelove.com/postpartum-workout-plans/',
    domain: 'nourishmovelove.com',
    thesis: '免费内容获客效率最高：让计划本身成为可保存、可搜索、可分享的入口。',
    visual: '功能优先的内容网站结构，醒目标题、日历、缩略图和平台色共同服务点击。',
    mechanism: '免费计划＋视频＋PDF 日历＋搜索内容，持续把单次访问转成跟练行为。',
    risk: '信息分散、付费价值较难建立，品牌高级感和统一学习体验较弱。',
    takeaway: '样课、挑战日历、内容切片和搜索型落地页，但需要由统一品牌系统承接。',
  },
  {
    id: 'expectful',
    number: '07',
    name: 'Expectful',
    category: 'adjacent',
    categoryLabel: 'ADJACENT',
    descriptor: 'EDITORIAL / EMOTIONAL CARE',
    tags: ['ADJACENT', 'EDITORIAL', 'EMOTIONAL CARE'],
    image: './assets/competitors/expectful.jpg',
    alt: 'Expectful 官网首页截图',
    url: 'https://expectful.com/',
    domain: 'expectful.com',
    thesis: '情绪语言最成熟：把复杂、真实甚至不完美的母职体验放在内容中心。',
    visual: '渐变色、优雅衬线字体、杂志式图片编排，兼具情绪温度和现代编辑感。',
    mechanism: '从 TTC 到产后，以专家内容、第一人称故事和冥想资源组织生命周期。',
    risk: '内容媒体属性强，具体课程路径和产品价值不够可视化。',
    takeaway: '敏感场景语言、情绪包容性，以及在母品牌体系下保持独立声音。',
  },
  {
    id: 'sculpt-society',
    number: '08',
    name: 'The Sculpt Society',
    category: 'adjacent',
    categoryLabel: 'ADJACENT',
    descriptor: 'PREMIUM / LIFESTYLE',
    tags: ['ADJACENT', 'PREMIUM FITNESS', 'LIFESTYLE'],
    image: './assets/competitors/sculpt-society.jpg',
    alt: 'The Sculpt Society Mama 页面截图',
    url: 'https://thesculptsociety.com/pages/tss-mama-program',
    domain: 'thesculptsociety.com',
    thesis: '精品生活方式感最强：把孕产项目放入成熟的时尚健身品牌系统。',
    visual: '中性色空间、高质感群像、时尚编辑排版，画面轻盈且具有购买欲。',
    mechanism: '明星教练、平台订阅和孕产专项共用同一品牌资产，降低新项目建设成本。',
    risk: '审美和身体形象压力更明显，专业健康边界不如垂直品牌清楚。',
    takeaway: '高级内容包装与群像摄影，但需要增加真实身体差异和专业安全感。',
  },
];

const visualModules = [
  { id: 'positioning', number: '01', name: '视觉定位', question: '整体审美立场、品类感与差异化气质', output: '视觉定位与风格疆域' },
  { id: 'logo', number: '02', name: 'Logo 与签名', question: '字标、符号、母子品牌与联名锁定', output: '标志使用策略' },
  { id: 'color', number: '03', name: '色彩系统', question: '主色、辅助色、功能色与情绪编码', output: '色彩角色与使用逻辑' },
  { id: 'type', number: '04', name: '字体与层级', question: '字体气质、标题正文、数字和强调信息', output: '字体策略与层级规则' },
  { id: 'layout', number: '05', name: '网格与版式', question: '留白、节奏、卡片与编辑式或产品式布局', output: '布局原则与网格特征' },
  { id: 'graphics', number: '06', name: '图形与图标', question: '几何图形、纹样、图标与功能表达', output: '辅助图形语言' },
  { id: 'illustration', number: '07', name: '插画系统', question: '人物、线条、色块、抽象程度与扩展性', output: '插画风格与系统规则' },
  { id: 'photo', number: '08', name: '摄影与影像', question: '人物、身体、场景、光线、构图与包容性', output: '摄影艺术指导' },
  { id: 'motion', number: '09', name: '动态与数字', question: '交互、视频、转场、进度与产品界面', output: '动态和数字体验原则' },
  { id: 'application', number: '10', name: '应用与联名', question: '课程封面、社媒、Campaign、专家与合作品牌', output: '应用及联名层级' },
];

const moduleMap = Object.fromEntries(visualModules.map((item) => [item.id, item]));
const defaultAnnotationPositions = [
  { x: 6, y: 9, w: 42, h: 28 },
  { x: 52, y: 51, w: 39, h: 34 },
  { x: 18, y: 61, w: 32, h: 26 },
];

function evidence(moduleId, title, analysis, options = {}) {
  const labels = options.labels || [];
  return {
    moduleId,
    title,
    image: options.image,
    sourceUrl: options.sourceUrl,
    captured: options.captured || '2026-10-15',
    objectPosition: options.objectPosition || 'center top',
    observed: analysis[0],
    purpose: analysis[1],
    mechanism: analysis[2],
    risk: analysis[3],
    takeaway: analysis[4],
    annotations: options.annotations || labels.map((label, index) => ({
      n: index + 1,
      label,
      ...(defaultAnnotationPositions[index] || defaultAnnotationPositions[0]),
    })),
  };
}

const evidenceByCase = {
  'every-mother': [
    evidence('positioning', '数字健康，而不是普通健身课', [
      '大面积留白、克制色彩与医学可信内容共同形成高端数字健康气质。',
      '把产后运动从“塑形”重新定义为可被信任的身体照护方案。',
      '先给研究与症状入口，再以生活方式画面降低临床距离。',
      '优势是可信且清楚；风险是过度克制后显得疏离。',
      'Momcozy 可用“温暖的专业性”占据医疗与生活方式之间的位置。',
    ], { labels: ['克制的数字健康主视觉', '证据与行动入口同屏'] }),
    evidence('color', '低饱和色承担状态编码', [
      '深墨绿建立专业基底，陶土、灰蓝、鼠尾草绿用于不同内容状态。',
      '颜色既制造平静，也帮助用户区分身体问题和课程入口。',
      '低饱和自然色作为模块底色，黑白文字保持可读性。',
      '优势是柔和耐看；风险是相邻颜色过近时识别效率下降。',
      '建立“品牌主色＋阶段色＋功能色”三层角色，避免只做氛围色板。',
    ], { image: './assets/competitors/every-mother-illustration.png', sourceUrl: 'https://blog.every-mother.com/', labels: ['陶土色：问题编码', '鼠尾草绿：阶段编码', '灰蓝色：状态编码'] }),
    evidence('type', '编辑式标题与功能正文分工', [
      '高对比衬线标题负责情绪与权威，无衬线正文负责说明和操作。',
      '在专业内容中保留女性健康品牌的柔和与阅读感。',
      '大标题、居中导语、卡片标签形成三级阅读节奏。',
      '优势是高级清晰；风险是衬线过细时移动端可读性下降。',
      '中文可用人文感标题字配高可读黑体，明确字号与行距规则。',
    ], { image: './assets/competitors/every-mother-illustration.png', sourceUrl: 'https://blog.every-mother.com/', labels: ['衬线标题建立情绪', '无衬线正文保证说明效率'] }),
    evidence('layout', '课程问题被组织成可扫读网格', [
      '标题、说明和四列卡片网格形成稳定的自上而下阅读路径。',
      '把复杂症状转换为可选择、可比较的入口。',
      '等宽卡片、固定圆角、统一文字位置与插画占比支持扩展。',
      '优势是模块化；风险是项目增多后页面容易产生“目录感”。',
      '课程分类应先统一卡片骨架，再用阶段色与内容标签制造差异。',
    ], { image: './assets/competitors/every-mother-illustration.png', sourceUrl: 'https://blog.every-mother.com/', labels: ['四列统一卡片网格', '固定标题与箭头位置', '第二行保持同一节奏'] }),
    evidence('illustration', '连续线条把专业议题变得柔和', [
      '无五官人物以连续线条和身体姿态表达腹直肌、盆底与疼痛等议题。',
      '避开器官示意图的临床压力，同时保留身体问题的指向性。',
      '统一人物抽象度、坐姿语法、线宽和低饱和底色，形成可扩展分类系统。',
      '优势是非临床且有识别；风险是过度抽象后动作含义依赖文字。',
      '可建立“姿态＋阶段色＋短标签”的学院插画语法，并制定可辨识度测试。',
    ], {
      image: './assets/competitors/every-mother-illustration.png',
      sourceUrl: 'https://blog.every-mother.com/',
      annotations: [
        { n: 1, x: 13, y: 35, w: 18, h: 27, label: '无五官的连续线条人物' },
        { n: 2, x: 34, y: 35, w: 18, h: 27, label: '用身体姿态代替器官图' },
        { n: 3, x: 54, y: 34, w: 38, h: 29, label: '低饱和自然色编码不同问题' },
        { n: 4, x: 8, y: 23, w: 84, h: 72, label: '卡片、课程与插画形成扩展系统' },
        { n: 5, x: 29, y: 5, w: 46, h: 15, label: '专业议题被处理得柔和、非临床化' },
      ],
    }),
  ],
  mutu: [
    evidence('positioning', '包容性成为视觉立场', ['多年龄、多肤色和不同身体状态的人物共同出现。', '先建立“被理解”的情绪安全，再提供训练方案。', '高识别色彩与直视镜头的人像共同传递坦率和力量。', '优势是立场鲜明；风险是高密度传播语言带来营销感。', 'Momcozy 应把真实身体差异写入选角标准，而不是偶发出现。'], { labels: ['跨年龄与体型的选角', '大胆色彩表达立场'] }),
    evidence('logo', '短字标支撑多触点识别', ['MUTU 以紧凑大写字标持续占据导航和传播首层。', '在复杂图像与高彩背景中保持快速识别。', '字标尺度、留白和单色使用保持稳定。', '优势是记忆快；风险是字标本身难传递专业边界。', '学院标志需要在课程、专家、Momcozy 母品牌之间建立锁定层级。'], { labels: ['导航中的短字标', '单色高对比使用'] }),
    evidence('color', '高识别三角色配色', ['深紫负责品牌基底，珊瑚橙负责行动，青绿负责辅助信息。', '颜色同时服务识别、情绪和 CTA 优先级。', '大色块而非小装饰反复出现，建立强记忆。', '优势是有活力；风险是多高饱和色竞争注意力。', '先定义每个颜色的职责，再限制同屏高饱和色数量。'], { labels: ['深紫：品牌基底', '珊瑚橙：行动信号', '青绿：辅助状态'] }),
    evidence('graphics', '色块与圆角构成友好功能语言', ['圆角容器、色块分区和简洁图标辅助解释训练路径。', '让功能信息保留亲和力，避免医疗后台感。', '重复圆角半径、图标线宽和对比色标签。', '优势是易扩展；风险是常见 SaaS 语法容易同质化。', '图形系统应加入与照护场景相关的独特母题，而非只靠圆角。'], { labels: ['圆角功能容器', '对比色信息标签'] }),
    evidence('photo', '真实身体优先于理想体型', ['自然姿态、直视镜头与身体差异被明确呈现。', '降低用户被评价的焦虑，强化长期陪伴感。', '统一背景气氛和人物态度，而非统一身材。', '优势是包容可信；风险是未经系统指导会变成素材拼贴。', '为年龄、肤色、身体阶段、家庭角色建立可审计的选角矩阵。'], { labels: ['真实身体状态', '有主体感的镜头关系'] }),
  ],
  'studio-bloom': [
    evidence('graphics', '界面图形直接解释服务', ['日历、进度、课程缩略图和功能图标被用作价值证据。', '用户无需想象 App 如何工作，就能理解服务结构。', '真实 UI 截图配高对比标记，形成“功能可见性”。', '优势是具体；风险是产品界面迭代后品牌页素材易过时。', '数字产品图形应从真实任务出发，并建立随版本更新的资产流程。'], { labels: ['真实界面作为证据', '功能图标形成导航'] }),
    evidence('motion', '从课程展示转向路径展示', ['页面强调阶段、计划、进度和教练支持，不只罗列视频。', '把订阅产品塑造成持续变化的服务。', '用序列、滑动与状态界面表达时间维度。', '优势是价值清楚；风险是动态过多会分散课程判断。', '优先为入门、进度、完成和反馈四个关键状态制定动效原则。'], { labels: ['阶段化使用路径', '进度与反馈界面'] }),
    evidence('application', '课程、App 与教练服务共用一套包装', ['课程缩略图、移动界面与教练服务保持统一的高对比语言。', '让不同服务看起来属于一个连续产品。', '统一标题尺度、粉色行动色和人物动作图。', '优势是整合强；风险是健身感可能覆盖孕产照护感。', 'Momcozy 应把课程、硬件入口和专家服务放入同一应用层级规范。'], { labels: ['课程缩略图系统', 'App 与教练服务同源'] }),
  ],
  'get-mom-strong': [
    evidence('color', '玫红成为社群能量信号', ['高饱和玫红与黑白强对比反复用于标题、按钮和活动内容。', '快速制造行动感，并形成社群身份。', '主色高频、大字同屏、真实训练视频共同强化。', '优势是抓眼；风险是对产后早期人群产生压迫。', '学院的行动色应鼓励开始，而不是暗示强度或身材目标。'], { labels: ['玫红高频品牌信号', '黑白对比保障行动层级'] }),
    evidence('type', '粗体口号建立人格', ['粗体大写标题与短句口号占据首要视觉位置。', '把“变强”从功能利益提升为身份宣言。', '短句、高字重、紧凑行距与动作画面组合。', '优势是态度强；风险是长期阅读和敏感议题不够柔和。', '仅在挑战、里程碑等高能场景使用强口号，知识内容保持平静层级。'], { labels: ['粗体大标题', '短句式身份口号'] }),
    evidence('photo', '家庭环境中的真实训练', ['训练发生在家中，母亲身份和日常限制没有被隐藏。', '让用户相信课程能进入现实生活。', '手持感视频、家庭道具与不完美瞬间构成真实性。', '优势是亲近；风险是画面品质不稳定。', '建立“真实但有控制”的家庭拍摄规范：自然光、可执行动作、可见照护线索。'], { labels: ['家中真实训练场景', '可执行而非摆拍动作'] }),
    evidence('motion', '视频证据推动即时行动', ['短视频与训练片段比静态课程说明更靠前。', '快速证明动作强度、教练人格和社区氛围。', '以动作开始、收益收尾，减少复杂转场。', '优势是转化直接；风险是快节奏放大健身焦虑。', '不同身体阶段应设定不同节奏：恢复期慢、进阶期有能量。'], { labels: ['动作先于说明', '真实训练节奏'] }),
  ],
  mamastefit: [
    evidence('logo', '专家品牌与课程名并行', ['主品牌、专家身份与课程产品在同一页面反复组合。', '让专业背书直接进入购买决策。', '稳定字标配人物姓名、资历和产品标题形成多级签名。', '优势是信任转化快；风险是过度依赖个人。', '制定 Momcozy Academy × 专家 × 课程的三级联名锁定模板。'], { labels: ['主品牌签名', '专家身份作为第二签名'] }),
    evidence('layout', '专家内容与商品入口并列', ['编辑式大标题、专家介绍与课程卡片在同一网格中交替出现。', '让“为什么可信”和“可以买什么”保持连续。', '宽幅人物区建立信任，规整卡片区承接选择和交易。', '优势是转化路径短；风险是内容与商品模块过多时入口分散。', '学院页面可用“专家观点—课程方案—适用人群”的固定阅读顺序。'], { labels: ['宽幅专家内容区', '规整课程卡片区'] }),
    evidence('photo', '专家本人就是主要品牌资产', ['创始人和专业团队持续出现在主视觉与课程内容中。', '把抽象专业能力转化为可识别的人。', '暖调自然光、直接视线和教学场景保持连续。', '优势是信任具体；风险是品牌资产难脱离个人。', '建立专家肖像、教学动作和生活场景三类标准，并保留学院主品牌主导权。'], { labels: ['专家人物为第一主体', '暖调教学场景'] }),
    evidence('application', '课程商品化层级清楚', ['单课、Bundle、播客与认证内容以不同包装进入同一商店结构。', '帮助用户理解价格和服务层级。', '封面模板、专家头像、标题和标签形成产品货架。', '优势是商业入口丰富；风险是入口过多造成选择负担。', '课程包装必须同时显示阶段、目标、专家和学习形式四项关键信息。'], { labels: ['课程封面模板', 'Bundle 与单课层级'] }),
  ],
  'nourish-move-love': [
    evidence('layout', '内容型页面围绕快速扫描', ['标题、日历、视频缩略图和下载入口按任务顺序铺开。', '服务搜索进入的用户快速找到可执行内容。', '模块标题、卡片列表和强 CTA 形成长页锚点。', '优势是效率高；风险是页面密度大、品牌感弱。', '学院知识页可借用任务导向结构，但需要统一节奏与留白。'], { labels: ['搜索标题直接回答问题', '计划与视频模块连续'] }),
    evidence('graphics', '日历与清单成为内容资产', ['计划表、周次、下载标签和视频编号构成主要图形语言。', '让免费内容具备保存、分享和反复使用价值。', '结构化数据被设计成清单与日历，而非装饰图形。', '优势是实用；风险是视觉容易工具化。', '把课程路径、设备状态与每日练习转成具有品牌识别的工具图形。'], { labels: ['日历型内容资产', '编号与清单系统'] }),
    evidence('illustration', '功能图示补充动作摄影', ['简化图示和图标用于解释步骤、下载与内容类型。', '在密集照片之间提供更快的认知捷径。', '统一线宽和小面积品牌色作为功能层。', '优势是清晰；风险是通用图标缺少独特性。', '插画系统需区分“情绪叙事”和“功能说明”两套抽象度。'], { labels: ['功能图示辅助步骤', '品牌色作为小面积提示'] }),
    evidence('motion', '连续视频构成跟练路径', ['大量视频缩略图与计划天数共同呈现连续使用。', '让用户看到从发现内容到开始跟练的直接路径。', '以可预期的缩略图、时长和动作信息降低选择成本。', '优势是可执行；风险是内容量掩盖优先级。', '为视频封面、时长、难度和设备条件建立统一元数据层。'], { labels: ['连续视频入口', '时长与动作信息前置'] }),
    evidence('application', '免费计划被包装为可保存产品', ['训练日历、PDF、视频系列和社媒切片围绕同一计划重复出现。', '让内容跨越搜索、收藏、分享与跟练多个触点。', '统一计划命名、封面缩略图和下载入口，形成轻量产品包装。', '优势是传播效率高；风险是免费资产与付费价值边界模糊。', '学院可把样课、挑战日历与设备权益设计为同一 Campaign 套件。'], { labels: ['计划下载与视频联动', '跨触点统一命名'] }),
  ],
  expectful: [
    evidence('positioning', '母职情绪媒体，而非工具型健康页', ['杂志式画面、柔和渐变与第一人称内容构成情绪照护空间。', '允许复杂、不完美的母职经验被看见。', '高质感编辑设计配真实故事，降低产品推销感。', '优势是共情深；风险是具体服务价值不够可视。', '学院可保留内容温度，但每篇内容需明确下一步学习或行动。'], { labels: ['编辑式情绪主视觉', '故事内容先于产品说明'] }),
    evidence('color', '渐变与柔和色建立情绪空间', ['暖粉、柔紫和低对比渐变替代高刺激的功能色。', '为冥想、孕期与产后内容建立安全、平静的阅读氛围。', '大面积渐变负责情绪，小面积高对比色保留操作层级。', '优势是情绪一致；风险是阶段之间的功能辨识度不足。', '情绪色与课程阶段色应分层管理，避免同一种颜色同时承担所有职责。'], { labels: ['柔和渐变建立氛围', '小面积对比保留操作'] }),
    evidence('type', '杂志式层级承接真实故事', ['优雅衬线标题与克制无衬线正文形成内容出版物气质。', '让第一人称故事与专家内容具有被认真阅读的价值。', '大标题、短导语、长文正文和引用信息各有稳定比例。', '优势是叙事成熟；风险是标题风格被过度模仿后缺少独特性。', '为故事、知识、课程和工具四类内容分别设定排版模板。'], { labels: ['衬线标题强化叙事', '正文层级适合长阅读'] }),
    evidence('logo', '轻量字标融入编辑系统', ['简洁字标以较小尺度出现，不与文章标题争夺注意力。', '让品牌像可信的内容出版者，而不是强销售平台。', '固定导航位置、充足留白和一致单色使用。', '优势是克制；风险是品牌记忆依赖整体风格。', '学院字标在内容页可退后，但课程与联名场景需要更明确锁定。'], { labels: ['小尺度导航字标', '字标让位于内容标题'] }),
    evidence('illustration', '柔和抽象图形承接敏感议题', ['抽象色块与轻线条用于连接冥想、情绪与生命周期内容。', '避免为敏感经历指定单一写实形象。', '渐变、柔边形状和少量线条保持开放解释。', '优势是包容；风险是抽象过度后内容辨识度不足。', '情绪类内容可采用开放抽象图形，身体训练类仍需清晰姿态。'], { labels: ['柔边抽象形状', '低刺激的情绪色彩'] }),
  ],
  'sculpt-society': [
    evidence('positioning', '孕产课程进入精品生活方式体系', ['中性色空间、时尚群像与精简文案弱化传统孕产健康页面的工具感。', '把专项训练包装为成熟生活方式品牌的一部分。', '沿用母品牌的教练、影像和订阅语法，仅以项目标签区分。', '优势是溢价与向往感；风险是专业安全边界不够突出。', 'Momcozy 可借鉴精品包装，但必须让专家资质与适用边界同样可见。'], { labels: ['精品生活方式场域', '专项内容继承母品牌'] }),
    evidence('type', '时尚编辑排版抬升价值感', ['超大标题、精简文案和高质感人物图形成杂志式节奏。', '把孕产课程放入精品生活方式语境。', '大字号、强裁切、少层级与宽松留白。', '优势是溢价感强；风险是知识密度与可访问性下降。', '在品牌发布页可借用编辑张力，课程学习页仍以清晰为先。'], { labels: ['超大编辑式标题', '少层级高留白'] }),
    evidence('layout', '大图与留白制造高级节奏', ['全幅群像、窄文字栏和交替版式形成轻盈浏览体验。', '弱化传统课程货架感，强化生活方式想象。', '图片比例与留白成为主网格，组件数量被刻意控制。', '优势是聚焦；风险是信息查找效率下降。', '在首页和 Campaign 用大图节奏，在选择页回到结构化卡片。'], { labels: ['全幅图像建立场域', '窄文字栏控制节奏'] }),
    evidence('photo', '群像营造精品社群', ['中性色空间、统一造型与自然动作建立理想化社群画面。', '让用户购买的不只是课程，也是某种生活身份。', '统一光线、材质和服装色系，人物以群体关系出现。', '优势是向往感强；风险是身体形象压力和排他感。', '保留群像的归属感，同时扩大身体、年龄和家庭场景差异。'], { labels: ['统一造型的群像', '中性色空间与自然光'] }),
    evidence('application', '孕产项目继承成熟母品牌资产', ['专项课程沿用原有平台、教练和视觉语言。', '降低子项目重新教育用户的成本。', '以项目标签区分内容，以母品牌设计保持一致。', '优势是系统效率高；风险是专项专业性被母品牌稀释。', '学院可继承 Momcozy 信任资产，但需拥有独立的专业边界和课程编码。'], { labels: ['专项标签区分内容', '母品牌资产持续背书'] }),
  ],
};

const secondaryModulesByCase = {
  'every-mother': ['logo', 'graphics', 'motion'],
  mutu: ['type', 'layout', 'illustration', 'application'],
  'studio-bloom': ['positioning', 'color', 'type', 'layout', 'photo'],
  'get-mom-strong': ['positioning', 'layout', 'graphics', 'application'],
  mamastefit: ['positioning', 'color', 'type', 'graphics'],
  'nourish-move-love': ['positioning', 'color', 'type', 'photo', 'application'],
  expectful: ['color', 'layout', 'graphics', 'motion', 'photo'],
  'sculpt-society': ['positioning', 'logo', 'color', 'graphics', 'motion'],
};

cases.forEach((item) => {
  item.evidence = evidenceByCase[item.id] || [];
  item.secondaryModules = secondaryModulesByCase[item.id] || [];
});

const moduleInsights = {
  positioning: ['健康服务普遍向生活方式靠近。', '只靠“高级、温柔”会失去品类边界。', '占据“温暖的专业照护”，同时连接真实育儿场景。'],
  logo: ['短字标与专家签名是常见组合。', '联名层级常被临时拼接。', '预先定义 Momcozy、Academy、专家和课程的四级关系。'],
  color: ['自然低饱和与高能行动色两极并存。', '鼠尾草绿、陶土色和柔紫已高度同质化。', '以 Momcozy 资产为根，增加阶段和功能编码而非追逐氛围。'],
  type: ['衬线制造情绪，无衬线保障功能。', '编辑式大标题被大量复制。', '建立适合中英双语、知识阅读和数据状态的多场景层级。'],
  layout: ['卡片网格与大图编辑布局最常见。', '所有内容都卡片化会产生目录疲劳。', '课程选择用网格，品牌叙事用编辑节奏，学习过程用任务结构。'],
  graphics: ['圆角容器、线性图标和日历图形普遍。', '通用 SaaS 图标缺少照护识别。', '从泵奶、睡眠、恢复与陪伴等真实动作提炼辅助图形。'],
  illustration: ['抽象人物能软化敏感健康议题。', '无五官线稿已成为女性健康常见套路。', '以身体可读性、照护关系和阶段编码形成更完整的系统。'],
  photo: ['真实身体与专家人物是信任核心。', '过度精致的理想化群像可能制造压力。', '建立包容选角矩阵，并把设备与家庭关系纳入场景。'],
  motion: ['视频和产品界面用于证明“如何使用”。', '快节奏健身剪辑容易放大焦虑。', '按恢复、学习、进阶三种状态定义不同动态节奏。'],
  application: ['课程封面和专家 IP 是最常见商业触点。', '不同团队临时制作导致系统碎片化。', '用统一元数据和联名规则连接课程、硬件、社媒与活动。'],
};

const tabs = [...document.querySelectorAll('[data-tab]')];
const panels = [...document.querySelectorAll('[data-panel]')];
const subTabs = [...document.querySelectorAll('[data-subtab]')];
const subPanels = [...document.querySelectorAll('[data-subpanel]')];
const strategyTabs = [...document.querySelectorAll('[data-strategy-subtab]')];
const strategyPanels = [...document.querySelectorAll('[data-strategy-subpanel]')];
const viewTitle = document.querySelector('#viewTitle');
const caseTools = document.querySelector('#caseTools');
const visualDetailNav = document.querySelector('#visualDetailNav');
const caseSearch = document.querySelector('#caseSearch');
const filters = [...document.querySelectorAll('.filter')];
const moduleFilters = document.querySelector('#moduleFilters');
const caseNav = document.querySelector('#caseNav');
const caseCount = document.querySelector('#caseCount');
const caseDetail = document.querySelector('#caseDetail');
const caseDetailWrap = document.querySelector('.case-detail-wrap');
const coverageMatrix = document.querySelector('#coverageMatrix');
const moduleInsightsContainer = document.querySelector('#moduleInsights');
const modal = document.querySelector('#imageModal');
const modalImage = modal.querySelector('img');
const modalTitle = document.querySelector('#modalTitle');
const modalClose = modal.querySelector('.modal-close');

let activeView = 'home';
let activeVisualView = 'framework';
let activeStrategyView = 'handoff';
let activeFilter = 'all';
let activeModuleFilter = 'all';
let activeCaseId = cases[0].id;
let query = '';

function setTab(name, updateUrl = true) {
  if (!views[name]) name = 'home';
  activeView = name;

  tabs.forEach((tab) => {
    const isActive = tab.dataset.tab === name;
    tab.classList.toggle('is-active', isActive);
    tab.setAttribute('aria-selected', String(isActive));
    tab.tabIndex = isActive ? 0 : -1;
  });

  panels.forEach((panel) => {
    const isActive = panel.dataset.panel === name;
    panel.hidden = !isActive;
    panel.classList.toggle('is-active', isActive);
  });

  if (name === 'visual') viewTitle.textContent = `${views[name]} / ${visualViews[activeVisualView]}`;
  else if (name === 'strategy') viewTitle.textContent = `${views[name]} / ${strategyViews[activeStrategyView]}`;
  else viewTitle.textContent = views[name];
  caseTools.hidden = !(name === 'visual' && activeVisualView === 'competitor');
  if (name === 'visual' && activeVisualView === 'competitor') renderCases();

  if (updateUrl) history.replaceState(null, '', `#${name}`);
}

function setStrategyTab(name) {
  if (!strategyViews[name]) name = 'handoff';
  activeStrategyView = name;

  strategyTabs.forEach((tab) => {
    const isActive = tab.dataset.strategySubtab === name;
    tab.classList.toggle('is-active', isActive);
    tab.setAttribute('aria-selected', String(isActive));
  });

  strategyPanels.forEach((panel) => {
    const isActive = panel.dataset.strategySubpanel === name;
    panel.hidden = !isActive;
    panel.classList.toggle('is-active', isActive);
  });

  if (activeView === 'strategy') {
    viewTitle.textContent = `${views.strategy} / ${strategyViews[name]}`;
  }
}

function setVisualTab(name) {
  if (!visualViews[name]) name = 'framework';
  activeVisualView = name;

  subTabs.forEach((tab) => {
    const isActive = tab.dataset.subtab === name;
    tab.classList.toggle('is-active', isActive);
    tab.setAttribute('aria-selected', String(isActive));
  });

  subPanels.forEach((panel) => {
    const isActive = panel.dataset.subpanel === name;
    panel.hidden = !isActive;
    panel.classList.toggle('is-active', isActive);
  });

  visualDetailNav.hidden = !['competitor', 'matrix', 'opportunity'].includes(name);

  if (activeView === 'visual') {
    viewTitle.textContent = `${views.visual} / ${visualViews[name]}`;
    caseTools.hidden = name !== 'competitor';
    if (name === 'competitor') renderCases();
  }
}

function filteredCases() {
  const normalized = query.trim().toLowerCase();
  return cases.filter((item) => {
    const matchesType = activeFilter === 'all' || item.category === activeFilter;
    const matchesModule = activeModuleFilter === 'all' || item.evidence.some((entry) => entry.moduleId === activeModuleFilter);
    const evidenceText = item.evidence.flatMap((entry) => [entry.title, entry.observed, entry.takeaway]);
    const haystack = [item.name, item.descriptor, item.thesis, ...item.tags, ...evidenceText].join(' ').toLowerCase();
    return matchesType && matchesModule && (!normalized || haystack.includes(normalized));
  });
}

function renderModuleFilters() {
  const buttons = [
    `<button class="module-filter ${activeModuleFilter === 'all' ? 'is-active' : ''}" data-module-filter="all"><b>ALL</b><span>全部品牌</span><em>${String(cases.length).padStart(2, '0')}</em></button>`,
    ...visualModules.map((module) => {
      const count = cases.filter((item) => item.evidence.some((entry) => entry.moduleId === module.id)).length;
      return `<button class="module-filter ${activeModuleFilter === module.id ? 'is-active' : ''}" data-module-filter="${module.id}" title="${module.question}"><b>${module.number}</b><span>${module.name}</span><em>${String(count).padStart(2, '0')}</em></button>`;
    }),
  ];
  moduleFilters.innerHTML = buttons.join('');
}

function renderEvidenceCard(item, entry) {
  const module = moduleMap[entry.moduleId];
  const image = entry.image || item.image;
  const sourceUrl = entry.sourceUrl || item.url;
  const annotationId = `${item.id}-${entry.moduleId}`;
  return `
    <section class="evidence-card" data-evidence-card="${annotationId}">
      <header class="evidence-head">
        <div><span>MODULE ${module.number}</span><h2>${module.name}</h2></div>
        <div class="evidence-head-copy"><strong>${entry.title}</strong><p>${module.question} · 输出：${module.output}</p></div>
      </header>
      <div class="evidence-media">
        <button class="evidence-figure" data-open-image="${image}" data-image-alt="${item.name} ${module.name}公开页面证据" data-image-title="${item.name} / ${module.name}" aria-label="打开 ${item.name} ${module.name} 高清截图">
          <img src="${image}" alt="${item.name} ${module.name}局部截图" style="object-position:${entry.objectPosition}" />
          <span class="annotation-layer" aria-hidden="true">
            ${entry.annotations.map((annotation) => `
              <i class="evidence-annotation" style="left:${annotation.x}%;top:${annotation.y}%;width:${annotation.w}%;height:${annotation.h}%">
                <b>${annotation.n}</b>
              </i>
            `).join('')}
          </span>
          <span class="zoom-hint">VIEW FULL ↗</span>
        </button>
        <div class="evidence-meta">
          <button type="button" data-toggle-annotations aria-pressed="true">隐藏标注</button>
          <span>截取于 ${entry.captured}</span>
          <a href="${sourceUrl}" target="_blank" rel="noreferrer">原始页面 ↗</a>
        </div>
        <ol class="annotation-notes">
          ${entry.annotations.map((annotation) => `<li><b>${annotation.n}</b><span>${annotation.label}</span></li>`).join('')}
        </ol>
      </div>
      <dl class="evidence-analysis">
        <div><dt>01 / 看到什么</dt><dd>${entry.observed}</dd></div>
        <div><dt>02 / 策略作用</dt><dd>${entry.purpose}</dd></div>
        <div><dt>03 / 形成机制</dt><dd>${entry.mechanism}</dd></div>
        <div><dt>04 / 优势与风险</dt><dd>${entry.risk}</dd></div>
        <div><dt>05 / Momcozy 可借鉴</dt><dd>${entry.takeaway}</dd></div>
      </dl>
    </section>
  `;
}

function renderCases() {
  renderModuleFilters();
  const visible = filteredCases();
  caseCount.textContent = `${String(visible.length).padStart(2, '0')} RESULTS`;

  if (!visible.some((item) => item.id === activeCaseId)) {
    activeCaseId = visible[0]?.id ?? '';
  }

  caseNav.innerHTML = visible.length
    ? visible.map((item) => `
        <button class="case-nav-item ${item.id === activeCaseId ? 'is-active' : ''}" data-case-id="${item.id}">
          <span class="case-nav-number">${item.number}</span>
          <span class="case-nav-copy">
            <strong>${item.name}</strong>
            <span>${item.categoryLabel} · ${item.descriptor}</span>
          </span>
        </button>
      `).join('')
    : '<p class="case-nav-empty">没有符合当前条件的品牌。</p>';

  const item = cases.find((entry) => entry.id === activeCaseId);
  if (!item) {
    caseDetail.innerHTML = '';
    return;
  }

  const visibleEvidence = activeModuleFilter === 'all'
    ? item.evidence
    : item.evidence.filter((entry) => entry.moduleId === activeModuleFilter);

  caseDetail.innerHTML = `
    <header class="case-profile">
      <div class="case-profile-main">
        <div class="case-tags">${item.tags.map((tag) => `<span>${tag}</span>`).join('')}</div>
        <span class="case-index">CASE ${item.number} / ${item.categoryLabel}</span>
        <h1>${item.name}</h1>
        <p class="case-thesis">${item.thesis}</p>
        <div class="case-module-tags">
          ${item.evidence.map((entry) => `<button type="button" data-module-jump="${entry.moduleId}"><b>${moduleMap[entry.moduleId].number}</b>${moduleMap[entry.moduleId].name}</button>`).join('')}
        </div>
        <a class="case-site-link" href="${item.url}" target="_blank" rel="noreferrer"><span>${item.domain}</span><span>OPEN SITE ↗</span></a>
      </div>
      <button class="case-overview-screen" data-open-image="${item.image}" data-image-alt="${item.alt}" data-image-title="${item.name} / FULL PAGE">
        <img src="${item.image}" alt="${item.alt}" />
        <span>FULL SCREENSHOT</span>
      </button>
    </header>
    <div class="case-evidence-intro">
      <div><span>EVIDENCE MODULES</span><strong>${String(visibleEvidence.length).padStart(2, '0')} / ${String(item.evidence.length).padStart(2, '0')}</strong></div>
      <p>${activeModuleFilter === 'all' ? '以下仅分析该品牌最有代表性的视觉模块；未列出不等于不存在。' : `当前聚焦：${moduleMap[activeModuleFilter].name}。切换上方模块或选择“全部品牌”查看完整证据。`}</p>
    </div>
    <div class="evidence-stack">${visibleEvidence.map((entry) => renderEvidenceCard(item, entry)).join('')}</div>
  `;
  caseDetailWrap.scrollTop = 0;
}

function renderCoverageMatrix() {
  coverageMatrix.innerHTML = `
    <thead><tr><th>品牌</th>${visualModules.map((module) => `<th title="${module.question}"><b>${module.number}</b>${module.name}</th>`).join('')}</tr></thead>
    <tbody>${cases.map((item) => `
      <tr>
        <th>${item.name}<small>${item.categoryLabel}</small></th>
        ${visualModules.map((module) => {
          const isStrong = item.evidence.some((entry) => entry.moduleId === module.id);
          const isGeneral = item.secondaryModules.includes(module.id);
          const state = isStrong ? 'is-strong' : isGeneral ? 'is-general' : '';
          const label = isStrong ? '强证据' : isGeneral ? '一般证据' : '未观察';
          return `<td aria-label="${item.name} ${module.name}：${label}" title="${label}"><i class="coverage-dot ${state}"></i><span class="sr-only">${label}</span></td>`;
        }).join('')}
      </tr>
    `).join('')}</tbody>
  `;
}

function renderModuleInsights() {
  moduleInsightsContainer.innerHTML = visualModules.map((module) => {
    const insight = moduleInsights[module.id];
    return `
      <article class="module-insight-card">
        <header><b>${module.number}</b><div><span>${module.name}</span><small>${module.output}</small></div></header>
        <dl><div><dt>行业共性</dt><dd>${insight[0]}</dd></div><div><dt>过度使用</dt><dd>${insight[1]}</dd></div><div><dt>Momcozy 差异机会</dt><dd>${insight[2]}</dd></div></dl>
      </article>
    `;
  }).join('');
}

tabs.forEach((tab, index) => {
  tab.addEventListener('click', () => setTab(tab.dataset.tab));
  tab.addEventListener('keydown', (event) => {
    if (!['ArrowLeft', 'ArrowRight'].includes(event.key)) return;
    event.preventDefault();
    const direction = event.key === 'ArrowRight' ? 1 : -1;
    const next = tabs[(index + direction + tabs.length) % tabs.length];
    next.focus();
    setTab(next.dataset.tab);
  });
});

subTabs.forEach((tab) => {
  tab.addEventListener('click', () => setVisualTab(tab.dataset.subtab));
});

strategyTabs.forEach((tab) => {
  tab.addEventListener('click', () => setStrategyTab(tab.dataset.strategySubtab));
});

document.querySelectorAll('[data-visual-open]').forEach((control) => {
  control.addEventListener('click', () => setVisualTab(control.dataset.visualOpen));
});

document.querySelectorAll('[data-strategy-open]').forEach((control) => {
  control.addEventListener('click', () => setStrategyTab(control.dataset.strategyOpen));
});

document.querySelectorAll('[data-open-tab]').forEach((control) => {
  control.addEventListener('click', (event) => {
    event.preventDefault();
    setTab(control.dataset.openTab);
  });
});

document.querySelectorAll('[data-case-open]').forEach((control) => {
  control.addEventListener('click', () => {
    activeCaseId = control.dataset.caseOpen;
    activeFilter = 'all';
    activeModuleFilter = 'all';
    filters.forEach((item) => item.classList.toggle('is-active', item.dataset.filter === 'all'));
    setVisualTab('competitor');
    setTab('visual');
  });
});

filters.forEach((button) => {
  button.addEventListener('click', () => {
    activeFilter = button.dataset.filter;
    filters.forEach((item) => item.classList.toggle('is-active', item === button));
    renderCases();
  });
});

caseSearch.addEventListener('input', () => {
  query = caseSearch.value;
  renderCases();
});

caseNav.addEventListener('click', (event) => {
  const button = event.target.closest('[data-case-id]');
  if (!button) return;
  activeCaseId = button.dataset.caseId;
  renderCases();
});

moduleFilters.addEventListener('click', (event) => {
  const button = event.target.closest('[data-module-filter]');
  if (!button) return;
  activeModuleFilter = button.dataset.moduleFilter;
  renderCases();
});

caseDetail.addEventListener('click', (event) => {
  const toggle = event.target.closest('[data-toggle-annotations]');
  if (toggle) {
    const card = toggle.closest('[data-evidence-card]');
    const hidden = card.classList.toggle('is-annotations-hidden');
    toggle.setAttribute('aria-pressed', String(!hidden));
    toggle.textContent = hidden ? '显示标注' : '隐藏标注';
    return;
  }

  const moduleJump = event.target.closest('[data-module-jump]');
  if (moduleJump) {
    activeModuleFilter = moduleJump.dataset.moduleJump;
    renderCases();
    return;
  }

  const button = event.target.closest('[data-open-image]');
  if (!button) return;
  modalImage.src = button.dataset.openImage;
  modalImage.alt = button.dataset.imageAlt;
  modalTitle.textContent = `${button.dataset.imageTitle} / WEBSITE SCREEN`;
  modal.showModal();
});

modalClose.addEventListener('click', () => modal.close());
modal.addEventListener('click', (event) => {
  if (event.target === modal) modal.close();
});

window.addEventListener('hashchange', () => {
  const hash = location.hash.slice(1);
  if (hash === 'matrix') setVisualTab('matrix');
  if (hash === 'opportunity') setVisualTab('opportunity');
  if (hash === 'cases' || hash === 'landscape') setVisualTab('competitor');
  setTab(legacyHashes[hash] ?? hash, false);
});

const initialHash = location.hash.slice(1);
if (initialHash === 'matrix') activeVisualView = 'matrix';
if (initialHash === 'opportunity') activeVisualView = 'opportunity';
if (initialHash === 'cases' || initialHash === 'landscape') activeVisualView = 'competitor';
setVisualTab(activeVisualView);
setStrategyTab(activeStrategyView);
setTab((legacyHashes[initialHash] ?? initialHash) || 'home', false);
renderCoverageMatrix();
renderModuleInsights();
renderCases();
