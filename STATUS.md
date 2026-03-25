# 모두의AI — 프로젝트 현황

> 최종 업데이트: 2026-03-24 by [TCC]
> 상태: Phase 1 퍼블리싱 완료, Phase 2 (Firebase 연동) 대기

## 현재 상태
- [x] Next.js 16 프로젝트 초기 세팅
- [x] 디자인 시스템 구축 (CSS 변수, 다크모드)
- [x] 주요 페이지 퍼블리싱 (Home, About, Lab, Community, Showcase)
- [x] 반응형 Navbar 및 라우팅 구조
- [x] 로그인/회원가입 UI
- [x] 모노레포 통합 (@vibers/everyones-ai)
- [x] 빌드 통과
- [ ] Firebase Auth 실제 연동 (현재 UI만 존재)
- [ ] Firestore 커뮤니티 CRUD 연동
- [ ] 게시글 댓글/좋아요
- [ ] 마이페이지 기능
- [ ] 배움터 유튜브 강의 임베딩
- [ ] 쇼케이스 업로드 기능
- [ ] git remote 연결

## 기술 스택
| 항목 | 내용 |
|------|------|
| Framework | Next.js 16 (App Router) |
| Language | TypeScript |
| Styling | CSS Modules + globals.css |
| Backend | Firebase (Auth, Firestore, Storage) |
| Package | @vibers/everyones-ai |

## 라우트 현황
| 라우트 | 상태 | 비고 |
|--------|------|------|
| `/` (랜딩) | 퍼블리싱 완료 | 랜딩 컴포넌트 |
| `/academy` | 퍼블리싱 완료 | 강의 콘텐츠 미연동 |
| `/lab` | 퍼블리싱 완료 | AI 도구 체험 |
| `/community` | 퍼블리싱 완료 | Firestore 연동 필요 |
| `/showcase` | 퍼블리싱 완료 | 업로드 기능 미구현 |
| `/about` | 퍼블리싱 완료 | |
| `/login` | 퍼블리싱 완료 | Firebase Auth 연동 필요 |
| `/signup` | 퍼블리싱 완료 | Firebase Auth 연동 필요 |
| `/mypage` | 퍼블리싱 완료 | 프로필 기능 미구현 |

## 다음 액션
- [ ] Phase 2: Firebase Auth 실제 연동 (이메일/Google 로그인)
- [ ] Phase 2: Firestore 커뮤니티 게시글 CRUD
- [ ] Phase 3: 댓글/좋아요, 마이페이지
- [ ] Phase 4: 배움터 강의 임베딩, 쇼케이스 업로드
- [ ] git remote 생성 및 연결
