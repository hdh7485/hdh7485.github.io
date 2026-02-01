// 천간 (天干)
const heavenlyStems = ['甲', '乙', '丙', '丁', '戊', '己', '庚', '辛', '壬', '癸'];
const stemNames = ['갑', '을', '병', '정', '무', '기', '경', '신', '임', '계'];

// 지지 (地支)
const earthlyBranches = ['子', '丑', '寅', '卯', '辰', '巳', '午', '未', '申', '酉', '戌', '亥'];
const branchNames = ['자', '축', '인', '묘', '진', '사', '오', '미', '신', '유', '술', '해'];
const zodiacAnimals = ['쥐', '소', '호랑이', '토끼', '용', '뱀', '말', '양', '원숭이', '닭', '개', '돼지'];

// 오행 (五行)
const elements = {
    '甲': '목', '乙': '목',
    '丙': '화', '丁': '화',
    '戊': '토', '己': '토',
    '庚': '금', '辛': '금',
    '壬': '수', '癸': '수',
    '子': '수', '丑': '토', '寅': '목', '卯': '목', '辰': '토', '巳': '화',
    '午': '화', '未': '토', '申': '금', '酉': '금', '戌': '토', '亥': '수'
};

const elementColors = {
    '목': 'wood',
    '화': 'fire',
    '토': 'earth',
    '금': 'metal',
    '수': 'water'
};

// 간지 계산 (년)
function getYearStemBranch(year) {
    const stemIndex = (year - 4) % 10;
    const branchIndex = (year - 4) % 12;
    return {
        stem: heavenlyStems[stemIndex],
        branch: earthlyBranches[branchIndex],
        stemName: stemNames[stemIndex],
        branchName: branchNames[branchIndex],
        zodiac: zodiacAnimals[branchIndex]
    };
}

// 월주 계산
function getMonthStemBranch(year, month) {
    const yearStem = (year - 4) % 10;
    const monthBranchIndex = (month + 1) % 12;
    
    // 월 천간 계산 (년간에 따라 달라짐)
    const monthStemStart = [2, 4, 6, 8, 0, 2, 4, 6, 8, 0];
    const monthStemIndex = (monthStemStart[yearStem] + month - 1) % 10;
    
    return {
        stem: heavenlyStems[monthStemIndex],
        branch: earthlyBranches[monthBranchIndex],
        stemName: stemNames[monthStemIndex],
        branchName: branchNames[monthBranchIndex]
    };
}

// 일주 계산 (간단한 근사치 - 실제로는 만세력 필요)
function getDayStemBranch(year, month, day) {
    // 1900년 1월 1일을 기준으로 계산
    const baseDate = new Date(1900, 0, 1);
    const targetDate = new Date(year, month - 1, day);
    const daysDiff = Math.floor((targetDate - baseDate) / (1000 * 60 * 60 * 24));
    
    // 1900년 1월 1일은 경진일 (庚辰)
    const baseStemIndex = 6; // 庚
    const baseBranchIndex = 4; // 辰
    
    const stemIndex = (baseStemIndex + daysDiff) % 10;
    const branchIndex = (baseBranchIndex + daysDiff) % 12;
    
    return {
        stem: heavenlyStems[stemIndex],
        branch: earthlyBranches[branchIndex],
        stemName: stemNames[stemIndex],
        branchName: branchNames[branchIndex]
    };
}

// 시주 계산
function getHourStemBranch(year, month, day, hour) {
    if (hour === null || hour === '') return null;
    
    const dayStem = getDayStemBranch(year, month, day);
    const dayStemIndex = heavenlyStems.indexOf(dayStem.stem);
    
    // 시지 결정 (자시 23-01, 축시 01-03, ...)
    const hourBranchIndex = Math.floor((hour + 1) / 2) % 12;
    
    // 시간 계산 (일간에 따라 달라짐)
    const hourStemStart = [0, 2, 4, 6, 8, 0, 2, 4, 6, 8];
    const hourStemIndex = (hourStemStart[dayStemIndex] + hourBranchIndex) % 10;
    
    return {
        stem: heavenlyStems[hourStemIndex],
        branch: earthlyBranches[hourBranchIndex],
        stemName: stemNames[hourStemIndex],
        branchName: branchNames[hourBranchIndex]
    };
}

