import React from 'react';
import { 
  User, 
  GraduationCap, 
  BookOpen, 
  Gamepad2, 
  Music, 
  Headphones,
  Tv, 
  Leaf, 
  Trophy, 
  Sparkles, 
  Layers, 
  Code2, 
  Compass, 
  Camera, 
  HeartHandshake,
  CheckCircle2
} from 'lucide-react';
import { studentInfo } from '../data/portfolioData';
import SectionHeader from '../components/SectionHeader';

const hobbiesList = [
  { name: 'Reading Books', icon: BookOpen, desc: 'Self-improvement, understanding the world, and exploring personal growth when inspired' },
  { name: 'Listening to Music', icon: Headphones, desc: 'Diverse genres, emotive melodies, and soundtracks for inspiration' },
  { name: 'Playing the Guitar', icon: Music, desc: 'Acoustic melodies and creative musical relaxation' },
  { name: 'Watching TV Series', icon: Tv, desc: 'Engaging storytelling and compelling narrative arcs' },
  { name: 'Taking Care of Plants', icon: Leaf, desc: 'Patience, growth, and natural tranquility' },
  { name: 'Playing Video Games', icon: Gamepad2, desc: 'Interactive worlds, game logic, and tactical problem-solving' },
  { name: 'Playing Basketball', icon: Trophy, desc: 'Athletic teamwork, agility, and occasional recreational games' },
];

