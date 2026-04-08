import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import styles from './Academy.module.css';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: "배움터 - 모두의AI",
  description: "AI 게임 개발을 위한 엄선된 강좌와 꿀팁을 만나보세요.",
};

const LECTURES = [
  {
    id: 1,
    title: "AI로 게임 캐릭터 만들기 10분 컷! (미드저니 기초)",
    desc: "복잡한 그림 실력 없이도 나만의 캐릭터를 만들기하는 방법을 알려드립니다.",
    tags: ["아트", "미드저니", "초급"],
    thumb: "🎨",
    color: "#ff6b6b"
  },
  {
    id: 2,
    title: "ChatGPT로 게임 스토리 짜는 법",
    desc: "흥미진진한 세계관과 대사, 이제 AI 작가와 함께 1초 만에 써보세요.",
    tags: ["기획", "ChatGPT", "초급"],
    thumb: "📝",
    color: "#4ecdc4"
  },
  {
    id: 3,
    title: "코딩 1도 몰라도 게임 만드는 법 (Cursor AI)",
    desc: "지금 보고 계신 이 웹사이트도 AI와 만들었다면 믿으시겠어요?",
    tags: ["코딩", "Cursor", "중급"],
    thumb: "💻",
    color: "#4e44e9"
  },
  {
    id: 4,
    title: "Suno AI로 웅장한 배경음악 만들기",
    desc: "작곡 공부 없이 내 게임에 딱 맞는 OST를 만드는 비법 공개!",
    tags: ["사운드", "Suno", "초급"],
    thumb: "🎵",
    color: "#a06cd5"
  },
  {
    id: 5,
    title: "유니티 + AI 에셋 활용 실전 강좌",
    desc: "만들기된 AI 리소스를 유니티 엔진에 실제로 적용하고 움직이는 방법.",
    tags: ["개발", "Unity", "고급"],
    thumb: "🎮",
    color: "#2ecc71"
  }
];

export default function AcademyPage() {
  return (
    <main>
      <Navbar />
      
      <div className={styles.container}>
        <div className={styles.header}>
          <h1 className={styles.title}>🌱 새싹 배움터</h1>
          <p className={styles.subtitle}>
            AI 게임 개발, 무엇부터 시작해야 할지 막막하다면?<br/>
            엄선된 꿀팁 강좌들을 만나보세요.
          </p>
        </div>

        <div className={styles.grid}>
          {LECTURES.map((lec) => (
            <div key={lec.id} className={styles.card}>
              <div className={styles.thumbnail} style={{ backgroundColor: lec.color }}>
                {lec.thumb}
                <div className={styles.playIcon}>▶</div>
              </div>
              <div className={styles.content}>
                <div className={styles.tags}>
                  {lec.tags.map(tag => (
                    <span key={tag} className={styles.tag}>{tag}</span>
                  ))}
                </div>
                <h3 className={styles.cardTitle}>{lec.title}</h3>
                <p className={styles.desc}>{lec.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      <Footer />
    </main>
  );
}
