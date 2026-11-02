import React, { useState } from 'react';
import { Mail, ArrowUpRight, Copy, Check } from 'lucide-react';
import { PORTFOLIO_DATA } from '../data/portfolioData';

export const Footer: React.FC = () => {
  const [copied, setCopied] = useState(false);
  const { profile } = PORTFOLIO_DATA;

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(profile.email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <footer className="py-14 bg-white text-slate-600 border-t border-slate-200">
      <div className="max-w-6xl mx-auto px-6 space-y-10">
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
          <div className="space-y-1">
            <div className="text-base font-semibold text-slate-900 tracking-tight">
              {profile.name}
            </div>
            <p className="text-xs text-slate-500">
              {profile.role} · {profile.location}
            </p>
          </div>

          <div className="flex flex-wrap items-center gap-4 text-xs font-medium">
            <a
              href={`mailto:${profile.email}`}
              className="text-slate-700 hover:text-slate-900 transition-colors inline-flex items-center gap-1.5"
            >
              <Mail className="w-3.5 h-3.5 text-slate-400" />
              <span>{profile.email}</span>
            </a>

            <button
              onClick={handleCopyEmail}
              className="px-2.5 py-1 text-slate-600 hover:text-slate-900 bg-slate-50 hover:bg-slate-100 rounded border border-slate-200 transition-colors inline-flex items-center gap-1 font-mono text-[11px]"
            >
              {copied ? (
                <>
                  <Check className="w-3 h-3 text-emerald-600" />
                  <span className="text-emerald-700">Copied</span>
                </>
              ) : (
                <>
                  <Copy className="w-3 h-3 text-slate-400" />
                  <span>Copy</span>
                </>
              )}
            </button>

            <span aria-hidden="true" className="text-slate-300">·</span>

            <a
              href={profile.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="text-slate-700 hover:text-slate-900 transition-colors inline-flex items-center gap-1"
            >
              <span>LinkedIn</span>
              <ArrowUpRight className="w-3 h-3 text-slate-400" />
            </a>
          </div>
        </div>

        <div className="pt-6 border-t border-slate-100 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-500 font-mono">
          <div>
            © {new Date().getFullYear()} Paweł Prusko. All rights reserved.
          </div>
          <div>
            Crafted with React, Tailwind CSS & Generative AI Systems
          </div>
        </div>
      </div>
    </footer>
  );
};
