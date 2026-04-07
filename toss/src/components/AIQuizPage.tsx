import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Brain, CheckCircle2, XCircle, Flame, ChevronRight, Trophy } from 'lucide-react';

const QUIZZES = [
  { q: 'ChatGPT를 만든 회사는?', options: ['Google', 'Meta', 'OpenAI', 'Microsoft'], answer: 2, desc: 'OpenAI가 2022년 11월 출시한 ChatGPT는 대화형 AI의 대중화를 이끌었어요. Microsoft는 주요 투자자예요.' },
  { q: '생성형 AI(Generative AI)가 가장 잘 하는 것은?', options: ['데이터 삭제', '새로운 콘텐츠 생성', '바이러스 차단', '배터리 절약'], answer: 1, desc: '생성형 AI는 텍스트, 이미지, 음악 등 새로운 콘텐츠를 만들어내는 AI예요. GPT, DALL-E, Suno 등이 대표 사례죠.' },
  { q: 'LLM의 뜻은?', options: ['Low Level Machine', 'Large Language Model', 'Long Logic Method', 'Light Learning Mode'], answer: 1, desc: 'LLM(Large Language Model)은 대규모 텍스트로 학습한 AI 모델이에요. GPT-4, Claude, Gemini 등이 LLM이에요.' },
  { q: 'AI가 학습할 때 필요한 것은?', options: ['전기만 많으면 됨', '대량의 데이터', '인터넷 연결', '사람의 지시'], answer: 1, desc: 'AI는 방대한 양의 데이터로 패턴을 학습해요. 좋은 데이터가 좋은 AI를 만드는 핵심이에요.' },
  { q: 'AI 할루시네이션(Hallucination)이란?', options: ['AI가 잠을 자는 것', 'AI가 틀린 정보를 사실처럼 말하는 것', 'AI가 멈추는 현상', 'AI가 업데이트되는 것'], answer: 1, desc: 'AI가 확인되지 않은 정보를 자신있게 말하는 현상이에요. AI 답변은 항상 교차 검증하는 습관이 중요해요.' },
  { q: '프롬프트(Prompt)란?', options: ['AI에게 내리는 명령/지시', 'AI의 메모리', 'AI 학습 비용', '컴퓨터 화면'], answer: 0, desc: 'AI에게 원하는 결과를 얻기 위해 입력하는 질문이나 지시문이에요. 잘 쓴 프롬프트가 좋은 결과를 만들어요.' },
  { q: '현재 AI 이미지 생성 도구가 아닌 것은?', options: ['DALL-E', 'Midjourney', 'Stable Diffusion', 'AutoCAD'], answer: 3, desc: 'AutoCAD는 설계 프로그램이에요. DALL-E(OpenAI), Midjourney, Stable Diffusion은 모두 AI 이미지 생성 도구예요.' },
  { q: 'AI를 활용해 코드를 자동으로 완성해주는 도구는?', options: ['Photoshop', 'GitHub Copilot', 'Excel', 'Figma'], answer: 1, desc: 'GitHub Copilot은 AI가 코드 자동완성을 도와주는 도구예요. 개발자 생산성을 2배 높인다는 연구 결과가 있어요.' },
  { q: '딥러닝(Deep Learning)의 특징은?', options: ['규칙을 직접 입력해야 함', '데이터에서 스스로 규칙을 학습', '인터넷에서만 작동', '숫자만 처리 가능'], answer: 1, desc: '딥러닝은 데이터에서 스스로 패턴을 발견해요. 이미지 인식, 번역, 음성 인식 등 대부분의 현대 AI 기술이 딥러닝 기반이에요.' },
  { q: 'AGI(인공일반지능)란?', options: ['특정 분야만 잘하는 AI', '인간처럼 모든 분야에서 사고하는 AI', '로봇 AI', '게임용 AI'], answer: 1, desc: '현재 AI는 특정 작업에 특화된 약한AI(Narrow AI)예요. AGI는 인간처럼 어떤 문제든 스스로 사고하고 해결할 수 있는 AI를 뜻해요.' },
];

const STORAGE_KEY = 'everyones_ai_quiz_v1';
const TODAY = new Date().toISOString().slice(0, 10);

interface State { date: string; done: boolean; streak: number; totalCorrect: number; totalPlayed: number; }

function loadState(): State {
  try {
    const s: State = JSON.parse(localStorage.getItem(STORAGE_KEY) || '{}');
    if (!s.date) return { date: TODAY, done: false, streak: 0, totalCorrect: 0, totalPlayed: 0 };
    if (s.date !== TODAY) return { date: TODAY, done: false, streak: s.done ? s.streak : 0, totalCorrect: s.totalCorrect ?? 0, totalPlayed: s.totalPlayed ?? 0 };
    return s;
  } catch { return { date: TODAY, done: false, streak: 0, totalCorrect: 0, totalPlayed: 0 }; }
}

const RANK_LABELS = [
  { min: 0, label: 'AI 입문자', emoji: '🌱', color: '#10B981' },
  { min: 3, label: 'AI 호기심러', emoji: '🔍', color: '#3B82F6' },
  { min: 7, label: 'AI 상식인', emoji: '🧠', color: '#8B5CF6' },
  { min: 15, label: 'AI 마스터', emoji: '🏆', color: '#F59E0B' },
];

function getRank(total: number) {
  return [...RANK_LABELS].reverse().find(r => total >= r.min) ?? RANK_LABELS[0];
}

