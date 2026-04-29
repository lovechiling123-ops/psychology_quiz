// ===== Quiz Data =====
const questions = [
  {
    chapter: "1. 啟程：突如其來的召喚",
    scenario: "你睜開眼，發現自己身處純白的空間。一位神祕的存在告訴你，你必須前往異世界解決一場危機。你的第一個反應是？",
    options: [
      { label:"A", text:"詢問對方是誰，並要求解釋清楚這場危機的細節。", type:"A" },
      { label:"B", text:"握緊拳頭，雖然不安但已經準備好面對挑戰。", type:"B" },
      { label:"C", text:"保持沉默並觀察周圍，尋找這空間是否有出口。", type:"C" },
      { label:"D", text:"擔心原本世界的朋友和家人，詢問是否還能回來。", type:"D" }
    ]
  },
  {
    chapter: "2. 抵達：陌生的荒野",
    scenario: "降落在異世界的一片森林中，遠處傳來魔物的嘶吼聲，你會？",
    options: [
      { label:"A", text:"爬到高處觀察嘶吼聲的來源與數量。", type:"A" },
      { label:"B", text:"尋找趁手的木棍或石塊，隨時準備迎戰。", type:"B" },
      { label:"C", text:"尋找可以隱藏行蹤的灌木叢，悄悄移動。", type:"C" },
      { label:"D", text:"試著判斷那嘶吼聲中是否帶有求救或痛苦的情緒。", type:"D" }
    ]
  },
  {
    chapter: "3. 遭遇：倒在路邊的商人",
    scenario: "你遇到一位受傷的商人，他的貨物散落一地。這時，魔物的氣息正在逼近。你會？",
    options: [
      { label:"A", text:"優先保護商人的安全，挺身擋在他與魔物之間。", type:"A" },
      { label:"B", text:"快速幫商人包紮，並冷靜地指揮他躲到安全的地方。", type:"B" },
      { label:"C", text:"趁魔物還沒發現，快速收好最有價值的物資並帶走商人。", type:"C" },
      { label:"D", text:"緊握商人的手安慰他，告訴他「別怕，我會幫你」。", type:"D" }
    ]
  },
  {
    chapter: "4. 探索：分歧的古老地圖",
    scenario: "在廢墟中發現一張地圖，有四條通往目標的路，你會選擇哪一條？",
    options: [
      { label:"A", text:"看起來最危險、但能最快抵達的直線路徑。", type:"A" },
      { label:"B", text:"需要解開複雜符文謎題才能通過的安全密道。", type:"B" },
      { label:"C", text:"地形錯綜複雜，易於躲避敵人追蹤的蜿蜒小徑。", type:"C" },
      { label:"D", text:"會經過許多村落，能與人交流獲取情報的路徑。", type:"D" }
    ]
  },
  {
    chapter: "5. 誘惑：神祕的泉水",
    scenario: "森林深處有一處噴泉，據說喝下去能獲得力量，但可能會有代價。你會？",
    options: [
      { label:"A", text:"先觀察泉水周邊的植物與生態，判斷是否有毒。", type:"A" },
      { label:"B", text:"相信自己的直覺與體質，直接喝下去嘗試。", type:"B" },
      { label:"C", text:"找個容器裝起來，等之後遇到專家鑑定再說。", type:"C" },
      { label:"D", text:"祈禱泉水能賦予你守護夥伴的力量，才心懷敬畏地喝。", type:"D" }
    ]
  },
  {
    chapter: "6. 衝突：城鎮裡的爭端",
    scenario: "在鎮上的酒館，你看到一群壯漢正在欺負一名弱小的詩人，你會？",
    options: [
      { label:"A", text:"直接走到壯漢面前，嚴厲要求他們停止粗暴行為。", type:"A" },
      { label:"B", text:"點燃旁邊的稻草製造小騷亂，趁亂帶走詩人。", type:"B" },
      { label:"C", text:"觀察酒館內誰才是真正的老大，找他來調停。", type:"C" },
      { label:"D", text:"走向詩人關心他的傷勢，用身體護住他。", type:"D" }
    ]
  },
  {
    chapter: "7. 逆境：被困的深淵",
    scenario: "你與夥伴被困在隨時會崩塌的地底迷宮，糧食所剩無幾。你會？",
    options: [
      { label:"A", text:"鼓勵大家不要放棄，帶頭挖掘出口。", type:"A" },
      { label:"B", text:"靜下心來分析迷宮的構造，推算可能的生還出口。", type:"B" },
      { label:"C", text:"減少自己的體力消耗，默默尋找牆縫中流出的水源。", type:"C" },
      { label:"D", text:"把自己的份量分給更虛弱的人，跟大家分享過去溫馨的回憶。", type:"D" }
    ]
  },
  {
    chapter: "8. 抉擇：被隱瞞的真相",
    scenario: "你發現一直信任的委託人竟然在利用你，這時你會？",
    options: [
      { label:"A", text:"雖然憤怒，但會先把手上的委託完成再跟對方算帳。", type:"A" },
      { label:"B", text:"立刻停下所有行動，重新評估這整件事背後的陰謀。", type:"B" },
      { label:"C", text:"表面上裝作不知道，私下蒐集證據準備反擊。", type:"C" },
      { label:"D", text:"感到難過並當面質問對方，試圖理解他的苦衷。", type:"D" }
    ]
  },
  {
    chapter: "9. 決戰：面對最終的宿敵",
    scenario: "魔王就在你面前，他向你承諾：只要你加入他，就能統治世界。你的回答是？",
    options: [
      { label:"A", text:"「我不感興趣，你的存在只會帶來混亂。」", type:"A" },
      { label:"B", text:"「別廢話了，我的劍就是為了打敗你而存在的。」", type:"B" },
      { label:"C", text:"「比起統治世界，我更喜歡在世界自由行走。」", type:"C" },
      { label:"D", text:"「如果統治是為了停止流血，那你可以先放下武器。」", type:"D" }
    ]
  },
  {
    chapter: "10. 歸宿：和平之後",
    scenario: "危機解除後，世界恢復了平靜，你希望在哪裡度過餘生？",
    options: [
      { label:"A", text:"留在皇城擔任高級軍官，維持得來不易的和平。", type:"A" },
      { label:"B", text:"隱居在深山的高塔，繼續鑽研未知的學問。", type:"B" },
      { label:"C", text:"重新背起行囊，探索那些還沒去過的異國邊境。", type:"C" },
      { label:"D", text:"經營一家熱鬧的旅店，每天聽旅人們訴說故事。", type:"D" }
    ]
  }
];

