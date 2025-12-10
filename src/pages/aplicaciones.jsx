import React, { useState, useMemo } from 'react';
import { Search, Github, ExternalLink } from 'lucide-react';
import { secondImages, imagesTodowebp } from '../utils/galerimages';
import Nav from "@components/Nav";
import Formulario from "@components/Formulario";
import Footer from "@components/Footer";
import BtnArriba from "@buttons/BtnArriba";
import { useDarkMode } from "@buttons/DarkModeProvider";

// usamos el hook del DarkModeProvider

const getThemeColors = (isDark) => ({
  primary: '#007bff',
  secondary: '#6c757d',
  bgPrimary: isDark ? '#1D232A' : '#F5F6F7',
  bgSecondary: isDark ? '#232946' : '#ffffff',
  textPrimary: isDark ? '#F5F6F7' : '#232946',
  textSecondary: isDark ? '#e0e0e0' : '#354A5F',
  textMuted: isDark ? '#6c757d' : '#868e96',
  gradientPrimary: 'linear-gradient(90deg, #6c63ff, #00c6fb)',
  gradientHover: isDark 
    ? 'linear-gradient(135deg, rgba(108,99,255,0.15), rgba(0,198,251,0.15))'
    : 'linear-gradient(135deg, rgba(0,123,255,0.1), rgba(10,110,209,0.1))',
  borderColor: isDark ? 'rgba(108,99,255,0.2)' : 'rgba(0,123,255,0.1)',
  borderColorActive: isDark ? 'rgba(108,99,255,0.5)' : 'rgba(0,123,255,0.3)',
  shadowSmall: isDark ? '0 4px 12px rgba(108,99,255,0.2)' : '0 4px 12px rgba(0,123,255,0.15)',
  shadowMedium: isDark ? '0 10px 25px rgba(108,99,255,0.3)' : '0 10px 25px rgba(0,123,255,0.2)',
  shadowLarge: isDark ? '0 20px 50px rgba(108,99,255,0.3)' : '0 20px 50px rgba(0,123,255,0.2)',
  accentHover: '#2e7272',
});

const deriveCategories = (subtitle = "") => {
  const s = subtitle.toLowerCase();
  const categories = [];
  //un proyecto puede pertenecer a varias categorias
  if (s.includes("node") || s.includes("express") || s.includes("mongo")) categories.push("Node");
  if (s.includes("tailwind") || s.includes("css") || s.includes("scss")) categories.push("CSS");
  if (s.includes("react") || s.includes("next") || s.includes("ui") || s.includes("landing")) categories.push("Landing Page");
  if (s.includes("api") || s.includes("export")) categories.push("API");
  return categories.length > 0 ? categories : ["Other"];
};

