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
    sourcePolicy: '仅使用官方公开页面；当前正式证据全部来自官网首页。', coveredTouchpointIds: ['EM-TP01'],
    limitations: [
      '现有两张截图来自同一官网首页的不同区段，不能据此建立跨触点系统规则。',
      '未采集登录后的会员与 App 界面，动态、进度和功能状态无法确认。',
      '未采集官方社交账号、Campaign 或合作页面，传播与联名规则无法确认。',
      '未获得公开品牌规范，不能确认字体名称、色值、内部组件规则或设计治理流程。',
      '截图只代表 2026-10-15 可核对到的页面状态；官网后续可能更新。',
    ],
  },
  touchpoints: [
    { id: 'EM-TP01', type: '官网首页', title: 'Exercise Program for Core and Pelvic Floor Health', url: 'https://every-mother.com/', status: '已采集两个区段', capturedAt: '2026-10-15', evidenceIds: ['EM-E01', 'EM-E02'], note: '首屏与 “An exercise plan just for you” 课程分类区。' },
    { id: 'EM-TP02', type: '课程详情页', title: '未纳入本轮', url: 'https://every-mother.com/prenatal', status: '未采集', capturedAt: '', evidenceIds: [], note: '公开页面存在，但本轮没有已归档截图。' },
    { id: 'EM-TP03', type: '内容与知识页', title: '未纳入本轮', url: 'https://every-mother.com/empower/kegel-exercises-guide', status: '未采集', capturedAt: '', evidenceIds: [], note: '公开页面存在，但本轮没有已归档截图。' },
    { id: 'EM-TP04', type: 'App 与会员界面', title: '未观察到公开界面证据', url: 'https://every-mother.com/how-it-works/', status: '未观察到', capturedAt: '', evidenceIds: [], note: '官网说明产品包含 App，但本轮未进入登录后体验。' },
    { id: 'EM-TP05', type: 'Campaign、社交与合作', title: '未纳入本轮', url: '', status: '未采集', capturedAt: '', evidenceIds: [], note: '未采集官方社交账号与合作页面。' },
  ],
  evidence: [
    { id: 'EM-E01', touchpointId: 'EM-TP01', pageTitle: 'Every Mother 官网首页 / 首屏', url: 'https://every-mother.com/', capturedAt: '2026-10-15', type: '页面区段', image: './assets/competitors/every-mother.jpg', alt: 'Every Mother 官网首页首屏，包含字标、导航、衬线标题、行动按钮与居家运动摄影', annotations: [
      { n: 1, x: 2.5, y: 2.2, w: 18, h: 7, label: '全大写字标位于导航左侧' },
      { n: 2, x: 5.5, y: 25, w: 39, h: 23, label: '大尺寸衬线标题' },
      { n: 3, x: 5.5, y: 49, w: 36, h: 10, label: '无衬线说明与深绿行动按钮' },
      { n: 4, x: 51, y: 25, w: 45, h: 41, label: '浅色居家空间中的运动人物摄影' },
    ] },
    { id: 'EM-E02', touchpointId: 'EM-TP01', pageTitle: 'Every Mother 官网首页 / 课程分类区', url: 'https://every-mother.com/', capturedAt: '2026-10-15', type: '页面区段', image: './assets/competitors/every-mother-illustration.png', alt: 'Every Mother 官网首页课程分类区，八张低饱和色卡片配连续线条人物插画', annotations: [
      { n: 1, x: 11, y: 34, w: 19, h: 27, label: '无五官人物以连续线条绘制' },
      { n: 2, x: 32, y: 34, w: 19, h: 27, label: '不同身体姿态区分类别' },
      { n: 3, x: 52, y: 24, w: 40, h: 38, label: '陶土、灰绿、灰蓝和灰褐作为卡片底色' },
      { n: 4, x: 7, y: 23, w: 86, h: 73, label: '八张卡片重复标题、箭头、插画和圆角骨架' },
      { n: 5, x: 27, y: 2.5, w: 48, h: 17, label: '衬线标题与无衬线导语形成信息层级' },
    ] },
  ],
  modules: [
    { id: 'logo', status: '单点现象', keywords: ['大写字标', '导航左置'], conclusion: '官网首屏导航左侧使用全大写 “EVERY MOTHER” 字标；当前只有一个触点证据。', evidenceIds: ['EM-E01'], claims: [
      { type: '事实', text: '字标由带字距的全大写英文组成，位于白色导航左侧。', evidenceIds: ['EM-E01'] },
    ], limitation: '未采集页尾、App、社交头像或合作页面，不能确认标志变体与签名规则。' },
    { id: 'color', status: '局部模式', keywords: ['深绿', '低饱和分类色'], conclusion: '首页以深绿标记操作与横幅，并以四组低饱和底色区分课程卡片。', evidenceIds: ['EM-E01', 'EM-E02'], claims: [
      { type: '事实', text: '首屏行动按钮和横幅使用深绿；大面积背景为白色。', evidenceIds: ['EM-E01'] },
      { type: '事实', text: '课程卡片重复使用陶土、灰绿、灰蓝和灰褐色。', evidenceIds: ['EM-E02'] },
      { type: '规律', text: '同一首页中，深绿用于操作层，低饱和色用于课程分类区。', evidenceIds: ['EM-E01', 'EM-E02'] },
      { type: '推论', text: '首页把颜色分配给不同信息角色，但不足以证明全品牌色彩规范。', evidenceIds: ['EM-E01', 'EM-E02'] },
    ], limitation: '没有色值、可访问性或其他触点证据。' },
    { id: 'type', status: '局部模式', keywords: ['衬线标题', '无衬线正文'], conclusion: '首页首屏与课程区都以衬线大标题配无衬线说明文字。', evidenceIds: ['EM-E01', 'EM-E02'], claims: [
      { type: '事实', text: '首屏主标题使用高对比衬线字，说明文字、导航和按钮使用无衬线字。', evidenceIds: ['EM-E01'] },
      { type: '事实', text: '课程区标题使用衬线字，导语和卡片标题使用无衬线字。', evidenceIds: ['EM-E02'] },
      { type: '规律', text: '同一首页两个区段重复“衬线大标题＋无衬线信息文本”的层级。', evidenceIds: ['EM-E01', 'EM-E02'] },
    ], limitation: '未确认字体名称，也未证明该搭配延伸到其他触点。' },
    { id: 'graphics', status: '局部模式', keywords: ['细箭头', '圆角容器'], conclusion: '八张课程卡片重复使用右向细箭头和大圆角矩形容器。', evidenceIds: ['EM-E02'], claims: [
      { type: '事实', text: '每张卡片标题右侧均出现右向细箭头，卡片四角均为大圆角。', evidenceIds: ['EM-E02'] },
      { type: '规律', text: '箭头位置、线条粗细和容器轮廓在八张卡片中保持一致。', evidenceIds: ['EM-E02'] },
    ], limitation: '只能确认这一页面区段的图形语法，不能确认全站图标系统。' },
    { id: 'illustration', status: '局部模式', keywords: ['连续线条', '无五官人物', '身体姿态'], conclusion: '八张课程卡片重复使用无五官、连续线条的人物姿态插画。', evidenceIds: ['EM-E02'], claims: [
      { type: '事实', text: '人物没有五官细节，身体由少量连续曲线构成。', evidenceIds: ['EM-E02'] },
      { type: '事实', text: '不同课程使用不同坐姿或蜷曲姿态，没有出现器官示意图。', evidenceIds: ['EM-E02'] },
      { type: '规律', text: '八张卡片保持相近的人物抽象度、线宽和留白比例。', evidenceIds: ['EM-E02'] },
      { type: '推论', text: '该首页区段把“姿态＋线条人物＋分类底色”作为课程分类组件。', evidenceIds: ['EM-E02'] },
    ], limitation: '只观察到一个页面区段，不能称为跨触点插画系统。' },
    { id: 'photo', status: '单点现象', keywords: ['居家空间', '运动人物'], conclusion: '官网首屏使用一张浅色居家空间中的侧卧运动人物摄影。', evidenceIds: ['EM-E01'], claims: [
      { type: '事实', text: '人物身穿蓝色运动服，在浅色客厅地毯上侧卧，画面使用横向圆角裁切。', evidenceIds: ['EM-E01'] },
    ], limitation: '单张图片无法证明人物选择、场景、光线或后期规则。' },
    { id: 'layout', status: '局部模式', keywords: ['大留白', '左右首屏', '四列网格'], conclusion: '首页以左右分栏组织首屏，并用四列等宽网格组织八个课程类别。', evidenceIds: ['EM-E01', 'EM-E02'], claims: [
      { type: '事实', text: '首屏左侧为标题、说明与按钮，右侧为圆角摄影。', evidenceIds: ['EM-E01'] },
      { type: '事实', text: '课程区为两行四列等宽卡片，卡片间距和尺寸一致。', evidenceIds: ['EM-E02'] },
      { type: '规律', text: '首页两个区段都使用大面积白色留白、明确标题区和圆角内容容器。', evidenceIds: ['EM-E01', 'EM-E02'] },
    ], limitation: '只观察到桌面截图，未验证移动端响应规则与其他页面网格。' },
    { id: 'motion', status: '未观察到', keywords: ['未观察到'], conclusion: '未观察到足够公开证据。', evidenceIds: [], claims: [], limitation: '静态截图不能证明转场、滚动反馈、视频播放或微交互。' },
    { id: 'data-state', status: '未观察到', keywords: ['未观察到'], conclusion: '未观察到足够公开证据。', evidenceIds: [], claims: [], limitation: '未进入会员或 App，无法观察进度、数据、完成和错误状态。' },
    { id: 'content-template', status: '局部模式', keywords: ['固定卡片骨架', '课程分类'], conclusion: '八个课程类别使用相同的标题、箭头、插画和圆角卡片骨架。', evidenceIds: ['EM-E02'], claims: [
      { type: '事实', text: '八张卡片均在左上放标题、右上放箭头，并在下方放人物插画。', evidenceIds: ['EM-E02'] },
      { type: '规律', text: '内容骨架固定，课程名称、人物姿态、线条颜色与底色发生变化。', evidenceIds: ['EM-E02'] },
      { type: '推论', text: '该区段使用模板化组件承载多个课程类别。', evidenceIds: ['EM-E02'] },
    ], limitation: '未采集课程详情、视频封面或知识内容模板。' },
    { id: 'campaign', status: '未观察到', keywords: ['未观察到'], conclusion: '未观察到足够公开证据。', evidenceIds: [], claims: [], limitation: '本轮没有官方 Campaign、社交媒体或联名页面截图。' },
    { id: 'consistency', status: '未观察到', keywords: ['单一触点'], conclusion: '当前证据全部来自官网首页，不能判断跨触点一致性。', evidenceIds: ['EM-E01', 'EM-E02'], claims: [
      { type: '事实', text: 'EM-E01 与 EM-E02 均属于同一触点 EM-TP01。', evidenceIds: ['EM-E01', 'EM-E02'] },
    ], limitation: '至少还需一个不同官方触点的已归档证据。' },
  ],
  summary: [
    { keywords: ['衬线', '无衬线'], sentence: '首页首屏与课程区都以衬线大标题配无衬线说明文字，当前只证明首页内层级。', moduleId: 'type', evidenceIds: ['EM-E01', 'EM-E02'] },
    { keywords: ['连续线条', '无五官人物'], sentence: '八张课程卡片重复同一人物抽象度和线条语法。', moduleId: 'illustration', evidenceIds: ['EM-E02'] },
    { keywords: ['低饱和分类色'], sentence: '陶土、灰绿、灰蓝和灰褐用于课程卡片底色，颜色随类别变化。', moduleId: 'color', evidenceIds: ['EM-E02'] },
    { keywords: ['固定卡片骨架'], sentence: '八张卡片保持相同标题、箭头、插画位置和圆角比例。', moduleId: 'content-template', evidenceIds: ['EM-E02'] },
    { keywords: ['居家运动摄影'], sentence: '首屏使用一张浅色居家空间中的侧卧运动人物摄影；当前仅为单点证据。', moduleId: 'photo', evidenceIds: ['EM-E01'] },
  ],
  crossTouchpointPatterns: [],
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
function statusClass(status) { return { '未观察到': 'is-unobserved', '单点现象': 'is-single', '局部模式': 'is-local', '规律': 'is-pattern' }[status] || ''; }

