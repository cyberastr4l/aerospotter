/* ==========================================
   AEROSpotter Game Controller - Runway Brutalist Final
   ========================================== */

// 1. Planes & Airports Database (integrated, path pointing to local planes/ and airports/ subdirectories)
const GAME_DATABASE = [
    {
        type: "plane",
        name_en: "A300 - DHL",
        name_pt: "A300 - DHL",
        filename: "planes/A300 - DHL🇩🇪.jpeg"
    },
    {
        type: "plane",
        name_en: "A320 - Aer Lingus",
        name_pt: "A320 - Aer Lingus",
        filename: "planes/A320 - Aer Lingus🇮🇪.jpg"
    },
    {
        type: "plane",
        name_en: "A320 - British Airways",
        name_pt: "A320 - British Airways",
        filename: "planes/A320 - British Airways\uD83C\uDFF4\uDB40\uDC67\uDB40\uDC62\uDB40\uDC65\uDB40\uDC6E\uDB40\uDC67\uDB40\uDC7F.jpg"
    },
    {
        type: "plane",
        name_en: "A320 - South African Airways (star alliance livery)",
        name_pt: "A320 - South African Airways (star alliance livery)",
        filename: "planes/A320 - South African Airways (star alliance livery) 🇿🇦.jpg"
    },
    {
        type: "plane",
        name_en: "A350 - Iberia",
        name_pt: "A350 - Iberia",
        filename: "planes/A350 - Iberia🇪🇸.jpg"
    },
    {
        type: "plane",
        name_en: "A380 - Emirates",
        name_pt: "A380 - Emirates",
        filename: "planes/A380 - Emirates🇦🇪.jpg"
    },
    {
        type: "plane",
        name_en: "A380 - Singapore airlines",
        name_pt: "A380 - Singapore airlines",
        filename: "planes/A380 - Singapore airlines🇸🇬.jpg"
    },
    {
        type: "plane",
        name_en: "Atr 72 - Binter Canarias",
        name_pt: "Atr 72 - Binter Canarias",
        filename: "planes/Atr 72 - Binter Canarias🇪🇸.jpg"
    },
    {
        type: "plane",
        name_en: "Beluga - Airbus",
        name_pt: "Beluga - Airbus",
        filename: "planes/Beluga - Airbus.jpg"
    },
    {
        type: "plane",
        name_en: "Boeing 727 - PAN AM",
        name_pt: "Boeing 727 - PAN AM",
        filename: "planes/Boeing 727 - PAN AM 🇺🇸.jpg"
    },
    {
        type: "plane",
        name_en: "Boeing 737 - Transavia",
        name_pt: "Boeing 737 - Transavia",
        filename: "planes/Boeing 737 - Transavia🇫🇷.jpg"
    },
    {
        type: "plane",
        name_en: "Boeing 747 - Cargolux airlines",
        name_pt: "Boeing 747 - Cargolux airlines",
        filename: "planes/Boeing 747 - Cargolux airlines🇱🇺.jpg"
    },
    {
        type: "plane",
        name_en: "Boeing 757 - condor airlines",
        name_pt: "Boeing 757 - condor airlines",
        filename: "planes/Boeing 757 - condor airlines 🇩🇪.jpg"
    },
    {
        type: "plane",
        name_en: "Boeing 777 - Air Canada",
        name_pt: "Boeing 777 - Air Canada",
        filename: "planes/Boeing 777 - Air Canada 🇨🇦.jpg"
    },
    {
        type: "plane",
        name_en: "Boeing 787 - KLM",
        name_pt: "Boeing 787 - KLM",
        filename: "planes/Boeing 787 - KLM🇳🇱.jpg"
    },
    {
        type: "plane",
        name_en: "Boeing 787 - LATAM Airlines",
        name_pt: "Boeing 787 - LATAM Airlines",
        filename: "planes/Boeing 787 - LATAM Airlines🇧🇷_🇵🇪.jpg"
    },
    {
        type: "plane",
        name_en: "C-130 Hercules - US Air Force",
        name_pt: "C-130 Hercules - US Air Force",
        filename: "planes/C-130 Hercules - US Air Force🇺🇸.jpg"
    },
    {
        type: "plane",
        name_en: "CASA C-295M - FAP",
        name_pt: "CASA C-295M - FAP",
        filename: "planes/CASA C-295M - FAP🇵🇹.jpg"
    },
    {
        type: "plane",
        name_en: "Concorde - Air France",
        name_pt: "Concorde - Air France",
        filename: "planes/Concorde - Air France🇫🇷.jpg"
    },
    {
        type: "plane",
        name_en: "Embraer E190 - TAP Air Portugal",
        name_pt: "Embraer E190 - TAP Air Portugal",
        filename: "planes/Embraer E190 - TAP Air Portugal🇵🇹.jpg"
    },
    {
        type: "plane",
        name_en: "KC-390 (Embraer C-390 Millennium) - FAB",
        name_pt: "KC-390 (Embraer C-390 Millennium) - FAB",
        filename: "planes/KC-390 (Embraer C-390 Millennium) - FAB🇧🇷.jpg"
    },
    {
        type: "airport",
        code: "GIG",
        name_en: "Rio de Janeiro (Galeão) Airport",
        name_pt: "Aeroporto do Rio de Janeiro (Galeão)",
        filename: "airports/gig/image.jpg",
        codeFilename: "airports/gig/code.png"
    },
    {
        type: "airport",
        code: "FNC",
        name_en: "Madeira Cristiano Ronaldo Airport",
        name_pt: "Aeroporto da Madeira Cristiano Ronaldo",
        filename: "airports/fnc/image.jpg",
        codeFilename: "airports/fnc/code.png"
    },
    {
        type: "airport",
        code: "BOG",
        name_en: "Bogotá (El Dorado) Airport",
        name_pt: "Aeroporto de Bogotá (El Dorado)",
        filename: "airports/bog/image.jpg",
        codeFilename: "airports/bog/code.png"
    },
    {
        type: "airport",
        code: "ORY",
        name_en: "Paris (Orly) Airport",
        name_pt: "Aeroporto de Paris (Orly)",
        filename: "airports/ory/image.jpg",
        codeFilename: "airports/ory/code.png"
    },
    {
        type: "airport",
        code: "DUS",
        name_en: "Dusseldorf Airport",
        name_pt: "Aeroporto de Dusseldorf",
        filename: "airports/dus/image.jpg",
        codeFilename: "airports/dus/code.png"
    },
    {
        type: "airport",
        code: "FCO",
        name_en: "Rome Airport",
        name_pt: "Aeroporto de Roma",
        filename: "airports/fco/image.jpg",
        codeFilename: "airports/fco/code.png"
    },
    {
        type: "airport",
        code: "IST",
        name_en: "Istanbul Airport",
        name_pt: "Aeroporto de Istambul",
        filename: "airports/ist/image.webp",
        codeFilename: "airports/ist/code.png"
    },
    {
        type: "airport",
        code: "ALC",
        name_en: "Alicante Airport",
        name_pt: "Aeroporto de Alicante",
        filename: "airports/alc/image.png",
        codeFilename: "airports/alc/code.png"
    },
    {
        type: "airport",
        code: "MAD",
        name_en: "Madrid Barajas Airport",
        name_pt: "Aeroporto de Barajas Madrid",
        filename: "airports/mad/image.jpg",
        codeFilename: "airports/mad/code.png"
    },
    {
        type: "airport",
        code: "DUB",
        name_en: "Dublin Airport",
        name_pt: "Aeroporto de Dublin",
        filename: "airports/dub/image.webp",
        codeFilename: "airports/dub/code.png"
    },
    {
        type: "airport",
        code: "ATH",
        name_en: "Athens Airport",
        name_pt: "Aeroporto de Atenas",
        filename: "airports/ath/image.jpg",
        codeFilename: "airports/ath/code.png"
    },
    {
        type: "airport",
        code: "DXB",
        name_en: "Dubai Airport",
        name_pt: "Aeroporto do Dubai",
        filename: "airports/dxb/image.jpeg",
        codeFilename: "airports/dxb/code.png"
    },
    {
        type: "airport",
        code: "SYD",
        name_en: "Sydney Airport",
        name_pt: "Aeroporto de Sydney",
        filename: "airports/syd/image.jpeg",
        codeFilename: "airports/syd/code.png"
    },
    {
        type: "airport",
        code: "LIS",
        name_en: "Lisbon Airport",
        name_pt: "Aeroporto de Lisboa",
        filename: "airports/lis/image.jpeg",
        codeFilename: "airports/lis/code.png"
    },
    {
        type: "airport",
        code: "JFK",
        name_en: "New York (John F. Kennedy) Airport",
        name_pt: "Aeroporto de Nova Iorque (John F. Kennedy)",
        filename: "airports/jfk/image.jpeg",
        codeFilename: "airports/jfk/code.png"
    },
    {
        type: "airport",
        code: "BYJ",
        name_en: "Beja Airport",
        name_pt: "Aeroporto de Beja",
        filename: "airports/byj/image.png",
        codeFilename: "airports/byj/code.png"
    },
    {
        type: "airport",
        code: "OPO",
        name_en: "Porto Airport",
        name_pt: "Aeroporto do Porto",
        filename: "airports/opo/image.jpeg",
        codeFilename: "airports/opo/code.png"
    },
    {
        type: "airport",
        code: "EIN",
        name_en: "Eindhoven Airport",
        name_pt: "Aeroporto de Eindhoven",
        filename: "airports/ein/image.jpg",
        codeFilename: "airports/ein/code.png"
    },
    {
        type: "airport",
        code: "PDL",
        name_en: "Ponta Delgada Airport",
        name_pt: "Aeroporto de Ponta Delgada",
        filename: "airports/pdl/image.jpg",
        codeFilename: "airports/pdl/code.png"
    }
];

