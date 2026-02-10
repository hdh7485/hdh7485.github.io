// F1 드라이버 평균 반응 속도 데이터 (초 단위)
const driverData = [
    { name: 'Max Verstappen', emoji: '🦁', time: 0.18 },
    { name: 'Lewis Hamilton', emoji: '👑', time: 0.20 },
    { name: 'Charles Leclerc', emoji: '🔥', time: 0.19 },
    { name: 'Lando Norris', emoji: '😄', time: 0.21 },
    { name: 'Fernando Alonso', emoji: '🧙', time: 0.22 },
    { name: 'George Russell', emoji: '🎯', time: 0.21 },
    { name: 'Carlos Sainz', emoji: '🌶️', time: 0.20 },
    { name: 'Sergio Perez', emoji: '🇲🇽', time: 0.23 }
];

// 게임 상태
let currentAttempt = 0;
let attempts = [];
let startTime = 0;
let testInProgress = false;
let lightsTimeout = null;
let clickEnabled = false;

// 화면 전환
function showScreen(screenName) {
    document.querySelectorAll('.intro-screen, .test-screen, .result-screen').forEach(screen => {
        screen.classList.remove('active');
    });
    document.querySelector(`.${screenName}`).classList.add('active');
}

// 테스트 시작
function startTest() {
    currentAttempt = 0;
    attempts = [];
    showScreen('test-screen');
    startAttempt();
}

// 개별 시도 시작
function startAttempt() {
    currentAttempt++;
    updateAttemptNumber();
    resetLights();
    clickEnabled = false;
    testInProgress = true;
    
    const clickArea = document.getElementById('clickArea');
    clickArea.className = 'click-area';
    clickArea.textContent = '준비하세요...';
    
    const instruction = document.getElementById('instruction');
    instruction.textContent = '빨간 불이 켜집니다...';
    
    // 불 켜기 시작
    setTimeout(() => lightSequence(), 1000);
}

// 불 켜기 시퀀스
function lightSequence() {
    let lightIndex = 0;
    
    const lightInterval = setInterval(() => {
        if (lightIndex < 5) {
            document.getElementById(`light${lightIndex + 1}`).classList.add('on');
            lightIndex++;
        } else {
            clearInterval(lightInterval);
            
            // 모든 불이 켜진 후 랜덤 딜레이 (1~3초)
            const randomDelay = 1000 + Math.random() * 2000;
            
            document.getElementById('instruction').textContent = '집중하세요! 불이 꺼지면 클릭!';
            document.getElementById('clickArea').className = 'click-area waiting';
            
            lightsTimeout = setTimeout(() => {
                lightsOff();
            }, randomDelay);
        }
    }, 600);
}

// 불 끄기 (GO!)
function lightsOff() {
    document.querySelectorAll('.light').forEach(light => {
        light.classList.remove('on');
    });
    
    startTime = Date.now();
    clickEnabled = true;
    
    const instruction = document.getElementById('instruction');
    instruction.textContent = '🏁 GO! 지금 클릭!';
    instruction.style.color = '#00ff00';
    
    const clickArea = document.getElementById('clickArea');
    clickArea.className = 'click-area ready';
    clickArea.textContent = '지금 클릭! ⚡';
}

// 불 리셋
function resetLights() {
    document.querySelectorAll('.light').forEach(light => {
        light.classList.remove('on');
    });
    document.getElementById('instruction').style.color = '#333';
}

// 시도 번호 업데이트
function updateAttemptNumber() {
    document.getElementById('attemptNumber').innerHTML = `<strong>시도 ${currentAttempt}/5</strong>`;
}

// 클릭 이벤트
document.addEventListener('DOMContentLoaded', () => {
    const clickArea = document.getElementById('clickArea');
    
    clickArea.addEventListener('click', () => {
        if (!testInProgress) return;
        
        // 너무 일찍 클릭 (False Start)
        if (!clickEnabled) {
            clearTimeout(lightsTimeout);
            testInProgress = false;
            
            const instruction = document.getElementById('instruction');
            instruction.textContent = '❌ False Start! 너무 일찍 클릭했습니다!';
            instruction.style.color = '#e61e32';
            
            clickArea.className = 'click-area';
            clickArea.textContent = '실격! 다시 시도하세요';
            
            attempts.push({ time: null, falseStart: true });
            
            setTimeout(() => {
                if (currentAttempt < 5) {
                    startAttempt();
                } else {
                    showResults();
                }
            }, 2000);
            
            return;
        }
        
        // 정상 반응
        const reactionTime = (Date.now() - startTime) / 1000;
        attempts.push({ time: reactionTime, falseStart: false });
        
        testInProgress = false;
        clickEnabled = false;
        
        const instruction = document.getElementById('instruction');
        instruction.textContent = `✅ ${reactionTime.toFixed(3)}초!`;
        instruction.style.color = '#00aa00';
        
        clickArea.className = 'click-area';
        clickArea.textContent = `${reactionTime.toFixed(3)}초 기록!`;
        
        setTimeout(() => {
            if (currentAttempt < 5) {
                startAttempt();
            } else {
                showResults();
            }
        }, 1500);
    });
});

