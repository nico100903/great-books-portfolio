import React from 'react';
import { Link } from 'react-router-dom';
import { 
  ArrowRight, 
  BookOpen, 
  Sparkles, 
  User, 
  GraduationCap, 
  Compass, 
  Feather, 
  Scroll, 
  Quote, 
  ChevronRight,
  ShieldCheck,
  Library
} from 'lucide-react';
import { studentInfo, portfolioSections, literaryWorks } from '../data/portfolioData';
import SectionHeader from '../components/SectionHeader';

const iconMap = {
  User: User,
  BookOpen: BookOpen,
  Sparkles: Sparkles,
  GraduationCap: GraduationCap,
  Compass: Compass,
};

export default function Home() {
  const scrollToBeyond = () => {
    const el = document.getElementById('beyond-the-pages');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="space-y-24 sm:space-y-32">
      
      {/* =========================================================================
          HERO SECTION
          ========================================================================= */}
      <section className="relative pt-8 sm:pt-14 pb-12 overflow-hidden">
        {/* Subtle decorative background watermark */}
        <div className="absolute top-0 right-0 -translate-y-12 translate-x-1/4 w-96 h-96 bg-sage/10 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute bottom-10 left-0 -translate-x-1/4 w-96 h-96 bg-beige/30 rounded-full blur-3xl pointer-events-none" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
            
            {/* Left Column: Heading & Academic Identity */}
            <div className="lg:col-span-7 space-y-6 sm:space-y-8">
              
              {/* Academic Course Pill */}
              <div className="inline-flex items-center space-x-2 px-3.5 py-1.5 rounded-full bg-beige/70 border border-beige-dark/60 text-forest text-xs font-medium shadow-xs">
                <span className="w-2 h-2 rounded-full bg-gold"></span>
                <span>{studentInfo.websiteSubtitle}</span>
                <span className="text-charcoal-muted">•</span>
                <span className="font-semibold">{studentInfo.section}</span>
              </div>

              {/* Main Hero Heading */}
              <h1 className="font-serif text-4xl sm:text-6xl lg:text-7xl font-extrabold text-forest tracking-tight leading-[1.1]">
                {studentInfo.websiteTitle}
              </h1>

              {/* Supporting Lead Text */}
              <p className="text-lg sm:text-xl text-charcoal/80 leading-relaxed font-light max-w-2xl">
                {studentInfo.heroTagline}
              </p>

              {/* Student Academic Card Highlight */}
              <div className="p-5 rounded-2xl bg-ivory-light border border-beige-dark/60 shadow-sm flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                <div className="flex items-center space-x-3.5">
                  <div className="w-12 h-12 rounded-xl bg-forest text-gold flex items-center justify-center font-serif text-xl font-bold shadow-inner overflow-hidden border border-gold/40">
                    <img 
                      src={studentInfo.profilePhoto} 
                      alt={studentInfo.name} 
                      className="w-full h-full object-cover" 
                      onError={(e) => { e.target.style.display = 'none'; }}
                    />
                  </div>
                  <div>
                    <h2 className="text-base font-bold text-forest leading-tight">
                      {studentInfo.name}
                    </h2>
                    <p className="text-xs text-charcoal-muted mt-0.5">
                      {studentInfo.course}
                    </p>
                  </div>
                </div>

                <div className="flex items-center space-x-2 pt-2 sm:pt-0 border-t sm:border-t-0 sm:border-l border-beige-dark/40 sm:pl-4 text-xs text-charcoal-light">
                  <span className="px-2.5 py-1 rounded-md bg-sage-faint text-forest font-semibold border border-sage/30">
                    {studentInfo.year}
                  </span>
                  <span className="px-2.5 py-1 rounded-md bg-beige text-charcoal-light font-medium">
                    {studentInfo.section}
                  </span>
                </div>
              </div>

              {/* Functional CTA Buttons */}
              <div className="flex flex-wrap items-center gap-4 pt-2">
                <Link
                  to="/analyses"
                  className="inline-flex items-center space-x-2.5 px-6 sm:px-7 py-3.5 rounded-full bg-forest text-ivory font-medium text-sm sm:text-base hover:bg-forest-light hover:shadow-lg transition-all transform hover:-translate-y-0.5 active:translate-y-0"
                >
                  <BookOpen className="w-4 h-4 text-gold-light" />
                  <span>Explore My Portfolio</span>
                  <ArrowRight className="w-4 h-4 text-ivory/80" />
                </Link>

                <button
                  onClick={scrollToBeyond}
                  type="button"
                  className="inline-flex items-center space-x-2 px-6 sm:px-7 py-3.5 rounded-full bg-beige/60 hover:bg-beige text-forest font-medium text-sm sm:text-base border border-beige-dark/70 transition-all shadow-xs"
                >
                  <Scroll className="w-4 h-4 text-gold-dark" />
                  <span>Discover My Literary Journey</span>
                </button>
              </div>

            </div>

            {/* Right Column: Large Literary Hero Visual */}
            <div className="lg:col-span-5 relative">
              <div className="relative mx-auto max-w-md lg:max-w-none">
                
                {/* Decorative Frame */}
                <div className="absolute -inset-3 rounded-3xl bg-gradient-to-tr from-gold/20 via-beige/40 to-forest/10 transform rotate-1 scale-[1.02] filter blur-xs"></div>

                <div className="relative rounded-3xl overflow-hidden shadow-book-lg border border-beige-dark/80 bg-forest-dark">
                  <img
                    src="https://images.unsplash.com/photo-1457369804613-52c61a468e7d?auto=format&fit=crop&w=1000&q=80"
                    alt="Vintage book pages and classic literature library"
                    className="w-full h-[400px] sm:h-[480px] object-cover opacity-90 hover:scale-105 transition-transform duration-700 ease-out"
                  />
                  
                  {/* Subtle Gradient Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-forest-deep via-forest/30 to-transparent"></div>

                  {/* Overlaid Literary Badge */}
                  <div className="absolute bottom-6 inset-x-6 p-5 rounded-2xl bg-forest-deep/80 backdrop-blur-md border border-forest-light/40 text-ivory shadow-lg">
                    <div className="flex items-center space-x-2 text-gold-light text-xs font-semibold uppercase tracking-wider mb-1">
                      <Feather className="w-3.5 h-3.5" />
                      <span>The Great Books Canon</span>
                    </div>
                    <p className="font-serif text-sm italic text-ivory/90 leading-snug">
                      “A classic is a book that has never finished saying what it has to say.”
                    </p>
                    <span className="block text-[11px] text-ivory/60 mt-1 font-sans text-right">— Italo Calvino</span>
                  </div>
                </div>

                {/* Floating Decorative Counter Badge */}
                <div className="absolute -bottom-4 -left-4 sm:-bottom-6 sm:-left-6 bg-ivory p-4 rounded-2xl shadow-book border border-beige-dark flex items-center space-x-3">
                  <div className="w-10 h-10 rounded-xl bg-gold/20 text-gold-dark flex items-center justify-center font-serif font-bold text-lg">
                    07
                  </div>
                  <div className="pr-2">
                    <span className="block text-xs font-bold text-forest">Required Works</span>
                    <span className="block text-[11px] text-charcoal-muted">Fully Analyzed</span>
                  </div>
                </div>

              </div>
            </div>

          </div>
        </div>
      </section>


      {/* =========================================================================
          SECTION: BEYOND THE PAGES (INTRODUCTION)
          ========================================================================= */}
      <section id="beyond-the-pages" className="relative scroll-mt-28 py-10">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="relative rounded-3xl bg-ivory-light border border-beige-dark/80 p-8 sm:p-12 lg:p-16 shadow-book overflow-hidden">
            {/* Background filigree ornament */}
            <div className="absolute top-0 right-0 p-8 opacity-5 text-forest pointer-events-none">
              <Library className="w-64 h-64" />
            </div>

            <div className="relative z-10 max-w-3xl mx-auto text-center space-y-6">
              
              <div className="inline-flex items-center space-x-2 px-3.5 py-1 rounded-full bg-gold/15 text-gold-dark text-xs font-semibold uppercase tracking-wider border border-gold/30">
                <Feather className="w-3.5 h-3.5" />
                <span>Introduction</span>
              </div>

              <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-forest">
                {studentInfo.introTitle}
              </h2>

              <p className="text-lg sm:text-xl text-charcoal-light leading-relaxed font-serif italic text-balance">
                “{studentInfo.introDescription}”
              </p>

              {/* Editorial Divider */}
              <div className="flex items-center justify-center space-x-3 pt-2">
                <div className="w-16 h-px bg-gold/40"></div>
                <Quote className="w-4 h-4 text-gold" />
                <div className="w-16 h-px bg-gold/40"></div>
              </div>

              <p className="text-sm sm:text-base text-charcoal-muted leading-relaxed font-light text-left sm:text-center pt-2">
                As a Computer Science senior, exploring the Great Books offered an essential counterweight to algorithms and software engineering. Here lies the confluence of logic and human soul—revealing how storytelling across millennia continues to shape moral dilemmas, philosophical inquiries, and empathetic thinking.
              </p>

            </div>
          </div>

        </div>
      </section>


      {/* =========================================================================
          SECTION: PORTFOLIO PILLARS (5 REQUIRED PREVIEW CARDS)
          ========================================================================= */}
      <section className="py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <SectionHeader
            badge="Portfolio Architecture"
            title="Explore the Portfolio Sections"
            subtitle="Navigate through the comprehensive modules documenting personal background, literary analyses, featured masterpiece, pedagogical synthesis, and personal reflections."
          />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            {portfolioSections.map((section, idx) => {
              const IconComponent = iconMap[section.icon] || BookOpen;

              return (
                <Link
                  key={section.id}
                  to={section.link}
                  className="group relative rounded-2xl bg-ivory-light border border-beige-dark/70 p-7 sm:p-8 hover:border-gold hover:shadow-book-lg transition-all duration-300 flex flex-col justify-between"
                >
                  {/* Card Header */}
                  <div>
                    <div className="flex items-center justify-between mb-6">
                      <div className="w-12 h-12 rounded-xl bg-forest/10 group-hover:bg-forest text-forest group-hover:text-gold transition-colors flex items-center justify-center shadow-xs">
                        <IconComponent className="w-6 h-6" />
                      </div>
                      <span className="text-[11px] font-semibold uppercase tracking-wider px-2.5 py-1 rounded-full bg-beige/60 text-charcoal-muted group-hover:text-forest transition-colors border border-beige-dark/40">
                        {section.badge}
                      </span>
                    </div>

                    <h3 className="font-serif text-2xl font-bold text-forest group-hover:text-forest-light transition-colors mb-1">
                      {section.title}
                    </h3>
                    <p className="text-xs uppercase tracking-wider font-medium text-gold-dark mb-3">
                      {section.subtitle}
                    </p>
                    <p className="text-sm text-charcoal-muted leading-relaxed font-light">
                      {section.description}
                    </p>
                  </div>

                  {/* Card Bottom CTA Link */}
                  <div className="pt-6 mt-6 border-t border-beige-dark/40 flex items-center justify-between text-xs font-semibold text-forest group-hover:text-gold-dark transition-colors">
                    <span>Open Section</span>
                    <ArrowRight className="w-4 h-4 transform group-hover:translate-x-1.5 transition-transform" />
                  </div>
                </Link>
              );
            })}
          </div>

        </div>
      </section>


      {/* =========================================================================
          SECTION: THE SEVEN MASTERPIECES SHOWCASE (QUICK PREVIEW)
          ========================================================================= */}
      <section className="py-12 bg-beige/30 -mx-4 sm:-mx-6 lg:-mx-8 px-4 sm:px-6 lg:px-8 border-y border-beige-dark/50">
        <div className="max-w-7xl mx-auto py-6">
          
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-12">
            <div>
              <div className="inline-flex items-center space-x-1.5 px-3 py-1 rounded-full text-xs font-semibold tracking-wider uppercase mb-3 bg-forest/10 text-forest border border-forest/15">
                <span>The Core Curriculum</span>
              </div>
              <h2 className="font-serif text-3xl sm:text-4xl font-bold text-forest tracking-tight">
                The Seven Literary Masterpieces
              </h2>
              <p className="mt-2 text-sm sm:text-base text-charcoal-muted max-w-2xl font-light">
                Carefully preserved classical texts spanning Biblical poetry, Sanskrit folklore, ancient Greek epics, chivalric song, and Heian romance.
              </p>
            </div>

            <Link
              to="/analyses"
              className="mt-6 md:mt-0 inline-flex items-center space-x-2 text-sm font-semibold text-forest hover:text-gold-dark transition-colors"
            >
              <span>View Full Literary Analyses Collection</span>
              <ChevronRight className="w-4 h-4" />
            </Link>
          </div>

          {/* Cards Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {literaryWorks.map((work) => (
              <Link
                key={work.id}
                to={`/analyses/${work.id}`}
                className="group relative rounded-2xl bg-ivory overflow-hidden border border-beige-dark/80 hover:border-gold hover:shadow-book transition-all duration-300 flex flex-col"
              >
                {/* Cover Image Container */}
                <div className="relative h-48 overflow-hidden bg-forest-dark">
                  <img
                    src={work.coverImage}
                    alt={work.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-forest-deep/80 via-transparent to-transparent"></div>
                  
                  {/* Number Badge */}
                  <div className="absolute top-3 left-3 bg-ivory/90 backdrop-blur-xs px-2.5 py-1 rounded-md text-xs font-mono font-bold text-forest border border-beige-dark/60">
                    {work.number}
                  </div>

                  {/* Period Badge */}
                  <div className="absolute bottom-3 left-3 text-[11px] text-ivory/90 font-medium">
                    {work.period}
                  </div>
                </div>

                {/* Card Content */}
                <div className="p-5 flex-1 flex flex-col justify-between">
                  <div>
                    <span className="text-[11px] uppercase tracking-wider font-semibold text-gold-dark block mb-1">
                      {work.genre.split(',')[0]}
                    </span>
                    <h3 className="font-serif text-lg font-bold text-forest group-hover:text-forest-light transition-colors leading-snug">
                      {work.title}
                    </h3>
                    <p className="text-xs text-charcoal-muted mt-1 font-light line-clamp-1">
                      {work.author}
                    </p>
                  </div>

                  <div className="mt-4 pt-3 border-t border-beige-dark/40 flex items-center justify-between text-xs text-charcoal font-medium group-hover:text-forest">
                    <span>Study Analysis</span>
                    <ArrowRight className="w-3.5 h-3.5 text-gold group-hover:translate-x-1 transition-transform" />
                  </div>
                </div>
              </Link>
            ))}
          </div>

        </div>
      </section>


      {/* =========================================================================
          ACADEMIC SUBMISSION CALLOUT BANNER
          ========================================================================= */}
      <section className="py-6">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="rounded-2xl border-2 border-forest/20 bg-forest text-ivory p-8 sm:p-10 shadow-book flex flex-col md:flex-row items-center justify-between gap-6">
            <div className="space-y-2 text-center md:text-left">
              <span className="text-xs uppercase tracking-widest text-gold-light font-semibold block">
                Academic Submission Complete
              </span>
              <h3 className="font-serif text-2xl sm:text-3xl font-bold text-ivory">
                Complete Scholarly Portfolio
              </h3>
              <p className="text-sm text-ivory/80 font-light max-w-xl">
                All seven classical literary masterpieces now feature comprehensive textual analyses, applied critical lenses, and personal scholarly reflections by {studentInfo.name}.
              </p>
            </div>

            <Link
              to="/profile"
              className="shrink-0 px-6 py-3 rounded-full bg-gold text-forest-deep font-semibold text-sm hover:bg-gold-light transition-colors shadow-sm"
            >
              View Student Profile
            </Link>
          </div>
        </div>
      </section>

    </div>
  );
}
