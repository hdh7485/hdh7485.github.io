# Search Console 운영 메모

이 저장소는 빌드 단계 없이 정적 파일을 그대로 GitHub Pages에 배포합니다. Search Console 연결도 같은 방식으로 운영하면 됩니다.

## 현재 검색 진입점

- `robots.txt`: 루트에서 제공하며 `sitemap.xml`을 직접 가리킵니다.
- `sitemap.xml`: `scripts/generate-sitemap.py`가 공개 HTML 파일 기준으로 생성합니다.
- 메타 검증 훅: `shared/site-bootstrap.js`가 `google-site-verification` 메타 태그를 선택적으로 주입할 수 있습니다.

## 메타 태그 검증 방법

루트 홈의 부트스트랩 스크립트에 `data-search-console-verification`만 추가하면 됩니다.

```html
<script
  defer
  src="shared/site-bootstrap.js"
  data-site-root="."
  data-page-kind="hub"
  data-search-console-verification="발급받은_토큰"
></script>
```

같은 값을 전역 설정으로 넣고 싶다면 부트스트랩보다 먼저 아래 객체를 선언해도 됩니다.

```html
<script>
  window.quizCollectionSiteVerification = {
    google: "발급받은_토큰"
  };
</script>
```

메타 태그 검증은 보통 홈(`/`)에만 있으면 충분합니다.

## HTML 파일 검증 방법

Search Console이 내려주는 파일 이름과 내용을 그대로 루트에 추가하면 됩니다.

예시:

- 파일명: `google1234567890abc.html`
- 파일 내용: `google-site-verification: google1234567890abc.html`

이 저장소는 정적 루트가 그대로 배포되므로 별도 라우팅 작업 없이 루트에 파일만 추가하면 됩니다.

## 인덱싱 정책

- 인덱싱 대상: 루트 페이지, 퀴즈/게임 페이지, `hope-hands` 공개 페이지, `film-camera` 공개 카탈로그/상세 페이지
- 제외 대상: `docs/`, 배포용 404 출력물, `_not-found` 출력물
- 공통 JS/CSS 에셋은 렌더링에 필요하므로 `robots.txt`에서 막지 않습니다.

## 운영 명령

새 페이지를 추가하거나 공개 경로가 바뀌면 아래 명령으로 sitemap을 다시 생성합니다.

```bash
python3 scripts/generate-sitemap.py
```

배포 전 확인 경로:

- `https://hdh7485.github.io/robots.txt`
- `https://hdh7485.github.io/sitemap.xml`