// Results: key = "primary-secondary" e.g. "B-A" means primary=勇氣, secondary=智慧
const results = {
  "B-A": {
    job: "魔劍士",
    subtitle: "戰鬥中帶有謀略",
    primary: "勇氣／行動", secondary: "智慧",
    desc: "你擁有一種罕見的平穩，習慣在混亂的局勢中梳理出清晰的脈絡。你不喜歡盲目的衝動，對你而言，真正的強大是建立在「絕對的自我掌控」之上。在他人眼中，你是高壓環境下依然能保持優雅的異類。這源於你對行動效率的極致追求，以及對目標近乎冷酷的執行力。"
  },
  "B-D": {
    job: "聖騎士",
    subtitle: "正直且忠誠的守護者",
    primary: "勇氣／行動", secondary: "感性",
    desc: "你的行動力源於內心強大的信念驅動。對你來說，力量並不是為了征服，而是為了守護。你擁有一種與生俱來的責任感，讓你將他人的安危置於自身之前。這種特質讓你成為關鍵中最堅實的屏障，你的價值觀並非來自於榮譽，而是源自於「被需要」時展現出的那份安定感。"
  },
  "B-C": {
    job: "狂戰士",
    subtitle: "極致的行動與直覺",
    primary: "勇氣／行動", secondary: "敏銳",
    desc: "你傾向完全活在當下，追求最直接、最純粹的生命節奏。面對未知的突發危險，你的身體總是能在思考之前就做出反應——這並非衝動，而是一種對本能的絕對信任。你擅長在極端環境中進入一種無心無旁騖的狀態，將所有的意志集中到眼前的交叉口。那份瞬間的爆發力是來自你靈魂深處對自由的渴望。"
  },
  "A-B": {
    job: "戰略家",
    subtitle: "佈線的守衛指揮官",
    primary: "智慧／謀略", secondary: "勇氣",
    desc: "你習慣在行動前先在大腦中模擬出無數個可能的未來，比起其他人，你更相信格局的布局與周密營運。你能精準地掌握時勢，將其轉化為冒險成果的脈絡。這種特質讓你適合守衛全局、掌控一切。你不隨波逐流，對你而言，最完美的勝利是一切都如你所料地發生。"
  },
  "A-D": {
    job: "大賢者",
    subtitle: "遍歷古今的智者",
    primary: "智慧／謀略", secondary: "感性",
    desc: "你滿足的不只是單純的知識，更是對世間萬物運行規律的理解與建構。你能理解事物的運轉與脈絡，進而找到通往結果的多種路徑。你的信仰是以享受過程的視角，用冷靜觀察世界，卻又能以開放的態度理解生命的無窮可能。這種智慧的廣度，讓你成為指引他人迷途的星光。"
  },
  "A-C": {
    job: "煉金術師",
    subtitle: "搭載在智慧前端的煉金者",
    primary: "智慧／謀略", secondary: "敏銳",
    desc: "你的思維靈活且不拘一格，對事物的理性判斷充滿好奇。你善於在有限的條件下，透過精巧的計算與策略來尋找突破口與解決方案。你追求的是創新與實效的平衡。性格中帶有一種獨立的工匠精神，樸素卻難能可貴的專家風範，讓你所面向追求的外界的堅實更真實。"
  },
  "C-A": {
    job: "影之暗殺者",
    subtitle: "極致效率的專家",
    primary: "敏銳／生存", secondary: "智慧",
    desc: "你是極致的戰士靈魂，性格內斂且冷凝。你習慣觀察週遭每個細節與線索，並在其中找出關鍵的一線。你擁有一種隱而不顯的強大氣場，不輕易受外界情緒干擾。對你而言，最好的行動是悄聲進擊。你追求的是對自己的精準掌控，以及在完成目標後優雅隱匿的自信。"
  },
  "C-B": {
    job: "荒野遊俠",
    subtitle: "在邊境生存的前衛者",
    primary: "敏銳／生存", secondary: "勇氣",
    desc: "你的意志力有極強的韌性，對陌生環境有著天生的適應能力。你相信命運掌握在自己手中，不需要依靠任何他人的庇蔭就能追求自我。你追求的是一種不受約束的生存空間。雖然外表顯得孤獨，但你心中卻對自己持有極高的堅定度，是能獨自在荒野中走出路途的開拓者。"
  },
  "C-D": {
    job: "幻影盜賊",
    subtitle: "自由奔放的冒險家",
    primary: "敏銳／生存", secondary: "感性",
    desc: "你擁有高度的敏感與靈魂驅動能力，能將搶眼壯闊的創造靈感化為行動。你對人性有著深刻的理解，並將每段旅途視為一齣華麗的演出。你享受生命中的變換與爛漫，不畏死亡的教條。自由奔放的生活態度，才是冒險中最珍貴的戰利品。"
  },
  "D-B": {
    job: "聖職者",
    subtitle: "心靈偉大的治癒之柱",
    primary: "感性／同理", secondary: "勇氣",
    desc: "你的內在就是來自對於生命的敬畏。你擁有一種不被他人輕易覺察的善意力量。那些被擠壓交錯的一切，最終都會塑造成你最終的成色。你的人格充滿著溫暖的堅定力量。在面對黑暗時，你並非不怯懼，而是因為你懂得守護心中的光芒而勇往前行。你是彷彿隱於黑暗中，卻是最不可撼動的存在。"
  },
  "D-A": {
    job: "占星術師",
    subtitle: "感知命運的光芒者",
    primary: "感性／同理", secondary: "智慧",
    desc: "你善於透過歲月來觀察如同遙遠微小的微光，再用冷靜的意識細線串起被遺忘的記憶。你對於未知帶有著高度的包容力，並相信萬物皆有其遵行的秩序。你追尋的是與世界的秩序共存的歷史使命。這種洞察的精神，讓你的意識中帶有一種深邃的神秘且安定的力量。"
  },
  "D-C": {
    job: "吟遊詩人",
    subtitle: "流浪世界的夢想靈魂",
    primary: "感性／同理", secondary: "敏銳",
    desc: "你善於將感受化為美感式的流動與故事。透過長篇敘事或表達藝術來影響他人的心靈，走進遙遠的風景體驗不同的人生。你運用最柔韌的方式化解對立，追求的是靈魂的自由與純粹的美。對你而言，這個世界中最不可或缺的旋律，就是永恆。"
  }
};

