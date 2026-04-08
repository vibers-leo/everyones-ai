"use client";

import React, { useEffect, useState } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import styles from '../PostDetail.module.css';
import { CommunityService } from '@/services/community';
import { Post } from '@/types';
import { useAuth } from '@/context/AuthContext';

import CommentsSection from "@/components/community/CommentsSection";

function formatDate(timestamp: number) {
  return new Date(timestamp).toLocaleString('ko-KR', {
    year: 'numeric', 
    month: 'numeric', 
    day: 'numeric',
    hour: '2-digit', 
    minute: '2-digit'
  });
}

export default function PostDetailPage({ params }: { params: { id: string } }) {
  const router = useRouter();
  const { user } = useAuth();
  const [post, setPost] = useState<Post | null>(null);
  const [loading, setLoading] = useState(true);
  const [likes, setLikes] = useState(0);
  const [hasLiked, setHasLiked] = useState(false);

  useEffect(() => {
    const fetchPost = async () => {
      try {
        const data = await CommunityService.getPostById(params.id);
        if (data) {
          setPost(data);
          setLikes(data.likes || 0);
        }
      } catch (error) {
        console.error("Failed to fetch post", error);
      } finally {
        setLoading(false);
      }
    };

    fetchPost();
  }, [params.id]);

  useEffect(() => {
    if (user && post) {
      CommunityService.hasLiked(params.id, user.uid).then(setHasLiked);
    }
  }, [user, post, params.id]);

  const handleDelete = async () => {
    if (!confirm("정말 이 글을 없애기하시겠습니까?")) return;
    
    try {
      await CommunityService.deletePost(params.id);
      alert("없애기되었습니다.");
      router.push('/community');
    } catch (error) {
      console.error("Delete failed", error);
      alert("없애기 중 오류가 발생했습니다.");
    }
  };

  const handleLike = async () => {
    if (!user) {
      alert("로그인이 필요합니다.");
      return;
    }
    
    // Optimistic update
    const newHasLiked = !hasLiked;
    setHasLiked(newHasLiked);
    setLikes(prev => newHasLiked ? prev + 1 : prev - 1);

    try {
      await CommunityService.toggleLike(params.id, user.uid);
    } catch (e) {
      console.error(e);
      // Revert if failed
      setHasLiked(!newHasLiked);
      setLikes(prev => newHasLiked ? prev - 1 : prev + 1);
    }
  };

  if (loading) return <div style={{ padding: '100px', textAlign: 'center' }}>로딩 중...</div>;
  if (!post) return <div style={{ padding: '100px', textAlign: 'center' }}>글을 찾을 수 없습니다. 😢</div>;

  const isAuthor = user?.uid === post.authorId;

  return (
    <main>
      <Navbar />
      
      <div className={styles.container}>
        <article className={styles.postView}>
          <div className={styles.header}>
            <span className={styles.category}>{post.category}</span>
            <h1 className={styles.title}>{post.title}</h1>
            
            <div className={styles.meta}>
              <div className={styles.author}>
                <div className={styles.authorAvatar}>👑</div>
                {post.authorName}
              </div>
              <span>|</span>
              <span>{formatDate(post.createdAt)}</span>
              <span>|</span>
              <span>조회 {post.views}</span>
            </div>
          </div>

          <div className={styles.content}>
            {post.content}
          </div>

          <div className={styles.footer}>
             <Link href="/community" className={styles.btn}>
               ⬅ 목록으로
             </Link>
             
             <div style={{ display: 'flex', gap: '10px' }}>
                {isAuthor && (
                  <button 
                    onClick={handleDelete}
                    className={styles.btn} 
                    style={{ color: 'red', background: '#fff0f0' }}
                  >
                    🗑️ 없애기
                  </button>
                )}
                <button 
                  className={styles.btn} 
                  onClick={handleLike}
                  style={hasLiked ? { color: '#ff6b6b', background: '#fff0f0', borderColor: '#ff6b6b' } : {}}
                >
                  {hasLiked ? '❤️' : '🤍'} 좋아요 {likes}
                </button>
             </div>
          </div>
          
          <CommentsSection postId={params.id} />
        </article>
      </div>

      <Footer />
    </main>
  );
}
