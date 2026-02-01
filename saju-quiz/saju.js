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

// 일간(日干) 상세 설명
const dayStemDescriptions = {
    '甲': {
        name: '갑목(甲木)',
        char: '큰 나무',
        personality: '곧고 정직하며 리더십이 있습니다. 큰 나무처럼 든든하고 믿음직스러운 성격입니다.',
        strength: '추진력, 정의감, 리더십, 성장 지향',
        weakness: '고집이 세고 융통성이 부족할 수 있음',
        career: '경영자, 교육자, 공직자, 의사, 변호사',
        love: '진지하고 책임감 있는 사랑을 추구합니다. 상대를 보호하려는 마음이 강합니다.',
        advice: '때로는 유연함도 필요합니다. 다른 사람의 의견에 귀 기울이세요.'
    },
    '乙': {
        name: '을목(乙木)',
        char: '작은 나무/풀',
        personality: '부드럽고 섬세하며 적응력이 뛰어납니다. 풀처럼 유연하게 환경에 맞춥니다.',
        strength: '적응력, 친화력, 섬세함, 예술적 감각',
        weakness: '우유부단하고 결단력이 부족할 수 있음',
        career: '예술가, 디자이너, 상담사, 교육자, 작가',
        love: '배려심이 깊고 감성적입니다. 안정적이고 따뜻한 관계를 원합니다.',
        advice: '때로는 자신의 의견을 확고히 주장하는 것도 필요합니다.'
    },
    '丙': {
        name: '병화(丙火)',
        char: '태양',
        personality: '밝고 열정적이며 긍정적입니다. 태양처럼 주변을 밝게 만드는 사람입니다.',
        strength: '열정, 긍정성, 리더십, 창의력',
        weakness: '감정 기복이 크고 충동적일 수 있음',
        career: '연예인, 강사, 사업가, 홍보/마케팅, 정치인',
        love: '열정적이고 적극적입니다. 화려하고 드라마틱한 사랑을 선호합니다.',
        advice: '열정도 좋지만 차분함과 인내심도 필요합니다.'
    },
    '丁': {
        name: '정화(丁火)',
        char: '촛불/등불',
        personality: '섬세하고 예민하며 지적입니다. 촛불처럼 따뜻하지만 조심스러운 성격입니다.',
        strength: '섬세함, 통찰력, 예술성, 직관력',
        weakness: '예민하고 상처받기 쉬우며 걱정이 많음',
        career: '작가, 연구원, 예술가, 심리상담사, 의료인',
        love: '깊고 진지한 사랑을 추구합니다. 정신적 교감을 중시합니다.',
        advice: '너무 깊이 생각하지 말고 때로는 편하게 흘러가는 것도 좋습니다.'
    },
    '戊': {
        name: '무토(戊土)',
        char: '산/언덕',
        personality: '안정적이고 믿음직스럽며 포용력이 있습니다. 산처럼 든든한 사람입니다.',
        strength: '안정성, 신뢰성, 포용력, 책임감',
        weakness: '변화를 싫어하고 고집스러울 수 있음',
        career: '부동산, 건설업, 금융업, 공무원, 관리직',
        love: '안정적이고 현실적인 사랑을 추구합니다. 가정을 중시합니다.',
        advice: '때로는 새로운 시도와 변화도 필요합니다.'
    },
    '己': {
        name: '기토(己土)',
        char: '밭/평지',
        personality: '온화하고 포용력이 있으며 배려심이 깊습니다. 밭처럼 모든 것을 받아들입니다.',
        strength: '배려심, 포용력, 중재능력, 친화력',
        weakness: '우유부단하고 자기주장이 약할 수 있음',
        career: '서비스업, 상담사, 교육자, 중개업, 간호사',
        love: '헌신적이고 따뜻합니다. 상대방을 먼저 생각하는 사랑입니다.',
        advice: '자신도 소중히 여기세요. 때로는 자신을 위한 선택도 필요합니다.'
    },
    '庚': {
        name: '경금(庚金)',
        char: '쇠/무기',
        personality: '강직하고 결단력이 있으며 원칙적입니다. 쇠처럼 단단하고 예리합니다.',
        strength: '결단력, 추진력, 정의감, 전문성',
        weakness: '융통성이 부족하고 차갑게 느껴질 수 있음',
        career: '군인, 경찰, 법조인, 외과의사, 운동선수',
        love: '직선적이고 솔직합니다. 감정표현이 서툴지만 진심은 깊습니다.',
        advice: '때로는 부드러움과 따뜻함도 필요합니다.'
    },
    '辛': {
        name: '신금(辛金)',
        char: '보석/귀금속',
        personality: '세련되고 예민하며 완벽주의적입니다. 보석처럼 빛나는 사람입니다.',
        strength: '섬세함, 미적 감각, 분석력, 완벽주의',
        weakness: '자존심이 강하고 비판적일 수 있음',
        career: '디자이너, 보석상, 예술가, 평론가, 컨설턴트',
        love: '이상적이고 로맨틱한 사랑을 꿈꿉니다. 품격 있는 관계를 원합니다.',
        advice: '완벽을 추구하되 현실도 받아들이는 여유를 가지세요.'
    },
    '壬': {
        name: '임수(壬水)',
        char: '큰 물/바다',
        personality: '지혜롭고 융통성이 있으며 포용력이 큽니다. 바다처럼 넓은 마음을 가졌습니다.',
        strength: '지혜, 유연성, 포용력, 적응력',
        weakness: '의지가 약하고 방황할 수 있음',
        career: '연구원, 학자, 무역업, 항해사, 철학자',
        love: '자유롭고 개방적입니다. 다양한 경험을 통해 성장하는 사랑입니다.',
        advice: '때로는 한 곳에 집중하고 정착하는 것도 필요합니다.'
    },
    '癸': {
        name: '계수(癸水)',
        char: '작은 물/빗물',
        personality: '섬세하고 지적이며 내향적입니다. 빗물처럼 조용히 스며드는 사람입니다.',
        strength: '통찰력, 직관력, 섬세함, 신중함',
        weakness: '소극적이고 우유부단할 수 있음',
        career: '작가, 연구원, 심리학자, 점술가, 의료인',
        love: '깊고 조용한 사랑입니다. 정신적 교감과 이해를 중시합니다.',
        advice: '때로는 적극적으로 나서는 것도 필요합니다.'
    }
};

