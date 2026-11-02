import React, { useState } from 'react';
import { Check, Copy, ArrowUpRight } from 'lucide-react';
import { PORTFOLIO_DATA } from '../data/portfolioData';

export const Hero: React.FC = () => {
  const [copied, setCopied] = useState(false);
  const { profile, metrics } = PORTFOLIO_DATA;

  const handleCopyEmail = (e: React.MouseEvent) => {
    e.preventDefault();
    navigator.clipboard.writeText(profile.email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <section className="pt-16 md:pt-24 pb-16 border-b border-slate-200 bg-white">
      <div className="max-w-6xl mx-auto px-6">
        {/* Editorial Typographic Layout (No profile photo) */}
        <div className="max-w-4xl space-y-7">
          {/* Location & Status: Clean unboxed metadata (Zero-Pill discipline) */}
          <div className="flex items-center flex-wrap gap-2 text-xs font-mono text-slate-500">
            <span className="text-slate-800 font-medium">{profile.location}</span>
            <span aria-hidden="true" className="text-slate-300">·</span>
            <span className="text-emerald-600 font-semibold">{profile.status}</span>
            <span aria-hidden="true" className="text-slate-300">·</span>
            <span className="text-slate-500">CET Timezone</span>
          </div>

          {/* Name & Headline */}
          <div className="space-y-3">
            <h1 className="text-4xl md:text-6xl font-semibold tracking-tight text-slate-900 leading-[1.08] [text-wrap:balance]">
              {profile.name}
            </h1>
            <p className="text-lg md:text-xl font-normal text-slate-600 tracking-tight">
              {profile.role}
            </p>
          </div>

          {/* Short Summary */}
          <p className="text-base md:text-lg text-slate-600 leading-relaxed font-normal max-w-3xl">
            {profile.summary}
          </p>

          {/* Actions: Direct email copy & LinkedIn */}
          <div className="pt-2 flex flex-wrap items-center gap-3">
            <button
              onClick={handleCopyEmail}
              className="px-4 py-2.5 text-xs md:text-sm font-medium text-slate-800 bg-slate-50 hover:bg-slate-100 border border-slate-300 rounded-md transition-all active:scale-[0.98] inline-flex items-center gap-2"
              title="Copy email to clipboard"
            >
              {copied ? (
                <>
                  <Check className="w-4 h-4 text-emerald-600" />
                  <span className="text-emerald-700 font-mono text-xs">Email Copied to Clipboard</span>
                </>
              ) : (
                <>
                  <Copy className="w-4 h-4 text-slate-500" />
                  <span className="font-mono text-xs">{profile.email}</span>
                </>
              )}
            </button>

            <a
              href={profile.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="px-4 py-2.5 text-xs md:text-sm font-medium text-slate-800 bg-slate-50 hover:bg-slate-100 border border-slate-300 rounded-md transition-all active:scale-[0.98] inline-flex items-center gap-1.5"
            >
              <span>LinkedIn Profile</span>
              <ArrowUpRight className="w-3.5 h-3.5 text-slate-500" />
            </a>
          </div>

          {/* Quiet capability list (System Agents, not Gems) */}
          <div className="pt-4 border-t border-slate-100 text-xs text-slate-500 font-mono flex flex-wrap items-center gap-x-3 gap-y-1">
            <span>System Agents Architecture</span>
            <span aria-hidden="true" className="text-slate-300">/</span>
            <span>4K Multi-Modal Motion</span>
            <span aria-hidden="true" className="text-slate-300">/</span>
            <span>Agentic UX</span>
            <span aria-hidden="true" className="text-slate-300">/</span>
            <span>Design Systems</span>
          </div>
        </div>

        {/* Full-width KPI Strip below Hero (Light Mode) */}
        <div className="mt-16 pt-10 border-t border-slate-200 grid grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
          {metrics.map((item, index) => (
            <div key={index} className="space-y-1">
              <div className="text-2xl md:text-3xl font-semibold text-slate-900 tracking-tight font-mono tabular-nums">
                {item.value}
              </div>
              <div className="text-xs font-semibold text-slate-800">
                {item.label}
              </div>
              <div className="text-xs text-slate-500 leading-tight">
                {item.note}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
