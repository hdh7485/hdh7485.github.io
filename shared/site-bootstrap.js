(function () {
    var script = document.currentScript;

    if (!script) {
        return;
    }

    var publisherId = script.dataset.publisherId || 'ca-pub-5473168023476210';
    var measurementId = script.dataset.measurementId || 'G-7CRKE11P9E';
    var searchConsoleVerification = script.dataset.searchConsoleVerification
        || (window.quizCollectionSiteVerification && window.quizCollectionSiteVerification.google)
        || '';
    var siteRoot = script.dataset.siteRoot || '.';
    var pageKind = script.dataset.pageKind || 'content';
    var pagePath = (window.location.pathname || '').replace(/\\/g, '/');
    var pageSlug = resolvePageSlug(pagePath);
    var trackedOnceKeys = {};
    var trackedEventLog = [];
    var trackedLinkClicksBound = false;

    function resolvePageSlug(path) {
        var segments = (path || '').split('/').filter(Boolean);

        if (!segments.length) {
            return 'home';
        }

        if (segments[segments.length - 1] === 'index.html') {
            segments.pop();
        }

        return segments[0] || 'home';
    }

    function buildHref(path) {
        return siteRoot.replace(/\/$/, '') + '/' + path.replace(/^\//, '');
    }

    function hasPathSegment(segment) {
        return pagePath.indexOf('/' + segment + '/') !== -1
            || pagePath.indexOf('/' + segment + '/index.html') !== -1
            || pagePath.endsWith('/' + segment)
            || pagePath.endsWith('/' + segment + '/index.html');
    }

    function hasAnyPathSegment(segments) {
        return (segments || []).some(function (segment) {
            return hasPathSegment(segment);
        });
    }

    function parseJsonAttribute(name) {
        var value = script.dataset[name];

        if (!value) {
            return null;
        }

        try {
            return JSON.parse(value);
        } catch (error) {
            console.warn('Invalid bootstrap JSON attribute:', name, error);
            return null;
        }
    }

    function defaultLiveSlotMap() {
        return {
            'home-banner': '6465515811',
            'home-multiplex': '3895192795',
            'game-2048-banner': '1269029459',
            'ai-chess-banner': '6162263489',
            'ai-gomoku-banner': '5679047756',
            'lunch-roulette-banner': '9843525601',
            'travel-result-banner': '3567889735'
        };
    }

    function buildAnalyticsPayload(params) {
        var payload = {};
        var source = params || {};

        Object.keys(source).forEach(function (key) {
            if (source[key] !== undefined) {
                payload[key] = source[key];
            }
        });

        if (!payload.page_kind) {
            payload.page_kind = pageKind;
        }

        if (!payload.page_slug) {
            payload.page_slug = pageSlug;
        }

        if (!payload.page_path) {
            payload.page_path = pagePath || '/';
        }

        if (!payload.page_title) {
            payload.page_title = document.title;
        }

        if (!payload.measurement_baseline) {
            payload.measurement_baseline = 'cmp-39-v1';
        }

        return payload;
    }

    function logTrackedEvent(eventName, payload) {
        trackedEventLog.push({
            event: eventName,
            payload: payload,
            trackedAt: new Date().toISOString()
        });

        window.__quizCollectionTrackedEvents__ = trackedEventLog;
    }

    function track(eventName, params) {
        if (!eventName) {
            return false;
        }

        var payload = buildAnalyticsPayload(params);

        logTrackedEvent(eventName, payload);

        if (!window.__quizCollectionAnalyticsLoaded__ || typeof window.gtag !== 'function') {
            return false;
        }

        window.gtag('event', eventName, payload);
        return true;
    }

    function trackOnce(key, eventName, params) {
        if (!key || trackedOnceKeys[key]) {
            return false;
        }

        trackedOnceKeys[key] = true;
        return track(eventName, params);
    }

    function resetTrackedKey(key) {
        delete trackedOnceKeys[key];
    }

    function isExternalLink(link) {
        var href = link && link.getAttribute('href');
        var url;

        if (!href || href.indexOf('#') === 0 || href.indexOf('javascript:') === 0) {
            return false;
        }

        try {
            url = new URL(href, window.location.href);
            return url.origin !== window.location.origin;
        } catch (error) {
            return false;
        }
    }

    function registerTrackedLinkClicks() {
        if (trackedLinkClicksBound) {
            return;
        }

        trackedLinkClicksBound = true;

        document.addEventListener('click', function (event) {
            var target = event.target;
            var link = target && target.closest ? target.closest('a[href]') : null;
            var href;
            var url;

            if (!link) {
                return;
            }

            href = link.getAttribute('href') || '';

            if (
                pageKind === 'hub'
                && (
                    link.classList.contains('quiz-card')
                    || link.classList.contains('hero-action')
                    || link.classList.contains('category-pill')
                    || !!link.closest('.featured-card')
                )
            ) {
                track('content_card_click', {
                    destination_path: href,
                    link_text: (link.textContent || '').trim()
                });
                return;
            }

            if (!isExternalLink(link)) {
                return;
            }

            try {
                url = new URL(href, window.location.href);
            } catch (error) {
                return;
            }

            track('outbound_click', {
                destination_url: url.href,
                destination_host: url.host,
                link_text: (link.textContent || '').trim()
            });
        }, true);
    }

    function ensureAdsMeta() {
        var meta = document.querySelector('meta[name="google-adsense-account"]');

        if (!meta) {
            meta = document.createElement('meta');
            meta.name = 'google-adsense-account';
            document.head.appendChild(meta);
        }

        meta.content = publisherId;
    }

    function ensureSearchConsoleVerification() {
        var meta;

        if (!searchConsoleVerification) {
            return;
        }

        meta = document.querySelector('meta[name="google-site-verification"]');

        if (!meta) {
            meta = document.createElement('meta');
            meta.name = 'google-site-verification';
            document.head.appendChild(meta);
        }

        meta.content = searchConsoleVerification;
    }

    function ensureAdSenseScript() {
        if (document.querySelector('script[data-site-bootstrap-adsense]')) {
            return;
        }

        var adSenseScript = document.createElement('script');
        adSenseScript.async = true;
        adSenseScript.crossOrigin = 'anonymous';
        adSenseScript.dataset.siteBootstrapAdsense = 'true';
        adSenseScript.src = 'https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=' + encodeURIComponent(publisherId);
        document.head.appendChild(adSenseScript);
    }

    function footerNote() {
        if (pageKind === 'hub') {
            return '광고, 정책, 문의 경로를 한 곳에서 확인할 수 있습니다.';
        }

        if (pageKind === 'game') {
            return '게임 이용 전 광고 및 서비스 정책을 아래 링크에서 확인하세요.';
        }

        if (pageKind === 'legal') {
            return '정책, 문의 경로, 운영 방식을 이 허브에서 빠르게 확인할 수 있습니다.';
        }

        if (pageKind === 'quiz') {
            return '결과는 브라우저 안에서 계산되며 정책과 문의 경로는 아래 링크에서 확인할 수 있습니다.';
        }

        return '서비스 정책과 문의 경로는 아래 링크에서 확인할 수 있습니다.';
    }

    function ensureLegalLinks(footer) {
        var legal = footer.querySelector('.site-shell-legal');

        if (legal) {
            return;
        }

        legal = document.createElement('nav');
        legal.className = 'site-shell-legal';
        legal.setAttribute('aria-label', '정책 및 안내 링크');
        legal.innerHTML = [
            '<a href="' + buildHref('index.html') + '">홈</a>',
            '<a href="' + buildHref('about.html') + '">소개</a>',
            '<a href="' + buildHref('privacy.html') + '">개인정보처리방침</a>',
            '<a href="' + buildHref('terms.html') + '">이용약관</a>',
            '<a href="' + buildHref('contact.html') + '">문의</a>'
        ].join('');

        footer.appendChild(legal);
    }

    function ensureFooter() {
        var existingFooter = document.querySelector('footer');

        if (existingFooter) {
            existingFooter.classList.add('site-shell-footer');
            existingFooter.dataset.siteBootstrapFooter = 'true';
            ensureLegalLinks(existingFooter);
            return;
        }

        var footer = document.createElement('footer');
        var note = document.createElement('p');

        footer.className = 'site-shell-footer';
        footer.dataset.siteBootstrapFooter = 'true';

        note.className = 'site-shell-note';
        note.textContent = footerNote();
        footer.appendChild(note);
        ensureLegalLinks(footer);

        document.body.appendChild(footer);
    }

    function createElement(tagName, className, text) {
        var element = document.createElement(tagName);

        if (className) {
            element.className = className;
        }

        if (typeof text === 'string') {
            element.textContent = text;
        }

        return element;
    }

    function createRecommendationGrid(items) {
        var grid = createElement('div', 'site-monetization-slot__grid');

        items.forEach(function (item) {
            var link = createElement('a', 'site-monetization-slot__card');
            var title = createElement('strong', 'site-monetization-slot__card-title', item.label);
            var meta = createElement('span', 'site-monetization-slot__card-meta', item.meta);

            link.href = buildHref(item.href);
            link.appendChild(title);
            link.appendChild(meta);
            grid.appendChild(link);
        });

        return grid;
    }

    function mountAdUnit(unit) {
        window.adsbygoogle = window.adsbygoogle || [];

        try {
            window.adsbygoogle.push({});
        } catch (error) {
            console.warn('AdSense mount failed for slot', unit.dataset.adSlot, error);
        }
    }

    function sharePage(options) {
        var payload = options || {};
        var shareData = {
            title: payload.title || document.title,
            text: payload.text || '',
            url: payload.url || window.location.href
        };

        if (navigator.share) {
            return navigator.share(shareData).catch(function (error) {
                if (error && error.name === 'AbortError') {
                    return;
                }

                if (navigator.clipboard && navigator.clipboard.writeText) {
                    return navigator.clipboard.writeText(shareData.url).then(function () {
                        window.alert(payload.copyMessage || '링크를 복사했습니다.');
                    });
                }

                window.prompt('링크를 복사해 공유하세요.', shareData.url);
            });
        }

        if (navigator.clipboard && navigator.clipboard.writeText) {
            return navigator.clipboard.writeText(shareData.url).then(function () {
                window.alert(payload.copyMessage || '링크를 복사했습니다.');
            });
        }

        window.prompt('링크를 복사해 공유하세요.', shareData.url);
        return Promise.resolve();
    }

    function createPlacementSection(placement, slotId) {
        var section = createElement(
            'section',
            'site-monetization-slot site-monetization-slot--' + placement.variant
        );
        var eyebrow = createElement('p', 'site-monetization-slot__eyebrow', slotId ? '광고' : '추천 콘텐츠');
        var title = createElement('h2', 'site-monetization-slot__title', placement.title);
        var description = createElement('p', 'site-monetization-slot__description', placement.description);
        var body = createElement('div', 'site-monetization-slot__body');

        section.dataset.monetizationSlot = placement.key;
        section.appendChild(eyebrow);
        section.appendChild(title);
        section.appendChild(description);

        if (slotId) {
            var frame = createElement('div', 'site-monetization-slot__ad-frame');
            var unit = createElement('ins', 'adsbygoogle site-monetization-slot__ad-unit');

            section.classList.add('site-monetization-slot--live');
            unit.style.display = 'block';
            unit.dataset.adClient = publisherId;
            unit.dataset.adSlot = slotId;
            unit.dataset.adFormat = 'auto';
            unit.dataset.fullWidthResponsive = 'true';

            frame.appendChild(unit);
            body.appendChild(frame);
            section.appendChild(body);
            section.__adUnit = unit;
            return section;
        }

        section.classList.add('site-monetization-slot--fallback');
        body.appendChild(createRecommendationGrid(placement.fallbackLinks));
        section.appendChild(body);
        return section;
    }

    function insertPlacement(section, placement) {
        var target = document.querySelector(placement.selector);

        if (!target || document.querySelector('[data-monetization-slot="' + placement.key + '"]')) {
            return;
        }

        if (placement.position === 'before') {
            target.insertAdjacentElement('beforebegin', section);
            return;
        }

        if (placement.position === 'append') {
            target.appendChild(section);
            return;
        }

        target.insertAdjacentElement('afterend', section);
    }

    function resolveSlotMap() {
        var slotMap = defaultLiveSlotMap();
        var inlineSlotMap = parseJsonAttribute('adSlots');
        var windowSlotMap = window.quizCollectionAdSlots;

        if (inlineSlotMap && typeof inlineSlotMap === 'object') {
            Object.assign(slotMap, inlineSlotMap);
        }

        if (windowSlotMap && typeof windowSlotMap === 'object') {
            Object.assign(slotMap, windowSlotMap);
        }

        return slotMap;
    }

    function pushQuizResultPlacement(placements, slotMap, config) {
        placements.push({
            key: 'quiz-result-banner',
            selector: '[data-quiz-result-anchor]',
            position: 'after',
            variant: 'banner',
            title: config.title,
            description: config.description,
            fallbackLinks: config.fallbackLinks,
            slotId: slotMap['quiz-result-banner'] || null
        });
    }

    function buildPlacements(slotMap) {
        var placements = [];

        if (pageKind === 'hub') {
            placements.push({
                key: 'home-banner',
                selector: '.intro-section',
                position: 'after',
                variant: 'banner',
                title: '오늘 많이 찾는 콘텐츠',
                description: '짧게 즐기기 좋은 게임과 테스트를 한 번에 이어서 볼 수 있습니다.',
                fallbackLinks: [
                    { href: '2048-game/', label: '2048 게임', meta: '짧게 몰입하기 좋은 퍼즐' },
                    { href: 'ai-chess/', label: 'AI 체스', meta: '생각보다 오래 붙잡게 되는 전략 게임' },
                    { href: 'mbti-pokemon-quiz/', label: 'MBTI 포켓몬', meta: '결과 공유가 쉬운 3분 테스트' }
                ],
                slotId: slotMap['home-banner'] || null
            });
            placements.push({
                key: 'home-multiplex',
                selector: 'footer, .site-shell-footer',
                position: 'before',
                variant: 'multiplex',
                title: '지금 이어서 해볼 만한 테스트',
                description: '방금 본 콘텐츠와 결이 비슷한 것만 골랐습니다. 하나만 더 해보면 취향 차이가 더 선명하게 보입니다.',
                fallbackLinks: [
                    { href: 'ai-gomoku/', label: 'AI 오목', meta: '한 판만 하려다 계속 하게 되는 두뇌 게임' },
                    { href: 'travel-destination-quiz/', label: '여행지 추천', meta: '지금 기분에 맞는 여행지 찾기' },
                    { href: 'lunch-roulette/', label: '점심 룰렛', meta: '선택이 안 될 때 바로 쓰는 도구' },
                    { href: 'love-style-quiz/', label: '연애 스타일 테스트', meta: '친구와 비교하기 좋은 인기 테스트' }
                ],
                slotId: slotMap['home-multiplex'] || null
            });
        }

        if (hasPathSegment('2048-game')) {
            document.body.classList.add('site-shell-stack-content');
            placements.push({
                key: 'game-2048-banner',
                selector: '.instructions',
                position: 'after',
                variant: 'banner',
                title: '2048 다음으로 즐길 콘텐츠',
                description: '퍼즐 플레이 흐름을 끊지 않도록 보드 아래 안내 영역 뒤에만 배치합니다.',
                fallbackLinks: [
                    { href: 'ai-chess/', label: 'AI 체스', meta: '전략 난이도를 올려보기' },
                    { href: 'ai-gomoku/', label: 'AI 오목', meta: '한 수씩 두는 대결' },
                    { href: 'lunch-roulette/', label: '점심 룰렛', meta: '짧게 쉬어가는 콘텐츠' }
                ],
                slotId: slotMap['game-2048-banner'] || null
            });
        }

        if (hasPathSegment('ai-chess')) {
            placements.push({
                key: 'ai-chess-banner',
                selector: '.info',
                position: 'after',
                variant: 'banner',
                title: '체스를 마친 뒤 이어보기',
                description: '조작 영역과 체스판에서 충분히 떨어진 정보 박스 아래 슬롯입니다.',
                fallbackLinks: [
                    { href: 'ai-gomoku/', label: 'AI 오목', meta: '같은 두뇌 게임 계열' },
                    { href: '2048-game/', label: '2048 게임', meta: '짧은 퍼즐로 전환' },
                    { href: 'travel-destination-quiz/', label: '여행지 추천', meta: '게임 뒤 가벼운 테스트' }
                ],
                slotId: slotMap['ai-chess-banner'] || null
            });
        }

        if (hasPathSegment('ai-gomoku')) {
            placements.push({
                key: 'ai-gomoku-banner',
                selector: '.info',
                position: 'after',
                variant: 'banner',
                title: '오목 다음 추천 콘텐츠',
                description: '보드와 조작 버튼을 보호하면서 체류를 이어갈 수 있는 단일 슬롯입니다.',
                fallbackLinks: [
                    { href: 'ai-chess/', label: 'AI 체스', meta: '전략 게임 계속하기' },
                    { href: '2048-game/', label: '2048 게임', meta: '숫자 퍼즐로 전환' },
                    { href: 'travel-destination-quiz/', label: '여행지 추천', meta: '결과형 테스트로 이동' }
                ],
                slotId: slotMap['ai-gomoku-banner'] || null
            });
        }

        if (hasPathSegment('lunch-roulette')) {
            placements.push({
                key: 'lunch-roulette-banner',
                selector: '.info-section',
                position: 'after',
                variant: 'banner',
                title: '점심 결정 후 이어보기',
                description: '룰렛 결과 확인 뒤에만 노출되는 후속 추천 영역입니다.',
                fallbackLinks: [
                    { href: 'travel-destination-quiz/', label: '여행지 추천', meta: '다음 선택을 이어가기' },
                    { href: 'love-style-quiz/', label: '연애 스타일 테스트', meta: '감성형 퀴즈로 이동' },
                    { href: '2048-game/', label: '2048 게임', meta: '짧게 머물기 좋은 퍼즐' }
                ],
                slotId: slotMap['lunch-roulette-banner'] || null
            });
        }

        if (hasPathSegment('travel-destination-quiz')) {
            placements.push({
                key: 'travel-result-banner',
                selector: '#result-container .result-card',
                position: 'append',
                variant: 'banner',
                title: '이 결과와 잘 맞는 다음 테스트',
                description: '방금 본 결과를 기준으로 비슷한 결의 콘텐츠만 골랐습니다. 결과 저장 없이 바로 이어서 3분 안에 확인할 수 있어요.',
                fallbackLinks: [
                    { href: 'love-style-quiz/', label: '연애 스타일 테스트', meta: '같은 결과형으로 취향 더 보기' },
                    { href: 'beer-recommendation-quiz/', label: '맥주 추천 퀴즈', meta: '지금 기분에 맞는 추천 받기' },
                    { href: 'lunch-roulette/', label: '점심 메뉴 룰렛', meta: '바로 결정이 필요한 순간용' }
                ],
                slotId: slotMap['travel-result-banner'] || null
            });
        }

        if (hasPathSegment('mbti-pokemon-quiz')) {
            pushQuizResultPlacement(placements, slotMap, {
                title: '이 결과 다음으로 보기 좋은 테스트',
                description: '결과 확인과 공유 흐름을 먼저 끝낸 뒤, 비슷한 결의 테스트나 짧은 게임으로 자연스럽게 이어지게 배치했습니다.',
                fallbackLinks: [
                    { href: 'love-style-quiz/', label: '연애 스타일 테스트', meta: '결과형 퀴즈를 같은 톤으로 더 이어보기' },
                    { href: 'beer-recommendation-quiz/', label: '맥주 추천 퀴즈', meta: '지금 기분과 취향을 다른 방식으로 확인' },
                    { href: '2048-game/', label: '2048 게임', meta: '짧게 머물기 좋은 퍼즐로 전환' }
                ]
            });
        }

        if (hasPathSegment('love-style-quiz')) {
            pushQuizResultPlacement(placements, slotMap, {
                title: '다음으로 가볍게 이어볼 콘텐츠',
                description: '관계 성향 결과를 본 뒤 바로 다른 결과형 테스트나 짧은 게임으로 이동할 수 있게 결과 카드 아래에 배치합니다.',
                fallbackLinks: [
                    { href: 'mbti-pokemon-quiz/', label: 'MBTI 포켓몬 테스트', meta: '캐릭터형 결과로 성향 비교하기' },
                    { href: 'beer-recommendation-quiz/', label: '맥주 추천 퀴즈', meta: '취향형 결과를 다른 주제로 이어보기' },
                    { href: 'travel-destination-quiz/', label: '여행지 추천 테스트', meta: '오늘 기분에 맞는 선택형 결과 보기' }
                ]
            });
        }

        if (hasPathSegment('beer-recommendation-quiz')) {
            pushQuizResultPlacement(placements, slotMap, {
                title: '취향 결과 뒤에 이어보기',
                description: '추천 맥주와 다시 하기 흐름을 먼저 노출한 뒤, 다른 결과형 콘텐츠로 넘어갈 수 있게 결과 카드 끝에만 추가합니다.',
                fallbackLinks: [
                    { href: 'love-style-quiz/', label: '연애 스타일 테스트', meta: '감정/관계 성향으로 방향 바꾸기' },
                    { href: 'lol-position-quiz/', label: 'LOL 포지션 테스트', meta: '성향을 게임 역할로 번역해보기' },
                    { href: 'lunch-roulette/', label: '점심 룰렛', meta: '바로 선택이 필요한 순간용 도구' }
                ]
            });
        }

        if (hasPathSegment('lol-position-quiz')) {
            pushQuizResultPlacement(placements, slotMap, {
                title: '포지션 결과 다음 추천',
                description: '결과와 다시 하기 버튼을 먼저 보여준 뒤, 비슷한 결과형 콘텐츠나 가벼운 전환용 콘텐츠를 결과 카드 아래에 붙입니다.',
                fallbackLinks: [
                    { href: 'mbti-pokemon-quiz/', label: 'MBTI 포켓몬 테스트', meta: '성향 결과를 캐릭터형으로 다시 보기' },
                    { href: 'beer-recommendation-quiz/', label: '맥주 추천 퀴즈', meta: '취향 기반 결과를 다른 주제로 이어보기' },
                    { href: 'ai-chess/', label: 'AI 체스', meta: '전략 게임으로 바로 넘어가기' }
                ]
            });
        }

        if (hasPathSegment('personality-food-quiz')) {
            pushQuizResultPlacement(placements, slotMap, {
                title: '음식 결과 다음으로 가볍게 이어보기',
                description: '공유와 다시 하기 흐름을 먼저 본 뒤, 비슷한 취향형 테스트로 이어질 수 있게 결과 카드 바깥에만 배치합니다.',
                fallbackLinks: [
                    { href: 'love-style-quiz/', label: '연애 스타일 테스트', meta: '감정 성향을 다른 주제로 비교하기' },
                    { href: 'beer-recommendation-quiz/', label: '맥주 추천 퀴즈', meta: '입맛 취향을 더 구체적으로 확인하기' },
                    { href: 'travel-destination-quiz/', label: '여행지 추천 테스트', meta: '오늘의 분위기를 다른 선택형으로 이어보기' }
                ]
            });
        }

        return placements;
    }

    function markProtectedRegions() {
        var selectors = ['header'];

        if (pageKind === 'quiz') {
            selectors = selectors.concat([
                '.intro-screen',
                '.question-screen',
                '.question-screen .options',
                '.question-screen .progress-bar',
                '.question-screen .quiz-shell-options',
                '.question-screen .quiz-shell-progress-track',
                '.question-screen .quiz-shell-progress-fill',
                '[data-quiz-result-actions]',
                '[data-quiz-result-related]',
                '[data-quiz-result-trust]'
            ]);
        }

        if (pageKind === 'hub') {
            selectors = selectors.concat(['.intro-section', '.quiz-grid', '.quiz-card']);
        }

        if (hasPathSegment('2048-game')) {
            selectors = selectors.concat(['.game-info', '.game-container', '.instructions']);
        }

        if (hasPathSegment('ai-chess')) {
            selectors = selectors.concat(['.difficulty', '#board', '.status', '.controls']);
        }

        if (hasPathSegment('ai-gomoku')) {
            selectors = selectors.concat(['.difficulty', '#board', '.status', '.controls']);
        }

        if (hasPathSegment('lunch-roulette')) {
            selectors = selectors.concat(['.result-display', 'button.primary', '.stats']);
        }

        if (hasAnyPathSegment([
            'travel-destination-quiz',
            'mbti-pokemon-quiz',
            'love-style-quiz',
            'beer-recommendation-quiz',
            'lol-position-quiz',
            'personality-food-quiz'
        ])) {
            selectors = selectors.concat(['#quiz-container', '#quiz-container .progress-bar', '#quiz-container .options']);
        }

        selectors.forEach(function (selector) {
            document.querySelectorAll(selector).forEach(function (element) {
                element.classList.add('site-ad-protected', 'google-anno-skip');
            });
        });
    }

    function ensureMonetizationSlots() {
        var slotMap = resolveSlotMap();
        var placements = buildPlacements(slotMap);

        if (!placements.length) {
            return;
        }

        document.body.classList.add('site-shell-has-monetization');
        markProtectedRegions();

        placements.forEach(function (placement) {
            var section = createPlacementSection(placement, placement.slotId);

            insertPlacement(section, placement);

            if (section.__adUnit) {
                mountAdUnit(section.__adUnit);
            }
        });
    }

    function loadAnalytics() {
        if (window.__quizCollectionAnalyticsLoaded__) {
            return;
        }

        window.__quizCollectionAnalyticsLoaded__ = true;
        window.dataLayer = window.dataLayer || [];
        window.gtag = window.gtag || function () {
            window.dataLayer.push(arguments);
        };

        var analyticsScript = document.createElement('script');
        analyticsScript.async = true;
        analyticsScript.src = 'https://www.googletagmanager.com/gtag/js?id=' + encodeURIComponent(measurementId);
        document.head.appendChild(analyticsScript);

        window.gtag('js', new Date());
        window.gtag('config', measurementId, { send_page_view: false });
        window.quizCollectionBootstrap.config.analyticsEnabled = true;
        window.quizCollectionBootstrap.config.analyticsMode = 'enabled';
        track('page_view');
    }

    window.quizCollectionBootstrap = {
        config: {
            publisherId: publisherId,
            measurementId: measurementId,
            analyticsEnabled: false,
            analyticsMode: 'consent-pending',
            pageKind: pageKind,
            pageSlug: pageSlug
        },
        loadAnalytics: loadAnalytics,
        track: track,
        trackOnce: trackOnce,
        resetTrackedKey: resetTrackedKey,
        sharePage: sharePage
    };

    ensureAdsMeta();
    ensureSearchConsoleVerification();
    ensureAdSenseScript();

    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', function () {
            ensureFooter();
            ensureMonetizationSlots();
            registerTrackedLinkClicks();
        }, { once: true });
    } else {
        ensureFooter();
        ensureMonetizationSlots();
        registerTrackedLinkClicks();
    }
})();
