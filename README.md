# 주윤희 · 포트폴리오 (React + Vite)

데이터 · 자바 개발자 포트폴리오. React 18 + Vite로 빌드됩니다.

## 로컬에서 실행

```bash
npm install      # 처음 한 번만 (의존성 설치)
npm run dev      # 개발 서버 (http://localhost:5173)
npm run build    # 배포용 빌드 → dist/
npm run preview  # 빌드 결과 미리보기
```

> Node.js 18 이상이 필요합니다. (https://nodejs.org 에서 LTS 설치)

## 폴더 구조

```
react-portfolio/
├─ index.html          ← Vite 진입 HTML (폰트 link 포함)
├─ package.json
├─ vite.config.js
├─ public/
│  └─ assets/          ← 이미지·이력서 PDF (그대로 /assets/... 로 서빙)
└─ src/
   ├─ main.jsx         ← React 진입점
   ├─ App.jsx          ← 포트폴리오 전체 컴포넌트
   └─ index.css        ← 전역 스타일 · 스크롤 애니메이션
```

## GitHub + Vercel 자동 배포

1. 이 폴더를 새 GitHub 리포지토리에 올립니다.
   ```bash
   git init
   git add .
   git commit -m "React portfolio"
   git branch -M main
   git remote add origin https://github.com/<아이디>/<리포>.git
   git push -u origin main
   ```
2. vercel.com → **Add New → Project** → 이 리포 **Import**.
3. Vercel이 Vite를 자동 감지합니다. 설정 그대로 **Deploy**.
   - Framework Preset: **Vite**
   - Build Command: `npm run build`
   - Output Directory: `dist`
4. 이후 `main` 브랜치에 push할 때마다 자동 재배포됩니다.

## 내용 수정

- 텍스트·프로젝트·경력: `src/App.jsx`
- 색상·폰트·애니메이션: `src/index.css`
- 이미지·이력서 교체: `public/assets/` 안의 파일을 같은 이름으로 교체
