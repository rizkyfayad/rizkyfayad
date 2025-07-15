import React, { memo } from 'react';
import { Mail, Linkedin, Github } from 'lucide-react';

const SOCIAL_LINKS = [
  { icon: Mail, link: "mailto:rizkyfyd@gmail.com", label: "Email" },
  { icon: Linkedin, link: "https://www.linkedin.com/in/rizky-fayad/", label: "LinkedIn" },
  { icon: Github, link: "https://github.com/rizkyfayad", label: "GitHub" }
];

export const Footer = memo(() => {
  return (
    <footer className="bg-background text-foreground py-12 px-[5%] lg:px-[10%] border-t border-border">
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-3 gap-8 pb-20">
        <div>
          <h3 className="text-lg font-bold bg-gradient-to-r from-purple-400 to-pink-500 bg-clip-text text-transparent mb-2">Rizky Fayad</h3>
          <p className="text-muted-foreground text-sm leading-relaxed">
            Thanks for visiting! Let's build something great together.
          </p>
        </div>

        <div>
          <h4 className="text-md font-semibold mb-3 text-foreground">Connect</h4>
          <div className="flex gap-4">
            {SOCIAL_LINKS.map(({ icon: Icon, link, label }) => (
              <a
                key={label}
                href={link}
                {...(link.startsWith('mailto:') ? {} : { target: "_blank", rel: "noopener noreferrer" })}
                className="text-muted-foreground hover:text-pink-400 transition-colors"
                aria-label={label}
              >
                <Icon className="w-5 h-5" />
              </a>
            ))}
          </div>
        </div>

        <div>
          <h4 className="text-md font-semibold mb-3 text-foreground">Quick Links</h4>
          <ul className="space-y-1 text-sm text-muted-foreground">
            <li><a href="#home" className="hover:text-pink-400 transition-colors">Home</a></li>
            <li><a href="#about" className="hover:text-pink-400 transition-colors">About</a></li>
            <li><a href="#projects" className="hover:text-pink-400 transition-colors">Projects</a></li>
            <li><a href="#contact" className="hover:text-pink-400 transition-colors">Contact</a></li>
          </ul>
        </div>
      </div>

    </footer>
  );
});

export default Footer;
