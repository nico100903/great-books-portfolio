import React from 'react';

export default function SectionHeader({
  badge,
  title,
  subtitle,
  align = 'center',
  className = '',
}) {
  const isCenter = align === 'center';

  return (
    <div className={`mb-12 ${isCenter ? 'text-center mx-auto max-w-3xl' : 'text-left'} ${className}`}>
      {badge && (
        <div className={`inline-flex items-center space-x-1.5 px-3 py-1 rounded-full text-xs font-semibold tracking-wider uppercase mb-3 ${
          isCenter ? 'mx-auto' : ''
        } bg-forest/10 text-forest border border-forest/15`}>
          <span>{badge}</span>
        </div>
      )}

      <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-forest tracking-tight leading-tight">
        {title}
      </h2>

      {subtitle && (
        <p className="mt-4 text-base sm:text-lg text-charcoal-muted leading-relaxed font-light">
          {subtitle}
        </p>
      )}

      {/* Decorative hairline divider with subtle gold diamond */}
      <div className={`flex items-center space-x-3 mt-6 ${isCenter ? 'justify-center' : 'justify-start'}`}>
        <div className="w-12 h-px bg-gold/40"></div>
        <div className="w-1.5 h-1.5 rotate-45 bg-gold"></div>
        <div className="w-12 h-px bg-gold/40"></div>
      </div>
    </div>
  );
}
