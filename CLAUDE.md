## 전략 문서 (개발 전 반드시 숙지)
- **전략 진단 리포트**: `data/STRATEGY_ANALYSIS.md`
- **PM 공통 지침**: 맥미니 루트 `pm.md`

### 전략 핵심 요약
- 비영리 명분은 좋으나 강의 콘텐츠 부실 + 배포 미완료 + 실질 운영자 부재로 성공 불가능
- Q2 생존 조건: 1) 도메인 확보 및 Vercel 배포 2) 강의 3개 완성 및 YouTube 배포 3) 200명 외부 사용자 초대
- Beachhead(고등학생/대학생)의 Burning Pain과 WTP 모두 낮음 → "초급자용 AI 게임 제작 배움터" 포지셔닝 명확화 필수
- 월 운영비 약 ₩750만(강의 제작 ₩500만 포함) → 스폰서(AI 기업) + 도네이션 + Google AdSense로 조달 필요

---

# 모두의AI (Everyone's AI)

## 프로젝트 개요
누구나 AI를 활용해 게임을 만들 수 있도록 돕는 비영리 커뮤니티 플랫폼.
핵심 가치: Easy (쉬움), Fun (재미), Together (함께).

## 기술 스택
- Framework: Next.js 16 (App Router)
- Language: TypeScript
- Styling: CSS Modules + globals.css (커스텀 CSS 변수 기반, Tailwind 미사용)
- Auth/DB/Storage: Firebase
- 상태관리: React Context (AuthContext, ThemeContext)
- Package Manager: bun

## 주요 라우트

| 경로 | 설명 |
|------|------|
| `/` | 랜딩 페이지 |
| `/academy` | 배움터 — AI 게임 제작 강의 |
| `/lab` | 실험실 — AI 도구 체험 |
| `/community` | 커뮤니티 게시판 (글 목록/작성/상세) |
| `/showcase` | 쇼케이스 — 사용자 게임 갤러리 |
| `/about` | 소개 페이지 |
| `/login` | 로그인 |
| `/signup` | 회원가입 |
| `/mypage` | 마이페이지 |

## 파일 구조

```
src/
├── app/
│   ├── globals.css          # 전역 스타일 (CSS 변수, 다크모드)
│   ├── layout.tsx           # 루트 레이아웃 (AuthProvider + ThemeProvider)
│   ├── page.tsx             # 랜딩
│   ├── academy/             # 배움터
│   ├── lab/                 # 실험실
│   ├── community/           # 커뮤니티
│   │   ├── page.tsx         # 게시판 목록
│   │   ├── write/           # 글 작성
│   │   └── [id]/            # 게시글 상세
│   ├── showcase/            # 쇼케이스
│   ├── about/               # 소개
│   ├── login/               # 로그인
│   ├── signup/              # 회원가입
│   └── mypage/              # 마이페이지
├── components/
│   ├── landing/             # 랜딩 페이지 섹션 컴포넌트
│   ├── layout/              # Navbar, Footer, ThemeToggle
│   ├── lab/                 # 실험실 컴포넌트
│   ├── about/               # 소개 컴포넌트
│   └── community/           # 커뮤니티 컴포넌트
├── context/
│   ├── AuthContext.tsx       # Firebase Auth 상태 관리
│   └── ThemeContext.tsx      # 다크/라이트 테마 전환
├── lib/
│   └── firebase.ts          # Firebase 초기화
├── services/
│   └── community.ts         # Firestore 커뮤니티 CRUD
└── types/                   # 타입 정의
```

## 개발 현황

Phase 1 (퍼블리싱) 완료. Phase 2 (Firebase 인증 + Firestore 연동) 대기 중.
상세 로드맵: [IMPLEMENTATION_PLAN.md](./IMPLEMENTATION_PLAN.md) 참조.

---

## 개발 규칙

### 코드 스타일
- CSS Modules 사용 (컴포넌트별 `.module.css`)
- 전역 스타일은 `globals.css`의 CSS 변수 활용
- 한글 우선: 모든 UI 텍스트와 주석은 한국어
- TypeScript strict mode

### 디자인 준수
- 다크모드 지원 (`[data-theme="dark"]`)
- 컬러 시스템: CSS 변수 기반 (DESIGN_GUIDE.md 참조)
- 폰트: Inter (시스템 sans-serif 폴백)

### Git 규칙
- 커밋 메시지: 한글 (feat:, fix:, refactor:, chore: 접두사), [TCC] 태그
- `git add .` 사용 금지 — 항상 특정 파일 지정

## 주요 명령어

```bash
bun install                                    # 의존성 설치 (루트에서)
bun run dev --filter=@vibers/everyones-ai      # 개발 서버
bun run build --filter=@vibers/everyones-ai    # 빌드
```

## AI Recipe 이미지 API

이 프로젝트는 **AI Recipe 중앙 이미지 서비스**를 사용합니다.

### 사용 가능한 함수

```typescript
import { searchStockImage, generateAIImage } from '@/lib/ai-recipe-client';
```

### Stock Image 검색
```typescript
const image = await searchStockImage('AI game development colorful', {
  orientation: 'landscape',
  size: 'medium',
});
// → { url, provider, alt, photographer, ... }
```

### AI 이미지 생성
```typescript
const image = await generateAIImage('fun AI-generated game screenshot, pixel art style colorful', {
  size: 'medium',
  provider: 'auto',
});
// → { url, prompt, provider }
```

### 주요 용도
- AI 도구 체험 이미지
- 게임 쇼케이스 썸네일
- 배움터/실험실 콘텐츠 이미지

### 주의사항
- Server Action이나 API Route에서만 사용 (API 키 보호)
- Rate Limit: 1000회/일
- AI Recipe 서버 실행 필요: http://localhost:3300

## 상위 브랜드
- 회사: 계발자들 (Vibers)
- 모노레포: /Users/juuuno/Desktop/macminim4/dev/nextjs
