// F1 드라이버 데이터
const drivers = {
    verstappen: {
        name: 'Max Verstappen',
        team: 'Red Bull Racing',
        emoji: '🦁',
        traits: {
            speed: 98,
            consistency: 95,
            aggression: 97,
            strategy: 92,
            teamwork: 85
        },
        description: `
            <h4>🦁 완벽주의자 챔피언</h4>
            <p><strong>당신은 맥스 베르스타펜과 같은 스타일입니다!</strong></p>
            <p>압도적인 속도와 공격적인 레이싱 스타일이 특징입니다. 완벽을 추구하며, 한 번 앞서면 절대 놓지 않는 승부욕이 강합니다. 
            냉정하고 계산적이지만, 필요할 때는 과감한 오버테이킹도 서슴지 않습니다.</p>
            <p>💪 <strong>강점:</strong> 압도적인 속도, 일관성, 완벽한 집중력</p>
            <p>⚠️ <strong>주의할 점:</strong> 때로는 너무 공격적일 수 있음</p>
        `
    },
    hamilton: {
        name: 'Lewis Hamilton',
        team: 'Mercedes-AMG',
        emoji: '👑',
        traits: {
            speed: 96,
            consistency: 98,
            aggression: 85,
            strategy: 97,
            teamwork: 94
        },
        description: `
            <h4>👑 전설적인 챔피언</h4>
            <p><strong>당신은 루이스 해밀턴과 같은 스타일입니다!</strong></p>
            <p>경험과 전략, 그리고 일관성이 무기입니다. 오랜 경력을 통해 쌓은 지혜로 어떤 상황에서도 침착하게 대응합니다. 
            압박 속에서도 실수하지 않으며, 중요한 순간에 최고의 퍼포먼스를 발휘합니다.</p>
            <p>💪 <strong>강점:</strong> 압박 속 집중력, 전략적 사고, 경험</p>
            <p>⚠️ <strong>주의할 점:</strong> 가끔 너무 안전하게 플레이할 수 있음</p>
        `
    },
    leclerc: {
        name: 'Charles Leclerc',
        team: 'Ferrari',
        emoji: '🔥',
        traits: {
            speed: 97,
            consistency: 88,
            aggression: 94,
            strategy: 86,
            teamwork: 90
        },
        description: `
            <h4>🔥 열정적인 스피드스터</h4>
            <p><strong>당신은 샤를 르클레르와 같은 스타일입니다!</strong></p>
            <p>천부적인 속도감과 열정이 넘칩니다. 예선에서 폴 포지션을 따내는 것을 즐기며, 
            공격적이고 대담한 오버테이킹으로 관중들을 열광시킵니다. 레이싱에 대한 순수한 사랑이 느껴집니다.</p>
            <p>💪 <strong>강점:</strong> 원랩 속도, 열정, 오버테이킹 능력</p>
            <p>⚠️ <strong>주의할 점:</strong> 가끔 감정적일 수 있음, 일관성 향상 필요</p>
        `
    },
    norris: {
        name: 'Lando Norris',
        team: 'McLaren',
        emoji: '😄',
        traits: {
            speed: 93,
            consistency: 91,
            aggression: 87,
            strategy: 89,
            teamwork: 96
        },
        description: `
            <h4>😄 재치있는 올라운더</h4>
            <p><strong>당신은 란도 노리스와 같은 스타일입니다!</strong></p>
            <p>밝고 긍정적인 에너지를 가지고 있으며, 팀원들과의 소통을 즐깁니다. 
            빠르면서도 안정적이고, 압박 상황에서도 유머를 잃지 않습니다. 점점 성장하며 자신의 한계를 넓혀가고 있습니다.</p>
            <p>💪 <strong>강점:</strong> 팀워크, 적응력, 긍정적 태도</p>
            <p>⚠️ <strong>주의할 점:</strong> 때로는 더 공격적이어야 할 때가 있음</p>
        `
    },
    alonso: {
        name: 'Fernando Alonso',
        team: 'Aston Martin',
        emoji: '🧙',
        traits: {
            speed: 92,
            consistency: 96,
            aggression: 91,
            strategy: 99,
            teamwork: 88
        },
        description: `
            <h4>🧙 베테랑 마에스트로</h4>
            <p><strong>당신은 페르난도 알론소와 같은 스타일입니다!</strong></p>
            <p>오랜 경험으로 다져진 지혜와 전략적 사고가 무기입니다. 차의 성능을 최대한 끌어내는 능력이 뛰어나며, 
            어떤 상황에서도 최선의 결과를 만들어냅니다. 나이가 들어도 여전히 정상급 속도를 유지하는 놀라운 드라이버입니다.</p>
            <p>💪 <strong>강점:</strong> 전략적 천재, 차량 활용 능력, 경험</p>
            <p>⚠️ <strong>주의할 점:</strong> 때로는 너무 계산적일 수 있음</p>
        `
    },
    sainz: {
        name: 'Carlos Sainz',
        team: 'Ferrari',
        emoji: '🎯',
        traits: {
            speed: 91,
            consistency: 94,
            aggression: 86,
            strategy: 92,
            teamwork: 95
        },
        description: `
            <h4>🎯 신뢰할 수 있는 완성형</h4>
            <p><strong>당신은 카를로스 사인츠와 같은 스타일입니다!</strong></p>
            <p>꾸준함과 안정성이 최고의 무기입니다. 화려하지는 않지만 실수가 적고, 
            항상 팀이 원하는 결과를 가져다줍니다. 팀원들이 믿고 의지할 수 있는 존재이며, 압박 상황에서도 침착합니다.</p>
            <p>💪 <strong>강점:</strong> 일관성, 신뢰성, 팀워크</p>
            <p>⚠️ <strong>주의할 점:</strong> 때로는 더 공격적인 도전이 필요</p>
        `
    },
    russell: {
        name: 'George Russell',
        team: 'Mercedes-AMG',
        emoji: '📊',
        traits: {
            speed: 93,
            consistency: 92,
            aggression: 88,
            strategy: 95,
            teamwork: 93
        },
        description: `
            <h4>📊 분석적 퍼펙셔니스트</h4>
            <p><strong>당신은 조지 러셀과 같은 스타일입니다!</strong></p>
            <p>체계적이고 분석적인 접근으로 레이스를 풀어갑니다. 데이터를 중시하며, 
            모든 것을 완벽하게 준비하려고 합니다. 빠르면서도 영리하며, 팀과의 소통도 뛰어납니다.</p>
            <p>💪 <strong>강점:</strong> 분석력, 준비성, 체계적 사고</p>
            <p>⚠️ <strong>주의할 점:</strong> 때로는 직관도 필요함</p>
        `
    },
    perez: {
        name: 'Sergio Perez',
        team: 'Red Bull Racing',
        emoji: '🛡️',
        traits: {
            speed: 89,
            consistency: 90,
            aggression: 84,
            strategy: 91,
            teamwork: 97
        },
        description: `
            <h4>🛡️ 완벽한 팀 플레이어</h4>
            <p><strong>당신은 세르히오 페레즈와 같은 스타일입니다!</strong></p>
            <p>팀을 위해 희생할 줄 아는 진정한 팀 플레이어입니다. 
            방어 레이싱과 타이어 관리에 뛰어나며, 팀 전략을 완벽하게 수행합니다. 
            자신의 역할을 정확히 이해하고 최선을 다합니다.</p>
            <p>💪 <strong>강점:</strong> 팀워크, 타이어 관리, 방어 능력</p>
            <p>⚠️ <strong>주의할 점:</strong> 때로는 자신을 위한 레이스도 필요</p>
        `
    }
};

