const characters = {
    mario: {
        name: '마리오',
        emoji: '🍄',
        game: '슈퍼 마리오 시리즈',
        description: `
            <h4>🍄 마리오 - 용감한 영웅</h4>
            <p><strong>당신은 마리오입니다!</strong></p>
            <p>긍정적이고 용감한 당신은 어떤 어려움도 두려워하지 않습니다. 
            모험을 즐기고 친구들을 위해 기꺼이 위험을 감수하는 진정한 영웅이에요!</p>
            <p><strong>✨ 특징:</strong> 용기, 긍정적, 모험심, 정의감</p>
            <p><strong>🎮 대표 게임:</strong> 슈퍼 마리오 브라더스, 슈퍼 마리오 오디세이</p>
            <p><strong>🌟 명대사:</strong> "Let's-a go!"</p>
        `
    },
    luigi: {
        name: '루이지',
        emoji: '👻',
        game: '루이지 맨션 시리즈',
        description: `
            <h4>👻 루이지 - 충직한 동생</h4>
            <p><strong>당신은 루이지입니다!</strong></p>
            <p>조심스럽지만 친구를 위해서라면 무엇이든 하는 당신. 
            겁이 좀 많지만 그만큼 신중하고, 가장 중요한 순간에는 용기를 내는 진정한 히어로예요!</p>
            <p><strong>✨ 특징:</strong> 충성심, 신중함, 겸손함, 친구 사랑</p>
            <p><strong>🎮 대표 게임:</strong> 루이지 맨션, 슈퍼 마리오 브라더스</p>
            <p><strong>🌟 명대사:</strong> "Mama mia!"</p>
        `
    },
    zelda: {
        name: '젤다',
        emoji: '👸',
        game: '젤다의 전설 시리즈',
        description: `
            <h4>👸 젤다 - 지혜의 공주</h4>
            <p><strong>당신은 젤다 공주입니다!</strong></p>
            <p>지혜롭고 우아한 당신은 뛰어난 전략가이자 리더입니다. 
            냉정하게 상황을 판단하고 최선의 해결책을 찾아내는 능력이 탁월해요!</p>
            <p><strong>✨ 특징:</strong> 지혜, 리더십, 우아함, 전략적 사고</p>
            <p><strong>🎮 대표 게임:</strong> 젤다의 전설: 브레스 오브 더 와일드, 티어스 오브 더 킹덤</p>
            <p><strong>🌟 특별한 능력:</strong> 지혜의 트라이포스</p>
        `
    },
    link: {
        name: '링크',
        emoji: '🗡️',
        game: '젤다의 전설 시리즈',
        description: `
            <h4>🗡️ 링크 - 침묵의 용사</h4>
            <p><strong>당신은 링크입니다!</strong></p>
            <p>말은 적지만 행동으로 보여주는 진정한 영웅입니다. 
            신중하게 생각하고 과감하게 행동하는 당신은 모두가 의지하는 존재예요!</p>
            <p><strong>✨ 특징:</strong> 용기, 신중함, 행동력, 끈기</p>
            <p><strong>🎮 대표 게임:</strong> 젤다의 전설 시리즈 전체</p>
            <p><strong>🌟 특별한 능력:</strong> 마스터 소드의 주인</p>
        `
    },
    kirby: {
        name: '커비',
        emoji: '💗',
        game: '별의 커비 시리즈',
        description: `
            <h4>💗 커비 - 순수한 전사</h4>
            <p><strong>당신은 커비입니다!</strong></p>
            <p>순수하고 밝은 당신은 주변 사람들에게 행복을 전파합니다. 
            귀엽지만 강력한 힘을 가진 당신은 친구들을 위해 무엇이든 할 수 있어요!</p>
            <p><strong>✨ 특징:</strong> 순수함, 밝음, 친근함, 낙천적</p>
            <p><strong>🎮 대표 게임:</strong> 별의 커비 시리즈, 커비 파이터즈</p>
            <p><strong>🌟 특별한 능력:</strong> 복사 능력</p>
        `
    },
    yoshi: {
        name: '요시',
        emoji: '🦕',
        game: '요시 아일랜드 시리즈',
        description: `
            <h4>🦕 요시 - 믿음직한 친구</h4>
            <p><strong>당신은 요시입니다!</strong></p>
            <p>충직하고 친근한 당신은 누구에게나 사랑받는 성격입니다. 
            온화하지만 필요할 때는 강인함을 보여주는 최고의 동료예요!</p>
            <p><strong>✨ 특징:</strong> 충성심, 친근함, 온화함, 믿음직함</p>
            <p><strong>🎮 대표 게임:</strong> 요시 아일랜드, 요시 크래프티드 월드</p>
            <p><strong>🌟 특별한 능력:</strong> 알을 던지는 능력</p>
        `
    },
    samus: {
        name: '사무스',
        emoji: '🚀',
        game: '메트로이드 시리즈',
        description: `
            <h4>🚀 사무스 - 고독한 사냥꾼</h4>
            <p><strong>당신은 사무스 아란입니다!</strong></p>
            <p>독립적이고 강인한 당신은 혼자서도 모든 것을 해낼 수 있습니다. 
            냉정하고 프로페셔널한 당신은 어떤 위험한 임무도 완수하는 최강의 전사예요!</p>
            <p><strong>✨ 특징:</strong> 독립성, 강인함, 냉정함, 프로페셔널</p>
            <p><strong>🎮 대표 게임:</strong> 메트로이드 시리즈, 메트로이드 드레드</p>
            <p><strong>🌟 특별한 능력:</strong> 파워 슈트</p>
        `
    },
    fox: {
        name: '폭스',
        emoji: '🦊',
        game: '스타폭스 시리즈',
        description: `
            <h4>🦊 폭스 - 전략적 리더</h4>
            <p><strong>당신은 폭스 맥클라우드입니다!</strong></p>
            <p>전략적이고 리더십이 뛰어난 당신은 팀을 이끄는 리더입니다. 
            책임감이 강하고 팀워크를 중시하는 당신은 모두가 따르는 훌륭한 리더예요!</p>
            <p><strong>✨ 특징:</strong> 리더십, 전략적 사고, 팀워크, 책임감</p>
            <p><strong>🎮 대표 게임:</strong> 스타폭스 시리즈, 대난투 스매시브라더스</p>
            <p><strong>🌟 명대사:</strong> "Do a barrel roll!"</p>
        `
    }
};