// 오행 분석
function analyzeElements(yearPillar, monthPillar, dayPillar, hourPillar) {
    const elementCount = {
        '목': 0,
        '화': 0,
        '토': 0,
        '금': 0,
        '수': 0
    };
    
    // 천간 지지 모두 카운트
    [yearPillar, monthPillar, dayPillar].forEach(pillar => {
        if (pillar) {
            elementCount[elements[pillar.stem]]++;
            elementCount[elements[pillar.branch]]++;
        }
    });
    
    if (hourPillar) {
        elementCount[elements[hourPillar.stem]]++;
        elementCount[elements[hourPillar.branch]]++;
    }
    
    return elementCount;
}

// 운세 생성
function generateFortune(dayPillar, elementBalance, gender) {
    const dayStem = dayPillar.stem;
    const dayElement = elements[dayStem];
    
    // 오행 균형도 계산
    const total = Object.values(elementBalance).reduce((a, b) => a + b, 0);
    const balance = {};
    for (let elem in elementBalance) {
        balance[elem] = Math.round((elementBalance[elem] / total) * 100);
    }
    
    // 운세 점수 계산
    const healthScore = Math.min(95, 50 + Math.random() * 30 + balance[dayElement]);
    const wealthScore = Math.min(95, 40 + Math.random() * 40 + (balance['금'] + balance['토'])/2);
    const careerScore = Math.min(95, 45 + Math.random() * 35 + balance['화']);
    const loveScore = Math.min(95, 35 + Math.random() * 45 + balance['수']);
    
    return {
        health: {
            score: Math.round(healthScore),
            text: generateHealthFortune(dayElement, healthScore)
        },
        wealth: {
            score: Math.round(wealthScore),
            text: generateWealthFortune(dayElement, wealthScore)
        },
        career: {
            score: Math.round(careerScore),
            text: generateCareerFortune(dayElement, careerScore)
        },
        love: {
            score: Math.round(loveScore),
            text: generateLoveFortune(dayElement, loveScore, gender)
        },
        general: generateGeneralAdvice(dayElement, elementBalance)
    };
}

function generateHealthFortune(element, score) {
    const fortunes = {
        '목': {
            high: '간담과 신경계통이 건강하며, 활력이 넘칩니다. 규칙적인 운동으로 더욱 건강을 유지할 수 있습니다.',
            medium: '전반적으로 건강하나 스트레스 관리에 신경 써야 합니다. 목과 어깨 건강에 주의하세요.',
            low: '과로와 스트레스로 인한 간 기능 저하를 조심해야 합니다. 충분한 휴식이 필요합니다.'
        },
        '화': {
            high: '심장과 혈액순환이 왕성하여 활기찬 생활이 가능합니다. 열정을 건강하게 발산하세요.',
            medium: '기본적으로 건강하나 과도한 흥분이나 열을 조심해야 합니다. 심혈관 건강에 유의하세요.',
            low: '혈압이나 심장 건강에 주의가 필요합니다. 규칙적인 생활과 안정이 중요합니다.'
        },
        '토': {
            high: '소화기관이 튼튼하고 안정적입니다. 균형 잡힌 식습관으로 건강을 유지하세요.',
            medium: '전체적으로 견실하나 과식을 조심해야 합니다. 규칙적인 식사가 중요합니다.',
            low: '위장 건강에 신경 써야 합니다. 스트레스성 소화불량에 주의하고 편안한 마음을 유지하세요.'
        },
        '금': {
            high: '호흡기와 피부가 건강합니다. 맑은 공기와 깨끗한 환경이 더욱 도움이 됩니다.',
            medium: '기본 건강은 좋으나 호흡기 질환을 조심해야 합니다. 환절기에 특히 주의하세요.',
            low: '기관지와 폐 건강에 주의가 필요합니다. 대기질이 나쁜 날은 외출을 삼가세요.'
        },
        '수': {
            high: '신장과 비뇨기계가 건강하며, 순환 기능이 좋습니다. 충분한 수분 섭취를 유지하세요.',
            medium: '전반적으로 무난하나 수분 대사에 신경 써야 합니다. 부종이나 냉증에 주의하세요.',
            low: '신장 기능과 체온 조절에 주의가 필요합니다. 몸을 따뜻하게 하고 과로를 피하세요.'
        }
    };
    
    const level = score >= 75 ? 'high' : score >= 50 ? 'medium' : 'low';
    return fortunes[element][level];
}