export default function StudentProfile() {
  return (
    <div className="space-y-16 sm:space-y-24 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
      
      {/* Editorial Page Header */}
      <SectionHeader
        badge="Academic & Personal Identity"
        title="Student Profile"
        subtitle="Meet the student behind the portfolio: bridging the logical rigors of Computer Science with the expansive empathy of classical literature."
      />

      {/* =========================================================================
          PROFILE HERO CARD
          ========================================================================= */}
      <section className="relative rounded-3xl bg-ivory-light border border-beige-dark/80 p-8 sm:p-12 shadow-book overflow-hidden">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
          
          {/* Avatar / Portrait Column */}
          <div className="lg:col-span-4 flex flex-col items-center text-center">
            <div className="relative group">
              {/* Decorative Glow */}
              <div className="absolute -inset-2 rounded-3xl bg-gradient-to-tr from-gold/40 to-sage/40 blur-md group-hover:blur-lg transition-all"></div>
              
              {/* Profile Image / Portrait Container */}
              <div className="relative w-52 sm:w-60 h-72 sm:h-84 rounded-3xl overflow-hidden border-4 border-ivory shadow-book-lg bg-forest-dark flex items-center justify-center text-ivory">
                <img
                  src={studentInfo.profilePhoto}
                  alt={studentInfo.name}
                  className="w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-500"
                  onError={(e) => {
                    // Fallback to stylized SVG monogram if custom photo fails
                    e.target.src = "/images/student-profile.svg";
                  }}
                />
              </div>
            </div>
          </div>

          {/* Details & Academic Credentials Column */}
          <div className="lg:col-span-8 space-y-6">
            <div>
              <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-forest/10 text-forest text-xs font-semibold uppercase tracking-wider mb-2">
                <GraduationCap className="w-3.5 h-3.5" />
                <span>Undergraduate</span>
              </div>
              <h1 className="font-serif text-3xl sm:text-4xl font-bold text-forest">
                {studentInfo.name}
              </h1>
              <p className="text-lg text-gold-dark font-medium mt-1">
                {studentInfo.course}
              </p>
            </div>

            {/* Academic Spec Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
              <div className="p-4 rounded-xl bg-ivory border border-beige-dark/60 shadow-xs">
                <span className="text-[11px] uppercase tracking-wider text-charcoal-muted font-medium block">
                  Academic Year
                </span>
                <span className="text-base font-bold text-forest block mt-1">
                  {studentInfo.year}
                </span>
                <span className="text-[11px] text-sage-dark font-medium block">
                  Graduating Class
                </span>
              </div>

              <div className="p-4 rounded-xl bg-ivory border border-beige-dark/60 shadow-xs">
                <span className="text-[11px] uppercase tracking-wider text-charcoal-muted font-medium block">
                  Course & Section
                </span>
                <span className="text-base font-bold text-forest block mt-1 truncate" title={studentInfo.section}>
                  {studentInfo.section}
                </span>
                <span className="text-[11px] text-sage-dark font-medium block">
                  Great Books Division
                </span>
              </div>
            </div>

            {/* Technology & Humanities Callout */}
            <div className="p-4 rounded-xl bg-sage-faint border border-sage/40 flex items-start space-x-3 text-xs sm:text-sm text-forest leading-relaxed">
              <Code2 className="w-5 h-5 text-forest shrink-0 mt-0.5" />
              <div>
                <strong className="font-semibold block mb-0.5">Balancing Technology & Literature:</strong>
                Computer Science taught me how to solve problems with logic and structure, while reading the Great Books helped me see the human side of life—teaching me empathy, values, and how to understand different perspectives.
              </div>
            </div>

          </div>

        </div>
      </section>


      {/* =========================================================================
          SECTION: ABOUT ME
          ========================================================================= */}
      <section className="space-y-6">
        <div className="flex items-center space-x-3 border-b border-beige-dark/60 pb-4">
          <div className="w-8 h-8 rounded-lg bg-forest text-ivory flex items-center justify-center">
            <User className="w-4 h-4" />
          </div>
          <h2 className="font-serif text-2xl sm:text-3xl font-bold text-forest">
            About Me
          </h2>
        </div>

        <div className="rounded-2xl bg-ivory-light border border-beige-dark/80 p-7 sm:p-10 shadow-sm leading-relaxed text-charcoal/90 text-base sm:text-lg font-light space-y-4">
          {studentInfo.aboutMe.split('\n\n').map((paragraph, index) => (
            <p key={index} className={index === 0 ? "dropcap" : ""}>
              {paragraph}
            </p>
          ))}
        </div>
      </section>


      {/* =========================================================================
          SECTION: INTERESTS AND HOBBIES
          ========================================================================= */}
      <section className="space-y-6">
        <div className="flex items-center space-x-3 border-b border-beige-dark/60 pb-4">
          <div className="w-8 h-8 rounded-lg bg-forest text-ivory flex items-center justify-center">
            <Sparkles className="w-4 h-4" />
          </div>
          <div>
            <h2 className="font-serif text-2xl sm:text-3xl font-bold text-forest">
              My Interests and Hobbies
            </h2>
            <p className="text-xs text-charcoal-muted">Creative expression, recreational balance, and relaxation</p>
          </div>
        </div>

        {/* Narrative Box */}
        <div className="rounded-2xl bg-ivory-light border border-beige-dark/80 p-7 sm:p-8 shadow-sm text-charcoal/90 text-base sm:text-lg font-light leading-relaxed">
          <p>{studentInfo.hobbies}</p>
        </div>

        {/* Interactive Hobbies Visual Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 pt-2">
          {hobbiesList.map((hobby, idx) => {
            const IconComp = hobby.icon;
            return (
              <div 
                key={idx}
                className="p-5 rounded-2xl bg-ivory-light border border-beige-dark/60 hover:border-gold hover:shadow-book transition-all flex items-start space-x-4"
              >
                <div className="w-12 h-12 rounded-xl bg-forest/10 text-forest flex items-center justify-center shrink-0 shadow-xs">
                  <IconComp className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="font-serif text-base font-bold text-forest">
                    {hobby.name}
                  </h3>
                  <p className="text-xs text-charcoal-muted mt-1 leading-snug font-light">
                    {hobby.desc}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </section>


      {/* =========================================================================
          SECTION: READING EXPERIENCES
          ========================================================================= */}
      <section className="space-y-6">
        <div className="flex items-center space-x-3 border-b border-beige-dark/60 pb-4">
          <div className="w-8 h-8 rounded-lg bg-forest text-ivory flex items-center justify-center">
            <BookOpen className="w-4 h-4" />
          </div>
          <div>
            <h2 className="font-serif text-2xl sm:text-3xl font-bold text-forest">
              My Reading Experiences
            </h2>
            <p className="text-xs text-charcoal-muted">Immersive genres, perspectives, and personal reflections</p>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          
          <div className="lg:col-span-8 rounded-2xl bg-ivory-light border border-beige-dark/80 p-7 sm:p-10 shadow-sm text-charcoal/90 text-base sm:text-lg font-light leading-relaxed space-y-4">
            {studentInfo.readingExperiences.split('\n\n').map((paragraph, idx) => (
              <p key={idx}>{paragraph}</p>
            ))}
          </div>

          {/* Genre Feature Cards */}
          <div className="lg:col-span-4 space-y-4">
            <div className="p-4 sm:p-5 rounded-2xl bg-forest text-ivory shadow-book">
              <span className="text-[10px] uppercase font-bold tracking-widest text-gold-light block mb-1">
                Favorite Literary Genres
              </span>
              <h3 className="font-serif text-xl sm:text-2xl font-bold text-ivory">
                Fiction & Drama
              </h3>
              <p className="text-xs text-ivory/80 mt-1.5 font-light leading-relaxed">
                Transporting the mind to multifaceted worlds, testing hypothetical moral dilemmas, and probing authentic human dialogue.
              </p>
            </div>

            <div className="p-4 sm:p-5 rounded-2xl bg-beige/60 border border-beige-dark/80 text-forest shadow-xs">
              <span className="text-[10px] uppercase font-bold tracking-widest text-gold-dark block mb-1">
                Personal Reading Focus
              </span>
              <h3 className="font-serif text-xl sm:text-2xl font-bold text-forest">
                Self-Improvement & The World
              </h3>
              <p className="text-xs text-charcoal-muted mt-1.5 font-light leading-relaxed">
                Reading to improve yourself, gain deeper self-awareness, and better understand the intricate workings of the world around us.
              </p>
            </div>
          </div>

        </div>
      </section>


      {/* =========================================================================
          SECTION: EXPECTATIONS IN GREAT BOOKS
          ========================================================================= */}
      <section className="space-y-6">
        <div className="flex items-center space-x-3 border-b border-beige-dark/60 pb-4">
          <div className="w-8 h-8 rounded-lg bg-forest text-ivory flex items-center justify-center">
            <Compass className="w-4 h-4" />
          </div>
          <div>
            <h2 className="font-serif text-2xl sm:text-3xl font-bold text-forest">
              My Expectations in Great Books
            </h2>
            <p className="text-xs text-charcoal-muted">Curricular goals, critical lenses, and real-life connections</p>
          </div>
        </div>

        <div className="rounded-2xl bg-ivory-light border border-beige-dark/80 p-7 sm:p-10 shadow-sm text-charcoal/90 text-base sm:text-lg font-light leading-relaxed">
          <p>{studentInfo.expectations}</p>

          {/* Expectation Checkpoints */}
          <div className="mt-8 pt-6 border-t border-beige-dark/60 grid grid-cols-1 sm:grid-cols-2 gap-4 text-sm font-normal text-charcoal">
            <div className="flex items-start space-x-3 p-3 rounded-xl bg-ivory border border-beige-dark/40">
              <CheckCircle2 className="w-5 h-5 text-emerald-700 shrink-0 mt-0.5" />
              <span>Deeper appreciation of enduring world literary masterpieces.</span>
            </div>
            <div className="flex items-start space-x-3 p-3 rounded-xl bg-ivory border border-beige-dark/40">
              <CheckCircle2 className="w-5 h-5 text-emerald-700 shrink-0 mt-0.5" />
              <span>Application of diverse critical literary lenses and analytical theories.</span>
            </div>
            <div className="flex items-start space-x-3 p-3 rounded-xl bg-ivory border border-beige-dark/40">
              <CheckCircle2 className="w-5 h-5 text-emerald-700 shrink-0 mt-0.5" />
              <span>Sharpened critical thinking and nuanced textual argumentation.</span>
            </div>
            <div className="flex items-start space-x-3 p-3 rounded-xl bg-ivory border border-beige-dark/40">
              <CheckCircle2 className="w-5 h-5 text-emerald-700 shrink-0 mt-0.5" />
              <span>Connecting literary lessons and moral dilemmas to contemporary life.</span>
            </div>
          </div>
        </div>
      </section>

    </div>
  );
}
