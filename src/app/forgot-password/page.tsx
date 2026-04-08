"use client";

import React, { useState } from "react";
import Link from "next/link";
import { sendPasswordResetEmail } from "firebase/auth";
import { auth } from "@/lib/firebase";
import Navbar from "@/components/layout/Navbar";

export default function ForgotPasswordPage() {
  const [email, setEmail] = useState("");
  const [sent, setSent] = useState(false);
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError("");
    setLoading(true);

    try {
      await sendPasswordResetEmail(auth, email);
      setSent(true);
    } catch (err: any) {
      if (err.code === "auth/user-not-found") {
        setError("등록되지 않은 이메일입니다.");
      } else {
        setError("오류가 발생했습니다. 다시 시도해주세요.");
      }
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      <Navbar />
      <div style={{ minHeight: "100vh", display: "flex", alignItems: "center", justifyContent: "center", background: "var(--bg-main)", padding: "20px" }}>
        <div style={{ width: "100%", maxWidth: "420px", background: "var(--bg-card)", padding: "40px", borderRadius: "32px", boxShadow: "0 20px 40px rgba(0,0,0,0.08)", textAlign: "center" }}>
          <h1 style={{ fontSize: "1.8rem", fontWeight: 800, marginBottom: "8px", color: "var(--text-main)" }}>
            비밀번호 찾기
          </h1>
          <p style={{ color: "var(--text-muted)", marginBottom: "32px" }}>
            가입한 이메일을 입력하시면<br />비밀번호 재설정 링크를 보내드립니다.
          </p>

          {sent ? (
            <div>
              <p style={{ color: "var(--primary)", fontWeight: 600, marginBottom: "20px" }}>
                이메일이 발송되었습니다!
              </p>
              <p style={{ color: "var(--text-muted)", fontSize: "0.9rem", marginBottom: "24px" }}>
                메일함을 확인해요해주세요.
              </p>
              <Link href="/login" style={{ color: "var(--primary)", fontWeight: "bold" }}>
                로그인으로 돌아가기
              </Link>
            </div>
          ) : (
            <form onSubmit={handleSubmit}>
              <div style={{ marginBottom: "20px", textAlign: "left" }}>
                <label style={{ display: "block", marginBottom: "8px", color: "var(--text-main)", fontWeight: 600, fontSize: "0.9rem", marginLeft: "8px" }}>
                  이메일
                </label>
                <input
                  type="email"
                  placeholder="hello@everyai.com"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                  style={{ width: "100%", padding: "14px 18px", borderRadius: "var(--radius-md)", border: "2px solid transparent", background: "var(--bg-main)", fontSize: "1rem", color: "var(--text-main)" }}
                />
              </div>

              {error && <p style={{ color: "red", marginBottom: "10px", fontSize: "0.9rem" }}>{error}</p>}

              <button
                type="submit"
                className="btn btn-primary"
                disabled={loading}
                style={{ width: "100%", padding: "16px", marginTop: "12px", fontSize: "1.1rem", borderRadius: "var(--radius-full)" }}
              >
                {loading ? "발송 중..." : "재설정 링크 보내기"}
              </button>

              <p style={{ marginTop: "24px", fontSize: "0.9rem", color: "var(--text-muted)" }}>
                <Link href="/login" style={{ color: "var(--primary)", fontWeight: "bold" }}>
                  로그인으로 돌아가기
                </Link>
              </p>
            </form>
          )}
        </div>
      </div>
    </>
  );
}