function generateWealthFortune(element, score) {
    const fortunes = {
        '목': {
            high: '재물운이 상승하고 있습니다. 새로운 사업이나 투자 기회가 찾아올 수 있습니다. 성장과 확장의 시기입니다.',
            medium: '안정적인 재물운을 보입니다. 착실하게 저축하면 좋은 결과가 있을 것입니다.',
            low: '소비를 절제하고 계획적인 재정 관리가 필요합니다. 충동적인 투자는 피하세요.'
        },
        '화': {
            high: '재물운이 왕성합니다. 적극적인 활동과 인맥을 통해 수입이 증가할 수 있습니다.',
            medium: '들어오는 것도 많지만 나가는 것도 많습니다. 균형 잡힌 소비가 필요합니다.',
            low: '과소비를 조심하세요. 보이는 것에 집착하지 말고 실속을 챙기는 것이 중요합니다.'
        },
        '토': {
            high: '부동산이나 안정적인 투자에서 좋은 결과를 얻을 수 있습니다. 장기적인 관점이 유리합니다.',
            medium: '꾸준한 저축과 안정적인 재정 관리로 재물을 모을 수 있습니다.',
            low: '욕심을 버리고 현실적인 목표를 세우세요. 작은 것부터 차근차근 모아가는 것이 좋습니다.'
        },
        '금': {
            high: '재물운이 강합니다. 투자나 사업에서 성과를 거둘 수 있으며, 귀인의 도움도 있습니다.',
            medium: '전반적으로 안정적이나 큰 변화는 없습니다. 현상 유지에 집중하세요.',
            low: '지출 관리가 필요합니다. 불필요한 소비를 줄이고 실질적인 가치를 추구하세요.'
        },
        '수': {
            high: '다양한 경로로 재물이 들어올 수 있습니다. 유연한 사고로 기회를 포착하세요.',
            medium: '재물의 흐름이 있으나 유출도 있습니다. 현금 흐름 관리에 신경 쓰세요.',
            low: '재정 계획을 다시 점검할 필요가 있습니다. 작은 구멍으로 새는 돈을 막으세요.'
        }
    };
    
    const level = score >= 75 ? 'high' : score >= 50 ? 'medium' : 'low';
    return fortunes[element][level];
}

function generateCareerFortune(element, score) {
    const fortunes = {
        '목': {
            high: '창의성과 성장성이 뛰어난 분야에서 두각을 나타낼 수 있습니다. 교육, 문화, 기획 분야가 유리합니다.',
            medium: '꾸준한 노력으로 발전할 수 있습니다. 새로운 것을 배우려는 자세가 도움이 됩니다.',
            low: '현재 위치를 지키는 것에 집중하세요. 무리한 도전보다는 실력을 쌓는 시기입니다.'
        },
        '화': {
            high: '열정과 추진력으로 큰 성과를 이룰 수 있습니다. 리더십을 발휘하는 위치가 적합합니다.',
            medium: '적극적인 태도가 인정받을 수 있습니다. 대인관계를 잘 활용하세요.',
            low: '너무 급하게 서두르지 마세요. 차분하게 준비하고 때를 기다리는 것이 좋습니다.'
        },
        '토': {
            high: '신뢰와 안정성을 바탕으로 승진하거나 중요한 위치를 맡을 수 있습니다. 관리직이 어울립니다.',
            medium: '성실함이 빛을 발하는 시기입니다. 묵묵히 맡은 일을 해내면 인정받습니다.',
            low: '변화보다는 현상 유지에 집중하세요. 기본에 충실한 것이 중요합니다.'
        },
        '금': {
            high: '전문성과 실력으로 인정받을 수 있습니다. 기술직, 전문직에서 두각을 나타냅니다.',
            medium: '원칙을 지키며 일하는 것이 좋습니다. 실력을 갈고닦는 시기입니다.',
            low: '너무 완벽을 추구하지 마세요. 유연한 사고가 필요한 시기입니다.'
        },
        '수': {
            high: '지혜와 적응력으로 다양한 분야에서 성공할 수 있습니다. 커뮤니케이션이 중요한 직종이 유리합니다.',
            medium: '변화에 잘 대응하면 기회를 잡을 수 있습니다. 네트워킹이 도움이 됩니다.',
            low: '흐름을 파악하고 적절한 때를 기다리세요. 조급함은 금물입니다.'
        }
    };
    
    const level = score >= 75 ? 'high' : score >= 50 ? 'medium' : 'low';
    return fortunes[element][level];
}