export default function AIQuizPage() {
  const todayIdx = new Date().getDate() % QUIZZES.length;
  const quiz = QUIZZES[todayIdx];

  const [state, setState] = useState<State>(loadState);
  const [selected, setSelected] = useState<number | null>(null);
  const [revealed, setRevealed] = useState(false);

  const save = (next: State) => {
    setState(next);
    localStorage.setItem(STORAGE_KEY, JSON.stringify(next));
  };

  const handleSelect = (i: number) => {
    if (revealed) return;
    setSelected(i);
    setRevealed(true);
    const correct = i === quiz.answer;
    save({
      ...state,
      done: true,
      streak: correct ? state.streak + 1 : 0,
      totalCorrect: state.totalCorrect + (correct ? 1 : 0),
      totalPlayed: state.totalPlayed + 1,
    });
  };

  const rank = getRank(state.totalCorrect);
  const isCorrect = selected === quiz.answer;

  // 이미 오늘 풀었음
  if (state.done && !revealed) {
    return (
      <div className="flex flex-col items-center justify-center min-h-screen px-5 text-center">
        <div className="text-6xl mb-4">{rank.emoji}</div>
        <h2 className="text-xl font-black text-gray-900 mb-1">오늘 퀴즈 완료!</h2>
        <p className="text-sm text-gray-400 mb-5">내일 새로운 AI 퀴즈가 기다려요</p>
        <div className="flex items-center gap-2 mb-3" style={{ color: '#F97316' }}>
          <Flame size={18} />
          <span className="font-black">{state.streak}일 연속 도전 중</span>
        </div>
        <div className="bg-gray-50 rounded-2xl px-6 py-4 mt-2">
          <p className="text-xs text-gray-400 mb-1">누적 정답</p>
          <p className="text-2xl font-black" style={{ color: rank.color }}>{state.totalCorrect}문제</p>
          <p className="text-sm font-bold mt-1" style={{ color: rank.color }}>{rank.label}</p>
        </div>
      </div>
    );
  }

  return (
    <div className="flex flex-col min-h-screen">
      {/* 헤더 */}
      <div className="bg-white px-5 pt-12 pb-5 border-b border-gray-100">
        <div className="flex items-center gap-2 mb-1">
          <Brain size={18} className="text-blue-500" />
          <span className="text-sm font-black text-blue-600">모두의 AI 퀴즈</span>
        </div>
        <div className="flex items-center justify-between">
          {state.streak > 0 && (
            <div className="flex items-center gap-1 text-orange-500 text-xs font-bold">
              <Flame size={13} />{state.streak}일 연속
            </div>
          )}
          <div className="flex items-center gap-1 ml-auto">
            <Trophy size={12} style={{ color: rank.color }} />
            <span className="text-xs font-bold" style={{ color: rank.color }}>{rank.label}</span>
          </div>
        </div>
      </div>

      <div className="flex-1 px-5 py-6">
        {/* 문제 */}
        <div className="bg-blue-50 rounded-2xl p-5 mb-6">
          <p className="text-xs text-blue-500 font-black mb-2">Q{todayIdx + 1}. 오늘의 AI 상식</p>
          <p className="text-lg font-black text-gray-900 leading-snug">{quiz.q}</p>
        </div>

        {/* 보기 */}
        <div className="space-y-3">
          {quiz.options.map((opt, i) => {
            let cls = 'border border-gray-200 bg-white text-gray-800';
            if (revealed) {
              if (i === quiz.answer) cls = 'border-2 border-blue-500 bg-blue-50 text-blue-800';
              else if (i === selected) cls = 'border-2 border-red-400 bg-red-50 text-red-700';
              else cls = 'border border-gray-100 bg-gray-50 text-gray-400';
            }
            return (
              <motion.button key={i} whileTap={!revealed ? { scale: 0.98 } : {}}
                onClick={() => handleSelect(i)}
                className={`w-full text-left rounded-2xl px-4 py-4 font-semibold text-sm flex items-center justify-between transition-colors ${cls}`}>
                <span>{opt}</span>
                {revealed && i === quiz.answer && <CheckCircle2 size={18} className="text-blue-500 shrink-0" />}
                {revealed && i === selected && i !== quiz.answer && <XCircle size={18} className="text-red-400 shrink-0" />}
              </motion.button>
            );
          })}
        </div>

        {/* 해설 */}
        <AnimatePresence>
          {revealed && (
            <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }}
              className={`mt-5 rounded-2xl p-4 ${isCorrect ? 'bg-blue-50' : 'bg-gray-50'}`}>
              <p className={`text-sm font-black mb-1 ${isCorrect ? 'text-blue-700' : 'text-gray-600'}`}>
                {isCorrect ? '🎉 정답!' : '😅 오답'}
              </p>
              <p className="text-sm text-gray-600 leading-relaxed">{quiz.desc}</p>
            </motion.div>
          )}
        </AnimatePresence>
      </div>

      {/* CTA */}
      {revealed && (
        <div className="px-5 pb-8">
          <motion.a initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }}
            href="https://everyones-ai.vibers.co.kr"
            target="_blank" rel="noreferrer"
            className="w-full py-4 rounded-2xl font-black text-sm text-white flex items-center justify-center gap-2 bg-blue-500">
            AI 강의 무료로 보러 가기
            <ChevronRight size={16} />
          </motion.a>
        </div>
      )}
    </div>
  );
}
