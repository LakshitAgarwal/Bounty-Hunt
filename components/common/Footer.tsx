import { Github, Linkedin, Twitter, Mail } from "lucide-react";

export const Footer = () => {
  return (
    <footer className="w-full border-t border-white/10 bg-black/50 backdrop-blur-sm py-12 mt-16">
      <div className="max-w-6xl mx-auto px-4">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          {/* Company Info */}
          <div className="col-span-1 md:col-span-2">
            <h3 className="text-xl font-bold text-white mb-4">Bounty Hunt</h3>
            <p className="text-white/70 text-sm leading-relaxed max-w-md">
              The platform for discovering and completing paid open-source
              bounties. Connect with projects, build your reputation, and earn
              while contributing.
            </p>
          </div>

          {/* Browse Bounties Button */}
          <div className="col-span-1 md:col-span-2 flex flex-col items-center md:items-start">
            <h4 className="text-white font-semibold mb-4 text-center md:text-left">
              Ready to Start?
            </h4>
            <a
              href="#browse"
              className="inline-flex items-center gap-2 rounded-full bg-white/10 border border-white/20 px-6 py-3 text-base font-medium text-white hover:bg-white/20 transition-colors hover:scale-105 transform duration-200"
            >
              Browse Bounties
            </a>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="flex flex-col md:flex-row justify-between items-center gap-4 pt-8 border-t border-white/10">
          <div className="text-sm text-white/60">
            &copy; {new Date().getFullYear()} Bounty Hunt &mdash; All rights
            reserved.
          </div>

          {/* Social Links */}
          <div className="flex gap-4">
            <a
              href="https://github.com/LakshitAgarwal"
              target="_blank"
              rel="noopener noreferrer"
              className="text-white/60 hover:text-white transition-colors p-2 rounded-lg hover:bg-white/10"
              aria-label="GitHub"
            >
              <Github className="h-5 w-5" />
            </a>
            <a
              href="https://www.linkedin.com/in/lakshit-agarwal-6082b9216/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-white/60 hover:text-white transition-colors p-2 rounded-lg hover:bg-white/10"
              aria-label="LinkedIn"
            >
              <Linkedin className="h-5 w-5" />
            </a>
            <a
              href="https://x.com/lakshitagarwal7"
              target="_blank"
              rel="noopener noreferrer"
              className="text-white/60 hover:text-white transition-colors p-2 rounded-lg hover:bg-white/10"
              aria-label="Twitter"
            >
              <Twitter className="h-5 w-5" />
            </a>
            <a
              href="mailto:lakshit7811@gmail.com"
              className="text-white/60 hover:text-white transition-colors p-2 rounded-lg hover:bg-white/10"
              aria-label="Email"
            >
              <Mail className="h-5 w-5" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};
