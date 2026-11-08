import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { BookOpen, User, Sparkles, GraduationCap, Compass, Menu, X, Feather } from 'lucide-react';
import { studentInfo } from '../data/portfolioData';

const navItems = [
  { name: 'Home', path: '/', icon: Feather },
  { name: 'Student Profile', path: '/profile', icon: User },
  { name: 'Literary Analyses', path: '/analyses', icon: BookOpen },
  { name: 'Favorite Masterpiece', path: '/favorite', icon: Sparkles },
  { name: 'Summary of Learning', path: '/summary', icon: GraduationCap },
  { name: 'Personal Reflection', path: '/reflection', icon: Compass },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close mobile menu on page transition
  useEffect(() => {
    setIsOpen(false);
  }, [location.pathname]);

  return (
    <header 
      className={`sticky top-0 z-50 transition-all duration-300 ${
        scrolled 
          ? 'bg-ivory/95 backdrop-blur-md shadow-sm border-b border-beige-dark/50 py-3' 
          : 'bg-ivory/80 backdrop-blur-sm border-b border-beige/40 py-4'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          
          {/* Logo & Identity */}
          <Link to="/" className="group flex items-center space-x-3 text-left">
            <div className="w-10 h-10 rounded-full bg-forest text-ivory flex items-center justify-center font-serif text-lg font-bold shadow-inner group-hover:bg-forest-light transition-colors">
              LJ
            </div>
            <div>
              <span className="block font-serif text-lg sm:text-xl font-bold tracking-tight text-forest group-hover:text-forest-light transition-colors">
                {studentInfo.websiteTitle}
              </span>
              <span className="block text-[11px] font-sans uppercase tracking-widest text-charcoal-muted">
                {studentInfo.websiteSubtitle}
              </span>
            </div>
          </Link>

          {/* Desktop Navigation Links */}
          <nav className="hidden lg:flex items-center space-x-1">
            {navItems.map((item) => {
              const isActive = location.pathname === item.path || 
                (item.path === '/analyses' && location.pathname.startsWith('/analyses/'));
              
              return (
                <Link
                  key={item.path}
                  to={item.path}
                  className={`px-3.5 py-2 text-sm font-medium rounded-full transition-all duration-200 flex items-center space-x-1.5 ${
                    isActive
                      ? 'bg-forest text-ivory shadow-sm'
                      : 'text-charcoal hover:text-forest hover:bg-beige/50'
                  }`}
                >
                  <item.icon className={`w-3.5 h-3.5 ${isActive ? 'text-gold-light' : 'text-charcoal-muted'}`} />
                  <span>{item.name}</span>
                </Link>
              );
            })}
          </nav>

          {/* Quick Academic Pill */}
          <div className="hidden xl:flex items-center pl-4 border-l border-beige-dark/40">
            <div className="text-right">
              <span className="block text-xs font-semibold text-forest leading-none">
                {studentInfo.name}
              </span>
              <span className="block text-[10px] text-charcoal-muted mt-0.5">
                {studentInfo.courseShort} • {studentInfo.year}
              </span>
            </div>
          </div>

          {/* Mobile Menu Hamburger Button */}
          <div className="flex lg:hidden items-center">
            <button
              onClick={() => setIsOpen(!isOpen)}
              type="button"
              className="p-2 rounded-lg text-forest hover:bg-beige/60 transition-colors focus:outline-none"
              aria-label="Toggle Navigation Menu"
            >
              {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer Menu */}
      {isOpen && (
        <div className="lg:hidden fixed inset-x-0 top-full bg-ivory-light border-b border-beige-dark shadow-xl animate-fadeIn">
          <div className="px-4 pt-3 pb-6 space-y-1.5 max-w-lg mx-auto">
            {navItems.map((item) => {
              const isActive = location.pathname === item.path ||
                (item.path === '/analyses' && location.pathname.startsWith('/analyses/'));

              return (
                <Link
                  key={item.path}
                  to={item.path}
                  className={`flex items-center space-x-3 px-4 py-3 rounded-xl text-base font-medium transition-all ${
                    isActive
                      ? 'bg-forest text-ivory shadow-sm'
                      : 'text-charcoal hover:bg-beige/60'
                  }`}
                >
                  <item.icon className={`w-5 h-5 ${isActive ? 'text-gold-light' : 'text-charcoal-muted'}`} />
                  <span>{item.name}</span>
                </Link>
              );
            })}

            {/* Mobile Student Credential Footer */}
            <div className="pt-4 mt-3 border-t border-beige-dark/40 px-2 flex items-center justify-between text-xs text-charcoal-muted">
              <div>
                <p className="font-semibold text-forest">{studentInfo.name}</p>
                <p>{studentInfo.course}</p>
              </div>
              <span className="px-2.5 py-1 rounded-full bg-beige text-charcoal-light text-[11px] font-medium">
                {studentInfo.section}
              </span>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
