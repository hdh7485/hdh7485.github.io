# 🏎️ F1 드라이버 성향 테스트

당신은 어떤 F1 드라이버와 비슷할까요?

## 소개

12개의 질문을 통해 당신의 레이싱 스타일, 성격, 가치관을 분석하고,  
현역 F1 드라이버 중 가장 비슷한 선수를 찾아드립니다!

## 포함된 드라이버

- 🦁 **Max Verstappen** (Red Bull Racing) - 완벽주의자 챔피언
- 👑 **Lewis Hamilton** (Mercedes-AMG) - 전설적인 챔피언
- 🔥 **Charles Leclerc** (Ferrari) - 열정적인 스피드스터
- 😄 **Lando Norris** (McLaren) - 재치있는 올라운더
- 🧙 **Fernando Alonso** (Aston Martin) - 베테랑 마에스트로
- 🎯 **Carlos Sainz** (Ferrari) - 신뢰할 수 있는 완성형
- 📊 **George Russell** (Mercedes-AMG) - 분석적 퍼펙셔니스트
- 🛡️ **Sergio Perez** (Red Bull Racing) - 완벽한 팀 플레이어

## 사용 방법

### 로컬에서 실행

1. 이 폴더에서 HTTP 서버 실행:
   ```bash
   cd f1driver-test
   python3 -m http.server 8000
   ```
   
   또는:
   ```bash
   npx http-server -p 8000
   ```

2. 브라우저에서 접속:
   ```
   http://localhost:8000
   ```

### 배포

정적 사이트이므로 무료 호스팅 가능:
- Vercel
- Netlify
- GitHub Pages
- Cloudflare Pages

## 구성 파일

- `index.html` - 메인 UI
- `test.js` - 테스트 로직 및 드라이버 데이터
- `README.md` - 이 파일

## 특징

- ✨ F1 테마의 세련된 디자인 (레드/블랙 그라데이션)
- 📊 5가지 특성 분석 (속도, 일관성, 공격성, 전략, 팀워크)
- 🎯 12개의 질문으로 정확한 분석
- 📱 모바일 반응형 레이아웃
- 🏁 프로그레스 바와 부드러운 애니메이션
- 💯 일치율 표시

## 분석 항목

각 드라이버는 다음 5가지 특성으로 평가됩니다:

1. **속도** (Speed) - 원랩 페이스, 순수 속도
2. **일관성** (Consistency) - 실수 없는 안정적인 퍼포먼스
3. **공격성** (Aggression) - 오버테이킹, 과감한 플레이
4. **전략** (Strategy) - 레이스 전략, 의사결정
5. **팀워크** (Teamwork) - 팀과의 협업, 소통

## 질문 주제

- 레이스 전략 및 의사결정
- 압박 상황 대처
- 팀워크와 리더십
- 위기 관리
- 목표와 가치관

## 기술 스택

- HTML5
- CSS3 (그라데이션, 애니메이션)
- Vanilla JavaScript

## 향후 개선 가능 사항

- [ ] 소셜 미디어 공유 기능
- [ ] 더 많은 드라이버 추가
- [ ] 드라이버 간 궁합 분석
- [ ] 히스토리컬 드라이버 포함 (Senna, Schumacher 등)
- [ ] 결과 PDF 다운로드
- [ ] 팀별 분석

## 라이선스

MIT License

---

**Made with 🏎️ for F1 fans**