// 육십갑자 일부 특징 (일주 해설)
const sixtyJiazi = {
    '甲子': '바다 위의 큰 나무. 지혜롭고 포용력이 있으나 뿌리가 약할 수 있습니다.',
    '乙丑': '땅 속의 보석. 숨겨진 재능이 많으며 인내심이 강합니다.',
    '丙寅': '용광로의 불. 왕성한 에너지와 창조력을 가졌습니다.',
    '丁卯': '촛불과 꽃. 예술적 재능이 뛰어나고 섬세합니다.',
    '戊辰': '산과 언덕. 안정적이고 책임감이 강합니다.',
    '己巳': '따뜻한 땅. 배려심이 깊고 사람들을 끌어당기는 매력이 있습니다.',
    '庚午': '칼날의 빛. 예리하고 결단력이 있으나 충동적일 수 있습니다.',
    '辛未': '땅 속의 금. 내실이 있고 참을성이 강합니다.',
    '壬申': '흐르는 강물. 지혜롭고 융통성이 있습니다.',
    '癸酉': '맑은 샘물. 순수하고 맑은 영혼을 가졌습니다.',
    '甲戌': '산의 나무. 독립적이고 의지가 강합니다.',
    '乙亥': '물 위의 풀. 유연하고 적응력이 뛰어납니다.'
};

// 간지 계산 함수들 (이전과 동일)
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

function getMonthStemBranch(year, month) {
    const yearStem = (year - 4) % 10;
    const monthBranchIndex = (month + 1) % 12;
    const monthStemStart = [2, 4, 6, 8, 0, 2, 4, 6, 8, 0];
    const monthStemIndex = (monthStemStart[yearStem] + month - 1) % 10;
    
    return {
        stem: heavenlyStems[monthStemIndex],
        branch: earthlyBranches[monthBranchIndex],
        stemName: stemNames[monthStemIndex],
        branchName: branchNames[monthBranchIndex]
    };
}

