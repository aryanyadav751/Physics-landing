import React, { useState } from 'react';
import { Bot, User, Sparkles, ArrowRight, CornerDownLeft, Send, HelpCircle, CheckCircle2 } from 'lucide-react';

interface AITutorPreviewProps {
  onAskAI: () => void;
}

const PRESET_QUERIES = [
  {
    q: "Why does current decrease when resistance increases?",
    response: "According to Ohm's law, V = IR (or I = V / R). If the voltage (V) across the conductor remains constant and resistance (R) increases, the opposing force to the drift of electrons becomes greater. Mathematically, since Current (I) is inversely proportional to Resistance (R), doubling the resistance cuts the electric current in half.",
    formula: "I = V / R  (Ohm's Law)",
    steps: [
      "1. Identify relationship: I = V / R",
      "2. State condition: Voltage V is constant",
      "3. Conclude: I ∝ 1/R (Current is inversely proportional to resistance)",
    ],
  },
  {
    q: "Explain why sky appears blue during daylight.",
    response: "According to Rayleigh's scattering law, the intensity of scattered light is inversely proportional to the fourth power of wavelength (Intensity ∝ 1/λ⁴). Blue light has a significantly shorter wavelength than red light. As sunlight passes through the atmosphere, nitrogen and oxygen molecules scatter the shorter blue wavelengths much more strongly in all directions, illuminating the daytime sky blue.",
    formula: "Intensity ∝ 1 / λ⁴  (Rayleigh Scattering)",
    steps: [
      "1. Atmosphere contains particles smaller than light wavelength",
      "2. Rayleigh condition: Shorter wavelengths scatter far more",
      "3. Blue light (λ ≈ 400-480nm) scatters ~10x more than red (λ ≈ 700nm)",
    ],
  },
  {
    q: "What is Cartesian sign convention for concave mirror focal length?",
    response: "Under the New Cartesian Sign Convention:\n1. All distances are measured from the Pole (P) as the origin.\n2. Distances measured against the direction of incident light are taken as NEGATIVE.\n3. Since the focus (F) of a concave mirror lies in front of the reflecting surface (to the left of the pole), its focal length 'f' is ALWAYS NEGATIVE.",
    formula: "f < 0  (Concave Mirror Focal Length is always negative)",
    steps: [
      "Pole (P) is origin (0, 0)",
      "Incident ray travels from left to right (+x)",
      "Focus F is to the left (-x) → f is negative",
    ],
  },
];

