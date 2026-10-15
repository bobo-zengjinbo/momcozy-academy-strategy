const views = {
  overview: '设计策略总览',
  strategy: '战略源站与职责',
  cases: '视觉竞品案例',
  matrix: '横向能力矩阵',
  opportunity: 'Momcozy 设计机会',
};

const legacyHashes = {
  top: 'overview',
  'source-strategy': 'strategy',
  landscape: 'overview',
  cases: 'cases',
  matrix: 'matrix',
  opportunity: 'opportunity',
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

const tabs = [...document.querySelectorAll('[data-tab]')];
const panels = [...document.querySelectorAll('[data-panel]')];
const viewTitle = document.querySelector('#viewTitle');
const caseTools = document.querySelector('#caseTools');
const caseSearch = document.querySelector('#caseSearch');
const filters = [...document.querySelectorAll('.filter')];
const caseNav = document.querySelector('#caseNav');
const caseCount = document.querySelector('#caseCount');
const caseDetail = document.querySelector('#caseDetail');
const modal = document.querySelector('#imageModal');
const modalImage = modal.querySelector('img');
const modalTitle = document.querySelector('#modalTitle');
const modalClose = modal.querySelector('.modal-close');

let activeView = 'overview';
let activeFilter = 'all';
let activeCaseId = cases[0].id;
let query = '';

function setTab(name, updateUrl = true) {
  if (!views[name]) name = 'overview';
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

  viewTitle.textContent = views[name];
  caseTools.hidden = name !== 'cases';
  if (name === 'cases') renderCases();

  if (updateUrl) history.replaceState(null, '', `#${name}`);
}

function filteredCases() {
  const normalized = query.trim().toLowerCase();
  return cases.filter((item) => {
    const matchesType = activeFilter === 'all' || item.category === activeFilter;
    const haystack = [item.name, item.descriptor, item.thesis, ...item.tags].join(' ').toLowerCase();
    return matchesType && (!normalized || haystack.includes(normalized));
  });
}

function renderCases() {
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

  caseDetail.innerHTML = `
    <div class="case-visual">
      <button class="case-screen" data-open-image="${item.image}" data-image-alt="${item.alt}" data-image-title="${item.name}">
        <img src="${item.image}" alt="${item.alt}" />
        <span>VIEW SCREEN</span>
      </button>
      <a class="case-site-link" href="${item.url}" target="_blank" rel="noreferrer">
        <span>${item.domain}</span><span>OPEN SITE ↗</span>
      </a>
    </div>
    <div class="case-content">
      <div class="case-tags">${item.tags.map((tag) => `<span>${tag}</span>`).join('')}</div>
      <h1>${item.name}</h1>
      <p class="case-thesis">${item.thesis}</p>
      <dl class="case-analysis">
        <div><dt>视觉信号</dt><dd>${item.visual}</dd></div>
        <div><dt>关键机制</dt><dd>${item.mechanism}</dd></div>
        <div><dt>边界风险</dt><dd>${item.risk}</dd></div>
        <div><dt>可借鉴</dt><dd>${item.takeaway}</dd></div>
      </dl>
    </div>
  `;
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
    filters.forEach((item) => item.classList.toggle('is-active', item.dataset.filter === 'all'));
    setTab('cases');
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

caseDetail.addEventListener('click', (event) => {
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
  setTab(legacyHashes[hash] ?? hash, false);
});

const initialHash = location.hash.slice(1);
setTab(legacyHashes[initialHash] ?? initialHash ?? 'overview', false);
renderCases();
