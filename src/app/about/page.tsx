import React from 'react';
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import styles from "@/components/about/About.module.css";
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: "소개 - 모두의AI",
  description: "누구나 크리에이터가 되는 세상, 모두의AI 협회의 비전과 미션을 소개합니다.",
};

export default function AboutPage() {
  return (
    <main>
      <Navbar />
      
      <div className={styles.section}>
        <div className="container">
          <div className={styles.intro}>
            <h1 className={styles.introTitle}>누구나 크리에이터가 되는 세상</h1>
            <p className={styles.introDesc}>
              모두의AI는 인공지능 기술의 도움으로 누구나 자신만의 세상을 게임으로 표현할 수 있다고 믿습니다.
              우리는 기술의 장벽을 낮추고, 창작의 즐거움을 모두에게 돌려드리기 위해 모였습니다.
            </p>
          </div>

          <div className={styles.missionRow}>
            <div className={styles.missionContent}>
              <h2 className={styles.missionTitle}>Mission</h2>
              <p className={styles.missionText}>
                우리의 미션은 '쉬운 창작'입니다. 복잡한 코딩이나 전문적인 그래픽 툴을 다루지 못해도 상관없습니다.
                AI가 여러분의 손발이 되어, 머릿속 상상을 화면 밖으로 끄집어낼 것입니다.
              </p>
            </div>
            <div className={styles.missionVisual}>
              🚀
            </div>
          </div>

          <div className={`${styles.missionRow} ${styles.reverse}`}>
            <div className={styles.missionContent}>
              <h2 className={styles.missionTitle}>Community</h2>
              <p className={styles.missionText}>
                혼자가 아닙니다. 개발자, 기획자, 아티스트, 그리고 호기심 많은 입문자들이 모여 서로 돕습니다.
                비영리 오픈 커뮤니티로서 우리는 모든 지식과 리소스를 공유합니다.
              </p>
            </div>
            <div className={styles.missionVisual}>
              🤝
            </div>
          </div>

          <div style={{ textAlign: 'center', marginTop: '100px' }}>
             <h2 className={styles.missionTitle}>함께하는 사람들</h2>
             <div className={styles.statsGrid}>
                <div className={styles.statItem}>
                  <span className={styles.statNumber}>1,200+</span>
                  <span className={styles.statLabel}>창작자 회원</span>
                </div>
                <div className={styles.statItem}>
                  <span className={styles.statNumber}>50+</span>
                  <span className={styles.statLabel}>무료 AI 툴 가이드</span>
                </div>
                <div className={styles.statItem}>
                  <span className={styles.statNumber}>12</span>
                  <span className={styles.statLabel}>월간 워크샵</span>
                </div>
                <div className={styles.statItem}>
                  <span className={styles.statNumber}>∞</span>
                  <span className={styles.statLabel}>가능성</span>
                </div>
             </div>
          </div>

        </div>
      </div>

      <Footer />
    </main>
  );
}