const questions = [
    {
        text: "쿠파가 피치 공주를 납치했습니다!",
        options: [
            { text: "\"Let's go!\" 바로 성으로 돌진!", character: 'mario', points: 3 },
            { text: "\"으... 무섭지만 형을 도와야지...\"", character: 'luigi', points: 3 },
            { text: "구출 작전을 세밀하게 계획한다", character: 'zelda', points: 3 },
            { text: "검을 들고 조용히 잠입한다", character: 'link', points: 3 }
        ]
    },
    {
        text: "친구가 케이크를 만들어왔어요!",
        options: [
            { text: "\"와! 맛있겠다!\" 신나게 먹는다", character: 'kirby', points: 3 },
            { text: "\"고마워!\" 다 같이 나눠먹자고 한다", character: 'yoshi', points: 3 },
            { text: "\"감사합니다\" 정중하게 받고 조금만", character: 'zelda', points: 2 },
            { text: "조용히 고맙다는 눈빛을 보낸다", character: 'link', points: 2 }
        ]
    },
    {
        text: "우주 해적이 나타났습니다!",
        options: [
            { text: "\"팀원들, 포메이션 Alpha!\"", character: 'fox', points: 3 },
            { text: "전투복을 입고 혼자 처리한다", character: 'samus', points: 3 },
            { text: "\"이건 내가 막을게!\" 앞으로 나선다", character: 'mario', points: 2 },
            { text: "함정을 파고 전략적으로 유인한다", character: 'zelda', points: 2 }
        ]
    },
    {
        text: "유령의 집에 갇혔어요. 손전등이 하나 있습니다.",
        options: [
            { text: "\"으아아악!\" 하지만 친구 위해 탐색", character: 'luigi', points: 3 },
            { text: "\"재밌겠는데?\" 유령 찾으러 간다", character: 'mario', points: 2 },
            { text: "냉정하게 탈출구를 찾아 스캔한다", character: 'samus', points: 2 },
            { text: "손전등 없이도 검으로 길을 찾는다", character: 'link', points: 3 }
        ]
    },
    {
        text: "마을에 축제가 열렸습니다!",
        options: [
            { text: "\"야호!\" 모든 게임을 다 해본다", character: 'kirby', points: 3 },
            { text: "친구들과 함께 천천히 구경한다", character: 'yoshi', points: 3 },
            { text: "축제보다 훈련이 필요하다", character: 'samus', points: 3 },
            { text: "팀원들 안전 확인 후 즐긴다", character: 'fox', points: 2 }
        ]
    },
    {
        text: "새로운 던전을 발견했습니다!",
        options: [
            { text: "\"신난다!\" 바로 들어간다", character: 'mario', points: 3 },
            { text: "던전 구조를 분석하고 지도를 그린다", character: 'zelda', points: 3 },
            { text: "필요한 장비를 점검하고 진입한다", character: 'link', points: 3 },
            { text: "\"보상이 있나?\" 효율적으로 클리어", character: 'samus', points: 2 }
        ]
    },
    {
        text: "팀 미션이 주어졌습니다. 당신의 역할은?",
        options: [
            { text: "\"내가 지휘를 맡겠다!\"", character: 'fox', points: 3 },
            { text: "\"전략은 내가 짜볼게\"", character: 'zelda', points: 2 },
            { text: "\"나는 뒤에서 서포트!\"", character: 'yoshi', points: 3 },
            { text: "혼자서 정찰 임무를 수행한다", character: 'samus', points: 3 }
        ]
    },
    {
        text: "친구가 실수로 당신의 물건을 망가뜨렸어요.",
        options: [
            { text: "\"괜찮아!\" 웃으며 넘긴다", character: 'kirby', points: 2 },
            { text: "\"그럴 수 있지\" 따뜻하게 위로한다", character: 'yoshi', points: 3 },
            { text: "\"...\" 아무 말 없지만 괜찮다는 표정", character: 'link', points: 3 },
            { text: "\"괜찮아. 다음엔 조심하자!\"", character: 'mario', points: 3 }
        ]
    },
    {
        text: "어려운 보스가 나타났습니다. 3번 도전했지만 실패했어요.",
        options: [
            { text: "\"한 번 더!\" 계속 도전한다", character: 'mario', points: 3 },
            { text: "\"무섭지만 포기 못 해!\" 떨면서 도전", character: 'luigi', points: 3 },
            { text: "패턴을 분석하고 약점을 찾는다", character: 'zelda', points: 3 },
            { text: "장비를 업그레이드하고 다시 간다", character: 'samus', points: 2 }
        ]
    },
    {
        text: "생일에 뭘 받고 싶으세요?",
        options: [
            { text: "친구들과 함께하는 파티!", character: 'kirby', points: 3 },
            { text: "진심 담긴 편지면 충분해", character: 'yoshi', points: 3 },
            { text: "새로운 장비나 기술서", character: 'samus', points: 3 },
            { text: "팀원들과의 우정 강화 훈련", character: 'fox', points: 3 }
        ]
    }
];

