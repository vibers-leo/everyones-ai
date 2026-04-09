export const runtime = 'edge';
// src/app/api/content/generate-lesson/route.ts — AI 레슨 자동 생성 API
import { NextRequest, NextResponse } from "next/server";

/** 레슨 섹션 타입 */
interface LessonSection {
  title: string;
  content: string;
  type: "intro" | "concept" | "example" | "exercise" | "summary";
}

/** 연습 문제 타입 */
interface Exercise {
  question: string;
  hint: string;
  expectedOutput: string;
}

/** 생성된 레슨 타입 */
interface GeneratedLesson {
  title: string;
  description: string;
  level: string;
  estimatedMinutes: number;
  sections: LessonSection[];
  exercises: Exercise[];
  tags: string[];
  createdAt: string;
}

// 레벨별 주제 템플릿
const LEVEL_CONFIG: Record<string, { label: string; depth: string; minutes: number }> = {
  beginner: { label: "입문", depth: "기초 개념과 간단한 예제 중심", minutes: 15 },
  intermediate: { label: "중급", depth: "실전 활용과 프로젝트 적용", minutes: 25 },
  advanced: { label: "고급", depth: "심화 개념과 최적화 기법", minutes: 40 },
};

// AI 게임 제작 관련 주제 템플릿
const TOPIC_TEMPLATES: Record<string, { sections: LessonSection[]; exercises: Exercise[]; tags: string[] }> = {
  "AI 이미지 생성": {
    sections: [
      {
        title: "AI 이미지 생성이란?",
        content:
          "AI 이미지 생성은 텍스트 프롬프트를 입력하면 인공지능이 이미지를 만들어주는 기술입니다. 게임 개발에서 캐릭터, 배경, 아이템 등의 그래픽 에셋을 빠르게 만들 수 있어 매우 유용합니다.",
        type: "intro",
      },
      {
        title: "프롬프트 작성 기본 원칙",
        content:
          "좋은 이미지를 생성하려면 프롬프트를 구체적으로 작성해야 합니다. 예를 들어 '고양이'보다는 '파란 갑옷을 입은 용감한 고양이 기사, 픽셀아트 스타일, 게임 캐릭터'처럼 스타일, 분위기, 용도를 명시합니다.",
        type: "concept",
      },
      {
        title: "게임 에셋 만들기 실습",
        content:
          "실제 게임에서 사용할 수 있는 캐릭터 스프라이트를 만들어봅시다. '16비트 픽셀아트 스타일의 [캐릭터 설명], 투명 배경, 게임 스프라이트' 형식으로 프롬프트를 작성합니다.",
        type: "example",
      },
      {
        title: "나만의 게임 캐릭터 디자인",
        content:
          "배운 내용을 바탕으로 나만의 게임 캐릭터를 3가지 디자인해보세요. 각 캐릭터의 이름, 능력, 스토리를 간단히 설정한 후 AI로 이미지를 생성합니다.",
        type: "exercise",
      },
      {
        title: "정리 및 다음 단계",
        content:
          "이번 레슨에서 AI 이미지 생성의 기본 원리와 프롬프트 작성법을 배웠습니다. 다음 레슨에서는 생성한 이미지를 실제 게임 엔진에 적용하는 방법을 알아봅니다.",
        type: "summary",
      },
    ],
    exercises: [
      {
        question: "게임 주인공 캐릭터의 AI 이미지를 생성하기 위한 프롬프트를 작성해보세요.",
        hint: "캐릭터의 외형, 스타일(픽셀아트/3D/일러스트), 포즈, 배경을 포함하세요.",
        expectedOutput: "예: '빨간 망토를 입은 소녀 모험가, 칼을 들고 있는 포즈, 판타지 RPG 스타일, 픽셀아트'",
      },
      {
        question: "게임 배경 이미지를 위한 프롬프트를 3가지 작성해보세요 (숲, 던전, 마을).",
        hint: "각 장소의 분위기, 시간대, 아트 스타일을 구체적으로 표현하세요.",
        expectedOutput: "예: '어두운 중세 던전 내부, 횃불 조명, 돌벽, 탑다운 뷰, 2D 게임 배경'",
      },
    ],
    tags: ["AI 이미지", "프롬프트", "게임 에셋", "캐릭터 디자인"],
  },
  "AI 스토리 생성": {
    sections: [
      {
        title: "AI로 게임 스토리 만들기",
        content:
          "AI 언어 모델을 활용하면 게임의 세계관, 캐릭터 대사, 퀘스트 스토리를 빠르게 만들 수 있습니다. ChatGPT나 Claude 같은 AI에게 적절한 프롬프트를 주면 풍부한 스토리를 생성할 수 있습니다.",
        type: "intro",
      },
      {
        title: "게임 세계관 설계 방법",
        content:
          "좋은 게임 스토리의 핵심은 세계관입니다. AI에게 '중세 판타지 세계에서 마법이 금지된 왕국의 역사를 만들어줘'처럼 배경, 규칙, 갈등 요소를 제시하면 체계적인 세계관을 만들 수 있습니다.",
        type: "concept",
      },
      {
        title: "NPC 대사 자동 생성",
        content:
          "게임 속 NPC의 대사를 AI로 생성할 수 있습니다. 캐릭터의 성격, 직업, 현재 상황을 설정한 후 대사를 요청하면 자연스러운 대화를 만들 수 있습니다.",
        type: "example",
      },
      {
        title: "나만의 게임 스토리 작성",
        content: "배운 내용을 활용하여 간단한 RPG 게임의 메인 스토리를 AI와 함께 작성해보세요.",
        type: "exercise",
      },
      {
        title: "정리",
        content:
          "AI를 활용한 스토리 생성의 기초를 배웠습니다. AI는 초안 생성에 탁월하지만, 최종 완성은 여러분의 창의적 편집이 필요합니다.",
        type: "summary",
      },
    ],
    exercises: [
      {
        question: "AI를 활용하여 게임의 메인 퀘스트 스토리 개요를 작성해보세요.",
        hint: "주인공의 목표, 장애물, 반전 요소를 포함하세요.",
        expectedOutput: "3막 구조(도입-전개-클라이맥스)의 퀘스트 스토리 개요",
      },
      {
        question: "게임 속 상점 주인 NPC의 대사를 5개 생성해보세요.",
        hint: "NPC의 성격(예: 수다스러운 대장장이)을 먼저 설정하세요.",
        expectedOutput: "인사말, 상품 소개, 할인 제안, 잡담, 작별 인사 각 1개",
      },
    ],
    tags: ["AI 스토리", "세계관", "NPC", "게임 시나리오"],
  },
};

