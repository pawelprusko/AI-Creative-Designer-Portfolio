import React from 'react';
import { ArrowUpRight } from 'lucide-react';
import { PORTFOLIO_DATA } from '../data/portfolioData';

export const Header: React.FC = () => {
  const { profile } = PORTFOLIO_DATA;

  return (
    <header className="sticky top-0 z-40 bg-white/90 backdrop-blur-md border-b border-slate-200">
      <div className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between gap-8">
        {/* Zone 1: Single text element wordmark */}
        <a
          href="#"
          className="text-base font-semibold tracking-tight text-slate-900 hover:text-black transition-colors whitespace-nowrap shrink-0"
        >
          {profile.name}
        </a>

        {/* Zone 2: Clean single-line text navigation links */}
        <nav className="hidden md:flex items-center gap-8 text-sm font-normal text-slate-600">
          <a
            href="#projects"
            className="hover:text-slate-900 transition-colors whitespace-nowrap shrink-0"
          >
            Projects
          </a>
          <a
            href="#methodology"
            className="hover:text-slate-900 transition-colors whitespace-nowrap shrink-0"
          >
            Methodology
          </a>
          <a
            href="#architecture"
            className="hover:text-slate-900 transition-colors whitespace-nowrap shrink-0"
          >
            Agent Logic
          </a>
          <a
            href={profile.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-slate-900 transition-colors whitespace-nowrap shrink-0 inline-flex items-center gap-1"
          >
            LinkedIn
            <ArrowUpRight className="w-3.5 h-3.5 text-slate-400" />
          </a>
        </nav>

        {/* Zone 3: Direct contact text email link (no "Contact Me" button) */}
        <div className="flex items-center gap-4 shrink-0">
          <a
            href={`mailto:${profile.email}`}
            className="text-xs md:text-sm font-mono text-slate-600 hover:text-slate-900 transition-colors whitespace-nowrap shrink-0"
          >
            {profile.email}
          </a>
        </div>
      </div>
    </header>
  );
};
