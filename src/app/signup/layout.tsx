import { Metadata } from 'next';

export const metadata: Metadata = {
  title: "회원가입 - 모두의AI",
  description: "모두의AI 멤버가 되어 나만의 게임을 만들어보세요.",
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return children;
}
