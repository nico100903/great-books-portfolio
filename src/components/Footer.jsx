import React from 'react';
import { Link } from 'react-router-dom';
import { Feather, ArrowUp, BookOpen, Heart } from 'lucide-react';
import { studentInfo, literaryWorks } from '../data/portfolioData';

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-forest-dark text-ivory/90 border-t border-forest-light/30 pt-16 pb-12 mt-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Main Footer Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 pb-12 border-b border-forest-light/20">
          
          {/* Col 1: Identity & Course Info */}
          <div className="space-y-4">
            <div className="flex items-center space-x-3">
              <div className="w-9 h-9 rounded-full bg-gold text-forest-deep flex items-center justify-center font-serif text-lg font-bold">
                LJ
              </div>
              <div>
                <span className="font-serif text-lg font-bold text-ivory block leading-tight">
                  {studentInfo.websiteTitle}
                </span>
                <span className="text-xs text-sage uppercase tracking-wider block">
                  {studentInfo.websiteSubtitle}
                </span>
              </div>
            </div>
            
            <p className="text-sm text-ivory/70 leading-relaxed font-light">
              A digital humanities portfolio documenting the exploration of world literature, classical epics, critical lenses, and timeless human wisdom.
            </p>

            <div className="pt-2 text-xs text-ivory/60 space-y-1">
              <p><strong className="text-ivory/90">Student:</strong> {studentInfo.name}</p>
              <p><strong className="text-ivory/90">Program:</strong> {studentInfo.course}</p>
              <p><strong className="text-ivory/90">Year & Section:</strong> {studentInfo.year} • {studentInfo.section}</p>
            </div>
          </div>

          {/* Col 2: Portfolio Pages */}
          <div>
            <h4 className="font-serif text-base font-semibold text-gold-light mb-4 flex items-center space-x-2">
              <span>Navigation</span>
            </h4>
            <ul className="space-y-2.5 text-sm">
              <li>
                <Link to="/" className="text-ivory/70 hover:text-gold transition-colors">
                  Home (Overview)
                </Link>
              </li>
              <li>
                <Link to="/profile" className="text-ivory/70 hover:text-gold transition-colors">
                  Student Profile & Background
                </Link>
              </li>
              <li>
                <Link to="/analyses" className="text-ivory/70 hover:text-gold transition-colors">
                  Literary Analyses (7 Works)
                </Link>
              </li>
              <li>
                <Link to="/favorite" className="text-ivory/70 hover:text-gold transition-colors">
                  Favorite Literary Masterpiece
                </Link>
              </li>
              <li>
                <Link to="/summary" className="text-ivory/70 hover:text-gold transition-colors">
                  Summary of Learning
                </Link>
              </li>
              <li>
                <Link to="/reflection" className="text-ivory/70 hover:text-gold transition-colors">
                  Personal Reflection
                </Link>
              </li>
            </ul>
          </div>

          {/* Col 3: The 7 Literary Works Quick Links */}
          <div>
            <h4 className="font-serif text-base font-semibold text-gold-light mb-4 flex items-center space-x-2">
              <span>The Seven Works</span>
            </h4>
            <ul className="space-y-2 text-xs">
              {literaryWorks.map((work) => (
                <li key={work.id}>
                  <Link 
                    to={`/analyses/${work.id}`} 
                    className="text-ivory/70 hover:text-gold transition-colors flex items-center space-x-2"
                  >
                    <span className="font-mono text-gold-amber text-[10px]">{work.number}.</span>
                    <span className="truncate">{work.title}</span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Col 4: Literary Epigraph & Academic Note */}
          <div className="space-y-4">
            <h4 className="font-serif text-base font-semibold text-gold-light mb-4">
              Literary Thought
            </h4>
            <blockquote className="text-xs font-serif italic text-ivory/80 border-l-2 border-gold/60 pl-3 leading-relaxed">
              “Literature is the orchestration of human experience into enduring melody. Through it, we inhabit minds and centuries beyond our own.”
            </blockquote>
            
            <div className="bg-forest-deep/60 p-3.5 rounded-xl border border-forest-light/20 text-[11px] text-ivory/70">
              <span className="text-gold-light font-semibold block mb-1">Academic Submission</span>
              Submitted in partial fulfillment of the academic requirements for the course <span className="text-ivory">{studentInfo.section}</span>.
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between text-xs text-ivory/50 space-y-4 sm:space-y-0">
          <div>
            © {new Date().getFullYear()} {studentInfo.name}. Great Books Digital Portfolio. All rights reserved.
          </div>

          <div className="flex items-center space-x-6">
            <span className="flex items-center space-x-1 text-ivory/60">
              <span>Crafted for Great Books</span>
              <Heart className="w-3.5 h-3.5 text-gold inline" />
            </span>

            <button
              onClick={scrollToTop}
              className="inline-flex items-center space-x-1.5 text-gold-light hover:text-ivory transition-colors"
              aria-label="Back to top"
            >
              <span>Back to Top</span>
              <ArrowUp className="w-4 h-4" />
            </button>
          </div>
        </div>

      </div>
    </footer>
  );
}