// ===== App State =====
let currentQ = 0;
let answers = [];

// ===== DOM References =====
const coverScreen = document.getElementById('cover-screen');
const quizScreen = document.getElementById('quiz-screen');
const resultScreen = document.getElementById('result-screen');
const startBtn = document.getElementById('start-quiz-btn');
const progressFill = document.getElementById('progress-fill');
const quizStep = document.getElementById('quiz-step');
const quizChapter = document.getElementById('quiz-chapter');
const quizScenario = document.getElementById('quiz-scenario');
const optionsList = document.getElementById('options-list');
const nextBtn = document.getElementById('next-btn');

// ===== Cover Particles =====
(function createParticles() {
  const c = document.getElementById('particles-container');
  for (let i = 0; i < 30; i++) {
    const p = document.createElement('div');
    p.classList.add('particle');
    p.style.left = Math.random()*100 + '%';
    p.style.width = p.style.height = (2+Math.random()*4) + 'px';
    p.style.animationDuration = (8+Math.random()*12) + 's';
    p.style.animationDelay = (Math.random()*15) + 's';
    p.style.opacity = 0.3+Math.random()*0.7;
    c.appendChild(p);
  }
})();

// ===== Screen Navigation =====
function showScreen(screen) {
  document.querySelectorAll('.screen').forEach(s => s.classList.remove('active'));
  screen.classList.add('active');
  window.scrollTo(0, 0);
}

