# 모두의AI 디자인 시스템

## 색상 시스템

### 라이트 모드 (기본)

| 토큰 | 값 | 용도 |
|------|------|------|
| `--primary` | `#4E44E9` | 메인 퍼플/블루 — 버튼, 강조 |
| `--primary-hover` | `#3B33D0` | Primary 호버 상태 |
| `--secondary` | `#00D2B6` | 민트/틸 — 친근한 기술 느낌 |
| `--accent` | `#FF8A5B` | 따뜻한 오렌지 — 창의성 |
| `--bg-main` | `#F8FAFF` | 페이지 배경 |
| `--bg-card` | `#FFFFFF` | 카드 배경 |
| `--bg-glass` | `rgba(255,255,255,0.7)` | 글래스모피즘 배경 |
| `--text-main` | `#1A1F36` | 주요 텍스트 |
| `--text-muted` | `#64748B` | 보조 텍스트 |
| `--text-light` | `#FFFFFF` | 밝은 배경 위 텍스트 |

### 다크 모드 (`[data-theme="dark"]`)

| 토큰 | 값 | 용도 |
|------|------|------|
| `--bg-main` | `#0F111A` | 페이지 배경 |
| `--bg-card` | `#1E2130` | 카드 배경 |
| `--bg-glass` | `rgba(30,33,48,0.7)` | 글래스모피즘 배경 |
| `--text-main` | `#F1F5F9` | 주요 텍스트 |
| `--text-muted` | `#94A3B8` | 보조 텍스트 |

---

## 타이포그래피

### 폰트
```css
font-family: "Inter", -apple-system, BlinkMacSystemFont, sans-serif;
```

### 제목 계층

| 레벨 | 크기 | 모바일 | 속성 |
|------|------|--------|------|
| H1 | `3.5rem` (56px) | `2.5rem` (40px) | `font-weight: 700; line-height: 1.2; letter-spacing: -0.02em` |
| H2 | `2.5rem` (40px) | `2rem` (32px) | `font-weight: 700; line-height: 1.2; margin-bottom: 20px` |
| H3 | `1.75rem` (28px) | — | `font-weight: 700; line-height: 1.2; margin-bottom: 16px` |

### 본문
```css
p {
  font-size: 1.1rem;    /* 약 17.6px */
  color: var(--text-muted);
  line-height: 1.6;
}
```

---

## 레이아웃

### 컨테이너
```css
max-width: 1200px;    /* var(--max-width) */
padding: 0 20px;
margin: 0 auto;
```

### 헤더
```css
height: 70px;         /* var(--header-height) */
```

### 섹션 여백
```css
.section-padding {
  padding: 80px 0;
}
```

---

## 라운드 시스템

| 토큰 | 값 | 용도 |
|------|------|------|
| `--radius-sm` | `8px` | 작은 요소 |
| `--radius-md` | `16px` | 카드 |
| `--radius-lg` | `24px` | 큰 카드/모달 |
| `--radius-full` | `9999px` | 버튼 (pill 형태) |

---

## 그림자 시스템

| 토큰 | 값 |
|------|------|
| `--shadow-sm` | `0 2px 4px rgba(0,0,0,0.05)` |
| `--shadow-md` | `0 4px 12px rgba(78,68,233,0.1)` — 퍼플 틴트 |
| `--shadow-lg` | `0 10px 25px rgba(78,68,233,0.15)` — 퍼플 틴트 |

---

## 버튼 스타일

### Primary 버튼
```css
.btn-primary {
  background-color: var(--primary);    /* #4E44E9 */
  color: white;
  padding: 12px 24px;
  border-radius: 9999px;               /* pill */
  font-weight: 600;
  box-shadow: var(--shadow-md);
}
/* hover: translateY(-2px) + shadow-lg */
```

### Secondary 버튼
```css
.btn-secondary {
  background-color: white;
  color: var(--primary);
  border: 2px solid var(--primary);
  padding: 12px 24px;
  border-radius: 9999px;
}
/* hover: background #f0f3ff */
```

---

## 반응형 브레이크포인트

```css
@media (max-width: 768px) {
  /* 모바일 — H1, H2 축소 */
}
```

---

## 체크리스트

모든 페이지/컴포넌트에서 준수:

- [ ] 컨테이너: `max-width: 1200px`, `padding: 0 20px`
- [ ] 색상: CSS 변수 사용 (하드코딩 금지)
- [ ] 다크모드: `[data-theme="dark"]` 대응
- [ ] 버튼: `--radius-full` (pill) 스타일
- [ ] 그림자: 퍼플 틴트 적용 (`--shadow-md`, `--shadow-lg`)
- [ ] 섹션 간격: `padding: 80px 0`