// 2. Multilingual Dictionary Mapping (European Portuguese PT-PT & EN)
const TRANSLATIONS = {
    en: {
        welcomeBadge: "// TALENT SHOW //",
        rulesTitle: "OBSERVATION CHECKLIST:",
        rules: [
            "CLICK THE CARD TO REVEAL THE IMAGE.",
            "10-SECOND SHUTTER LIMIT FOR IDENTIFICATION.",
            "STATE THE NAME OUT LOUD.",
            "NO MULTIPLE CHOICE OR ON-SCREEN HELPERS."
        ],
        startBtn: "LAUNCH GAME",
        lockedCardTitlePlane: "AIRCRAFT LOCKED",
        lockedCardTitleAirport: "AIRPORT LOCKED",
        lockedCardText: "CLICK TO REVEAL",
        shutterTimeout: "TIME'S OUT",
        timerLbl: "SHUTTER:",
        revealBtn: "REVEAL ANSWER",
        aircraftNameTag: "// AIRCRAFT NAME //",
        airportNameTag: "// AIRPORT NAME //",
        verifyLbl: "VALIDATE ANSWER:",
        valCorrect: "CORRECT",
        valIncorrect: "INCORRECT",
        nextTarget: "NEXT",
        viewResults: "VIEW SCORE DEBRIEF",
        resultsBadge: "COMPLETED // OK",
        resultsTitle: "DEBRIEFING REPORT",
        resultsScoreLbl: "TOTAL SCORE",
        debriefHeading: "OBSERVED FLIGHT ARCHIVE",
        restartBtn: "RUN SIMULATION AGAIN",
        debriefPrefixPlane: "PLANE",
        debriefPrefixAirport: "AIRPORT",
        debriefDescPlane: "Aircraft",
        debriefDescAirport: "Airport",
        debriefStatusPass: "PASS",
        debriefStatusFail: "FAIL",
        debriefStatusSuccess: "SUCCESS",
        debriefStatusMissed: "FAILED",
        footerText: '<strong>AeroSpotter: Talent Show</strong> powered by <a href="https://realfoto.pt" target="_blank">realfoto.pt</a>'
    },
    pt: {
        welcomeBadge: "// TALENT SHOW //",
        rulesTitle: "CHECKLIST DE OBSERVAÇÃO:",
        rules: [
            "CLIQUE NO CARTÃO PARA REVELAR A IMAGEM.",
            "LIMITE DE 10 SEGUNDOS PARA IDENTIFICAÇÃO.",
            "DIGA O NOME EM VOZ ALTA.",
            "SEM AJUDAS OU OPÇÕES DE ESCOLHA MÚLTIPLA."
        ],
        startBtn: "INICIAR JOGO",
        lockedCardTitlePlane: "AERONAVE BLOQUEADA",
        lockedCardTitleAirport: "AEROPORTO BLOQUEADO",
        lockedCardText: "CLIQUE PARA REVELAR",
        shutterTimeout: "TEMPO ESGOTADO",
        timerLbl: "CRONÓMETRO:",
        revealBtn: "REVELAR RESPOSTA",
        aircraftNameTag: "// NOME DA AERONAVE //",
        airportNameTag: "// NOME DO AEROPORTO //",
        verifyLbl: "VALIDAR RESPOSTA:",
        valCorrect: "CORRETO",
        valIncorrect: "INCORRETO",
        nextTarget: "SEGUINTE",
        viewResults: "VER RELATÓRIO FINAL",
        resultsBadge: "CONCLUÍDO // OK",
        resultsTitle: "RELATÓRIO DE DEBRIEFING",
        resultsScoreLbl: "PONTUAÇÃO FINAL",
        debriefHeading: "ARQUIVO DE VOOS OBSERVADOS",
        restartBtn: "REINICIAR SIMULAÇÃO",
        debriefPrefixPlane: "AERONAVE",
        debriefPrefixAirport: "AEROPORTO",
        debriefDescPlane: "Aeronave",
        debriefDescAirport: "Aeroporto",
        debriefStatusPass: "CORRETO",
        debriefStatusFail: "INCORRETO",
        debriefStatusSuccess: "IDENTIFICADO",
        debriefStatusMissed: "NÃO IDENTIFICADO",
        footerText: '<strong>AeroSpotter: Talent Show</strong> disponibilizado por <a href="https://realfoto.pt" target="_blank">realfoto.pt</a>'
    }
};