// ===== Start Quiz =====
startBtn.addEventListener('click', () => {
  currentQ = 0;
  answers = [];
  showScreen(quizScreen);
  renderQuestion();
});

// ===== Render Question =====
function renderQuestion() {
  const q = questions[currentQ];
  progressFill.style.width = ((currentQ) / questions.length * 100) + '%';
  quizStep.textContent = `第 ${currentQ+1} 題 / 共 ${questions.length} 題`;
  quizChapter.textContent = q.chapter;
  quizScenario.textContent = q.scenario;

  optionsList.innerHTML = '';
  q.options.forEach((opt, i) => {
    const card = document.createElement('div');
    card.className = 'option-card';
    card.dataset.type = opt.type;
    card.innerHTML = `<span class="option-label">${opt.label}.</span><span class="option-text">${opt.text}</span>`;
    card.addEventListener('click', () => selectOption(card, opt.type));
    optionsList.appendChild(card);
  });

  nextBtn.classList.remove('enabled');
  nextBtn.textContent = currentQ < questions.length - 1 ? '下一題 →' : '查看鑑定結果 →';

  // Fade in animation
  document.querySelector('.quiz-container').classList.remove('quiz-fade-enter');
  void document.querySelector('.quiz-container').offsetWidth;
  document.querySelector('.quiz-container').classList.add('quiz-fade-enter');
}

// ===== Select Option =====
function selectOption(card, type) {
  document.querySelectorAll('.option-card').forEach(c => c.classList.remove('selected'));
  card.classList.add('selected');
  answers[currentQ] = type;
  nextBtn.classList.add('enabled');
}

// ===== Next Button =====
nextBtn.addEventListener('click', () => {
  if (!answers[currentQ]) return;
  if (currentQ < questions.length - 1) {
    currentQ++;
    renderQuestion();
  } else {
    showResult();
  }
});

// ===== Calculate & Show Result =====
function showResult() {
  const scores = { A:0, B:0, C:0, D:0 };
  answers.forEach(a => scores[a]++);

  // Sort to find primary and secondary
  const sorted = Object.entries(scores).sort((a,b) => b[1] - a[1]);
  const primary = sorted[0][0];
  let secondary = sorted[1][0];

  // If tie for secondary, pick the one that appears first in answers (tiebreaker)
  if (sorted[1][1] === sorted[2]?.[1]) {
    const candidates = sorted.filter(s => s[1] === sorted[1][1]).map(s => s[0]);
    // Pick the one the user chose more recently
    for (let i = answers.length - 1; i >= 0; i--) {
      if (candidates.includes(answers[i]) && answers[i] !== primary) {
        secondary = answers[i];
        break;
      }
    }
  }

  const key = `${primary}-${secondary}`;
  const result = results[key];

  if (!result) {
    // Fallback: if somehow no match, show primary info
    document.getElementById('result-job').textContent = '神秘旅人';
    document.getElementById('result-subtitle').textContent = '無法被歸類的靈魂';
    document.getElementById('result-attrs').textContent = `主屬性：${primary} ／ 次屬性：${secondary}`;
    document.getElementById('result-desc').textContent = '你的靈魂軌跡超越了既定的分類，是一個獨一無二的存在。';
  } else {
    document.getElementById('result-job').textContent = result.job;
    document.getElementById('result-subtitle').textContent = result.subtitle;
    document.getElementById('result-attrs').textContent = `主屬性：${result.primary} ／ 次屬性：${result.secondary}`;
    document.getElementById('result-desc').textContent = result.desc;
  }

  progressFill.style.width = '100%';
  showScreen(resultScreen);
}

// ===== Retry =====
document.getElementById('retry-btn').addEventListener('click', () => {
  showScreen(coverScreen);
});
