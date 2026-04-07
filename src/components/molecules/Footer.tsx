/**
 * @meeting {
 *   "component": "Footer",
 *   "skill_ref": "Bytecode-003, Bytecode-v2",
 *   "responsive_strategy": "Mobile-First",
 *   "breakpoints_used": ["md", "lg"],
 *   "layout_type": "Grid"
 * }
 */
import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Mail, MapPin, Clock, Building, Github, Linkedin, Twitter } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="w-full bg-muted/30 backdrop-blur-2xl text-foreground relative overflow-hidden border-t border-border/50">
      
      <div className="max-w-7xl mx-auto px-4 py-16 relative z-10 font-body">
        
        {/* Top Content (3-Column Grid) */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12 lg:gap-8 mb-16">
          
          {/* Column 1: Identity */}
          <div className="flex flex-col items-center md:items-start text-center md:text-left gap-6">
            <div className="flex items-center gap-4">
              <div className="w-14 h-14 rounded-full overflow-hidden relative border border-border bg-background shadow-sm">
                <Image src="/assets/r-home-landing.jpg" alt="DJOUMESSI Ronsard Carnegie" fill sizes="56px" className="object-cover" />
              </div>
              <h3 className="font-heading text-xl font-bold text-foreground tracking-wide">DJOUMESSI R. Carnegie</h3>
            </div>
            
            <p className="text-muted-foreground leading-relaxed max-w-sm">
              Transforming digital visions into reality with innovative and custom-made solutions. Expertise in building AI models, beautiful Frontend, and scalable software architecture.
            </p>
            
            <div className="flex items-center gap-4 pt-2">
              <a href="https://github.com/RonsardCarnegie" target="_blank" rel="noopener noreferrer" aria-label="GitHub" className="p-2.5 rounded-full border border-border text-muted-foreground hover:text-foreground hover:border-foreground transition-all duration-300 hover:scale-110">
                <Github size={18} />
              </a>
              <a href="#" aria-label="LinkedIn" className="p-2.5 rounded-full border border-border text-muted-foreground hover:text-foreground hover:border-foreground transition-all duration-300 hover:scale-110">
                <Linkedin size={18} />
              </a>
              <a href="#" aria-label="Twitter" className="p-2.5 rounded-full border border-border text-muted-foreground hover:text-foreground hover:border-foreground transition-all duration-300 hover:scale-110">
                <Twitter size={18} />
              </a>
            </div>
          </div>
          
          {/* Column 2: Quick Links */}
          <div className="flex flex-col items-center md:items-start text-center md:text-left lg:pl-12">
            <h4 className="font-heading text-lg font-bold text-foreground mb-6 uppercase tracking-wider">Quick Links</h4>
            <ul className="flex flex-col gap-4 text-muted-foreground">
              <li><Link href="/" className="hover:text-primary hover:translate-x-1 inline-block transition-all duration-300">Home</Link></li>
              <li><Link href="/about" className="hover:text-primary hover:translate-x-1 inline-block transition-all duration-300">About Me</Link></li>
              <li><Link href="/projects" className="hover:text-primary hover:translate-x-1 inline-block transition-all duration-300">Projects</Link></li>
              <li><Link href="/articles" className="hover:text-primary hover:translate-x-1 inline-block transition-all duration-300">Articles</Link></li>
              <li><Link href="/contact" className="hover:text-primary hover:translate-x-1 inline-block transition-all duration-300">Contact</Link></li>
            </ul>
          </div>

          {/* Column 3: Contact Info */}
          <div className="flex flex-col items-center md:items-start text-center md:text-left">
            <h4 className="font-heading text-lg font-bold text-foreground mb-6 uppercase tracking-wider">Contact</h4>
            <ul className="flex flex-col gap-5 text-muted-foreground">
              <li className="flex items-center gap-4">
                <MapPin size={18} className="text-primary shrink-0" />
                <span>Buea, Cameroun</span>
              </li>
              <li className="flex items-center gap-4">
                <Clock size={18} className="text-primary shrink-0" />
                <span>UTC / GMT</span>
              </li>
              <li className="flex items-center gap-4">
                <Mail size={18} className="text-primary shrink-0" />
                <a href="mailto:contact@ronsardcarnegie.com" className="hover:text-foreground transition-colors">contact@ronsardcarnegie.com</a>
              </li>
              <li className="flex items-center gap-4">
                <Building size={18} className="text-primary shrink-0" />
                <span>Available for Freelance</span>
              </li>
            </ul>
          </div>
          
        </div>

        {/* Divider */}
        <hr className="border-border/50 w-full my-10" />

        {/* Bottom Bar */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-4 text-sm text-muted-foreground">
          <p>© 2026 DJOUMESSI Ronsard Carnegie.</p>
          <p className="italic">Designed & Built with <span className="not-italic opacity-80">❤️</span> love <span className="not-italic opacity-80">❤️</span> and passion</p>
        </div>

      </div>
    </footer>
  );
}
