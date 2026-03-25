import Link from 'next/link';

export default function NotFound() {
  return (
    <div
      style={{
        height: '100vh',
        width: '100%',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: 'var(--bg-main)',
        color: 'var(--text-main)',
        textAlign: 'center',
        padding: '24px',
        fontFamily: 'var(--font-sans)',
      }}
    >
      <h1
        style={{
          fontSize: '8rem',
          fontWeight: 900,
          marginBottom: '16px',
          opacity: 0.1,
          lineHeight: 1,
        }}
      >
        404
      </h1>
      <h2
        style={{
          fontSize: '2rem',
          fontWeight: 700,
          marginBottom: '16px',
        }}
      >
        페이지를 찾을 수 없습니다
      </h2>
      <p
        style={{
          color: 'var(--text-muted)',
          marginBottom: '40px',
          maxWidth: '400px',
          fontSize: '1.1rem',
          lineHeight: 1.6,
        }}
      >
        요청하신 페이지를 찾을 수 없습니다. <br />
        입력하신 주소가 정확한지 다시 한번 확인해 주세요.
      </p>
      <Link
        href="/"
        style={{
          padding: '12px 32px',
          backgroundColor: 'var(--primary)',
          color: 'white',
          borderRadius: 'var(--radius-full)',
          fontWeight: 600,
          textDecoration: 'none',
          fontSize: '0.95rem',
          letterSpacing: '0.05em',
          boxShadow: 'var(--shadow-md)',
        }}
      >
        홈으로 돌아가기
      </Link>
    </div>
  );
}
