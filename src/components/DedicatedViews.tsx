import React, { useState } from 'react';
import {
  ArrowLeft,
  BookOpen,
  FlaskConical,
  HelpCircle,
  ShieldCheck,
  Bot,
  TrendingUp,
  Search,
  CheckCircle,
  Play,
  Sigma,
  Sliders,
  Sparkles,
  Download,
  Share2,
  RefreshCw,
  Send,
  User,
  Zap,
  Eye,
  Magnet,
  Telescope
} from 'lucide-react';
import { CHAPTERS_DATA, EXPERIMENTS_LIST, SAMPLE_QUESTIONS, BOARD_PREP_CARDS } from '../data/physicsData';

interface ViewHeaderProps {
  title: string;
  badge: string;
  description: string;
  onBack: () => void;
}

const ViewHeader: React.FC<ViewHeaderProps> = ({ title, badge, description, onBack }) => (
  <div className="mb-8">
    <button
      onClick={onBack}
      className="inline-flex items-center gap-2 text-xs sm:text-sm font-semibold text-cyan-400 hover:text-cyan-300 mb-4 transition cursor-pointer"
    >
      <ArrowLeft className="w-4 h-4" />
      <span>Back to Landing Page</span>
    </button>
    <div className="flex flex-wrap items-center gap-3">
      <h1 className="text-2xl sm:text-4xl font-extrabold text-slate-100 dark:text-white light:text-slate-900 tracking-tight">
        {title}
      </h1>
      <span className="text-xs font-mono px-3 py-1 rounded-full bg-cyan-500/15 border border-cyan-500/30 text-cyan-400 font-bold">
        {badge}
      </span>
    </div>
    <p className="mt-2 text-sm sm:text-base text-slate-400 dark:text-slate-400 light:text-slate-600 max-w-3xl">
      {description}
    </p>
  </div>
);

