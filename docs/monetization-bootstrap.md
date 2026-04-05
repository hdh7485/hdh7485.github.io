# 공통 수익화 부트스트랩

`shared/site-bootstrap.js`와 `shared/site-bootstrap.css`는 수익화 관련 공통 진입점입니다.

## 현재 역할

- AdSense 퍼블리셔 ID를 `ca-pub-5473168023476210`으로 통일
- 페이지별 중복 AdSense 스크립트 대신 공통 로더 사용
- 개인정보처리방침, 이용약관, 문의, 소개 링크를 공통 footer 패턴으로 노출
- GA 측정 ID `G-7CRKE11P9E`를 부트스트랩 설정에 보관하되 기본값은 비활성 상태 유지
- 측정 이벤트 매트릭스와 payload 계약은 `docs/measurement-baseline.md`에서 관리

## CMP-37 운영 기준선

- canonical publisher ID: `ca-pub-5473168023476210`
- canonical 운영 방식: first-wave는 `shared/site-bootstrap.js` 기반 수동 슬롯을 기준으로 운영
- page-local AdSense 스크립트, 인라인 `adsbygoogle` 블록, 페이지별 다른 publisher ID는 모두 비표준으로 간주
- Auto ads는 기본 운영값이 아니라 후속 실험 항목으로 취급합니다. consent 준비([CMP-13](/CMP/issues/CMP-13))와 제외 영역 검토([CMP-28](/CMP/issues/CMP-28))가 끝나기 전에는 canonical 운영 방식으로 쓰지 않습니다.

## 라이브 점검에서 확인된 드리프트

- 공개 배포본은 아직 공통 부트스트랩 기준으로 정리되지 않았습니다.
- `/ai-chess/`, `/ai-gomoku/`는 라이브에서 여전히 이전 publisher ID `ca-pub-9206874822169440`을 사용합니다.
- `/lunch-roulette/`, `/travel-destination-quiz/`는 repo에는 부트스트랩이 연결되어 있지만 라이브에서는 AdSense가 보이지 않습니다.
- 따라서 구현 우선순위는 "새 광고 추가"보다 "공통 부트스트랩 + 단일 publisher ID로 배포본을 먼저 수렴"입니다.

## 현재 적용 페이지

- `/index.html`
- `/2048-game/index.html`
- `/mbti-pokemon-quiz/index.html`
- `/love-style-quiz/index.html`
- `/beer-recommendation-quiz/index.html`
- `/lol-position-quiz/index.html`
- `/ai-chess/index.html`
- `/ai-gomoku/index.html`
- `/lunch-roulette/index.html`
- `/travel-destination-quiz/index.html`

## CMP-37 first-wave 페이지 10개

아래 10개를 first-wave monetization 대상 페이지로 고정합니다. 이유는 이미 트래픽/탐색 허브 역할이 있거나 repo 기준 공통 부트스트랩으로 수렴하기 가장 쉬운 묶음이기 때문입니다.

1. `/`
2. `/2048-game/`
3. `/ai-chess/`
4. `/ai-gomoku/`
5. `/lunch-roulette/`
6. `/travel-destination-quiz/`
7. `/mbti-pokemon-quiz/`
8. `/love-style-quiz/`
9. `/beer-recommendation-quiz/`
10. `/lol-position-quiz/`

### 실행 우선순위

- slot-ready 즉시 실행: `/`, `/2048-game/`, `/ai-chess/`, `/ai-gomoku/`, `/lunch-roulette/`, `/travel-destination-quiz/`
- first-wave 준비만 먼저: `/mbti-pokemon-quiz/`, `/love-style-quiz/`, `/beer-recommendation-quiz/`, `/lol-position-quiz/`

뒤 4개 페이지는 부트스트랩 정렬 우선 대상이지만, 현재 `shared/site-bootstrap.js`에는 공통 quiz-result 슬롯 정의가 없습니다. 따라서 live ad on은 [CMP-40](/CMP/issues/CMP-40)에서 generic quiz placement를 추가한 뒤 진행합니다.

## CMP-15 기준 첫 배치 구조

- 홈 `/`: 소개 블록 뒤 `home-banner`, footer 직전 `home-multiplex`
- 게임 `/2048-game/`: 안내 문구 아래 `game-2048-banner`
- 게임 `/ai-chess/`: 규칙 박스 아래 `ai-chess-banner`
- 게임 `/ai-gomoku/`: 규칙 박스 아래 `ai-gomoku-banner`
- 도구 `/lunch-roulette/`: 메뉴 목록 섹션 아래 `lunch-roulette-banner`
- 퀴즈 `/travel-destination-quiz/`: 결과 카드 내부 하단 `travel-result-banner`

