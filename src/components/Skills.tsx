import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import {
  Atom,
  Braces,
  FileType2,
  Layers,
  Gauge,
  Users,
} from 'lucide-react';

const skills = [
  {
    icon: Atom,
    name: 'React',
    description:
      'Deep expertise in React architecture, hooks, concurrent features, and the full ecosystem.',
  },
  {
    icon: Braces,
    name: 'JavaScript',
    description:
      'Advanced ES6+ patterns, async programming, closures, and modern JS fundamentals.',
  },
  {
    icon: FileType2,
    name: 'TypeScript',
    description:
      'Strong typing, generics, discriminated unions, and type-safe API design.',
  },
  {
    icon: Layers,
    name: 'State Management',
    description:
      'Redux, Zustand, React Query, Context API — choosing the right tool for the job.',
  },
  {
    icon: Gauge,
    name: 'Performance Optimization',
    description:
      'Code splitting, lazy loading, memoization, Core Web Vitals, and rendering optimization.',
  },
  {
    icon: Users,
    name: 'Leadership',
    description:
      'Technical mentorship, architecture decisions, code review culture, and team growth.',
  },
];

export default function Skills() {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: '-60px' });

  return (
    <section id="skills" className="relative py-12 sm:py-16 md:py-20 bg-white dark:bg-neutral-900 overflow-hidden">
      {/* Dot grid background */}
      <div className="absolute inset-0 dot-grid" aria-hidden="true" />
      <div ref={ref} className="relative z-10 max-w-6xl mx-auto px-5 sm:px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="mb-8 sm:mb-10"
        >
          <span className="text-xs font-mono font-medium tracking-wider text-primary-500 uppercase mb-3 block">
            Skills
          </span>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-neutral-900 dark:text-neutral-50 tracking-tight mb-3 sm:mb-4">
            Technical <span className="text-primary-500">expertise</span>
          </h2>
          <p className="text-sm sm:text-base text-neutral-500 dark:text-neutral-400 max-w-lg leading-[1.7]">
            The core competencies I bring to every project — from writing
            performant code to leading high-impact teams.
          </p>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {skills.map((skill, i) => (
            <motion.div
              key={skill.name}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.15 + i * 0.08 }}
              className="group p-4 sm:p-6 rounded-2xl border border-neutral-100 dark:border-neutral-700 bg-neutral-50/30 dark:bg-neutral-800/30 hover:border-neutral-200 dark:hover:border-neutral-600 transition-colors duration-300"
            >
              <div className="flex items-start gap-4 mb-4">
                <div className="p-2.5 rounded-xl bg-neutral-100 dark:bg-neutral-700 transition-colors">
                  <skill.icon
                    size={20}
                    className="text-neutral-500 dark:text-neutral-400 group-hover:text-neutral-600 dark:group-hover:text-neutral-300 transition-colors"
                  />
                </div>
                <div className="flex-1 min-w-0">
                  <h3 className="text-sm font-semibold text-neutral-900 dark:text-neutral-100 mb-0.5">
                    {skill.name}
                  </h3>
                </div>
              </div>

              <p className="text-xs text-neutral-500 dark:text-neutral-400 leading-[1.7]">
                {skill.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
