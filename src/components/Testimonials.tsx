import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import { Quote } from 'lucide-react';

const testimonials = [
  {
    name: 'Sarah Chen',
    role: 'VP of Engineering, TechScale Inc.',
    quote:
      'Thouffic transformed our front-end architecture. His deep React expertise and methodical approach to i18n saved us months of development time. The codebase he left behind is a model of clarity and scalability.',
  },
  {
    name: 'Raj Mehta',
    role: 'Senior Technical Recruiter, CodeHire',
    quote:
      'In 15 years of recruiting, rarely have I seen a developer who combines Thouffic\'s technical depth with such strong communication skills. He doesn\'t just write code — he elevates entire teams.',
  },
  {
    name: 'Elena Vasquez',
    role: 'Product Director, GlobalReach',
    quote:
      'Our product launch across 30+ markets wouldn\'t have been possible without Thouffic. He architected our i18n framework from scratch, ensuring every locale felt native. His performance optimizations also cut our load times by 40%.',
  },
];

export default function Testimonials() {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section className="py-16 sm:py-24 md:py-32 bg-neutral-50 dark:bg-neutral-950">
      <div ref={ref} className="max-w-6xl mx-auto px-5 sm:px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="mb-10 sm:mb-16"
        >
          <span className="text-xs font-mono font-medium tracking-wider text-primary-500 uppercase mb-3 block">
            Testimonials
          </span>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-neutral-900 dark:text-neutral-50 tracking-tight mb-3 sm:mb-4">
            What people <span className="text-primary-500">say</span>
          </h2>
          <p className="text-base text-neutral-500 dark:text-neutral-400 max-w-lg">
            Feedback from leaders and recruiters who've seen my work firsthand.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-4 sm:gap-6">
          {testimonials.map((testimonial, i) => (
            <motion.blockquote
              key={testimonial.name}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.2 + i * 0.1 }}
              className="group relative p-5 sm:p-6 rounded-2xl border border-neutral-200/80 dark:border-neutral-700/80 bg-white dark:bg-neutral-800/50 hover:border-primary-200 dark:hover:border-primary-700 hover:shadow-lg hover:shadow-primary-500/5 dark:hover:shadow-primary-500/10 transition-all duration-300"
            >
              <Quote
                size={24}
                className="text-primary-200 mb-4"
              />

              <p className="text-sm text-neutral-600 dark:text-neutral-300 leading-relaxed mb-6">
                "{testimonial.quote}"
              </p>

              <div className="flex items-center gap-3 pt-4 border-t border-neutral-100 dark:border-neutral-700">
                {/* Avatar placeholder */}
                <div className="w-9 h-9 rounded-full bg-gradient-to-br from-primary-400 to-primary-600 flex items-center justify-center text-white text-xs font-semibold">
                  {testimonial.name
                    .split(' ')
                    .map((n) => n[0])
                    .join('')}
                </div>
                <div>
                  <p className="text-sm font-semibold text-neutral-900 dark:text-neutral-100">
                    {testimonial.name}
                  </p>
                  <p className="text-xs text-neutral-500 dark:text-neutral-400">
                    {testimonial.role}
                  </p>
                </div>
              </div>
            </motion.blockquote>
          ))}
        </div>
      </div>
    </section>
  );
}
