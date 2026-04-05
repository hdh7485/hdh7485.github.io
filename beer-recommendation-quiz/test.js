// 맥주 스타일 데이터
const beerStyles = {
    lager: {
        name: '라거',
        type: 'Lager',
        icon: '🍺',
        characteristics: {
            body: 30,        // 바디감 (0-100)
            bitterness: 35,  // 쓴맛
            fruitiness: 20,  // 과일향
            alcohol: 40,     // 알코올
            refreshing: 95   // 청량감
        },
        description: `
            <h4>🍺 가볍고 청량한 클래식</h4>
            <p><strong>당신은 라거를 좋아하실 것 같습니다!</strong></p>
            <p>라거는 가볍고 깔끔한 맛이 특징인 맥주입니다. 목넘김이 부드럽고 청량감이 뛰어나 
            더운 날씨나 식사와 함께 마시기 좋습니다. 복잡하지 않은 깔끔한 맛을 선호하는 분들에게 
            완벽한 선택입니다.</p>
            <p>💡 <strong>추천 상황:</strong> 치킨, 피자와 함께 / 더운 여름날 / 가볍게 한잔</p>
        `,
        recommendations: [
            { brand: '하이네켄 (Heineken)', origin: '네덜란드' },
            { brand: '버드와이저 (Budweiser)', origin: '미국' },
            { brand: '아사히 슈퍼드라이', origin: '일본' },
            { brand: '칭따오', origin: '중국' },
            { brand: '카스', origin: '한국' }
        ]
    },
    paleAle: {
        name: '페일 에일',
        type: 'Pale Ale',
        icon: '🍻',
        characteristics: {
            body: 55,
            bitterness: 50,
            fruitiness: 60,
            alcohol: 55,
            refreshing: 60
        },
        description: `
            <h4>🍻 균형잡힌 풍미의 대중적 선택</h4>
            <p><strong>당신은 페일 에일을 좋아하실 것 같습니다!</strong></p>
            <p>페일 에일은 홉의 쓴맛과 몰트의 단맛이 조화를 이루는 균형잡힌 맥주입니다. 
            적당한 바디감과 과일향이 어우러져 맥주 입문자부터 애호가까지 모두가 즐길 수 있습니다.
            다양한 음식과도 잘 어울립니다.</p>
            <p>💡 <strong>추천 상황:</strong> 고기 요리와 함께 / 펍에서 친구들과 / 처음 에일 도전</p>
        `,
        recommendations: [
            { brand: '시에라 네바다 페일 에일', origin: '미국' },
            { brand: '고스트 페일 에일', origin: '영국' },
            { brand: '클라우드 페일 에일', origin: '한국' },
            { brand: '리틀 크리처스', origin: '호주' },
            { brand: '아메리칸 페일 에일', origin: '미국' }
        ]
    },
    ipa: {
        name: 'IPA',
        type: 'India Pale Ale',
        icon: '🍃',
        characteristics: {
            body: 65,
            bitterness: 90,
            fruitiness: 70,
            alcohol: 70,
            refreshing: 50
        },
        description: `
            <h4>🍃 강렬한 홉의 향연</h4>
            <p><strong>당신은 IPA를 좋아하실 것 같습니다!</strong></p>
            <p>IPA는 강한 홉 향과 쓴맛이 특징인 개성 넘치는 맥주입니다. 자몽, 파인애플 같은 
            열대 과일 향이 풍부하고, 높은 알코올 도수와 깊은 풍미를 자랑합니다. 
            강렬한 맛을 즐기는 크래프트 비어 애호가들의 선택입니다.</p>
            <p>💡 <strong>추천 상황:</strong> 버거, 타코와 함께 / 크래프트 비어 바에서 / 깊은 맛 탐험</p>
        `,
        recommendations: [
            { brand: '라군니타스 IPA', origin: '미국' },
            { brand: '브루독 펑크 IPA', origin: '영국' },
            { brand: '스톤 IPA', origin: '미국' },
            { brand: '델리리움 트레멘스', origin: '벨기에' },
            { brand: '제주 위트 IPA', origin: '한국' }
        ]
    },
    stout: {
        name: '스타우트',
        type: 'Stout',
        icon: '☕',
        characteristics: {
            body: 90,
            bitterness: 60,
            fruitiness: 40,
            alcohol: 75,
            refreshing: 25
        },
        description: `
            <h4>☕ 진하고 묵직한 다크 비어</h4>
            <p><strong>당신은 스타우트를 좋아하실 것 같습니다!</strong></p>
            <p>스타우트는 로스팅된 몰트로 만든 진한 검은색 맥주입니다. 커피, 초콜릿, 캐러멜 같은 
            풍부한 풍미가 특징이며, 크리미한 거품과 묵직한 바디감을 가지고 있습니다. 
            천천히 음미하며 마시기 좋은 고급스러운 맥주입니다.</p>
            <p>💡 <strong>추천 상황:</strong> 디저트와 함께 / 추운 겨울밤 / 특별한 날</p>
        `,
        recommendations: [
            { brand: '기네스 (Guinness)', origin: '아일랜드' },
            { brand: '맥심 스타우트', origin: '한국' },
            { brand: '좌파 스타우트', origin: '러시아' },
            { brand: '영 초콜릿 스타우트', origin: '영국' },
            { brand: '임페리얼 스타우트', origin: '미국' }
        ]
    },
    wheat: {
        name: '밀맥주',
        type: 'Wheat Beer',
        icon: '🌾',
        characteristics: {
            body: 45,
            bitterness: 25,
            fruitiness: 85,
            alcohol: 50,
            refreshing: 80
        },
        description: `
            <h4>🌾 부드럽고 과일향 가득한</h4>
            <p><strong>당신은 밀맥주를 좋아하실 것 같습니다!</strong></p>
            <p>밀맥주는 밀을 주원료로 만든 부드럽고 가벼운 맥주입니다. 바나나, 정향 같은 
            과일향과 스파이시한 향이 특징이며, 탁한 외관과 크리미한 거품이 매력적입니다. 
            쓴맛이 약해 맥주 입문자에게도 좋습니다.</p>
            <p>💡 <strong>추천 상황:</strong> 브런치와 함께 / 가벼운 샐러드와 / 여름 오후</p>
        `,
        recommendations: [
            { brand: '호가든 (Hoegaarden)', origin: '벨기에' },
            { brand: '파울라너 (Paulaner)', origin: '독일' },
            { brand: '블루문', origin: '미국' },
            { brand: '에딩거', origin: '독일' },
            { brand: '곡물 밀맥주', origin: '한국' }
        ]
    },
    pilsner: {
        name: '필스너',
        type: 'Pilsner',
        icon: '✨',
        characteristics: {
            body: 35,
            bitterness: 55,
            fruitiness: 30,
            alcohol: 45,
            refreshing: 90
        },
        description: `
            <h4>✨ 깔끔하고 드라이한 프리미엄</h4>
            <p><strong>당신은 필스너를 좋아하실 것 같습니다!</strong></p>
            <p>필스너는 체코에서 탄생한 황금빛 라거입니다. 매우 깔끔하고 드라이한 맛이 특징이며, 
            적당한 홉의 쓴맛과 고급스러운 향이 어우러집니다. 청량감이 뛰어나 갈증 해소에 
            완벽하며, 프리미엄 맥주의 대표격입니다.</p>
            <p>💡 <strong>추천 상황:</strong> 해산물 요리와 / 깔끔한 맛 선호 / 여름 저녁</p>
        `,
        recommendations: [
            { brand: '필스너 우르켈', origin: '체코' },
            { brand: '스텔라 아르투아', origin: '벨기에' },
            { brand: '크롬바커', origin: '독일' },
            { brand: '페롤리', origin: '이탈리아' },
            { brand: '테라', origin: '한국' }
        ]
    }
};

