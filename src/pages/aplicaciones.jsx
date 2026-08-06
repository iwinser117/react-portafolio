// src/pages/Proyectos.jsx - VERSIÓN CON ESTILOS SAP
import React, { useState, useMemo } from "react";
import { useTranslation } from "react-i18next";
import { Search, Github, ExternalLink } from "lucide-react";
import { secondImages, imagesTodowebp } from "../utils/galerimages";
import Formulario from "@components/Formulario";
import Footer from "@components/Footer";
import BtnArriba from "@buttons/BtnArriba";

const deriveCategories = (subtitle = "") => {
  const s = subtitle.toLowerCase();
  const categories = [];
  if (s.includes("node") || s.includes("express") || s.includes("mongo"))
    categories.push("Node");
  if (s.includes("tailwind") || s.includes("css") || s.includes("scss"))
    categories.push("CSS");
  if (
    s.includes("react") ||
    s.includes("next") ||
    s.includes("ui") ||
    s.includes("landing")
  )
    categories.push("Landing Page");
  if (s.includes("api") || s.includes("export")) categories.push("API");
  return categories.length > 0 ? categories : ["Other"];
};

const Proyectos = () => {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [searchQuery, setSearchQuery] = useState("");
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
      featured: p.featured || false,
    }));
    return [...fromSecond];
  }, []);

  const categories = useMemo(() => {
    const cats = new Set();
    projects.forEach((p) => p.categories.forEach((cat) => cats.add(cat)));
    return ["All", ...Array.from(cats)];
  }, [projects]);

  const filteredProjects = useMemo(() => {
    return projects.filter((project) => {
      const matchesCategory =
        selectedCategory === "All" ||
        project.categories.includes(selectedCategory);
      const matchesSearch =
        project.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        project.subtitle.toLowerCase().includes(searchQuery.toLowerCase());
      return matchesCategory && matchesSearch;
    });
  }, [projects, selectedCategory, searchQuery]);

  const featuredProjects = projects.filter((p) => p.featured);

  return (
    <div className="min-h-screen w-full max-w-7xl mx-auto px-4 sm:px-6">
      {/* Header Section */}
      <div className="text-center py-12 md:py-16">
        <h1 className="text-3xl sm:text-4xl md:text-5xl font-light text-[#232946] dark:text-[#F5F6F7] mb-4 tracking-tight">
          {t("projects.pageTitle")}
        </h1>
        <p className="text-base sm:text-lg text-gray-600 dark:text-gray-300 font-light max-w-2xl mx-auto leading-relaxed">
          {t("projects.pageDescription")}
        </p>
      </div>

      {/* Filter and Search Bar */}
      <div className="mb-8">
        <div className="bg-white dark:bg-[#1D232A] rounded-xl border border-gray-200 dark:border-gray-700 p-4 md:p-6">
          {/* Search */}
          <div className="relative mb-4">
            <Search
              className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400 dark:text-gray-500"
              size={20}
            />
            <input
              type="text"
              placeholder={t("projects.search")}
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-12 pr-4 py-3 bg-gray-50 dark:bg-[#232a32] border border-gray-200 dark:border-gray-700 rounded-lg text-[#232946] dark:text-[#F5F6F7] text-sm transition-all focus:outline-none focus:ring-2 focus:ring-[#004085] dark:focus:ring-[#4DB1FF] focus:border-transparent placeholder:text-gray-400 dark:placeholder:text-gray-500"
            />
          </div>

          {/* Categories */}
          <div className="flex flex-wrap gap-2">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setSelectedCategory(category)}
                className={`
                  px-4 py-2 rounded-lg font-medium text-sm transition-all duration-200
                  ${
                    selectedCategory === category
                      ? "bg-[#004085] dark:bg-[#4DB1FF] text-white dark:text-[#232946]"
                      : "bg-gray-100 dark:bg-[#232a32] text-gray-700 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-[#2a323c]"
                  }
                `}
              >
                {category}
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Featured Projects */}
      {selectedCategory === "All" &&
        searchQuery === "" &&
        featuredProjects.length > 0 && (
          <div className="mb-12">
            <h2 className="text-xl font-bold text-[#232946] dark:text-[#F5F6F7] mb-6 flex items-center gap-3">
              <span className="w-1 h-6 bg-[#004085] dark:bg-[#4DB1FF] rounded-full"></span>
              {t("projects.featured")}
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {featuredProjects.map((project) => (
                <ProjectCard key={project.id} project={project} featured />
              ))}
            </div>
          </div>
        )}

      {/* Main Grid Section */}
      <div>
        <div className="flex flex-wrap justify-between items-center mb-6 gap-4">
          <h2 className="text-xl font-bold text-[#232946] dark:text-[#F5F6F7] flex items-center gap-3">
            <span className="w-1 h-6 bg-[#004085] dark:bg-[#4DB1FF] rounded-full"></span>
            {selectedCategory === "All"
              ? t("projects.allProjects")
              : `${t("projects.projectsOf")} ${selectedCategory}`}
          </h2>
          <span className="text-sm text-gray-500 dark:text-gray-400">
            {filteredProjects.length}{" "}
            {filteredProjects.length === 1
              ? t("projects.project")
              : t("projects.projects")}
          </span>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredProjects.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>

        {filteredProjects.length === 0 && (
          <div className="text-center py-16">
            <div className="text-4xl mb-4">🔍</div>
            <h3 className="text-xl font-semibold text-[#232946] dark:text-[#F5F6F7] mb-2">
              {t("projects.noResults")}
            </h3>
            <p className="text-gray-500 dark:text-gray-400">
              {t("projects.tryOther")}
            </p>
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
      className={`
        group bg-white dark:bg-[#1D232A] rounded-xl overflow-hidden border transition-all duration-300 hover:-translate-y-1 hover:shadow-lg
        flex flex-col h-full
        ${
          featured
            ? "border-[#004085] dark:border-[#4DB1FF]"
            : "border-gray-200 dark:border-gray-700"
        }
      `}
    >
      {featured && (
        <div className="absolute top-4 right-4 z-10 bg-[#004085] dark:bg-[#4DB1FF] text-white dark:text-[#232946] text-xs font-bold px-3 py-1 rounded-full">
          ★ Destacado
        </div>
      )}

      {/* Image Container */}
      <div className="relative h-48 overflow-hidden bg-gray-100 dark:bg-[#232a32]">
        <img
          src={project.img}
          alt={project.title}
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-white/90 dark:from-[#1D232A]/90 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
      </div>

      {/* Content */}
      <div className="p-5 flex flex-col gap-3 flex-1">
        <h3 className="text-lg font-bold text-[#232946] dark:text-[#F5F6F7] transition-colors line-clamp-1">
          {project.title}
        </h3>

        {project.subtitle && (
          <p className="text-sm text-gray-600 dark:text-gray-300 line-clamp-2 leading-relaxed">
            {project.subtitle}
          </p>
        )}

        <div className="flex flex-wrap gap-1.5">
          {project.tags.slice(0, 3).map((tag, idx) => (
            <span
              key={idx}
              className="px-2.5 py-1 bg-[#004085]/5 dark:bg-[#4DB1FF]/5 text-[#004085] dark:text-[#4DB1FF] text-xs rounded border border-[#004085]/10 dark:border-[#4DB1FF]/10"
            >
              {tag}
            </span>
          ))}
        </div>

        {/* Actions */}
        <div className="flex gap-2 mt-2 pt-2 border-t border-gray-100 dark:border-gray-700">
          <a
            href={project.demo || "#"}
            target={project.demo ? "_blank" : undefined}
            rel="noopener noreferrer"
            onClick={(e) => !project.demo && e.preventDefault()}
            className={`
              flex-1 flex items-center justify-center gap-2 px-3 py-2 rounded-lg text-xs font-medium transition-all
              bg-[#004085] dark:bg-[#4DB1FF] text-white dark:text-[#232946]
              hover:bg-[#003366] dark:hover:bg-[#3da0ff]
              ${!project.demo ? "opacity-40 cursor-not-allowed pointer-events-none" : ""}
            `}
          >
            <ExternalLink size={14} />
            Demo
          </a>

          <a
            href={project.repo || "#"}
            target={project.repo ? "_blank" : undefined}
            rel="noopener noreferrer"
            onClick={(e) => !project.repo && e.preventDefault()}
            className={`
              flex-1 flex items-center justify-center gap-2 px-3 py-2 rounded-lg text-xs font-medium transition-all
              border border-gray-200 dark:border-gray-700
              text-[#232946] dark:text-[#F5F6F7]
              hover:bg-gray-50 dark:hover:bg-[#232a32]
              ${!project.repo ? "opacity-40 cursor-not-allowed pointer-events-none" : ""}
            `}
          >
            <Github size={14} />
            Repo
          </a>
        </div>
      </div>
    </div>
  );
};

export default Proyectos;
