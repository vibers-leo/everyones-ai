"use client";

import React, { useState } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { signInWithEmailAndPassword } from 'firebase/auth';
import { auth } from '@/lib/firebase';
import { useAuth } from '@/context/AuthContext';
import Navbar from "@/components/layout/Navbar";
import styles from './Login.module.css';

export default function LoginPage() {
  const router = useRouter();
  const { googleLogin } = useAuth();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    setError('');
    setLoading(true);

    try {
      await signInWithEmailAndPassword(auth, email, password);
      router.push('/'); // Redirect to home
    } catch (err: any) {
      console.error(err);
      if (err.code === 'auth/invalid-login-credentials' || err.code === 'auth/user-not-found' || err.code === 'auth/wrong-password') {
        setError('이메일 또는 비밀번호가 올바르지 않습니다.');
      } else {
        setError('로그인 중 오류가 발생했습니다.');
      }
    } finally {
      setLoading(false);
    }
  };

  const handleGoogleLogin = async () => {
    try {
      await googleLogin();
      router.push('/');
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <>
      <Navbar />
      <div className={styles.container}>
        <div className={styles.loginCard}>
          <div className={styles.iconWrapper}>👋</div>
          <h1 className={styles.title}>어서오세요!</h1>
          <p className={styles.subtitle}>
            다시 만나서 반가워요.<br/>
            오늘도 멋진 게임을 만들어볼까요?
          </p>

          <form onSubmit={handleLogin}>
            <div className={styles.formGroup}>
              <label className={styles.label}>이메일</label>
              <input 
                type="email" 
                placeholder="hello@everyai.com"
                className={styles.input}
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
            </div>
            
            <div className={styles.formGroup}>
              <label className={styles.label}>비밀번호</label>
              <input 
                type="password" 
                placeholder="비밀번호를 입력해주세요"
                className={styles.input}
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
              />
            </div>

            {error && <p style={{color: 'red', marginBottom: '10px', fontSize: '0.9rem'}}>{error}</p>}

            <button type="submit" className={`btn btn-primary ${styles.submitBtn}`} disabled={loading}>
              {loading ? '로그인 중...' : '로그인하기'}
            </button>
          </form>

          <div className={styles.divider}>
            <span className={styles.dividerSpan}>또는 SNS로 시작하기</span>
          </div>

          <div className={styles.socialLogin}>
            <button className={styles.socialBtn} title="Google Login" onClick={handleGoogleLogin}>G</button>
            <button className={styles.socialBtn} title="Kakao Login" disabled style={{opacity: 0.5, cursor: 'not-allowed'}}>K</button>
            <button className={styles.socialBtn} title="Github Login" disabled style={{opacity: 0.5, cursor: 'not-allowed'}}>🐱</button>
          </div>
          
          <p style={{ marginTop: '20px', fontSize: '0.85rem', color: 'var(--text-muted)' }}>
            <Link href="/forgot-password" style={{ color: 'var(--primary)' }}>비밀번호를 잊으셨나요?</Link>
          </p>
          <p style={{ marginTop: '12px', fontSize: '0.9rem', color: 'var(--text-muted)' }}>
            아직 계정이 없으신가요? <Link href="/signup" style={{ color: 'var(--primary)', fontWeight: 'bold', marginLeft: '4px' }}>회원가입</Link>
          </p>
        </div>
      </div>
    </>
  );
}
