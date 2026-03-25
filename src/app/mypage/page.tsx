"use client";

import React, { useEffect, useState } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import styles from './Mypage.module.css';
import { useAuth } from '@/context/AuthContext';
import { CommunityService } from '@/services/community';
import { Post } from '@/types';
import { db } from '@/lib/firebase';
import { collection, query, where, getDocs, orderBy } from 'firebase/firestore';

export default function MyPage() {
  const router = useRouter();
  const { user, logout, loading } = useAuth();
  const [myPosts, setMyPosts] = useState<Post[]>([]);
  const [fetching, setFetching] = useState(true);

  useEffect(() => {
    if (!loading && !user) {
      router.push('/login');
    }
  }, [loading, user, router]);

  useEffect(() => {
    if (user) {
      fetchMyPosts();
    }
  }, [user]);

  const fetchMyPosts = async () => {
    if (!user || !db) return;
    
    try {
      const q = query(
        collection(db, "posts"), // Should be exported constant ideally
        where("authorId", "==", user.uid),
        orderBy("createdAt", "desc")
      );
      
      const snapshot = await getDocs(q);
      const posts = snapshot.docs.map(doc => ({ id: doc.id, ...doc.data() } as Post));
      setMyPosts(posts);
    } catch (e) {
      console.error(e);
    } finally {
      setFetching(false);
    }
  };

  if (loading || !user) return null;

  return (
    <main>
      <Navbar />
      
      <div className={styles.container}>
        <div className={styles.profileCard}>
           <div className={styles.avatar}>
             {user.photoURL ? <img src={user.photoURL} alt="pro" style={{width: '100%', height: '100%', borderRadius: '50%'}} /> : '🤠'}
           </div>
           <div className={styles.info}>
             <h1 className={styles.name}>{user.displayName || '이름 없음'}</h1>
             <p className={styles.email}>{user.email}</p>
             <button onClick={() => logout()} className={styles.logoutBtn}>
               로그아웃
             </button>
           </div>
        </div>

        <h2 className={styles.sectionTitle}>내가 쓴 글 ✍️</h2>
        
        <div className={styles.myPosts}>
           {!fetching && myPosts.length === 0 && (
             <p style={{ textAlign: 'center', color: 'var(--text-muted)' }}>작성한 글이 없습니다.</p>
           )}
           
           {myPosts.map(post => (
             <Link href={`/community/${post.id}`} key={post.id} className={styles.postItem}>
               <div>
                 <div className={styles.postTitle}>{post.title}</div>
                 <div className={styles.postDate}>{new Date(post.createdAt).toLocaleDateString()}</div>
               </div>
               <span style={{ fontSize: '0.9rem', color: 'var(--text-muted)' }}>
                 👀 {post.views}
               </span>
             </Link>
           ))}
        </div>
      </div>

      <Footer />
    </main>
  );
}
