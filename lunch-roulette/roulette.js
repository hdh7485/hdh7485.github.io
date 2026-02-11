// 50개의 점심 메뉴 데이터
const menus = [
    // 한식 (15개)
    { name: '김치찌개', category: '한식', icon: '🍲' },
    { name: '된장찌개', category: '한식', icon: '🥘' },
    { name: '순두부찌개', category: '한식', icon: '🍲' },
    { name: '불고기', category: '한식', icon: '🥩' },
    { name: '비빔밥', category: '한식', icon: '🍚' },
    { name: '삼겹살', category: '한식', icon: '🥓' },
    { name: '갈비탕', category: '한식', icon: '🍖' },
    { name: '설렁탕', category: '한식', icon: '🍜' },
    { name: '냉면', category: '한식', icon: '🍜' },
    { name: '제육볶음', category: '한식', icon: '🍖' },
    { name: '돈까스', category: '한식', icon: '🍱' },
    { name: '닭갈비', category: '한식', icon: '🍗' },
    { name: '보쌈', category: '한식', icon: '🥓' },
    { name: '족발', category: '한식', icon: '🦶' },
    { name: '쌈밥', category: '한식', icon: '🥬' },
    
    // 중식 (8개)
    { name: '짜장면', category: '중식', icon: '🍜' },
    { name: '짬뽕', category: '중식', icon: '🍜' },
    { name: '탕수육', category: '중식', icon: '🍖' },
    { name: '마라탕', category: '중식', icon: '🌶️' },
    { name: '양장피', category: '중식', icon: '🥗' },
    { name: '깐풍기', category: '중식', icon: '🍗' },
    { name: '유산슬', category: '중식', icon: '🦐' },
    { name: '볶음밥', category: '중식', icon: '🍚' },
    
    // 일식 (8개)
    { name: '초밥', category: '일식', icon: '🍣' },
    { name: '라멘', category: '일식', icon: '🍜' },
    { name: '돈부리', category: '일식', icon: '🍱' },
    { name: '우동', category: '일식', icon: '🍜' },
    { name: '카레', category: '일식', icon: '🍛' },
    { name: '소바', category: '일식', icon: '🍜' },
    { name: '덮밥', category: '일식', icon: '🍱' },
    { name: '회', category: '일식', icon: '🐟' },
    
    // 양식 (8개)
    { name: '파스타', category: '양식', icon: '🍝' },
    { name: '피자', category: '양식', icon: '🍕' },
    { name: '햄버거', category: '양식', icon: '🍔' },
    { name: '스테이크', category: '양식', icon: '🥩' },
    { name: '샐러드', category: '양식', icon: '🥗' },
    { name: '샌드위치', category: '양식', icon: '🥪' },
    { name: '리조또', category: '양식', icon: '🍚' },
    { name: '필라프', category: '양식', icon: '🍚' },
    
    // 분식/기타 (11개)
    { name: '떡볶이', category: '분식', icon: '🍢' },
    { name: '김밥', category: '분식', icon: '🍙' },
    { name: '라볶이', category: '분식', icon: '🍜' },
    { name: '순대', category: '분식', icon: '🌭' },
    { name: '치킨', category: '기타', icon: '🍗' },
    { name: '족발', category: '기타', icon: '🦶' },
    { name: '쌀국수', category: '아시안', icon: '🍜' },
    { name: '월남쌈', category: '아시안', icon: '🌯' },
    { name: '타코', category: '멕시칸', icon: '🌮' },
    { name: '부리또', category: '멕시칸', icon: '🌯' },
    { name: '퀘사디아', category: '멕시칸', icon: '🫓' }
];

let spinCount = 0;
let isSpinning = false;

// 페이지 로드시 메뉴 그리드 생성
document.addEventListener('DOMContentLoaded', () => {
    const menuGrid = document.getElementById('menuGrid');
    
    menus.forEach(menu => {
        const tag = document.createElement('div');
        tag.className = 'menu-tag';
        tag.textContent = `${menu.icon} ${menu.name}`;
        menuGrid.appendChild(tag);
    });
    
    // 로컬 스토리지에서 오늘의 카운트 불러오기
    loadTodayCount();
});

// 오늘의 카운트 불러오기
function loadTodayCount() {
    const today = new Date().toDateString();
    const stored = localStorage.getItem('lunchRoulette');
    
    if (stored) {
        const data = JSON.parse(stored);
        if (data.date === today) {
            spinCount = data.count;
            document.getElementById('spinCount').textContent = spinCount;
        } else {
            // 날짜가 바뀌면 초기화
            spinCount = 0;
            saveTodayCount();
        }
    }
}

// 오늘의 카운트 저장
function saveTodayCount() {
    const today = new Date().toDateString();
    const data = {
        date: today,
        count: spinCount
    };
    localStorage.setItem('lunchRoulette', JSON.stringify(data));
    document.getElementById('spinCount').textContent = spinCount;
}

// 룰렛 돌리기
function spinRoulette() {
    if (isSpinning) return;
    
    isSpinning = true;
    const button = document.getElementById('spinButton');
    const display = document.getElementById('resultDisplay');
    
    button.disabled = true;
    button.textContent = '🎰 돌리는 중...';
    
    // 애니메이션: 빠르게 메뉴들을 바꿔가며 표시
    let counter = 0;
    const spinDuration = 2000; // 2초
    const spinInterval = 50; // 50ms마다 변경
    const totalSpins = spinDuration / spinInterval;
    
    const spinAnimation = setInterval(() => {
        const randomMenu = menus[Math.floor(Math.random() * menus.length)];
        display.innerHTML = `
            <div class="menu-icon spinning">${randomMenu.icon}</div>
            <div class="menu-name spinning">${randomMenu.name}</div>
            <div class="menu-category spinning">${randomMenu.category}</div>
        `;
        
        counter++;
        
        if (counter >= totalSpins) {
            clearInterval(spinAnimation);
            showFinalResult();
        }
    }, spinInterval);
}

// 최종 결과 표시
function showFinalResult() {
    const finalMenu = menus[Math.floor(Math.random() * menus.length)];
    const display = document.getElementById('resultDisplay');
    const button = document.getElementById('spinButton');
    
    // 최종 결과 표시
    display.innerHTML = `
        <div class="menu-icon">${finalMenu.icon}</div>
        <div class="menu-name">${finalMenu.name}</div>
        <div class="menu-category">${finalMenu.category}</div>
    `;
    
    // 카운트 증가
    spinCount++;
    saveTodayCount();
    
    // 버튼 다시 활성화
    button.disabled = false;
    button.textContent = '🎰 다시 뽑기!';
    isSpinning = false;
    
    // 결과에 바운스 애니메이션 추가
    const icon = display.querySelector('.menu-icon');
    icon.style.animation = 'none';
    setTimeout(() => {
        icon.style.animation = 'bounce 0.5s ease';
    }, 10);
}