function getDayStemBranch(year, month, day) {
    const baseDate = new Date(1900, 0, 1);
    const targetDate = new Date(year, month - 1, day);
    const daysDiff = Math.floor((targetDate - baseDate) / (1000 * 60 * 60 * 24));
    
    const baseStemIndex = 6;
    const baseBranchIndex = 4;
    
    const stemIndex = (baseStemIndex + daysDiff) % 10;
    const branchIndex = (baseBranchIndex + daysDiff) % 12;
    
    return {
        stem: heavenlyStems[stemIndex],
        branch: earthlyBranches[branchIndex],
        stemName: stemNames[stemIndex],
        branchName: branchNames[branchIndex]
    };
}

function getHourStemBranch(year, month, day, hour) {
    if (hour === null || hour === '') return null;
    
    const dayStem = getDayStemBranch(year, month, day);
    const dayStemIndex = heavenlyStems.indexOf(dayStem.stem);
    const hourBranchIndex = Math.floor((hour + 1) / 2) % 12;
    const hourStemStart = [0, 2, 4, 6, 8, 0, 2, 4, 6, 8];
    const hourStemIndex = (hourStemStart[dayStemIndex] + hourBranchIndex) % 10;
    
    return {
        stem: heavenlyStems[hourStemIndex],
        branch: earthlyBranches[hourBranchIndex],
        stemName: stemNames[hourStemIndex],
        branchName: branchNames[hourBranchIndex]
    };
}