const Proyectos = () => {
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [searchQuery, setSearchQuery] = useState('');
  const [hoveredFilter, setHoveredFilter] = useState(null);
  const isDark = useDarkMode();
  const colors = getThemeColors(isDark);

  const projects = useMemo(() => {
    const fromSecond = secondImages.map((p, i) => ({
      id: `second-${i}`, title: p.alt || `Proyecto ${i + 1}`, img: p.src, subtitle: p.subtitle || "", categories: deriveCategories(p.subtitle), tags: p.subtitle ? p.subtitle.split(" - ") : [], repo: p.repo || "", demo: p.demo || "", featured: p.featured || false
    }));
    const fromTodo = Object.keys(imagesTodowebp).map((key, i) => ({
      id: `todo-${i}`, title: key.replace(/([A-Z])/g, " $1").replace(/_/g, " ").trim(), img: imagesTodowebp[key], subtitle: "", categories: ["Landing Page"], tags: ["HTML", "CSS", "JavaScript"], repo: "", demo: "", featured: false
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
    <div style={{ minHeight: '100vh' }}>
      <Nav />
      
      <div style={{ position: 'relative', overflow: 'hidden', padding: '120px 20px', textAlign: 'center' }}>
        <div style={{ position: 'absolute', inset: 0, background: colors.gradientHover, backdropFilter: 'blur(60px)' }}></div>
        <div style={{ position: 'relative', maxWidth: '1200px', margin: '0 auto' }}>
          <h1 style={{ 
            fontSize: 'clamp(1.8rem, 5vw, 3rem)', 
            fontWeight: 700, 
            color: colors.textPrimary,
            marginBottom: '1.5rem', 
            letterSpacing: '-0.02em',
            transition: 'color 0.3s ease'
          }}>
            Mis <span style={{ 
              background: colors.gradientPrimary, 
              WebkitBackgroundClip: 'text', 
              WebkitTextFillColor: 'transparent',
              backgroundClip: 'text'
            }}>Proyectos</span>
          </h1>
          <p style={{ 
            fontSize: 'clamp(1rem, 2vw, 1.25rem)', 
            color: colors.textSecondary,
            maxWidth: '800px',
            margin: '0 auto',
            transition: 'color 0.3s ease'
          }}>
            Explora mi portafolio de aplicaciones web modernas y funcionales
          </p>
        </div>
      </div>

      <div style={{ maxWidth: '1400px', margin: '0 auto', padding: '2rem 1rem' }}>
        <div style={{ 
          background: isDark ? 'rgba(245, 246, 247, 0.05)' : 'rgba(0, 0, 0, 0.02)', 
          backdropFilter: 'blur(20px)', 
          borderRadius: '1.5rem', 
          padding: '1.5rem', 
          borderWidth: '1px',
          borderStyle: 'solid',
          borderColor: colors.borderColor,
          display: 'flex',
          flexDirection: 'column',
          gap: '1rem'
        }}>
          <div style={{ position: 'relative', flex: 1, maxWidth: '100%' }}>
            <Search style={{ position: 'absolute', left: '1rem', top: '50%', transform: 'translateY(-50%)', color: colors.textMuted }} size={20} />
            <input 
              type="text" 
              placeholder="Buscar proyectos..." 
              value={searchQuery} 
              onChange={(e) => setSearchQuery(e.target.value)} 
              style={{ 
                width: '100%', 
                padding: '0.875rem 1rem 0.875rem 3rem', 
                background: isDark ? 'rgba(245, 246, 247, 0.1)' : 'rgba(0, 0, 0, 0.05)', 
                borderWidth: '1px',
                borderStyle: 'solid',
                borderColor: colors.borderColor,
                borderRadius: '0.75rem', 
                color: colors.textPrimary, 
                fontSize: '1rem', 
                transition: 'all 0.3s ease' 
              }} 
            />
          </div>

          <div style={{ display: 'flex', gap: '0.5rem', flexWrap: 'wrap', justifyContent: 'center' }}>
            {categories.map(category => (
              <button 
                key={category} 
                onClick={() => setSelectedCategory(category)} 
                onMouseEnter={() => setHoveredFilter(category)} 
                onMouseLeave={() => setHoveredFilter(null)} 
                style={{ 
                  padding: '0.625rem 1.25rem', 
                  borderRadius: '0.75rem', 
                  fontWeight: 600, 
                  fontSize: '0.95rem', 
                  transition: 'all 0.3s ease', 
                  borderWidth: '1px',
                  borderStyle: 'solid',
                  borderColor: selectedCategory === category ? 'transparent' : colors.borderColor,
                  background: selectedCategory === category 
                    ? colors.gradientPrimary 
                    : (hoveredFilter === category 
                      ? (isDark ? 'rgba(245, 246, 247, 0.1)' : 'rgba(0, 0, 0, 0.05)') 
                      : (isDark ? 'rgba(245, 246, 247, 0.05)' : 'rgba(0, 0, 0, 0.02)')),
                  color: selectedCategory === category ? 'white' : colors.textSecondary,
                  cursor: 'pointer',
                  boxShadow: selectedCategory === category ? colors.shadowMedium : 'none',
                  transform: selectedCategory === category ? 'scale(1.05)' : (hoveredFilter === category && selectedCategory !== category ? 'translateY(-2px)' : 'none')
                }}
              >
                {category}
              </button>
            ))}
          </div>
        </div>
      </div>

      {selectedCategory === 'All' && searchQuery === '' && featuredProjects.length > 0 && (
        <div style={{ maxWidth: '1400px', margin: '0 auto', padding: '3rem 1rem' }}>
          <h2 style={{ 
            fontSize: 'clamp(1.5rem, 3vw, 2rem)', 
            fontWeight: 700, 
            color: colors.textPrimary, 
            display: 'flex', 
            alignItems: 'center', 
            gap: '0.75rem',
            marginBottom: '2rem',
            transition: 'color 0.3s ease'
          }}>
            <span style={{ width: '0.5rem', height: '2rem', background: colors.gradientPrimary, borderRadius: '9999px' }}></span>
            Proyectos Destacados
          </h2>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(300px, 1fr))', gap: '1.5rem' }}>
            {featuredProjects.map(project => (<ProjectCard key={project.id} project={project} featured isDark={isDark} colors={colors} />))}
          </div>
        </div>
      )}

      <div style={{ maxWidth: '1400px', margin: '0 auto', padding: '3rem 1rem' }}>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '2rem', flexWrap: 'wrap', gap: '1rem' }}>
          <h2 style={{ 
            fontSize: 'clamp(1.5rem, 3vw, 2rem)', 
            fontWeight: 700, 
            color: colors.textPrimary, 
            display: 'flex', 
            alignItems: 'center', 
            gap: '0.75rem',
            transition: 'color 0.3s ease'
          }}>
            <span style={{ width: '0.5rem', height: '2rem', background: 'linear-gradient(to bottom, #007bff, #17a2b8)', borderRadius: '9999px' }}></span>
            {selectedCategory === 'All' ? 'Todos los Proyectos' : `Proyectos de ${selectedCategory}`}
          </h2>
          <span style={{ color: colors.textMuted, fontSize: '0.875rem', transition: 'color 0.3s ease' }}>
            {filteredProjects.length} {filteredProjects.length === 1 ? 'proyecto' : 'proyectos'}
          </span>
        </div>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(300px, 1fr))', gap: '1.5rem' }}>
          {filteredProjects.map(project => (<ProjectCard key={project.id} project={project} isDark={isDark} colors={colors} />))}
        </div>
        {filteredProjects.length === 0 && (
          <div style={{ textAlign: 'center', padding: '5rem 1rem' }}>
            <div style={{ fontSize: '4rem', marginBottom: '1rem' }}>🔍</div>
            <h3 style={{ fontSize: '1.5rem', fontWeight: 600, color: colors.textPrimary, marginBottom: '0.5rem', transition: 'color 0.3s ease' }}>
              No se encontraron proyectos
            </h3>
            <p style={{ color: colors.textMuted, transition: 'color 0.3s ease' }}>Intenta con otros términos de búsqueda o categorías</p>
          </div>
        )}
      </div>

      <Formulario />
      <Footer />
      <BtnArriba />
    </div>
  );
};

