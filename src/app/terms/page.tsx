import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "이용약관 | 모두의AI",
  description: "모두의AI 서비스 이용약관",
};

export default function TermsPage() {
  return (
    <main style={{ minHeight: "100vh", backgroundColor: "var(--bg-main, #ffffff)" }}>
      <div style={{ maxWidth: "800px", margin: "0 auto", padding: "64px 24px" }}>
        <Link
          href="/"
          style={{ display: "inline-flex", alignItems: "center", gap: "8px", fontSize: "0.875rem", color: "var(--text-muted, #888)", marginBottom: "48px", textDecoration: "none" }}
        >
          &larr; 홈으로 돌아가기
        </Link>

        <h1 style={{ fontSize: "clamp(2rem, 5vw, 3rem)", fontWeight: 900, color: "var(--text-main, #111)", marginBottom: "16px" }}>
          이용약관
        </h1>
        <p style={{ fontSize: "0.875rem", color: "var(--text-muted, #888)", marginBottom: "48px" }}>
          시행일자: 2026년 3월 28일
        </p>

        <section style={{ marginBottom: "40px" }}>
          <h2 style={{ fontSize: "1.5rem", fontWeight: 700, color: "var(--text-main, #111)", marginBottom: "16px" }}>제1조 (목적)</h2>
          <p style={{ fontSize: "1rem", color: "var(--text-sub, #555)", lineHeight: 1.8 }}>
            본 약관은 주식회사 디랩(이하 &quot;회사&quot;)이 운영하는 모두의AI 교육 커뮤니티(이하 &quot;서비스&quot;)를 이용함에 있어 회사와 이용자의 권리, 의무 및 책임사항을 규정함을 목적으로 합니다.
          </p>
        </section>

        <section style={{ marginBottom: "40px" }}>
          <h2 style={{ fontSize: "1.5rem", fontWeight: 700, color: "var(--text-main, #111)", marginBottom: "16px" }}>제2조 (정의)</h2>
          <div style={{ fontSize: "1rem", color: "var(--text-sub, #555)", lineHeight: 1.8 }}>
            <p>본 약관에서 사용하는 용어의 정의는 다음과 같습니다.</p>
            <ol style={{ listStyle: "decimal inside", paddingLeft: "16px", marginTop: "8px" }}>
              <li>&quot;서비스&quot;라 함은 회사가 제공하는 AI 교육, 커뮤니티, 실험실, 쇼케이스 등 제반 서비스를 의미합니다.</li>
              <li>&quot;이용자&quot;라 함은 서비스에 접속하여 본 약관에 따라 회사가 제공하는 서비스를 이용하는 고객을 말합니다.</li>
              <li>&quot;콘텐츠&quot;라 함은 서비스에서 제공되는 강의, 게시글, 작품 등의 자료를 의미합니다.</li>
            </ol>
          </div>
        </section>

        <section style={{ marginBottom: "40px" }}>
          <h2 style={{ fontSize: "1.5rem", fontWeight: 700, color: "var(--text-main, #111)", marginBottom: "16px" }}>제3조 (약관의 게시와 개정)</h2>
          <div style={{ fontSize: "1rem", color: "var(--text-sub, #555)", lineHeight: 1.8 }}>
            <p>① 회사는 본 약관의 내용을 이용자가 쉽게 알 수 있도록 사이트 내에 게시합니다.</p>
            <p>② 회사는 필요한 경우 관련 법령을 위배하지 않는 범위에서 본 약관을 개정할 수 있습니다.</p>
            <p>③ 회사가 약관을 개정할 경우에는 적용일자 및 개정사유를 명시하여 그 적용일자 7일 전부터 공지합니다.</p>
          </div>
        </section>

        <section style={{ marginBottom: "40px" }}>
          <h2 style={{ fontSize: "1.5rem", fontWeight: 700, color: "var(--text-main, #111)", marginBottom: "16px" }}>제4조 (서비스의 제공 및 변경)</h2>
          <div style={{ fontSize: "1rem", color: "var(--text-sub, #555)", lineHeight: 1.8 }}>
            <p>① 회사는 다음과 같은 서비스를 제공합니다.</p>
            <ul style={{ listStyle: "disc inside", paddingLeft: "16px", marginTop: "8px" }}>
              <li>AI 교육 콘텐츠 (배움터) 제공</li>
              <li>AI 도구 체험 (실험실) 서비스</li>
              <li>커뮤니티 게시판 운영</li>
              <li>사용자 작품 쇼케이스</li>
            </ul>
            <p style={{ marginTop: "12px" }}>② 회사는 상당한 이유가 있는 경우에 서비스를 변경할 수 있습니다.</p>
          </div>
        </section>

        <section style={{ marginBottom: "40px" }}>
          <h2 style={{ fontSize: "1.5rem", fontWeight: 700, color: "var(--text-main, #111)", marginBottom: "16px" }}>제5조 (서비스의 중단)</h2>
          <div style={{ fontSize: "1rem", color: "var(--text-sub, #555)", lineHeight: 1.8 }}>
            <p>① 회사는 정보통신설비의 보수점검, 교체 및 고장, 통신 두절 등의 사유가 발생한 경우에는 서비스의 제공을 일시적으로 중단할 수 있습니다.</p>
            <p>② 회사는 제1항의 사유로 서비스가 일시 중단됨으로 인하여 발생한 손해에 대하여는 배상하지 아니합니다. 다만, 회사에 고의 또는 중과실이 있는 경우에는 그러하지 아니합니다.</p>
          </div>
        </section>

        <section style={{ marginBottom: "40px" }}>
          <h2 style={{ fontSize: "1.5rem", fontWeight: 700, color: "var(--text-main, #111)", marginBottom: "16px" }}>제6조 (이용자의 의무)</h2>
          <div style={{ fontSize: "1rem", color: "var(--text-sub, #555)", lineHeight: 1.8 }}>
            <p>① 이용자는 다음 행위를 하여서는 안 됩니다.</p>
            <ul style={{ listStyle: "disc inside", paddingLeft: "16px", marginTop: "8px" }}>
              <li>허위 정보 등록 또는 타인의 정보 도용</li>
              <li>회사와 기타 제3자의 저작권 등 지적재산권에 대한 침해</li>
              <li>회사 및 기타 제3자의 명예를 손상시키거나 업무를 방해하는 행위</li>
              <li>외설 또는 폭력적인 메시지 등 공서양속에 반하는 정보를 게시하는 행위</li>
            </ul>
          </div>
        </section>

        <section style={{ marginBottom: "40px" }}>
          <h2 style={{ fontSize: "1.5rem", fontWeight: 700, color: "var(--text-main, #111)", marginBottom: "16px" }}>제7조 (저작권의 귀속 및 이용제한)</h2>
          <div style={{ fontSize: "1rem", color: "var(--text-sub, #555)", lineHeight: 1.8 }}>
            <p>① 회사가 작성한 저작물에 대한 저작권 기타 지적재산권은 회사에 귀속합니다.</p>
            <p>② 이용자는 서비스를 이용함으로써 얻은 정보를 회사의 사전 승낙 없이 영리목적으로 이용하거나 제3자에게 이용하게 하여서는 안됩니다.</p>
          </div>
        </section>

        <section style={{ marginBottom: "40px" }}>
          <h2 style={{ fontSize: "1.5rem", fontWeight: 700, color: "var(--text-main, #111)", marginBottom: "16px" }}>제8조 (분쟁해결)</h2>
          <div style={{ fontSize: "1rem", color: "var(--text-sub, #555)", lineHeight: 1.8 }}>
            <p>① 회사는 이용자가 제기하는 정당한 의견이나 불만을 반영하고 피해를 보상처리합니다.</p>
            <p>② 회사는 이용자의 불만사항을 우선적으로 처리합니다.</p>
          </div>
        </section>

        <section style={{ marginBottom: "40px" }}>
          <h2 style={{ fontSize: "1.5rem", fontWeight: 700, color: "var(--text-main, #111)", marginBottom: "16px" }}>제9조 (재판권 및 준거법)</h2>
          <div style={{ fontSize: "1rem", color: "var(--text-sub, #555)", lineHeight: 1.8 }}>
            <p>① 회사와 이용자 간에 발생한 분쟁에 대하여는 대한민국 법을 적용합니다.</p>
            <p>② 분쟁에 관한 소송은 민사소송법상의 관할법원에 제기합니다.</p>
          </div>
        </section>

        <section style={{ marginBottom: "40px", paddingTop: "32px", borderTop: "1px solid var(--border-light, #e5e5e5)" }}>
          <h2 style={{ fontSize: "1.5rem", fontWeight: 700, color: "var(--text-main, #111)", marginBottom: "16px" }}>부칙</h2>
          <p style={{ fontSize: "1rem", color: "var(--text-sub, #555)", lineHeight: 1.8 }}>
            본 약관은 2026년 3월 28일부터 시행됩니다.
          </p>
        </section>

        <div style={{ marginTop: "48px", padding: "24px", backgroundColor: "var(--bg-card, #f8f8f8)", borderRadius: "16px", border: "2px solid var(--accent, #6C5CE7)" }}>
          <h3 style={{ fontSize: "1.125rem", fontWeight: 700, color: "var(--text-main, #111)", marginBottom: "12px" }}>
            이용약관 관련 문의
          </h3>
          <div style={{ fontSize: "0.875rem", color: "var(--text-sub, #555)" }}>
            <p>이메일: contact@vibers.co.kr</p>
            <p>운영: 주식회사 디랩 (대표: 이준호, 사업자등록번호: 617-86-11575)</p>
          </div>
        </div>
      </div>
    </main>
  );
}
