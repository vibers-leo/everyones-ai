export interface UserProfile {
  uid: string;
  email: string | null;
  displayName: string | null;
  photoURL: string | null;
}

export interface Post {
  id: string;
  title: string;
  content: string;
  category: string;
  authorId: string;
  authorName: string;
  authorAvatar?: string;
  createdAt: number; // Timestamp as millis
  views: number;
  likes: number;
  commentsCount: number;
  type?: 'notice' | 'general'; // For pinning notices
}

export interface Comment {
  id: string;
  postId: string;
  content: string;
  authorId: string;
  authorName: string;
  authorAvatar?: string;
  createdAt: number;
}