function generateLoveFortune(element, score, gender) {
    const fortunes = {
        '목': {
            high: '진실하고 따뜻한 사랑을 만날 수 있습니다. 서로 성장하는 관계가 발전합니다.',
            medium: '이성과의 만남이 있으나 서두르지 말고 천천히 알아가세요. 친구부터 시작하는 것이 좋습니다.',
            low: '혼자만의 시간을 가지며 자신을 돌아보세요. 사랑은 준비된 사람에게 찾아옵니다.'
        },
        '화': {
            high: '열정적인 사랑이 시작될 수 있습니다. 적극적으로 표현하면 좋은 결과가 있을 것입니다.',
            medium: '마음이 끌리는 사람이 있다면 용기를 내보세요. 진심은 통합니다.',
            low: '너무 성급하게 서두르지 마세요. 식은 마음은 다시 데우기 어렵습니다.'
        },
        '토': {
            high: '안정적이고 믿을 수 있는 관계를 만들 수 있습니다. 결혼운도 좋습니다.',
            medium: '편안한 관계가 지속됩니다. 작은 배려가 사랑을 더욱 단단하게 만듭니다.',
            low: '관계가 정체되어 있다면 새로운 활력이 필요합니다. 함께하는 시간을 만드세요.'
        },
        '금': {
            high: '이상적인 상대를 만날 가능성이 높습니다. 가치관이 맞는 사람과의 인연이 있습니다.',
            medium: '진지한 만남을 원한다면 좋은 시기입니다. 외적인 것보다 내면을 보세요.',
            low: '너무 높은 이상을 추구하지 마세요. 완벽한 사람은 없습니다.'
        },
        '수': {
            high: '매력이 넘치는 시기입니다. 다양한 만남이 가능하며, 운명적인 인연을 만날 수 있습니다.',
            medium: '소통이 중요합니다. 마음을 열고 대화하면 관계가 발전합니다.',
            low: '복잡한 관계는 정리하는 것이 좋습니다. 진심으로 원하는 것이 무엇인지 생각해보세요.'
        }
    };
    
    const level = score >= 75 ? 'high' : score >= 50 ? 'medium' : 'low';
    return fortunes[element][level];
}

function generateGeneralAdvice(element, elementBalance) {
    const advices = {
        '목': '성장과 발전을 추구하는 당신은 끊임없이 배우고 발전하려는 의지가 강합니다. 창의력을 발휘할 수 있는 환경에서 빛을 발합니다.',
        '화': '열정과 추진력이 강한 당신은 리더십이 뛰어나며 사람들을 이끄는 힘이 있습니다. 다만 때로는 차분함도 필요합니다.',
        '토': '신뢰와 안정을 중시하는 당신은 책임감이 강하고 믿음직스러운 사람입니다. 주변 사람들의 중심이 되어줍니다.',
        '금': '원칙과 정의를 중요시하는 당신은 전문성과 실력으로 인정받습니다. 자신만의 기준을 지키는 것이 강점입니다.',
        '수': '지혜롭고 적응력이 뛰어난 당신은 다양한 상황에 잘 대처합니다. 유연한 사고가 최대의 무기입니다.'
    };
    
    let advice = advices[element] + '\n\n';
    
    // 오행 균형 조언
    const sorted = Object.entries(elementBalance).sort((a, b) => b[1] - a[1]);
    const strongest = sorted[0][0];
    const weakest = sorted[sorted.length - 1][0];
    
    if (elementBalance[strongest] > elementBalance[weakest] * 2) {
        advice += `${strongest} 기운이 강하니 ${getBalanceAdvice(strongest, weakest)}`;
    } else {
        advice += '오행의 균형이 비교적 잘 맞아 조화로운 삶을 살 수 있습니다.';
    }
    
    return advice;
}

function getBalanceAdvice(strong, weak) {
    const advices = {
        '목-금': '금 기운을 보강하기 위해 규칙적인 생활과 명확한 목표 설정이 도움이 됩니다.',
        '목-토': '토 기운을 보강하기 위해 안정을 추구하고 실용적인 접근이 필요합니다.',
        '화-수': '수 기운을 보강하기 위해 차분함과 사려 깊은 판단이 필요합니다.',
        '화-금': '금 기운을 보강하기 위해 원칙을 지키고 체계적인 접근이 도움이 됩니다.',
        '토-목': '목 기운을 보강하기 위해 새로운 것에 도전하고 변화를 받아들이세요.',
        '토-수': '수 기운을 보강하기 위해 유연한 사고와 다양한 경험이 필요합니다.',
        '금-화': '화 기운을 보강하기 위해 열정을 표현하고 적극적으로 행동하세요.',
        '금-목': '목 기운을 보강하기 위해 창의성을 발휘하고 성장을 추구하세요.',
        '수-토': '토 기운을 보강하기 위해 안정과 규칙을 만들어가는 것이 좋습니다.',
        '수-화': '화 기운을 보강하기 위해 추진력을 키우고 결단력을 발휘하세요.'
    };
    
    return advices[`${strong}-${weak}`] || '균형을 맞추기 위해 부족한 면을 보완하세요.';
}

