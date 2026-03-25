"use client";

import React, { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import styles from '../Write.module.css';
import { CommunityService } from '@/services/community';
import { useAuth } from '@/context/AuthContext';

export default function WritePage() {
  const router = useRouter();
  const { user, loading } = useAuth();
  
  const [category, setCategory] = useState('자유');
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);

  useEffect(() => {
    if (!loading && !user) {
      alert("로그인이 필요한 서비스입니다.");
      router.push('/login');
    }
  }, [user, loading, router]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!title || !content) {
      alert('제목과 내용을 모두 입력해주세요.');
      return;
    }

    if (!user) return;

    setIsSubmitting(true);
    try {
      await CommunityService.createPost({
        title,
        content,
        category,
        authorId: user.uid,
        authorName: user.displayName || user.email?.split('@')[0] || '익명',
        authorAvatar: user.photoURL || undefined
      });
      
      alert('게시글이 등록되었습니다!');
      router.push('/community');
    } catch (error) {
      console.error(error);
      alert('글 작성 중 오류가 발생했습니다. (Firebase 설정을 확인해주세요)');
    } finally {
      setIsSubmitting(false);
    }
  };

  if (loading || !user) return null; // Or a loading spinner

  return (
    <main>
      <Navbar />
      
      <div style={{ padding: '120px 0 100px', background: 'var(--bg-main)', minHeight: '100vh' }}>
        <div className="container">
          <div className={styles.editorContainer}>
            <h1 style={{ marginBottom: '30px', fontSize: '1.8rem' }}>📝 글쓰기</h1>
            
            <form onSubmit={handleSubmit}>
              <div className={styles.inputGroup}>
                <label className={styles.label}>카테고리</label>
                <select 
                  className={styles.select}
                  value={category}
                  onChange={(e) => setCategory(e.target.value)}
                >
                  <option value="자유">자유</option>
                  <option value="질문">질문</option>
                  <option value="팀원모집">팀원모집</option>
                  <option value="팁/노하우">팁/노하우</option>
                </select>
              </div>

              <div className={styles.inputGroup}>
                <label className={styles.label}>제목</label>
                <input 
                  type="text" 
                  placeholder="제목을 입력하세요"
                  className={styles.input}
                  value={title}
                  onChange={(e) => setTitle(e.target.value)}
                />
              </div>

              <div className={styles.inputGroup}>
                <label className={styles.label}>내용</label>
                <textarea 
                  placeholder="내용을 자유롭게 작성해주세요. (마크다운 지원 예정)"
                  className={styles.textarea}
                  value={content}
                  onChange={(e) => setContent(e.target.value)}
                />
              </div>

              <div className={styles.actions}>
                <button 
                  type="button" 
                  className={styles.cancelBtn}
                  onClick={() => router.back()}
                  disabled={isSubmitting}
                >
                  취소
                </button>
                <button type="submit" className={styles.submitBtn} disabled={isSubmitting}>
                  {isSubmitting ? '등록 중...' : '등록하기'}
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>

      <Footer />
    </main>
  );
}
