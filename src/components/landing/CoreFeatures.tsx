import React from 'react';
import Link from 'next/link';
import styles from './CoreFeatures.module.css';

const CoreFeatures = () => {
  const features = [
    {
      id: 'lab',
      title: '뚝딱 창작실',
      desc: '이미지, 음악, 코딩까지! AI 도구들이 마법처럼 만들어줘요.',
      icon: '🎨',
      link: '/lab',
      className: styles.lab
    },
    {
      id: 'academy',
      title: '새싹 배움터',
      desc: '게임 만들기가 처음인가요? 차근차근 쉽고 재밌게 알려드릴게요.',
      icon: '🌱',
      link: '/academy',
      className: styles.academy
    },
    {
      id: 'community',
      title: '와글와글 소통방',
      desc: '친구들과 함께 만들면 더 재밌어요! 아이디어를 뽐내보세요.',
      icon: '🧸',
      link: '/community',
      className: styles.community
    }
  ];

  return (
    <section className={styles.section}>
      <div className="container">
        <div className={styles.header}>
          <span className={styles.label}>FUN & EASY</span>
          <h2 className={styles.title}>AI와 함께라면 식은 죽 먹기!</h2>
          <p className={styles.subtitle}>
            어려운 기술은 AI에게 맡기고, 여러분은 <br/>
            오직 '즐거움'에만 집중하세요!
          </p>
        </div>

        <div className={styles.grid}>
          {features.map((feature) => (
            <Link key={feature.id} href={feature.link} className={`${styles.card} ${feature.className}`}>
              <div className={styles.iconWrapper}>
                {feature.icon}
              </div>
              <h3 className={styles.cardTitle}>{feature.title}</h3>
              <p className={styles.cardDesc}>{feature.desc}</p>
              <span className={styles.cardLink}>구경하러 가기</span>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CoreFeatures;