모든 배치는 `shared/site-bootstrap.js`가 공통으로 삽입합니다. 현재 실제 AdSense ad slot ID는 아직 연결하지 않았기 때문에, 기본 렌더링은 내부 추천 카드 fallback입니다. 슬롯 ID가 준비되면 같은 배치 키를 사용해 광고 단위로 전환할 수 있습니다.

## Auto ads / 제외 영역 운영 포인트

- 상호작용 보호 영역 클래스: `.site-ad-protected`
- ad intents 제외 클래스: `google-anno-skip`
- 공유 삽입 슬롯 셀렉터 예시: `[data-monetization-slot="home-banner"]`, `[data-monetization-slot="ai-chess-banner"]`

Ads Ops는 AdSense 미리보기에서 위 셀렉터를 기준으로 제외 영역을 다시 잡으면 됩니다. 특히 게임 보드, 퀴즈 질문 영역, 버튼 묶음은 `.site-ad-protected` 셀렉터 기준으로 제외하는 것을 권장합니다.

## 광고 제외 페이지 / 섹션 기준

- 페이지 단위 제외: `film-camera/`, `hope-hands/`, `about.html`, `contact.html`, `privacy.html`, `terms.html`, 404/`_not-found`
- 이유: 장문 정보성 콘텐츠, 신뢰/지원 페이지, 또는 현재 소스 통제가 약한 정적 export 결과물은 first-wave 광고 대상이 아닙니다.
- 상호작용 영역 제외: 게임 보드, 난이도 선택, 상태창, 조작 버튼, 퀴즈 질문 본문, 선택지 버튼, 진행 바, 결과 확인 전 입력/선택 UI
- 홈 제외: hero/intro 상단 첫 화면, 카드 그리드 내부 카드 사이 직접 삽입
- 배치 원칙: 첫 광고는 "상호작용 이후" 또는 "정보 블록 이후"에만 둡니다. 결과 카드 내부 append는 결과 확인이 끝난 뒤에만 허용합니다.

## 구현 체크리스트

- 모든 first-wave 페이지에서 page-local AdSense 스크립트와 인라인 광고 블록을 제거하고 공통 부트스트랩만 남깁니다.
- `ca-pub-9206874822169440`가 남아 있는 라이브 경로는 `ca-pub-5473168023476210`로 교체합니다.
- [CMP-40](/CMP/issues/CMP-40)에서는 기존 6개 placement key를 live slot으로 연결하고, 필요 시 quiz 공통 placement를 추가해 나머지 4개 first-wave 페이지를 수용합니다.
- [CMP-39](/CMP/issues/CMP-39)에서는 위 10개 first-wave 페이지를 동일 측정 기준선으로 맞춥니다.
- [CMP-28](/CMP/issues/CMP-28)에서는 위 제외 기준을 QA 체크리스트와 launch guardrail로 옮깁니다.
- [CMP-25](/CMP/issues/CMP-25)가 실제 slot ID를 확정하면 key -> slot ID 매핑만 연결하고 운영 기준은 바꾸지 않습니다.

## 새 페이지에 붙이는 방법

루트 페이지:

```html
<meta name="google-adsense-account" content="ca-pub-5473168023476210">
<link rel="stylesheet" href="shared/site-bootstrap.css">
<script defer src="shared/site-bootstrap.js" data-site-root="." data-page-kind="hub"></script>
```

하위 페이지:

```html
<meta name="google-adsense-account" content="ca-pub-5473168023476210">
<link rel="stylesheet" href="../shared/site-bootstrap.css">
<script defer src="../shared/site-bootstrap.js" data-site-root=".." data-page-kind="quiz"></script>
```

`data-page-kind` 값은 현재 `hub`, `quiz`, `game`을 사용합니다. footer 문구만 달라지고 기능 차이는 없습니다.

## 후속 작업 계약

- [CMP-13](/CMP/issues/CMP-13): consent 상태를 저장한 뒤 동의 시점에만 `window.quizCollectionBootstrap.loadAnalytics()`를 호출
- [CMP-14](/CMP/issues/CMP-14): 공통 이벤트 정의, `robots.txt`, `sitemap.xml`, Search Console 운영 문서 추가
- [CMP-15](/CMP/issues/CMP-15): Auto ads 제외 영역 또는 수동 ad-slot 마운트 지점 추가
- [CMP-16](/CMP/issues/CMP-16): GitHub Pages 실배포 QA 및 수익화 체크리스트 검증

## 이번 단계에서 의도적으로 하지 않은 것

- 동의 없이 GA를 즉시 실행하지 않음
- 실제 광고 슬롯 마크업을 아직 배치하지 않음
- `film-camera/` 정적 export 결과물은 건드리지 않음