// 3. Confetti Celebration System (HTML5 Canvas) - Runway Style rectangular shapes
const confetti = {
    canvas: null,
    ctx: null,
    active: false,
    particles: [],
    
    init() {
        this.canvas = document.getElementById('confetti-canvas');
        this.ctx = this.canvas.getContext('2d');
        this.resize();
        window.addEventListener('resize', () => this.resize());
    },
    
    resize() {
        if (this.canvas) {
            this.canvas.width = this.canvas.parentElement.clientWidth;
            this.canvas.height = this.canvas.parentElement.clientHeight;
        }
    },
    
    start() {
        this.active = true;
        this.particles = [];
        const count = 75;
        const colors = document.body.classList.contains('dark-theme') 
            ? ['#FFD200', '#FFFFFF', '#333333', '#00E676', '#FF3D00'] 
            : ['#FFD200', '#000000', '#FFFFFF', '#00E676', '#FF3D00'];
            
        for (let i = 0; i < count; i++) {
            this.particles.push({
                x: Math.random() * this.canvas.width,
                y: Math.random() * this.canvas.height - this.canvas.height,
                w: Math.random() * 12 + 8,
                h: Math.random() * 12 + 8,
                color: colors[Math.floor(Math.random() * colors.length)],
                rotation: Math.random() * Math.PI * 2,
                rotationSpeed: Math.random() * 0.08 - 0.04,
                speedY: Math.random() * 3 + 2,
                speedX: Math.random() * 2 - 1
            });
        }
        this.animate();
    },
    
    stop() {
        this.active = false;
        if (this.ctx) {
            this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);
        }
    },
    
    animate() {
        if (!this.active) return;
        requestAnimationFrame(() => this.animate());
        this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);
        
        let remaining = false;
        for (let p of this.particles) {
            p.y += p.speedY;
            p.x += p.speedX;
            p.rotation += p.rotationSpeed;
            
            if (p.y < this.canvas.height) {
                remaining = true;
            } else {
                p.y = -20;
                p.x = Math.random() * this.canvas.width;
            }
            
            this.ctx.save();
            this.ctx.translate(p.x + p.w / 2, p.y + p.h / 2);
            this.ctx.rotate(p.rotation);
            this.ctx.fillStyle = p.color;
            this.ctx.strokeStyle = document.body.classList.contains('dark-theme') ? '#FFFFFF' : '#000000';
            this.ctx.lineWidth = 2;
            this.ctx.fillRect(-p.w / 2, -p.h / 2, p.w, p.h);
            this.ctx.strokeRect(-p.w / 2, -p.h / 2, p.w, p.h);
            this.ctx.restore();
        }
    }
};

