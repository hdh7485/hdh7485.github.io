# 측정 기준선 문서

`CMP-39` 기준 first-wave monetization 페이지의 최소 측정 계약을 정리합니다.

## 기준 설정

- GA4 측정 ID: `G-7CRKE11P9E`
- 공통 삽입 위치: `shared/site-bootstrap.js`
- 페이지 연결 방식: 각 first-wave 페이지의 `index.html`에서 `shared/site-bootstrap.js`를 `defer` 로드
- 공통 API: `window.quizCollectionBootstrap.track(eventName, params)`
- 디버그 로그: `window.__quizCollectionTrackedEvents__`

## 활성화 규칙

- 현재 repo 기준으로는 analytics가 자동 실행되지 않습니다.
- 실제 GA 전송은 [CMP-13](/CMP/issues/CMP-13)에서 consent 이후 `window.quizCollectionBootstrap.loadAnalytics()`를 호출할 때 시작됩니다.
- 다만 이벤트 지점과 payload 계약은 이번 단계에서 먼저 고정해 두고, 브라우저 메모리의 `window.__quizCollectionTrackedEvents__`로 개발/QA 확인이 가능합니다.

## 공통 이벤트

| 이벤트 | 의미 | 공통 payload |
| --- | --- | --- |
| `page_view` | consent 이후 페이지 진입 측정 | `page_kind`, `page_slug`, `page_path`, `page_title`, `measurement_baseline` |
| `engagement_start` | 퀴즈 시작, 첫 스핀, 첫 정상 수처럼 상호작용이 실제로 시작된 시점 | 공통 payload + `content_type`, `content_slug`, `interaction_type` 또는 `question_count` |
| `engagement_complete` | 결과 노출, 승패 확정, 룰렛 최종 결과처럼 한 회차가 끝난 시점 | 공통 payload + `content_type`, `content_slug`, `outcome` 또는 `result_id`, `result_label` |
| `share_result` | 결과 공유 시도 | 공통 payload + `content_type`, `content_slug`, `result_id`, `result_label` |
| `content_card_click` | 홈 허브에서 카드/CTA 클릭으로 다음 콘텐츠로 이동 | 공통 payload + `destination_path`, `link_text` |
| `outbound_click` | 외부 링크 클릭 | 공통 payload + `destination_url`, `destination_host`, `link_text` |

`engagement_start` / `engagement_complete`는 ticket 원문의 `quiz_start` / `quiz_complete`에 대응하는 공통 레이어입니다. 게임과 도구 페이지까지 같은 리포트 축으로 묶기 위해 이벤트명을 일반화했습니다.

## 페이지별 매트릭스

| 경로 | 종류 | 이벤트 | 구현 위치 |
| --- | --- | --- | --- |
| `/` | hub | `page_view`, `content_card_click`, `outbound_click` | `shared/site-bootstrap.js` |
| `/2048-game/` | game | `page_view`, `engagement_start`, `engagement_complete`, `outbound_click` | `shared/site-bootstrap.js`, `2048-game/index.html` |
| `/ai-chess/` | game | `page_view`, `engagement_start`, `engagement_complete`, `outbound_click` | `shared/site-bootstrap.js`, `ai-chess/index.html` |
| `/ai-gomoku/` | game | `page_view`, `engagement_start`, `engagement_complete`, `outbound_click` | `shared/site-bootstrap.js`, `ai-gomoku/index.html` |
| `/lunch-roulette/` | tool | `page_view`, `engagement_start`, `engagement_complete`, `outbound_click` | `shared/site-bootstrap.js`, `lunch-roulette/roulette.js` |
| `/travel-destination-quiz/` | quiz | `page_view`, `engagement_start`, `engagement_complete`, `share_result`, `outbound_click` | `shared/site-bootstrap.js`, `travel-destination-quiz/index.html` |
| `/mbti-pokemon-quiz/` | quiz | `page_view`, `engagement_start`, `engagement_complete`, `share_result`, `outbound_click` | `shared/site-bootstrap.js`, `mbti-pokemon-quiz/quiz.js` |
| `/love-style-quiz/` | quiz | `page_view`, `engagement_start`, `engagement_complete`, `outbound_click` | `shared/site-bootstrap.js`, `love-style-quiz/index.html` |
| `/beer-recommendation-quiz/` | quiz | `page_view`, `engagement_start`, `engagement_complete`, `outbound_click` | `shared/site-bootstrap.js`, `beer-recommendation-quiz/test.js` |
| `/lol-position-quiz/` | quiz | `page_view`, `engagement_start`, `engagement_complete`, `outbound_click` | `shared/site-bootstrap.js`, `lol-position-quiz/quiz.js` |

## 결과 payload 기준

- 퀴즈 완료: `question_count`, `result_id`, `result_label`
- 연애 스타일 테스트: 위 값 + `secondary_result_id` (`MBTI` 추정값)
- 2048 완료: `outcome`, `best_tile`, `score`
- AI 체스 / 오목 완료: `outcome` (`player_win`, `ai_win`, `draw`)
- 점심 룰렛 완료: `result_label`, `result_category`, `spin_count`

## 운영 메모

- 홈은 결과형 페이지가 아니므로 `content_card_click`을 허브 전환 지표로 사용합니다.
- `outbound_click`은 외부 링크가 실제로 존재하는 화면에서만 발생합니다. first-wave 페이지에서 항상 나오는 이벤트는 아닙니다.
- consent UX가 붙기 전에는 이 문서를 event contract로 보고, 실제 GA 데이터 수집은 [CMP-13](/CMP/issues/CMP-13) 이후 QA에서 확인합니다.
