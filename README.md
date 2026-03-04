# 퀴즈&게임 모음 (hdh7485.github.io)

한국어 퀴즈, 게임, 정보 콘텐츠를 무료로 제공하는 GitHub Pages 사이트입니다. 회원가입 없이 즉시 이용 가능합니다.

## 콘텐츠 목록

### 성격 테스트 / 퀴즈
| 경로 | 설명 |
|------|------|
| `/mbti-pokemon-quiz` | MBTI 포켓몬 퀴즈 |
| `/disney-character-quiz` | 디즈니 캐릭터 테스트 |
| `/bts-member-quiz` | BTS 멤버 퀴즈 |
| `/nintendo-character-quiz` | 닌텐도 캐릭터 퀴즈 |
| `/harry-potter-house-quiz` | 해리포터 기숙사 배정 퀴즈 |
| `/personality-food-quiz` | 성격 음식 테스트 |
| `/past-life-job-quiz` | 전생 직업 테스트 |
| `/saju-quiz` | 사주팔자 테스트 |

### 게임
| 경로 | 설명 |
|------|------|
| `/2048-game` | 2048 퍼즐 게임 |
| `/ai-chess` | AI 체스 |
| `/ai-gomoku` | AI 오목 |
| `/f1-reaction-test` | F1 리액션 테스트 |
| `/lunch-roulette` | 점심 메뉴 룰렛 |

### 팬덤 / 엔터테인먼트 퀴즈
| 경로 | 설명 |
|------|------|
| `/lol-position-quiz` | LoL 포지션 퀴즈 |
| `/meme-quiz-2025` | 2025 밈 퀴즈 |
| `/f1-driver-quiz` | F1 드라이버 퀴즈 |

### 라이프스타일 / 추천
| 경로 | 설명 |
|------|------|
| `/beer-recommendation-quiz` | 맥주 추천 퀴즈 |
| `/travel-destination-quiz` | 여행지 추천 테스트 |

### 정보 콘텐츠
| 경로 | 설명 |
|------|------|
| `/film-camera` | 필름 카메라 가이드 (Next.js 정적 빌드) |
| `/hope-hands` | 희망의손길 프로젝트 |

## 기술 스택

- **대부분의 콘텐츠**: 순수 HTML / CSS / JavaScript (빌드 도구 없음)
- **film-camera**: Next.js 정적 내보내기(static export)
- **배포**: GitHub Pages (`.nojekyll` 포함)
- **광고**: Google AdSense (`ads.txt`)

## 구조

각 콘텐츠는 독립된 디렉토리 안에 `index.html`로 존재합니다. 공통 빌드 시스템은 없으며, 각 디렉토리가 독립적인 단위입니다.

```
hdh7485.github.io/
├── index.html          # 메인 홈페이지
├── about.html
├── contact.html
├── ads.txt
├── 2048-game/
├── ai-chess/
├── ai-gomoku/
├── film-camera/        # Next.js 정적 빌드 결과물
├── mbti-pokemon-quiz/
└── ...
```
