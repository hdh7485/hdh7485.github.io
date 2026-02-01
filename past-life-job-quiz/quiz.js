const houses = {
    gryffindor: {
        name: '그리핀도르',
        emoji: '🦁',
        color: '#740001',
        motto: '"용기, 대담함, 기사도"',
        description: `
            <h4>🦁 그리핀도르 - 용감한 사자</h4>
            <p><strong>당신은 그리핀도르입니다!</strong></p>
            <p>용기와 대담함이 넘치는 당신은 정의를 위해 싸우는 것을 두려워하지 않습니다. 
            모험을 즐기고 어려움 앞에서도 물러서지 않는 강한 의지를 가졌습니다.</p>
            <p><strong>✨ 특징:</strong> 용감함, 기사도, 결단력, 정의감</p>
            <p><strong>🎓 유명한 선배:</strong> 해리 포터, 헤르미온느 그레인저, 론 위즐리, 알버스 덤블도어</p>
            <p><strong>🏠 기숙사 특징:</strong> 따뜻하고 아늑한 공용실, 붉은색과 금색 장식</p>
        `
    },
    slytherin: {
        name: '슬리데린',
        emoji: '🐍',
        color: '#1a472a',
        motto: '"야망, 교활함, 리더십"',
        description: `
            <h4>🐍 슬리데린 - 영리한 뱀</h4>
            <p><strong>당신은 슬리데린입니다!</strong></p>
            <p>야심차고 전략적인 당신은 목표를 이루기 위해 영리하게 행동합니다. 
            리더십이 뛰어나고 강한 자존심과 자부심을 가지고 있습니다.</p>
            <p><strong>✨ 특징:</strong> 야망, 교활함, 리더십, 자원력</p>
            <p><strong>🎓 유명한 선배:</strong> 세베루스 스네이프, 드레이코 말포이, 톰 리들(볼드모트)</p>
            <p><strong>🏠 기숙사 특징:</strong> 호수 아래 지하 공용실, 은색과 녹색 장식</p>
        `
    },
    ravenclaw: {
        name: '래번클로',
        emoji: '🦅',
        color: '#0e1a40',
        motto: '"지혜, 학식, 재치"',
        description: `
            <h4>🦅 래번클로 - 현명한 독수리</h4>
            <p><strong>당신은 래번클로입니다!</strong></p>
            <p>지적이고 창의적인 당신은 배움을 사랑하고 진리를 추구합니다. 
            독창적인 생각과 논리적인 분석력으로 문제를 해결합니다.</p>
            <p><strong>✨ 특징:</strong> 지혜, 창의성, 호기심, 논리력</p>
            <p><strong>🎓 유명한 선배:</strong> 루나 러브굿, 조 창, 피우스 플리트윅 교수</p>
            <p><strong>🏠 기숙사 특징:</strong> 높은 탑의 공용실, 파란색과 청동색 장식</p>
        `
    },
    hufflepuff: {
        name: '후플푸프',
        emoji: '🦡',
        color: '#ecb939',
        motto: '"헌신, 인내, 충성"',
        description: `
            <h4>🦡 후플푸프 - 성실한 오소리</h4>
            <p><strong>당신은 후플푸프입니다!</strong></p>
            <p>성실하고 공정한 당신은 모든 사람을 동등하게 대합니다. 
            인내심이 강하고 친구들에게 헌신적이며 근면 성실합니다.</p>
            <p><strong>✨ 특징:</strong> 헌신, 충성심, 공정함, 근면</p>
            <p><strong>🎓 유명한 선배:</strong> 뉴트 스캐맨더, 세드릭 디고리, 님파도라 통스</p>
            <p><strong>🏠 기숙사 특징:</strong> 따뜻한 지하 공용실, 노란색과 검은색 장식</p>
        `
    }
};

