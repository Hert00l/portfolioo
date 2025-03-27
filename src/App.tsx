import React, { useEffect } from 'react';
import { Github, Pickaxe, Youtube, Linkedin, Bot, ChevronDown, Code, Database, Globe, Blocks, Heart } from 'lucide-react';
import { motion } from "framer-motion";
import Navbar from './components/Navbar';
import ProjectCard from './components/ProjectCard';
import SkillBar from './components/SkillBar';
import Features from './components/Features';
import FAQ from './components/FAQ';

function App() {
  const skills = [
    { 
      category: "Frontend",
      icon: <Globe className="h-6 w-6 text-blue-500" />,
      items: [
        { name: "React", level: 90 },
        { name: "JavaScript", level: 85 },
        { name: "HTML/CSS", level: 95 },
        { name: "TypeScript", level: 88 }
      ]
    },
    {
      category: "Backend",
      icon: <Database className="h-6 w-6 text-blue-500" />,
      items: [
        { name: "Node.js", level: 82 },
        { name: "Java", level: 85 },
        { name: "SQL", level: 85 },
        { name: "MongoDB", level: 80 }
      ]
    },
    {
      category: "Tools",
      icon: <Code className="h-6 w-6 text-blue-500" />,
      items: [
        { name: "Git", level: 88 },
        { name: "Vite", level: 80 },
        { name: "Jest", level: 65 },
        { name: "Figma", level: 85 }
      ]
    },
    { 
      category: "Discord Bots",
      icon: <Bot className="h-6 w-6 text-blue-500" />,
      items: [
        { name: "Python", level: 90 },
        { name: "Javascript", level: 75 },
        { name: "Eris", level: 75 },
        { name: "discord.js", level: 69 }
      ]
    },
    { 
      category: "Minecraft",
      icon: <Blocks className="h-6 w-6 text-blue-500" />,
      items: [
        { name: "Java", level: 90 },
        { name: "IntelliJ IDEA", level: 75 },
        { name: "Spigot", level: 85 },
        { name: "Gradel", level: 69 }
      ]
    },
    { 
      category: "Others",
      icon: <Pickaxe className="h-6 w-6 text-blue-500" />,
      items: [
        { name: "Tailwind", level: 97 },
        { name: "Webpack", level: 75 },
        { name: "Bootstrap", level: 65 },
        { name: "Parcel", level: 49 }
      ]
    }
  ];

  const projects = [
    {
      title: "Tox Tweaks",
      description: "TOX TWEAKS WEBSITE ",
      image: "https://sigmawire.net/i/03/WZmuls.png",
      technologies: ["html", "javascript", "tailwind css", "React"],
      liveUrl: "https://toxxtweaksss.vercel.app/",
      githubUrl: "https://github.com/Hert00l"
    },
    {
      title: "  Portfolio",
      description: "My personal portfolio ",
      image: "https://sigmawire.net/i/03/YEwtqM.png",
      technologies: ["React", "Node.js", "tailwind"],
      liveUrl: "https://www.nightrp.it",
      githubUrl: "https://github.com/Hert00l"
    },
    {
      title: "ByteHint",
      description: "Professional consulting company helping achieve technical goals",
      image: "https://sigmawire.net/i/03/aBP2RG.png",
      technologies: ["React", "Node.js", "tailwind"],
      liveUrl: "https://bytehint.com",
      githubUrl: "https://github.com/Hert00l"
    }
  ];

  const faqs = [
    {
      question: "How much does it cost to create a website?",
      answer: "The price depends on the complexity and features of the website. Contact me for a custom quote."
    },
    {
      question: "How much does it cost to set up a Minecraft game mode?",
      answer: "The cost varies based on the mode's complexity and customization. Let's discuss your needs for an exact price."
    },
    {
      question: "How long does it take to develop a website?",
      answer: "It depends on the project. A simple website might take a few days, while a complex one could take weeks."
    },
    {
      question: "How long does it take to configure a Minecraft server?",
      answer: "Setup time varies based on the complexity, but most servers can be configured within a few days."
    },
    {
      question: "Can you optimize my existing website?",
      answer: "Yes! I can improve speed, security, and user experience based on your needs."
    },
    {
      question: "Who developed this website?",
      answer: "This website was created by Hert00l. If you need a custom site, feel free to reach out!"
    },
    {
      question: "Do you provide ongoing support and maintenance?",
      answer: "Yes, I offer maintenance plans to keep your website or Minecraft server running smoothly."
    },
    {
      question: "Can you add custom plugins to my Minecraft server?",
      answer: "Absolutely! I can develop or configure plugins to match your requirements."
    }
  ];

  useEffect(() => {
    const observerOptions = {
      threshold: 0.1
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('active');
        }
      });
    }, observerOptions);

    document.querySelectorAll('.reveal').forEach((element) => {
      observer.observe(element);
    });

    return () => observer.disconnect();
  }, []);

  return (
    <div className="min-h-screen bg-black text-white bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-blue-900/40 via-black to-black">
      <Navbar />
      
      
      <section id="home" className="relative min-h-screen flex items-center justify-center">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-32 text-center">
          <motion.h1 
            initial={{ opacity: 0, y: -50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="text-7xl font-bold mb-4"
          >
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-500 to-blue-200">
              
            </span>
            <motion.span
              animate={{ 
                color: ['#1e40af', '#60a5fa', '#1e40af'],
                textShadow: ['0 0 20px #1e40af', '0 0 40px #60a5fa', '0 0 20px #1e40af']
              }}
              transition={{ 
                duration: 2,
                repeat: Infinity,
                repeatType: "reverse"
              }}
              className="font-black"
            >
              Hert00l
            </motion.span>
          </motion.h1>
          <p className="text-xl sm:text-2xl text-blue-200/80 mb-8 reveal">
            I specialize in developing custom websites, high-performance Minecraft servers, and advanced Discord bots tailored to meet your unique needs.
          </p>
          <div className="flex justify-center gap-6 reveal">
            <a href="https://github.com/Hert00l" target="_blank" rel="noopener noreferrer" 
               className="text-blue-200/80 hover:text-blue-400 transition-colors transform hover:scale-110">
              <Github size={24} />
            </a>
            <a href="https://youtube.com/Hert00l" target="_blank" rel="noopener noreferrer" 
               className="text-blue-200/80 hover:text-blue-400 transition-colors transform hover:scale-110">
              <Youtube size={24} />
            </a>
            <a href="https://discord.gg/your-server" target="_blank" rel="noopener noreferrer" 
               className="text-blue-200/80 hover:text-blue-400 transition-colors transform hover:scale-110">
              <Bot size={24} />
            </a>
          </div>
          <a href="#skills" className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
            <ChevronDown size={24} className="text-blue-400" />
          </a>
        </div>
      </section>

      
      <section id="skills" className="py-32">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center mb-16 text-blue-200 reveal">Technical Skills</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {skills.map((skillSet) => (
              <div key={skillSet.category} 
                   className="p-6 bg-blue-900/10 backdrop-blur-sm border border-blue-500/10 rounded-xl shadow-lg reveal card-hover">
                <div className="flex items-center mb-6">
                  {skillSet.icon}
                  <h3 className="ml-2 text-xl font-semibold text-blue-200">{skillSet.category}</h3>
                </div>
                <div className="space-y-4">
                  {skillSet.items.map((skill) => (
                    <SkillBar key={skill.name} name={skill.name} level={skill.level} />
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

     
      <section id="projects" className="py-32">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center mb-16 text-blue-200 reveal">Featured Projects</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project) => (
              <div key={project.title} className="reveal">
                <ProjectCard {...project} />
              </div>
            ))}
          </div>
        </div>
      </section>

     
      <Features />

     
      <FAQ />

      
      <footer className="pt-12 py-8 border-t border-black-900/20 bg-black">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="flex items-center justify-center gap-2 text-blue-200/80">
            <Heart size={16} className="text-blue-500" />
            <p>Made with passion and code by hert00l</p>
          </div>
          <div className="mt-4 flex justify-center gap-6">
            <a href="https://github.com/Hert00l" target="_blank" rel="noopener noreferrer" 
               className="text-blue-200/80 hover:text-blue-400 transition-colors">
              <Github size={20} />
            </a>
            <a href="https://youtube.com/Hert00l" target="_blank" rel="noopener noreferrer" 
               className="text-blue-200/80 hover:text-blue-400 transition-colors">
              <Youtube size={20} />
            </a>
            <a href="https://discord.gg/your-server" target="_blank" rel="noopener noreferrer" 
               className="text-blue-200/80 hover:text-blue-400 transition-colors">
              <Bot size={20} />
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;
