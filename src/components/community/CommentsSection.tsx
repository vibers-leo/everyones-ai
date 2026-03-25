"use client";

import React, { useState, useEffect } from 'react';
import { useAuth } from '@/context/AuthContext';
import { CommunityService } from '@/services/community';
import { Comment } from '@/types';
import styles from './Comments.module.css';

interface CommentsSectionProps {
  postId: string;
}

function timeAgo(timestamp: number) {
  const seconds = Math.floor((Date.now() - timestamp) / 1000);
  if (seconds < 60) return '방금 전';
  const minutes = Math.floor(seconds / 60);
  if (minutes < 60) return `${minutes}분 전`;
  const hours = Math.floor(minutes / 60);
  if (hours < 24) return `${hours}시간 전`;
  return new Date(timestamp).toLocaleDateString();
}

export default function CommentsSection({ postId }: CommentsSectionProps) {
  const { user } = useAuth();
  const [comments, setComments] = useState<Comment[]>([]);
  const [newComment, setNewComment] = useState('');
  const [loading, setLoading] = useState(true);
  const [submitting, setSubmitting] = useState(false);

  useEffect(() => {
    fetchComments();
  }, [postId]);

  const fetchComments = async () => {
    try {
      const data = await CommunityService.getComments(postId);
      setComments(data as Comment[]);
    } catch (e) {
      console.error(e);
    } finally {
      setLoading(false);
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!user) {
      alert("로그인이 필요합니다.");
      return;
    }
    if (!newComment.trim()) return;

    setSubmitting(true);
    try {
      await CommunityService.createComment(postId, {
        content: newComment,
        authorId: user.uid,
        authorName: user.displayName || '익명',
        authorAvatar: user.photoURL || undefined
      });
      setNewComment('');
      fetchComments(); // Refresh
    } catch (e) {
      console.error(e);
      alert("댓글 작성 실패");
    } finally {
      setSubmitting(false);
    }
  };

  const handleDelete = async (commentId: string) => {
    if (!confirm("삭제하시겠습니까?")) return;
    try {
      await CommunityService.deleteComment(commentId, postId);
      fetchComments();
    } catch (e) {
      console.error(e);
    }
  };

  return (
    <div className={styles.section}>
      <h3 className={styles.title}>댓글 {comments.length}개</h3>

      {/* Input */}
      <form className={styles.inputArea} onSubmit={handleSubmit}>
        <textarea 
          className={styles.textArea}
          placeholder={user ? "따뜻한 댓글을 남겨주세요 :)" : "로그인 후 댓글을 작성할 수 있습니다."}
          value={newComment}
          onChange={(e) => setNewComment(e.target.value)}
          disabled={!user || submitting}
        />
        <button 
          type="submit" 
          className={styles.submitBtn}
          disabled={!user || submitting}
        >
          등록
        </button>
      </form>

      {/* List */}
      <div className={styles.commentList}>
        {comments.map((comment) => (
          <div key={comment.id} className={styles.commentItem}>
            <div className={styles.avatar}>
              {comment.authorName[0]}
            </div>
            <div className={styles.commentContent}>
              <div className={styles.meta}>
                <span className={styles.author}>{comment.authorName}</span>
                <span className={styles.date}>{timeAgo(comment.createdAt)}</span>
                {user?.uid === comment.authorId && (
                  <button onClick={() => handleDelete(comment.id)} className={styles.deleteBtn}>
                    삭제
                  </button>
                )}
              </div>
              <p className={styles.text}>{comment.content}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