// 질문 데이터
const questions = [
    {
        question: '선호하는 맥주의 색깔은?',
        options: [
            { text: '투명한 황금빛', scores: { lager: 3, pilsner: 3, wheat: 2 } },
            { text: '호박색', scores: { paleAle: 3, ipa: 2 } },
            { text: '진한 갈색이나 검은색', scores: { stout: 3 } },
            { text: '탁한 밀색', scores: { wheat: 3 } }
        ]
    },
    {
        question: '맥주를 마실 때 가장 중요한 것은?',
        options: [
            { text: '청량감과 목넘김', scores: { lager: 3, pilsner: 2 } },
            { text: '풍부한 향과 맛', scores: { ipa: 3, paleAle: 2 } },
            { text: '묵직한 바디감', scores: { stout: 3 } },
            { text: '부드러움과 과일향', scores: { wheat: 3 } }
        ]
    },
    {
        question: '쓴맛에 대한 선호도는?',
        options: [
            { text: '쓴맛은 싫어요', scores: { wheat: 3, lager: 2 } },
            { text: '약간의 쓴맛은 괜찮아요', scores: { lager: 2, pilsner: 2 } },
            { text: '적당한 쓴맛이 좋아요', scores: { paleAle: 3, pilsner: 2 } },
            { text: '강한 쓴맛을 좋아해요', scores: { ipa: 3, stout: 2 } }
        ]
    },
    {
        question: '선호하는 맥주의 무게감은?',
        options: [
            { text: '가볍고 산뜻하게', scores: { lager: 3, pilsner: 2 } },
            { text: '중간 정도', scores: { wheat: 2, paleAle: 2 } },
            { text: '묵직하고 풍부하게', scores: { stout: 3, ipa: 2 } }
        ]
    },
    {
        question: '과일향에 대한 선호는?',
        options: [
            { text: '과일향은 별로...', scores: { lager: 3, pilsner: 2 } },
            { text: '은은한 과일향', scores: { paleAle: 2, pilsner: 1 } },
            { text: '풍부한 과일향이 좋아요', scores: { wheat: 3, ipa: 2 } }
        ]
    },
    {
        question: '알코올 도수 선호도는?',
        options: [
            { text: '낮은 도수 (4% 이하)', scores: { wheat: 2, lager: 2 } },
            { text: '중간 도수 (4-6%)', scores: { lager: 3, paleAle: 2, pilsner: 2 } },
            { text: '높은 도수 (6% 이상)', scores: { ipa: 3, stout: 3 } }
        ]
    },
    {
        question: '맥주와 함께 즐기고 싶은 음식은?',
        options: [
            { text: '치킨, 피자 같은 가벼운 안주', scores: { lager: 3, pilsner: 2 } },
            { text: '고기, 버거 같은 든든한 음식', scores: { ipa: 3, paleAle: 2 } },
            { text: '디저트나 초콜릿', scores: { stout: 3 } },
            { text: '샐러드, 해산물', scores: { wheat: 3, pilsner: 2 } }
        ]
    },
    {
        question: '맥주를 마시는 상황은?',
        options: [
            { text: '더운 날 갈증 해소', scores: { lager: 3, pilsner: 2 } },
            { text: '친구들과 편하게', scores: { paleAle: 2, lager: 2 } },
            { text: '크래프트 비어 탐험', scores: { ipa: 3, stout: 2 } },
            { text: '특별한 날, 천천히', scores: { stout: 3, wheat: 2 } }
        ]
    },
    {
        question: '커피를 좋아하시나요?',
        options: [
            { text: '커피는 안 좋아해요', scores: { lager: 2, wheat: 2 } },
            { text: '가끔 마셔요', scores: { paleAle: 2, pilsner: 1 } },
            { text: '커피를 좋아해요', scores: { stout: 3, ipa: 1 } }
        ]
    },
    {
        question: '새로운 맛에 대한 도전 정신은?',
        options: [
            { text: '익숙한 맛이 좋아요', scores: { lager: 3, pilsner: 2 } },
            { text: '가끔 새로운 시도', scores: { paleAle: 2, wheat: 2 } },
            { text: '항상 새로운 맛을 찾아요', scores: { ipa: 3, stout: 2 } }
        ]
    },
    {
        question: '맥주의 향에서 선호하는 것은?',
        options: [
            { text: '깔끔하고 단순한 향', scores: { lager: 3, pilsner: 2 } },
            { text: '바나나, 정향 같은 향', scores: { wheat: 3 } },
            { text: '홉의 강한 향', scores: { ipa: 3, paleAle: 2 } },
            { text: '커피, 초콜릿 향', scores: { stout: 3 } }
        ]
    },
    {
        question: '맥주를 마시는 속도는?',
        options: [
            { text: '빠르게 시원하게', scores: { lager: 3, pilsner: 2 } },
            { text: '적당한 속도로', scores: { paleAle: 2, wheat: 2 } },
            { text: '천천히 음미하며', scores: { stout: 3, ipa: 2 } }
        ]
    }
];

