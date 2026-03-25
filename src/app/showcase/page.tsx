import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import styles from './Showcase.module.css';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: "명예의 전당 - 모두의AI",
  description: "모두의AI 크리에이터들이 만든 멋진 AI 게임 작품들을 감상하세요.",
};

const PROJECTS = [
  { id: 1, title: "우주 고양이의 모험", maker: "냥냥펀치", emoji: "🐱", color: "#FF9A9E", likes: 124 },
  { id: 2, title: "AI 미궁 탈출", maker: "김코딩", emoji: "🗝️", color: "#FECFEF", likes: 89 },
  { id: 3, title: "슬라임 농장", maker: "젤리조아", emoji: "🟢", color: "#E0F2FE", likes: 256 },
  { id: 4, title: "드래곤 슬레이어", maker: "용사1", emoji: "🐲", color: "#FFE4E1", likes: 45 },
  { id: 5, title: "픽셀 레이싱", maker: "스피드왕", emoji: "🏎️", color: "#F0F3FF", likes: 78 },
  { id: 6, title: "요리조리 타이쿤", maker: "쉐프킴", emoji: "🍳", color: "#FFF3bf", likes: 112 },
  { id: 7, title: "좀비 서바이벌", maker: "생존자", emoji: "🧟", color: "#D3D3D3", likes: 67 },
  { id: 8, title: "마법학교 비밀", maker: "해리퐅", emoji: "🧙", color: "#E6E6FA", likes: 203 },
];

export default function ShowcasePage() {
  return (
    <main>
      <Navbar />
      
      <div className={styles.container}>
        <div className={styles.header}>
          <h1 className={styles.title}>🏆 명예의 전당</h1>
          <p className={styles.subtitle}>
            모두의AI 크리에이터들이 만든 멋진 작품들을 감상해보세요.<br/>
            다음 주인공은 바로 당신입니다!
          </p>
        </div>

        <div className={styles.grid}>
          {PROJECTS.map((project) => (
            <div key={project.id} className={styles.card}>
              <div className={styles.imageArea} style={{ backgroundColor: project.color }}>
                {project.emoji}
                <div className={styles.overlay}>
                  <span className={styles.playBtn}>플레이</span>
                </div>
              </div>
              <div className={styles.info}>
                <h3 className={styles.gameTitle}>{project.title}</h3>
                <div className={styles.maker}>
                  <span>by {project.maker}</span>
                  <span className={styles.likeCount}>❤️ {project.likes}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      <Footer />
    </main>
  );
}