function analyzeElements(yearPillar, monthPillar, dayPillar, hourPillar) {
    const elementCount = {
        '목': 0,
        '화': 0,
        '토': 0,
        '금': 0,
        '수': 0
    };
    
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

// 향상된 운세 생성
function generateFortune(dayPillar, elementBalance, gender, yearPillar, monthPillar) {
    const dayStem = dayPillar.stem;
    const dayElement = elements[dayStem];
    const dayCombo = dayStem + dayPillar.branch;
    
    // 오행 균형도 계산
    const total = Object.values(elementBalance).reduce((a, b) => a + b, 0);
    const balance = {};
    for (let elem in elementBalance) {
        balance[elem] = Math.round((elementBalance[elem] / total) * 100);
    }
    
    // 일간 설명
    const dayStemInfo = dayStemDescriptions[dayStem];
    
    // 육십갑자 설명
    const jiaziDescription = sixtyJiazi[dayCombo] || '독특한 재능과 개성을 가진 사주입니다.';
    
    // 운세 점수 계산 (오행 균형 고려)
    const healthScore = Math.min(95, 50 + Math.random() * 30 + balance[dayElement]);
    const wealthScore = Math.min(95, 40 + Math.random() * 40 + (balance['금'] + balance['토'])/2);
    const careerScore = Math.min(95, 45 + Math.random() * 35 + balance['화']);
    const loveScore = Math.min(95, 35 + Math.random() * 45 + balance['수']);
    
    return {
        dayStemInfo: dayStemInfo,
        jiaziDescription: jiaziDescription,
        personality: generatePersonalityAnalysis(dayStem, dayPillar.branch, elementBalance),
        health: {
            score: Math.round(healthScore),
            text: generateEnhancedHealthFortune(dayElement, dayStem, healthScore, elementBalance)
        },
        wealth: {
            score: Math.round(wealthScore),
            text: generateEnhancedWealthFortune(dayElement, dayStem, wealthScore, elementBalance)
        },
        career: {
            score: Math.round(careerScore),
            text: generateEnhancedCareerFortune(dayElement, dayStem, careerScore, elementBalance, yearPillar)
        },
        love: {
            score: Math.round(loveScore),
            text: generateEnhancedLoveFortune(dayElement, dayStem, loveScore, gender, elementBalance)
        },
        general: generateEnhancedGeneralAdvice(dayElement, elementBalance, dayStem, yearPillar, monthPillar)
    };
}

function generatePersonalityAnalysis(dayStem, dayBranch, elementBalance) {
    const stemInfo = dayStemDescriptions[dayStem];
    const dayElement = elements[dayStem];
    const branchElement = elements[dayBranch];
    
    let analysis = `<p><strong>${stemInfo.name} (${stemInfo.char})</strong></p>`;
    analysis += `<p>${stemInfo.personality}</p><br>`;
    analysis += `<p><strong>✨ 강점:</strong> ${stemInfo.strength}</p>`;
    analysis += `<p><strong>⚠️ 약점:</strong> ${stemInfo.weakness}</p><br>`;
    
    // 천간과 지지의 조화
    if (dayElement === branchElement) {
        analysis += `<p><strong>🌟 특징:</strong> 일간과 일지가 같은 오행이라 본성이 강하고 일관성이 있습니다.</p>`;
    } else {
        analysis += `<p><strong>🌟 특징:</strong> 일간(${dayElement})과 일지(${branchElement})가 조화를 이루어 균형잡힌 성격입니다.</p>`;
    }
    
    return analysis;
}

function generateEnhancedHealthFortune(element, dayStem, score, elementBalance) {
    const stemInfo = dayStemDescriptions[dayStem];
    let text = '';
    
    if (score >= 80) {
        text = `<strong>건강운이 매우 좋습니다! (${Math.round(score)}점)</strong><br><br>`;
    } else if (score >= 60) {
        text = `<strong>전반적으로 건강한 편입니다. (${Math.round(score)}점)</strong><br><br>`;
    } else {
        text = `<strong>건강 관리에 신경 써야 합니다. (${Math.round(score)}점)</strong><br><br>`;
    }
    
    // 일간별 건강 특징
    const healthAdvice = {
        '甲': '간담 계통과 신경계통이 약할 수 있습니다. 스트레스 관리가 중요하며, 목과 어깨 건강에 주의하세요. 규칙적인 운동이 큰 도움이 됩니다.',
        '乙': '소화기와 신경계통에 주의가 필요합니다. 과로를 피하고 충분한 휴식을 취하세요. 요가나 명상이 도움이 됩니다.',
        '丙': '심장과 혈액순환에 신경 쓰세요. 열이 많아 상열감이나 고혈압을 조심해야 합니다. 찬 음식과 수분 섭취가 도움이 됩니다.',
        '丁': '심장과 눈 건강에 주의하세요. 예민한 성격 탓에 불면증이나 두통이 올 수 있습니다. 안정을 취하고 충분한 수면이 중요합니다.',
        '戊': '위장과 비장 건강을 살펴야 합니다. 과식을 조심하고 규칙적인 식사가 중요합니다. 적당한 운동으로 체중 관리를 하세요.',
        '己': '소화기 계통이 약할 수 있습니다. 스트레스성 위염이나 소화불량에 주의하세요. 편안한 마음가짐과 규칙적인 생활이 중요합니다.',
        '庚': '폐와 대장 건강에 신경 쓰세요. 호흡기 질환을 조심하고 맑은 공기를 마시세요. 피부 건강에도 주의가 필요합니다.',
        '辛': '호흡기와 피부가 예민합니다. 알레르기나 천식을 조심하고 환경을 청결히 유지하세요. 정기적인 피부 관리가 도움이 됩니다.',
        '壬': '신장과 방광 건강에 주의하세요. 수분 대사와 관련된 문제가 생길 수 있습니다. 과로를 피하고 몸을 따뜻하게 유지하세요.',
        '癸': '신장과 생식기 건강을 살펴야 합니다. 냉증이나 부종을 조심하세요. 따뜻한 음식과 족욕이 도움이 됩니다.'
    };
    
    text += healthAdvice[dayStem] + '<br><br>';
    
    // 오행 균형에 따른 건강 조언
    const sorted = Object.entries(elementBalance).sort((a, b) => b[1] - a[1]);
    const strongest = sorted[0][0];
    const weakest = sorted[sorted.length - 1][0];
    
    if (elementBalance[strongest] > elementBalance[weakest] * 2) {
        const imbalanceAdvice = {
            '목': '간과 담낭이 과도하게 활성화되어 있습니다. 신 음식을 줄이고 단 음식을 적당히 섭취하세요.',
            '화': '심장에 부담이 갈 수 있습니다. 맵고 자극적인 음식을 줄이고 시원한 음식을 섭취하세요.',
            '토': '소화기에 부담이 갈 수 있습니다. 과식을 피하고 가벼운 식사를 자주 하세요.',
            '금': '호흡기가 건조해질 수 있습니다. 수분 섭취를 늘리고 매운 음식을 줄이세요.',
            '수': '신장에 무리가 갈 수 있습니다. 몸을 따뜻하게 하고 찬 음식을 피하세요.'
        };
        text += `<strong>⚖️ 오행 균형:</strong> ${strongest} 기운이 강합니다. ${imbalanceAdvice[strongest]}`;
    }
    
    return text;
}

function generateEnhancedWealthFortune(element, dayStem, score, elementBalance) {
    const stemInfo = dayStemDescriptions[dayStem];
    let text = '';
    
    if (score >= 80) {
        text = `<strong>재물운이 매우 좋습니다! (${Math.round(score)}점)</strong><br><br>`;
    } else if (score >= 60) {
        text = `<strong>안정적인 재물운입니다. (${Math.round(score)}점)</strong><br><br>`;
    } else {
        text = `<strong>재물 관리에 신경 써야 합니다. (${Math.round(score)}점)</strong><br><br>`;
    }
    
    // 일간별 재물운 특징
    const wealthAdvice = {
        '甲': '정도(正道)로 재물을 모으는 타입입니다. 사업이나 직장에서 꾸준히 성공할 수 있습니다. 부동산이나 장기 투자가 유리합니다.',
        '乙': '사람을 통해 재물이 들어옵니다. 인간관계를 잘 활용하면 좋은 기회가 찾아옵니다. 서비스업이나 중개업이 유리합니다.',
        '丙': '화려하고 큰 재물을 꿈꿉니다. 사업이나 투자로 큰 돈을 벌 수 있지만, 지출도 큽니다. 철저한 재정 관리가 필요합니다.',
        '丁': '작지만 꾸준한 재물이 들어옵니다. 투기보다는 저축과 안정적인 투자가 적합합니다. 전문직이나 기술로 돈을 벌 수 있습니다.',
        '戊': '부동산이나 토지로 재물을 모을 수 있습니다. 안정적이고 큰 재산을 모을 수 있는 사주입니다. 장기적 관점이 중요합니다.',
        '己': '저축과 절약으로 재물을 모읍니다. 작은 것도 소중히 여기면 큰 재산이 됩니다. 농업이나 음식업이 유리합니다.',
        '庚': '사업이나 무역으로 큰 재물을 모을 수 있습니다. 과감한 투자도 성공할 수 있으나, 신중한 판단이 필요합니다.',
        '辛': '귀한 재물을 다루는 것이 유리합니다. 보석, 귀금속, 예술품 등이 인연이 있습니다. 전문성을 살린 고소득이 가능합니다.',
        '壬': '돈의 흐름이 크고 다양한 경로로 들어옵니다. 무역이나 수입수출업이 유리합니다. 현금 흐름 관리가 중요합니다.',
        '癸': '작지만 지속적인 수입이 있습니다. 지적 재산이나 저작권으로 수입을 얻을 수 있습니다. 보이지 않는 곳에서 재물이 모입니다.'
    };
    
    text += wealthAdvice[dayStem] + '<br><br>';
    
    // 투자 조언
    const investmentAdvice = {
        '목': '성장주나 IT 기업 투자가 유리합니다.',
        '화': '에너지, 엔터테인먼트 분야 투자가 좋습니다.',
        '토': '부동산, 건설, 금융 투자가 안정적입니다.',
        '금': '광산, 제조업, 금속 관련 투자가 유리합니다.',
        '수': '해운, 무역, 수산업 투자가 적합합니다.'
    };
    
    text += `<strong>💡 투자 방향:</strong> ${investmentAdvice[element]}<br>`;
    
    // 오행 균형에 따른 재물 조언
    if (elementBalance['토'] + elementBalance['금'] > 4) {
        text += `<strong>💰 재물 운세:</strong> 재성(財星)이 강해 재물을 모으기 좋은 사주입니다!`;
    } else if (elementBalance['토'] + elementBalance['금'] < 2) {
        text += `<strong>💰 재물 운세:</strong> 재성이 약하니 근면과 절약이 중요합니다. 작은 것부터 차근차근 모으세요.`;
    }
    
    return text;
}

function generateEnhancedCareerFortune(element, dayStem, score, elementBalance, yearPillar) {
    const stemInfo = dayStemDescriptions[dayStem];
    let text = '';
    
    if (score >= 80) {
        text = `<strong>직업운이 매우 좋습니다! (${Math.round(score)}점)</strong><br><br>`;
    } else if (score >= 60) {
        text = `<strong>안정적인 직업운입니다. (${Math.round(score)}점)</strong><br><br>`;
    } else {
        text = `<strong>커리어 개발에 더 노력이 필요합니다. (${Math.round(score)}점)</strong><br><br>`;
    }
    
    text += `<strong>💼 추천 직업:</strong> ${stemInfo.career}<br><br>`;
    
    // 일간별 커리어 특징
    const careerAdvice = {
        '甲': '리더십을 발휘할 수 있는 위치가 최적입니다. 경영자나 관리직으로 성공할 가능성이 높습니다. 독립적으로 일하는 것이 좋습니다.',
        '乙': '사람과의 소통이 중요한 직업이 잘 맞습니다. 교육, 상담, 서비스 분야에서 능력을 발휘합니다. 협력적인 환경이 좋습니다.',
        '丙': '남앞에 나서는 직업이 적합합니다. 연예인, 강사, 정치인 등 많은 사람을 상대하는 일이 잘 맞습니다. 개성을 살리세요.',
        '丁': '전문성과 창의성이 필요한 일이 좋습니다. 연구, 개발, 창작 활동에서 두각을 나타냅니다. 조용한 환경이 적합합니다.',
        '戊': '안정적이고 신뢰가 중요한 직업이 잘 맞습니다. 공무원, 금융, 부동산 등이 적합합니다. 장기적인 커리어가 유리합니다.',
        '己': '타인을 돕고 배려하는 일이 천직입니다. 간호, 상담, 교육, 서비스업에서 빛을 발합니다. 중재자 역할도 잘합니다.',
        '庚': '전문 기술이나 실력이 필요한 직업이 적합합니다. 기술직, 전문직, 운동선수 등이 잘 맞습니다. 실력으로 승부하세요.',
        '辛': '예술적이고 세련된 일이 어울립니다. 디자인, 패션, 예술, 평론 분야에서 성공합니다. 자신만의 스타일을 만드세요.',
        '壬': '지식과 지혜를 다루는 일이 적합합니다. 연구, 교육, 컨설팅, 무역 등이 잘 맞습니다. 국제적인 일도 좋습니다.',
        '癸': '깊이 있는 탐구가 필요한 일이 좋습니다. 연구원, 작가, 심리학자, 의료인 등이 적합합니다. 전문성을 키우세요.'
    };
    
    text += careerAdvice[dayStem] + '<br><br>';
    
    // 관성(官星) 분석
    if (elementBalance['금'] > 2 && (element === '목' || element === '화')) {
        text += `<strong>🏆 관운:</strong> 관성(官星)이 있어 직장이나 공직에서 승진하고 인정받을 운이 있습니다!`;
    }
    
    return text;
}

function generateEnhancedLoveFortune(element, dayStem, score, gender, elementBalance) {
    const stemInfo = dayStemDescriptions[dayStem];
    let text = '';
    
    if (score >= 80) {
        text = `<strong>애정운이 매우 좋습니다! (${Math.round(score)}점)</strong><br><br>`;
    } else if (score >= 60) {
        text = `<strong>안정적인 애정운입니다. (${Math.round(score)}점)</strong><br><br>`;
    } else {
        text = `<strong>애정 관계에 더 많은 노력이 필요합니다. (${Math.round(score)}점)</strong><br><br>`;
    }
    
    text += `<strong>❤️ 연애 스타일:</strong> ${stemInfo.love}<br><br>`;
    
    // 일간별 애정 특징
    const loveAdvice = {
        '甲': '책임감 있고 든든한 사랑입니다. 한 번 사랑하면 끝까지 책임지려는 성향이 강합니다. 이상형은 따뜻하고 부드러운 사람입니다.',
        '乙': '부드럽고 배려심 깊은 사랑을 합니다. 감성적이고 로맨틱한 관계를 원합니다. 이상형은 강하고 믿음직스러운 사람입니다.',
        '丙': '열정적이고 적극적입니다. 사랑을 표현하는 것을 좋아하며 화려한 연애를 선호합니다. 이상형은 지적이고 차분한 사람입니다.',
        '丁': '깊고 진지한 사랑을 추구합니다. 정신적 교감을 중시하며 예민하게 상대의 마음을 읽습니다. 이상형은 포용력 있는 사람입니다.',
        '戊': '현실적이고 안정적인 사랑을 원합니다. 결혼과 가정을 중시하며 책임감이 강합니다. 이상형은 가정적이고 따뜻한 사람입니다.',
        '己': '헌신적이고 희생적인 사랑을 합니다. 상대를 먼저 생각하고 배려합니다. 이상형은 확실하고 결단력 있는 사람입니다.',
        '庚': '솔직하고 직선적입니다. 감정 표현은 서툴지만 진심은 깊습니다. 이상형은 섬세하고 따뜻한 사람입니다.',
        '辛': '이상적이고 로맨틱한 사랑을 꿈꿉니다. 품격과 센스를 중시합니다. 이상형은 지적이고 세련된 사람입니다.',
        '壬': '자유롭고 개방적인 사랑을 합니다. 다양한 경험을 통해 성장합니다. 이상형은 재미있고 활발한 사람입니다.',
        '癸': '깊고 조용한 사랑입니다. 정신적 유대감을 중시하고 이해심이 깊습니다. 이상형은 포용력 있고 안정적인 사람입니다.'
    };
    
    text += loveAdvice[dayStem] + '<br><br>';
    
    // 재성/관성 분석 (결혼운)
    const maleWealthStar = (gender === 'male') && (elementBalance['토'] + elementBalance['금'] > 2);
    const femaleOfficialStar = (gender === 'female') && (elementBalance['금'] + elementBalance['수'] > 2);
    
    if (maleWealthStar) {
        text += `<strong>💍 결혼운:</strong> 재성(妻星)이 있어 좋은 배우자를 만날 운이 있습니다!`;
    } else if (femaleOfficialStar) {
        text += `<strong>💍 결혼운:</strong> 관성(夫星)이 있어 좋은 배우자를 만날 운이 있습니다!`;
    }
    
    return text;
}

function generateEnhancedGeneralAdvice(element, elementBalance, dayStem, yearPillar, monthPillar) {
    const stemInfo = dayStemDescriptions[dayStem];
    let advice = `<p><strong>${stemInfo.name}</strong>의 기운을 타고났습니다. ${stemInfo.personality}</p>`;
    advice += `<p><strong>인생 조언:</strong> ${stemInfo.advice}</p><br>`;
    
    // 오행 균형 분석
    const sorted = Object.entries(elementBalance).sort((a, b) => b[1] - a[1]);
    const strongest = sorted[0][0];
    const secondStrongest = sorted[1][0];
    const weakest = sorted[sorted.length - 1][0];
    
    advice += `<p><strong>⚖️ 오행 균형 분석</strong></p>`;
    advice += `<p><strong>가장 강한 기운:</strong> ${strongest}(${elementBalance[strongest]}개)<br>`;
    advice += `<strong>두 번째 강한 기운:</strong> ${secondStrongest}(${elementBalance[secondStrongest]}개)<br>`;
    advice += `<strong>가장 약한 기운:</strong> ${weakest}(${elementBalance[weakest]}개)</p><br>`;
    
    if (elementBalance[strongest] > elementBalance[weakest] * 2) {
        const balanceAdvice = {
            '목': {
                lacking: '금',
                advice: '금 기운을 보완하세요. 규칙적인 생활, 명확한 목표 설정, 체계적인 계획이 도움됩니다. 흰색, 금색 색상을 활용하고 서쪽 방향이 좋습니다.'
            },
            '화': {
                lacking: '수',
                advice: '수 기운을 보완하세요. 차분함과 사려 깊은 판단이 필요합니다. 감정을 절제하고 깊이 생각하는 시간을 가지세요. 검은색, 파란색을 활용하고 북쪽 방향이 좋습니다.'
            },
            '토': {
                lacking: '목',
                advice: '목 기운을 보완하세요. 새로운 시도와 변화를 받아들이세요. 성장과 발전을 추구하는 마인드가 필요합니다. 초록색을 활용하고 동쪽 방향이 좋습니다.'
            },
            '금': {
                lacking: '화',
                advice: '화 기운을 보완하세요. 열정을 표현하고 적극적으로 행동하세요. 사람들과의 교류를 늘리고 밝은 에너지를 받아들이세요. 빨간색을 활용하고 남쪽 방향이 좋습니다.'
            },
            '수': {
                lacking: '토',
                advice: '토 기운을 보완하세요. 안정감과 규칙을 만들어가세요. 한 곳에 집중하고 꾸준함을 기르는 것이 중요합니다. 황색, 갈색을 활용하고 중앙이 좋습니다.'
            }
        };
        
        advice += `<p><strong>⚡ 오행 조화 방법:</strong><br>${balanceAdvice[strongest].advice}</p>`;
    } else {
        advice += `<p>오행의 균형이 비교적 잘 맞아 조화로운 삶을 살 수 있습니다. 현재의 균형을 잘 유지하세요.</p>`;
    }
    
    return advice;
}

// 메인 함수들
function calculateSaju() {
    const gender = document.getElementById('gender').value;
    const yearInput = document.getElementById('year').value;
    const monthInput = document.getElementById('month').value;
    const dayInput = document.getElementById('day').value;
    const hour = document.getElementById('hour').value;
    const minute = document.getElementById('minute').value;
    const calendar = document.getElementById('calendar').value;
    
    // 입력 검증
    if (!yearInput || !monthInput || !dayInput) {
        alert('생년월일을 모두 입력해주세요.');
        return;
    }
    
    const year = parseInt(yearInput);
    const month = parseInt(monthInput);
    const day = parseInt(dayInput);
    
    // 년도 범위 검증
    if (year < 1900 || year > 2100) {
        alert('년도는 1900년부터 2100년 사이로 입력해주세요.');
        return;
    }
    
    // 월 검증
    if (month < 1 || month > 12) {
        alert('월은 1월부터 12월 사이로 선택해주세요.');
        return;
    }
    
    // 일 검증 (월별 일수 체크)
    const daysInMonth = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
    
    // 윤년 체크
    const isLeapYear = (year % 4 === 0 && year % 100 !== 0) || (year % 400 === 0);
    if (isLeapYear) {
        daysInMonth[1] = 29;
    }
    
    const maxDay = daysInMonth[month - 1];
    if (day < 1 || day > maxDay) {
        alert(`${month}월은 1일부터 ${maxDay}일까지만 있습니다.`);
        return;
    }
    
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
    
    // 사주 표시
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
    
    const dayCombo = dayPillar.stem + dayPillar.branch;
    const jiaziDesc = sixtyJiazi[dayCombo] || '';
    
    document.getElementById('basicInfo').innerHTML = `
        <div style="font-size: 1.1em;">
            <div><strong>생년월일:</strong> ${year}년 ${month}월 ${day}일 (${calendarText})</div>
            <div><strong>태어난 시간:</strong> ${timeText}</div>
            <div><strong>성별:</strong> ${genderText}</div>
            <div style="margin-top: 15px; font-size: 1.2em; color: #667eea;">
                <strong>${yearPillar.zodiac}띠 (${yearPillar.stemName}${yearPillar.branchName}년생)</strong>
            </div>
            <div style="margin-top: 10px; font-size: 1em; color: #666;">
                <strong>일주:</strong> ${dayPillar.stemName}${dayPillar.branchName}일주 ${jiaziDesc ? '- ' + jiaziDesc : ''}
            </div>
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
    const fortune = generateFortune(dayPillar, elementBalance, gender, yearPillar, monthPillar);
    
    // 성격 분석 추가
    const personalitySection = document.createElement('div');
    personalitySection.className = 'fortune-section';
    personalitySection.innerHTML = `
        <h3>🧘 타고난 성격</h3>
        <div class="fortune-item">${fortune.personality}</div>
    `;
    document.getElementById('health-fortune').parentElement.parentElement.insertBefore(
        personalitySection,
        document.getElementById('health-fortune').parentElement
    );
    
    // 점수 및 운세 표시
    document.getElementById('health-score').textContent = fortune.health.score;
    document.getElementById('wealth-score').textContent = fortune.wealth.score;
    document.getElementById('career-score').textContent = fortune.career.score;
    document.getElementById('love-score').textContent = fortune.love.score;
    
    document.getElementById('health-fortune').innerHTML = `<p>${fortune.health.text}</p>`;
    document.getElementById('wealth-fortune').innerHTML = `<p>${fortune.wealth.text}</p>`;
    document.getElementById('career-fortune').innerHTML = `<p>${fortune.career.text}</p>`;
    document.getElementById('love-fortune').innerHTML = `<p>${fortune.love.text}</p>`;
    document.getElementById('general-advice').innerHTML = `${fortune.general}`;
    
    // 화면 전환
    document.querySelector('.input-form').style.display = 'none';
    document.getElementById('result').classList.add('show');
    window.scrollTo({ top: 0, behavior: 'smooth' });
}

function resetForm() {
    document.querySelector('.input-form').style.display = 'block';
    document.getElementById('result').classList.remove('show');
    window.scrollTo({ top: 0, behavior: 'smooth' });
}