// 4. Game Controller State
const state = {
    lang: "en",
    theme: "light",
    currentRoundIndex: 0,
    score: 0,
    timeLeft: 10.0,
    timerInterval: null,
    roundData: [],
    gameState: 'welcome',
    canClickCard: false
};

// DOM References
const DOM = {
    welcomeScreen: document.getElementById('welcome-screen'),
    gameScreen: document.getElementById('game-screen'),
    resultsScreen: document.getElementById('results-screen'),
    
    langToggle: document.getElementById('lang-toggle'),
    themeToggle: document.getElementById('theme-toggle'),
    iconSun: document.querySelector('.icon-sun'),
    iconMoon: document.querySelector('.icon-moon'),
    
    startGameBtn: document.getElementById('start-game-btn'),
    startBtnText: document.getElementById('start-btn-text'),
    welcomeBadge: document.getElementById('welcome-badge'),
    rulesTitle: document.getElementById('rules-title'),
    rulesList: document.getElementById('rules-list'),
    
    stepsIndicator: document.getElementById('steps-indicator'),
    
    gameCard: document.getElementById('game-card'),
    cardCover: document.getElementById('card-cover'),
    lockedCardTitle: document.getElementById('locked-card-title'),
    lockedCardText: document.getElementById('locked-card-text'),
    planeImage: document.getElementById('plane-image'),
    imageOverlayText: document.getElementById('image-overlay-text'),
    overlayMessage: document.getElementById('overlay-message'),
    
    timerLbl: document.getElementById('timer-lbl'),
    timerBar: document.getElementById('timer-bar'),
    timerText: document.getElementById('timer-text'),
    
    revealBtn: document.getElementById('reveal-btn'),
    revealBtnText: document.getElementById('reveal-btn-text'),
    validationSection: document.getElementById('validation-section'),
    answerTag: document.getElementById('answer-tag'),
    answerModel: document.getElementById('answer-model'),
    codeImage: document.getElementById('code-image'),
    
    verifyLbl: document.getElementById('verify-lbl'),
    valCorrectBtn: document.getElementById('val-correct-btn'),
    valIncorrectBtn: document.getElementById('val-incorrect-btn'),
    valCorrectLbl: document.getElementById('val-correct-lbl'),
    valIncorrectLbl: document.getElementById('val-incorrect-lbl'),
    
    
    resultsBadge: document.getElementById('results-badge'),
    resultsTitle: document.getElementById('results-title'),
    debriefHeading: document.getElementById('debrief-heading'),
    debriefList: document.getElementById('debrief-list'),
    restartGameBtn: document.getElementById('restart-game-btn'),
    restartBtnText: document.getElementById('restart-btn-text'),
    
    footerText: document.getElementById('footer-text')
};

