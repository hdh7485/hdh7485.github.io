const pokemons = {
    ENFP: { name: '피카츄', emoji: '⚡', desc: '활발하고 사교적이며 호기심이 많습니다. 모두의 사랑을 받는 인기쟁이!' },
    INFP: { name: '이브이', emoji: '🦊', desc: '순수하고 감성적이며 다양한 가능성을 가졌습니다. 무한한 잠재력!' },
    ENFJ: { name: '루카리오', emoji: '🐺', desc: '카리스마 있고 타인을 이끄는 리더. 정의감이 강하고 동료를 지킵니다!' },
    INFJ: { name: '뮤', emoji: '💫', desc: '신비롭고 희귀하며 깊은 통찰력을 가졌습니다. 특별한 존재!' },
    ENTP: { name: '메타몽', emoji: '💧', desc: '창의적이고 적응력이 뛰어나며 변화를 즐깁니다. 무엇이든 될 수 있어요!' },
    INTP: { name: '뮤츠', emoji: '🧬', desc: '논리적이고 분석적이며 지적 호기심이 강합니다. 천재 과학자!' },
    ENTJ: { name: '리자몽', emoji: '🔥', desc: '강력하고 목표지향적이며 리더십이 있습니다. 하늘을 날아오르는 전사!' },
    INTJ: { name: '가디안', emoji: '🌙', desc: '전략적이고 독립적이며 완벽주의자입니다. 계획의 달인!' },
    ESFP: { name: '파이리', emoji: '🔥', desc: '활동적이고 즐거움을 사랑하며 순간을 즐깁니다. 파티의 중심!' },
    ISFP: { name: '샤미드', emoji: '🌸', desc: '온화하고 예술적이며 자유로운 영혼입니다. 아름다움을 추구해요!' },
    ESFJ: { name: '행복이', emoji: '🥚', desc: '따뜻하고 배려심 깊으며 타인을 돌봅니다. 치유의 천사!' },
    ISFJ: { name: '이상해씨', emoji: '🌱', desc: '성실하고 책임감 있으며 헌신적입니다. 믿음직한 친구!' },
    ESTP: { name: '망나뇽', emoji: '🐉', desc: '대담하고 행동파이며 모험을 즐깁니다. 스릴을 추구하는 드래곤!' },
    ISTP: { name: '윈디', emoji: '🦁', desc: '침착하고 실용적이며 문제 해결에 능합니다. 쿨한 전사!' },
    ESTJ: { name: '갸라도스', emoji: '🐉', desc: '체계적이고 책임감 있으며 목표 달성에 강합니다. 강력한 리더!' },
    ISTJ: { name: '거북왕', emoji: '🐢', desc: '신중하고 믿음직스러우며 전통을 중시합니다. 든든한 방어벽!' }
};