// 질문 데이터
const questions = [
    {
        text: "레이스가 시작되었습니다. 첫 코너에서 당신의 전략은?",
        options: [
            { text: "과감하게 앞지르기를 시도한다", scores: { verstappen: 3, leclerc: 3, hamilton: 1, alonso: 1 } },
            { text: "안정적으로 포지션을 유지한다", scores: { sainz: 3, perez: 3, russell: 2, norris: 2 } },
            { text: "상황을 보고 기회를 엿본다", scores: { alonso: 3, hamilton: 2, russell: 2 } },
            { text: "공격과 수비의 균형을 맞춘다", scores: { norris: 3, russell: 2, hamilton: 2 } }
        ]
    },
    {
        text: "예선에서 가장 중요한 것은?",
        options: [
            { text: "무조건 폴 포지션!", scores: { leclerc: 3, verstappen: 3, hamilton: 2 } },
            { text: "안정적으로 상위권 확보", scores: { sainz: 3, russell: 2, perez: 2 } },
            { text: "레이스 전략을 위한 좋은 위치", scores: { alonso: 3, hamilton: 2, norris: 2 } },
            { text: "차의 최대 성능을 끌어내기", scores: { verstappen: 2, russell: 3, alonso: 2 } }
        ]
    },
    {
        text: "팀 라디오에서 '박스, 박스'(피트스톱 신호)가 왔습니다. 하지만 당신은 지금이 아니라고 생각합니다.",
        options: [
            { text: "팀의 전략을 따른다", scores: { perez: 3, sainz: 3, russell: 2 } },
            { text: "내 의견을 강력히 주장한다", scores: { verstappen: 3, alonso: 3, hamilton: 2 } },
            { text: "한 바퀴만 더 달리자고 협상한다", scores: { hamilton: 3, norris: 2, alonso: 2 } },
            { text: "상황을 설명하며 대안을 제시한다", scores: { russell: 3, alonso: 2, sainz: 2 } }
        ]
    },
    {
        text: "라이벌이 바로 뒤에서 DRS 구간을 이용해 따라붙고 있습니다!",
        options: [
            { text: "공격적으로 막아선다", scores: { verstappen: 3, leclerc: 2, alonso: 2 } },
            { text: "전략적으로 라인을 선택한다", scores: { alonso: 3, hamilton: 3, russell: 2 } },
            { text: "팀에 도움을 요청한다", scores: { perez: 3, norris: 2, russell: 2 } },
            { text: "냉정하게 내 페이스를 유지한다", scores: { hamilton: 3, sainz: 3, verstappen: 2 } }
        ]
    },
    {
        text: "비가 내리기 시작했습니다. 타이어 전략은?",
        options: [
            { text: "과감하게 인터미디어트로 먼저 바꾼다", scores: { verstappen: 3, leclerc: 3, hamilton: 2 } },
            { text: "다른 팀들의 선택을 본다", scores: { perez: 3, sainz: 2, norris: 2 } },
            { text: "팀의 데이터를 믿고 따른다", scores: { russell: 3, sainz: 2, perez: 2 } },
            { text: "상황을 최대한 활용한다", scores: { alonso: 3, hamilton: 3, norris: 2 } }
        ]
    },
    {
        text: "시즌 중반, 성적이 기대에 못 미치고 있습니다.",
        options: [
            { text: "더 열심히 훈련하고 분석한다", scores: { russell: 3, hamilton: 2, verstappen: 2 } },
            { text: "팀과 소통하며 함께 해결책을 찾는다", scores: { norris: 3, perez: 3, sainz: 2 } },
            { text: "차의 업데이트를 요구한다", scores: { verstappen: 3, alonso: 3, leclerc: 2 } },
            { text: "긍정적 태도를 유지하며 계속 밀어붙인다", scores: { norris: 3, hamilton: 2, leclerc: 2 } }
        ]
    },
    {
        text: "팀 동료가 당신보다 빠른 페이스를 보이고 있습니다.",
        options: [
            { text: "경쟁심에 불타 더 빠르게 달린다", scores: { verstappen: 3, leclerc: 3, hamilton: 1 } },
            { text: "그의 데이터를 분석해 배운다", scores: { russell: 3, sainz: 2, alonso: 2 } },
            { text: "내 페이스를 유지하며 꾸준히 간다", scores: { sainz: 3, perez: 2, hamilton: 2 } },
            { text: "팀의 성공을 위해 협력한다", scores: { perez: 3, norris: 3, sainz: 2 } }
        ]
    },
    {
        text: "레이스 중 라디오 통신이 끊겼습니다. 어떻게 하시겠습니까?",
        options: [
            { text: "내 본능과 경험을 믿는다", scores: { verstappen: 3, hamilton: 3, alonso: 2 } },
            { text: "다른 차들의 움직임을 보고 판단한다", scores: { alonso: 3, russell: 2, norris: 2 } },
            { text: "원래 계획대로 차근차근 진행한다", scores: { sainz: 3, perez: 2, russell: 2 } },
            { text: "침착하게 문제를 해결하려 노력한다", scores: { russell: 3, hamilton: 2, sainz: 2 } }
        ]
    },
    {
        text: "마지막 랩, 1위와 0.5초 차이입니다!",
        options: [
            { text: "모든 것을 걸고 공격한다!", scores: { verstappen: 3, leclerc: 3, norris: 2 } },
            { text: "전략적으로 약점을 노린다", scores: { alonso: 3, hamilton: 3, russell: 2 } },
            { text: "한계까지 밀어붙이되 침착함을 유지", scores: { hamilton: 3, verstappen: 2, sainz: 2 } },
            { text: "현실적으로 2위를 확보한다", scores: { perez: 3, sainz: 3, russell: 1 } }
        ]
    },
    {
        text: "포디움에 올랐습니다! 당신의 첫 마디는?",
        options: [
            { text: "팀 전체에게 감사를 표한다", scores: { perez: 3, norris: 3, sainz: 2 } },
            { text: "다음 레이스 우승을 약속한다", scores: { verstappen: 3, leclerc: 2, hamilton: 2 } },
            { text: "이 결과를 분석하고 개선점을 찾겠다", scores: { russell: 3, hamilton: 2, alonso: 2 } },
            { text: "경쟁자들과 멋진 배틀에 감사한다", scores: { norris: 3, leclerc: 2, hamilton: 2 } }
        ]
    },
    {
        text: "시즌 오프, 당신은 무엇을 하시나요?",
        options: [
            { text: "시뮬레이터로 계속 훈련한다", scores: { verstappen: 3, russell: 2, leclerc: 2 } },
            { text: "팀과 함께 차 개발에 참여한다", scores: { alonso: 3, russell: 3, hamilton: 2 } },
            { text: "휴식을 취하며 재충전한다", scores: { norris: 3, sainz: 2, perez: 2 } },
            { text: "다른 레이싱 시리즈에 도전한다", scores: { hamilton: 3, alonso: 2, leclerc: 2 } }
        ]
    },
    {
        text: "F1 드라이버로서 당신의 궁극적인 목표는?",
        options: [
            { text: "세계 챔피언이 되는 것", scores: { verstappen: 3, leclerc: 3, hamilton: 2 } },
            { text: "팀을 챔피언으로 만드는 것", scores: { perez: 3, norris: 2, sainz: 2 } },
            { text: "레전드로 기억되는 것", scores: { hamilton: 3, alonso: 3, verstappen: 2 } },
            { text: "레이싱의 즐거움과 발전", scores: { norris: 3, leclerc: 2, russell: 2 } }
        ]
    }
];

