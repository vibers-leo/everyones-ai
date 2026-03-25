import { Metadata } from 'next';

export const metadata: Metadata = {
  title: "마이페이지 - 모두의AI",
  description: "나의 활동 기록과 작성한 글을 확인하세요.",
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return children;
}
