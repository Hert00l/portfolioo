import React, { useState, useEffect } from 'react';
import { Menu, X, Code2 } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={`fixed w-full z-50 transition-all duration-300 ${
      scrolled ? 'bg-black/80 backdrop-blur-sm border-b border-blue-900/20' : 'bg-transparent'
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
         
          <motion.div 
            className="flex items-center"
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
          >
            <Code2 className="h-10 w-10 text-blue-500" />
            <span className="ml-3 text-3xl font-bold text-blue-200">Hert00l</span>
          </motion.div>

        
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-6">
              <NavLink href="#home">Home</NavLink>
              <NavLink href="#skills">Skills</NavLink>
              <NavLink href="#projects">Projects</NavLink>
              <NavLink href="#features">Features</NavLink>
              <NavLink href="#faq">FAQ</NavLink>
            </div>
          </div>

          
          <motion.button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden inline-flex items-center justify-center p-3 rounded-md text-blue-200/80 hover:text-blue-400 hover:bg-blue-900/20 transition-colors"
            whileTap={{ scale: 0.95 }}
          >
            <motion.div
              initial={false}
              animate={{ rotate: isOpen ? 180 : 0 }}
              transition={{ duration: 0.3 }}
            >
              {isOpen ? <X className="h-8 w-8" /> : <Menu className="h-8 w-8" />}
            </motion.div>
          </motion.button>
        </div>
      </div>

      
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
            className="md:hidden bg-black/95 backdrop-blur-sm border-t border-blue-900/20 overflow-hidden"
          >
            <motion.div 
              className="px-4 pt-2 pb-3 space-y-2"
              initial="closed"
              animate="open"
              exit="closed"
              variants={{
                open: {
                  transition: { staggerChildren: 0.1, delayChildren: 0.2 }
                },
                closed: {
                  transition: { staggerChildren: 0.05, staggerDirection: -1 }
                }
              }}
            >
              <MobileNavLink href="#home">Home</MobileNavLink>
              <MobileNavLink href="#skills">Skills</MobileNavLink>
              <MobileNavLink href="#projects">Projects</MobileNavLink>
              <MobileNavLink href="#features">Features</MobileNavLink>
              <MobileNavLink href="#faq">FAQ</MobileNavLink>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}

const NavLink = ({ href, children }: { href: string; children: React.ReactNode }) => (
  <a
    href={href}
    className="text-blue-200/80 hover:text-blue-400 px-4 py-3 rounded-md text-xl font-medium transition-all duration-300 hover:bg-blue-900/20"
  >
    {children}
  </a>
);

const MobileNavLink = ({ href, children }: { href: string; children: React.ReactNode }) => (
  <motion.a
    href={href}
    className="block px-4 py-3 text-2xl font-medium text-blue-200/80 hover:text-blue-400 rounded-md transition-colors hover:bg-blue-900/20"
    variants={{
      open: {
        opacity: 1,
        x: 0,
        transition: { type: "spring", stiffness: 300, damping: 24 }
      },
      closed: { opacity: 0, x: -20 }
    }}
    onClick={(e) => {
      e.preventDefault();
      document.querySelector(href)?.scrollIntoView({ behavior: 'smooth' });
    }}
  >
    {children}
  </motion.a>
);