// 게임 상태
let currentQuestion = 0;
let scores = {
    lager: 0,
    paleAle: 0,
    ipa: 0,
    stout: 0,
    wheat: 0,
    pilsner: 0
};

function trackQuizMetric(eventName, params) {
    if (!window.quizCollectionBootstrap || typeof window.quizCollectionBootstrap.track !== 'function') {
        return;
    }

    window.quizCollectionBootstrap.track(eventName, Object.assign({
        content_type: 'quiz',
        content_slug: 'beer-recommendation-quiz'
    }, params || {}));
}

// 화면 전환
function showScreen(screenName) {
    document.querySelectorAll('.intro-screen, .question-screen, .result-screen').forEach(screen => {
        screen.classList.remove('active');
    });
    document.querySelector(`.${screenName}`).classList.add('active');
}

// 테스트 시작
function startTest() {
    currentQuestion = 0;
    scores = { lager: 0, paleAle: 0, ipa: 0, stout: 0, wheat: 0, pilsner: 0 };
    trackQuizMetric('engagement_start', {
        question_count: questions.length
    });
    showScreen('question-screen');
    showQuestion();
}

// 질문 표시
function showQuestion() {
    const question = questions[currentQuestion];
    const progress = ((currentQuestion + 1) / questions.length) * 100;
    
    document.getElementById('progress').style.width = progress + '%';
    document.getElementById('questionNumber').textContent = `질문 ${currentQuestion + 1}/${questions.length}`;
    document.getElementById('questionText').textContent = question.question;
    
    const optionsContainer = document.getElementById('options');
    optionsContainer.innerHTML = '';
    
    question.options.forEach((option, index) => {
        const optionDiv = document.createElement('div');
        optionDiv.className = 'option';
        optionDiv.textContent = option.text;
        optionDiv.onclick = () => selectOption(index);
        optionsContainer.appendChild(optionDiv);
    });
    
    document.getElementById('nextButton').disabled = true;
}