function renderEvidence(id, moduleId) {
  const item = evidenceMap[id]; if (!item) return '';
  return `<article class="research-evidence" id="${moduleId}-evidence-${item.id}">
    <header><div><span>${item.id} · ${item.type}</span><h4>${item.pageTitle}</h4></div><span class="evidence-touchpoint">${item.touchpointId}</span></header>
    <div class="evidence-media"><button class="evidence-figure" data-open-image="${item.image}" data-image-alt="${item.alt}" data-image-title="${item.id} / ${item.pageTitle}" aria-label="打开 ${item.id} 高清截图">
      <img src="${item.image}" alt="${item.alt}" /><span class="annotation-layer" aria-hidden="true">${item.annotations.map((a) => `<i class="evidence-annotation" style="left:${a.x}%;top:${a.y}%;width:${a.w}%;height:${a.h}%"><b>${a.n}</b></i>`).join('')}</span><span class="zoom-hint">VIEW FULL ↗</span>
    </button><div class="evidence-meta"><button type="button" data-toggle-annotations aria-pressed="true">隐藏标注</button><span>截图日期 ${item.capturedAt}</span><a href="${item.url}" target="_blank" rel="noreferrer">原始页面 ↗</a></div>
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
  <section class="research-hero" id="research-top"><div class="research-hero-copy"><div class="case-tags"><span>OFFICIAL SOURCES ONLY</span><span>SINGLE BRAND STUDY</span><span>NO SCORING</span></div><span class="case-index">SAMPLE 01 / VISUAL STRATEGY RESEARCH</span><h1>${data.researchScope.brand}</h1><p>当前只对可复核的官网首页证据作判断。事实、页面内规律与推论分别标记；证据不足的模块保持“未观察到”。</p><a class="case-site-link" href="${data.researchScope.officialUrl}" target="_blank" rel="noreferrer"><span>${data.researchScope.domain}</span><span>OPEN OFFICIAL SITE ↗</span></a></div>
    <div class="research-scope-card"><span>RESEARCH SCOPE</span><dl><div><dt>研究日期</dt><dd>${data.researchScope.researchedAt}</dd></div><div><dt>正式触点</dt><dd>${data.researchScope.coveredTouchpointIds.length} 个</dd></div><div><dt>正式证据</dt><dd>${data.evidence.length} 条</dd></div><div><dt>来源规则</dt><dd>${data.researchScope.sourcePolicy}</dd></div></dl></div></section>
  <section class="research-section touchpoint-section"><header><span>01 / SCOPE</span><h2>研究说明</h2><p>已采集与未采集的公开触点同时列出，避免把缺失资料误判为品牌没有对应系统。</p></header><div class="touchpoint-list">${data.touchpoints.map((item) => `<article class="${item.evidenceIds.length?'is-collected':''}"><span>${item.id}</span><strong>${item.type}</strong><em>${item.status}</em><p>${item.note}</p>${item.url?`<a href="${item.url}" target="_blank" rel="noreferrer">SOURCE ↗</a>`:'<small>NO SOURCE CAPTURED</small>'}</article>`).join('')}</div></section>
  <section class="research-section" id="research-summary"><header><span>02 / VERIFIED SUMMARY</span><h2>结论摘要</h2><p>每条摘要都来自下方已标注结论；点击卡片可定位模块。</p></header><div class="research-summary-grid">${data.summary.map((item,i) => `<a href="#module-${item.moduleId}"><b>${String(i+1).padStart(2,'0')}</b><div class="keyword-row">${item.keywords.map((k)=>`<span>${k}</span>`).join('')}</div><p>${item.sentence}</p><small>${item.evidenceIds.join(' · ')}</small></a>`).join('')}</div></section>
  <section class="research-section" id="research-coverage"><header><span>03 / SYSTEM COVERAGE</span><h2>视觉系统覆盖图</h2><p>这是证据状态，不是评分。局部模式只代表同一页面内重复，单点现象只代表一次出现。</p></header><div class="coverage-groups">${visualSystemGroups.map((group)=>`<article><header><b>${group.number}</b><span>${group.name}</span></header><div>${group.moduleIds.map((id)=>{const m=data.modules.find(x=>x.id===id);return `<a href="#module-${id}" class="${statusClass(m.status)}"><b>${moduleMap[id].number}</b><span>${moduleMap[id].name}</span><em>${m.status}</em></a>`;}).join('')}</div></article>`).join('')}</div></section>
  <section class="research-section" id="research-evidence"><header><span>04 / MODULE EVIDENCE</span><h2>模块证据</h2><p>12 个模块按视觉系统分组。打开模块查看事实、规律、推论、截图与限制。</p></header><div class="module-groups">${visualSystemGroups.map((group)=>`<section class="module-group"><div class="module-group-title"><b>${group.number}</b><h3>${group.name}</h3></div><div>${group.moduleIds.map((id)=>renderModule(data.modules.find((m)=>m.id===id))).join('')}</div></section>`).join('')}</div></section>
  <section class="research-section" id="research-cross"><header><span>05 / CROSS-TOUCHPOINT</span><h2>跨触点规律</h2><p>只有至少两个不同官方触点重复出现的规则才进入本节。</p></header><div class="cross-empty"><span>未观察到</span><h3>尚不能建立跨触点视觉规律</h3><p>EM-E01 与 EM-E02 都属于官网首页 EM-TP01。当前只能确认首页内模式，不能把它写成全品牌系统。</p></div></section>
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
