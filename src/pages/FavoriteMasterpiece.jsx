import React from 'react';
import { 
  Sparkles, 
  Crown, 
  BookOpen, 
  User, 
  Compass, 
  Feather, 
  Quote, 
  Bookmark, 
  ShieldCheck, 
  Heart, 
  CheckCircle2, 
  ArrowRight,
  Anchor,
  Ship,
  Brain,
  Eye,
  Key,
  GraduationCap,
  Code2
} from 'lucide-react';
import { Link } from 'react-router-dom';
import { favoriteMasterpieceData, studentInfo } from '../data/portfolioData';
import SectionHeader from '../components/SectionHeader';

export default function FavoriteMasterpiece() {
  return (
    <div className="space-y-16 sm:space-y-24 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
      
      {/* =========================================================================
          EDITORIAL HEADER
          ========================================================================= */}
      <SectionHeader
        badge="Crowning Literary Selection"
        title={favoriteMasterpieceData.pageTitle}
        subtitle={favoriteMasterpieceData.subtitle}
      />

      {/* =========================================================================
          HERO MAGAZINE SHOWCASE BANNER
          ========================================================================= */}
      <header className="relative rounded-3xl overflow-hidden shadow-book-lg border border-beige-dark/80 bg-forest-dark">
        {/* Cover Image */}
        <div className="relative h-80 sm:h-[420px] overflow-hidden">
          <img
            src={favoriteMasterpieceData.coverImage}
            alt={favoriteMasterpieceData.title}
            className="w-full h-full object-cover opacity-85 hover:scale-105 transition-transform duration-700 ease-out"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-forest-deep via-forest/40 to-transparent"></div>

          {/* Badges in Top Left */}
          <div className="absolute top-6 left-6 flex flex-wrap items-center gap-2">
            <span className="px-3.5 py-1.5 rounded-full bg-ivory/95 backdrop-blur-md text-forest text-xs font-bold font-mono shadow-sm">
              MY FAVORITE MASTERPIECE
            </span>
            <span className="px-3 py-1 rounded-full bg-forest-deep/80 backdrop-blur-md text-gold-light text-xs font-semibold border border-forest-light/40">
              {favoriteMasterpieceData.category}
            </span>
          </div>

          {/* Bottom Title & Epigraph Overlay */}
          <div className="absolute bottom-6 inset-x-6 sm:inset-x-8 space-y-3">
            <div className="flex items-center space-x-2 text-gold-light text-xs font-mono font-bold tracking-widest uppercase">
              <Anchor className="w-4 h-4" />
              <span>Homeric Epic Literature</span>
            </div>

            <h1 className="font-serif text-3xl sm:text-5xl lg:text-6xl font-black text-ivory tracking-tight leading-none">
              {favoriteMasterpieceData.title}
            </h1>

            <p className="text-sm sm:text-base text-gold-light font-medium">
              By {favoriteMasterpieceData.author} • {favoriteMasterpieceData.period} • {favoriteMasterpieceData.region}
            </p>

            <blockquote className="hidden sm:block font-serif italic text-xs sm:text-sm text-ivory/90 border-l-2 border-gold/70 pl-3 leading-relaxed max-w-3xl pt-1">
              {favoriteMasterpieceData.epigraph}
            </blockquote>
          </div>
        </div>
      </header>


      {/* =========================================================================
          INTRODUCTORY ESSAY LEAD
          ========================================================================= */}
      <section className="rounded-3xl bg-ivory-light border border-beige-dark/80 p-8 sm:p-12 shadow-book">
        <div className="max-w-3xl mx-auto space-y-4">
          <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-forest/10 text-forest text-xs font-semibold uppercase tracking-wider">
            <Feather className="w-3.5 h-3.5" />
            <span>Academic Student Reflection</span>
          </div>

          <h2 className="font-serif text-2xl sm:text-3xl font-bold text-forest">
            A Journey Through Myth, Mind, and Mortal Truth
          </h2>

          <p className="dropcap text-base sm:text-lg text-charcoal/90 font-light leading-relaxed">
            {favoriteMasterpieceData.introductoryLead}
          </p>
        </div>
      </section>


      {/* =========================================================================
          SECTION A: STORY OVERVIEW AND NARRATIVE SIGNIFICANCE
          ========================================================================= */}
      <section className="space-y-6">
        <div className="flex items-center space-x-3 border-b border-beige-dark/60 pb-3">
          <div className="w-8 h-8 rounded-lg bg-forest text-ivory flex items-center justify-center font-mono font-bold text-xs">
            A
          </div>
          <div>
            <h2 className="font-serif text-2xl sm:text-3xl font-bold text-forest">
              Story Overview & Narrative Significance
            </h2>
            <p className="text-xs text-charcoal-muted">The voyage home, mythical trials, and psychological homecoming</p>
          </div>
        </div>

        <div className="rounded-3xl bg-ivory-light border border-beige-dark/80 p-8 sm:p-10 shadow-xs space-y-6 text-charcoal/90 text-base sm:text-lg font-light leading-relaxed">
          {favoriteMasterpieceData.storyOverview.split('\n\n').map((paragraph, idx) => (
            <p key={idx}>
              {paragraph}
            </p>
          ))}

          {/* Pull Quote Callout */}
          <div className="my-6 p-6 rounded-2xl bg-beige/50 border-l-4 border-gold text-forest space-y-2">
            <Quote className="w-6 h-6 text-gold" />
            <p className="font-serif italic text-base sm:text-lg font-medium leading-relaxed">
              “The journey of Odysseus is far more than physical navigation across geography; it is a profound psychological and moral pilgrimage—a story about preserving human dignity, self-restraint, and devotion when everything else has been stripped away.”
            </p>
          </div>
        </div>
      </section>


      {/* =========================================================================
          SECTION B: REASONS FOR CHOOSING THIS MASTERPIECE
          ========================================================================= */}
      <section className="space-y-6">
        <div className="flex items-center space-x-3 border-b border-beige-dark/60 pb-3">
          <div className="w-8 h-8 rounded-lg bg-forest text-ivory flex items-center justify-center font-mono font-bold text-xs">
            B
          </div>
          <div>
            <h2 className="font-serif text-2xl sm:text-3xl font-bold text-forest">
              Why The Odyssey Is My Favorite Masterpiece
            </h2>
            <p className="text-xs text-charcoal-muted">Adventures, human imperfections, and genuine relatability</p>
          </div>
        </div>

        <div className="rounded-3xl bg-ivory-light border border-beige-dark/80 p-8 sm:p-10 shadow-xs space-y-6 text-charcoal/90 text-base sm:text-lg font-light leading-relaxed">
          {favoriteMasterpieceData.reasonsForChoosing.split('\n\n').map((paragraph, idx) => (
            <p key={idx}>
              {paragraph}
            </p>
          ))}
        </div>
      </section>


      {/* =========================================================================
          SECTION C: SIGNIFICANT THEMES AND MOTIFS
          ========================================================================= */}
      <section className="space-y-6">
        <div className="flex items-center space-x-3 border-b border-beige-dark/60 pb-3">
          <div className="w-8 h-8 rounded-lg bg-forest text-ivory flex items-center justify-center font-mono font-bold text-xs">
            C
          </div>
          <div>
            <h2 className="font-serif text-2xl sm:text-3xl font-bold text-forest">
              Significant Themes & Motifs
            </h2>
            <p className="text-xs text-charcoal-muted">Six foundational pillars shaping the philosophical depth of the epic</p>
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
          {favoriteMasterpieceData.themes.map((theme, idx) => (
            <div
              key={idx}
              className="p-6 rounded-2xl bg-ivory-light border border-beige-dark/70 hover:border-gold hover:shadow-book transition-all space-y-2 flex flex-col justify-between"
            >
              <div>
                <span className="font-mono text-xs font-bold text-gold-dark uppercase tracking-wider block mb-1">
                  THEME 0{idx + 1}
                </span>
                <h3 className="font-serif text-xl font-bold text-forest mb-2">
                  {theme.title}
                </h3>
                <p className="text-xs sm:text-sm text-charcoal-muted font-light leading-relaxed">
                  {theme.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </section>


      {/* =========================================================================
          SECTION D: IMPORTANT CHARACTERS AND DRAMATIC AGENTS
          ========================================================================= */}
      <section className="space-y-6">
        <div className="flex items-center space-x-3 border-b border-beige-dark/60 pb-3">
          <div className="w-8 h-8 rounded-lg bg-forest text-ivory flex items-center justify-center font-mono font-bold text-xs">
            D
          </div>
          <div>
            <h2 className="font-serif text-2xl sm:text-3xl font-bold text-forest">
              Important Characters & Dramatic Agents
            </h2>
            <p className="text-xs text-charcoal-muted">Seven key figures driving the moral tensions and narrative resolution</p>
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
          {favoriteMasterpieceData.characters.map((char, idx) => (
            <div
              key={idx}
              className="p-6 rounded-2xl bg-ivory-light border border-beige-dark/70 hover:border-gold transition-all flex items-start space-x-4"
            >
              <div className="w-10 h-10 rounded-xl bg-forest text-gold-light flex items-center justify-center font-serif font-bold text-sm shrink-0 shadow-xs">
                {char.name.charAt(0)}
              </div>
              <div className="space-y-1">
                <h3 className="font-serif text-lg font-bold text-forest">
                  {char.name}
                </h3>
                <span className="text-[11px] uppercase tracking-wider font-semibold text-gold-dark block">
                  {char.role}
                </span>
                <p className="text-xs text-charcoal-muted font-light leading-relaxed pt-1">
                  {char.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </section>


      {/* =========================================================================
          SECTION E: LESSONS LEARNED AND MORAL INSIGHTS
          ========================================================================= */}
      <section className="space-y-6">
        <div className="flex items-center space-x-3 border-b border-beige-dark/60 pb-3">
          <div className="w-8 h-8 rounded-lg bg-forest text-ivory flex items-center justify-center font-mono font-bold text-xs">
            E
          </div>
          <div>
            <h2 className="font-serif text-2xl sm:text-3xl font-bold text-forest">
              Lessons Learned & Moral Insights
            </h2>
            <p className="text-xs text-charcoal-muted">Timeless ethical takeaways for personal growth and character development</p>
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {favoriteMasterpieceData.lessons.map((lesson, idx) => (
            <div
              key={idx}
              className="p-6 rounded-2xl bg-ivory-light border border-beige-dark/70 hover:border-gold hover:shadow-sm transition-all space-y-2 flex flex-col justify-between"
            >
              <div>
                <div className="w-8 h-8 rounded-lg bg-gold/15 text-gold-dark flex items-center justify-center font-mono font-bold text-xs mb-3">
                  0{idx + 1}
                </div>
                <h3 className="font-serif text-base font-bold text-forest leading-snug">
                  {lesson.title}
                </h3>
                <p className="text-xs text-charcoal-muted font-light leading-relaxed mt-2">
                  {lesson.detail}
                </p>
              </div>
            </div>
          ))}
        </div>
      </section>


      {/* =========================================================================
          SECTION F: PERSONAL CONNECTIONS AND REALIZATIONS
          ========================================================================= */}
      <section className="space-y-6">
        <div className="flex items-center space-x-3 border-b border-beige-dark/60 pb-3">
          <div className="w-8 h-8 rounded-lg bg-forest text-ivory flex items-center justify-center font-mono font-bold text-xs">
            F
          </div>
          <div>
            <h2 className="font-serif text-2xl sm:text-3xl font-bold text-forest">
              Personal Connections & Realizations
            </h2>
            <p className="text-xs text-charcoal-muted">Bridging the epic voyage with my life as a fourth-year Computer Science student</p>
          </div>
        </div>

        <div className="rounded-3xl bg-ivory-light border border-beige-dark/80 p-8 sm:p-12 shadow-sm space-y-6 text-charcoal/90 text-base sm:text-lg font-light leading-relaxed">
          {favoriteMasterpieceData.personalConnections.split('\n\n').map((paragraph, idx) => (
            <p key={idx}>
              {paragraph}
            </p>
          ))}

          {/* Editorial Callout on CS & Life */}
          <div className="p-6 rounded-2xl bg-forest text-ivory shadow-book space-y-3">
            <div className="flex items-center space-x-2 text-gold-light text-xs font-semibold uppercase tracking-wider">
              <Code2 className="w-4 h-4" />
              <span>Technology & Human Character</span>
            </div>
            <p className="font-serif italic text-base sm:text-lg text-ivory/95 leading-relaxed">
              “Just as in software engineering, where fixing a complex bug requires patience, breaking problems into modular logic, and refusing to get discouraged by error logs, life requires adapting when things don't go according to plan. Intellect without perseverance is incomplete.”
            </p>
            <span className="block text-xs text-gold-light/90 text-right">— Nathaniel Jr. S. Alcantara</span>
          </div>
        </div>
      </section>


      {/* =========================================================================
          SECTION G: OVERALL APPRECIATION
          ========================================================================= */}
      <section className="space-y-6">
        <div className="flex items-center space-x-3 border-b border-beige-dark/60 pb-3">
          <div className="w-8 h-8 rounded-lg bg-forest text-ivory flex items-center justify-center font-mono font-bold text-xs">
            G
          </div>
          <div>
            <h2 className="font-serif text-2xl sm:text-3xl font-bold text-forest">
              Overall Appreciation
            </h2>
            <p className="text-xs text-charcoal-muted">Enduring relevance to future decisions, career, and relationships</p>
          </div>
        </div>

        <div className="rounded-3xl bg-beige/40 border border-beige-dark/80 p-8 sm:p-10 shadow-xs text-charcoal/90 text-base sm:text-lg font-light leading-relaxed">
          <p>{favoriteMasterpieceData.overallAppreciation}</p>
        </div>
      </section>


      {/* =========================================================================
          SECTION H: CLOSING STATEMENT & EPILOGUE BANNER
          ========================================================================= */}
      <section className="relative rounded-3xl bg-forest text-ivory p-8 sm:p-14 shadow-book-lg text-center overflow-hidden border border-forest-light/40">
        <div className="absolute top-0 right-0 p-8 opacity-10 pointer-events-none">
          <Compass className="w-64 h-64 text-gold" />
        </div>

        <div className="relative z-10 max-w-3xl mx-auto space-y-6">
          <div className="w-14 h-14 rounded-2xl bg-gold/20 text-gold-light mx-auto flex items-center justify-center shadow-inner">
            <Feather className="w-7 h-7" />
          </div>

          <span className="text-xs uppercase tracking-widest text-gold font-bold block">
            Section H • Closing Philosophical Statement
          </span>

          <blockquote className="font-serif text-2xl sm:text-3xl lg:text-4xl font-bold text-ivory leading-snug">
            “{favoriteMasterpieceData.closingStatement}”
          </blockquote>

          <div className="pt-4 border-t border-forest-light/30 flex flex-col sm:flex-row items-center justify-between text-xs text-ivory/70 max-w-lg mx-auto gap-2">
            <span>Student Author: <strong className="text-ivory font-semibold">{studentInfo.name}</strong></span>
            <span>Great Books Digital Portfolio • BSCS</span>
          </div>

          <div className="pt-4">
            <Link
              to="/analyses"
              className="inline-flex items-center space-x-2 px-6 py-3 rounded-full bg-gold text-forest-deep font-semibold text-xs sm:text-sm hover:bg-gold-light transition-all shadow-sm"
            >
              <span>Explore The Seven Literary Analyses</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>

    </div>
  );
}
