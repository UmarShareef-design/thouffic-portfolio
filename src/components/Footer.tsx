import { Heart } from 'lucide-react';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="py-6 sm:py-8 bg-neutral-900 dark:bg-neutral-950 text-neutral-400">
      <div className="max-w-6xl mx-auto px-5 sm:px-6">
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-1.5 text-xs">
            <span>© {currentYear} Mohammed Thouffic</span>
            <span className="text-neutral-600 dark:text-neutral-700">·</span>
            <span className="flex items-center gap-1">
              Built with <Heart size={10} className="text-red-400 fill-red-400" /> and React
            </span>
          </div>

          <div className="flex items-center gap-4 sm:gap-6">
            <a
              href="mailto:thouffic@example.com"
              className="text-xs text-neutral-500 hover:text-neutral-300 transition-colors"
            >
              Email
            </a>
            <a
              href="https://linkedin.com/in/thouffic"
              target="_blank"
              rel="noopener noreferrer"
              className="text-xs text-neutral-500 hover:text-neutral-300 transition-colors"
            >
              LinkedIn
            </a>
            <a
              href="https://github.com/thouffic"
              target="_blank"
              rel="noopener noreferrer"
              className="text-xs text-neutral-500 hover:text-neutral-300 transition-colors"
            >
              GitHub
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
