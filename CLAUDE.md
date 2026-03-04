# CLAUDE.md

## 프로젝트 개요

**hdh7485.github.io** — 한국어 퀴즈/게임 모음 GitHub Pages 사이트.
각 콘텐츠는 `/콘텐츠명/index.html` 단위로 독립적으로 존재합니다.

## 기술 스택

- 대부분의 콘텐츠: 순수 HTML + CSS + JavaScript (프레임워크/빌드 없음)
- `film-camera/`: Next.js 정적 내보내기 결과물 (소스 아님, 직접 수정 불가)
- 배포: GitHub Pages (`main` 브랜치 push → 자동 배포)

## 새 콘텐츠 추가 방법

1. 새 디렉토리 생성: `/새-콘텐츠명/index.html`
2. 기존 퀴즈(`mbti-pokemon-quiz/index.html` 등)를 참고해 동일한 스타일 적용
3. 메인 `index.html`에 링크 추가
4. `about.html`의 콘텐츠 목록 업데이트

## 스타일 컨벤션

- 언어: 한국어
- 배경: `linear-gradient(135deg, #667eea 0%, #764ba2 100%)` (보라/파랑 그라디언트)
- 폰트: `-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif`
- 반응형: 모바일 우선, `max-width: 600~800px` 컨테이너
- 회원가입 없음, 결과를 서버에 저장하지 않음

## 주의사항

- `film-camera/` 하위 파일은 직접 수정하지 말 것 (빌드 산출물)
- 광고 관련 파일(`ads.txt`)은 건드리지 말 것
- `main` 브랜치에 push하면 바로 라이브 반영됨 — 신중하게 커밋

## 현재 콘텐츠 현황 (2026-03)

퀴즈 8개, 게임 5개, 팬덤퀴즈 3개, 라이프스타일 2개, 정보 콘텐츠 2개 (총 20개)