export const AITutorPreview: React.FC<AITutorPreviewProps> = ({ onAskAI }) => {
  const [selectedPreset, setSelectedPreset] = useState(0);

  const currentQuery = PRESET_QUERIES[selectedPreset];

  return (
    <section id="ai-tutor-preview-section" className="relative py-16 sm:py-24 border-t border-slate-800/80 dark:border-slate-800 light:border-slate-200 overflow-hidden">
      {/* Background Ambient Glow */}
      <div className="absolute top-1/3 right-10 w-96 h-96 bg-indigo-500/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Left Column: AI Text Pitch */}
          <div className="lg:col-span-5 space-y-6 text-center lg:text-left">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 text-xs font-semibold uppercase tracking-wider">
              <Bot className="w-3.5 h-3.5" />
              <span>AI Physics Mentor</span>
            </div>

            <div>
              <p className="text-sm font-semibold tracking-wider text-cyan-400 uppercase">
                Stuck on a Question?
              </p>
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-slate-100 dark:text-white light:text-slate-900 mt-2 leading-tight">
                Ask Your Physics AI Tutor.
              </h2>
            </div>

            <p className="text-base sm:text-lg text-slate-300 dark:text-slate-300 light:text-slate-600 leading-relaxed">
              Get step-by-step explanations for concepts, numericals, formulas, diagrams, and doubts. Trained on the exact CBSE marking scheme to help you score full marks.
            </p>

            {/* Feature Checklist */}
            <div className="space-y-3 pt-2 text-left">
              <div className="flex items-center gap-2.5 text-sm text-slate-200 dark:text-slate-200 light:text-slate-700">
                <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                <span>Step-by-step numerical solving with Cartesian sign checks</span>
              </div>
              <div className="flex items-center gap-2.5 text-sm text-slate-200 dark:text-slate-200 light:text-slate-700">
                <CheckCircle2 className="w-4 h-4 text-cyan-400 shrink-0" />
                <span>Ray diagram logic breakdown & optical center rules</span>
              </div>
              <div className="flex items-center gap-2.5 text-sm text-slate-200 dark:text-slate-200 light:text-slate-700">
                <CheckCircle2 className="w-4 h-4 text-indigo-400 shrink-0" />
                <span>CBSE Board marking scheme alignment</span>
              </div>
            </div>

            {/* Preset Query Pickers */}
            <div className="pt-2">
              <p className="text-xs font-mono text-slate-400 mb-2">Try asking these sample questions:</p>
              <div className="flex flex-wrap gap-2">
                {PRESET_QUERIES.map((item, idx) => (
                  <button
                    key={idx}
                    onClick={() => setSelectedPreset(idx)}
                    className={`px-3 py-1.5 rounded-xl text-xs text-left transition cursor-pointer ${
                      selectedPreset === idx
                        ? 'bg-cyan-500/20 text-cyan-300 border border-cyan-500/40 font-semibold'
                        : 'bg-slate-900/60 dark:bg-slate-900 light:bg-slate-200 text-slate-400 hover:text-slate-200 border border-slate-800'
                    }`}
                  >
                    "{item.q.slice(0, 30)}..."
                  </button>
                ))}
              </div>
            </div>

            {/* CTA Button */}
            <div className="pt-2">
              <button
                id="ask-physics-ai-cta"
                onClick={onAskAI}
                className="w-full sm:w-auto px-7 py-3.5 rounded-2xl bg-gradient-to-r from-emerald-500 via-teal-600 to-cyan-600 text-white font-bold text-base shadow-xl shadow-emerald-500/20 hover:shadow-emerald-500/35 hover:brightness-110 active:scale-98 transition-all flex items-center justify-center gap-2 cursor-pointer group"
              >
                <span>Ask Physics AI</span>
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </button>
            </div>
          </div>

          {/* Right Column: Realistic AI Chat Preview */}
          <div className="lg:col-span-7">
            <div className="rounded-3xl glass-panel p-5 sm:p-6 border border-emerald-500/25 shadow-2xl overflow-hidden flex flex-col h-[520px]">
              {/* Chat Header */}
              <div className="flex items-center justify-between pb-4 mb-4 border-b border-slate-800/80 dark:border-slate-800 light:border-slate-200">
                <div className="flex items-center gap-3">
                  <div className="relative w-10 h-10 rounded-2xl bg-gradient-to-tr from-emerald-500 to-teal-600 flex items-center justify-center text-white shadow-md">
                    <Bot className="w-5 h-5" />
                    <span className="absolute -bottom-0.5 -right-0.5 w-3 h-3 rounded-full bg-emerald-400 border-2 border-slate-900" />
                  </div>
                  <div>
                    <div className="text-sm font-bold text-slate-100 dark:text-white light:text-slate-900 flex items-center gap-1.5">
                      <span>Physics Lab AI Tutor</span>
                      <span className="text-[10px] font-mono px-1.5 py-0.5 rounded bg-emerald-500/20 text-emerald-300">
                        Online
                      </span>
                    </div>
                    <div className="text-xs text-slate-400">Class 10 CBSE Physics Specialist</div>
                  </div>
                </div>

                <div className="text-xs font-mono text-slate-400 hidden sm:block">
                  Response Time: ~0.4s
                </div>
              </div>

              {/* Chat Messages Body */}
              <div className="flex-1 overflow-y-auto space-y-4 pr-1">
                {/* Student Message */}
                <div className="flex items-start justify-end gap-3">
                  <div className="max-w-[85%] rounded-2xl rounded-tr-none bg-gradient-to-r from-blue-600 to-cyan-600 text-white p-4 text-sm sm:text-base font-medium shadow-md">
                    <div className="text-[11px] font-semibold text-cyan-200 mb-1 flex items-center gap-1">
                      <User className="w-3.5 h-3.5" />
                      <span>You (Class 10 Student)</span>
                    </div>
                    <p>“{currentQuery.q}”</p>
                  </div>
                </div>

                {/* AI Tutor Response Message */}
                <div className="flex items-start gap-3">
                  <div className="w-8 h-8 rounded-xl bg-emerald-500/20 text-emerald-400 flex items-center justify-center shrink-0 border border-emerald-500/30">
                    <Bot className="w-4 h-4" />
                  </div>

                  <div className="max-w-[90%] rounded-2xl rounded-tl-none bg-slate-900/90 dark:bg-slate-900 light:bg-slate-100 border border-slate-800 light:border-slate-200 p-4 text-sm text-slate-200 dark:text-slate-200 light:text-slate-800 space-y-3 shadow-md">
                    <div className="flex items-center justify-between text-[11px] text-emerald-400 font-mono">
                      <span>AI Step-by-Step Explanation</span>
                      <span className="flex items-center gap-1">
                        <Sparkles className="w-3 h-3" /> Verified by CBSE syllabus
                      </span>
                    </div>

                    <p className="leading-relaxed whitespace-pre-line">{currentQuery.response}</p>

                    {/* Formula Highlight Card */}
                    <div className="p-2.5 rounded-xl bg-slate-950/80 dark:bg-slate-950 light:bg-white border border-cyan-500/30 font-mono text-xs sm:text-sm text-cyan-300 flex items-center justify-between">
                      <span>Key Law:</span>
                      <span className="font-bold text-cyan-400">{currentQuery.formula}</span>
                    </div>

                    {/* Step-by-step points */}
                    <div className="space-y-1.5 pt-1 text-xs text-slate-300 dark:text-slate-300 light:text-slate-600">
                      <div className="font-semibold text-slate-400">Marking Scheme Points:</div>
                      {currentQuery.steps.map((s, idx) => (
                        <div key={idx} className="flex items-center gap-2">
                          <span className="w-1.5 h-1.5 rounded-full bg-emerald-400" />
                          <span>{s}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>

              {/* Chat Input Bar Preview */}
              <div className="pt-3 border-t border-slate-800/80 dark:border-slate-800 light:border-slate-200 flex items-center gap-2">
                <input
                  type="text"
                  readOnly
                  value="Type any Physics doubt or paste numerical..."
                  onClick={onAskAI}
                  className="flex-1 bg-slate-950/60 dark:bg-slate-950 light:bg-white border border-slate-800 light:border-slate-300 rounded-xl px-4 py-2.5 text-xs sm:text-sm text-slate-400 cursor-pointer focus:outline-none"
                />
                <button
                  onClick={onAskAI}
                  className="p-2.5 rounded-xl bg-emerald-500 hover:bg-emerald-600 text-white cursor-pointer transition shadow-md shadow-emerald-500/20"
                >
                  <Send className="w-4 h-4" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
