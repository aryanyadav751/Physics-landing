import React, { useState } from 'react';
import {
  FlaskConical,
  ArrowRight,
  Sliders,
  Play,
  RotateCcw,
  Sparkles,
  Telescope,
  Microscope,
  Zap,
  BatteryCharging,
  Compass,
  Cog,
  Sun,
  Layers
} from 'lucide-react';
import { EXPERIMENTS_LIST } from '../data/physicsData';

const expIconMap: Record<string, React.ElementType> = {
  Telescope,
  Microscope,
  Zap,
  BatteryCharging,
  Compass,
  Cog,
  Sun,
};

interface DiscoverLabSectionProps {
  onEnterLab: () => void;
}

export const DiscoverLabSection: React.FC<DiscoverLabSectionProps> = ({ onEnterLab }) => {
  const [selectedSim, setSelectedSim] = useState<'prism' | 'mirror' | 'ohms'>('prism');
  
  // Prism state
  const [prismAngle, setPrismAngle] = useState<number>(45); // Angle of incidence
  
  // Mirror state
  const [mirrorObjectPos, setMirrorObjectPos] = useState<number>(50); // cm
  
  // Ohm state
  const [ohmsVoltage, setOhmsVoltage] = useState<number>(6); // Volts
  const [ohmsRes, setOhmsRes] = useState<number>(3); // Ohms
  const current = (ohmsVoltage / ohmsRes).toFixed(2);

  return (
    <section id="discover-lab-section" className="relative py-16 sm:py-24 overflow-hidden bg-slate-950/60 dark:bg-slate-950/60 light:bg-slate-100/60 border-t border-slate-800/80 dark:border-slate-800 light:border-slate-200">
      {/* Background Radial Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[500px] bg-cyan-600/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-500/10 border border-cyan-500/30 text-cyan-400 text-xs font-semibold uppercase tracking-wider mb-3">
            <FlaskConical className="w-3.5 h-3.5" />
            <span>Virtual Physics Engine</span>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight text-slate-100 dark:text-white light:text-slate-900">
            Discover Lab
          </h2>
          <p className="mt-3 text-lg sm:text-xl text-cyan-400 dark:text-cyan-400 light:text-cyan-700 font-medium">
            “Don't just read about Physics. Perform it.”
          </p>
          <p className="mt-2 text-sm sm:text-base text-slate-400 dark:text-slate-400 light:text-slate-600">
            Manipulate voltages, focal lengths, prism angles, and magnetic fields in real time. Watch equations come to life.
          </p>
        </div>

        {/* The Live Interactive Laboratory Stage */}
        <div className="mb-12 rounded-3xl glass-panel p-5 sm:p-8 border border-cyan-500/30 shadow-2xl overflow-hidden">
          {/* Lab Stage Top Bar */}
          <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 pb-4 border-b border-slate-800/80 dark:border-slate-800 light:border-slate-200">
            <div className="flex items-center gap-3">
              <div className="w-3 h-3 rounded-full bg-emerald-400 animate-ping" />
              <div>
                <span className="text-sm font-bold text-slate-200 dark:text-slate-200 light:text-slate-800">
                  Interactive Simulation Workbench
                </span>
                <span className="ml-2 text-xs font-mono text-cyan-400">
                  v2.4 Live Physics Kernel
                </span>
              </div>
            </div>

            {/* Quick Workbench Mode Tabs */}
            <div className="flex items-center gap-1.5 p-1 rounded-xl bg-slate-900/90 dark:bg-slate-900 light:bg-slate-200 border border-slate-800 light:border-slate-300">
              <button
                onClick={() => setSelectedSim('prism')}
                className={`px-3 py-1.5 rounded-lg text-xs font-medium transition cursor-pointer ${
                  selectedSim === 'prism'
                    ? 'bg-cyan-500/20 text-cyan-300 border border-cyan-500/40 font-bold'
                    : 'text-slate-400 hover:text-slate-200'
                }`}
              >
                🌈 Prism & Dispersion
              </button>
              <button
                onClick={() => setSelectedSim('mirror')}
                className={`px-3 py-1.5 rounded-lg text-xs font-medium transition cursor-pointer ${
                  selectedSim === 'mirror'
                    ? 'bg-blue-500/20 text-blue-300 border border-blue-500/40 font-bold'
                    : 'text-slate-400 hover:text-slate-200'
                }`}
              >
                🔭 Concave Mirror
              </button>
              <button
                onClick={() => setSelectedSim('ohms')}
                className={`px-3 py-1.5 rounded-lg text-xs font-medium transition cursor-pointer ${
                  selectedSim === 'ohms'
                    ? 'bg-amber-500/20 text-amber-300 border border-amber-500/40 font-bold'
                    : 'text-slate-400 hover:text-slate-200'
                }`}
              >
                ⚡ Ohm's Law (V=IR)
              </button>
            </div>
          </div>

          {/* Graphical Workbench Simulation Display */}
          <div className="my-6 relative w-full h-72 sm:h-80 rounded-2xl bg-slate-950 dark:bg-slate-950 light:bg-slate-900 border border-slate-800/80 overflow-hidden flex items-center justify-center">
            <div className="absolute inset-0 sci-grid-dark opacity-30" />

            {/* SIMULATION 1: PRISM & DISPERSION (VIBGYOR) */}
            {selectedSim === 'prism' && (
              <svg className="w-full h-full" viewBox="0 0 600 320" preserveAspectRatio="xMidYMid meet">
                <defs>
                  <linearGradient id="whiteBeam" x1="0%" y1="0%" x2="100%" y2="0%">
                    <stop offset="0%" stopColor="#ffffff" stopOpacity="0.3" />
                    <stop offset="100%" stopColor="#ffffff" stopOpacity="0.95" />
                  </linearGradient>
                </defs>

                {/* Triangular Glass Prism */}
                <polygon
                  points="300,60 210,240 390,240"
                  fill="rgba(56, 189, 248, 0.12)"
                  stroke="#38bdf8"
                  strokeWidth="2.5"
                />
                <text x="285" y="180" fill="#7dd3fc" fontSize="11" fontWeight="bold">
                  Glass Prism
                </text>
                <text x="290" y="85" fill="#38bdf8" fontSize="10" fontFamily="monospace">
                  A = 60°
                </text>

                {/* White Incident Light Ray */}
                <line
                  x1="80"
                  y1={170 + (prismAngle - 45) * 1.5}
                  x2="255"
                  y2="150"
                  stroke="url(#whiteBeam)"
                  strokeWidth="3.5"
                  className="animate-ray"
                />
                <text x="90" y="150" fill="#f8fafc" fontSize="11" fontWeight="bold">
                  Incident White Light (Ray PQ)
                </text>

                {/* Refracted rays inside prism */}
                <line x1="255" y1="150" x2="340" y2="142" stroke="#ef4444" strokeWidth="1.5" />
                <line x1="255" y1="150" x2="345" y2="155" stroke="#3b82f6" strokeWidth="1.5" />
                <line x1="255" y1="150" x2="347" y2="162" stroke="#8b5cf6" strokeWidth="1.5" />

                {/* Dispersed Spectrum Rays Exiting Prism (VIBGYOR) */}
                {/* Red (Least deviated, long wavelength) */}
                <line x1="340" y1="142" x2="520" y2={100 + (prismAngle - 45)} stroke="#ef4444" strokeWidth="2.5" />
                <text x="530" y={105 + (prismAngle - 45)} fill="#ef4444" fontSize="10" fontWeight="bold">
                  Red (λ ~ 700nm, Min Deviation)
                </text>

                {/* Orange */}
                <line x1="341" y1="144" x2="520" y2={118 + (prismAngle - 45)} stroke="#f97316" strokeWidth="2" />

                {/* Yellow */}
                <line x1="342" y1="147" x2="520" y2={134 + (prismAngle - 45)} stroke="#eab308" strokeWidth="2" />

                {/* Green */}
                <line x1="343" y1="150" x2="520" y2={150 + (prismAngle - 45)} stroke="#22c55e" strokeWidth="2" />

                {/* Blue */}
                <line x1="345" y1="155" x2="520" y2={168 + (prismAngle - 45)} stroke="#06b6d4" strokeWidth="2" />

                {/* Indigo */}
                <line x1="346" y1="158" x2="520" y2={184 + (prismAngle - 45)} stroke="#3b82f6" strokeWidth="2" />

                {/* Violet (Most deviated, short wavelength) */}
                <line x1="347" y1="162" x2="520" y2={202 + (prismAngle - 45)} stroke="#8b5cf6" strokeWidth="2.5" />
                <text x="530" y={207 + (prismAngle - 45)} fill="#a855f7" fontSize="10" fontWeight="bold">
                  Violet (λ ~ 400nm, Max Deviation)
                </text>

                {/* Screen on right */}
                <rect x="520" y="80" width="6" height="150" rx="3" fill="#64748b" />
                <text x="515" y="248" fill="#94a3b8" fontSize="9">
                  Observation Screen
                </text>
              </svg>
            )}

            {/* SIMULATION 2: CONCAVE MIRROR RAY OPTICS */}
            {selectedSim === 'mirror' && (
              <svg className="w-full h-full" viewBox="0 0 600 320" preserveAspectRatio="xMidYMid meet">
                {/* Principal axis */}
                <line x1="50" y1="160" x2="550" y2="160" stroke="#64748b" strokeWidth="1.5" strokeDasharray="4 4" />

                {/* Concave Mirror on Right (Vertex at 480) */}
                <path
                  d="M 480 60 Q 440 160 480 260"
                  fill="none"
                  stroke="#38bdf8"
                  strokeWidth="3.5"
                />
                {/* Silvering marks on back */}
                {[80, 110, 140, 170, 200, 230].map((y) => (
                  <line key={y} x1="472" y1={y} x2="486" y2={y - 8} stroke="#64748b" strokeWidth="1.5" />
                ))}
                <text x="490" y="80" fill="#38bdf8" fontSize="10" fontWeight="bold">
                  Concave Mirror
                </text>

                {/* Center of Curvature C (x: 240) and Focus F (x: 360) and Pole P (x: 460) */}
                <circle cx="240" cy="160" r="3" fill="#ec4899" />
                <text x="236" y="180" fill="#f472b6" fontSize="10" fontWeight="bold">
                  C (2F)
                </text>

                <circle cx="350" cy="160" r="3" fill="#a855f7" />
                <text x="346" y="180" fill="#c084fc" fontSize="10" fontWeight="bold">
                  F
                </text>

                <circle cx="460" cy="160" r="3" fill="#38bdf8" />
                <text x="456" y="180" fill="#7dd3fc" fontSize="10" fontWeight="bold">
                  P
                </text>

                {/* Dynamic Object Arrow */}
                {(() => {
                  const objX = 100 + (mirrorObjectPos * 3);
                  const objHeight = 50;
                  // Reflection rays
                  return (
                    <g>
                      <line x1={objX} y1="160" x2={objX} y2={160 - objHeight} stroke="#22c55e" strokeWidth="3" />
                      <polygon points={`${objX-4},${160-objHeight+5} ${objX+4},${160-objHeight+5} ${objX},${160-objHeight-2}`} fill="#22c55e" />
                      <text x={objX - 18} y={160 - objHeight - 6} fill="#4ade80" fontSize="10" fontWeight="bold">
                        Object (u = -{Math.round(460 - objX)}cm)
                      </text>

                      {/* Ray 1: Parallel to Principal Axis -> reflects through F */}
                      <path
                        d={`M ${objX} ${160 - objHeight} L 460 ${160 - objHeight} L 350 160 L 150 240`}
                        fill="none"
                        stroke="#22d3ee"
                        strokeWidth="2"
                        className="animate-ray"
                      />

                      {/* Ray 2: Passing through Focus F -> reflects parallel */}
                      <path
                        d={`M ${objX} ${160 - objHeight} L 350 160 L 460 210 L 120 210`}
                        fill="none"
                        stroke="#fbbf24"
                        strokeWidth="1.8"
                        strokeDasharray="4 2"
                      />
                    </g>
                  );
                })()}
              </svg>
            )}

            {/* SIMULATION 3: OHM'S LAW BENCH & V-I GRAPH */}
            {selectedSim === 'ohms' && (
              <svg className="w-full h-full" viewBox="0 0 600 320" preserveAspectRatio="xMidYMid meet">
                {/* Circuit diagram on left half */}
                <g transform="translate(40, 20)">
                  <rect x="20" y="30" width="260" height="180" rx="12" fill="none" stroke="#38bdf8" strokeWidth="2.5" className="animate-ray" />
                  
                  {/* Battery */}
                  <g transform="translate(150, 25)">
                    <line x1="-15" y1="-10" x2="-15" y2="10" stroke="#ffffff" strokeWidth="3" />
                    <line x1="-5" y1="-5" x2="-5" y2="5" stroke="#64748b" strokeWidth="2" />
                    <text x="-35" y="5" fill="#38bdf8" fontSize="11" fontWeight="bold">
                      {ohmsVoltage} V
                    </text>
                  </g>

                  {/* Resistor Wire */}
                  <g transform="translate(150, 210)">
                    <rect x="-30" y="-12" width="60" height="24" rx="4" fill="#1e293b" stroke="#f97316" strokeWidth="2" />
                    <text x="-24" y="4" fill="#fb923c" fontSize="11" fontWeight="bold">
                      R = {ohmsRes} Ω
                    </text>
                  </g>

                  {/* Ammeter */}
                  <g transform="translate(20, 120)">
                    <circle cx="0" cy="0" r="16" fill="#0f172a" stroke="#22c55e" strokeWidth="2" />
                    <text x="-5" y="4" fill="#4ade80" fontSize="11" fontWeight="bold">
                      A
                    </text>
                  </g>

                  {/* Voltmeter across resistor */}
                  <g transform="translate(150, 260)">
                    <circle cx="0" cy="0" r="16" fill="#0f172a" stroke="#ec4899" strokeWidth="2" />
                    <text x="-5" y="4" fill="#f472b6" fontSize="11" fontWeight="bold">
                      V
                    </text>
                    <path d="M -80 -50 L -80 0 L -16 0" fill="none" stroke="#ec4899" strokeWidth="1" strokeDasharray="3 3" />
                    <path d="M 80 -50 L 80 0 L 16 0" fill="none" stroke="#ec4899" strokeWidth="1" strokeDasharray="3 3" />
                  </g>
                </g>

                {/* V-I Graph on Right Half */}
                <g transform="translate(380, 50)">
                  <text x="40" y="-10" fill="#f8fafc" fontSize="12" fontWeight="bold">
                    V-I Characteristic (Ohmic Conductor)
                  </text>
                  <line x1="20" y1="180" x2="200" y2="180" stroke="#94a3b8" strokeWidth="1.5" />
                  <text x="180" y="196" fill="#94a3b8" fontSize="10">
                    Current I (A)
                  </text>
                  <line x1="20" y1="180" x2="20" y2="10" stroke="#94a3b8" strokeWidth="1.5" />
                  <text x="5" y="20" fill="#94a3b8" fontSize="10">
                    V (V)
                  </text>

                  {/* Straight linear slope V = IR */}
                  <line
                    x1="20"
                    y1="180"
                    x2={20 + (ohmsVoltage * 12)}
                    y2={180 - (ohmsVoltage * 12 * (ohmsRes / 4))}
                    stroke="#22d3ee"
                    strokeWidth="3"
                  />
                  <circle
                    cx={20 + (ohmsVoltage * 12)}
                    cy={180 - (ohmsVoltage * 12 * (ohmsRes / 4))}
                    r="5"
                    fill="#38bdf8"
                    stroke="#ffffff"
                    strokeWidth="1.5"
                  />
                  <text
                    x={30 + (ohmsVoltage * 12)}
                    y={175 - (ohmsVoltage * 12 * (ohmsRes / 4))}
                    fill="#38bdf8"
                    fontSize="10"
                    fontWeight="bold"
                  >
                    ({current}A, {ohmsVoltage}V)
                  </text>
                  <text x="60" y="90" fill="#cbd5e1" fontSize="10">
                    Slope = ΔV/ΔI = R = {ohmsRes} Ω
                  </text>
                </g>
              </svg>
            )}
          </div>

          {/* Interactive Variable Sliders Row */}
          <div className="flex flex-col md:flex-row items-center justify-between gap-4 p-4 rounded-2xl bg-slate-900/80 dark:bg-slate-900 light:bg-slate-200 border border-slate-800 light:border-slate-300">
            {selectedSim === 'prism' && (
              <div className="flex flex-col sm:flex-row items-center gap-4 w-full justify-between">
                <div className="flex items-center gap-2">
                  <Sliders className="w-4 h-4 text-cyan-400" />
                  <span className="text-xs sm:text-sm font-semibold text-slate-200 dark:text-slate-200 light:text-slate-800">
                    Angle of Incidence (i): <span className="text-cyan-400 font-mono">{prismAngle}°</span>
                  </span>
                </div>
                <div className="flex items-center gap-3 w-full sm:w-80">
                  <span className="text-xs text-slate-400">30°</span>
                  <input
                    type="range"
                    min="30"
                    max="65"
                    value={prismAngle}
                    onChange={(e) => setPrismAngle(Number(e.target.value))}
                    aria-label="Angle of Incidence slider"
                    className="w-full h-2 bg-slate-800 rounded-lg appearance-none cursor-pointer accent-cyan-400"
                  />
                  <span className="text-xs text-slate-400">65°</span>
                </div>
              </div>
            )}

            {selectedSim === 'mirror' && (
              <div className="flex flex-col sm:flex-row items-center gap-4 w-full justify-between">
                <div className="flex items-center gap-2">
                  <Sliders className="w-4 h-4 text-cyan-400" />
                  <span className="text-xs sm:text-sm font-semibold text-slate-200 dark:text-slate-200 light:text-slate-800">
                    Move Object Position: <span className="text-cyan-400 font-mono">{mirrorObjectPos}%</span>
                  </span>
                </div>
                <div className="flex items-center gap-3 w-full sm:w-80">
                  <span className="text-xs text-slate-400">Near C</span>
                  <input
                    type="range"
                    min="15"
                    max="85"
                    value={mirrorObjectPos}
                    onChange={(e) => setMirrorObjectPos(Number(e.target.value))}
                    aria-label="Mirror object position slider"
                    className="w-full h-2 bg-slate-800 rounded-lg appearance-none cursor-pointer accent-cyan-400"
                  />
                  <span className="text-xs text-slate-400">Near Pole</span>
                </div>
              </div>
            )}

            {selectedSim === 'ohms' && (
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 w-full">
                <div className="flex items-center justify-between gap-3">
                  <span className="text-xs font-semibold text-slate-300 dark:text-slate-300 light:text-slate-700">
                    Voltage: <span className="text-cyan-400 font-mono">{ohmsVoltage} V</span>
                  </span>
                  <input
                    type="range"
                    min="1"
                    max="12"
                    value={ohmsVoltage}
                    onChange={(e) => setOhmsVoltage(Number(e.target.value))}
                    aria-label="Voltage slider"
                    className="w-40 h-2 bg-slate-800 rounded-lg appearance-none cursor-pointer accent-cyan-400"
                  />
                </div>
                <div className="flex items-center justify-between gap-3">
                  <span className="text-xs font-semibold text-slate-300 dark:text-slate-300 light:text-slate-700">
                    Resistance: <span className="text-amber-400 font-mono">{ohmsRes} Ω</span>
                  </span>
                  <input
                    type="range"
                    min="1"
                    max="10"
                    value={ohmsRes}
                    onChange={(e) => setOhmsRes(Number(e.target.value))}
                    aria-label="Resistance slider"
                    className="w-40 h-2 bg-slate-800 rounded-lg appearance-none cursor-pointer accent-amber-400"
                  />
                </div>
              </div>
            )}
          </div>
        </div>

        {/* Small Experiment Cards Grid */}
        <div className="mb-10">
          <div className="flex items-center justify-between mb-6">
            <h3 className="text-xl font-bold text-slate-100 dark:text-white light:text-slate-900 flex items-center gap-2">
              <Layers className="w-5 h-5 text-cyan-400" />
              <span>All 7 Core CBSE Virtual Experiments</span>
            </h3>
            <span className="text-xs font-mono text-slate-400">Fully Interactive</span>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {EXPERIMENTS_LIST.map((exp) => {
              const IconComp = expIconMap[exp.icon] || Sparkles;
              return (
                <div
                  key={exp.id}
                  onClick={onEnterLab}
                  className="group relative rounded-2xl glass-panel p-4 border border-slate-800/80 dark:border-slate-800 light:border-slate-200 hover:border-cyan-500/40 hover:-translate-y-1 transition-all duration-300 cursor-pointer flex flex-col justify-between"
                >
                  <div>
                    <div className="flex items-center justify-between mb-3">
                      <div className="p-2 rounded-xl bg-slate-900/90 dark:bg-slate-900 light:bg-slate-100 text-cyan-400 border border-slate-800 light:border-slate-200 group-hover:scale-110 transition-transform">
                        <IconComp className="w-4 h-4" />
                      </div>
                      <span className="text-[10px] font-mono px-2 py-0.5 rounded-full bg-cyan-500/10 border border-cyan-500/25 text-cyan-400">
                        {exp.tag}
                      </span>
                    </div>

                    <h4 className="text-sm font-bold text-slate-200 dark:text-slate-200 light:text-slate-800 group-hover:text-cyan-400 transition-colors mb-1">
                      {exp.name}
                    </h4>
                    <p className="text-xs text-slate-400 dark:text-slate-400 light:text-slate-600 line-clamp-2">
                      {exp.description}
                    </p>
                  </div>

                  <div className="mt-3 pt-2 border-t border-slate-800/60 dark:border-slate-800 light:border-slate-200 flex items-center justify-between text-[11px] font-semibold text-cyan-400">
                    <span>Simulate Now</span>
                    <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Primary CTA Button */}
        <div className="text-center">
          <button
            id="enter-discover-lab-cta"
            onClick={onEnterLab}
            className="inline-flex items-center gap-2 px-8 py-4 rounded-2xl bg-gradient-to-r from-cyan-500 via-blue-600 to-indigo-600 text-white font-bold text-base sm:text-lg shadow-xl shadow-cyan-500/25 hover:shadow-cyan-500/40 hover:scale-102 active:scale-98 transition-all cursor-pointer group"
          >
            <span>Enter Discover Lab</span>
            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </button>
        </div>
      </div>
    </section>
  );
};
