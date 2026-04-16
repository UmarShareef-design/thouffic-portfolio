import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import { Clock, ExternalLink } from 'lucide-react';

const projects = [
  {
    title: 'E-Commerce Platform',
    description:
      'A fully internationalized e-commerce experience serving 30+ locales with dynamic pricing, locale-aware formatting, and SSR-driven performance.',
    stack: ['React', 'TypeScript', 'Next.js', 'i18next', 'Redux'],
    metrics: '30+ Locales • 99 Lighthouse • < 2s LCP',
  },
  {
    title: 'Design System Library',
    description:
      'A composable component library built for scale — featuring accessibility-first primitives, theming support, and comprehensive Storybook docs.',
    stack: ['React', 'TypeScript', 'Storybook', 'Tailwind CSS', 'Radix UI'],
    metrics: '50+ Components • 100% A11y • Tree-shakeable',
  },
  {
    title: 'Real-Time Dashboard',
    description:
      'A high-frequency data dashboard with live updates, virtualized tables, and optimized rendering for thousands of data points.',
    stack: ['React', 'TypeScript', 'Zustand', 'D3.js', 'WebSocket'],
    metrics: '10K+ Rows • 60fps Renders • Real-time Sync',
  },
  {
    title: 'Developer Portfolio Builder',
    description:
      'A CLI-powered portfolio generator that creates performant, SEO-optimized portfolio sites from structured data — deployed to the edge.',
    stack: ['React', 'Astro', 'MDX', 'Vite', 'Edge Functions'],
    metrics: '< 1s TTFB • 0 JS by Default • Auto SEO',
  },
];

export default function Projects() {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: '-60px' });

  return (
    <section id="projects" className="relative py-12 sm:py-16 md:py-20 bg-neutral-50 dark:bg-neutral-950 overflow-hidden">
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
            Projects
          </span>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-neutral-900 dark:text-neutral-50 tracking-tight mb-3 sm:mb-4">
            Featured <span className="text-primary-500">work</span>
          </h2>
          <p className="text-sm sm:text-base text-neutral-500 dark:text-neutral-400 max-w-lg leading-[1.7]">
            A selection of projects that showcase my approach to building scalable,
            performant React applications.
          </p>
        </motion.div>

        <div className="grid sm:grid-cols-2 gap-6">
          {projects.map((project, i) => (
            <motion.article
              key={project.title}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.2 + i * 0.1 }}
              className="group relative p-5 sm:p-6 rounded-2xl border border-neutral-200/80 dark:border-neutral-700/80 bg-white dark:bg-neutral-800/50 hover:border-primary-200 dark:hover:border-primary-700 hover:shadow-lg hover:shadow-primary-500/5 dark:hover:shadow-primary-500/10 transition-all duration-300"
            >
              {/* Coming soon badge */}
              <div className="flex items-center gap-2 mb-4">
                <span className="inline-flex items-center gap-1.5 px-3 py-1 text-xs font-mono font-medium text-neutral-500 dark:text-neutral-400 bg-neutral-100 dark:bg-neutral-700 rounded-full">
                  <Clock size={12} />
                  Coming Soon
                </span>
              </div>

              <h3 className="text-lg font-semibold text-neutral-900 dark:text-neutral-100 mb-2 group-hover:text-primary-600 dark:group-hover:text-primary-400 transition-colors">
                {project.title}
              </h3>

              <p className="text-sm text-neutral-500 dark:text-neutral-400 leading-[1.7] mb-5">
                {project.description}
              </p>

              {/* Tech stack */}
              <div className="flex flex-wrap gap-2 mb-5">
                {project.stack.map((tech) => (
                  <span
                    key={tech}
                    className="px-2.5 py-1 text-xs font-mono font-medium text-primary-600 dark:text-primary-400 bg-primary-50 dark:bg-primary-950/50 rounded-md border border-primary-100 dark:border-primary-900"
                  >
                    {tech}
                  </span>
                ))}
              </div>

              {/* Metrics */}
              <div className="pt-4 border-t border-neutral-100 dark:border-neutral-700">
                <p className="text-xs font-mono text-neutral-400 dark:text-neutral-500 tracking-wide">
                  {project.metrics}
                </p>
              </div>

              {/* Hover arrow */}
              <div className="absolute top-6 right-6 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <ExternalLink size={16} className="text-primary-400" />
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
