# 개인 웹사이트 - 이광훈(Lee Kwanghun)

모던하고 심플한 디자인의 개인 포트폴리오/소개 웹사이트입니다.

## 📋 포함 정보

- **기본 정보**: 이름, 소속(인천대학교 도시건축학부 건축공학전공, 건설경영 및 관리 연구실)
- **자격증**: TOEIC 725, 한국사 2급, 전산응용건축제도기능사
- **봉사활동**: WFK 49기 청년봉사단, 제11기 INU학생사회공헌단
- **취미**: 축구, 헬스, 게임
- **연락처**: 난독화된 전화번호 및 이메일 (JavaScript로 처리)

## 🎨 디자인

- **색상**: 모노톤(화이트/그레이/블랙) + 블루 포인트 컬러
- **레이아웃**: 단일 페이지(원페이지 스크롤)
- **반응형**: 모바일(480px), 태블릿(768px), 데스크톱 대응

## 🛠 기술 스택

- **HTML5**: 시맨틱 마크업
- **CSS3**: Flexbox/Grid 기반 레이아웃, 애니메이션, CSS 변수
- **JavaScript**: 네비게이션, 메뉴 토글, 연락처 정보 난독화

*프레임워크나 빌드 도구 없이 순수 정적 파일로 구성*

## 📁 파일 구조

```
/
├── index.html           # 메인 페이지
├── css/
│   └── style.css        # 전체 스타일 (반응형 포함)
├── js/
│   └── main.js          # 상호작용 로직
└── README.md            # 이 파일
```

## 🚀 배포 (GitHub Pages)

### 1단계: GitHub 저장소 생성

**개인 사이트 배포 (username.github.io)**
```bash
# 저장소명: <your-username>.github.io
# (예: kwanghun1081.github.io)
```

**프로젝트 사이트 배포 (프로젝트 페이지)**
```bash
# 저장소명: 임의로 설정 가능
# (예: portfolio)
```

### 2단계: 원격 저장소 연결 및 푸시

개인 사이트 배포:
```bash
git remote add origin https://github.com/<your-username>/<your-username>.github.io.git
git branch -M main
git push -u origin main
```

프로젝트 사이트 배포:
```bash
git remote add origin https://github.com/<your-username>/<project-name>.git
git branch -M main
git push -u origin main
```

### 3단계: GitHub Pages 활성화

GitHub 저장소 Settings → Pages → 
- **Source**: Deploy from a branch
- **Branch**: main, /(root) 선택 → Save

### 4단계: 접속 확인

몇 분 후 다음 URL에서 확인 가능:
- **개인 사이트**: `https://<your-username>.github.io`
- **프로젝트 사이트**: `https://<your-username>.github.io/<project-name>`

## ✅ 검증 항목

로컬에서 테스트 시 확인 사항:

1. **로컬 실행**
   ```bash
   python3 -m http.server 8000
   # http://localhost:8000 에서 확인
   ```

2. **기능 검증**
   - [ ] 네비게이션 클릭 시 각 섹션으로 부드럽게 스크롤
   - [ ] 모바일/태블릿/데스크톱에서 반응형 레이아웃 정상 작동
   - [ ] 연락처 섹션에서 전화번호/이메일 정상 표시
   - [ ] 브라우저 콘솔에서 에러 없음

3. **보안 검증**
   - [ ] 페이지 소스 보기에서 원본 전화번호/이메일 노출 안 됨
   - [ ] 연락처는 JavaScript로만 렌더링

## 🎯 커스터마이징

### 색상 변경
`css/style.css`의 `:root` 섹션에서 CSS 변수 수정:
```css
:root {
    --color-accent: #0066cc; /* 포인트 컬러 변경 */
    --color-text: #1a1a1a;   /* 텍스트 색상 */
    --color-bg: #ffffff;     /* 배경색 */
}
```

### 콘텐츠 수정
`index.html`의 해당 섹션 텍스트 수정 후 저장

### 연락처 정보 변경
`js/main.js`의 `phoneParts`와 `emailParts` 배열 수정:
```javascript
const phoneParts = ['010', '1234', '5678']; // 새 번호
const emailParts = ['newemail', 'example.com']; // 새 이메일
```

## 📝 라이센스

개인 포트폴리오 웹사이트

---

**생성일**: 2026-07-03  
**작성자**: 이광훈(Lee Kwanghun)
