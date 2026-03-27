import Link from 'next/link';
import styles from './Hero.module.css';

const Hero = () => {
  return (
    <section className={styles.hero}>
      <div className={styles.container}>
        <div className={styles.eyebrow}>비영리 AI 교육 커뮤니티</div>
        <h1 className={styles.title}>
          AI를 배우는 가장
          <br />
          <span className={styles.highlight}>쉽고 즐거운</span> 방법
        </h1>
        <p className={styles.description}>
          모두의AI는 누구나 인공지능을 이해하고 활용할 수 있도록
          <br />
          무료 교육과 실습 환경을 제공하는 비영리 커뮤니티입니다.
        </p>
        <div className={styles.actions}>
          <Link href="/academy" className="btn btn-primary">
            무료로 시작하기
          </Link>
          <Link href="/about" className="btn btn-secondary">
            더 알아보기
          </Link>
        </div>
        <div className={styles.stats}>
          <div className={styles.stat}>
            <span className={styles.statNumber}>100+</span>
            <span className={styles.statLabel}>학습 콘텐츠</span>
          </div>
          <div className={styles.statDivider} />
          <div className={styles.stat}>
            <span className={styles.statNumber}>무료</span>
            <span className={styles.statLabel}>모든 교육 과정</span>
          </div>
          <div className={styles.statDivider} />
          <div className={styles.stat}>
            <span className={styles.statNumber}>24/7</span>
            <span className={styles.statLabel}>AI 실습 환경</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