// 옵션 선택
let selectedOption = null;

function selectOption(index) {
    document.querySelectorAll('.option').forEach((opt, i) => {
        if (i === index) {
            opt.classList.add('selected');
        } else {
            opt.classList.remove('selected');
        }
    });
    
    selectedOption = index;
    document.getElementById('nextButton').disabled = false;
}

// 다음 질문
function nextQuestion() {
    if (selectedOption === null) return;
    
    // 점수 계산
    const question = questions[currentQuestion];
    const selected = question.options[selectedOption];
    
    for (let style in selected.scores) {
        scores[style] += selected.scores[style];
    }
    
    selectedOption = null;
    currentQuestion++;
    
    if (currentQuestion < questions.length) {
        showQuestion();
    } else {
        showResults();
    }
}

// 결과 표시
function showResults() {
    showScreen('result-screen');
    
    // 최고 점수 찾기
    let maxScore = 0;
    let resultStyle = 'lager';
    
    for (let style in scores) {
        if (scores[style] > maxScore) {
            maxScore = scores[style];
            resultStyle = style;
        }
    }

    const result = beerStyles[resultStyle];
    trackQuizMetric('engagement_complete', {
        question_count: questions.length,
        result_id: resultStyle,
        result_label: result.name
    });
    
    // 결과 표시
    document.getElementById('beerIcon').textContent = result.icon;
    document.getElementById('beerName').textContent = result.name;
    document.getElementById('beerType').textContent = result.type;
    
    // 특성 바 표시
    const characteristicsContainer = document.getElementById('characteristicBars');
    characteristicsContainer.innerHTML = '';
    
    const characteristicLabels = {
        body: '바디감',
        bitterness: '쓴맛',
        fruitiness: '과일향',
        alcohol: '알코올',
        refreshing: '청량감'
    };
    
    for (let char in result.characteristics) {
        const value = result.characteristics[char];
        const charDiv = document.createElement('div');
        charDiv.className = 'characteristic';
        charDiv.innerHTML = `
            <div class="characteristic-label">
                <span>${characteristicLabels[char]}</span>
                <span>${value}%</span>
            </div>
            <div class="characteristic-bar">
                <div class="characteristic-fill" style="width: ${value}%"></div>
            </div>
        `;
        characteristicsContainer.appendChild(charDiv);
    }
    
    // 설명
    document.getElementById('beerDescription').innerHTML = result.description;
    
    // 추천 맥주
    const beerListContainer = document.getElementById('beerList');
    beerListContainer.innerHTML = '';
    
    result.recommendations.forEach(beer => {
        const li = document.createElement('li');
        li.innerHTML = `
            <div class="beer-brand">${beer.brand}</div>
            <div class="beer-origin">${beer.origin}</div>
        `;
        beerListContainer.appendChild(li);
    });
}

// 다시 테스트
function retryTest() {
    startTest();
}

function shareResult() {
    var beerName = document.getElementById('beerName').textContent || '맥주 취향 결과';

    if (!window.quizCollectionBootstrap || typeof window.quizCollectionBootstrap.sharePage !== 'function') {
        return;
    }

    window.quizCollectionBootstrap.sharePage({
        title: '맥주 추천 테스트 결과',
        text: '내 취향 결과는 "' + beerName + '"입니다. 너도 바로 해봐!',
        copyMessage: '맥주 추천 테스트 링크를 복사했습니다.'
    });
}
