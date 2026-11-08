import React, { useState } from 'react';
import { Edit3, Check, Info, FileText } from 'lucide-react';

export default function PlaceholderBadge({
  label = "Academic Submission Placeholder",
  placeholderText,
  guidanceText,
  dataFileReference = "src/data/portfolioData.js",
  compact = false
}) {
  const [copied, setCopied] = useState(false);

  const handleCopy = () => {
    navigator.clipboard.writeText(placeholderText);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  if (compact) {
    return (
      <div className="inline-flex items-center space-x-2 px-3 py-1.5 rounded-lg bg-amber-50/80 border border-gold/40 text-charcoal text-xs">
        <span className="font-mono font-semibold text-gold-dark">{placeholderText}</span>
        <span className="text-[10px] text-charcoal-muted">(Awaiting assignment text)</span>
      </div>
    );
  }

  return (
    <div className="rounded-2xl border-2 border-dashed border-gold/60 bg-gradient-to-br from-beige/40 via-ivory-light to-amber-50/50 p-6 sm:p-8 transition-all hover:border-gold my-6 shadow-sm">
      {/* Header Bar */}
      <div className="flex flex-wrap items-center justify-between gap-3 pb-4 border-b border-gold/20">
        <div className="flex items-center space-x-2.5">
          <div className="w-7 h-7 rounded-lg bg-gold/20 text-gold-dark flex items-center justify-center">
            <Edit3 className="w-4 h-4" />
          </div>
          <div>
            <span className="text-xs uppercase tracking-wider font-semibold text-gold-dark block">
              {label}
            </span>
            <span className="text-[11px] text-charcoal-muted">
              Ready for student insertion in <code className="bg-ivory px-1.5 py-0.5 rounded text-[10px] font-mono text-forest border border-beige-dark/40">{dataFileReference}</code>
            </span>
          </div>
        </div>

        <button
          onClick={handleCopy}
          type="button"
          className="inline-flex items-center space-x-1.5 text-xs font-medium text-forest hover:text-gold-dark bg-ivory hover:bg-beige/40 px-3 py-1.5 rounded-lg border border-beige-dark/50 transition-all shadow-xs"
          title="Copy placeholder text"
        >
          {copied ? (
            <>
              <Check className="w-3.5 h-3.5 text-emerald-600" />
              <span className="text-emerald-700">Copied!</span>
            </>
          ) : (
            <>
              <FileText className="w-3.5 h-3.5 text-charcoal-muted" />
              <span>Copy Label</span>
            </>
          )}
        </button>
      </div>

      {/* Main Content Area */}
      <div className="mt-4 pt-1">
        <div className="font-mono text-sm sm:text-base font-semibold text-forest-dark bg-ivory/90 border border-beige-dark/60 rounded-xl p-4 sm:p-5 shadow-inner leading-relaxed">
          {placeholderText}
        </div>

        {/* Helpful Guidance Note */}
        {guidanceText && (
          <div className="mt-4 flex items-start space-x-2.5 text-xs text-charcoal-muted bg-ivory/60 rounded-lg p-3 border border-beige-dark/30">
            <Info className="w-4 h-4 text-gold shrink-0 mt-0.5" />
            <p className="leading-relaxed">
              <strong className="text-charcoal font-medium">Assignment Note:</strong> {guidanceText}
            </p>
          </div>
        )}
      </div>
    </div>
  );
}
