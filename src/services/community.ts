import { db } from "@/lib/firebase";
import { 
  collection, 
  addDoc, 
  getDocs, 
  getDoc, 
  doc, 
  query, 
  where, 
  orderBy, 
  limit, 
  serverTimestamp,
  updateDoc,
  deleteDoc,
  increment,
  setDoc,
  DocumentData
} from "firebase/firestore";
import { Post } from "@/types";

const COLLECTION_NAME = "posts";

export const CommunityService = {
  // Create a new post
  async createPost(postData: {
    title: string;
    content: string;
    category: string;
    authorId: string;
    authorName: string;
    authorAvatar?: string;
  }) {
    if (!db) throw new Error("Firebase DB not initialized");
    
    const newPost = {
      ...postData,
      views: 0,
      likes: 0,
      commentsCount: 0,
      createdAt: Date.now(), // Client side timestamp for immediate display, ideally serverTimestamp()
      type: 'general'
    };

    const docRef = await addDoc(collection(db, COLLECTION_NAME), newPost);
    return docRef.id;
  },

  // Get list of posts
  async getPosts(category?: string) {
    if (!db) return [];

    let q = query(
      collection(db, COLLECTION_NAME),
      orderBy("createdAt", "desc"),
      limit(20)
    );

    if (category && category !== 'ALL') {
      q = query(
        collection(db, COLLECTION_NAME),
        where("category", "==", category),
        orderBy("createdAt", "desc"),
        limit(20)
      );
    }

    try {
      const querySnapshot = await getDocs(q);
      return querySnapshot.docs.map(doc => ({
        id: doc.id,
        ...doc.data()
      } as Post));
    } catch (error) {
      console.error("Error fetching posts:", error);
      return [];
    }
  },

  // Get single post details
  async getPostById(id: string) {
    if (!db) return null;

    const docRef = doc(db, COLLECTION_NAME, id);
    const docSnap = await getDoc(docRef);

    if (docSnap.exists()) {
      // Increment view count
      try {
         updateDoc(docRef, { views: increment(1) });
      } catch (e) {
         // ignore view count error
      }
      return { id: docSnap.id, ...docSnap.data() } as Post;
    } else {
      return null;
    }
  },

  // Delete post
  async deletePost(id: string) {
    if (!db) throw new Error("Firebase DB not initialized");
    await deleteDoc(doc(db, COLLECTION_NAME, id));
  },

  // --- Comments ---
  async createComment(postId: string, comment: {
    content: string;
    authorId: string;
    authorName: string;
    authorAvatar?: string;
  }) {
    if (!db) throw new Error("DB not init");
    
    // Add comment
    const commentRef = await addDoc(collection(db, "comments"), {
       postId,
       ...comment,
       createdAt: Date.now()
    });

    // Update post comment count
    try {
      const postRef = doc(db, COLLECTION_NAME, postId);
      await updateDoc(postRef, { commentsCount: increment(1) });
    } catch (e) { console.error(e); }
    
    return commentRef.id;
  },

  async getComments(postId: string) {
    if (!db) return [];
    
    const q = query(
      collection(db, "comments"),
      where("postId", "==", postId),
      orderBy("createdAt", "asc")
    );
    
    const snap = await getDocs(q);
    return snap.docs.map(doc => ({ id: doc.id, ...doc.data() }));
  },

  async deleteComment(commentId: string, postId: string) {
    if (!db) return;
    await deleteDoc(doc(db, "comments", commentId));
    
    // Decrease count
    try {
      await updateDoc(doc(db, COLLECTION_NAME, postId), { commentsCount: increment(-1) });
    } catch(e) {}
  },

  // --- Likes ---
  async toggleLike(postId: string, userId: string) {
     if (!db) return false;
     
     // Check if liked
     const likeId = `${postId}_${userId}`;
     const likeRef = doc(db, "post_likes", likeId);
     const likeSnap = await getDoc(likeRef);
     
     const postRef = doc(db, COLLECTION_NAME, postId);

     if (likeSnap.exists()) {
        // Unlike
        await deleteDoc(likeRef);
        await updateDoc(postRef, { likes: increment(-1) });
        return false; // Not liked anymore
     } else {
        // Like
        await setDoc(likeRef, { createdAt: Date.now() });
        await updateDoc(postRef, { likes: increment(1) });
        return true; 
     }
  },

  async hasLiked(postId: string, userId: string) {
    if (!db) return false;
    const likeId = `${postId}_${userId}`;
    const likeRef = doc(db, "post_likes", likeId);
    const likeSnap = await getDoc(likeRef);
    return likeSnap.exists();
  }
};
