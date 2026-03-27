"use client";

import React from 'react';
import Link from 'next/link';
import styles from './Navbar.module.css';
import ThemeToggle from './ThemeToggle';
import { useAuth } from '@/context/AuthContext';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);
  const { user, logout } = useAuth();

  return (
    <header className={styles.header}>
      <div className={styles.navContainer}>
        <Link href="/" className={styles.logo}>
          모두의<span className={styles.logoAccent}>AI</span>
        </Link>

        <nav className={styles.nav}>
          <ul className={styles.navLinks}>
            <li><Link href="/about" className={styles.navLink}>소개</Link></li>
            <li><Link href="/academy" className={styles.navLink}>배움터</Link></li>
            <li><Link href="/lab" className={styles.navLink}>실험실</Link></li>
            <li><Link href="/showcase" className={styles.navLink}>쇼케이스</Link></li>
            <li><Link href="/community" className={styles.navLink}>커뮤니티</Link></li>
          </ul>
        </nav>

        <div className={styles.rightArea}>
          <ThemeToggle />
          {user ? (
            <div className={styles.userArea}>
              <span className={styles.userName}>
                {user.displayName || user.email?.split('@')[0]}
              </span>
              <button onClick={() => logout()} className={styles.logoutBtn}>
                로그아웃
              </button>
            </div>
          ) : (
            <Link href="/login" className={styles.loginBtn}>로그인</Link>
          )}
        </div>

        <button
          className={styles.mobileMenuBtn}
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          aria-label="메뉴"
        >
          <span className={`${styles.hamburger} ${isMenuOpen ? styles.active : ''}`} />
        </button>

        <div className={`${styles.mobileMenu} ${isMenuOpen ? styles.open : ''}`}>
          <Link href="/about" className={styles.mobileLink} onClick={() => setIsMenuOpen(false)}>소개</Link>
          <Link href="/academy" className={styles.mobileLink} onClick={() => setIsMenuOpen(false)}>배움터</Link>
          <Link href="/lab" className={styles.mobileLink} onClick={() => setIsMenuOpen(false)}>실험실</Link>
          <Link href="/showcase" className={styles.mobileLink} onClick={() => setIsMenuOpen(false)}>쇼케이스</Link>
          <Link href="/community" className={styles.mobileLink} onClick={() => setIsMenuOpen(false)}>커뮤니티</Link>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