const questions = [
    { text: "파티에 초대받았을 때", options: [
        { text: "신나! 많은 사람들을 만날 수 있겠네", type: 'E' },
        { text: "좋긴 한데... 조용한 게 더 편한데", type: 'I' }
    ]},
    { text: "새로운 게임을 시작할 때", options: [
        { text: "일단 시작하고 배운다", type: 'S' },
        { text: "스토리와 세계관부터 이해한다", type: 'N' }
    ]},
    { text: "친구가 고민 상담을 할 때", options: [
        { text: "해결 방법을 제시한다", type: 'T' },
        { text: "공감하고 위로해준다", type: 'F' }
    ]},
    { text: "여행 계획을 세울 때", options: [
        { text: "철저하게 일정을 짠다", type: 'J' },
        { text: "느낌대로 자유롭게 간다", type: 'P' }
    ]},
    { text: "주말에 뭐하고 싶어?", options: [
        { text: "친구들과 밖에서 놀고 싶다", type: 'E' },
        { text: "집에서 쉬면서 하고 싶은 거 한다", type: 'I' }
    ]},
    { text: "일을 할 때", options: [
        { text: "경험과 실전이 중요하다", type: 'S' },
        { text: "가능성과 아이디어가 중요하다", type: 'N' }
    ]},
    { text: "의견이 다를 때", options: [
        { text: "논리적으로 설득한다", type: 'T' },
        { text: "상대 기분을 먼저 생각한다", type: 'F' }
    ]},
    { text: "프로젝트 마감이 다가올 때", options: [
        { text: "미리미리 끝내놓는다", type: 'J' },
        { text: "마감 직전에 집중해서 한다", type: 'P' }
    ]},
    { text: "에너지 충전은", options: [
        { text: "사람들과 어울릴 때", type: 'E' },
        { text: "혼자 있을 때", type: 'I' }
    ]},
    { text: "정보를 받아들일 때", options: [
        { text: "구체적인 사실이 중요하다", type: 'S' },
        { text: "전체적인 맥락이 중요하다", type: 'N' }
    ]},
    { text: "결정을 내릴 때", options: [
        { text: "머리로 생각한다", type: 'T' },
        { text: "가슴으로 느낀다", type: 'F' }
    ]},
    { text: "내 스타일은", options: [
        { text: "계획적이고 체계적", type: 'J' },
        { text: "유연하고 즉흥적", type: 'P' }
    ]}
];

let currentQuestion = 0;
let mbti = { E: 0, I: 0, S: 0, N: 0, T: 0, F: 0, J: 0, P: 0 };

function startTest() {
    document.querySelector('.intro-screen').classList.remove('active');
    document.querySelector('.question-screen').classList.add('active');
    currentQuestion = 0;
    mbti = { E: 0, I: 0, S: 0, N: 0, T: 0, F: 0, J: 0, P: 0 };
    showQuestion();
}

function showQuestion() {
    const q = questions[currentQuestion];
    document.getElementById('progress').style.width = ((currentQuestion + 1) / questions.length * 100) + '%';
    document.getElementById('questionNumber').textContent = `질문 ${currentQuestion + 1}/${questions.length}`;
    document.getElementById('questionText').textContent = q.text;
    
    const opts = document.getElementById('options');
    opts.innerHTML = '';
    q.options.forEach((opt, i) => {
        const div = document.createElement('div');
        div.className = 'option';
        div.textContent = opt.text;
        div.onclick = () => selectOption(i);
        opts.appendChild(div);
    });
    document.getElementById('nextButton').disabled = true;
}

function selectOption(index) {
    document.querySelectorAll('.option').forEach(o => o.classList.remove('selected'));
    document.querySelectorAll('.option')[index].classList.add('selected');
    mbti[questions[currentQuestion].options[index].type]++;
    document.getElementById('nextButton').disabled = false;
}

function nextQuestion() {
    currentQuestion++;
    if (currentQuestion < questions.length) showQuestion();
    else showResult();
}

function showResult() {
    const result = 
        (mbti.E >= mbti.I ? 'E' : 'I') +
        (mbti.S >= mbti.N ? 'S' : 'N') +
        (mbti.T >= mbti.F ? 'T' : 'F') +
        (mbti.J >= mbti.P ? 'J' : 'P');
    
    const pokemon = pokemons[result];
    document.getElementById('resultIcon').textContent = pokemon.emoji;
    document.getElementById('resultTitle').textContent = pokemon.name;
    document.getElementById('mbtiType').textContent = result;
    document.getElementById('resultDescription').innerHTML = `<h4>${pokemon.name}</h4><p>${pokemon.desc}</p>`;
    
    document.querySelector('.question-screen').classList.remove('active');
    document.querySelector('.result-screen').classList.add('active');
    window.scrollTo(0, 0);
}

function retryTest() {
    document.querySelector('.result-screen').classList.remove('active');
    document.querySelector('.intro-screen').classList.add('active');
    window.scrollTo(0, 0);
}
