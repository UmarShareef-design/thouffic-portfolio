import { motion } from 'framer-motion';
import { ArrowDown, Download } from 'lucide-react';

export default function Hero() {
  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center justify-center overflow-hidden bg-neutral-50 dark:bg-neutral-950"
    >
      {/* Decorative grid */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(59,130,246,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(59,130,246,0.03)_1px,transparent_1px)] dark:bg-[linear-gradient(rgba(59,130,246,0.06)_1px,transparent_1px),linear-gradient(90deg,rgba(59,130,246,0.06)_1px,transparent_1px)] bg-[size:60px_60px]" />

      {/* Decorative floating shapes */}
      <motion.div
        className="absolute top-20 left-[10%] w-48 sm:w-72 h-48 sm:h-72 rounded-full bg-primary-200/20 dark:bg-primary-800/10 blur-3xl"
        animate={{ y: [0, 30, 0], x: [0, 15, 0] }}
        transition={{ duration: 8, repeat: Infinity, ease: 'easeInOut' }}
      />
      <motion.div
        className="absolute bottom-20 right-[10%] w-64 sm:w-96 h-64 sm:h-96 rounded-full bg-primary-100/30 dark:bg-primary-900/15 blur-3xl"
        animate={{ y: [0, -30, 0], x: [0, -15, 0] }}
        transition={{ duration: 10, repeat: Infinity, ease: 'easeInOut' }}
      />

      <div className="relative z-10 max-w-4xl mx-auto px-5 sm:px-6 text-center">
        {/* Profile Image */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.1 }}
          className="mb-6 sm:mb-8"
        >
          <div className="relative inline-block">
            <div className="w-24 h-24 sm:w-32 sm:h-32 md:w-40 md:h-40 rounded-full overflow-hidden ring-4 ring-white dark:ring-neutral-800 shadow-xl shadow-primary-500/10">
              <img
                src="/profile-image.webp"
                alt="Mohammed Thouffic"
                fetchPriority="high"
                loading="eager"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="absolute -bottom-0.5 -right-0.5 w-4 h-4 sm:-bottom-1 sm:-right-1 sm:w-5 sm:h-5 md:w-6 md:h-6 bg-green-400 dark:bg-green-500 rounded-full border-2 border-white dark:border-neutral-800" />
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <span className="inline-block px-3 sm:px-4 py-1.5 mb-4 sm:mb-6 text-[10px] sm:text-xs font-mono font-medium tracking-wider text-primary-600 dark:text-primary-400 bg-primary-50 dark:bg-primary-950 border border-primary-200 dark:border-primary-800 rounded-full uppercase">
            Available for opportunities
          </span>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.35 }}
          className="text-4xl sm:text-5xl md:text-7xl font-bold text-neutral-900 dark:text-neutral-50 tracking-tight leading-[1.1] mb-3 sm:mb-4"
        >
          Mohammed{' '}
          <span className="text-primary-500">Thouffic</span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="text-lg sm:text-xl md:text-2xl text-neutral-500 dark:text-neutral-400 font-light mb-5 sm:mb-8"
        >
          Senior React Developer
        </motion.p>

        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.65 }}
          className="max-w-xl mx-auto text-sm sm:text-base text-neutral-400 dark:text-neutral-500 leading-relaxed mb-6 sm:mb-10"
        >
          Building scalable, high-performance web applications with React.
          Specializing in internationalization across 30+ locales and
          performance optimization.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-4"
        >
          <a
            href="#projects"
            className="group inline-flex items-center justify-center gap-2 w-full sm:w-auto px-6 sm:px-7 py-3 sm:py-3.5 text-sm font-medium text-white bg-neutral-900 dark:bg-primary-600 rounded-lg hover:bg-neutral-800 dark:hover:bg-primary-500 transition-all duration-300 hover:shadow-lg hover:shadow-neutral-900/20 dark:hover:shadow-primary-500/20"
          >
            View Work
            <ArrowDown size={16} className="group-hover:translate-y-0.5 transition-transform" />
          </a>
          <a
            href="/resume.pdf"
            download
            className="group inline-flex items-center justify-center gap-2 w-full sm:w-auto px-6 sm:px-7 py-3 sm:py-3.5 text-sm font-medium text-neutral-700 dark:text-neutral-200 bg-white dark:bg-neutral-800 border border-neutral-200 dark:border-neutral-700 rounded-lg hover:border-neutral-300 dark:hover:border-neutral-600 hover:shadow-md transition-all duration-300"
          >
            <Download size={16} className="text-primary-500" />
            Download Resume
          </a>
        </motion.div>

        {/* Scroll indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.5, duration: 1 }}
          className="hidden sm:flex sm:absolute bottom-10 left-1/2 -translate-x-1/2"
        >
          <motion.div
            animate={{ y: [0, 8, 0] }}
            transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
            className="w-5 h-8 rounded-full border-2 border-neutral-300 dark:border-neutral-600 flex items-start justify-center p-1"
          >
            <div className="w-1 h-1.5 rounded-full bg-neutral-400 dark:bg-neutral-500" />
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
