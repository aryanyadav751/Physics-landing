import React, { useState, useEffect } from 'react';
import { Sparkles, Eye, Zap, Magnet, RefreshCw, Sliders, Activity } from 'lucide-react';

export const HeroVisual: React.FC = () => {
  const [activeTab, setActiveTab] = useState<'optics' | 'circuit' | 'magnet'>('optics');
  const [sliderVal, setSliderVal] = useState(45); // Optics: object pos, Circuit: voltage, Magnet: current
  const [circuitClosed, setCircuitClosed] = useState(true);
  const [showFormulas, setShowFormulas] = useState(true);

  // Auto-oscillate lightly if idle for dynamic laboratory feel
  const [particleOffset, setParticleOffset] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setParticleOffset((prev) => (prev + 1) % 100);
    }, 120);
    return () => clearInterval(interval);
  }, []);

  // Optics calculations
  const focalLength = 80;
  // object position from center lens (x: 250)
  const objectX = 250 - (sliderVal * 2.2); // range 150 to 50 px left of lens
  const objectHeight = 55;
  // Lens formula: 1/v - 1/u = 1/f => 1/v = 1/f + 1/u => u is negative in Cartesian
  const u = -(250 - objectX);
  // v = (f * u) / (f + u)
  const v = (focalLength * u) / (focalLength + u);
  const imageX = 250 + Math.min(Math.max(v, 40), 220);
  const magnification = -v / u;
  const imageHeight = objectHeight * magnification;

  // Circuit calculations
  const voltage = Math.round((sliderVal / 100) * 12 * 10) / 10; // 0 to 12V
  const resistance = 4; // 4 Ohms
  const current = circuitClosed ? Math.round((voltage / resistance) * 100) / 100 : 0;
  const bulbBrightness = circuitClosed ? Math.min(1, current / 3) : 0;

  // Magnet calculations
  const fieldStrength = (sliderVal / 100) * 1.5;

  return (
    <div className="relative w-full max-w-xl mx-auto lg:max-w-none">
      {/* Outer Glow Halo */}
      <div className="absolute -inset-2 rounded-3xl bg-gradient-to-r from-cyan-500/20 via-blue-500/10 to-indigo-500/20 blur-xl opacity-70 pointer-events-none" />

      {/* Main Interactive Stage Container */}
      <div 
        id="hero-physics-visual-stage"
        className="relative rounded-3xl glass-panel p-4 sm:p-5 border border-cyan-500/25 shadow-2xl shadow-cyan-950/40 overflow-hidden"
      >
        {/* Stage Header / Mode Switcher */}
        <div className="flex flex-wrap items-center justify-between gap-2 mb-3 pb-3 border-b border-slate-800/80 dark:border-slate-800 light:border-slate-200">
          <div className="flex items-center gap-2">
            <span className="relative flex h-2.5 w-2.5">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-cyan-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-cyan-500"></span>
            </span>
            <span className="text-xs font-mono font-semibold tracking-wider text-cyan-400 uppercase">
              Virtual Lab Simulator
            </span>
          </div>

          <div className="flex items-center gap-1 bg-slate-900/80 dark:bg-slate-900 light:bg-slate-100 p-1 rounded-xl border border-slate-800 light:border-slate-300">
            <button
              onClick={() => setActiveTab('optics')}
              className={`px-2.5 py-1 text-[11px] font-medium rounded-lg flex items-center gap-1 transition ${
                activeTab === 'optics'
                  ? 'bg-cyan-500/20 text-cyan-300 border border-cyan-500/40 font-semibold'
                  : 'text-slate-400 hover:text-slate-200'
              }`}
            >
              <Eye className="w-3 h-3" />
              <span>Optics</span>
            </button>
            <button
              onClick={() => setActiveTab('circuit')}
              className={`px-2.5 py-1 text-[11px] font-medium rounded-lg flex items-center gap-1 transition ${
                activeTab === 'circuit'
                  ? 'bg-amber-500/20 text-amber-300 border border-amber-500/40 font-semibold'
                  : 'text-slate-400 hover:text-slate-200'
              }`}
            >
              <Zap className="w-3 h-3" />
              <span>Ohm's Law</span>
            </button>
            <button
              onClick={() => setActiveTab('magnet')}
              className={`px-2.5 py-1 text-[11px] font-medium rounded-lg flex items-center gap-1 transition ${
                activeTab === 'magnet'
                  ? 'bg-emerald-500/20 text-emerald-300 border border-emerald-500/40 font-semibold'
                  : 'text-slate-400 hover:text-slate-200'
              }`}
            >
              <Magnet className="w-3 h-3" />
              <span>Magnetic</span>
            </button>
          </div>
        </div>

        {/* The Graphical SVG Science Canvas */}
        <div className="relative w-full h-64 sm:h-72 rounded-2xl bg-slate-950/90 dark:bg-slate-950 light:bg-slate-900 border border-slate-800/80 overflow-hidden flex items-center justify-center">
          {/* Subtle Coordinate Grid Pattern */}
          <div className="absolute inset-0 sci-grid-dark opacity-35" />

          {/* SVG Canvas Rendering Modes */}
          {activeTab === 'optics' && (
            <svg
              className="w-full h-full"
              viewBox="0 0 500 280"
              preserveAspectRatio="xMidYMid meet"
            >
              <defs>
                <linearGradient id="rayGradCyan" x1="0%" y1="0%" x2="100%" y2="0%">
                  <stop offset="0%" stopColor="#22d3ee" stopOpacity="0.9" />
                  <stop offset="100%" stopColor="#38bdf8" stopOpacity="1" />
                </linearGradient>
                <filter id="glowRay" x="-20%" y="-20%" width="140%" height="140%">
                  <feGaussianBlur stdDeviation="2.5" result="blur" />
                  <feMerge>
                    <feMergeNode in="blur" />
                    <feMergeNode in="SourceGraphic" />
                  </feMerge>
                </filter>
              </defs>

              {/* Principal Optical Axis */}
              <line
                x1="20"
                y1="140"
                x2="480"
                y2="140"
                stroke="#64748b"
                strokeWidth="1.5"
                strokeDasharray="4 4"
              />
              <text x="440" y="132" fill="#94a3b8" fontSize="10" fontFamily="monospace">
                Principal Axis
              </text>

              {/* Lens in Center (x: 250) */}
              <g transform="translate(250, 140)">
                {/* Convex Lens Shape */}
                <path
                  d="M0 -90 Q18 0 0 90 Q-18 0 0 -90 Z"
                  fill="rgba(56, 189, 248, 0.18)"
                  stroke="#38bdf8"
                  strokeWidth="2"
                />
                <line x1="0" y1="-95" x2="0" y2="95" stroke="#38bdf8" strokeWidth="1" strokeDasharray="2 2" />
                <circle cx="0" cy="0" r="3" fill="#38bdf8" />
                <text x="6" y="-75" fill="#38bdf8" fontSize="10" fontWeight="600">
                  Convex Lens
                </text>
              </g>

              {/* Focus points F1, 2F1, F2, 2F2 */}
              <circle cx={250 - focalLength} cy="140" r="3" fill="#a855f7" />
              <text x={250 - focalLength - 6} y="156" fill="#c084fc" fontSize="9" fontFamily="monospace">
                F₁
              </text>

              <circle cx={250 - (focalLength * 2)} cy="140" r="3" fill="#a855f7" />
              <text x={250 - (focalLength * 2) - 8} y="156" fill="#c084fc" fontSize="9" fontFamily="monospace">
                2F₁
              </text>

              <circle cx={250 + focalLength} cy="140" r="3" fill="#a855f7" />
              <text x={250 + focalLength - 6} y="156" fill="#c084fc" fontSize="9" fontFamily="monospace">
                F₂
              </text>

              <circle cx={250 + (focalLength * 2)} cy="140" r="3" fill="#a855f7" />
              <text x={250 + (focalLength * 2) - 8} y="156" fill="#c084fc" fontSize="9" fontFamily="monospace">
                2F₂
              </text>

              {/* Object Arrow on Left */}
              <g>
                <line
                  x1={objectX}
                  y1="140"
                  x2={objectX}
                  y2={140 - objectHeight}
                  stroke="#22c55e"
                  strokeWidth="3.5"
                />
                <polygon
                  points={`${objectX - 5},${140 - objectHeight + 6} ${objectX + 5},${140 - objectHeight + 6} ${objectX},${140 - objectHeight - 2}`}
                  fill="#22c55e"
                />
                <text
                  x={objectX - 16}
                  y={140 - objectHeight - 6}
                  fill="#4ade80"
                  fontSize="10"
                  fontWeight="bold"
                >
                  Object (AB)
                </text>
              </g>

              {/* Ray 1: Parallel to axis, then bends through focus F2 */}
              <path
                d={`M ${objectX} ${140 - objectHeight} L 250 ${140 - objectHeight} L ${imageX} ${140 - imageHeight}`}
                fill="none"
                stroke="url(#rayGradCyan)"
                strokeWidth="2"
                filter="url(#glowRay)"
                className="animate-ray"
              />

              {/* Ray 2: Passing straight through Optical Center O without deviation */}
              <path
                d={`M ${objectX} ${140 - objectHeight} L 250 140 L ${imageX} ${140 - imageHeight}`}
                fill="none"
                stroke="#eab308"
                strokeWidth="1.8"
                strokeDasharray="4 2"
                opacity="0.9"
              />

              {/* Formed Image Arrow */}
              {imageX > 250 && (
                <g>
                  <line
                    x1={imageX}
                    y1="140"
                    x2={imageX}
                    y2={140 - imageHeight}
                    stroke="#f43f5e"
                    strokeWidth="3"
                  />
                  <polygon
                    points={`${imageX - 4},${140 - imageHeight - (imageHeight < 0 ? 6 : -6)} ${imageX + 4},${140 - imageHeight - (imageHeight < 0 ? 6 : -6)} ${imageX},${140 - imageHeight + (imageHeight < 0 ? 2 : -2)}`}
                    fill="#f43f5e"
                  />
                  <text
                    x={imageX - 10}
                    y={140 - imageHeight + (imageHeight < 0 ? 16 : -8)}
                    fill="#fb7185"
                    fontSize="9"
                    fontWeight="bold"
                  >
                    Image (A'B')
                  </text>
                </g>
              )}
            </svg>
          )}

          {activeTab === 'circuit' && (
            <svg
              className="w-full h-full"
              viewBox="0 0 500 280"
              preserveAspectRatio="xMidYMid meet"
            >
              <defs>
                <radialGradient id="bulbGlow">
                  <stop offset="0%" stopColor="#fef08a" stopOpacity={bulbBrightness} />
                  <stop offset="60%" stopColor="#eab308" stopOpacity={bulbBrightness * 0.5} />
                  <stop offset="100%" stopColor="#ca8a04" stopOpacity="0" />
                </radialGradient>
              </defs>

              {/* Circuit Wire Loop */}
              <rect
                x="80"
                y="50"
                width="340"
                height="180"
                rx="18"
                fill="none"
                stroke={circuitClosed ? '#38bdf8' : '#475569'}
                strokeWidth="3"
                className={circuitClosed ? 'animate-ray' : ''}
              />

              {/* Battery Source */}
              <g transform="translate(65, 140)">
                <line x1="15" y1="-25" x2="15" y2="25" stroke="#f8fafc" strokeWidth="4" />
                <line x1="25" y1="-12" x2="25" y2="12" stroke="#64748b" strokeWidth="3" />
                <text x="-4" y="-12" fill="#38bdf8" fontSize="12" fontWeight="bold">
                  +
                </text>
                <text x="32" y="-5" fill="#94a3b8" fontSize="11">
                  -
                </text>
                <text x="-5" y="38" fill="#e2e8f0" fontSize="10" fontFamily="monospace">
                  {voltage} V DC
                </text>
              </g>

              {/* Switch Key */}
              <g transform="translate(250, 48)">
                <circle cx="-15" cy="2" r="3" fill="#cbd5e1" />
                <circle cx="15" cy="2" r="3" fill="#cbd5e1" />
                <line
                  x1="-15"
                  y1="2"
                  x2={circuitClosed ? "15" : "8"}
                  y2={circuitClosed ? "2" : "-14"}
                  stroke="#fbbf24"
                  strokeWidth="3.5"
                />
                <text x="-12" y="-12" fill="#fbbf24" fontSize="9" fontWeight="bold">
                  {circuitClosed ? 'Switch: ON' : 'Switch: OPEN'}
                </text>
              </g>

              {/* Resistor Element */}
              <g transform="translate(405, 140)">
                <rect
                  x="-12"
                  y="-22"
                  width="24"
                  height="44"
                  rx="4"
                  fill="#1e293b"
                  stroke="#f97316"
                  strokeWidth="2.5"
                />
                <line x1="-12" y1="-10" x2="12" y2="-10" stroke="#f97316" strokeWidth="1.5" />
                <line x1="-12" y1="0" x2="12" y2="0" stroke="#f97316" strokeWidth="1.5" />
                <line x1="-12" y1="10" x2="12" y2="10" stroke="#f97316" strokeWidth="1.5" />
                <text x="18" y="4" fill="#fb923c" fontSize="10" fontWeight="bold">
                  R = 4 Ω
                </text>
              </g>

              {/* Glowing Bulb Element */}
              <g transform="translate(250, 230)">
                {/* Glow ring */}
                <circle cx="0" cy="0" r="36" fill="url(#bulbGlow)" />
                <circle cx="0" cy="0" r="14" fill="#1e293b" stroke="#eab308" strokeWidth="2" />
                <path
                  d="M -5 -3 Q 0 -9 5 -3 Q 0 4 -5 4"
                  fill="none"
                  stroke={circuitClosed ? '#fef08a' : '#71717a'}
                  strokeWidth="2"
                />
                <text x="-18" y="24" fill="#fde047" fontSize="10" fontFamily="monospace">
                  Lamp
                </text>
              </g>

              {/* Ammeter Display */}
              <g transform="translate(170, 140)">
                <circle cx="0" cy="0" r="18" fill="#0f172a" stroke="#22d3ee" strokeWidth="2" />
                <text x="-6" y="-3" fill="#22d3ee" fontSize="10" fontWeight="bold">
                  A
                </text>
                <text x="-16" y="9" fill="#e2e8f0" fontSize="8" fontFamily="monospace">
                  {current} A
                </text>
              </g>
            </svg>
          )}

          {activeTab === 'magnet' && (
            <svg
              className="w-full h-full"
              viewBox="0 0 500 280"
              preserveAspectRatio="xMidYMid meet"
            >
              {/* Magnetic Field Lines Curves from N to S */}
              {[35, 65, 95, 125].map((curve, idx) => (
                <g key={idx} opacity={0.65 + idx * 0.1}>
                  {/* Top loop */}
                  <path
                    d={`M 170 130 C 170 ${130 - curve}, 330 ${130 - curve}, 330 130`}
                    fill="none"
                    stroke="#10b981"
                    strokeWidth="1.5"
                    strokeDasharray="5 3"
                    className="animate-ray"
                  />
                  {/* Bottom loop */}
                  <path
                    d={`M 170 150 C 170 ${150 + curve}, 330 ${150 + curve}, 330 150`}
                    fill="none"
                    stroke="#10b981"
                    strokeWidth="1.5"
                    strokeDasharray="5 3"
                    className="animate-ray"
                  />
                  {/* Direction arrows */}
                  <polygon
                    points={`250,${130 - curve - 3} 255,${130 - curve} 250,${130 - curve + 3}`}
                    fill="#34d399"
                  />
                </g>
              ))}

              {/* Bar Magnet in center */}
              <g transform="translate(170, 120)">
                {/* North Pole (Red) */}
                <rect x="0" y="0" width="80" height="40" rx="3" fill="#ef4444" stroke="#f87171" strokeWidth="1.5" />
                <text x="32" y="25" fill="#ffffff" fontSize="14" fontWeight="extrabold">
                  N
                </text>
                {/* South Pole (Blue) */}
                <rect x="80" y="0" width="80" height="40" rx="3" fill="#3b82f6" stroke="#60a5fa" strokeWidth="1.5" />
                <text x="115" y="25" fill="#ffffff" fontSize="14" fontWeight="extrabold">
                  S
                </text>
              </g>

              {/* Magnetic Compass Needle (Interactive Position) */}
              <g transform={`translate(${100 + sliderVal * 3}, 60)`}>
                <circle cx="0" cy="0" r="14" fill="#0f172a" stroke="#64748b" strokeWidth="1.5" />
                <polygon points="0,-10 4,0 -4,0" fill="#ef4444" />
                <polygon points="0,10 4,0 -4,0" fill="#3b82f6" />
                <circle cx="0" cy="0" r="2" fill="#ffffff" />
                <text x="-16" y="22" fill="#94a3b8" fontSize="8">
                  Compass
                </text>
              </g>

              <text x="180" y="240" fill="#34d399" fontSize="10" fontFamily="monospace">
                Field Lines: North Pole → South Pole
              </text>
            </svg>
          )}

          {/* Floating Orbiting Science Particles */}
          <div
            className="absolute w-2 h-2 rounded-full bg-cyan-400 blur-[0.5px] pointer-events-none transition-all duration-300"
            style={{
              top: `${20 + Math.sin(particleOffset * 0.1) * 15}%`,
              left: `${15 + Math.cos(particleOffset * 0.1) * 20}%`,
              boxShadow: '0 0 10px #22d3ee',
            }}
          />
          <div
            className="absolute w-1.5 h-1.5 rounded-full bg-blue-400 blur-[0.5px] pointer-events-none transition-all duration-300"
            style={{
              bottom: `${25 + Math.cos(particleOffset * 0.08) * 15}%`,
              right: `${20 + Math.sin(particleOffset * 0.08) * 25}%`,
              boxShadow: '0 0 8px #60a5fa',
            }}
          />
        </div>

        {/* Live Variable Slider & Control Bar */}
        <div className="mt-3 pt-3 border-t border-slate-800/80 dark:border-slate-800 light:border-slate-200 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs">
          <div className="flex items-center gap-2 w-full sm:w-auto">
            <Sliders className="w-3.5 h-3.5 text-cyan-400 shrink-0" />
            <span className="text-slate-400 text-[11px] whitespace-nowrap">
              {activeTab === 'optics' && `Object Distance u = ${Math.round(250 - objectX)} cm`}
              {activeTab === 'circuit' && `Voltage V = ${voltage} V (I = ${current} A)`}
              {activeTab === 'magnet' && `Compass Probe X = ${sliderVal}%`}
            </span>
          </div>

          <div className="flex items-center gap-3 w-full sm:w-64">
            <input
              type="range"
              min="10"
              max="90"
              value={sliderVal}
              onChange={(e) => setSliderVal(Number(e.target.value))}
              aria-label="Simulation variable slider"
              className="w-full h-1.5 bg-slate-800 rounded-lg appearance-none cursor-pointer accent-cyan-400"
            />
            {activeTab === 'circuit' && (
              <button
                onClick={() => setCircuitClosed(!circuitClosed)}
                className="px-2 py-1 rounded bg-slate-800 hover:bg-slate-700 text-[10px] font-mono font-medium text-cyan-300 border border-slate-700 whitespace-nowrap"
              >
                {circuitClosed ? 'Open Key' : 'Close Key'}
              </button>
            )}
          </div>
        </div>

        {/* Floating Formula Badges Bar */}
        <div className="mt-3 flex flex-wrap items-center gap-2">
          <span className="text-[10px] font-mono text-slate-400 flex items-center gap-1">
            <Activity className="w-3 h-3 text-cyan-400" />
            Live Formulas:
          </span>
          <span className="text-[11px] font-mono px-2 py-0.5 rounded-md bg-cyan-950/50 border border-cyan-500/30 text-cyan-300">
            {activeTab === 'optics' ? '1/f = 1/v - 1/u' : activeTab === 'circuit' ? 'V = I · R' : 'F = B · I · L'}
          </span>
          <span className="text-[11px] font-mono px-2 py-0.5 rounded-md bg-blue-950/50 border border-blue-500/30 text-blue-300">
            {activeTab === 'optics' ? 'm = v / u' : activeTab === 'circuit' ? 'P = V · I = I²R' : 'B ∝ n · I (Solenoid)'}
          </span>
        </div>
      </div>
    </div>
  );
};
