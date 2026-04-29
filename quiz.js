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
    chapter: "4. 探索：分歧的古老廢墟",
    scenario: "在廢墟中發現一面牆壁，有兩扇截然不同風格的門，你會走哪一邊？",
    options: [
      { label:"A", text:"看似有人來過，灰塵的痕跡比較多的那扇。", type:"A" },
      { label:"B", text:"沒有痕跡的暗道才是真正的考驗。走無人通過的暗門吧。", type:"B" },
      { label:"C", text:"牆壁紋飾看起來像密碼，花時間研究它就能找出線索。", type:"C" },
      { label:"D", text:"看兩邊的門口位置，拋入人工光照源探測，找穩妥路線。", type:"D" }
    ]
  },
  {
    chapter: "5. 迷途：神祕的泉水",
    scenario: "森林深處有一處噴泉，據說喝下去能獲得力量，但可能會有代價。你會？",
    options: [
      { label:"A", text:"先測量水質成分特性——確認有沒有毒物質。", type:"A" },
      { label:"B", text:"告訴自己冒險就該無所畏懼，直接喝大一口。", type:"B" },
      { label:"C", text:"仔細觀察研究泉水流向，確認來源。", type:"C" },
      { label:"D", text:"你聞著水的味道不分青紅皂白就喝了下去——有時候不想那麼多。", type:"D" }
    ]
  },
  {
    chapter: "6. 衝突：城鎮裡的爭端",
    scenario: "在路上的酒館，你看到一群壯漢正在欺負一名年紀小的詩人。你會？",
    options: [
      { label:"A", text:"直接走到壯漢面前，嚴肅要求他們停止這行為。", type:"A" },
      { label:"B", text:"先冷靜觀察狀況，用隱蔽方法讓壯漢分心，再趁機救出詩人。", type:"B" },
      { label:"C", text:"暫時觀察，先找酒館老闆、找其他人來一起幫忙。", type:"C" },
      { label:"D", text:"不管別人閒心想法，只想直接走過去，前往目的地。", type:"D" }
    ]
  },
  {
    chapter: "7. 迷境：被困的深淵",
    scenario: "你跟夥伴遊歷在一處回音很響的地底湖深處，看見遠處有燭光。你會？",
    options: [
      { label:"A", text:"想靠大喊打招呼，確定那裡還有人。否則先建立據點。", type:"A" },
      { label:"B", text:"留下所有追蹤的線索，推算可能的全盤情勢。", type:"B" },
      { label:"C", text:"記住入口的方向，默默倒退回到原路。", type:"C" },
      { label:"D", text:"我真正想做的是感受這裡的氛圍，傾聽深淵的聲音。", type:"D" }
    ]
  },
  {
    chapter: "8. 抉擇：被隱瞞的真相",
    scenario: "你發現一直信任的旅人竟然在利用你，這時你會？",
    options: [
      { label:"A", text:"會先用力量壓制對方，確認真相再說。", type:"A" },
      { label:"B", text:"不聲不響先離開，分析對方的真面目，重新制定策略。", type:"B" },
      { label:"C", text:"直白拍桌表示不開心，但仍試著讓對方解釋。", type:"C" },
      { label:"D", text:"瞬間決定先離開，之後再看要不要對付對方。", type:"D" }
    ]
  },
  {
    chapter: "9. 決戰：面對最終的門面",
    scenario: "魔王就在你面前，他告訴你：只要你加入他，就能統御世界。你做什麼選擇？",
    options: [
      { label:"A", text:"「既已到達這裡，我的宗旨已有了完整歸屬」，以此走下去。", type:"A" },
      { label:"B", text:"「算了吧，我從來就是為了打敗你而存在的。」", type:"B" },
      { label:"C", text:"「比起改變這世界，我更寧可在這世界自行好好走下去。」", type:"C" },
      { label:"D", text:"「想到那麼遠為了等這一刻，首先得先確認光是否存在？」", type:"D" }
    ]
  },
  {
    chapter: "10. 歸途：和平之後",
    scenario: "擊敗魔王後，世界恢復了平靜。你在歸鄉後開始做什麼？",
    options: [
      { label:"A", text:"留在異世界跟村莊的大師學習，繼續遇見新的冒險者。", type:"A" },
      { label:"B", text:"開始記載每一段記憶，完成一本冒險筆記。", type:"B" },
      { label:"C", text:"領養一隻旅途中的寵獸，成為隱居山林的人。", type:"C" },
      { label:"D", text:"再做一次全新的冒險，看看還能到達什麼地方。", type:"D" }
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
