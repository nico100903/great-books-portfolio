import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { 
  BookOpen, 
  ArrowRight, 
  Sparkles, 
  Clock, 
  MapPin, 
  Layers, 
  Feather, 
  Scroll,
  Search
} from 'lucide-react';
import { literaryWorks } from '../data/portfolioData';
import SectionHeader from '../components/SectionHeader';

export default function LiteraryAnalyses() {
  const [filterRegion, setFilterRegion] = useState('all');
  const [searchQuery, setSearchQuery] = useState('');

  const filteredWorks = literaryWorks.filter((work) => {
    const matchesFilter = filterRegion === 'all' || 
      (filterRegion === 'ancient' && (work.id === 'job-38' || work.id === 'panchatantra' || work.id === 'mahabharata')) ||
      (filterRegion === 'greek' && (work.id === 'the-iliad' || work.id === 'the-odyssey')) ||
      (filterRegion === 'medieval-east' && (work.id === 'the-song-of-roland' || work.id === 'the-tale-of-genji'));

    const matchesSearch = work.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      work.author.toLowerCase().includes(searchQuery.toLowerCase()) ||
      work.genre.toLowerCase().includes(searchQuery.toLowerCase());

    return matchesFilter && matchesSearch;
  });

  return (
    <div className="space-y-12 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
      
      {/* Section Header */}
      <SectionHeader
        badge="Core Course Curriculum"
        title="Literary Analyses Collection"
        subtitle="In-depth textual explorations of seven foundational masterpieces—investigating historical contexts, narrative structures, thematic tensions, and critical literary lenses."
      />

      {/* Filter and Search Bar */}
      <div className="flex flex-col sm:flex-row items-center justify-between gap-4 p-4 rounded-2xl bg-ivory-light border border-beige-dark/70 shadow-xs">
        
        {/* Category Pill Filters */}
        <div className="flex flex-wrap items-center gap-2">
          <button
            onClick={() => setFilterRegion('all')}
            className={`px-4 py-2 rounded-xl text-xs font-semibold transition-all ${
              filterRegion === 'all'
                ? 'bg-forest text-ivory shadow-sm'
                : 'bg-beige/50 text-charcoal hover:bg-beige'
            }`}
          >
            All Works (7)
          </button>

          <button
            onClick={() => setFilterRegion('ancient')}
            className={`px-4 py-2 rounded-xl text-xs font-semibold transition-all ${
              filterRegion === 'ancient'
                ? 'bg-forest text-ivory shadow-sm'
                : 'bg-beige/50 text-charcoal hover:bg-beige'
            }`}
          >
            Biblical & Indian (3)
          </button>

          <button
            onClick={() => setFilterRegion('greek')}
            className={`px-4 py-2 rounded-xl text-xs font-semibold transition-all ${
              filterRegion === 'greek'
                ? 'bg-forest text-ivory shadow-sm'
                : 'bg-beige/50 text-charcoal hover:bg-beige'
            }`}
          >
            Homeric Epics (2)
          </button>

          <button
            onClick={() => setFilterRegion('medieval-east')}
            className={`px-4 py-2 rounded-xl text-xs font-semibold transition-all ${
              filterRegion === 'medieval-east'
                ? 'bg-forest text-ivory shadow-sm'
                : 'bg-beige/50 text-charcoal hover:bg-beige'
            }`}
          >
            Medieval & Japanese (2)
          </button>
        </div>

        {/* Quick Search */}
        <div className="relative w-full sm:w-64">
          <Search className="w-4 h-4 text-charcoal-muted absolute left-3 top-1/2 -translate-y-1/2 pointer-events-none" />
          <input
            type="text"
            placeholder="Search title, author, genre..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-full pl-9 pr-4 py-2 rounded-xl bg-ivory border border-beige-dark/60 text-xs text-charcoal focus:outline-none focus:border-gold transition-colors"
          />
        </div>

      </div>

      {/* =========================================================================
          THE SEVEN MASTERPIECES GRID
          ========================================================================= */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {filteredWorks.map((work) => (
          <article
            key={work.id}
            className="group relative rounded-3xl bg-ivory-light border border-beige-dark/80 hover:border-gold hover:shadow-book-lg transition-all duration-300 flex flex-col justify-between overflow-hidden"
          >
            {/* Top Cover Image */}
            <div className="relative h-56 sm:h-60 overflow-hidden bg-forest-dark">
              <img
                src={work.coverImage}
                alt={work.title}
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-forest-deep via-forest/20 to-transparent"></div>

              {/* Number Badge */}
              <div className="absolute top-4 left-4 bg-ivory/95 backdrop-blur-md px-3 py-1 rounded-lg shadow-sm border border-beige-dark/60">
                <span className="font-mono text-xs font-bold text-forest">
                  {work.number}
                </span>
              </div>

              {/* Region & Period Badges */}
              <div className="absolute bottom-4 left-4 right-4 flex items-center justify-between text-xs text-ivory font-light">
                <span className="flex items-center space-x-1 bg-forest-deep/80 backdrop-blur-xs px-2.5 py-1 rounded-md border border-forest-light/30">
                  <MapPin className="w-3 h-3 text-gold-light" />
                  <span className="truncate max-w-[140px]">{work.region}</span>
                </span>
                <span className="bg-forest-deep/80 backdrop-blur-xs px-2.5 py-1 rounded-md border border-forest-light/30 text-[11px]">
                  {work.period}
                </span>
              </div>
            </div>

            {/* Card Body */}
            <div className="p-6 sm:p-7 flex-1 flex flex-col justify-between space-y-4">
              <div>
                <span className="text-[11px] uppercase tracking-wider font-semibold text-gold-dark block mb-1">
                  {work.genre.split(',')[0]}
                </span>
                
                <h3 className="font-serif text-xl sm:text-2xl font-bold text-forest group-hover:text-forest-light transition-colors leading-snug">
                  {work.title}
                </h3>

                <p className="text-xs text-charcoal font-medium mt-1">
                  {work.author}
                </p>

                <p className="text-xs text-charcoal-muted mt-0.5 italic">
                  {work.sourceInfo}
                </p>

                {/* Brief Excerpt */}
                <p className="text-xs sm:text-sm text-charcoal-muted mt-3 line-clamp-3 font-light leading-relaxed">
                  {work.storyOverview}
                </p>
              </div>

              {/* Themes Mini Badges */}
              <div className="pt-2">
                <div className="flex flex-wrap gap-1.5">
                  {work.majorThemes.slice(0, 2).map((t, i) => (
                    <span 
                      key={i} 
                      className="px-2 py-0.5 rounded-md bg-beige/60 text-[10px] text-charcoal-light font-medium"
                    >
                      {t.title}
                    </span>
                  ))}
                  {work.majorThemes.length > 2 && (
                    <span className="px-2 py-0.5 rounded-md bg-ivory text-[10px] text-charcoal-muted border border-beige-dark/50">
                      +{work.majorThemes.length - 2} more
                    </span>
                  )}
                </div>
              </div>

              {/* Bottom Action Button */}
              <div className="pt-4 border-t border-beige-dark/50 flex items-center justify-between">
                <span className="text-xs text-charcoal-muted">
                  Includes Academic Placeholders
                </span>

                <Link
                  to={`/analyses/${work.id}`}
                  className="inline-flex items-center space-x-1.5 text-xs font-semibold text-forest group-hover:text-gold-dark transition-colors bg-ivory px-3.5 py-2 rounded-xl border border-beige-dark/60 shadow-xs"
                >
                  <span>Explore Work</span>
                  <ArrowRight className="w-3.5 h-3.5 transform group-hover:translate-x-1 transition-transform" />
                </Link>
              </div>

            </div>
          </article>
        ))}
      </div>

      {/* Curriculum Note */}
      <div className="rounded-2xl bg-beige/40 border border-beige-dark/60 p-6 text-center max-w-2xl mx-auto">
        <p className="text-xs text-charcoal-muted leading-relaxed">
          <strong className="text-forest font-semibold">Curriculum Scope:</strong> This collection strictly encompasses the seven masterpieces explored in the Great Books course. Each work includes complete literary overviews and designated assignment placeholders for student analysis.
        </p>
      </div>

    </div>
  );
}
