import React, { useState, useMemo } from 'react';
import { useBlog, useBlogFilter } from '../hooks/useBlog';
import BlogCard from '../components/BlogCard';
import BlogFilters from '../components/BlogFilters';
import '../styles/blog.css';

const POSTS_PER_PAGE = 6;

const BlogList = () => {
  const { posts, loading, error } = useBlog();
  const [selectedCategory, setSelectedCategory] = useState(null);
  const [selectedTags, setSelectedTags] = useState([]);
  const [searchQuery, setSearchQuery] = useState('');
  const [currentPage, setCurrentPage] = useState(1);

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

  const handleFilterChange = ({ category, tags }) => {
    setSelectedCategory(category);
    setSelectedTags(tags);
    setCurrentPage(1); // Reiniciar paginación
  };

  const handleSearchChange = (query) => {
    setSearchQuery(query);
    setCurrentPage(1); // Reiniciar paginación
  };

  const handlePageChange = (page) => {
    setCurrentPage(Math.max(1, Math.min(page, totalPages)));
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="blog-container">
      <div className="blog-header">
        <h1>📝 Blog</h1>
        <p>Artículos sobre SAP, desarrollo y tecnología</p>
      </div>

      <div className="blog-layout">
        {/* Sidebar de filtros */}
        <BlogFilters
          onFilterChange={handleFilterChange}
          selectedCategory={selectedCategory}
          selectedTags={selectedTags}
          searchQuery={searchQuery}
          onSearchChange={handleSearchChange}
        />

        {/* Contenido principal */}
        <main className="blog-main">
          {loading && (
            <div className="blog-loading">
              <p>⏳ Cargando artículos...</p>
            </div>
          )}

          {error && (
            <div className="blog-error">
              <p>❌ Error al cargar los artículos: {error}</p>
            </div>
          )}

          {!loading && !error && filteredPosts.length === 0 && (
            <div className="blog-empty">
              <p>😕 No se encontraron artículos</p>
              <p className="blog-empty__description">
                Intenta cambiar los filtros o la búsqueda
              </p>
            </div>
          )}

          {!loading && !error && filteredPosts.length > 0 && (
            <>
              <div className="blog-results">
                <p>Mostrando {paginatedPosts.length} de {filteredPosts.length} artículos</p>
              </div>

              <div className="blog-grid">
                {paginatedPosts.map(post => (
                  <BlogCard key={post._id} post={post} />
                ))}
              </div>

              {/* Paginación */}
              {totalPages > 1 && (
                <div className="blog-pagination">
                  <button
                    onClick={() => handlePageChange(currentPage - 1)}
                    disabled={currentPage === 1}
                    className="blog-pagination__btn"
                  >
                    ← Anterior
                  </button>

                  <div className="blog-pagination__pages">
                    {Array.from({ length: totalPages }, (_, i) => i + 1).map(page => (
                      <button
                        key={page}
                        onClick={() => handlePageChange(page)}
                        className={`blog-pagination__page ${
                          currentPage === page ? 'active' : ''
                        }`}
                      >
                        {page}
                      </button>
                    ))}
                  </div>

                  <button
                    onClick={() => handlePageChange(currentPage + 1)}
                    disabled={currentPage === totalPages}
                    className="blog-pagination__btn"
                  >
                    Siguiente →
                  </button>
                </div>
              )}
            </>
          )}
        </main>
      </div>
    </div>
  );
};

export default BlogList;
