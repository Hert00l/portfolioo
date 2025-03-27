import React from 'react';
import { ExternalLink, Github } from 'lucide-react';

interface ProjectCardProps {
  title: string;
  description: string;
  image: string;
  technologies: string[];
  liveUrl?: string;
  githubUrl?: string;
}

export default function ProjectCard({ title, description, image, technologies, liveUrl, githubUrl }: ProjectCardProps) {
  return (
    <div className="group relative overflow-hidden rounded-xl bg-blue-900/10 backdrop-blur-sm border border-blue-500/10 shadow-xl transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl hover:shadow-blue-900/20">
      <div className="aspect-video w-full overflow-hidden">
        <img
          src={image}
          alt={title}
          className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-110"
        />
      </div>
      <div className="p-6">
        <h3 className="text-xl font-bold text-blue-200">{title}</h3>
        <p className="mt-2 text-blue-200/80">{description}</p>
        <div className="mt-4 flex flex-wrap gap-2">
          {technologies.map((tech) => (
            <span
              key={tech}
              className="rounded-full bg-blue-900/20 border border-blue-500/10 px-3 py-1 text-sm font-medium text-blue-400"
            >
              {tech}
            </span>
          ))}
        </div>
        <div className="mt-4 flex gap-4">
          {liveUrl && (
            <a
              href={liveUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 text-blue-400 hover:text-blue-300 transition-colors"
            >
              <ExternalLink size={16} /> Live Demo
            </a>
          )}
          {githubUrl && (
            <a
              href={githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 text-blue-200/80 hover:text-blue-300 transition-colors"
            >
              <Github size={16} /> Code
            </a>
          )}
        </div>
      </div>
    </div>
  );
}