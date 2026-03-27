import Link from 'next/link';
import styles from './LabPreview.module.css';

const tools = [
  {
    id: 'image',
    name: '이미지 생성',
    desc: '텍스트 설명만으로 AI가 이미지를 만들어줍니다',
    tag: 'Generative',
  },
  {
    id: 'text',
    name: '텍스트 분석',
    desc: '문장의 감정, 요약, 번역을 AI가 처리합니다',
    tag: 'NLP',
  },
  {
    id: 'code',
    name: '코드 어시스턴트',
    desc: '코딩이 처음이어도 AI와 함께 프로그래밍할 수 있습니다',
    tag: 'Code',
  },
  {
    id: 'music',
    name: '음악 생성',
    desc: '분위기와 장르를 선택하면 AI가 음악을 작곡합니다',
    tag: 'Audio',
  },
];

const LabPreview = () => {
  return (
    <section className={styles.section}>
      <div className={styles.container}>
        <div className={styles.inner}>
          <div className={styles.left}>
            <span className={styles.label}>실험실</span>
            <h2 className={styles.title}>
              브라우저에서 바로
              <br />
              AI를 체험하세요
            </h2>
            <p className={styles.subtitle}>
              별도 설치 없이 웹에서 다양한 AI 도구를 직접 사용해볼 수 있습니다.
              실습을 통해 AI의 가능성을 직접 경험하세요.
            </p>
            <Link href="/lab" className="btn btn-accent">
              실험실 입장
            </Link>
          </div>

          <div className={styles.right}>
            {tools.map((tool) => (
              <div key={tool.id} className={styles.toolCard}>
                <div className={styles.toolHeader}>
                  <h4 className={styles.toolName}>{tool.name}</h4>
                  <span className={styles.toolTag}>{tool.tag}</span>
                </div>
                <p className={styles.toolDesc}>{tool.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default LabPreview;
