import { Metadata } from 'next';

export const metadata: Metadata = {
  title: "커뮤니티 - 모두의AI",
  description: "AI 게임 메이커들의 소통 공간. 질문, 노하우 공유, 팀원 모집까지!",
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return children;
}
