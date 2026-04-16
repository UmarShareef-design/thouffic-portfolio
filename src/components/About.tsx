import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { Code2, Globe, Zap, Users } from 'lucide-react';

const highlights = [
  {
    icon: Code2,
    label: 'React Architecture',
    description: 'Component-driven design with scalable patterns',
  },
  {
    icon: Globe,
    label: '30+ Locales',
    description: 'Worked along with Agencies for foreign language translations',
  },
  {
    icon: Zap,
    label: 'Performance',
    description: 'Optimized for speed and user experience',
  },
  {
    icon: Users,
    label: 'Leadership',
    description: 'Mentoring teams and driving technical vision',
  },
];

export default function About() {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: '-60px' });

  return (
    <section id="about" className="relative py-12 sm:py-16 md:py-20 bg-white dark:bg-neutral-900 overflow-hidden">
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
            About
          </span>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-neutral-900 dark:text-neutral-50 tracking-tight mb-4 sm:mb-6">
            Crafting interfaces that{' '}
            <span className="text-primary-500">scale</span>
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8 sm:gap-12 md:gap-16 items-start">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <p className="text-sm sm:text-base text-neutral-600 dark:text-neutral-300 leading-[1.7] mb-4 sm:mb-5">
              I'm <strong className="text-neutral-900 dark:text-neutral-100 font-semibold">Mohammed Thouffic</strong>, a senior
              front-end developer with deep expertise in the React ecosystem. I specialize in building
              large-scale, maintainable web applications that serve millions of users.
            </p>
            <p className="text-sm sm:text-base text-neutral-600 dark:text-neutral-300 leading-[1.7] mb-4 sm:mb-5">
              My work centers on architecting React applications that are not just functional — but
              scalable, performant, and accessible. From designing component libraries and state
              management strategies to implementing internationalization across{' '}
              <strong className="text-neutral-900 dark:text-neutral-100 font-semibold">30+ locales</strong>, I bring a
              comprehensive approach to front-end development.
            </p>
            <p className="text-sm sm:text-base text-neutral-600 dark:text-neutral-300 leading-[1.7]">
              Beyond code, I'm passionate about mentoring developers, establishing engineering best
              practices, and bridging the gap between technical execution and product vision. I believe
              great software is built at the intersection of craft and collaboration.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="grid grid-cols-2 gap-3 sm:gap-4"
          >
            {highlights.map((item, i) => (
              <motion.div
                key={item.label}
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: 0.5 + i * 0.1 }}
                className="group p-4 sm:p-5 rounded-xl border border-neutral-100 dark:border-neutral-700 bg-neutral-50/50 dark:bg-neutral-800/50 hover:border-neutral-200 dark:hover:border-neutral-600 transition-colors duration-300"
              >
                <item.icon
                  size={22}
                  className="text-neutral-400 dark:text-neutral-500 group-hover:text-neutral-500 dark:group-hover:text-neutral-300 transition-colors mb-3"
                />
                <h3 className="text-xs sm:text-sm font-semibold text-neutral-900 dark:text-neutral-100 mb-1">
                  {item.label}
                </h3>
                <p className="text-xs text-neutral-500 dark:text-neutral-400 leading-relaxed">
                  {item.description}
                </p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
