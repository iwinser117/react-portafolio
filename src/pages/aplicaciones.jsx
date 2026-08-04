import React, { useState, useMemo } from 'react';
import { useTranslation } from 'react-i18next';
import { Search, Github, ExternalLink } from 'lucide-react';
import { secondImages, imagesTodowebp } from '../utils/galerimages';
import Nav from "@components/Nav";
import Formulario from "@components/Formulario";
import Footer from "@components/Footer";
import BtnArriba from "@buttons/BtnArriba";

const deriveCategories = (subtitle = "") => {
  const s = subtitle.toLowerCase();
  const categories = [];
  if (s.includes("node") || s.includes("express") || s.includes("mongo")) categories.push("Node");
  if (s.includes("tailwind") || s.includes("css") || s.includes("scss")) categories.push("CSS");
  if (s.includes("react") || s.includes("next") || s.includes("ui") || s.includes("landing")) categories.push("Landing Page");
  if (s.includes("api") || s.includes("export")) categories.push("API");
  return categories.length > 0 ? categories : ["Other"];
};

const Proyectos = () => {
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [searchQuery, setSearchQuery] = useState('');
  const { t } = useTranslation();

  const projects = useMemo(() => {
    const fromSecond = secondImages.map((p, i) => ({
      id: `second-${i}`,
      title: p.alt || `Proyecto ${i + 1}`,
      img: p.src,
      subtitle: p.subtitle || "",
      categories: deriveCategories(p.subtitle),
      tags: p.subtitle ? p.subtitle.split(" - ") : [],
      repo: p.repo || "",
      demo: p.demo || "",
      featured: p.featured || false
    }));
    return [...fromSecond];
  }, []);

  const categories = useMemo(() => {
    const cats = new Set();
    projects.forEach(p => p.categories.forEach(cat => cats.add(cat)));
    return ['All', ...Array.from(cats)];
  }, [projects]);

  const filteredProjects = useMemo(() => {
    return projects.filter(project => {
      const matchesCategory = selectedCategory === 'All' || project.categories.includes(selectedCategory);
      const matchesSearch = project.title.toLowerCase().includes(searchQuery.toLowerCase()) || project.subtitle.toLowerCase().includes(searchQuery.toLowerCase());
      return matchesCategory && matchesSearch;
    });
  }, [projects, selectedCategory, searchQuery]);

  const featuredProjects = projects.filter(p => p.featured);

  return (
    <div className="min-h-screen container mx-auto">
      {/* Header Section */}
      <div className="relative overflow-hidden py-28 px-5 text-center">
        <div className="absolute inset-0 backdrop-blur-xl"></div>
        <div className="relative max-w-5xl mx-auto">
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-medium text-slate-800 dark:text-[#F5F6F7] mb-6 tracking-tight transition-colors duration-300">
            {t('projects.pageTitle')}
          </h1>
          <p className="text-base sm:text-lg md:text-xl text-slate-600 dark:text-[#e0e0e0] max-w-3xl mx-auto transition-colors duration-300">
            {t('projects.pageDescription')}
          </p>
        </div>
      </div>

      {/* Filter and Search Bar */}
      <div className="max-w-7xl mx-auto px-4 py-8">
        <div className="bg-black/5 dark:bg-white/5 backdrop-blur-xl rounded-3xl p-6 border border-blue-500/10 dark:border-indigo-500/20 flex flex-col gap-4">
          <div className="relative flex-1 w-full">
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-500 dark:text-gray-400" size={20} />
            <input 
              type="text" 
              placeholder={t('projects.search')} 
              value={searchQuery} 
              onChange={(e) => setSearchQuery(e.target.value)} 
              className="w-full pl-12 pr-4 py-3.5 bg-black/5 dark:bg-white/10 border border-blue-500/10 dark:border-indigo-500/20 rounded-xl text-slate-800 dark:text-[#F5F6F7] text-base transition-all focus:outline-none focus:ring-2 focus:ring-blue-500 dark:focus:ring-indigo-500"
            />
          </div>

          <div className="flex flex-wrap gap-2 justify-center">
            {categories.map(category => (
              <button 
                key={category} 
                onClick={() => setSelectedCategory(category)} 
                className={`px-5 py-2.5 rounded-xl font-semibold text-sm transition-all duration-300 border ${
                  selectedCategory === category
                    ? 'bg-gradient-to-r from-indigo-500 to-cyan-400 text-white border-transparent shadow-lg shadow-indigo-500/25 scale-105'
                    : 'bg-black/5 dark:bg-white/5 border-blue-500/10 dark:border-indigo-500/20 text-slate-700 dark:text-[#e0e0e0] hover:bg-black/10 dark:hover:bg-white/10 hover:-translate-y-0.5'
                }`}
              >
                {category}
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Featured Projects */}
      {selectedCategory === 'All' && searchQuery === '' && featuredProjects.length > 0 && (
        <div className="max-w-7xl mx-auto px-4 py-12">
          <h2 className="text-2xl sm:text-3xl font-bold text-slate-800 dark:text-[#F5F6F7] flex items-center gap-3 mb-8 transition-colors">
            <span className="w-2 h-8 bg-gradient-to-b from-indigo-500 to-cyan-400 rounded-full"></span>
            {t('projects.featured')}
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {featuredProjects.map(project => (
              <ProjectCard key={project.id} project={project} featured />
            ))}
          </div>
        </div>
      )}

      {/* Main Grid Section */}
      <div className="max-w-7xl mx-auto px-4 py-12">
        <div className="flex flex-wrap justify-between items-center mb-8 gap-4">
          <h2 className="text-2xl sm:text-3xl font-bold text-slate-800 dark:text-[#F5F6F7] flex items-center gap-3 transition-colors">
            <span className="w-2 h-8 bg-gradient-to-b from-blue-500 to-cyan-500 rounded-full"></span>
            {selectedCategory === 'All' ? t('projects.allProjects') : `${t('projects.projectsOf')} ${selectedCategory}`}
          </h2>
          <span className="text-gray-500 dark:text-gray-400 text-sm transition-colors">
            {filteredProjects.length} {filteredProjects.length === 1 ? t('projects.project') : t('projects.projects')}
          </span>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredProjects.map(project => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>

        {filteredProjects.length === 0 && (
          <div className="text-center py-20 px-4">
            <div className="text-6xl mb-4">🔍</div>
            <h3 className="text-2xl font-semibold text-slate-800 dark:text-[#F5F6F7] mb-2 transition-colors">
              {t('projects.noResults')}
            </h3>
            <p className="text-gray-500 dark:text-gray-400 transition-colors">{t('projects.tryOther')}</p>
          </div>
        )}
      </div>

      <Formulario />
      <Footer />
      <BtnArriba />
    </div>
  );
};

const ProjectCard = ({ project, featured = false }) => {
  return (
    <div 
      className={`group relative bg-black/5 dark:bg-white/5 backdrop-blur-xl rounded-3xl overflow-hidden border transition-all duration-500 flex flex-col h-full hover:-translate-y-2 hover:shadow-xl dark:hover:shadow-indigo-500/20 ${
        featured 
          ? 'border-2 border-indigo-500/50 dark:border-indigo-500/50' 
          : 'border-blue-500/10 dark:border-indigo-500/20'
      }`}
    >
      {featured && (
        <div className="absolute top-4 right-4 z-10 bg-gradient-to-r from-indigo-500 to-cyan-400 text-white text-xs font-bold px-3 py-1.5 rounded-full shadow-md">
          ★ Destacado
        </div>
      )}

      {/* Image Container */}
      <div className="relative h-50 overflow-hidden bg-white dark:bg-[#232946]">
        <img 
          src={project.img} 
          alt={project.title} 
          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" 
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#F5F6F7]/90 dark:from-[#1D232A]/90 to-transparent opacity-70 group-hover:opacity-100 transition-opacity duration-300" />
      </div>

      {/* Content */}
      <div className="p-6 flex flex-col gap-4 flex-1">
        <h3 className="text-xl font-bold text-slate-800 dark:text-[#F5F6F7] group-hover:text-blue-500 dark:group-hover:text-cyan-400 transition-colors min-h-[50px] flex items-center leading-snug m-0">
          {project.title}
        </h3>

        {project.subtitle && (
          <p className="text-sm text-slate-600 dark:text-[#e0e0e0] line-clamp-2 min-h-[40px] leading-relaxed m-0">
            {project.subtitle}
          </p>
        )}

        <div className="flex flex-wrap gap-2">
          {project.tags.slice(0, 3).map((tag, idx) => (
            <span 
              key={idx} 
              className="px-3 py-1 bg-blue-500/10 dark:bg-indigo-500/15 text-blue-600 dark:text-cyan-400 text-xs rounded-full border border-blue-500/10 dark:border-indigo-500/20"
            >
              {tag}
            </span>
          ))}
        </div>

        {/* Actions */}
        <div className="flex gap-3 mt-auto pt-2">
          <a 
            href={project.demo || '#'} 
            target={project.demo ? "_blank" : undefined} 
            rel="noopener noreferrer" 
            onClick={(e) => !project.demo && e.preventDefault()} 
            className={`flex-1 flex items-center justify-center gap-2 px-4 py-3 rounded-xl font-semibold text-sm transition-all text-white bg-gradient-to-r from-indigo-500 to-cyan-400 hover:-translate-y-0.5 hover:shadow-lg hover:shadow-indigo-500/25 ${
              !project.demo ? 'opacity-40 cursor-not-allowed pointer-events-none' : ''
            }`}
          >
            <ExternalLink size={16} />
            Demo
          </a>

          <a 
            href={project.repo || '#'} 
            target={project.repo ? "_blank" : undefined} 
            rel="noopener noreferrer" 
            onClick={(e) => !project.repo && e.preventDefault()} 
            className={`flex-1 flex items-center justify-center gap-2 px-4 py-3 rounded-xl font-semibold text-sm transition-all border bg-black/5 dark:bg-white/5 border-blue-500/10 dark:border-indigo-500/20 text-blue-600 dark:text-cyan-400 hover:-translate-y-0.5 hover:shadow-md ${
              !project.repo ? 'opacity-40 cursor-not-allowed pointer-events-none' : ''
            }`}
          >
            <Github size={16} />
            Repo
          </a>
        </div>
      </div>
    </div>
  );
};

export default Proyectos;