import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import { ArrowUpRight } from 'lucide-react';

interface IconProps {
  size?: number;
  className?: string;
}

function MailIcon({ size = 18, className = '' }: IconProps) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
      <rect width="20" height="16" x="2" y="4" rx="2" />
      <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
    </svg>
  );
}

function LinkedInIcon({ size = 18, className = '' }: IconProps) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
      <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
      <rect x="2" y="9" width="4" height="12" />
      <circle cx="4" cy="4" r="2" />
    </svg>
  );
}

function GitHubIcon({ size = 18, className = '' }: IconProps) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
      <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22" />
    </svg>
  );
}

type IconComponent = React.FC<IconProps>;

const links: { icon: IconComponent; label: string; value: string; href: string }[] = [
  {
    icon: MailIcon,
    label: 'Email',
    value: 'hithoufi@gmail.com',
    href: 'mailto:hithoufi@gmail.com',
  },
  {
    icon: LinkedInIcon,
    label: 'LinkedIn',
    value: 'linkedin.com/in/mohammed-thouffic-s-41084b213',
    href: 'https://linkedin.com/in/mohammed-thouffic-s-41084b213',
  },
  {
    icon: GitHubIcon,
    label: 'GitHub',
    value: 'github.com/thouffic',
    href: 'https://github.com/thouffic',
  },
];

export default function Contact() {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: '-60px' });

  return (
    <section id="contact" className="relative py-12 sm:py-16 md:py-20 bg-white dark:bg-neutral-900 overflow-hidden">
      {/* Topographic background pattern */}
      <div className="absolute inset-0 topo-pattern pointer-events-none" />
      <div ref={ref} className="relative z-10 max-w-6xl mx-auto px-5 sm:px-6">
        <div className="max-w-2xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
          >
            <span className="text-xs font-mono font-medium tracking-wider text-primary-500 uppercase mb-3 block">
              Contact
            </span>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-neutral-900 dark:text-neutral-50 tracking-tight mb-3 sm:mb-4">
              Let's build something{' '}
              <span className="text-primary-500">great</span>
            </h2>
            <p className="text-sm sm:text-base text-neutral-500 dark:text-neutral-400 leading-[1.7] mb-8 sm:mb-12">
              Whether you're looking for a senior React developer, need help
              architecting a scalable front-end, or want to discuss an
              opportunity — I'd love to hear from you.
            </p>
          </motion.div>

          <div className="space-y-4">
            {links.map((link, i) => (
              <motion.a
                key={link.label}
                href={link.href}
                target={link.href.startsWith('http') ? '_blank' : undefined}
                rel={link.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: 0.3 + i * 0.1 }}
                className="group flex items-center gap-3 sm:gap-4 p-3.5 sm:p-4 rounded-xl border border-neutral-200/80 dark:border-neutral-700/80 bg-neutral-50/30 dark:bg-neutral-800/30 hover:border-primary-200 dark:hover:border-primary-700 hover:bg-primary-50/30 dark:hover:bg-primary-950/30 transition-all duration-300 text-left"
              >
                <div className="p-2.5 rounded-xl bg-neutral-100 dark:bg-neutral-700 group-hover:bg-primary-100 dark:group-hover:bg-primary-900/50 transition-colors">
                  <link.icon
                    size={18}
                    className="text-neutral-500 dark:text-neutral-400 group-hover:text-primary-600 dark:group-hover:text-primary-400 transition-colors"
                  />
                </div>
                <div className="flex-1 min-w-0">
                  <p className="text-xs text-neutral-400 dark:text-neutral-500 font-mono mb-0.5">
                    {link.label}
                  </p>
                  <p className="text-sm font-medium text-neutral-700 dark:text-neutral-200 group-hover:text-primary-600 dark:group-hover:text-primary-400 transition-colors truncate">
                    {link.value}
                  </p>
                </div>
                <ArrowUpRight
                  size={16}
                  className="text-neutral-300 dark:text-neutral-600 group-hover:text-primary-400 transition-colors"
                />
              </motion.a>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
