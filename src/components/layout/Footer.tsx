import React from 'react';
import Link from 'next/link';
import styles from './Footer.module.css';

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div className="container">
        <div className={styles.grid}>
          <div className={styles.brandCol}>
            <Link href="/" className={styles.logo}>
              모두의<span>AI</span>
            </Link>
            <p className={styles.brandDesc}>
              누구나 쉽고 즐겁게 AI로 게임을 만드는 세상.
              비영리 사단법인 모두의AI와 함께하세요.
            </p>
          </div>
          
          <div>
            <h4 className={styles.columnTitle}>협회 소개</h4>
            <ul className={styles.linkList}>
              <li><Link href="/about">협회 비전</Link></li>
              <li><Link href="/history">연혁</Link></li>
              <li><Link href="/team">운영진 소개</Link></li>
              <li><Link href="/contact">문의하기</Link></li>
            </ul>
          </div>

          <div>
            <h4 className={styles.columnTitle}>주요 활동</h4>
            <ul className={styles.linkList}>
              <li><Link href="/lab">창작 실험실</Link></li>
              <li><Link href="/academy">AI 아카데미</Link></li>
              <li><Link href="/hackathon">게임톤</Link></li>
              <li><Link href="/cert">인증제도</Link></li>
            </ul>
          </div>

          <div>
            <h4 className={styles.columnTitle}>커뮤니티</h4>
            <ul className={styles.linkList}>
              <li><Link href="/notice">공지사항</Link></li>
              <li><Link href="/forum">자유게시판</Link></li>
              <li><Link href="/qna">질문과 답변</Link></li>
              <li><Link href="/discord">디스코드 입장</Link></li>
            </ul>
          </div>
        </div>

        <div className={styles.bottom}>
          <p>© 2025 Everyone's AI. All rights reserved.</p>
          <div className={styles.socials}>
            <span>Youtube</span>
            <span>Instagram</span>
            <span>Facebook</span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
