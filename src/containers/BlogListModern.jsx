import React, { useState, useMemo } from 'react';
import { Link } from 'react-router-dom';
import { useBlog, useBlogFilter, useBlogCategories, useBlogTags } from '../hooks/useBlog';
import '../styles/blog-modern.css';

const POSTS_PER_PAGE = 9;

const BlogListModern = () => {
  const { posts, loading, error } = useBlog();
  const { categories } = useBlogCategories();
  const { tags } = useBlogTags();
  const [selectedCategory, setSelectedCategory] = useState(null);
  const [selectedTags, setSelectedTags] = useState([]);
  const [searchQuery, setSearchQuery] = useState('');
  const [currentPage, setCurrentPage] = useState(1);
  const [showAllTags, setShowAllTags] = useState(false);

  // Aplicar filtros
  const filteredPosts = useBlogFilter(posts, {
    category: selectedCategory,
    tags: selectedTags,
    search: searchQuery,
  });

  // Paginación
  const totalPages = Math.ceil(filteredPosts.length / POSTS_PER_PAGE);
  const paginatedPosts = useMemo(() => {
    const startIndex = (currentPage - 1) * POSTS_PER_PAGE;
    return filteredPosts.slice(startIndex, startIndex + POSTS_PER_PAGE);
  }, [filteredPosts, currentPage]);

  const handleCategorySelect = (category) => {
    setSelectedCategory(selectedCategory === category ? null : category);
    setCurrentPage(1);
  };

  const handleTagToggle = (tag) => {
    setSelectedTags(prev =>
      prev.includes(tag)
        ? prev.filter(t => t !== tag)
        : [...prev, tag]
    );
    setCurrentPage(1);
  };

  const clearAllFilters = () => {
    setSelectedCategory(null);
    setSelectedTags([]);
    setSearchQuery('');
    setCurrentPage(1);
  };

  const hasActiveFilters = selectedCategory || selectedTags.length > 0 || searchQuery;

  const formatDate = (dateString) => {
    const options = { year: 'numeric', month: 'short', day: 'numeric' };
    return new Date(dateString).toLocaleDateString('es-ES', options);
  };

  // Tags a mostrar (limitados o todos)
  const visibleTags = showAllTags ? tags : tags.slice(0, 8);

  return (
    <div className="blog-modern">
      {/* Hero Section */}
      <header className="blog-hero">
        <div className="blog-hero__content">
          <h1 className="blog-hero__title">
            <span className="blog-hero__icon">📚</span>
            Blog & Recursos
          </h1>
          <p className="blog-hero__subtitle">
            Artículos sobre SAP, desarrollo web y tecnología
          </p>

          {/* Búsqueda prominente */}
          <div className="blog-search-wrapper">
            <div className="blog-search">
              <span className="blog-search__icon">🔍</span>
              <input
                type="text"
                placeholder="Buscar artículos, temas, tecnologías..."
                value={searchQuery}
                onChange={(e) => {
                  setSearchQuery(e.target.value);
                  setCurrentPage(1);
                }}
                className="blog-search__input"
              />
              {searchQuery && (
                <button
                  className="blog-search__clear"
                  onClick={() => setSearchQuery('')}
                >
                  ✕
                </button>
              )}
            </div>
          </div>
        </div>
      </header>

      {/* Filtros como Tabs */}
      <nav className="blog-filters-bar">
        <div className="blog-filters-bar__inner">
          {/* Categorías como tabs */}
          <div className="blog-categories">
            <button
              className={`blog-category-tab ${!selectedCategory ? 'active' : ''}`}
              onClick={() => handleCategorySelect(null)}
            >
              Todos
              <span className="blog-category-tab__count">{posts.length}</span>
            </button>
            {categories.map(cat => (
              <button
                key={cat}
                className={`blog-category-tab ${selectedCategory === cat ? 'active' : ''}`}
                onClick={() => handleCategorySelect(cat)}
              >
                {cat === 'SAP' && '💼 '}
                {cat === 'React' && '⚛️ '}
                {cat !== 'SAP' && cat !== 'React' && '📁 '}
                {cat}
                <span className="blog-category-tab__count">
                  {posts.filter(p => p.category === cat).length}
                </span>
              </button>
            ))}
          </div>
        </div>
      </nav>

      {/* Tags como chips */}
      <section className="blog-tags-section">
        <div className="blog-tags-wrapper">
          <span className="blog-tags-label">🏷️ Temas populares:</span>
          <div className="blog-tags-list">
            {visibleTags.map(tag => (
              <button
                key={tag}
                className={`blog-tag-chip ${selectedTags.includes(tag) ? 'active' : ''}`}
                onClick={() => handleTagToggle(tag)}
              >
                {tag}
                {selectedTags.includes(tag) && <span className="blog-tag-chip__x">✕</span>}
              </button>
            ))}
            {tags.length > 8 && (
              <button
                className="blog-tag-chip blog-tag-chip--more"
                onClick={() => setShowAllTags(!showAllTags)}
              >
                {showAllTags ? 'Ver menos' : `+${tags.length - 8} más`}
              </button>
            )}
          </div>
        </div>
      </section>

      {/* Filtros activos */}
      {hasActiveFilters && (
        <div className="blog-active-filters">
          <div className="blog-active-filters__inner">
            <span className="blog-active-filters__label">Filtros:</span>
            {selectedCategory && (
              <span className="blog-active-filter">
                {selectedCategory}
                <button onClick={() => setSelectedCategory(null)}>✕</button>
              </span>
            )}
            {selectedTags.map(tag => (
              <span key={tag} className="blog-active-filter">
                {tag}
                <button onClick={() => handleTagToggle(tag)}>✕</button>
              </span>
            ))}
            {searchQuery && (
              <span className="blog-active-filter">
                "{searchQuery}"
                <button onClick={() => setSearchQuery('')}>✕</button>
              </span>
            )}
            <button className="blog-clear-all" onClick={clearAllFilters}>
              Limpiar todo
            </button>
          </div>
        </div>
      )}

      {/* Contenido principal */}
      <main className="blog-content">
        {/* Estado de carga */}
        {loading && (
          <div className="blog-state blog-state--loading">
            <div className="blog-loader"></div>
            <p>Cargando artículos...</p>
          </div>
        )}

        {/* Error */}
        {error && (
          <div className="blog-state blog-state--error">
            <span className="blog-state__icon">❌</span>
            <p>Error al cargar los artículos</p>
            <button onClick={() => window.location.reload()}>Reintentar</button>
          </div>
        )}

        {/* Sin resultados */}
        {!loading && !error && filteredPosts.length === 0 && (
          <div className="blog-state blog-state--empty">
            <span className="blog-state__icon">🔎</span>
            <h3>No se encontraron artículos</h3>
            <p>Intenta con otros términos o limpia los filtros</p>
            <button onClick={clearAllFilters}>Limpiar filtros</button>
          </div>
        )}

        {/* Grid de posts */}
        {!loading && !error && filteredPosts.length > 0 && (
          <>
            <div className="blog-results-info">
              <p>
                <strong>{filteredPosts.length}</strong> artículo{filteredPosts.length !== 1 ? 's' : ''}
                {hasActiveFilters && ' encontrado' + (filteredPosts.length !== 1 ? 's' : '')}
              </p>
            </div>

            <div className="blog-posts-grid">
              {paginatedPosts.map((post, index) => (
                <article
                  key={post._id}
                  className={`blog-post-card ${index === 0 ? 'blog-post-card--featured' : ''}`}
                >
                  <Link to={`/blog/${post.slug}`} className="blog-post-card__link">
                    <div className="blog-post-card__image">
                      <img src={post.image} alt={post.title} loading="lazy" />
                      <span className="blog-post-card__category">
                        {post.category === 'SAP' && '💼'}
                        {post.category === 'React' && '⚛️'}
                        {post.category !== 'SAP' && post.category !== 'React' && '📁'}
                        {post.category}
                      </span>
                    </div>

                    <div className="blog-post-card__body">
                      <div className="blog-post-card__meta">
                        <time>{formatDate(post.date)}</time>
                        <span className="blog-post-card__dot">•</span>
                        <span>{post.views} lecturas</span>
                      </div>

                      <h2 className="blog-post-card__title">{post.title}</h2>
                      <p className="blog-post-card__excerpt">{post.excerpt}</p>

                      <div className="blog-post-card__tags">
                        {post.tags.slice(0, 3).map(tag => (
                          <span key={tag} className="blog-post-card__tag">#{tag}</span>
                        ))}
                        {post.tags.length > 3 && (
                          <span className="blog-post-card__tag blog-post-card__tag--more">
                            +{post.tags.length - 3}
                          </span>
                        )}
                      </div>

                      <div className="blog-post-card__footer">
                        <span className="blog-post-card__author">
                          <span className="blog-post-card__avatar">👤</span>
                          {post.author}
                        </span>
                        <span className="blog-post-card__comments">
                          💬 {post.comments?.length || 0}
                        </span>
                      </div>
                    </div>
                  </Link>
                </article>
              ))}
            </div>

            {/* Paginación moderna */}
            {totalPages > 1 && (
              <nav className="blog-pagination-modern">
                <button
                  className="blog-pagination-modern__btn"
                  onClick={() => {
                    setCurrentPage(prev => Math.max(1, prev - 1));
                    window.scrollTo({ top: 0, behavior: 'smooth' });
                  }}
                  disabled={currentPage === 1}
                >
                  ← Anterior
                </button>

                <div className="blog-pagination-modern__info">
                  Página <strong>{currentPage}</strong> de <strong>{totalPages}</strong>
                </div>

                <button
                  className="blog-pagination-modern__btn"
                  onClick={() => {
                    setCurrentPage(prev => Math.min(totalPages, prev + 1));
                    window.scrollTo({ top: 0, behavior: 'smooth' });
                  }}
                  disabled={currentPage === totalPages}
                >
                  Siguiente →
                </button>
              </nav>
            )}
          </>
        )}
      </main>

      {/* CTA al final */}
      <section className="blog-cta">
        <div className="blog-cta__content">
          <h3>¿Tienes alguna sugerencia de tema?</h3>
          <p>Si hay algo específico sobre lo que te gustaría que escribiera, ¡házmelo saber!</p>
          <Link to="/#contacto" className="blog-cta__button">
            Contactar →
          </Link>
        </div>
      </section>
    </div>
  );
};

export default BlogListModern;
