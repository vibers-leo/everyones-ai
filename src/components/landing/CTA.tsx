import Link from 'next/link';
import styles from './CTA.module.css';

const CTA = () => {
  return (
    <section className={styles.section}>
      <div className={styles.container}>
        <div className={styles.card}>
          <span className={styles.label}>함께하기</span>
          <h2 className={styles.title}>
            AI 교육의 새로운 기준,
            <br />
            모두의AI와 시작하세요
          </h2>
          <p className={styles.description}>
            누구에게나 열린 비영리 커뮤니티에서
            AI를 배우고, 만들고, 나누는 경험을 함께 하세요.
          </p>
          <div className={styles.actions}>
            <Link href="/signup" className="btn btn-accent">
              무료 회원가입
            </Link>
            <Link href="/community" className="btn btn-secondary">
              커뮤니티 둘러보기
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTA;
