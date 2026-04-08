"use client";

import { useState } from "react";
import styles from "./Content.module.css";

// Firestore 저장 (firebase 설정이 있을 때만 동작)
async function saveToFirestore(lesson: GeneratedLesson) {
  try {
    const { db } = await import("@/lib/firebase");
    if (!db) throw new Error("Firebase가 초기화되지 않았습니다.");
    const { collection, addDoc } = await import("firebase/firestore");
    const docRef = await addDoc(collection(db, "lessons"), {
      ...lesson,
      status: "draft",
      savedAt: new Date().toISOString(),
    });
    return docRef.id;
  } catch {
    console.warn("[Firestore] 저장 실패 — Firebase 설정을 확인해요해봐요.");
    return null;
  }
}

/** 레슨 섹션 */
interface LessonSection {
  title: string;
  content: string;
  type: "intro" | "concept" | "example" | "exercise" | "summary";
}

/** 연습 문제 */
interface Exercise {
  question: string;
  hint: string;
  expectedOutput: string;
}

/** 만들기된 레슨 */
interface GeneratedLesson {
  title: string;
  description: string;
  level: string;
  estimatedMinutes: number;
  sections: LessonSection[];
  exercises: Exercise[];
  tags: string[];
  createdAt: string;
}

/** 섹션 타입 한글 라벨 */
const SECTION_TYPE_LABEL: Record<string, string> = {
  intro: "소개",
  concept: "개념",
  example: "예제",
  exercise: "실습",
  summary: "정리",
};

export default function AdminContentPage() {
  const [topic, setTopic] = useState("");
  const [level, setLevel] = useState("beginner");
  const [generating, setGenerating] = useState(false);
  const [saving, setSaving] = useState(false);
  const [lesson, setLesson] = useState<GeneratedLesson | null>(null);
  const [message, setMessage] = useState<{ text: string; type: "success" | "error" } | null>(null);

  // 레슨 만들기
  const handleGenerate = async () => {
    if (!topic.trim()) {
      setMessage({ text: "주제를 입력해주세요.", type: "error" });
      return;
    }

    setGenerating(true);
    setMessage(null);
    setLesson(null);

    try {
      const res = await fetch("/api/content/generate-lesson", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ topic: topic.trim(), level }),
      });

      const data = await res.json();

      if (!res.ok) {
        throw new Error(data.error || "만들기 실패");
      }

      setLesson(data.data);
      setMessage({ text: "레슨이 성공적으로 만들기되었습니다!", type: "success" });
    } catch (err) {
      setMessage({
        text: err instanceof Error ? err.message : "레슨 만들기 중 오류가 발생했습니다.",
        type: "error",
      });
    } finally {
      setGenerating(false);
    }
  };

  // Firestore에 저장
  const handleSave = async () => {
    if (!lesson) return;

    setSaving(true);
    setMessage(null);

    try {
      const docId = await saveToFirestore(lesson);

      if (docId) {
        setMessage({ text: `레슨이 저장되었습니다! (ID: ${docId})`, type: "success" });
      } else {
        setMessage({
          text: "Firebase 설정이 필요합니다. .env.local에 Firebase 키를 추가해주세요.",
          type: "error",
        });
      }
    } catch {
      setMessage({ text: "저장 중 오류가 발생했습니다.", type: "error" });
    } finally {
      setSaving(false);
    }
  };

  return (
    <div className={styles.container}>
      {/* 헤더 */}
      <div className={styles.header}>
        <h1 className={styles.title}>콘텐츠 관리</h1>
        <p className={styles.subtitle}>
          AI를 활용하여 배움터 레슨을 자동으로 만들기하고 관리합니다.
        </p>
      </div>

      {/* 메시지 */}
      {message && (
        <div className={`${styles.message} ${message.type === "success" ? styles.success : styles.error}`}>
          {message.text}
        </div>
      )}

      {/* 만들기 폼 */}
      <div className={styles.form}>
        <h2 className={styles.formTitle}>레슨 만들기</h2>

        <div className={styles.fieldGroup}>
          <div className={styles.field}>
            <label className={styles.label} htmlFor="topic">
              주제
            </label>
            <input
              id="topic"
              type="text"
              className={styles.input}
              placeholder="예: AI 이미지 만들기, AI 스토리 만들기, 게임 레벨 디자인"
              value={topic}
              onChange={(e) => setTopic(e.target.value)}
              onKeyDown={(e) => e.key === "Enter" && handleGenerate()}
            />
          </div>

          <div className={styles.field}>
            <label className={styles.label} htmlFor="level">
              난이도
            </label>
            <select
              id="level"
              className={styles.select}
              value={level}
              onChange={(e) => setLevel(e.target.value)}
            >
              <option value="beginner">입문</option>
              <option value="intermediate">중급</option>
              <option value="advanced">고급</option>
            </select>
          </div>
        </div>

        <button
          className={styles.generateBtn}
          onClick={handleGenerate}
          disabled={generating}
        >
          {generating && <span className={styles.loading} />}
          {generating ? "만들기 중..." : "레슨 만들기"}
        </button>
      </div>

      {/* 미리보기 */}
      {lesson && (
        <div className={styles.preview}>
          <div className={styles.previewHeader}>
            <h2 className={styles.previewTitle}>{lesson.title}</h2>
            <div className={styles.meta}>
              <span className={styles.badge}>{lesson.level}</span>
              <span className={styles.badgeAccent}>
                약 {lesson.estimatedMinutes}분
              </span>
            </div>
          </div>

          <p className={styles.description}>{lesson.description}</p>

          {/* 섹션 목록 */}
          {lesson.sections.map((section, i) => (
            <div
              key={i}
              className={styles.section}
              data-type={section.type}
            >
              <span className={styles.sectionType}>
                {SECTION_TYPE_LABEL[section.type] || section.type}
              </span>
              <h3 className={styles.sectionTitle}>{section.title}</h3>
              <p className={styles.sectionContent}>{section.content}</p>
            </div>
          ))}

          {/* 연습 문제 */}
          {lesson.exercises.length > 0 && (
            <>
              <h3 className={styles.exercisesTitle}>연습 문제</h3>
              {lesson.exercises.map((ex, i) => (
                <div key={i} className={styles.exercise}>
                  <p className={styles.exerciseQuestion}>
                    Q{i + 1}. {ex.question}
                  </p>
                  <p className={styles.exerciseHint}>힌트: {ex.hint}</p>
                  <p className={styles.exerciseExpected}>
                    기대 결과: {ex.expectedOutput}
                  </p>
                </div>
              ))}
            </>
          )}

          {/* 태그 */}
          <div className={styles.tags}>
            {lesson.tags.map((tag, i) => (
              <span key={i} className={styles.tag}>
                #{tag}
              </span>
            ))}
          </div>

          {/* 저장 버튼 */}
          <button
            className={styles.saveBtn}
            onClick={handleSave}
            disabled={saving}
          >
            {saving && <span className={styles.loading} />}
            {saving ? "저장 중..." : "Firestore에 저장"}
          </button>
        </div>
      )}
    </div>
  );
}