const questions = [
    {
        text: "어두운 숲 속에서 길을 잃었습니다. 어떻게 하시겠습니까?",
        options: [
            { text: "용감하게 앞으로 나아간다", house: 'gryffindor' },
            { text: "전략적으로 표식을 남기며 탐색한다", house: 'slytherin' },
            { text: "별자리를 보고 방향을 찾는다", house: 'ravenclaw' },
            { text: "차분하게 길을 찾을 때까지 기다린다", house: 'hufflepuff' }
        ]
    },
    {
        text: "친구가 곤경에 처했습니다. 어떻게 도와주시겠습니까?",
        options: [
            { text: "즉시 달려가 직접 해결한다", house: 'gryffindor' },
            { text: "영향력 있는 사람을 통해 해결한다", house: 'slytherin' },
            { text: "최선의 해결책을 분석해서 조언한다", house: 'ravenclaw' },
            { text: "끝까지 곁에서 응원하고 지지한다", house: 'hufflepuff' }
        ]
    },
    {
        text: "가장 중요하게 생각하는 가치는?",
        options: [
            { text: "용기와 정의", house: 'gryffindor' },
            { text: "야망과 성공", house: 'slytherin' },
            { text: "지혜와 진리", house: 'ravenclaw' },
            { text: "충성과 우정", house: 'hufflepuff' }
        ]
    },
    {
        text: "시험 전날 밤, 당신은?",
        options: [
            { text: "자신감 있게 잠을 잔다", house: 'gryffindor' },
            { text: "출제 경향을 분석한다", house: 'slytherin' },
            { text: "완벽히 이해할 때까지 공부한다", house: 'ravenclaw' },
            { text: "꾸준히 공부했으니 충분하다", house: 'hufflepuff' }
        ]
    },
    {
        text: "마법의 능력을 하나 얻는다면?",
        options: [
            { text: "위험에서 사람들을 구하는 힘", house: 'gryffindor' },
            { text: "다른 사람의 마음을 읽는 힘", house: 'slytherin' },
            { text: "모든 지식을 이해하는 힘", house: 'ravenclaw' },
            { text: "동물과 대화하는 힘", house: 'hufflepuff' }
        ]
    },
    {
        text: "그룹 프로젝트에서 당신의 역할은?",
        options: [
            { text: "리더로서 팀을 이끈다", house: 'gryffindor' },
            { text: "전략을 세우고 역할을 분배한다", house: 'slytherin' },
            { text: "아이디어를 내고 문제를 해결한다", house: 'ravenclaw' },
            { text: "묵묵히 맡은 일을 완수한다", house: 'hufflepuff' }
        ]
    },
    {
        text: "누군가 당신을 부당하게 비난했습니다.",
        options: [
            { text: "정면으로 맞서 싸운다", house: 'gryffindor' },
            { text: "증거를 모아 반격한다", house: 'slytherin' },
            { text: "논리적으로 반박한다", house: 'ravenclaw' },
            { text: "시간이 진실을 밝혀줄 것이다", house: 'hufflepuff' }
        ]
    },
    {
        text: "여가 시간에 무엇을 하고 싶으신가요?",
        options: [
            { text: "모험적인 스포츠나 활동", house: 'gryffindor' },
            { text: "사교 모임이나 네트워킹", house: 'slytherin' },
            { text: "독서나 새로운 것 배우기", house: 'ravenclaw' },
            { text: "친구들과 편안히 시간 보내기", house: 'hufflepuff' }
        ]
    },
    {
        text: "당신의 약점은?",
        options: [
            { text: "때때로 무모할 수 있다", house: 'gryffindor' },
            { text: "목적을 위해 수단을 가리지 않을 수 있다", house: 'slytherin' },
            { text: "너무 머리로만 생각한다", house: 'ravenclaw' },
            { text: "다른 사람을 먼저 생각해 손해볼 때가 있다", house: 'hufflepuff' }
        ]
    },
    {
        text: "호그와트에서 가장 기대되는 것은?",
        options: [
            { text: "퀴디치와 모험", house: 'gryffindor' },
            { text: "강력한 마법과 영향력", house: 'slytherin' },
            { text: "방대한 도서관과 지식", house: 'ravenclaw' },
            { text: "평생 친구들과의 만남", house: 'hufflepuff' }
        ]
    }
];

let currentQuestion = 0;
let scores = { gryffindor: 0, slytherin: 0, ravenclaw: 0, hufflepuff: 0 };

function startTest() {
    document.querySelector('.intro-screen').classList.remove('active');
    document.querySelector('.question-screen').classList.add('active');
    currentQuestion = 0;
    scores = { gryffindor: 0, slytherin: 0, ravenclaw: 0, hufflepuff: 0 };
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
        
        // 각 기숙사 색상 적용
        const houseColors = {
            gryffindor: '#740001',
            slytherin: '#1a472a',
            ravenclaw: '#0e1a40',
            hufflepuff: '#ecb939'
        };
        optionDiv.style.setProperty('--house-color', houseColors[option.house]);
        
        optionsContainer.appendChild(optionDiv);
    });
    
    document.getElementById('nextButton').disabled = true;
}

function selectOption(index) {
    document.querySelectorAll('.option').forEach(opt => opt.classList.remove('selected'));
    const selected = document.querySelectorAll('.option')[index];
    selected.classList.add('selected');
    
    const question = questions[currentQuestion];
    const house = question.options[index].house;
    scores[house]++;
    
    // 선택된 옵션의 기숙사 색상으로 변경
    const houseColors = {
        gryffindor: '#740001',
        slytherin: '#1a472a',
        ravenclaw: '#0e1a40',
        hufflepuff: '#ecb939'
    };
    selected.style.background = houseColors[house];
    
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
    let resultHouse = 'gryffindor';
    
    for (let house in scores) {
        if (scores[house] > maxScore) {
            maxScore = scores[house];
            resultHouse = house;
        }
    }
    
    const houseData = houses[resultHouse];
    
    document.getElementById('houseLogo').textContent = houseData.emoji;
    document.getElementById('houseName').textContent = houseData.name;
    document.getElementById('houseName').style.color = houseData.color;
    document.getElementById('houseMotto').textContent = houseData.motto;
    document.getElementById('houseDescription').innerHTML = houseData.description;
    
    // 설명 섹션에 기숙사 색상 적용
    const descSection = document.getElementById('houseDescription');
    descSection.style.borderLeft = `5px solid ${houseData.color}`;
    descSection.querySelector('h4').style.color = houseData.color;
    
    document.querySelector('.question-screen').classList.remove('active');
    document.querySelector('.result-screen').classList.add('active');
    window.scrollTo({ top: 0, behavior: 'smooth' });
}

function retryTest() {
    document.querySelector('.result-screen').classList.remove('active');
    document.querySelector('.intro-screen').classList.add('active');
    window.scrollTo({ top: 0, behavior: 'smooth' });
}