function calculateSaju() {
    const gender = document.getElementById('gender').value;
    const year = parseInt(document.getElementById('year').value);
    const month = parseInt(document.getElementById('month').value);
    const day = parseInt(document.getElementById('day').value);
    const hour = document.getElementById('hour').value;
    const minute = document.getElementById('minute').value;
    const calendar = document.getElementById('calendar').value;
    
    // 입력 검증
    if (!year || !month || !day) {
        alert('생년월일을 모두 입력해주세요.');
        return;
    }
    
    if (month < 1 || month > 12 || day < 1 || day > 31) {
        alert('올바른 날짜를 입력해주세요.');
        return;
    }
    
    // 사주 계산
    const yearPillar = getYearStemBranch(year);
    const monthPillar = getMonthStemBranch(year, month);
    const dayPillar = getDayStemBranch(year, month, day);
    let hourPillar = null;
    
    if (hour !== '') {
        const hourInt = parseInt(hour);
        if (hourInt >= 0 && hourInt <= 23) {
            hourPillar = getHourStemBranch(year, month, day, hourInt);
        }
    }
    
    // 화면에 표시
    document.getElementById('year-sky').textContent = yearPillar.stem;
    document.getElementById('year-earth').textContent = yearPillar.branch;
    document.getElementById('month-sky').textContent = monthPillar.stem;
    document.getElementById('month-earth').textContent = monthPillar.branch;
    document.getElementById('day-sky').textContent = dayPillar.stem;
    document.getElementById('day-earth').textContent = dayPillar.branch;
    
    if (hourPillar) {
        document.getElementById('hour-sky').textContent = hourPillar.stem;
        document.getElementById('hour-earth').textContent = hourPillar.branch;
    } else {
        document.getElementById('hour-sky').textContent = '?';
        document.getElementById('hour-earth').textContent = '?';
    }
    
    // 기본 정보
    const genderText = gender === 'male' ? '남성' : '여성';
    const calendarText = calendar === 'solar' ? '양력' : '음력';
    const timeText = hour !== '' ? `${hour}시 ${minute || '00'}분` : '시간 미상';
    
    document.getElementById('basicInfo').innerHTML = `
        <div style="font-size: 1.1em;">
            <div><strong>생년월일:</strong> ${year}년 ${month}월 ${day}일 (${calendarText})</div>
            <div><strong>태어난 시간:</strong> ${timeText}</div>
            <div><strong>성별:</strong> ${genderText}</div>
            <div style="margin-top: 15px; font-size: 1.2em; color: #667eea;"><strong>${yearPillar.zodiac}띠 (${yearPillar.stemName}${yearPillar.branchName}년생)</strong></div>
        </div>
    `;
    
    // 오행 분석
    const elementBalance = analyzeElements(yearPillar, monthPillar, dayPillar, hourPillar);
    let elementsHtml = '<div><strong>오행 분석:</strong> ';
    for (let elem in elementBalance) {
        if (elementBalance[elem] > 0) {
            elementsHtml += `<span class="element-badge ${elementColors[elem]}">${elem} ${elementBalance[elem]}</span>`;
        }
    }
    elementsHtml += '</div>';
    document.getElementById('elements').innerHTML = elementsHtml;
    
    // 운세 생성
    const fortune = generateFortune(dayPillar, elementBalance, gender);
    
    document.getElementById('health-score').textContent = fortune.health.score;
    document.getElementById('wealth-score').textContent = fortune.wealth.score;
    document.getElementById('career-score').textContent = fortune.career.score;
    document.getElementById('love-score').textContent = fortune.love.score;
    
    document.getElementById('health-fortune').innerHTML = `<p>${fortune.health.text}</p>`;
    document.getElementById('wealth-fortune').innerHTML = `<p>${fortune.wealth.text}</p>`;
    document.getElementById('career-fortune').innerHTML = `<p>${fortune.career.text}</p>`;
    document.getElementById('love-fortune').innerHTML = `<p>${fortune.love.text}</p>`;
    document.getElementById('general-advice').innerHTML = `<p>${fortune.general}</p>`;
    
    // 결과 표시
    document.querySelector('.input-form').style.display = 'none';
    document.getElementById('result').classList.add('show');
    
    // 스크롤 맨 위로
    window.scrollTo({ top: 0, behavior: 'smooth' });
}

function resetForm() {
    document.querySelector('.input-form').style.display = 'block';
    document.getElementById('result').classList.remove('show');
    window.scrollTo({ top: 0, behavior: 'smooth' });
}