const ProjectCard = ({ project, featured = false, isDark, colors }) => {
  const [isHovered, setIsHovered] = useState(false);
  const [hoveredBtn, setHoveredBtn] = useState(null);

  const getCardStyles = () => ({
    card: { position: 'relative', background: isDark ? 'rgba(245, 246, 247, 0.03)' : 'rgba(0, 0, 0, 0.02)', backdropFilter: 'blur(20px)', borderRadius: '1.5rem', overflow: 'hidden', borderWidth: featured ? '2px' : '1px', borderStyle: 'solid', borderColor: featured ? colors.borderColorActive : colors.borderColor, transition: 'all 0.5s cubic-bezier(0.4, 0, 0.2, 1)', display: 'flex', flexDirection: 'column', height: '100%', transform: isHovered ? 'translateY(-8px) scale(1.02)' : 'none', boxShadow: isHovered ? colors.shadowMedium : 'none' },
    badge: { position: 'absolute', top: '1rem', right: '1rem', zIndex: 10, background: colors.gradientPrimary, color: 'white', fontSize: '0.75rem', fontWeight: 700, padding: '0.375rem 0.75rem', borderRadius: '9999px', boxShadow: colors.shadowSmall },
    imageContainer: { position: 'relative', height: '200px', overflow: 'hidden', background: colors.bgSecondary },
    image: { width: '100%', height: '100%', objectFit: 'cover', transition: 'transform 0.7s ease', transform: isHovered ? 'scale(1.1)' : 'scale(1)' },
    overlay: { position: 'absolute', inset: 0, background: isDark ? 'linear-gradient(to top, rgba(29, 35, 42, 0.9), transparent)' : 'linear-gradient(to top, rgba(245, 246, 247, 0.9), transparent)', opacity: isHovered ? 1 : 0.7, transition: 'opacity 0.3s ease' },
    content: { padding: '1.5rem', display: 'flex', flexDirection: 'column', gap: '1rem', flex: 1 },
    title: { fontSize: '1.25rem', fontWeight: 700, color: isHovered ? '#4DB1FF' : colors.textPrimary, transition: 'color 0.3s ease', minHeight: '50px', display: 'flex', alignItems: 'center', lineHeight: '1.3', margin: 0 },
    description: { fontSize: '0.875rem', color: colors.textSecondary, overflow: 'hidden', textOverflow: 'ellipsis', display: '-webkit-box', WebkitLineClamp: 2, WebkitBoxOrient: 'vertical', minHeight: '40px', lineHeight: '1.6' },
    tags: { display: 'flex', flexWrap: 'wrap', gap: '0.5rem' },
    tag: { padding: '0.375rem 0.75rem', background: isDark ? 'rgba(108, 99, 255, 0.15)' : 'rgba(0, 123, 255, 0.1)', color: isDark ? '#4DB1FF' : colors.primary, fontSize: '0.75rem', borderRadius: '9999px', borderWidth: '1px', borderStyle: 'solid', borderColor: colors.borderColor },
    actions: { display: 'flex', gap: '0.75rem', marginTop: 'auto' },
    actionBtn: { flex: 1, display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '0.5rem', padding: '0.75rem 1rem', borderRadius: '0.75rem', fontWeight: 600, fontSize: '0.9rem', transition: 'all 0.3s ease', textDecoration: 'none', cursor: 'pointer', border: 'none' },
    primaryBtn: { background: colors.gradientPrimary, color: 'white', transform: hoveredBtn === 'demo' ? 'translateY(-2px)' : 'none', boxShadow: hoveredBtn === 'demo' ? colors.shadowMedium : 'none' },
    secondaryBtn: { background: isDark ? 'rgba(245, 246, 247, 0.05)' : 'rgba(0, 0, 0, 0.02)', color: isDark ? '#4DB1FF' : colors.primary, borderWidth: '1px', borderStyle: 'solid', borderColor: colors.borderColor, transform: hoveredBtn === 'repo' ? 'translateY(-2px)' : 'none', boxShadow: hoveredBtn === 'repo' ? colors.shadowSmall : 'none' },
    disabled: { opacity: 0.4, cursor: 'not-allowed' },
  });

  const cardStyles = getCardStyles();

  return (
    <div style={cardStyles.card} onMouseEnter={() => setIsHovered(true)} onMouseLeave={() => setIsHovered(false)}>
      {featured && <div style={cardStyles.badge}>★ Destacado</div>}
      <div style={cardStyles.imageContainer}>
        <img src={project.img} alt={project.title} style={cardStyles.image} />
        <div style={cardStyles.overlay}></div>
      </div>
      <div style={cardStyles.content}>
        <h3 style={cardStyles.title}>{project.title}</h3>
        {project.subtitle && <p style={cardStyles.description}>{project.subtitle}</p>}
        <div style={cardStyles.tags}>
          {project.tags.slice(0, 3).map((tag, idx) => (<span key={idx} style={cardStyles.tag}>{tag}</span>))}
        </div>
        <div style={cardStyles.actions}>
          <a href={project.demo || '#'} target={project.demo ? "_blank" : undefined} rel="noopener noreferrer" onClick={(e) => !project.demo && e.preventDefault()} onMouseEnter={() => setHoveredBtn('demo')} onMouseLeave={() => setHoveredBtn(null)} style={{...cardStyles.actionBtn, ...cardStyles.primaryBtn, ...(!project.demo ? cardStyles.disabled : {})}}>
            <ExternalLink size={16} />
            Demo
          </a>
          <a href={project.repo || '#'} target={project.repo ? "_blank" : undefined} rel="noopener noreferrer" onClick={(e) => !project.repo && e.preventDefault()} onMouseEnter={() => setHoveredBtn('repo')} onMouseLeave={() => setHoveredBtn(null)} style={{...cardStyles.actionBtn, ...cardStyles.secondaryBtn, ...(!project.repo ? cardStyles.disabled : {})}}>
            <Github size={16} />
            Repo
          </a>
        </div>
      </div>
    </div>
  );
};

export default Proyectos;