// 테스트 건너뛰기
function skipTest() {
    if (confirm('정말 테스트를 종료하시겠습니까?')) {
        if (attempts.length > 0) {
            showResults();
        } else {
            showScreen('intro-screen');
        }
    }
}

// 결과 표시
function showResults() {
    showScreen('result-screen');
    
    // 유효한 시도만 필터링
    const validAttempts = attempts.filter(a => !a.falseStart && a.time !== null);
    
    if (validAttempts.length === 0) {
        document.getElementById('averageTime').textContent = '기록 없음';
        document.getElementById('rating').textContent = '😅 다시 도전하세요!';
        document.getElementById('comparisonSection').style.display = 'none';
        return;
    }
    
    // 평균 계산
    const avgTime = validAttempts.reduce((sum, a) => sum + a.time, 0) / validAttempts.length;
    const bestTime = Math.min(...validAttempts.map(a => a.time));
    
    // 평균 시간 표시
    document.getElementById('averageTime').textContent = `${avgTime.toFixed(3)}초`;
    
    // 평가
    let rating = '';
    if (avgTime < 0.15) {
        rating = '🏆 F1 드라이버급!';
    } else if (avgTime < 0.20) {
        rating = '⚡ 프로 수준!';
    } else if (avgTime < 0.25) {
        rating = '🔥 매우 빠름!';
    } else if (avgTime < 0.30) {
        rating = '👍 빠름!';
    } else if (avgTime < 0.35) {
        rating = '😊 평균!';
    } else {
        rating = '🐌 연습이 필요해요!';
    }
    document.getElementById('rating').textContent = rating;
    
    // 드라이버 비교
    const comparisons = document.getElementById('driverComparisons');
    comparisons.innerHTML = '';
    
    // 사용자 기록 추가
    const userComparison = document.createElement('div');
    userComparison.className = 'driver-comparison';
    userComparison.style.borderLeftColor = '#ffd700';
    userComparison.innerHTML = `
        <div class="driver-info">
            <div class="driver-name">🏁 당신</div>
            <div class="driver-time">평균: ${avgTime.toFixed(3)}초 | 최고: ${bestTime.toFixed(3)}초</div>
        </div>
    `;
    comparisons.appendChild(userComparison);
    
    // 드라이버들과 비교 (가까운 순서대로 정렬)
    const sortedDrivers = [...driverData].sort((a, b) => {
        return Math.abs(a.time - avgTime) - Math.abs(b.time - avgTime);
    });
    
    sortedDrivers.slice(0, 5).forEach(driver => {
        const diff = avgTime - driver.time;
        const diffText = diff > 0 ? 
            `+${diff.toFixed(3)}초 느림` : 
            `${Math.abs(diff).toFixed(3)}초 빠름`;
        
        const driverDiv = document.createElement('div');
        driverDiv.className = 'driver-comparison';
        driverDiv.innerHTML = `
            <div class="driver-info">
                <div class="driver-name">${driver.emoji} ${driver.name}</div>
                <div class="driver-time">${driver.time.toFixed(3)}초 (${diffText})</div>
            </div>
        `;
        comparisons.appendChild(driverDiv);
    });
    
    // 시도별 기록
    const attemptsList = document.getElementById('attemptsList');
    attemptsList.innerHTML = '';
    
    attempts.forEach((attempt, index) => {
        const attemptDiv = document.createElement('div');
        attemptDiv.className = 'attempt-item';
        
        if (attempt.falseStart) {
            attemptDiv.innerHTML = `
                <span>시도 ${index + 1}</span>
                <span style="color: #e61e32;">❌ False Start</span>
            `;
        } else {
            attemptDiv.innerHTML = `
                <span>시도 ${index + 1}</span>
                <span>${attempt.time.toFixed(3)}초</span>
            `;
        }
        
        attemptsList.appendChild(attemptDiv);
    });
}

// 다시 테스트
function retryTest() {
    startTest();
}
