"use client";

import React from 'react';
import Link from 'next/link';
import styles from './Navbar.module.css';
import ThemeToggle from './ThemeToggle';
import { useAuth } from '@/context/AuthContext';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);
  const { user, logout } = useAuth(); // Assuming useAuth is exported from context

  return (
    <header className={styles.header}>
      <div className={styles.navContainer}>
        
        {/* Mobile Menu Button */}
        <button 
          className={styles.mobileMenuBtn}
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          {isMenuOpen ? '✕' : '☰'}
        </button>

        <Link href="/" className={styles.logo}>
          모두의<span>AI</span>
        </Link>
        
        {/* Desktop Nav */}
        <nav>
          <ul className={styles.navLinks}>
            <li><Link href="/about" className={styles.navLink}>모두의 소개</Link></li>
            <li><Link href="/lab" className={styles.navLink}>창작 실험실</Link></li>
            <li><Link href="/academy" className={styles.navLink}>배움터</Link></li>
            <li><Link href="/showcase" className={styles.navLink}>쇼케이스</Link></li>
            <li><Link href="/community" className={styles.navLink}>소통방</Link></li>
          </ul>
        </nav>

        {/* Mobile Nav Dropdown */}
        <div className={`${styles.mobileMenu} ${isMenuOpen ? styles.open : ''}`}>
           <Link href="/about" className={styles.mobileLink} onClick={() => setIsMenuOpen(false)}>모두의 소개</Link>
           <Link href="/lab" className={styles.mobileLink} onClick={() => setIsMenuOpen(false)}>창작 실험실</Link>
           <Link href="/academy" className={styles.mobileLink} onClick={() => setIsMenuOpen(false)}>배움터</Link>
           <Link href="/showcase" className={styles.mobileLink} onClick={() => setIsMenuOpen(false)}>쇼케이스</Link>
           <Link href="/community" className={styles.mobileLink} onClick={() => setIsMenuOpen(false)}>소통방</Link>
        </div>

        <div style={{ display: 'flex', alignItems: 'center' }}>
          <ThemeToggle />
          
          {user ? (
             <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                <span style={{ fontSize: '0.9rem', fontWeight: 600 }}>
                   {user.displayName || user.email?.split('@')[0]}님
                </span>
                <button 
                  onClick={() => logout()}
                  className={styles.loginBtn}
                  style={{ background: 'var(--text-muted)', fontSize: '0.8rem', padding: '6px 16px' }}
                >
                  로그아웃
                </button>
             </div>
          ) : (
            <Link href="/login" className={styles.loginBtn}>로그인</Link>
          )}
        </div>
      </div>
    </header>
  );
};

export default Navbar;
