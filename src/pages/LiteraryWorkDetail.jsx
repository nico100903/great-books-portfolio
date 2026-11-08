import React, { useEffect } from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import { 
  ArrowLeft, 
  ArrowRight, 
  BookOpen, 
  Calendar, 
  MapPin, 
  Users, 
  Sparkles, 
  Feather, 
  Scroll, 
  BookmarkCheck, 
  FileEdit,
  Quote,
  ChevronLeft,
  ChevronRight
} from 'lucide-react';
import { literaryWorks } from '../data/portfolioData';
import PlaceholderBadge from '../components/PlaceholderBadge';

export default function LiteraryWorkDetail() {
  const { id } = useParams();
  const navigate = useNavigate();

  // Find current work
  const currentIndex = literaryWorks.findIndex((w) => w.id === id);
  const work = literaryWorks[currentIndex];

  // Scroll to top on id change
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, [id]);

  if (!work) {
    return (
      <div className="max-w-2xl mx-auto px-4 py-24 text-center space-y-6">
        <h2 className="font-serif text-3xl font-bold text-forest">Literary Work Not Found</h2>
        <p className="text-charcoal-muted">
          The requested literary analysis does not exist within the Great Books curriculum collection.
        </p>
        <Link
          to="/analyses"
          className="inline-flex items-center space-x-2 px-6 py-3 rounded-full bg-forest text-ivory font-semibold text-sm hover:bg-forest-light transition-all"
        >
          <ArrowLeft className="w-4 h-4" />
          <span>Back to Literary Analyses</span>
        </Link>
      </div>
    );
  }

  // Calculate Previous and Next works
  const prevWork = currentIndex > 0 ? literaryWorks[currentIndex - 1] : literaryWorks[literaryWorks.length - 1];
  const nextWork = currentIndex < literaryWorks.length - 1 ? literaryWorks[currentIndex + 1] : literaryWorks[0];

  return (
    <div className="relative -mt-4 pt-4 overflow-hidden">
      {/* Dynamic Storybook Background Atmosphere */}
      <div className="absolute top-0 inset-x-0 h-[500px] sm:h-[620px] pointer-events-none overflow-hidden z-0">
        <img
          src={work.coverImage}
          alt=""
          className="w-full h-full object-cover filter blur-sm opacity-25 scale-105 transform origin-top transition-all duration-700"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-ivory/40 via-ivory/85 to-ivory"></div>
        <div className="absolute inset-0 bg-radial-gradient from-transparent via-ivory/50 to-ivory"></div>
      </div>

      <div className="relative z-10 space-y-16 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
      
      {/* =========================================================================
          TOP NAVIGATION BAR (Back + Previous / Next)
          ========================================================================= */}
      <nav className="flex items-center justify-between pb-6 border-b border-beige-dark/60 text-xs sm:text-sm">
        <Link
          to="/analyses"
          className="inline-flex items-center space-x-2 text-forest hover:text-gold-dark font-medium transition-colors"
        >
          <ArrowLeft className="w-4 h-4" />
          <span>Back to Literary Analyses</span>
        </Link>

        <div className="flex items-center space-x-2 sm:space-x-4">
          <Link
            to={`/analyses/${prevWork.id}`}
            className="inline-flex items-center space-x-1 px-3 py-1.5 rounded-lg bg-beige/50 hover:bg-beige text-charcoal hover:text-forest transition-colors text-xs"
            title={`Previous: ${prevWork.title}`}
          >
            <ChevronLeft className="w-4 h-4" />
            <span className="hidden sm:inline">Prev ({prevWork.number})</span>
          </Link>

          <span className="text-charcoal-muted text-xs font-mono">
            {work.number} / 07
          </span>

          <Link
            to={`/analyses/${nextWork.id}`}
            className="inline-flex items-center space-x-1 px-3 py-1.5 rounded-lg bg-beige/50 hover:bg-beige text-charcoal hover:text-forest transition-colors text-xs"
            title={`Next: ${nextWork.title}`}
          >
            <span className="hidden sm:inline">Next ({nextWork.number})</span>
            <ChevronRight className="w-4 h-4" />
          </Link>
        </div>
      </nav>

      {/* =========================================================================
          WORK HERO BANNER
          ========================================================================= */}
      <header className="space-y-6">
        
        {/* Number & Category Pill */}
        <div className="flex flex-wrap items-center gap-2">
          <span className="font-mono text-xs font-bold px-3 py-1 rounded-md bg-forest text-ivory">
            MASTERPIECE {work.number}
          </span>
          <span className="text-xs uppercase tracking-wider font-semibold text-gold-dark px-3 py-1 rounded-md bg-beige/60 border border-beige-dark/50">
            {work.genre}
          </span>
        </div>

        {/* Title & Attribution */}
        <h1 className="font-serif text-3xl sm:text-5xl lg:text-6xl font-extrabold text-forest tracking-tight leading-[1.1]">
          {work.title}
        </h1>

        <div className="flex flex-wrap items-center gap-y-2 gap-x-6 text-sm text-charcoal-muted pt-1">
          <div>
            <strong className="text-charcoal font-semibold">Author / Attribution:</strong> {work.author}
          </div>
          <div className="flex items-center space-x-1.5">
            <Calendar className="w-4 h-4 text-gold-dark" />
            <span>{work.period}</span>
          </div>
          <div className="flex items-center space-x-1.5">
            <MapPin className="w-4 h-4 text-gold-dark" />
            <span>{work.region}</span>
          </div>
        </div>

        {/* Large Editorial Image Frame */}
        <div className="relative rounded-3xl overflow-hidden shadow-book-lg border border-beige-dark/80 bg-forest-dark h-72 sm:h-96 my-8">
          <img
            src={work.coverImage}
            alt={work.title}
            className="w-full h-full object-cover opacity-90"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-forest-deep via-forest/30 to-transparent"></div>

          {/* Epigraph Callout at bottom of hero */}
          <div className="absolute bottom-6 inset-x-6 p-5 rounded-2xl bg-forest-deep/85 backdrop-blur-md border border-forest-light/40 text-ivory shadow-lg">
            <div className="flex items-start space-x-3">
              <Quote className="w-5 h-5 text-gold shrink-0 mt-0.5" />
              <div>
                <p className="font-serif italic text-sm sm:text-base text-ivory/95 leading-relaxed">
                  {work.epigraph}
                </p>
                <span className="block text-[11px] text-sage-light mt-1.5">
                  {work.imageCaption}
                </span>
              </div>
            </div>
          </div>
        </div>

      </header>

      {/* =========================================================================
          SECTION 1: HISTORICAL & CULTURAL BACKGROUND
          ========================================================================= */}
      <section className="space-y-4">
        <div className="flex items-center space-x-3 border-b border-beige-dark/60 pb-3">
          <div className="w-8 h-8 rounded-lg bg-forest/10 text-forest flex items-center justify-center">
            <Calendar className="w-4 h-4" />
          </div>
          <h2 className="font-serif text-2xl font-bold text-forest">
            Historical and Cultural Background
          </h2>
        </div>

        <div className="rounded-2xl bg-ivory-light border border-beige-dark/80 p-6 sm:p-8 shadow-xs text-charcoal/90 text-base sm:text-lg font-light leading-relaxed space-y-4">
          {work.historicalBackground.split('\n\n').map((paragraph, index) => (
            <p key={index}>
              {paragraph}
            </p>
          ))}
        </div>
      </section>

      {/* =========================================================================
          SECTION 2: STORY OVERVIEW / SUMMARY
          ========================================================================= */}
      <section className="space-y-4">
        <div className="flex items-center space-x-3 border-b border-beige-dark/60 pb-3">
          <div className="w-8 h-8 rounded-lg bg-forest/10 text-forest flex items-center justify-center">
            <BookOpen className="w-4 h-4" />
          </div>
          <h2 className="font-serif text-2xl font-bold text-forest">
            Story Overview & Central Message
          </h2>
        </div>

        <div className="rounded-2xl bg-ivory-light border border-beige-dark/80 p-6 sm:p-8 shadow-xs text-charcoal/90 text-base sm:text-lg font-light leading-relaxed space-y-4">
          {work.storyOverview.split('\n\n').map((paragraph, index) => (
            <p key={index} className={index === 0 ? "dropcap" : ""}>
              {paragraph}
            </p>
          ))}
        </div>
      </section>

      {/* =========================================================================
          SECTION 3: MAJOR THEMES
          ========================================================================= */}
      <section className="space-y-4">
        <div className="flex items-center space-x-3 border-b border-beige-dark/60 pb-3">
          <div className="w-8 h-8 rounded-lg bg-forest/10 text-forest flex items-center justify-center">
            <Sparkles className="w-4 h-4" />
          </div>
          <h2 className="font-serif text-2xl font-bold text-forest">
            Major Themes & Philosophical Motifs
          </h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          {work.majorThemes.map((theme, idx) => (
            <div
              key={idx}
              className="p-5 rounded-2xl bg-ivory-light border border-beige-dark/70 hover:border-gold transition-all"
            >
              <div className="flex items-center space-x-2 text-gold-dark text-xs font-mono font-bold mb-1">
                <span>THEME 0{idx + 1}</span>
              </div>
              <h3 className="font-serif text-lg font-bold text-forest mb-2">
                {theme.title}
              </h3>
              <p className="text-xs sm:text-sm text-charcoal-muted font-light leading-relaxed">
                {theme.description}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* =========================================================================
          SECTION 4: IMPORTANT CHARACTERS OR FIGURES
          ========================================================================= */}
      <section className="space-y-4">
        <div className="flex items-center space-x-3 border-b border-beige-dark/60 pb-3">
          <div className="w-8 h-8 rounded-lg bg-forest/10 text-forest flex items-center justify-center">
            <Users className="w-4 h-4" />
          </div>
          <h2 className="font-serif text-2xl font-bold text-forest">
            Important Characters and Relevant Figures
          </h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          {work.keyFigures.map((figure, idx) => (
            <div
              key={idx}
              className="p-5 rounded-2xl bg-ivory-light border border-beige-dark/70 flex items-start space-x-3.5"
            >
              <div className="w-9 h-9 rounded-xl bg-forest text-gold-light flex items-center justify-center font-serif font-bold text-sm shrink-0">
                {figure.name.charAt(0)}
              </div>
              <div>
                <h3 className="font-serif text-base font-bold text-forest">
                  {figure.name}
                </h3>
                <span className="text-xs uppercase tracking-wider font-semibold text-gold-dark block mb-1">
                  {figure.role}
                </span>
                <p className="text-xs sm:text-sm text-charcoal-muted font-light leading-relaxed">
                  {figure.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* =========================================================================
          SECTION 5: LITERARY SIGNIFICANCE
          ========================================================================= */}
      <section className="space-y-4">
        <div className="flex items-center space-x-3 border-b border-beige-dark/60 pb-3">
          <div className="w-8 h-8 rounded-lg bg-forest/10 text-forest flex items-center justify-center">
            <Feather className="w-4 h-4" />
          </div>
          <h2 className="font-serif text-2xl font-bold text-forest">
            Literary Significance and Legacy
          </h2>
        </div>

        <div className="rounded-2xl bg-beige/40 border border-beige-dark/80 p-6 sm:p-8 shadow-xs text-charcoal/90 text-base font-light leading-relaxed">
          <p>{work.literarySignificance}</p>
        </div>
      </section>

      {/* =========================================================================
          SECTION 6 & 7: ACADEMIC ASSIGNMENT PLACEHOLDERS
          ========================================================================= */}
      <section className="pt-6 space-y-8 border-t-2 border-gold/30">
        
        <div>
          <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-gold/15 text-gold-dark text-xs font-semibold uppercase tracking-wider mb-2">
            <BookmarkCheck className="w-3.5 h-3.5" />
            <span>Student Academic Submission Section</span>
          </div>
          <h2 className="font-serif text-2xl sm:text-3xl font-bold text-forest">
            My Academic Analysis & Applied Literary Lens
          </h2>
          <p className="text-xs sm:text-sm text-charcoal-muted mt-1 font-light">
            Critical literary lens evaluation and scholarly textual analysis by {studentInfo.name}.
          </p>
        </div>

        {/* Literary Lens */}
        <div className="space-y-3">
          <div className="flex items-center space-x-2 text-xs font-semibold uppercase tracking-wider text-gold-dark">
            <BookmarkCheck className="w-4 h-4" />
            <span>Applied Literary Lens: {work.appliedLensTitle || "Awaiting Selection"}</span>
          </div>

          {work.appliedLensDescription ? (
            <div className="rounded-2xl border-l-4 border-gold bg-gradient-to-br from-beige/40 via-ivory-light to-amber-50/40 p-6 sm:p-8 shadow-xs text-charcoal/90 text-sm sm:text-base font-light leading-relaxed">
              <h4 className="font-serif text-lg font-bold text-forest mb-2">
                {work.appliedLensTitle}
              </h4>
              <p>{work.appliedLensDescription}</p>
            </div>
          ) : (
            <PlaceholderBadge
              label="Applied Critical Literary Lens"
              placeholderText={`Literary Lens: ${work.literaryLensPlaceholder}`}
              guidanceText={work.lensGuidance}
              dataFileReference={`src/data/portfolioData.js -> literaryWorks[id="${work.id}"].literaryLensPlaceholder`}
            />
          )}
        </div>

        {/* Complete Literary Analysis */}
        <div className="space-y-3">
          <div className="flex items-center space-x-2 text-xs font-semibold uppercase tracking-wider text-gold-dark">
            <Feather className="w-4 h-4" />
            <span>Complete Literary Analysis</span>
          </div>

          {work.fullAnalysis ? (
            <div className="rounded-3xl border border-beige-dark/80 bg-ivory-light p-7 sm:p-10 shadow-book space-y-5 text-charcoal/90 text-base sm:text-lg font-light leading-relaxed">
              <h3 className="font-serif text-2xl sm:text-3xl font-bold text-forest border-b border-beige-dark/50 pb-3">
                {work.title}
              </h3>
              {work.fullAnalysis.split('\n\n').map((paragraph, pIdx) => (
                <p key={pIdx} className={pIdx === 0 ? "dropcap" : ""}>
                  {paragraph}
                </p>
              ))}

              <div className="pt-4 border-t border-beige-dark/60 flex items-center justify-between text-xs text-charcoal-muted">
                <span>Analysis by <strong className="text-forest">Nathaniel Jr. S. Alcantara</strong></span>
                <span>Great Books Portfolio</span>
              </div>
            </div>
          ) : (
            <PlaceholderBadge
              label="Complete Original Academic Analysis"
              placeholderText={`Complete Literary Analysis: ${work.analysisPlaceholder}`}
              guidanceText={work.analysisGuidance}
              dataFileReference={`src/data/portfolioData.js -> literaryWorks[id="${work.id}"].analysisPlaceholder`}
            />
          )}
        </div>

      </section>

      {/* =========================================================================
          BOTTOM PREVIOUS / NEXT NAVIGATION
          ========================================================================= */}
      <footer className="pt-10 border-t border-beige-dark/60">
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          
          <Link
            to={`/analyses/${prevWork.id}`}
            className="p-5 rounded-2xl bg-ivory-light border border-beige-dark/70 hover:border-gold hover:shadow-book transition-all flex items-center space-x-4 text-left group"
          >
            <div className="w-10 h-10 rounded-xl bg-forest/10 text-forest group-hover:bg-forest group-hover:text-gold flex items-center justify-center shrink-0 transition-colors">
              <ChevronLeft className="w-5 h-5" />
            </div>
            <div className="overflow-hidden">
              <span className="text-[11px] uppercase tracking-wider text-charcoal-muted font-semibold block">
                Previous Work (0{prevWork.number.replace('0','')})
              </span>
              <span className="font-serif text-base font-bold text-forest group-hover:text-forest-light truncate block">
                {prevWork.title}
              </span>
            </div>
          </Link>

          <Link
            to={`/analyses/${nextWork.id}`}
            className="p-5 rounded-2xl bg-ivory-light border border-beige-dark/70 hover:border-gold hover:shadow-book transition-all flex items-center justify-between text-right group"
          >
            <div className="overflow-hidden pr-2">
              <span className="text-[11px] uppercase tracking-wider text-charcoal-muted font-semibold block">
                Next Work (0{nextWork.number.replace('0','')})
              </span>
              <span className="font-serif text-base font-bold text-forest group-hover:text-forest-light truncate block">
                {nextWork.title}
              </span>
            </div>
            <div className="w-10 h-10 rounded-xl bg-forest/10 text-forest group-hover:bg-forest group-hover:text-gold flex items-center justify-center shrink-0 transition-colors">
              <ChevronRight className="w-5 h-5" />
            </div>
          </Link>

        </div>
      </footer>

    </div>
  </div>
  );
}