// Helper function to resolve CDN URLs with proper URL encoding
function getAssetUrl(path) {
    if (!path) return "";
    return "https://cdn.realfoto.pt/aerospotter/" + encodeURI(path);
}

// 5. Initialize Game Elements
function init() {
    // Load Preferences
    state.lang = localStorage.getItem('lang') || 'en';
    state.theme = localStorage.getItem('theme') || 'light';
    
    // Apply theme preference
    if (state.theme === 'dark') {
        document.body.classList.add('dark-theme');
        DOM.iconSun.classList.remove('hidden');
        DOM.iconMoon.classList.add('hidden');
    } else {
        document.body.classList.remove('dark-theme');
        DOM.iconSun.classList.add('hidden');
        DOM.iconMoon.classList.remove('hidden');
    }
    
    // Apply translation
    updateLanguageDOM();
    
    // Steps bar generation
    DOM.stepsIndicator.innerHTML = '';
    for (let i = 0; i < GAME_DATABASE.length; i++) {
        const dot = document.createElement('div');
        dot.className = 'step-dot';
        dot.id = `step-dot-${i}`;
        DOM.stepsIndicator.appendChild(dot);
    }
    
    confetti.init();
    
    // Bind Event Listeners
    DOM.startGameBtn.addEventListener('click', startGame);
    DOM.gameCard.addEventListener('click', handleCardClick);
    DOM.revealBtn.addEventListener('click', handleRevealClick);
    DOM.valCorrectBtn.addEventListener('click', () => evaluateAnswer(true));
    DOM.valIncorrectBtn.addEventListener('click', () => evaluateAnswer(false));
    DOM.restartGameBtn.addEventListener('click', restartGame);
    
    // Controls binding
    DOM.langToggle.addEventListener('click', () => {
        state.lang = state.lang === 'en' ? 'pt' : 'en';
        localStorage.setItem('lang', state.lang);
        updateLanguageDOM();
    });
    
    DOM.themeToggle.addEventListener('click', () => {
        state.theme = state.theme === 'light' ? 'dark' : 'light';
        localStorage.setItem('theme', state.theme);
        
        if (state.theme === 'dark') {
            document.body.classList.add('dark-theme');
            DOM.iconSun.classList.remove('hidden');
            DOM.iconMoon.classList.add('hidden');
        } else {
            document.body.classList.remove('dark-theme');
            DOM.iconSun.classList.add('hidden');
            DOM.iconMoon.classList.remove('hidden');
        }
    });

    // Preload Images
    GAME_DATABASE.forEach(item => {
        const img = new Image();
        img.src = getAssetUrl(item.filename);
        if (item.type === 'airport' && item.codeFilename) {
            const codeImg = new Image();
            codeImg.src = getAssetUrl(item.codeFilename);
        }
    });
}

