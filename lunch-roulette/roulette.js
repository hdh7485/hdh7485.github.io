// 200개의 점심 메뉴 데이터
const menus = [
    // 한식 (40개)
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
    { name: '김치볶음밥', category: '한식', icon: '🍚' },
    { name: '계란찜', category: '한식', icon: '🥚' },
    { name: 'LA갈비', category: '한식', icon: '🍖' },
    { name: '떡갈비', category: '한식', icon: '🥩' },
    { name: '곱창전골', category: '한식', icon: '🍲' },
    { name: '부대찌개', category: '한식', icon: '🍲' },
    { name: '감자탕', category: '한식', icon: '🥔' },
    { name: '해물탕', category: '한식', icon: '🦐' },
    { name: '추어탕', category: '한식', icon: '🍜' },
    { name: '콩나물국밥', category: '한식', icon: '🍲' },
    { name: '육개장', category: '한식', icon: '🍜' },
    { name: '떡만둣국', category: '한식', icon: '🥟' },
    { name: '비빔국수', category: '한식', icon: '🍜' },
    { name: '칼국수', category: '한식', icon: '🍜' },
    { name: '수제비', category: '한식', icon: '🥟' },
    { name: '잔치국수', category: '한식', icon: '🍜' },
    { name: '막국수', category: '한식', icon: '🍜' },
    { name: '콩국수', category: '한식', icon: '🍜' },
    { name: '장어구이', category: '한식', icon: '🐟' },
    { name: '삼계탕', category: '한식', icon: '🍗' },
    { name: '갈비찜', category: '한식', icon: '🍖' },
    { name: '아귀찜', category: '한식', icon: '🐟' },
    { name: '낙지볶음', category: '한식', icon: '🐙' },
    { name: '오징어볶음', category: '한식', icon: '🦑' },
    { name: '소불고기', category: '한식', icon: '🥩' },
    
    // 중식 (25개)
    { name: '짜장면', category: '중식', icon: '🍜' },
    { name: '짬뽕', category: '중식', icon: '🍜' },
    { name: '탕수육', category: '중식', icon: '🍖' },
    { name: '마라탕', category: '중식', icon: '🌶️' },
    { name: '양장피', category: '중식', icon: '🥗' },
    { name: '깐풍기', category: '중식', icon: '🍗' },
    { name: '유산슬', category: '중식', icon: '🦐' },
    { name: '볶음밥', category: '중식', icon: '🍚' },
    { name: '마파두부', category: '중식', icon: '🌶️' },
    { name: '라조기', category: '중식', icon: '🍗' },
    { name: '팔보채', category: '중식', icon: '🥘' },
    { name: '울면', category: '중식', icon: '🍜' },
    { name: '짬짜면', category: '중식', icon: '🍜' },
    { name: '삼선짬뽕', category: '중식', icon: '🦐' },
    { name: '쟁반짜장', category: '중식', icon: '🍜' },
    { name: '간짜장', category: '중식', icon: '🍜' },
    { name: '유니짜장', category: '중식', icon: '🦑' },
    { name: '짬뽕밥', category: '중식', icon: '🍚' },
    { name: '동파육', category: '중식', icon: '🥓' },
    { name: '북경오리', category: '중식', icon: '🦆' },
    { name: '깐쇼새우', category: '중식', icon: '🦐' },
    { name: '꿔바로우', category: '중식', icon: '🥩' },
    { name: '게살볶음밥', category: '중식', icon: '🦀' },
    { name: '마라샹궈', category: '중식', icon: '🌶️' },
    { name: '훠궈', category: '중식', icon: '🍲' },
    
    // 일식 (30개)
    { name: '초밥', category: '일식', icon: '🍣' },
    { name: '라멘', category: '일식', icon: '🍜' },
    { name: '돈부리', category: '일식', icon: '🍱' },
    { name: '우동', category: '일식', icon: '🍜' },
    { name: '카레', category: '일식', icon: '🍛' },
    { name: '소바', category: '일식', icon: '🍜' },
    { name: '덮밥', category: '일식', icon: '🍱' },
    { name: '회', category: '일식', icon: '🐟' },
    { name: '규동', category: '일식', icon: '🍱' },
    { name: '오야코동', category: '일식', icon: '🍱' },
    { name: '텐동', category: '일식', icon: '🍱' },
    { name: '가츠동', category: '일식', icon: '🍱' },
    { name: '나가사키짬뽕', category: '일식', icon: '🍜' },
    { name: '미소라멘', category: '일식', icon: '🍜' },
    { name: '쇼유라멘', category: '일식', icon: '🍜' },
    { name: '돈코츠라멘', category: '일식', icon: '🍜' },
    { name: '탄탄멘', category: '일식', icon: '🍜' },
    { name: '차슈멘', category: '일식', icon: '🍜' },
    { name: '냉소바', category: '일식', icon: '🍜' },
    { name: '키츠네우동', category: '일식', icon: '🍜' },
    { name: '덴뿌라', category: '일식', icon: '🍤' },
    { name: '오코노미야키', category: '일식', icon: '🥞' },
    { name: '타코야끼', category: '일식', icon: '🐙' },
    { name: '가라아게', category: '일식', icon: '🍗' },
    { name: '야끼토리', category: '일식', icon: '🍢' },
    { name: '규카츠', category: '일식', icon: '🥩' },
    { name: '히레카츠', category: '일식', icon: '🍖' },
    { name: '치킨카츠', category: '일식', icon: '🍗' },
    { name: '규탄', category: '일식', icon: '🥩' },
    { name: '야키니쿠', category: '일식', icon: '🍖' },
    
    // 양식 (30개)
    { name: '파스타', category: '양식', icon: '🍝' },
    { name: '피자', category: '양식', icon: '🍕' },
    { name: '햄버거', category: '양식', icon: '🍔' },
    { name: '스테이크', category: '양식', icon: '🥩' },
    { name: '샐러드', category: '양식', icon: '🥗' },
    { name: '샌드위치', category: '양식', icon: '🥪' },
    { name: '리조또', category: '양식', icon: '🍚' },
    { name: '필라프', category: '양식', icon: '🍚' },
    { name: '까르보나라', category: '양식', icon: '🍝' },
    { name: '알리오올리오', category: '양식', icon: '🍝' },
    { name: '봉골레', category: '양식', icon: '🍝' },
    { name: '토마토파스타', category: '양식', icon: '🍝' },
    { name: '크림파스타', category: '양식', icon: '🍝' },
    { name: '로제파스타', category: '양식', icon: '🍝' },
    { name: '바질페스토', category: '양식', icon: '🍝' },
    { name: '라자냐', category: '양식', icon: '🍝' },
    { name: '뇨끼', category: '양식', icon: '🥔' },
    { name: '그라탕', category: '양식', icon: '🥘' },
    { name: '오므라이스', category: '양식', icon: '🍚' },
    { name: '함박스테이크', category: '양식', icon: '🥩' },
    { name: '포크커틀릿', category: '양식', icon: '🥓' },
    { name: '치킨스테이크', category: '양식', icon: '🍗' },
    { name: '피쉬앤칩스', category: '양식', icon: '🐟' },
    { name: '씨푸드그라탕', category: '양식', icon: '🦐' },
    { name: '크림수프', category: '양식', icon: '🥣' },
    { name: '양송이스프', category: '양식', icon: '🍄' },
    { name: '미네스트로네', category: '양식', icon: '🥘' },
    { name: '클램차우더', category: '양식', icon: '🥣' },
    { name: '치즈버거', category: '양식', icon: '🍔' },
    { name: '베이컨버거', category: '양식', icon: '🍔' },
    
    // 분식/한식간편 (20개)
    { name: '떡볶이', category: '분식', icon: '🍢' },
    { name: '김밥', category: '분식', icon: '🍙' },
    { name: '라볶이', category: '분식', icon: '🍜' },
    { name: '순대', category: '분식', icon: '🌭' },
    { name: '튀김', category: '분식', icon: '🍤' },
    { name: '오뎅', category: '분식', icon: '🍢' },
    { name: '만두', category: '분식', icon: '🥟' },
    { name: '떡만두국', category: '분식', icon: '🥟' },
    { name: '참치김밥', category: '분식', icon: '🍙' },
    { name: '치즈김밥', category: '분식', icon: '🍙' },
    { name: '야채김밥', category: '분식', icon: '🍙' },
    { name: '누드김밥', category: '분식', icon: '🍙' },
    { name: '충무김밥', category: '분식', icon: '🍙' },
    { name: '라면', category: '분식', icon: '🍜' },
    { name: '치즈라면', category: '분식', icon: '🍜' },
    { name: '김치라면', category: '분식', icon: '🍜' },
    { name: '떡라면', category: '분식', icon: '🍜' },
    { name: '군만두', category: '분식', icon: '🥟' },
    { name: '물만두', category: '분식', icon: '🥟' },
    { name: '찐만두', category: '분식', icon: '🥟' },
    
    // 치킨/야식 (15개)
    { name: '후라이드치킨', category: '치킨', icon: '🍗' },
    { name: '양념치킨', category: '치킨', icon: '🍗' },
    { name: '간장치킨', category: '치킨', icon: '🍗' },
    { name: '파닭', category: '치킨', icon: '🍗' },
    { name: '마늘치킨', category: '치킨', icon: '🍗' },
    { name: '치즈치킨', category: '치킨', icon: '🍗' },
    { name: '반반치킨', category: '치킨', icon: '🍗' },
    { name: '순살치킨', category: '치킨', icon: '🍗' },
    { name: '바베큐치킨', category: '치킨', icon: '🍗' },
    { name: '크리스피치킨', category: '치킨', icon: '🍗' },
    { name: '불닭', category: '치킨', icon: '🍗' },
    { name: '닭발', category: '치킨', icon: '🦶' },
    { name: '닭강정', category: '치킨', icon: '🍗' },
    { name: '양념치킨', category: '치킨', icon: '🍗' },
    { name: '허니콤보', category: '치킨', icon: '🍗' },
    
    // 동남아/아시안 (20개)
    { name: '쌀국수', category: '베트남', icon: '🍜' },
    { name: '월남쌈', category: '베트남', icon: '🌯' },
    { name: '분짜', category: '베트남', icon: '🍜' },
    { name: '반미', category: '베트남', icon: '🥖' },
    { name: '팟타이', category: '태국', icon: '🍜' },
    { name: '똠얌꿍', category: '태국', icon: '🍲' },
    { name: '카오팟', category: '태국', icon: '🍚' },
    { name: '푸팟퐁커리', category: '태국', icon: '🦀' },
    { name: '쏨땀', category: '태국', icon: '🥗' },
    { name: '커리', category: '인도', icon: '🍛' },
    { name: '탄두리치킨', category: '인도', icon: '🍗' },
    { name: '난', category: '인도', icon: '🫓' },
    { name: '비리야니', category: '인도', icon: '🍚' },
    { name: '사테', category: '인도네시아', icon: '🍢' },
    { name: '나시고렝', category: '인도네시아', icon: '🍚' },
    { name: '미고렝', category: '인도네시아', icon: '🍜' },
    { name: '락사', category: '싱가포르', icon: '🍜' },
    { name: '하이난치킨', category: '싱가포르', icon: '🍗' },
    { name: '칠리크랩', category: '싱가포르', icon: '🦀' },
    { name: '바쿠테', category: '싱가포르', icon: '🥘' },
    
    // 멕시칸/남미 (10개)
    { name: '타코', category: '멕시칸', icon: '🌮' },
    { name: '부리또', category: '멕시칸', icon: '🌯' },
    { name: '퀘사디아', category: '멕시칸', icon: '🫓' },
    { name: '나초', category: '멕시칸', icon: '🧀' },
    { name: '엔칠라다', category: '멕시칸', icon: '🌯' },
    { name: '파히타', category: '멕시칸', icon: '🌮' },
    { name: '과카몰리', category: '멕시칸', icon: '🥑' },
    { name: '칠리콘카르네', category: '멕시칸', icon: '🌶️' },
    { name: '타코라이스', category: '멕시칸', icon: '🍚' },
    { name: '토르티야', category: '멕시칸', icon: '🫓' },
    
    // 패스트푸드 (10개)
    { name: '핫도그', category: '패스트푸드', icon: '🌭' },
    { name: '감자튀김', category: '패스트푸드', icon: '🍟' },
    { name: '너겟', category: '패스트푸드', icon: '🍗' },
    { name: '치즈스틱', category: '패스트푸드', icon: '🧀' },
    { name: '어니언링', category: '패스트푸드', icon: '🧅' },
    { name: '핫윙', category: '패스트푸드', icon: '🍗' },
    { name: '치킨텐더', category: '패스트푸드', icon: '🍗' },
    { name: '토스트', category: '패스트푸드', icon: '🍞' },
    { name: '크로크무슈', category: '패스트푸드', icon: '🥪' },
    { name: '팬케이크', category: '패스트푸드', icon: '🥞' }
];

let spinCount = 0;
let isSpinning = false;

function trackRouletteMetric(eventName, params) {
    if (!window.quizCollectionBootstrap || typeof window.quizCollectionBootstrap.track !== 'function') {
        return;
    }

    window.quizCollectionBootstrap.track(eventName, Object.assign({
        content_type: 'tool',
        content_slug: 'lunch-roulette'
    }, params || {}));
}

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
    trackRouletteMetric('engagement_start', {
        interaction_type: 'roulette_spin',
        next_spin_count: spinCount + 1
    });
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
    trackRouletteMetric('engagement_complete', {
        interaction_type: 'roulette_spin',
        result_label: finalMenu.name,
        result_category: finalMenu.category,
        spin_count: spinCount
    });
    
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