let currentQuestion = 0;
let answers = {};
let scores = {};

// 점수 초기화
function initScores() {
    for (let driver in drivers) {
        scores[driver] = 0;
    }
}

// 테스트 시작
function startTest() {
    document.querySelector('.intro-screen').classList.remove('active');
    document.querySelector('.question-screen').classList.add('active');
    initScores();
    currentQuestion = 0;
    showQuestion();
}

// 질문 표시
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

// 옵션 선택
function selectOption(index) {
    // 모든 옵션의 선택 해제
    document.querySelectorAll('.option').forEach(opt => opt.classList.remove('selected'));
    
    // 선택된 옵션 표시
    document.querySelectorAll('.option')[index].classList.add('selected');
    
    // 답변 저장
    answers[currentQuestion] = index;
    
    // 점수 추가
    const question = questions[currentQuestion];
    const selectedOption = question.options[index];
    
    for (let driver in selectedOption.scores) {
        scores[driver] += selectedOption.scores[driver];
    }
    
    // 다음 버튼 활성화
    document.getElementById('nextButton').disabled = false;
}

// 다음 질문
function nextQuestion() {
    currentQuestion++;
    
    if (currentQuestion < questions.length) {
        showQuestion();
    } else {
        showResult();
    }
}

// 결과 표시
function showResult() {
    // 가장 높은 점수의 드라이버 찾기
    let maxScore = 0;
    let resultDriver = 'verstappen';
    
    for (let driver in scores) {
        if (scores[driver] > maxScore) {
            maxScore = scores[driver];
            resultDriver = driver;
        }
    }
    
    const driverData = drivers[resultDriver];
    
    // 일치율 계산 (60-95% 범위)
    const totalPossible = questions.length * 3;
    const matchPercentage = Math.min(95, 60 + Math.round((maxScore / totalPossible) * 35));
    
    // 결과 화면 업데이트
    document.getElementById('driverEmoji').textContent = driverData.emoji;
    document.getElementById('driverName').textContent = driverData.name;
    document.getElementById('driverTeam').textContent = driverData.team;
    document.getElementById('matchPercentage').textContent = matchPercentage + '%';
    document.getElementById('driverDescription').innerHTML = driverData.description;
    
    // 특성 바 생성
    const traitBars = document.getElementById('traitBars');
    traitBars.innerHTML = '';
    
    const traitNames = {
        speed: '속도',
        consistency: '일관성',
        aggression: '공격성',
        strategy: '전략',
        teamwork: '팀워크'
    };
    
    for (let trait in driverData.traits) {
        const traitDiv = document.createElement('div');
        traitDiv.className = 'trait';
        traitDiv.innerHTML = `
            <div class="trait-label">
                <span>${traitNames[trait]}</span>
                <span><strong>${driverData.traits[trait]}</strong></span>
            </div>
            <div class="trait-bar">
                <div class="trait-fill" style="width: 0%"></div>
            </div>
        `;
        traitBars.appendChild(traitDiv);
    }
    
    // 화면 전환
    document.querySelector('.question-screen').classList.remove('active');
    document.querySelector('.result-screen').classList.add('active');
    
    // 애니메이션으로 바 채우기
    setTimeout(() => {
        const fills = document.querySelectorAll('.trait-fill');
        let index = 0;
        for (let trait in driverData.traits) {
            fills[index].style.width = driverData.traits[trait] + '%';
            index++;
        }
    }, 300);
    
    // 맨 위로 스크롤
    window.scrollTo({ top: 0, behavior: 'smooth' });
}

// 다시 테스트
function retryTest() {
    document.querySelector('.result-screen').classList.remove('active');
    document.querySelector('.intro-screen').classList.add('active');
    answers = {};
    window.scrollTo({ top: 0, behavior: 'smooth' });
}