let currentQuestion = 0;
let scores = {
    mario: 0,
    luigi: 0,
    zelda: 0,
    link: 0,
    kirby: 0,
    yoshi: 0,
    samus: 0,
    fox: 0
};

function startTest() {
    document.querySelector('.intro-screen').classList.remove('active');
    document.querySelector('.question-screen').classList.add('active');
    currentQuestion = 0;
    scores = {
        mario: 0,
        luigi: 0,
        zelda: 0,
        link: 0,
        kirby: 0,
        yoshi: 0,
        samus: 0,
        fox: 0
    };
    showQuestion();
}

function showQuestion() {
    const question = questions[currentQuestion];
    const progress = ((currentQuestion + 1) / questions.length) * 100;
    
    document.getElementById('progress').style.width = progress + '%';
    document.getElementById('questionNumber').textContent = `질문 ${currentQuestion + 1}/${questions.length}`;
    document.getElementById('questionText').textContent = question.text;
    
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

function selectOption(index) {
    document.querySelectorAll('.option').forEach(opt => opt.classList.remove('selected'));
    const selected = document.querySelectorAll('.option')[index];
    selected.classList.add('selected');
    
    const question = questions[currentQuestion];
    const option = question.options[index];
    scores[option.character] += option.points;
    
    document.getElementById('nextButton').disabled = false;
}

function nextQuestion() {
    currentQuestion++;
    
    if (currentQuestion < questions.length) {
        showQuestion();
    } else {
        showResult();
    }
}

function showResult() {
    let maxScore = 0;
    let resultCharacter = 'mario';
    
    for (let character in scores) {
        if (scores[character] > maxScore) {
            maxScore = scores[character];
            resultCharacter = character;
        }
    }
    
    const characterData = characters[resultCharacter];
    
    document.getElementById('resultIcon').textContent = characterData.emoji;
    document.getElementById('resultTitle').textContent = characterData.name;
    document.getElementById('resultDescription').innerHTML = characterData.description;
    
    document.querySelector('.question-screen').classList.remove('active');
    document.querySelector('.result-screen').classList.add('active');
    window.scrollTo({ top: 0, behavior: 'smooth' });
}

function retryTest() {
    document.querySelector('.result-screen').classList.remove('active');
    document.querySelector('.intro-screen').classList.add('active');
    window.scrollTo({ top: 0, behavior: 'smooth' });
}