// 6. Translation Refresher
function updateLanguageDOM() {
    const lang = state.lang;
    const dict = TRANSLATIONS[lang];
    
    // Control Buttons
    DOM.langToggle.textContent = lang === 'en' ? 'PT' : 'EN';
    DOM.langToggle.title = lang === 'en' ? 'Mudar para Português' : 'Switch to English';
    DOM.themeToggle.title = lang === 'en' ? 'Toggle Dark Mode' : 'Alternar Modo Escuro';
    
    // Welcome Screen
    DOM.welcomeBadge.textContent = dict.welcomeBadge;
    DOM.rulesTitle.textContent = dict.rulesTitle;
    
    DOM.rulesList.innerHTML = '';
    dict.rules.forEach(rule => {
        const li = document.createElement('li');
        li.innerHTML = `<span class="bullet">►</span> ${rule}`;
        DOM.rulesList.appendChild(li);
    });
    DOM.startBtnText.textContent = dict.startBtn;
    
    // Card Overlays
    const hasRounds = state.roundData && state.roundData.length > 0;
    if (hasRounds && state.gameState === 'locked') {
        const currentItem = state.roundData[state.currentRoundIndex];
        const isAirport = currentItem.type === 'airport';
        const titleKey = isAirport ? 'lockedCardTitleAirport' : 'lockedCardTitlePlane';
        DOM.lockedCardTitle.textContent = dict[titleKey];
    } else {
        DOM.lockedCardTitle.textContent = dict.lockedCardTitlePlane;
    }
    DOM.lockedCardText.textContent = dict.lockedCardText;
    DOM.overlayMessage.textContent = dict.shutterTimeout;
    
    // Active Controls
    DOM.timerLbl.textContent = dict.timerLbl;
    DOM.revealBtnText.textContent = dict.revealBtn;
    if (hasRounds) {
        const currentItem = state.roundData[state.currentRoundIndex];
        const isAirport = currentItem.type === 'airport';
        DOM.answerTag.textContent = dict[isAirport ? 'airportNameTag' : 'aircraftNameTag'];
    } else {
        DOM.answerTag.textContent = dict.aircraftNameTag;
    }
    DOM.verifyLbl.textContent = dict.verifyLbl;
    DOM.valCorrectLbl.textContent = dict.valCorrect;
    DOM.valIncorrectLbl.textContent = dict.valIncorrect;
    
    
    // Results
    DOM.resultsBadge.textContent = dict.resultsBadge;
    DOM.resultsTitle.textContent = dict.resultsTitle;
    DOM.debriefHeading.textContent = dict.debriefHeading;
    DOM.restartBtnText.textContent = dict.restartBtn;
    
    // Footer Text
    DOM.footerText.innerHTML = dict.footerText;
    
    // Update live spec details in game view if active
    if (state.gameState === 'revealed' || state.gameState === 'evaluated') {
        const currentItem = state.roundData[state.currentRoundIndex];
        DOM.answerModel.textContent = lang === 'en' ? currentItem.name_en : currentItem.name_pt;
    }
    
    // Refresh results list if on scoreboard screen
    if (state.gameState === 'results') {
        renderDebriefList();
    }
}

