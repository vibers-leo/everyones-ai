import { Metadata } from 'next';

export const metadata: Metadata = {
  title: "로그인 - 모두의AI",
  description: "모두의AI 계정으로 로그인하고 창작을 시작하세요.",
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return children;
}
