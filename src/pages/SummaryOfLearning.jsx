import React from 'react';
import { 
  GraduationCap, 
  Brain, 
  Eye, 
  ShieldAlert, 
  Feather, 
  BookOpen, 
  Lightbulb, 
  CheckCircle2, 
  Compass, 
  Sparkles,
  Layers
} from 'lucide-react';
import { summaryOfLearningData } from '../data/portfolioData';
import SectionHeader from '../components/SectionHeader';
import PlaceholderBadge from '../components/PlaceholderBadge';

const takeawayIconMap = {
  Brain: Brain,
  Eye: Eye,
  ShieldAlert: ShieldAlert,
  Feather: Feather,
};

export default function SummaryOfLearning() {
  return (
    <div className="space-y-16 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
      
      {/* Section Header */}
      <SectionHeader
        badge="Academic Synthesis"
        title={summaryOfLearningData.pageTitle}
        subtitle={summaryOfLearningData.subtitle}
      />

      {/* =========================================================================
          COHERENT GENERAL ACADEMIC INTRODUCTION
          ========================================================================= */}
      <section className="relative rounded-3xl bg-ivory-light border border-beige-dark/80 p-8 sm:p-12 shadow-book space-y-6">
        <div className="flex items-center space-x-3 text-gold-dark text-xs font-semibold uppercase tracking-wider">
          <BookOpen className="w-4 h-4" />
          <span>Curricular Overview</span>
        </div>

        <h2 className="font-serif text-2xl sm:text-3xl font-bold text-forest">
          The Humanistic Dimension of Higher Education
        </h2>

        <div className="text-charcoal/90 text-base sm:text-lg font-light leading-relaxed space-y-4">
          {summaryOfLearningData.generalIntroduction.split('\n\n').map((paragraph, idx) => (
            <p key={idx} className={idx === 0 ? "dropcap" : ""}>
              {paragraph}
            </p>
          ))}
        </div>
      </section>

      {/* =========================================================================
          THE FOUR REQUIRED SUBSECTIONS
          ========================================================================= */}
      <section className="space-y-12">
        
        <div className="border-b border-beige-dark/60 pb-3">
          <span className="text-xs uppercase tracking-widest font-semibold text-gold-dark block">
            Four Pillars of Literary Competence
          </span>
          <h2 className="font-serif text-2xl sm:text-3xl font-bold text-forest mt-1">
            Core Thematic Subsections
          </h2>
        </div>

        <div className="space-y-12">
          {summaryOfLearningData.subsections.map((sub) => (
            <div
              key={sub.id}
              className="rounded-3xl bg-ivory-light border border-beige-dark/80 p-7 sm:p-10 shadow-xs space-y-6"
            >
              {/* Header */}
              <div className="flex items-start justify-between gap-4">
                <div className="space-y-1">
                  <span className="font-mono text-xs font-bold text-gold-dark uppercase tracking-wider">
                    SUBSECTION {sub.number}
                  </span>
                  <h3 className="font-serif text-2xl sm:text-3xl font-bold text-forest">
                    {sub.title}
                  </h3>
                </div>

                <div className="w-10 h-10 rounded-2xl bg-forest/10 text-forest flex items-center justify-center font-serif font-bold text-sm shrink-0">
                  {sub.number}
                </div>
              </div>

              {/* General Academic Context */}
              <div className="p-6 rounded-2xl bg-beige/30 border border-beige-dark/50 text-charcoal/80 text-sm sm:text-base font-light leading-relaxed">
                <p>{sub.academicOverview}</p>
              </div>

              {/* Student Academic Synthesis & Classroom Reflections */}
              {sub.studentReflection ? (
                <div className="pt-2 space-y-3">
                  <div className="flex items-center space-x-2 text-xs font-semibold uppercase tracking-wider text-gold-dark">
                    <Feather className="w-3.5 h-3.5" />
                    <span>{sub.reflectionLabel}</span>
                  </div>

                  <div className="rounded-2xl border-l-4 border-gold bg-gradient-to-br from-beige/40 via-ivory-light to-amber-50/40 p-6 sm:p-8 shadow-xs text-charcoal/90 text-sm sm:text-base font-light leading-relaxed space-y-4">
                    {sub.studentReflection.split('\n\n').map((para, pIdx) => (
                      <p key={pIdx}>
                        {para}
                      </p>
                    ))}
                  </div>
                </div>
              ) : (
                <div className="pt-2">
                  <h4 className="font-serif text-base font-semibold text-forest mb-1">
                    {sub.placeholderLabel}
                  </h4>
                  <PlaceholderBadge
                    label={sub.placeholderLabel}
                    placeholderText={sub.placeholderText}
                    guidanceText={`Insert your personal classroom reflections, analytical notes, and concrete examples demonstrating your grasp of ${sub.title.toLowerCase()}.`}
                    dataFileReference={`src/data/portfolioData.js -> summaryOfLearningData.subsections[id="${sub.id}"].placeholderText`}
                  />
                </div>
              )}

            </div>
          ))}
        </div>

      </section>

      {/* =========================================================================
          KEY TAKEAWAYS SECTION
          ========================================================================= */}
      <section className="space-y-8 pt-6">
        
        <div className="border-b border-beige-dark/60 pb-3">
          <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-forest/10 text-forest text-xs font-semibold uppercase tracking-wider mb-2">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Essential Competencies</span>
          </div>
          <h2 className="font-serif text-2xl sm:text-3xl font-bold text-forest">
            Key Academic Takeaways
          </h2>
          <p className="text-xs sm:text-sm text-charcoal-muted mt-1 font-light">
            Core cognitive, ethical, and communicative capabilities cultivated throughout the Great Books curriculum.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          {summaryOfLearningData.keyTakeaways.map((takeaway, idx) => {
            const IconComp = takeawayIconMap[takeaway.icon] || Lightbulb;

            return (
              <div
                key={idx}
                className="p-6 rounded-2xl bg-ivory-light border border-beige-dark/70 hover:border-gold hover:shadow-book transition-all space-y-3"
              >
                <div className="w-12 h-12 rounded-xl bg-forest text-gold-light flex items-center justify-center shadow-xs">
                  <IconComp className="w-6 h-6" />
                </div>
                <h3 className="font-serif text-xl font-bold text-forest">
                  {takeaway.title}
                </h3>
                <p className="text-xs sm:text-sm text-charcoal-muted font-light leading-relaxed">
                  {takeaway.description}
                </p>
              </div>
            );
          })}
        </div>

      </section>

    </div>
  );
}