// 7. Game State Controller
function startGame() {
    state.roundData = [...GAME_DATABASE].map(item => ({...item, result: null}));
    shuffleArray(state.roundData);
    
    state.currentRoundIndex = 0;
    state.score = 0;
    
    for (let i = 0; i < state.roundData.length; i++) {
        const dot = document.getElementById(`step-dot-${i}`);
        dot.className = 'step-dot';
    }
    
    switchScreen('game');
    setupRound(0);
}

function setupRound(roundIdx) {
    state.currentRoundIndex = roundIdx;
    const currentPlane = state.roundData[roundIdx];
    state.gameState = 'locked';
    state.canClickCard = false;
    setTimeout(() => {
        state.canClickCard = true;
    }, 300);
    
    const isAirport = currentPlane.type === 'airport';
    const titleKey = isAirport ? 'lockedCardTitleAirport' : 'lockedCardTitlePlane';
    DOM.lockedCardTitle.textContent = TRANSLATIONS[state.lang][titleKey];
    
    for (let i = 0; i < state.roundData.length; i++) {
        const dot = document.getElementById(`step-dot-${i}`);
        if (i === roundIdx) {
            dot.className = 'step-dot active';
        } else if (state.roundData[i].result === true) {
            dot.className = 'step-dot correct';
        } else if (state.roundData[i].result === false) {
            dot.className = 'step-dot incorrect';
        } else {
            dot.className = 'step-dot';
        }
    }
    
    DOM.planeImage.src = getAssetUrl(currentPlane.filename);
    DOM.planeImage.classList.remove('blurred');
    if (isAirport) {
        DOM.codeImage.src = getAssetUrl(currentPlane.codeFilename);
        DOM.codeImage.classList.remove('hidden');
        DOM.codeImage.classList.remove('blurred');
    } else {
        DOM.codeImage.classList.add('hidden');
        DOM.codeImage.src = '';
    }
    DOM.imageOverlayText.classList.add('hidden');
    DOM.gameCard.classList.add('locked');
    DOM.cardCover.classList.remove('hidden');
    DOM.cardCover.style.opacity = '1';
    
    DOM.revealBtn.classList.remove('hidden');
    DOM.revealBtn.disabled = true;
    DOM.validationSection.classList.add('hidden');
    
    state.timeLeft = 10.0;
    updateTimerHUD();
}

function handleCardClick() {
    if (state.gameState !== 'locked' || !state.canClickCard) return;
    
    state.gameState = 'active';
    
    DOM.gameCard.classList.remove('locked');
    DOM.cardCover.style.opacity = '0';
    setTimeout(() => {
        DOM.cardCover.classList.add('hidden');
    }, 200);
    
    DOM.revealBtn.disabled = false;
    
    const tickPeriod = 100;
    state.timerInterval = setInterval(() => {
        state.timeLeft -= 0.1;
        
        if (state.timeLeft <= 0) {
            state.timeLeft = 0;
            clearInterval(state.timerInterval);
            handleTimeExpiration();
        }
        updateTimerHUD();
    }, tickPeriod);
}

// Update Timer Shutter HUD
function updateTimerHUD() {
    DOM.timerText.textContent = state.timeLeft.toFixed(1);
    
    const percentage = (state.timeLeft / 10.0) * 100;
    DOM.timerBar.style.width = `${percentage}%`;
    
    DOM.timerBar.className = 'timer-bar';
    if (state.timeLeft <= 3.0) {
        DOM.timerBar.classList.add('critical');
    }
}

