import { Metadata } from 'next';

export const metadata: Metadata = {
  title: "창작 실험실 - 모두의AI",
  description: "신기한 AI 도구들을 체험하고 나만의 게임 리소스를 만들어보세요.",
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return children;
}
