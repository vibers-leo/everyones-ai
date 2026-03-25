"use client";

import { useEffect } from "react";

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    console.error(error);
  }, [error]);

  return (
    <div
      style={{
        minHeight: '100vh',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: 'var(--bg-main)',
        color: 'var(--text-main)',
        textAlign: 'center',
        padding: '0 20px',
        fontFamily: 'var(--font-sans)',
      }}
    >
      <h2
        style={{
          fontSize: '2rem',
          fontWeight: 700,
          marginBottom: '16px',
        }}
      >
        문제가 발생했습니다
      </h2>
      <p
        style={{
          color: 'var(--text-muted)',
          marginBottom: '32px',
          maxWidth: '400px',
          fontSize: '1.1rem',
          lineHeight: 1.6,
        }}
      >
        일시적인 오류일 수 있습니다.
        페이지를 새로고침하거나 잠시 후 다시 시도해주세요.
      </p>

      <div style={{ display: 'flex', gap: '16px' }}>
        <button
          onClick={() => reset()}
          style={{
            padding: '12px 24px',
            backgroundColor: 'var(--primary)',
            color: 'white',
            border: 'none',
            borderRadius: 'var(--radius-full)',
            fontWeight: 600,
            cursor: 'pointer',
            fontSize: '1rem',
            boxShadow: 'var(--shadow-md)',
          }}
        >
          다시 시도하기
        </button>
        <a
          href="/"
          style={{
            padding: '12px 24px',
            backgroundColor: 'transparent',
            color: 'var(--primary)',
            border: '2px solid var(--primary)',
            borderRadius: 'var(--radius-full)',
            fontWeight: 600,
            textDecoration: 'none',
            fontSize: '1rem',
            display: 'inline-flex',
            alignItems: 'center',
          }}
        >
          홈으로 가기
        </a>
      </div>
    </div>
  );
}
