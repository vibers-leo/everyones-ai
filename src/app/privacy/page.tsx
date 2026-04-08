import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "개인정보처리방침 | 모두의AI",
  description: "모두의AI 개인정보처리방침",
};

export default function PrivacyPage() {
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
          개인정보처리방침
        </h1>
        <p style={{ fontSize: "0.875rem", color: "var(--text-muted, #888)", marginBottom: "48px" }}>
          시행일자: 2026년 3월 28일
        </p>

        {/* 전문 */}
        <section style={{ marginBottom: "40px" }}>
          <p style={{ fontSize: "1rem", color: "var(--text-sub, #555)", lineHeight: 1.8 }}>
            주식회사 디랩(이하 &quot;회사&quot;)은 정보주체의 자유와 권리 보호를 위해 「개인정보 보호법」 및 관계 법령이 정한 바를 준수하여, 적법하게 개인정보를 처리하고 안전하게 관리하고 있습니다. 이에 「개인정보 보호법」 제30조에 따라 정보주체에게 개인정보 처리에 관한 절차 및 기준을 안내하고, 이와 관련한 고충을 신속하고 원활하게 처리할 수 있도록 하기 위하여 다음과 같이 개인정보 처리방침을 수립·공개합니다.
          </p>
        </section>

        {/* 제1조 */}
        <section style={{ marginBottom: "40px" }}>
          <h2 style={{ fontSize: "1.5rem", fontWeight: 700, color: "var(--text-main, #111)", marginBottom: "16px" }}>
            제1조 (개인정보의 처리 목적)
          </h2>
          <div style={{ fontSize: "1rem", color: "var(--text-sub, #555)", lineHeight: 1.8 }}>
            <p>회사는 다음의 목적을 위하여 개인정보를 처리합니다.</p>
            <div style={{ marginTop: "16px" }}>
              <p style={{ fontWeight: 700, color: "var(--text-main, #111)" }}>1. 서비스 제공</p>
              <ul style={{ listStyle: "disc inside", paddingLeft: "16px", marginTop: "8px" }}>
                <li>모두의AI 교육 커뮤니티 서비스 제공</li>
                <li>배움터 강의 수강 및 학습 관리</li>
                <li>커뮤니티 게시판 이용</li>
              </ul>
            </div>
            <div style={{ marginTop: "16px" }}>
              <p style={{ fontWeight: 700, color: "var(--text-main, #111)" }}>2. 민원 처리</p>
              <ul style={{ listStyle: "disc inside", paddingLeft: "16px", marginTop: "8px" }}>
                <li>민원인의 신원 확인해요 및 민원사항 확인해요</li>
                <li>처리결과 통보</li>
              </ul>
            </div>
          </div>
        </section>

        {/* 제2조 */}
        <section style={{ marginBottom: "40px" }}>
          <h2 style={{ fontSize: "1.5rem", fontWeight: 700, color: "var(--text-main, #111)", marginBottom: "16px" }}>
            제2조 (개인정보의 처리 및 보유기간)
          </h2>
          <div style={{ fontSize: "1rem", color: "var(--text-sub, #555)", lineHeight: 1.8 }}>
            <p>① 회사는 법령에 따른 개인정보 보유·이용기간 또는 정보주체로부터 개인정보를 수집 시에 동의받은 개인정보 보유·이용기간 내에서 개인정보를 처리·보유합니다.</p>
            <div style={{ marginTop: "16px", padding: "16px", backgroundColor: "var(--bg-card, #f8f8f8)", borderRadius: "12px" }}>
              <p style={{ fontWeight: 700, color: "var(--text-main, #111)", marginBottom: "12px" }}>개인정보 처리 및 보유기간</p>
              <p style={{ fontSize: "0.875rem" }}>• 계정 정보 (이메일, 이름) — 회원 탈퇴 시까지</p>
              <p style={{ fontSize: "0.875rem" }}>• 서비스 이용 기록 — 3개월 (통신비밀보호법 준수)</p>
            </div>
          </div>
        </section>

        {/* 제3조 */}
        <section style={{ marginBottom: "40px" }}>
          <h2 style={{ fontSize: "1.5rem", fontWeight: 700, color: "var(--text-main, #111)", marginBottom: "16px" }}>
            제3조 (처리하는 개인정보의 항목)
          </h2>
          <div style={{ fontSize: "1rem", color: "var(--text-sub, #555)", lineHeight: 1.8 }}>
            <p>회사는 다음의 개인정보 항목을 처리하고 있습니다.</p>
            <div style={{ marginTop: "16px", display: "flex", flexDirection: "column", gap: "12px" }}>
              <div style={{ padding: "16px", backgroundColor: "var(--bg-card, #f8f8f8)", borderRadius: "12px" }}>
                <p style={{ fontWeight: 700, color: "var(--text-main, #111)", marginBottom: "8px" }}>1. 회원 가입 시</p>
                <p style={{ fontSize: "0.875rem" }}>• 필수항목: 이메일, 이름</p>
              </div>
              <div style={{ padding: "16px", backgroundColor: "var(--bg-card, #f8f8f8)", borderRadius: "12px" }}>
                <p style={{ fontWeight: 700, color: "var(--text-main, #111)", marginBottom: "8px" }}>2. 자동 수집 항목</p>
                <p style={{ fontSize: "0.875rem" }}>• IP 주소, 쿠키, 서비스 이용 기록, 방문 일시</p>
              </div>
            </div>
          </div>
        </section>

        {/* 제4조 ~ 제8조 (공통 조항) */}
        <section style={{ marginBottom: "40px" }}>
          <h2 style={{ fontSize: "1.5rem", fontWeight: 700, color: "var(--text-main, #111)", marginBottom: "16px" }}>제4조 (개인정보의 제3자 제공)</h2>
          <div style={{ fontSize: "1rem", color: "var(--text-sub, #555)", lineHeight: 1.8 }}>
            <p>① 회사는 정보주체의 개인정보를 제1조에서 명시한 범위 내에서만 처리하며, 「개인정보 보호법」 제17조 및 제18조에 해당하는 경우에만 개인정보를 제3자에게 제공합니다.</p>
            <p>② 회사는 현재 개인정보를 제3자에게 제공하고 있지 않습니다.</p>
          </div>
        </section>

        <section style={{ marginBottom: "40px" }}>
          <h2 style={{ fontSize: "1.5rem", fontWeight: 700, color: "var(--text-main, #111)", marginBottom: "16px" }}>제5조 (개인정보처리의 위탁)</h2>
          <div style={{ fontSize: "1rem", color: "var(--text-sub, #555)", lineHeight: 1.8 }}>
            <div style={{ padding: "16px", backgroundColor: "var(--bg-card, #f8f8f8)", borderRadius: "12px" }}>
              <p style={{ fontSize: "0.875rem" }}>현재 개인정보 처리 위탁 업체 없음</p>
            </div>
          </div>
        </section>

        <section style={{ marginBottom: "40px" }}>
          <h2 style={{ fontSize: "1.5rem", fontWeight: 700, color: "var(--text-main, #111)", marginBottom: "16px" }}>제6조 (정보주체의 권리·의무 및 행사방법)</h2>
          <div style={{ fontSize: "1rem", color: "var(--text-sub, #555)", lineHeight: 1.8 }}>
            <p>① 정보주체는 회사에 대해 언제든지 다음 각 호의 개인정보 보호 관련 권리를 행사할 수 있습니다.</p>
            <ol style={{ listStyle: "decimal inside", paddingLeft: "16px", marginTop: "8px" }}>
              <li>개인정보 열람 요구</li>
              <li>오류 등이 있을 경우 정정 요구</li>
              <li>없애기 요구</li>
              <li>처리정지 요구</li>
            </ol>
            <p style={{ marginTop: "12px" }}>② 제1항에 따른 권리 행사는 서면, 전화, 전자우편 등을 통하여 하실 수 있으며 회사는 이에 대해 지체없이 조치하겠습니다.</p>
          </div>
        </section>

        <section style={{ marginBottom: "40px" }}>
          <h2 style={{ fontSize: "1.5rem", fontWeight: 700, color: "var(--text-main, #111)", marginBottom: "16px" }}>제7조 (개인정보의 파기)</h2>
          <div style={{ fontSize: "1rem", color: "var(--text-sub, #555)", lineHeight: 1.8 }}>
            <p>회사는 개인정보 보유기간의 경과, 처리목적 달성 등 개인정보가 불필요하게 되었을 때에는 지체없이 해당 개인정보를 파기합니다.</p>
            <ul style={{ listStyle: "disc inside", paddingLeft: "16px", marginTop: "12px" }}>
              <li>전자적 파일 형태: 복구 및 재생되지 않도록 안전하게 없애기</li>
              <li>종이에 출력된 개인정보: 분쇄기로 분쇄하거나 소각</li>
            </ul>
          </div>
        </section>

        <section style={{ marginBottom: "40px" }}>
          <h2 style={{ fontSize: "1.5rem", fontWeight: 700, color: "var(--text-main, #111)", marginBottom: "16px" }}>제8조 (개인정보의 안전성 확보조치)</h2>
          <div style={{ fontSize: "1rem", color: "var(--text-sub, #555)", lineHeight: 1.8 }}>
            <p>회사는 개인정보의 안전성 확보를 위해 다음과 같은 조치를 취하고 있습니다.</p>
            <ol style={{ listStyle: "decimal inside", paddingLeft: "16px", marginTop: "8px" }}>
              <li>관리적 조치: 내부관리계획 수립·시행</li>
              <li>기술적 조치: 접근권한 관리, 암호화, 보안프로그램 설치</li>
              <li>물리적 조치: 전산실 접근통제</li>
            </ol>
          </div>
        </section>

        {/* 제9조 */}
        <section style={{ marginBottom: "40px" }}>
          <h2 style={{ fontSize: "1.5rem", fontWeight: 700, color: "var(--text-main, #111)", marginBottom: "16px" }}>제9조 (개인정보 보호책임자)</h2>
          <div style={{ fontSize: "1rem", color: "var(--text-sub, #555)", lineHeight: 1.8 }}>
            <div style={{ marginTop: "16px", padding: "24px", backgroundColor: "var(--bg-card, #f8f8f8)", borderRadius: "12px" }}>
              <p style={{ fontWeight: 700, color: "var(--text-main, #111)", marginBottom: "16px" }}>개인정보 보호책임자</p>
              <p style={{ fontSize: "0.875rem" }}>• 성명: 이준호</p>
              <p style={{ fontSize: "0.875rem" }}>• 직책: 대표</p>
              <p style={{ fontSize: "0.875rem" }}>• 연락처: 010-9249-3872</p>
              <p style={{ fontSize: "0.875rem" }}>• 이메일: contact@vibers.co.kr</p>
            </div>
          </div>
        </section>

        {/* 제10조 */}
        <section style={{ marginBottom: "40px" }}>
          <h2 style={{ fontSize: "1.5rem", fontWeight: 700, color: "var(--text-main, #111)", marginBottom: "16px" }}>제10조 (권익침해 구제방법)</h2>
          <div style={{ fontSize: "1rem", color: "var(--text-sub, #555)", lineHeight: 1.8 }}>
            <p>정보주체는 개인정보침해로 인한 구제를 받기 위하여 다음 기관에 상담을 신청할 수 있습니다.</p>
            <div style={{ marginTop: "16px", display: "flex", flexDirection: "column", gap: "12px" }}>
              <div style={{ padding: "16px", backgroundColor: "var(--bg-card, #f8f8f8)", borderRadius: "12px" }}>
                <p style={{ fontWeight: 600, color: "var(--text-main, #111)" }}>개인정보분쟁조정위원회</p>
                <p style={{ fontSize: "0.875rem" }}>전화: 1833-6972 | www.kopico.go.kr</p>
              </div>
              <div style={{ padding: "16px", backgroundColor: "var(--bg-card, #f8f8f8)", borderRadius: "12px" }}>
                <p style={{ fontWeight: 600, color: "var(--text-main, #111)" }}>개인정보침해신고센터</p>
                <p style={{ fontSize: "0.875rem" }}>전화: 118 | privacy.kisa.or.kr</p>
              </div>
              <div style={{ padding: "16px", backgroundColor: "var(--bg-card, #f8f8f8)", borderRadius: "12px" }}>
                <p style={{ fontWeight: 600, color: "var(--text-main, #111)" }}>대검찰청 사이버범죄수사단</p>
                <p style={{ fontSize: "0.875rem" }}>전화: 1301 | www.spo.go.kr</p>
              </div>
              <div style={{ padding: "16px", backgroundColor: "var(--bg-card, #f8f8f8)", borderRadius: "12px" }}>
                <p style={{ fontWeight: 600, color: "var(--text-main, #111)" }}>경찰청 사이버안전국</p>
                <p style={{ fontSize: "0.875rem" }}>전화: 182 | cyberbureau.police.go.kr</p>
              </div>
            </div>
          </div>
        </section>

        <section style={{ marginBottom: "40px" }}>
          <h2 style={{ fontSize: "1.5rem", fontWeight: 700, color: "var(--text-main, #111)", marginBottom: "16px" }}>제11조 (개인정보 처리방침 변경)</h2>
          <p style={{ fontSize: "1rem", color: "var(--text-sub, #555)", lineHeight: 1.8 }}>
            이 개인정보 처리방침은 2026. 3. 28.부터 적용됩니다.
          </p>
        </section>

        {/* 문의 안내 */}
        <div style={{ marginTop: "48px", padding: "24px", backgroundColor: "var(--bg-card, #f8f8f8)", borderRadius: "16px", border: "2px solid var(--accent, #6C5CE7)" }}>
          <h3 style={{ fontSize: "1.125rem", fontWeight: 700, color: "var(--text-main, #111)", marginBottom: "12px" }}>
            개인정보 처리방침 관련 문의
          </h3>
          <div style={{ fontSize: "0.875rem", color: "var(--text-sub, #555)" }}>
            <p>이메일: contact@vibers.co.kr</p>
            <p>개인정보 보호책임자: 이준호 (대표)</p>
            <p>연락처: 010-9249-3872</p>
          </div>
        </div>
      </div>
    </main>
  );
}
