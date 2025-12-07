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
});

const deriveCategory = (subtitle = "") => {
  const s = subtitle.toLowerCase();
  if (s.includes("node") || s.includes("express") || s.includes("mongo")) return "Node";
  if (s.includes("tailwind") || s.includes("css") || s.includes("scss")) return "CSS";
  if (s.includes("react") || s.includes("next") || s.includes("ui") || s.includes("landing")) return "Landing Page";
  if (s.includes("api") || s.includes("export")) return "API";
  return "Other";
};

const Proyectos = () => {
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [searchQuery, setSearchQuery] = useState('');
  const [hoveredFilter, setHoveredFilter] = useState(null);
  const isDark = useDarkMode();
  const colors = getThemeColors(isDark);

  const getStyles = () => ({
    wrapper: {
      minHeight: '100vh',
      background: isDark 
        ? 'linear-gradient(135deg, #1D232A 0%, #232946 50%, #1D232A 100%)'
        : 'linear-gradient(135deg, #F5F6F7 0%, #ffffff 50%, #F5F6F7 100%)',
    },
    heroSection: { position: 'relative', overflow: 'hidden', padding: '120px 20px', textAlign: 'center' },
    heroOverlay: { position: 'absolute', inset: 0, background: colors.gradientHover, backdropFilter: 'blur(60px)' },
    heroContent: { position: 'relative', maxWidth: '1200px', margin: '0 auto' },
    heroTitle: { fontSize: 'clamp(2.5rem, 7vw, 5rem)', fontWeight: 700, color: colors.textPrimary, marginBottom: '1.5rem', letterSpacing: '-0.02em' },
    heroGradient: { background: colors.gradientPrimary, WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', backgroundClip: 'text' },
    heroSubtitle: { fontSize: 'clamp(1.1rem, 2vw, 1.5rem)', color: colors.textSecondary, maxWidth: '800px', margin: '0 auto' },
    filtersContainer: { maxWidth: '1400px', margin: '0 auto', padding: '2rem 1rem' },
    filtersBox: { background: isDark ? 'rgba(245, 246, 247, 0.05)' : 'rgba(0, 0, 0, 0.02)', backdropFilter: 'blur(20px)', borderRadius: '1.5rem', padding: '1.5rem', border: `1px solid ${colors.borderColor}`, display: 'flex', flexDirection: 'column', gap: '1rem' },
    searchWrapper: { position: 'relative', flex: 1, maxWidth: '100%' },
    searchIcon: { position: 'absolute', left: '1rem', top: '50%', transform: 'translateY(-50%)', color: colors.textMuted },
    searchInput: { width: '100%', padding: '0.875rem 1rem 0.875rem 3rem', background: isDark ? 'rgba(245, 246, 247, 0.1)' : 'rgba(0, 0, 0, 0.05)', border: `1px solid ${colors.borderColor}`, borderRadius: '0.75rem', color: colors.textPrimary, fontSize: '1rem', transition: 'all 0.3s ease' },
    categoryFilters: { display: 'flex', gap: '0.5rem', flexWrap: 'wrap', justifyContent: 'center' },
    filterBtn: { padding: '0.625rem 1.25rem', borderRadius: '0.75rem', fontWeight: 600, fontSize: '0.95rem', transition: 'all 0.3s ease', border: `1px solid ${colors.borderColor}`, background: isDark ? 'rgba(245, 246, 247, 0.05)' : 'rgba(0, 0, 0, 0.02)', color: colors.textSecondary, cursor: 'pointer' },
    filterBtnHover: { background: isDark ? 'rgba(245, 246, 247, 0.1)' : 'rgba(0, 0, 0, 0.05)', transform: 'translateY(-2px)' },
    filterBtnActive: { background: colors.gradientPrimary, color: 'white', borderColor: 'transparent', boxShadow: colors.shadowMedium, transform: 'scale(1.05)' },
    sectionWrapper: { maxWidth: '1400px', margin: '0 auto', padding: '3rem 1rem' },
    sectionHeader: { display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '2rem', flexWrap: 'wrap', gap: '1rem' },
    sectionTitle: { fontSize: 'clamp(1.5rem, 3vw, 2rem)', fontWeight: 700, color: colors.textPrimary, display: 'flex', alignItems: 'center', gap: '0.75rem' },
    titleBar: { width: '0.5rem', height: '2rem', background: colors.gradientPrimary, borderRadius: '9999px' },
    projectCount: { color: colors.textMuted, fontSize: '0.875rem' },
    projectsGrid: { display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(300px, 1fr))', gap: '1.5rem' },
    emptyState: { textAlign: 'center', padding: '5rem 1rem' },
    emptyIcon: { fontSize: '4rem', marginBottom: '1rem' },
    emptyTitle: { fontSize: '1.5rem', fontWeight: 600, color: colors.textPrimary, marginBottom: '0.5rem' },
    emptyText: { color: colors.textMuted },
    ctaSection: { maxWidth: '1400px', margin: '0 auto', padding: '3rem 1rem 5rem' },
    ctaBox: { background: 'linear-gradient(135deg, #007bff, #0a6ed1)', borderRadius: '2rem', padding: '4rem 2rem', textAlign: 'center', boxShadow: colors.shadowLarge },
    ctaTitle: { fontSize: 'clamp(1.8rem, 4vw, 2.5rem)', fontWeight: 700, color: 'white', marginBottom: '1rem' },
    ctaText: { fontSize: 'clamp(1rem, 2vw, 1.25rem)', color: 'aliceblue', marginBottom: '2rem', maxWidth: '800px', marginLeft: 'auto', marginRight: 'auto' },
    ctaButton: { background: 'white', color: colors.primary, padding: '1rem 2rem', borderRadius: '0.75rem', fontWeight: 700, fontSize: '1.125rem', border: 'none', cursor: 'pointer', transition: 'all 0.3s ease', boxShadow: '0 10px 30px rgba(0, 0, 0, 0.2)' },
  });

  const styles = getStyles();

  const projects = useMemo(() => {
    const fromSecond = secondImages.map((p, i) => ({
      id: `second-${i}`, title: p.alt || `Proyecto ${i + 1}`, img: p.src, subtitle: p.subtitle || "", category: deriveCategory(p.subtitle), tags: p.subtitle ? p.subtitle.split(" - ") : [], repo: p.repo || "", demo: p.demo || "", featured: p.featured || false
    }));
    const fromTodo = Object.keys(imagesTodowebp).map((key, i) => ({
      id: `todo-${i}`, title: key.replace(/([A-Z])/g, " $1").replace(/_/g, " ").trim(), img: imagesTodowebp[key], subtitle: "", category: "Landing Page", tags: ["HTML", "CSS", "JavaScript"], repo: "", demo: "", featured: false
    }));
    return [...fromSecond, ...fromTodo];
  }, []);

  const categories = useMemo(() => {
    const cats = new Set(projects.map(p => p.category));
    return ['All', ...Array.from(cats)];
  }, [projects]);

  const filteredProjects = useMemo(() => {
    return projects.filter(project => {
      const matchesCategory = selectedCategory === 'All' || project.category === selectedCategory;
      const matchesSearch = project.title.toLowerCase().includes(searchQuery.toLowerCase()) || project.subtitle.toLowerCase().includes(searchQuery.toLowerCase());
      return matchesCategory && matchesSearch;
    });
  }, [projects, selectedCategory, searchQuery]);

  const featuredProjects = projects.filter(p => p.featured);

  return (
    <div style={styles.wrapper}>
      <Nav />
      <div style={styles.heroSection}>
        <div style={styles.heroOverlay}></div>
        <div style={styles.heroContent}>
          <h1 style={styles.heroTitle}>Mis <span style={styles.heroGradient}>Proyectos</span></h1>
          <p style={styles.heroSubtitle}>Explora mi portafolio de aplicaciones web modernas y funcionales</p>
        </div>
      </div>

      <div style={styles.filtersContainer}>
        <div style={{...styles.filtersBox, ...(window.innerWidth >= 1024 ? {flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between'} : {})}}>
          <div style={{...styles.searchWrapper, ...(window.innerWidth >= 1024 ? {maxWidth: '400px'} : {})}}>
            <Search style={styles.searchIcon} size={20} />
            <input type="text" placeholder="Buscar proyectos..." value={searchQuery} onChange={(e) => setSearchQuery(e.target.value)} style={styles.searchInput} />
          </div>

          <div style={styles.categoryFilters}>
            {categories.map(category => (
              <button key={category} onClick={() => setSelectedCategory(category)} onMouseEnter={() => setHoveredFilter(category)} onMouseLeave={() => setHoveredFilter(null)} style={{...styles.filterBtn, ...(selectedCategory === category ? styles.filterBtnActive : {}), ...(hoveredFilter === category && selectedCategory !== category ? styles.filterBtnHover : {})}}>
                {category}
              </button>
            ))}
          </div>
        </div>
      </div>

      {selectedCategory === 'All' && searchQuery === '' && featuredProjects.length > 0 && (
        <div style={styles.sectionWrapper}>
          <h2 style={styles.sectionTitle}><span style={styles.titleBar}></span>Proyectos Destacados</h2>
          <div style={styles.projectsGrid}>
            {featuredProjects.map(project => (<ProjectCard key={project.id} project={project} featured isDark={isDark} colors={colors} />))}
          </div>
        </div>
      )}

      <div style={styles.sectionWrapper}>
        <div style={styles.sectionHeader}>
          <h2 style={styles.sectionTitle}><span style={{...styles.titleBar, background: 'linear-gradient(to bottom, #007bff, #17a2b8)'}}></span>{selectedCategory === 'All' ? 'Todos los Proyectos' : `Proyectos de ${selectedCategory}`}</h2>
          <span style={styles.projectCount}>{filteredProjects.length} {filteredProjects.length === 1 ? 'proyecto' : 'proyectos'}</span>
        </div>
        <div style={styles.projectsGrid}>
          {filteredProjects.map(project => (<ProjectCard key={project.id} project={project} isDark={isDark} colors={colors} />))}
        </div>
        {filteredProjects.length === 0 && (<div style={styles.emptyState}><div style={styles.emptyIcon}>🔍</div><h3 style={styles.emptyTitle}>No se encontraron proyectos</h3><p style={styles.emptyText}>Intenta con otros términos de búsqueda o categorías</p></div>)}
      </div>

      <div style={styles.ctaSection}>
        <div style={styles.ctaBox}>
          <h2 style={styles.ctaTitle}>¿Tienes un proyecto en mente?</h2>
          <p style={styles.ctaText}>Estoy disponible para colaborar en proyectos interesantes</p>
          <button style={styles.ctaButton} onMouseEnter={(e) => e.target.style.transform = 'scale(1.05)'} onMouseLeave={(e) => e.target.style.transform = 'scale(1)'} onClick={() => window.location.href = '#contacto'}>Contáctame</button>
        </div>
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
    card: { position: 'relative', background: isDark ? 'rgba(245, 246, 247, 0.03)' : 'rgba(0, 0, 0, 0.02)', backdropFilter: 'blur(20px)', borderRadius: '1.5rem', overflow: 'hidden', border: featured ? `2px solid ${colors.borderColorActive}` : `1px solid ${colors.borderColor}`, transition: 'all 0.5s cubic-bezier(0.4, 0, 0.2, 1)', display: 'flex', flexDirection: 'column', height: '100%', transform: isHovered ? 'translateY(-8px) scale(1.02)' : 'none', boxShadow: isHovered ? colors.shadowMedium : 'none' },
    badge: { position: 'absolute', top: '1rem', right: '1rem', zIndex: 10, background: colors.gradientPrimary, color: 'white', fontSize: '0.75rem', fontWeight: 700, padding: '0.375rem 0.75rem', borderRadius: '9999px', boxShadow: colors.shadowSmall },
    imageContainer: { position: 'relative', height: '200px', overflow: 'hidden', background: colors.bgSecondary },
    image: { width: '100%', height: '100%', objectFit: 'cover', transition: 'transform 0.7s ease', transform: isHovered ? 'scale(1.1)' : 'scale(1)' },
    overlay: { position: 'absolute', inset: 0, background: isDark ? 'linear-gradient(to top, rgba(29, 35, 42, 0.9), transparent)' : 'linear-gradient(to top, rgba(245, 246, 247, 0.9), transparent)', opacity: isHovered ? 1 : 0.7, transition: 'opacity 0.3s ease' },
    content: { padding: '1.5rem', display: 'flex', flexDirection: 'column', gap: '1rem', flex: 1 },
    title: { fontSize: '1.25rem', fontWeight: 700, color: isHovered ? '#4DB1FF' : colors.textPrimary, transition: 'color 0.3s ease', minHeight: '50px', display: 'flex', alignItems: 'center', lineHeight: '1.3', margin: 0 },
    description: { fontSize: '0.875rem', color: colors.textSecondary, overflow: 'hidden', textOverflow: 'ellipsis', display: '-webkit-box', WebkitLineClamp: 2, WebkitBoxOrient: 'vertical', minHeight: '40px', lineHeight: '1.6' },
    tags: { display: 'flex', flexWrap: 'wrap', gap: '0.5rem' },
    tag: { padding: '0.375rem 0.75rem', background: isDark ? 'rgba(108, 99, 255, 0.15)' : 'rgba(0, 123, 255, 0.1)', color: isDark ? '#4DB1FF' : colors.primary, fontSize: '0.75rem', borderRadius: '9999px', border: `1px solid ${colors.borderColor}` },
    actions: { display: 'flex', gap: '0.75rem', marginTop: 'auto' },
    actionBtn: { flex: 1, display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '0.5rem', padding: '0.75rem 1rem', borderRadius: '0.75rem', fontWeight: 600, fontSize: '0.9rem', transition: 'all 0.3s ease', textDecoration: 'none', cursor: 'pointer', border: 'none' },
    primaryBtn: { background: colors.gradientPrimary, color: 'white', transform: hoveredBtn === 'demo' ? 'translateY(-2px)' : 'none', boxShadow: hoveredBtn === 'demo' ? colors.shadowMedium : 'none' },
    secondaryBtn: { background: isDark ? 'rgba(245, 246, 247, 0.05)' : 'rgba(0, 0, 0, 0.02)', color: isDark ? '#4DB1FF' : colors.primary, border: `1px solid ${colors.borderColor}`, transform: hoveredBtn === 'repo' ? 'translateY(-2px)' : 'none', boxShadow: hoveredBtn === 'repo' ? colors.shadowSmall : 'none' },
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
