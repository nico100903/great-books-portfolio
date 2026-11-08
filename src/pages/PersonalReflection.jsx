import React from 'react';
import { 
  Compass, 
  HelpCircle, 
  Edit3, 
  Quote, 
  Sparkles, 
  ArrowRight, 
  CheckCircle2, 
  Feather,
  Bookmark
} from 'lucide-react';
import { personalReflectionData, studentInfo } from '../data/portfolioData';
import SectionHeader from '../components/SectionHeader';
import PlaceholderBadge from '../components/PlaceholderBadge';

export default function PersonalReflection() {
  return (
    <div className="space-y-16 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
      
      {/* Section Header */}
      <SectionHeader
        title={personalReflectionData.pageTitle}
        subtitle={personalReflectionData.subtitle}
      />

      {/* Editorial Lead Banner */}
      <div className="rounded-3xl bg-ivory-light border border-beige-dark/80 p-8 sm:p-12 shadow-book text-center space-y-4">
        <div className="w-12 h-12 rounded-2xl bg-forest/10 text-forest mx-auto flex items-center justify-center">
          <Compass className="w-6 h-6" />
        </div>

        <h2 className="font-serif text-2xl sm:text-3xl font-bold text-forest">
          Critical Introspection & Future Horizons
        </h2>

        <p className="text-charcoal/80 text-base sm:text-lg font-light leading-relaxed max-w-2xl mx-auto">
          {personalReflectionData.editorialIntroduction}
        </p>

        <div className="pt-2 text-xs text-charcoal-muted">
          Author: <strong className="text-forest">{studentInfo.name}</strong> • {studentInfo.course} ({studentInfo.year})
        </div>
      </div>

      {/* =========================================================================
          THE FIVE REQUIRED REFLECTION QUESTIONS
          ========================================================================= */}
      <section className="space-y-10">
        <div className="space-y-10">
          {personalReflectionData.questions.map((q) => (
            <article
              key={q.id}
              className="rounded-3xl bg-ivory-light border border-beige-dark/80 p-7 sm:p-10 shadow-xs space-y-6"
            >
              {/* Question Banner */}
              <div className="space-y-2">
                <div className="flex items-center space-x-2 text-gold-dark text-xs font-mono font-bold uppercase tracking-wider">
                  <Bookmark className="w-3.5 h-3.5" />
                  <span>REFLECTIVE QUESTION {q.number}</span>
                </div>

                <h4 className="font-serif text-xl sm:text-2xl font-bold text-forest leading-snug">
                  {q.question}
                </h4>

                <p className="text-xs sm:text-sm text-charcoal-muted font-light leading-relaxed pt-1">
                  <strong className="text-charcoal font-medium">Reflective Focus:</strong> {q.contextGuide}
                </p>
              </div>

              {/* Student Response */}
              {q.studentResponse ? (
                <div className="pt-2 space-y-2">
                  <div className="flex items-center space-x-2 text-xs font-semibold uppercase tracking-wider text-gold-dark">
                    <Feather className="w-3.5 h-3.5" />
                    <span>{q.responseLabel}</span>
                  </div>

                  <div className="rounded-2xl border-l-4 border-gold bg-gradient-to-br from-beige/40 via-ivory-light to-amber-50/40 p-6 sm:p-8 shadow-xs text-charcoal/90 text-sm sm:text-base font-light leading-relaxed">
                    <p>{q.studentResponse}</p>
                  </div>
                </div>
              ) : (
                <div className="pt-2">
                  <PlaceholderBadge
                    label={q.placeholderLabel}
                    placeholderText={q.placeholder}
                    guidanceText={`Insert your personal answer to Question ${q.number} reflecting on your actual academic journey and insights.`}
                    dataFileReference={`src/data/portfolioData.js -> personalReflectionData.questions[id="${q.id}"].placeholder`}
                  />
                </div>
              )}

            </article>
          ))}
        </div>

      </section>

      {/* =========================================================================
          CONCLUDING EDITORIAL NOTE
          ========================================================================= */}
      <div className="rounded-3xl bg-forest text-ivory p-8 sm:p-10 shadow-book text-center space-y-4">
        <Feather className="w-8 h-8 text-gold mx-auto" />
        <h3 className="font-serif text-2xl font-bold text-ivory">
          Moving Forward into the Future
        </h3>
        <p className="text-sm sm:text-base text-ivory/80 font-light max-w-xl mx-auto leading-relaxed">
          “The study of Great Books does not terminate with the conclusion of a semester; it establishes a lifelong habit of inquiring mind, moral courage, and empathetic resonance with the human story.”
        </p>
        <div className="pt-2 text-xs text-gold-light font-serif italic">
          — Nathaniel Jr. S. Alcantara
        </div>
      </div>

    </div>
  );
}
