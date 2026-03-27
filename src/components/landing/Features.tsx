import Link from 'next/link';
import styles from './Features.module.css';

const Features = () => {
  return (
    <section className={styles.section}>
      <div className={styles.container}>
        <div className={styles.header}>
          <span className={styles.label}>핵심 기능</span>
          <h2 className={styles.title}>
            AI 교육의 모든 것,
            <br />
            한곳에서 만나보세요
          </h2>
        </div>

        <div className={styles.bento}>
          {/* 큰 카드: 배움터 */}
          <Link href="/academy" className={`${styles.card} ${styles.cardLarge}`}>
            <div className={styles.cardIcon}>
              <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z" />
                <path d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z" />
              </svg>
            </div>
            <h3 className={styles.cardTitle}>AI 배움터</h3>
            <p className={styles.cardDesc}>
              초급부터 고급까지, 단계별 AI 강의를 무료로 수강하세요.
              실습 중심의 커리큘럼으로 실전 역량을 쌓을 수 있습니다.
            </p>
            <span className={styles.cardAction}>강의 둘러보기</span>
          </Link>

          {/* 큰 카드: 실험실 */}
          <Link href="/lab" className={`${styles.card} ${styles.cardLarge}`}>
            <div className={styles.cardIcon}>
              <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M9 3h6v6l3 9H6l3-9V3z" />
                <path d="M9 3h6" />
              </svg>
            </div>
            <h3 className={styles.cardTitle}>AI 실험실</h3>
            <p className={styles.cardDesc}>
              이미지 생성, 텍스트 분석, 코드 작성까지.
              다양한 AI 도구를 브라우저에서 바로 체험하세요.
            </p>
            <span className={styles.cardAction}>도구 체험하기</span>
          </Link>

          {/* 작은 카드들 */}
          <Link href="/community" className={`${styles.card} ${styles.cardSmall}`}>
            <div className={styles.cardIcon}>
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" />
                <circle cx="9" cy="7" r="4" />
                <path d="M23 21v-2a4 4 0 0 0-3-3.87" />
                <path d="M16 3.13a4 4 0 0 1 0 7.75" />
              </svg>
            </div>
            <h3 className={styles.cardTitleSmall}>커뮤니티</h3>
            <p className={styles.cardDescSmall}>함께 배우고 성장하는 학습 공동체</p>
          </Link>

          <Link href="/showcase" className={`${styles.card} ${styles.cardSmall}`}>
            <div className={styles.cardIcon}>
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <rect x="3" y="3" width="18" height="18" rx="2" ry="2" />
                <circle cx="8.5" cy="8.5" r="1.5" />
                <polyline points="21 15 16 10 5 21" />
              </svg>
            </div>
            <h3 className={styles.cardTitleSmall}>쇼케이스</h3>
            <p className={styles.cardDescSmall}>멤버들의 AI 프로젝트 갤러리</p>
          </Link>

          <div className={`${styles.card} ${styles.cardSmall} ${styles.cardAccent}`}>
            <div className={styles.cardIcon}>
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
              </svg>
            </div>
            <h3 className={styles.cardTitleSmall}>완전 무료</h3>
            <p className={styles.cardDescSmall}>비영리 운영, 모든 콘텐츠 무상 제공</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Features;
