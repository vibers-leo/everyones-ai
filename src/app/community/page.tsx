"use client";

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import styles from './Board.module.css';
import { CommunityService } from '@/services/community';
import { Post } from '@/types';

function formatDate(timestamp: number) {
  return new Date(timestamp).toLocaleDateString('ko-KR', {
    year: 'numeric',
    month: '2-digit',
    day: '2-digit'
  });
}

export default function CommunityPage() {
  const [activeTab, setActiveTab] = useState('ALL');
  const [posts, setPosts] = useState<Post[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchPosts = async () => {
      setLoading(true);
      try {
        const data = await CommunityService.getPosts(activeTab === 'ALL' ? undefined : activeTab);
        setPosts(data);
      } catch (error) {
        console.error("Failed to fetch posts", error);
      } finally {
        setLoading(false);
      }
    };

    fetchPosts();
  }, [activeTab]);

  return (
    <main>
      <Navbar />
      
      <div className={styles.container}>
        <div className={styles.header}>
          <h1 className={styles.title}>🧸 와글와글 소통방</h1>
          <p className={styles.subtitle}>
            혼자 고민하지 마세요.<br/>
            서로의 지식과 경험을 나누며 함께 성장하는 공간입니다.
          </p>
        </div>

        <div className={styles.boardContainer}>
          {/* Tabs */}
          <div className={styles.categoryTabs}>
            {['ALL', '공지', '자유', '질문', '팁/노하우', '팀원모집'].map((tab) => (
              <button 
                key={tab}
                className={`${styles.tabBtn} ${activeTab === tab ? styles.active : ''}`}
                onClick={() => setActiveTab(tab)}
              >
                {tab}
              </button>
            ))}
          </div>

          {/* List */}
          <div className={styles.postList}>
            {loading ? (
              <div style={{ textAlign: 'center', padding: '40px', color: 'var(--text-muted)' }}>
                로딩 중... ⏳
              </div>
            ) : posts.length === 0 ? (
               <div style={{ textAlign: 'center', padding: '60px', color: 'var(--text-muted)' }}>
                 아직 작성된 글이 없어요. 첫 번째 주인공이 되어보세요! 📝
               </div>
            ) : (
              posts.map((post) => (
                <Link href={`/community/${post.id}`} key={post.id} className={styles.postItem}>
                  <div className={styles.postInfo}>
                    <div className={styles.postMeta}>
                      <span className={`${styles.badge} ${post.type === 'notice' ? styles.notice : styles.free}`}>
                        {post.category}
                      </span>
                      <span>{post.authorName}</span>
                      <span>•</span>
                      <span>{formatDate(post.createdAt)}</span>
                    </div>
                    <h3 className={styles.postTitle}>{post.title}</h3>
                  </div>
                  <div className={styles.postRight}>
                    <span>👀 {post.views}</span>
                    <span>💬 {post.commentsCount}</span>
                  </div>
                </Link>
              ))
            )}
          </div>
        </div>
      </div>

      <Link href="/community/write" className={styles.writeBtn} title="글쓰기">
        ✏️
      </Link>

      <Footer />
    </main>
  );
}
