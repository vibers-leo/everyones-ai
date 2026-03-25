"use client";

import React, { useState } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { createUserWithEmailAndPassword, updateProfile } from 'firebase/auth';
import { auth } from '@/lib/firebase';
import Navbar from "@/components/layout/Navbar";
import styles from './Signup.module.css';

export default function SignupPage() {
  const router = useRouter();
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  const handleSignup = async (e: React.FormEvent) => {
    e.preventDefault();
    setError('');
    setLoading(true);

    try {
      const userCredential = await createUserWithEmailAndPassword(auth, email, password);
      // Update profile name
      if (name) {
        await updateProfile(userCredential.user, {
          displayName: name
        });
      }
      alert("환영합니다! 회원가입이 완료되었습니다.");
      router.push('/'); // Redirect to home
    } catch (err: any) {
      console.error(err);
      if (err.code === 'auth/email-already-in-use') {
        setError('이미 사용 중인 이메일입니다.');
      } else if (err.code === 'auth/weak-password') {
        setError('비밀번호는 6자리 이상이어야 합니다.');
      } else {
        setError('회원가입 중 오류가 발생했습니다. 다시 시도해주세요.');
      }
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      <Navbar />
      <div className={styles.container}>
        <div className={styles.loginCard}>
          <div className={styles.iconWrapper}>📝</div>
          <h1 className={styles.title}>회원가입</h1>
          <p className={styles.subtitle}>
            모두의AI 멤버가 되어<br/>
            상상력을 마음껏 펼쳐보세요!
          </p>

          <form onSubmit={handleSignup}>
            <div className={styles.formGroup}>
              <label className={styles.label}>이름 (닉네임)</label>
              <input 
                type="text" 
                placeholder="홍길동"
                className={styles.input}
                value={name}
                onChange={(e) => setName(e.target.value)}
                required
              />
            </div>

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
                placeholder="6자리 이상 입력해주세요"
                className={styles.input}
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
                minLength={6}
              />
            </div>

            {error && <p style={{color: 'red', marginBottom: '10px', fontSize: '0.9rem'}}>{error}</p>}

            <button type="submit" className={`btn btn-primary ${styles.submitBtn}`} disabled={loading}>
              {loading ? '가입 중...' : '가입하기'}
            </button>
          </form>

          <p style={{ marginTop: '30px', fontSize: '0.9rem', color: 'var(--text-muted)' }}>
            이미 계정이 있으신가요? <Link href="/login" style={{ color: 'var(--primary)', fontWeight: 'bold', marginLeft: '4px' }}>로그인</Link>
          </p>
        </div>
      </div>
    </>
  );
}
