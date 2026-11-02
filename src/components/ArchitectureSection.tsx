import React from 'react';
import { PORTFOLIO_DATA } from '../data/portfolioData';
import { Compass, Cpu, Film } from 'lucide-react';

export const ArchitectureSection: React.FC = () => {
  const { competencies } = PORTFOLIO_DATA;

  const icons = [
    <Compass className="w-5 h-5 text-slate-700" key="0" />,
    <Cpu className="w-5 h-5 text-slate-700" key="1" />,
    <Film className="w-5 h-5 text-slate-700" key="2" />,
  ];

  return (
    <section id="methodology" className="py-20 md:py-24 border-b border-slate-200 bg-white">
      <div className="max-w-6xl mx-auto px-6">
        {/* Section Header */}
        <div className="max-w-3xl space-y-4">
          <div className="text-xs font-mono text-slate-500 uppercase tracking-widest">
            Engineering & Design Foundations
          </div>
          <h2 className="text-2xl md:text-4xl font-semibold text-slate-900 tracking-tight [text-wrap:balance]">
            Methodology & Technical Synthesis
          </h2>
          <p className="text-sm md:text-base text-slate-600 leading-relaxed font-normal">
            Bridging foundational spatial and typographic discipline with mathematical precision in Generative AI architectures and multi-modal pipeline engineering.
          </p>
        </div>

        {/* 3 Pillars Grid */}
        <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-8">
          {competencies.map((pillar, idx) => (
            <div
              key={idx}
              className="p-7 rounded-xl border border-slate-200 bg-white hover:border-slate-300 hover:shadow-xs transition-all duration-300 flex flex-col justify-between space-y-6"
            >
              <div className="space-y-4">
                <div className="w-10 h-10 rounded-lg bg-slate-100 border border-slate-200 flex items-center justify-center">
                  {icons[idx]}
                </div>

                <div className="space-y-1">
                  <h3 className="text-base font-semibold text-slate-900 tracking-tight">
                    {pillar.title}
                  </h3>
                  <div className="text-xs font-mono text-slate-500">
                    {pillar.subtitle}
                  </div>
                </div>

                <p className="text-xs md:text-sm text-slate-600 leading-relaxed font-normal">
                  {pillar.description}
                </p>
              </div>

              {/* Skills unboxed list (Zero-Pill discipline) */}
              <div className="pt-4 border-t border-slate-100 space-y-2">
                <div className="text-[11px] font-mono uppercase text-slate-400">
                  Disciplines & Tools
                </div>
                <div className="text-xs text-slate-700 font-mono leading-relaxed flex flex-wrap items-center gap-x-2 gap-y-1">
                  {pillar.skills.map((skill, sIdx) => (
                    <React.Fragment key={sIdx}>
                      <span className="text-slate-700">{skill}</span>
                      {sIdx < pillar.skills.length - 1 && (
                        <span aria-hidden="true" className="text-slate-300">·</span>
                      )}
                    </React.Fragment>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* System Agents Architecture Highlight (Renamed from Gem to Agent; removed code box) */}
        <div id="architecture" className="mt-16 rounded-xl border border-slate-200 bg-slate-50/50 p-7 md:p-9 space-y-6">
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 pb-6 border-b border-slate-200">
            <div>
              <span className="text-xs font-mono text-slate-500 uppercase tracking-widest block">
                System Agents Architecture
              </span>
              <h3 className="text-lg md:text-xl font-semibold text-slate-900 mt-1">
                The Anatomy of a Production GenAI Agent
              </h3>
            </div>
            <div className="text-xs font-mono text-slate-500">
              Deterministic Schema v2.4 · 100% Parameter Guarantee
            </div>
          </div>

          <div className="space-y-4">
            <p className="text-xs md:text-sm text-slate-700 leading-relaxed max-w-3xl">
              Rather than treating Generative AI as casual conversation, enterprise design pipelines require deterministic input/output contracts. System Agents enforce strict constraints across three operational layers:
            </p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 pt-2">
              <div className="p-4 rounded-lg bg-white border border-slate-200 space-y-2">
                <div className="text-xs font-mono font-semibold text-slate-900 uppercase">
                  01. Optical & Spatial Constraints
                </div>
                <p className="text-xs text-slate-600 leading-relaxed">
                  Fixed focal lengths, aperture scales, and calibrated lighting coordinate ratios preventing distortion.
                </p>
              </div>

              <div className="p-4 rounded-lg bg-white border border-slate-200 space-y-2">
                <div className="text-xs font-mono font-semibold text-slate-900 uppercase">
                  02. Physical Material Bounds
                </div>
                <p className="text-xs text-slate-600 leading-relaxed">
                  Viscosity, refraction index, and surface tension parameters translating commercial recipes into physical modeling.
                </p>
              </div>

              <div className="p-4 rounded-lg bg-white border border-slate-200 space-y-2">
                <div className="text-xs font-mono font-semibold text-slate-900 uppercase">
                  03. Human Persona Anchors
                </div>
                <p className="text-xs text-slate-600 leading-relaxed">
                  Multi-tiered seed locking eliminating facial or anatomical drift across stills and video interpolation.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
