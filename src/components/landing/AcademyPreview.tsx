import Link from 'next/link';
import styles from './AcademyPreview.module.css';

const courses = [
  {
    id: 1,
    category: '입문',
    title: 'AI 기초 이해하기',
    description: '인공지능의 개념부터 동작 원리까지, 비전공자도 쉽게 이해할 수 있는 기초 과정',
    lessons: 12,
    duration: '4주',
  },
  {
    id: 2,
    category: '실습',
    title: 'AI로 게임 만들기',
    description: '생성형 AI 도구를 활용해 나만의 게임을 기획하고 제작하는 프로젝트 중심 과정',
    lessons: 8,
    duration: '3주',
  },
  {
    id: 3,
    category: '활용',
    title: '일상 속 AI 활용법',
    description: '글쓰기, 이미지 생성, 데이터 분석 등 일상과 업무에 AI를 적용하는 실전 과정',
    lessons: 10,
    duration: '3주',
  },
];

const AcademyPreview = () => {
  return (
    <section className={styles.section}>
      <div className={styles.container}>
        <div className={styles.header}>
          <div className={styles.headerText}>
            <span className={styles.label}>배움터</span>
            <h2 className={styles.title}>체계적인 AI 교육 과정</h2>
            <p className={styles.subtitle}>
              입문부터 실전까지, 단계별로 설계된 커리큘럼으로
              누구나 AI 역량을 키울 수 있습니다.
            </p>
          </div>
          <Link href="/academy" className="btn btn-secondary">
            전체 과정 보기
          </Link>
        </div>

        <div className={styles.courses}>
          {courses.map((course) => (
            <div key={course.id} className={styles.courseCard}>
              <span className={styles.courseCategory}>{course.category}</span>
              <h3 className={styles.courseTitle}>{course.title}</h3>
              <p className={styles.courseDesc}>{course.description}</p>
              <div className={styles.courseMeta}>
                <span>{course.lessons}개 강의</span>
                <span className={styles.dot} />
                <span>{course.duration} 과정</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AcademyPreview;
