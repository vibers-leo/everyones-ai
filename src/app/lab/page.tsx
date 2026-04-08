import React from 'react';
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import ToolCard, { ToolProps } from "@/components/lab/ToolCard";

const tools: ToolProps[] = [
  {
    id: '1',
    name: "Leonardo.ai",
    description: "게임 캐릭터와 에셋 만들기에 최적화된 AI 이미지 만들기 도구입니다. 무료 크레딧을 매일 제공합니다.",
    category: "Image",
    icon: "🎨",
    url: "https://leonardo.ai",
    isFree: true
  },
  {
    id: '2',
    name: "Blockade Labs",
    description: "360도 파노라마 배경 이미지를 텍스트만으로 만들기할 수 있습니다. 스카이박스 제작에 유용합니다.",
    category: "3D/Env",
    icon: "🌍",
    url: "https://skybox.blockadelabs.com",
    isFree: true
  },
  {
    id: '3',
    name: "Suno AI",
    description: "가사만 입력하면 고퀄리티 보컬 곡을 만들어주는 음악 만들기 AI입니다. 게임 BGM 제작에 활용해보세요.",
    category: "Music",
    icon: "🎵",
    url: "https://suno.com",
    isFree: true
  },
  {
    id: '4',
    name: "ChatGPT (Game Master)",
    description: "기획부터 코드 작성까지, 게임 개발의 모든 과정을 도와주는 만능 조수입니다.",
    category: "Assistant",
    icon: "🤖",
    url: "https://chat.openai.com",
    isFree: true
  },
  {
    id: '5',
    name: "Scenario",
    description: "일관된 스타일의 게임 에셋을 만들기할 수 있는 전문적인 툴입니다. 자신만의 모델을 학습시킬 수도 있습니다.",
    category: "Asset Gen",
    icon: "💎",
    url: "https://www.scenario.com",
    isFree: false
  },
  {
    id: '6',
    name: "ElevenLabs",
    description: "텍스트를 감정이 담긴 리얼한 목소리로 변환해줍니다. NPC 대사에 생명력을 불어넣으세요.",
    category: "Voice",
    icon: "🎙️",
    url: "https://elevenlabs.io",
    isFree: false
  }
];

export default function LabPage() {
  return (
    <main>
      <Navbar />
      
      <div style={{ paddingTop: '100px', paddingBottom: '80px', minHeight: '100vh', background: 'var(--bg-main)' }}>
        <div className="container">
          {/* Header */}
          <div style={{ textAlign: 'center', marginBottom: '60px' }}>
            <span style={{ 
              color: 'var(--secondary)', 
              fontWeight: 700, 
              textTransform: 'uppercase', 
              letterSpacing: '1px',
              display: 'block',
              marginBottom: '12px'
            }}>
              Play Lab
            </span>
            <h1 style={{ 
              fontSize: '2.5rem', 
              marginBottom: '16px',
              color: 'var(--text-main)'
            }}>
              창작 실험실
            </h1>
            <p style={{ 
              color: 'var(--text-muted)', 
              maxWidth: '600px', 
              margin: '0 auto',
              fontSize: '1.1rem'
            }}>
              게임 제작에 날개를 달아줄 최고의 AI 도구들을 엄선했습니다.<br/>
              지금 바로 무료로 시작해보세요.
            </p>
          </div>

          {/* Categories (Simple Filter UI Placeholder) */}
          <div style={{ 
            display: 'flex', 
            justifyContent: 'center', 
            gap: '12px', 
            marginBottom: '50px',
            flexWrap: 'wrap'
          }}>
            {['ALL', '이미지', '3D/배경', '사운드', '기획/코딩'].map((cat, i) => (
              <button key={i} style={{
                padding: '8px 20px',
                borderRadius: '999px',
                background: i === 0 ? 'var(--primary)' : 'white',
                color: i === 0 ? 'white' : 'var(--text-muted)',
                border: i === 0 ? 'none' : '1px solid #e2e8f0',
                fontWeight: 600,
                fontSize: '0.9rem',
                cursor: 'pointer'
              }}>
                {cat}
              </button>
            ))}
          </div>

          {/* Grid */}
          <div style={{ 
            display: 'grid', 
            gridTemplateColumns: 'repeat(auto-fill, minmax(280px, 1fr))', 
            gap: '30px' 
          }}>
            {tools.map(tool => (
              <ToolCard key={tool.id} tool={tool} />
            ))}
          </div>
        </div>
      </div>

      <Footer />
    </main>
  );
}
