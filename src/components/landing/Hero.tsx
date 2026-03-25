import React from 'react';
import Link from 'next/link';
import styles from './Hero.module.css';

const Hero = () => {
  return (
    <section className={styles.heroSection}>
      <div className={styles.container}>
        <div className={styles.content}>
          <span className={styles.badge}>✨ 누구나 게임 메이커!</span>
          <h1 className={styles.title}>
            상상만 했던 게임,<br />
            <span className={styles.titleHighlight}>AI 친구</span>들과<br />
            현실로 만들어요
          </h1>
          <p className={styles.description}>
            어렵게 코딩하지 마세요. 귀여운 AI 도구들이 도와줄게요.<br/>
            클릭 몇 번으로 나만의 게임 세상이 뚝딱!
          </p>
          <div className={styles.actions}>
            <Link href="/lab" className="btn btn-primary">
              🚀 만들기 시작!
            </Link>
            <Link href="/about" className="btn btn-secondary">
              👀 협회 구경하기
            </Link>
          </div>
        </div>
        
        <div className={styles.visual}>
          {/* Simulated 3D Elements using emojis for "Cute 3D" feel */}
          <div className={styles.mainCharacter}>
            👾
          </div>
          <div className={`${styles.floatingItem} ${styles.item1}`}>🎮</div>
          <div className={`${styles.floatingItem} ${styles.item2}`}>🎲</div>
          <div className={`${styles.floatingItem} ${styles.item3}`}>🧩</div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
