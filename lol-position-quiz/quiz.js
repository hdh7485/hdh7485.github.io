
const positions = {
    top: { name: '탑', emoji: '⚔️', desc: '1:1 싸움을 좋아하고 고독한 늑대형. 강하고 독립적입니다!' },
    jungle: { name: '정글', emoji: '🌲', desc: '맵 전체를 장악하는 전략가. 판단력과 시야가 뛰어납니다!' },
    mid: { name: '미드', emoji: '💥', desc: '게임의 중심에서 캐리하는 주인공. 임팩트가 강합니다!' },
    adc: { name: '원딜', emoji: '🎯', desc: '후반 캐리의 핵심. 인내심과 정확도가 뛰어납니다!' },
    support: { name: '서폿', emoji: '💖', desc: '팀을 지키는 수호자. 헌신적이고 전략적입니다!' }
};
const questions = [
    { text: "팀원과 의견이 다를 때?", options: [
        { text: "내 플레이대로 간다", pos: 'top' },
        { text: "전체적인 상황을 보고 판단", pos: 'jungle' },
        { text: "내가 리드해서 팀을 이끈다", pos: 'mid' },
        { text: "팀의 결정을 따른다", pos: 'adc' },
        { text: "의견을 조율한다", pos: 'support' }
    ]},
    { text: "게임에서 가장 중요한 것은?", options: [
        { text: "1:1 개인 실력", pos: 'top' },
        { text: "맵 장악력", pos: 'jungle' },
        { text: "캐리력", pos: 'mid' },
        { text: "후반 성장", pos: 'adc' },
        { text: "팀워크", pos: 'support' }
    ]},
    { text: "좋아하는 플레이 스타일은?", options: [
        { text: "혼자서 강하게", pos: 'top' },
        { text: "기습과 갱킹", pos: 'jungle' },
        { text: "화려한 플레이", pos: 'mid' },
        { text: "안정적인 파밍", pos: 'adc' },
        { text: "아군 보호", pos: 'support' }
    ]},
    { text: "패배 원인을 분석할 때", options: [
        { text: "내 라인 상대를 이겼는지", pos: 'top' },
        { text: "시야와 오브젝트 싸움", pos: 'jungle' },
        { text: "게임 주도권", pos: 'mid' },
        { text: "딜량과 성장 차이", pos: 'adc' },
        { text: "팀 조합과 보호", pos: 'support' }
    ]},
    { text: "좋아하는 챔피언 유형은?", options: [
        { text: "탱커/전사", pos: 'top' },
        { text: "기동력 좋은 챔피언", pos: 'jungle' },
        { text: "메이지/어쌔신", pos: 'mid' },
        { text: "원거리 딜러", pos: 'adc' },
        { text: "유틸리티 챔피언", pos: 'support' }
    ]},
    { text: "초반 운영은?", options: [
        { text: "라인전 집중", pos: 'top' },
        { text: "갱킹과 정글링", pos: 'jungle' },
        { text: "로밍과 킬", pos: 'mid' },
        { text: "안전하게 파밍", pos: 'adc' },
        { text: "원딜 보호와 시야", pos: 'support' }
    ]},
    { text: "팀파이트에서 역할은?", options: [
        { text: "탱킹과 진입", pos: 'top' },
        { text: "백도어와 측면", pos: 'jungle' },
        { text: "적 핵심 제거", pos: 'mid' },
        { text: "뒤에서 딜", pos: 'adc' },
        { text: "CC와 보호", pos: 'support' }
    ]},
    { text: "게임 후반", options: [
        { text: "스플릿 푸시", pos: 'top' },
        { text: "픽과 오브젝트", pos: 'jungle' },
        { text: "게임 종결", pos: 'mid' },
        { text: "딜의 핵심", pos: 'adc' },
        { text: "팀 조율", pos: 'support' }
    ]},
    { text: "롤의 재미는?", options: [
        { text: "1:1 대결", pos: 'top' },
        { text: "맵 장악", pos: 'jungle' },
        { text: "하이라이트", pos: 'mid' },
        { text: "성장과 캐리", pos: 'adc' },
        { text: "팀 승리", pos: 'support' }
    ]},
    { text: "내 성향은?", options: [
        { text: "독립적", pos: 'top' },
        { text: "전략적", pos: 'jungle' },
        { text: "공격적", pos: 'mid' },
        { text: "인내심 있음", pos: 'adc' },
        { text: "헌신적", pos: 'support' }
    ]}
];
let currentQuestion = 0;
let scores = { top: 0, jungle: 0, mid: 0, adc: 0, support: 0 };
function startTest() {
    document.querySelector('.intro-screen').classList.remove('active');
    document.querySelector('.question-screen').classList.add('active');
    currentQuestion = 0;
    scores = { top: 0, jungle: 0, mid: 0, adc: 0, support: 0 };
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
    scores[questions[currentQuestion].options[index].pos]++;
    document.getElementById('nextButton').disabled = false;
}
function nextQuestion() {
    currentQuestion++;
    if (currentQuestion < questions.length) showQuestion();
    else showResult();
}
function showResult() {
    let result = 'top';
    let maxScore = 0;
    for (let pos in scores) {
        if (scores[pos] > maxScore) {
            maxScore = scores[pos];
            result = pos;
        }
    }
    const data = positions[result];
    document.getElementById('resultIcon').textContent = data.emoji;
    document.getElementById('resultTitle').textContent = data.name;
    document.getElementById('resultDescription').innerHTML = `<h4>${data.name}</h4><p>${data.desc}</p>`;
    document.querySelector('.question-screen').classList.remove('active');
    document.querySelector('.result-screen').classList.add('active');
    window.scrollTo(0, 0);
}
function retryTest() {
    document.querySelector('.result-screen').classList.remove('active');
    document.querySelector('.intro-screen').classList.add('active');
    window.scrollTo(0, 0);
}