// Timer Timeout Shutter Shutting
function handleTimeExpiration() {
    state.gameState = 'timeout';
    DOM.planeImage.classList.add('blurred');
    DOM.codeImage.classList.add('blurred');
    
    const dict = TRANSLATIONS[state.lang];
    DOM.overlayMessage.textContent = dict.shutterTimeout;
    
    DOM.imageOverlayText.classList.remove('hidden');
}

// Reveal Aircraft Data Sheet
function handleRevealClick() {
    if (state.gameState !== 'active' && state.gameState !== 'timeout') return;
    
    if (state.timerInterval) {
        clearInterval(state.timerInterval);
    }
    
    state.gameState = 'revealed';
    
    const currentItem = state.roundData[state.currentRoundIndex];
    DOM.answerModel.textContent = state.lang === 'en' ? currentItem.name_en : currentItem.name_pt;
    
    const isAirport = currentItem.type === 'airport';
    const tagKey = isAirport ? 'airportNameTag' : 'aircraftNameTag';
    DOM.answerTag.textContent = TRANSLATIONS[state.lang][tagKey];
    
    DOM.revealBtn.classList.add('hidden');
    DOM.validationSection.classList.remove('hidden');
}

// Evaluate Answer
function evaluateAnswer(isCorrect) {
    if (state.gameState !== 'revealed') return;
    
    state.gameState = 'evaluated';
    state.roundData[state.currentRoundIndex].result = isCorrect;
    
    const dot = document.getElementById(`step-dot-${state.currentRoundIndex}`);
    if (isCorrect) {
        state.score++;
        dot.className = 'step-dot correct';
    } else {
        dot.className = 'step-dot incorrect';
    }
    
    const nextIdx = state.currentRoundIndex + 1;
    if (nextIdx < state.roundData.length) {
        setupRound(nextIdx);
    } else {
        showResults();
    }
}

// Show Debriefing Results Scoreboard
function showResults() {
    state.gameState = 'results';
    
    renderDebriefList();
    switchScreen('results');
    confetti.start();
}

function renderDebriefList() {
    const dict = TRANSLATIONS[state.lang];
    DOM.debriefList.innerHTML = '';
    
    state.roundData.forEach((plane, idx) => {
        const item = document.createElement('div');
        item.className = 'debrief-item';
        
        const isCorrect = plane.result === true;
        const statusSymbol = isCorrect ? dict.debriefStatusPass : dict.debriefStatusFail;
        const statusClass = isCorrect ? 'correct' : 'incorrect';
        
        const isAirport = plane.type === 'airport';
        const prefix = isAirport ? dict.debriefPrefixAirport : dict.debriefPrefixPlane;
        const desc = isAirport ? dict.debriefDescAirport : dict.debriefDescPlane;
        const displayName = state.lang === 'en' ? plane.name_en : plane.name_pt;
        
        item.innerHTML = `
            <div class="debrief-thumb-container">
                <img src="${getAssetUrl(plane.filename)}" class="debrief-thumb" alt="${displayName}">
            </div>
            <div class="debrief-details">
                <div class="debrief-model">${prefix} 0${idx + 1}: ${displayName}</div>
                <div class="debrief-desc">${desc} • ${isCorrect ? dict.debriefStatusSuccess : dict.debriefStatusMissed}</div>
            </div>
            <div class="debrief-status ${statusClass}">
                ${statusSymbol}
            </div>
        `;
        DOM.debriefList.appendChild(item);
    });
}

function restartGame() {
    confetti.stop();
    switchScreen('welcome');
}

function shuffleArray(array) {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
}

function switchScreen(screenName) {
    const screens = {
        'welcome': DOM.welcomeScreen,
        'game': DOM.gameScreen,
        'results': DOM.resultsScreen
    };
    
    Object.values(screens).forEach(screen => {
        screen.classList.remove('active');
        screen.style.opacity = '0';
        screen.style.display = 'none';
    });
    
    const target = screens[screenName];
    target.style.display = 'flex';
    
    setTimeout(() => {
        target.classList.add('active');
        target.style.opacity = '1';
    }, 50);
}

window.addEventListener('DOMContentLoaded', init);