// 기본 템플릿 (매칭되는 주제가 없을 때)
function generateDefaultLesson(topic: string, level: string): GeneratedLesson {
  const config = LEVEL_CONFIG[level] || LEVEL_CONFIG.beginner;

  return {
    title: `${topic} - ${config.label} 과정`,
    description: `AI를 활용한 ${topic}에 대해 배웁니다. ${config.depth}으로 구성되어 있습니다.`,
    level: config.label,
    estimatedMinutes: config.minutes,
    sections: [
      {
        title: `${topic} 소개`,
        content: `${topic}은(는) AI 게임 제작에서 중요한 기술입니다. 이 레슨에서는 기본 개념부터 실제 적용까지 단계별로 알아봅니다.`,
        type: "intro",
      },
      {
        title: "핵심 개념 이해하기",
        content: `${topic}의 핵심 원리를 이해해봅시다. AI 기술이 어떻게 게임 제작에 활용되는지, 어떤 도구를 사용할 수 있는지 알아봅니다.`,
        type: "concept",
      },
      {
        title: "실전 예제",
        content: `실제 게임 프로젝트에서 ${topic}을(를) 적용한 예제를 살펴봅니다. 단계별 과정을 따라하며 직접 체험해보세요.`,
        type: "example",
      },
      {
        title: "실습 과제",
        content: `배운 내용을 바탕으로 직접 ${topic}을(를) 활용한 미니 프로젝트를 만들어보세요.`,
        type: "exercise",
      },
      {
        title: "마무리 및 다음 단계",
        content: `${topic}의 기초를 학습했습니다. 지속적인 연습을 통해 실력을 키워보세요.`,
        type: "summary",
      },
    ],
    exercises: [
      {
        question: `${topic}을(를) 활용한 간단한 게임 요소를 하나 만들어보세요.`,
        hint: "이번 레슨에서 배운 핵심 개념을 적용해보세요.",
        expectedOutput: "직접 만든 결과물과 사용한 프롬프트/코드를 공유해주세요.",
      },
      {
        question: `${topic}의 장점과 한계를 각각 3가지씩 정리해보세요.`,
        hint: "실제 게임 제작 관점에서 생각해보세요.",
        expectedOutput: "장점 3가지, 한계 3가지를 구체적 예시와 함께 작성",
      },
    ],
    tags: [topic, "AI", "게임 제작", config.label],
    createdAt: new Date().toISOString(),
  };
}

/**
 * POST /api/content/generate-lesson
 * AI 레슨 콘텐츠 자동 생성
 */
export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { topic, level = "beginner" } = body;

    if (!topic || typeof topic !== "string") {
      return NextResponse.json(
        { error: "주제(topic)를 입력해주세요." },
        { status: 400 }
      );
    }

    const validLevels = ["beginner", "intermediate", "advanced"];
    if (!validLevels.includes(level)) {
      return NextResponse.json(
        { error: "레벨은 beginner, intermediate, advanced 중 하나여야 합니다." },
        { status: 400 }
      );
    }

    // 매칭되는 템플릿 탐색
    const matchedKey = Object.keys(TOPIC_TEMPLATES).find((key) =>
      topic.includes(key) || key.includes(topic)
    );

    let lesson: GeneratedLesson;
    const config = LEVEL_CONFIG[level] || LEVEL_CONFIG.beginner;

    if (matchedKey) {
      const template = TOPIC_TEMPLATES[matchedKey];
      lesson = {
        title: `${matchedKey} - ${config.label} 과정`,
        description: `AI를 활용한 ${matchedKey}에 대해 배웁니다. ${config.depth}으로 구성되어 있습니다.`,
        level: config.label,
        estimatedMinutes: config.minutes,
        sections: template.sections,
        exercises: template.exercises,
        tags: template.tags,
        createdAt: new Date().toISOString(),
      };
    } else {
      lesson = generateDefaultLesson(topic, level);
    }

    return NextResponse.json({
      success: true,
      data: lesson,
    });
  } catch (error) {
    console.error("[레슨 생성 API] 오류:", error);
    return NextResponse.json(
      { error: "레슨 생성 중 오류가 발생했습니다." },
      { status: 500 }
    );
  }
}