// 1. CHAPTERS DEDICATED VIEW (/chapters)
export const ChaptersView: React.FC<{ onBack: () => void }> = ({ onBack }) => {
  const [selectedChapterId, setSelectedChapterId] = useState(CHAPTERS_DATA[0].id);
  const activeChapter = CHAPTERS_DATA.find((c) => c.id === selectedChapterId) || CHAPTERS_DATA[0];

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 animate-fadeIn">
      <ViewHeader
        title="Class 10 CBSE Physics Chapters"
        badge="NCERT 2026 Aligned"
        description="Comprehensive study notes, interactive concepts, Cartesian sign conventions, ray diagrams, and chapter formula sheets."
        onBack={onBack}
      />

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
        {/* Chapter List Column */}
        <div className="lg:col-span-4 space-y-3">
          <h3 className="text-xs font-mono uppercase tracking-wider text-slate-400 mb-2">
            Select Chapter
          </h3>
          {CHAPTERS_DATA.map((ch) => (
            <button
              key={ch.id}
              onClick={() => setSelectedChapterId(ch.id)}
              className={`w-full p-4 rounded-2xl text-left border transition cursor-pointer flex items-center justify-between ${
                selectedChapterId === ch.id
                  ? 'bg-cyan-950/60 border-cyan-500 text-cyan-300 shadow-md shadow-cyan-950/40'
                  : 'glass-panel border-slate-800 text-slate-300 hover:border-slate-700'
              }`}
            >
              <div>
                <div className="text-xs font-mono font-bold text-cyan-400">
                  Chapter {ch.number}
                </div>
                <div className="text-sm font-bold text-slate-100 dark:text-white light:text-slate-900 line-clamp-1">
                  {ch.title}
                </div>
                <div className="text-xs text-slate-400 mt-0.5">
                  {ch.topics.length} topics • {ch.experimentCount} labs
                </div>
              </div>
              <span className="text-xs font-mono font-bold text-cyan-400">
                {ch.progressPercentage}%
              </span>
            </button>
          ))}
        </div>

        {/* Chapter Deep Dive */}
        <div className="lg:col-span-8 rounded-3xl glass-panel p-6 sm:p-8 border border-slate-800">
          <div className="flex flex-wrap items-center justify-between gap-3 pb-4 mb-6 border-b border-slate-800">
            <div>
              <span className="text-xs font-mono text-cyan-400 font-bold">
                Chapter {activeChapter.number} Details
              </span>
              <h2 className="text-xl sm:text-2xl font-bold text-slate-100 dark:text-white light:text-slate-900">
                {activeChapter.title}
              </h2>
            </div>
            <div className="text-xs px-3 py-1.5 rounded-xl bg-slate-900 border border-slate-700 text-slate-300">
              Syllabus Weightage: <strong>6 - 8 Marks</strong>
            </div>
          </div>

          <p className="text-sm sm:text-base text-slate-300 dark:text-slate-300 light:text-slate-700 leading-relaxed mb-6">
            {activeChapter.description}
          </p>

          {/* Topics Breakdown */}
          <div className="mb-6">
            <h4 className="text-xs font-mono font-bold text-slate-400 uppercase tracking-wider mb-3">
              Core NCERT Topics
            </h4>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
              {activeChapter.topics.map((t, idx) => (
                <div
                  key={idx}
                  className="p-3 rounded-xl bg-slate-900/70 border border-slate-800 text-xs sm:text-sm text-slate-200 flex items-center gap-2"
                >
                  <CheckCircle className="w-4 h-4 text-cyan-400 shrink-0" />
                  <span>{t}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Key Formulas Section */}
          <div className="mb-6">
            <h4 className="text-xs font-mono font-bold text-cyan-400 uppercase tracking-wider mb-3 flex items-center gap-1.5">
              <Sigma className="w-4 h-4" />
              <span>Must-Know Chapter Formulas</span>
            </h4>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
              {activeChapter.keyFormulas.map((f, idx) => (
                <div
                  key={idx}
                  className="p-3 rounded-xl bg-slate-950/90 border border-cyan-500/30 text-xs sm:text-sm font-mono text-cyan-300 flex items-center justify-between"
                >
                  <span>{f}</span>
                  <span className="text-[10px] text-slate-400">Formula #{idx + 1}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="pt-4 border-t border-slate-800 flex flex-wrap gap-3">
            <button
              onClick={() => alert(`Starting practice tests for ${activeChapter.title}`)}
              className="px-5 py-2.5 rounded-xl bg-gradient-to-r from-cyan-500 to-blue-600 text-white font-semibold text-xs sm:text-sm shadow-md cursor-pointer"
            >
              Start Chapter Quiz
            </button>
            <button
              onClick={() => alert(`Notes PDF for ${activeChapter.title} downloaded!`)}
              className="px-4 py-2.5 rounded-xl bg-slate-800 hover:bg-slate-700 text-slate-200 font-medium text-xs sm:text-sm border border-slate-700 cursor-pointer flex items-center gap-1.5"
            >
              <Download className="w-4 h-4" />
              <span>Download Revision Sheet</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

// 2. DISCOVER LAB FULL VIEW (/discover-lab)
export const DiscoverLabView: React.FC<{ onBack: () => void }> = ({ onBack }) => {
  const [activeExp, setActiveExp] = useState(EXPERIMENTS_LIST[0]);
  const [variableA, setVariableA] = useState(50);
  const [variableB, setVariableB] = useState(4);

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 animate-fadeIn">
      <ViewHeader
        title="Virtual Science Laboratory"
        badge="Full Virtual Simulator"
        description="Interact with ray boxes, glass slabs, optical benches, multimeters, and electromagnets. Manipulate parameters and observe instant quantitative results."
        onBack={onBack}
      />

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
        {/* Experiments Directory Sidebar */}
        <div className="lg:col-span-4 space-y-2.5">
          <h3 className="text-xs font-mono uppercase tracking-wider text-slate-400 mb-2">
            CBSE Class 10 Practicals
          </h3>
          {EXPERIMENTS_LIST.map((exp) => (
            <button
              key={exp.id}
              onClick={() => setActiveExp(exp)}
              className={`w-full p-3.5 rounded-2xl text-left border transition cursor-pointer flex items-center justify-between ${
                activeExp.id === exp.id
                  ? 'bg-cyan-950/60 border-cyan-500 text-cyan-300 shadow-md shadow-cyan-950/40'
                  : 'glass-panel border-slate-800 text-slate-300 hover:border-slate-700'
              }`}
            >
              <div>
                <div className="text-xs font-mono font-bold text-cyan-400">{exp.tag}</div>
                <div className="text-sm font-bold text-slate-100 dark:text-white light:text-slate-900">
                  {exp.name}
                </div>
              </div>
              <span className="text-xs text-slate-400">{exp.chapter}</span>
            </button>
          ))}
        </div>

        {/* Live Lab Workbench */}
        <div className="lg:col-span-8 rounded-3xl glass-panel p-6 sm:p-8 border border-cyan-500/30">
          <div className="flex flex-wrap items-center justify-between gap-3 pb-4 mb-5 border-b border-slate-800">
            <div>
              <span className="text-xs font-mono text-cyan-400 font-bold uppercase">
                Active Simulation
              </span>
              <h2 className="text-xl sm:text-2xl font-bold text-slate-100 dark:text-white light:text-slate-900">
                {activeExp.name}
              </h2>
            </div>
            <div className="flex items-center gap-2">
              <button
                onClick={() => {
                  setVariableA(50);
                  setVariableB(4);
                }}
                className="p-2 rounded-xl bg-slate-800 text-slate-300 hover:text-white border border-slate-700 cursor-pointer"
                title="Reset simulation variables"
              >
                <RefreshCw className="w-4 h-4" />
              </button>
            </div>
          </div>

          <p className="text-sm text-slate-300 dark:text-slate-300 light:text-slate-600 mb-6">
            {activeExp.description}
          </p>

          {/* Dynamic SVG Lab Bench Simulation Canvas */}
          <div className="relative w-full h-80 rounded-2xl bg-slate-950 border border-slate-800 overflow-hidden flex items-center justify-center mb-6">
            <div className="absolute inset-0 sci-grid-dark opacity-35" />

            <svg className="w-full h-full" viewBox="0 0 600 300" preserveAspectRatio="xMidYMid meet">
              <line x1="50" y1="150" x2="550" y2="150" stroke="#475569" strokeWidth="1.5" strokeDasharray="4 4" />
              
              {/* Lens / Optical element */}
              <g transform="translate(300, 150)">
                <ellipse cx="0" cy="0" rx="14" ry="90" fill="rgba(34, 211, 238, 0.15)" stroke="#22d3ee" strokeWidth="2.5" />
                <line x1="0" y1="-100" x2="0" y2="100" stroke="#06b6d4" strokeWidth="1" strokeDasharray="3 3" />
                <circle cx="0" cy="0" r="3" fill="#22d3ee" />
                <text x="8" y="-80" fill="#38bdf8" fontSize="11" fontWeight="bold">
                  Optical Center (O)
                </text>
              </g>

              {/* Focus points */}
              <circle cx="220" cy="150" r="3" fill="#a855f7" />
              <text x="214" y="168" fill="#c084fc" fontSize="10" fontFamily="monospace">F₁ (80mm)</text>

              <circle cx="380" cy="150" r="3" fill="#a855f7" />
              <text x="374" y="168" fill="#c084fc" fontSize="10" fontFamily="monospace">F₂ (80mm)</text>

              {/* Dynamic Object */}
              {(() => {
                const objX = 100 + variableA * 1.5;
                const objH = variableB * 10;
                return (
                  <g>
                    <line x1={objX} y1="150" x2={objX} y2={150 - objH} stroke="#4ade80" strokeWidth="3.5" />
                    <polygon points={`${objX-5},${150-objH+6} ${objX+5},${150-objH+6} ${objX},${150-objH-2}`} fill="#4ade80" />
                    <text x={objX - 25} y={150 - objH - 8} fill="#86efac" fontSize="11" fontWeight="bold">
                      Object u = -{Math.round(300 - objX)}cm
                    </text>

                    {/* Dynamic Rays */}
                    <path
                      d={`M ${objX} ${150 - objH} L 300 ${150 - objH} L 460 210`}
                      fill="none"
                      stroke="#22d3ee"
                      strokeWidth="2"
                      className="animate-ray"
                    />
                    <path
                      d={`M ${objX} ${150 - objH} L 300 150 L 460 210`}
                      fill="none"
                      stroke="#fbbf24"
                      strokeWidth="1.8"
                      strokeDasharray="4 2"
                    />

                    {/* Image */}
                    <line x1="460" y1="150" x2="460" y2="210" stroke="#f43f5e" strokeWidth="3" />
                    <text x="440" y="226" fill="#fb7185" fontSize="10" fontWeight="bold">
                      Real, Inverted Image
                    </text>
                  </g>
                );
              })()}
            </svg>
          </div>

          {/* Interactive Variable Controls */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 p-4 rounded-2xl bg-slate-900/90 border border-slate-800 mb-5">
            <div>
              <div className="flex items-center justify-between text-xs font-semibold mb-2">
                <span className="text-slate-300">Object Distance (u):</span>
                <span className="text-cyan-400 font-mono font-bold">{variableA} cm</span>
              </div>
              <input
                type="range"
                min="10"
                max="90"
                value={variableA}
                onChange={(e) => setVariableA(Number(e.target.value))}
                className="w-full h-2 bg-slate-800 rounded-lg appearance-none cursor-pointer accent-cyan-400"
              />
            </div>

            <div>
              <div className="flex items-center justify-between text-xs font-semibold mb-2">
                <span className="text-slate-300">Object Height (h):</span>
                <span className="text-amber-400 font-mono font-bold">{variableB} cm</span>
              </div>
              <input
                type="range"
                min="2"
                max="8"
                value={variableB}
                onChange={(e) => setVariableB(Number(e.target.value))}
                className="w-full h-2 bg-slate-800 rounded-lg appearance-none cursor-pointer accent-amber-400"
              />
            </div>
          </div>

          {/* Lab variables guide */}
          <div className="p-3.5 rounded-xl bg-slate-950/60 border border-slate-800 text-xs text-slate-400">
            <span className="font-semibold text-slate-200">Controlled Parameters: </span>
            {activeExp.keyVariables.join(' • ')}
          </div>
        </div>
      </div>
    </div>
  );
};

// 3. QUESTION BANK VIEW (/question-bank and /practice)
export const QuestionBankView: React.FC<{ onBack: () => void }> = ({ onBack }) => {
  const [filterChapter, setFilterChapter] = useState('All');
  const [solvedCount, setSolvedCount] = useState(0);

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 animate-fadeIn">
      <ViewHeader
        title="Class 10 Physics Question Bank"
        badge="500+ Practice Items"
        description="Comprehensive repository of MCQs, Assertion-Reason questions, numericals with sign conventions, and case study questions from the past 10 years of CBSE Board papers."
        onBack={onBack}
      />

      <div className="flex flex-wrap items-center justify-between gap-4 mb-6 pb-4 border-b border-slate-800">
        <div className="flex items-center gap-2 overflow-x-auto">
          {['All', 'Electricity', 'Light', 'Magnetic Effects', 'Human Eye'].map((ch) => (
            <button
              key={ch}
              onClick={() => setFilterChapter(ch)}
              className={`px-3.5 py-1.5 rounded-xl text-xs font-semibold whitespace-nowrap transition cursor-pointer ${
                filterChapter === ch
                  ? 'bg-cyan-500 text-slate-950 font-bold'
                  : 'bg-slate-900 border border-slate-800 text-slate-400 hover:text-slate-200'
              }`}
            >
              {ch}
            </button>
          ))}
        </div>

        <div className="text-xs font-mono text-cyan-400">
          Current Session Solved: <strong>{solvedCount}</strong> questions
        </div>
      </div>

      <div className="space-y-4">
        {SAMPLE_QUESTIONS.map((q, idx) => (
          <div
            key={q.id}
            className="p-6 rounded-3xl glass-panel border border-slate-800 hover:border-cyan-500/40 transition"
          >
            <div className="flex flex-wrap items-center justify-between gap-2 mb-3">
              <div className="flex items-center gap-2">
                <span className="text-xs font-mono px-2.5 py-0.5 rounded bg-amber-500/15 text-amber-400 border border-amber-500/30 font-bold">
                  {q.category}
                </span>
                <span className="text-xs text-slate-400">{q.chapter}</span>
              </div>
              <div className="text-xs font-mono text-slate-400">
                Difficulty: <span className="text-amber-400">{q.difficulty}</span> • Marks:{' '}
                <span className="text-cyan-400">{q.marks}</span>
              </div>
            </div>

            <p className="text-sm sm:text-base font-medium text-slate-100 dark:text-white light:text-slate-900 mb-4 whitespace-pre-line">
              {q.question}
            </p>

            {q.options && (
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 mb-4">
                {q.options.map((opt, oIdx) => (
                  <button
                    key={oIdx}
                    onClick={() => {
                      setSolvedCount((p) => p + 1);
                      alert(
                        oIdx === q.correctOptionIndex
                          ? `Correct! Full ${q.marks} Marks awarded.`
                          : `Incorrect. Correct answer is option ${String.fromCharCode(65 + (q.correctOptionIndex || 0))}.`
                      );
                    }}
                    className="p-3 rounded-xl bg-slate-900/80 hover:bg-cyan-950/40 border border-slate-800 hover:border-cyan-500/40 text-left text-xs sm:text-sm text-slate-300 transition cursor-pointer flex items-center gap-2"
                  >
                    <span className="w-5 h-5 rounded bg-slate-800 text-slate-400 flex items-center justify-center font-mono text-[10px] shrink-0 font-bold">
                      {String.fromCharCode(65 + oIdx)}
                    </span>
                    <span>{opt}</span>
                  </button>
                ))}
              </div>
            )}

            <div className="pt-3 border-t border-slate-800 flex items-center justify-between text-xs text-slate-400">
              <span>Includes step-by-step CBSE marking scheme explanation</span>
              <button
                onClick={() => alert(`Marking Scheme:\n${q.explanation}`)}
                className="text-cyan-400 font-semibold hover:underline cursor-pointer"
              >
                View Marking Scheme
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

// 4. BOARD PREPARATION VIEW (/board-prep)
export const BoardPrepView: React.FC<{ onBack: () => void }> = ({ onBack }) => {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 animate-fadeIn">
      <ViewHeader
        title="CBSE Board Exam Command Centre"
        badge="Board Booster 2026"
        description="Access all formulas with Cartesian sign conventions, 10-year previous board questions, quick revision sheets, and high-yield diagram cheat-sheets."
        onBack={onBack}
      />

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-10">
        {BOARD_PREP_CARDS.map((card) => (
          <div
            key={card.id}
            className="p-6 rounded-3xl glass-panel border border-slate-800 hover:border-blue-500/40 transition"
          >
            <div className="flex items-center justify-between mb-3">
              <span className="text-xs font-mono px-2.5 py-0.5 rounded bg-blue-500/20 text-blue-300">
                {card.badge}
              </span>
            </div>
            <h3 className="text-lg font-bold text-slate-100 mb-2">{card.title}</h3>
            <p className="text-xs text-slate-400 leading-relaxed mb-4">{card.desc}</p>
            <button
              onClick={() => alert(`Opening ${card.title} materials`)}
              className="w-full py-2 rounded-xl bg-blue-600/20 hover:bg-blue-600/30 text-blue-300 text-xs font-semibold border border-blue-500/30 cursor-pointer"
            >
              Access Resource
            </button>
          </div>
        ))}
      </div>

      {/* Complete Formula Reference Cheat Sheet */}
      <div className="rounded-3xl glass-panel p-6 sm:p-8 border border-slate-800">
        <h3 className="text-xl font-bold text-slate-100 mb-4 flex items-center gap-2">
          <Sigma className="w-5 h-5 text-cyan-400" />
          <span>Complete Class 10 Physics Formula Matrix</span>
        </h3>
        <div className="overflow-x-auto">
          <table className="w-full text-left text-xs sm:text-sm text-slate-300">
            <thead className="border-b border-slate-800 text-slate-400 font-mono text-[11px] uppercase">
              <tr>
                <th className="py-3 px-4">Concept / Law</th>
                <th className="py-3 px-4">Standard Formula</th>
                <th className="py-3 px-4">Cartesian Sign / Condition</th>
                <th className="py-3 px-4">SI Units</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-800 font-mono">
              <tr>
                <td className="py-3 px-4 font-sans font-semibold text-white">Mirror Formula</td>
                <td className="py-3 px-4 text-cyan-400">1/f = 1/v + 1/u</td>
                <td className="py-3 px-4 text-slate-400">u is always -ve; f is -ve for concave, +ve for convex</td>
                <td className="py-3 px-4 text-slate-400">meters (m)</td>
              </tr>
              <tr>
                <td className="py-3 px-4 font-sans font-semibold text-white">Lens Formula</td>
                <td className="py-3 px-4 text-cyan-400">1/f = 1/v - 1/u</td>
                <td className="py-3 px-4 text-slate-400">f is +ve for convex lens, -ve for concave lens</td>
                <td className="py-3 px-4 text-slate-400">meters (m)</td>
              </tr>
              <tr>
                <td className="py-3 px-4 font-sans font-semibold text-white">Power of a Lens</td>
                <td className="py-3 px-4 text-cyan-400">P = 1 / f (in m)</td>
                <td className="py-3 px-4 text-slate-400">f must be converted into meters first</td>
                <td className="py-3 px-4 text-amber-400">Dioptres (D)</td>
              </tr>
              <tr>
                <td className="py-3 px-4 font-sans font-semibold text-white">Ohm's Law</td>
                <td className="py-3 px-4 text-cyan-400">V = I · R</td>
                <td className="py-3 px-4 text-slate-400">Valid at constant temperature</td>
                <td className="py-3 px-4 text-amber-400">Volt (V), Ampere (A), Ohm (Ω)</td>
              </tr>
              <tr>
                <td className="py-3 px-4 font-sans font-semibold text-white">Joule's Heating</td>
                <td className="py-3 px-4 text-cyan-400">H = I² · R · t</td>
                <td className="py-3 px-4 text-slate-400">Time t in seconds</td>
                <td className="py-3 px-4 text-amber-400">Joules (J)</td>
              </tr>
              <tr>
                <td className="py-3 px-4 font-sans font-semibold text-white">Electric Power</td>
                <td className="py-3 px-4 text-cyan-400">P = V · I = I²R = V²/R</td>
                <td className="py-3 px-4 text-slate-400">Commercial unit: 1 kWh = 3.6 × 10⁶ J</td>
                <td className="py-3 px-4 text-amber-400">Watt (W)</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

// 5. AI TUTOR DEDICATED VIEW (/ai-tutor)
export const AITutorView: React.FC<{ onBack: () => void }> = ({ onBack }) => {
  const [messages, setMessages] = useState<Array<{ sender: 'user' | 'ai'; text: string; time: string }>>([
    {
      sender: 'ai',
      text: "Hello! I am your Class 10 CBSE Physics AI Tutor. You can ask me any doubt about Optics, Electricity, Magnetic Effects, ray diagrams, or Cartesian sign conventions. What are you studying today?",
      time: 'Just now',
    },
  ]);
  const [input, setInput] = useState('');

  const handleSend = () => {
    if (!input.trim()) return;
    const userText = input;
    const newMsg = { sender: 'user' as const, text: userText, time: 'Just now' };
    setMessages((prev) => [...prev, newMsg]);
    setInput('');

    // Pedagogical physics responses tailored to Class 10 CBSE
    setTimeout(() => {
      let reply = "According to CBSE Class 10 Physics principles, let's break this down step-by-step:\n1. Identify given variables and apply the Cartesian sign convention.\n2. Recall relevant equation (e.g. 1/f = 1/v - 1/u or V = IR).\n3. Substitute values with proper SI units.\nLet me know if you want a detailed numerical calculation!";
      
      const lower = userText.toLowerCase();
      if (lower.includes('ohm') || lower.includes('resistance')) {
        reply = "Ohm's Law states that electric current flowing through a metallic conductor is directly proportional to the potential difference across its ends, provided temperature remains constant: V = IR. When resistance increases, current decreases in an inverse ratio.";
      } else if (lower.includes('mirror') || lower.includes('focal') || lower.includes('sign')) {
        reply = "Under Cartesian Sign Conventions: All distances are measured from the Pole (P) as origin. The focal length of a concave mirror is ALWAYS negative (f < 0), while for a convex mirror it is always positive (f > 0). Object distance (u) is always taken as negative.";
      } else if (lower.includes('prism') || lower.includes('rainbow') || lower.includes('sky')) {
        reply = "In a glass prism, white light splits because different colors travel at different speeds in glass. Violet light deviates the most (shortest wavelength), and red light deviates the least (longest wavelength). The blue color of the clear sky is due to Rayleigh scattering (Intensity ∝ 1/λ⁴).";
      }

      setMessages((prev) => [...prev, { sender: 'ai', text: reply, time: 'Just now' }]);
    }, 500);
  };

  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8 animate-fadeIn">
      <ViewHeader
        title="Physics AI Tutor"
        badge="24/7 CBSE Assistant"
        description="Instant step-by-step solutions for Physics doubts, diagrams, formula explanations, and numerical solving."
        onBack={onBack}
      />

      <div className="rounded-3xl glass-panel border border-emerald-500/30 overflow-hidden flex flex-col h-[580px] shadow-2xl">
        {/* Chat Header */}
        <div className="p-4 bg-slate-900/90 border-b border-slate-800 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-9 h-9 rounded-xl bg-emerald-500/20 text-emerald-400 flex items-center justify-center border border-emerald-500/30">
              <Bot className="w-5 h-5" />
            </div>
            <div>
              <div className="text-sm font-bold text-white">Physics Lab AI Tutor</div>
              <div className="text-xs text-slate-400">Class 10 CBSE Physics Specialist</div>
            </div>
          </div>
          <span className="text-xs font-mono text-emerald-400 bg-emerald-500/10 px-2 py-0.5 rounded border border-emerald-500/25">
            Active
          </span>
        </div>

        {/* Chat Messages */}
        <div className="flex-1 p-4 overflow-y-auto space-y-4">
          {messages.map((m, i) => (
            <div
              key={i}
              className={`flex items-start gap-3 ${m.sender === 'user' ? 'justify-end' : 'justify-start'}`}
            >
              {m.sender === 'ai' && (
                <div className="w-8 h-8 rounded-xl bg-emerald-500/20 text-emerald-400 flex items-center justify-center shrink-0 border border-emerald-500/30">
                  <Bot className="w-4 h-4" />
                </div>
              )}
              <div
                className={`max-w-[85%] rounded-2xl p-4 text-xs sm:text-sm leading-relaxed whitespace-pre-line shadow-md ${
                  m.sender === 'user'
                    ? 'bg-gradient-to-r from-blue-600 to-cyan-600 text-white rounded-tr-none'
                    : 'bg-slate-900 border border-slate-800 text-slate-200 rounded-tl-none'
                }`}
              >
                {m.text}
              </div>
            </div>
          ))}
        </div>

        {/* Prompt Suggestions */}
        <div className="p-2.5 bg-slate-900/40 border-t border-slate-800 flex items-center gap-2 overflow-x-auto text-[11px]">
          <span className="text-slate-400 font-mono shrink-0">Try:</span>
          {["Cartesian sign convention rules", "Why is sky blue?", "Explain Ohm's law with V-I graph", "Fleming's Left Hand Rule"].map((prompt) => (
            <button
              key={prompt}
              onClick={() => {
                setInput(prompt);
              }}
              className="px-2.5 py-1 rounded-lg bg-slate-800 hover:bg-slate-700 text-slate-300 whitespace-nowrap cursor-pointer transition"
            >
              {prompt}
            </button>
          ))}
        </div>

        {/* Input Bar */}
        <div className="p-3 bg-slate-900/90 border-t border-slate-800 flex items-center gap-2">
          <input
            type="text"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            onKeyDown={(e) => e.key === 'Enter' && handleSend()}
            placeholder="Type your Physics question here (e.g. numerical on convex lens)..."
            className="flex-1 bg-slate-950 border border-slate-700 rounded-xl px-4 py-2.5 text-xs sm:text-sm text-slate-100 focus:outline-none focus:border-emerald-500"
          />
          <button
            onClick={handleSend}
            className="p-2.5 rounded-xl bg-gradient-to-r from-emerald-500 to-teal-600 text-white font-semibold cursor-pointer transition"
          >
            <Send className="w-4 h-4" />
          </button>
        </div>
      </div>
    </div>
  );
};

// 6. STUDENT PROGRESS VIEW (/progress)
export const ProgressView: React.FC<{ onBack: () => void }> = ({ onBack }) => {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 animate-fadeIn">
      <ViewHeader
        title="Student Learning Analytics"
        badge="Class 10 CBSE Tracker"
        description="Monitor chapter completion, accuracy trends in numericals, and identify specific topics requiring revision before Board Exams."
        onBack={onBack}
      />

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
        <div className="p-5 rounded-3xl glass-panel border border-slate-800 text-center">
          <div className="text-xs text-slate-400">Total Practice Time</div>
          <div className="text-3xl font-bold font-mono text-cyan-400 mt-1">28.5 hrs</div>
          <div className="text-[11px] text-emerald-400 mt-1">Active this month</div>
        </div>
        <div className="p-5 rounded-3xl glass-panel border border-slate-800 text-center">
          <div className="text-xs text-slate-400">Questions Solved</div>
          <div className="text-3xl font-bold font-mono text-white mt-1">247</div>
          <div className="text-[11px] text-slate-400 mt-1">86% accuracy</div>
        </div>
        <div className="p-5 rounded-3xl glass-panel border border-slate-800 text-center">
          <div className="text-xs text-slate-400">Virtual Experiments</div>
          <div className="text-3xl font-bold font-mono text-indigo-400 mt-1">12 / 20</div>
          <div className="text-[11px] text-indigo-300 mt-1">60% completed</div>
        </div>
        <div className="p-5 rounded-3xl glass-panel border border-slate-800 text-center">
          <div className="text-xs text-slate-400">Predicted Board Marks</div>
          <div className="text-3xl font-bold font-mono text-emerald-400 mt-1">23 / 25</div>
          <div className="text-[11px] text-emerald-300 mt-1">Physics Theory component</div>
        </div>
      </div>

      <div className="rounded-3xl glass-panel p-6 sm:p-8 border border-slate-800">
        <h3 className="text-lg font-bold text-slate-100 mb-6">Chapter Mastery Breakdown</h3>
        <div className="space-y-6">
          {CHAPTERS_DATA.map((ch) => (
            <div key={ch.id} className="space-y-2">
              <div className="flex items-center justify-between text-xs sm:text-sm font-semibold">
                <span className="text-slate-200">
                  Chapter {ch.number}: {ch.title}
                </span>
                <span className="font-mono text-cyan-400">{ch.progressPercentage}%</span>
              </div>
              <div className="w-full h-3 bg-slate-800 rounded-full overflow-hidden">
                <div
                  className={`h-full bg-gradient-to-r ${ch.color}`}
                  style={{ width: `${ch.progressPercentage}%` }}
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
