import Link from 'next/link';
import styles from './Footer.module.css';

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles.container}>
        <div className={styles.grid}>
          <div className={styles.brandCol}>
            <Link href="/" className={styles.logo}>
              모두의<span className={styles.logoAccent}>AI</span>
            </Link>
            <p className={styles.brandDesc}>
              누구나 AI를 이해하고 활용할 수 있는 세상을 만듭니다.
              비영리 사단법인 모두의AI.
            </p>
          </div>

          <div>
            <h4 className={styles.columnTitle}>소개</h4>
            <ul className={styles.linkList}>
              <li><Link href="/about">비전과 미션</Link></li>
              <li><Link href="/about">운영진</Link></li>
              <li><Link href="/about">연혁</Link></li>
            </ul>
          </div>

          <div>
            <h4 className={styles.columnTitle}>교육</h4>
            <ul className={styles.linkList}>
              <li><Link href="/academy">배움터</Link></li>
              <li><Link href="/lab">실험실</Link></li>
              <li><Link href="/showcase">쇼케이스</Link></li>
            </ul>
          </div>

          <div>
            <h4 className={styles.columnTitle}>참여</h4>
            <ul className={styles.linkList}>
              <li><Link href="/community">커뮤니티</Link></li>
              <li><Link href="/signup">회원가입</Link></li>
              <li><Link href="/about">후원하기</Link></li>
            </ul>
          </div>

          <div>
            <h4 className={styles.columnTitle}>법적 고지</h4>
            <ul className={styles.linkList}>
              <li><Link href="/privacy">개인정보처리방침</Link></li>
              <li><Link href="/terms">이용약관</Link></li>
            </ul>
          </div>
        </div>

        <div className={styles.bottom}>
          <p className={styles.copyright}>2025 모두의AI. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
