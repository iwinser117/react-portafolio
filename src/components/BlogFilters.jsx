import React, { useState } from 'react';
import { useBlogCategories, useBlogTags } from '../hooks/useBlog';
import '../styles/blog.css';

const BlogFilters = ({ onFilterChange, selectedCategory, selectedTags, searchQuery, onSearchChange }) => {
  const { categories, loading: categoriesLoading } = useBlogCategories();
  const { tags, loading: tagsLoading } = useBlogTags();
  const [expandedFilters, setExpandedFilters] = useState({
    categories: true,
    tags: false,
  });

  const toggleFilter = (filterName) => {
    setExpandedFilters(prev => ({
      ...prev,
      [filterName]: !prev[filterName]
    }));
  };

  const handleCategoryChange = (category) => {
    onFilterChange({
      category: selectedCategory === category ? null : category,
      tags: selectedTags,
    });
  };

  const handleTagChange = (tag) => {
    const newTags = selectedTags.includes(tag)
      ? selectedTags.filter(t => t !== tag)
      : [...selectedTags, tag];
    onFilterChange({
      category: selectedCategory,
      tags: newTags,
    });
  };

  const handleClearFilters = () => {
    onFilterChange({ category: null, tags: [] });
    onSearchChange('');
  };

  const hasActiveFilters = selectedCategory || selectedTags.length > 0 || searchQuery;

  return (
    <aside className="blog-filters">
      <div className="blog-filters__header">
        <h3>Filtros</h3>
        {hasActiveFilters && (
          <button 
            className="blog-filters__clear"
            onClick={handleClearFilters}
            title="Limpiar filtros"
          >
            ✕ Limpiar
          </button>
        )}
      </div>

      {/* Búsqueda */}
      <div className="blog-filters__section">
        <input
          type="text"
          placeholder="Buscar posts..."
          value={searchQuery}
          onChange={(e) => onSearchChange(e.target.value)}
          className="blog-filters__search"
        />
      </div>

      {/* Categorías */}
      <div className="blog-filters__section">
        <button
          className="blog-filters__toggle"
          onClick={() => toggleFilter('categories')}
        >
          <span>📁 Categorías</span>
          <span className="blog-filters__icon">
            {expandedFilters.categories ? '▼' : '▶'}
          </span>
        </button>

        {expandedFilters.categories && (
          <div className="blog-filters__options">
            {categoriesLoading ? (
              <p className="blog-filters__loading">Cargando...</p>
            ) : (
              <>
                <label className="blog-filters__option">
                  <input
                    type="radio"
                    name="category"
                    checked={!selectedCategory}
                    onChange={() => handleCategoryChange(null)}
                  />
                  <span>Todas</span>
                </label>
                {categories.map(category => (
                  <label key={category} className="blog-filters__option">
                    <input
                      type="radio"
                      name="category"
                      checked={selectedCategory === category}
                      onChange={() => handleCategoryChange(category)}
                    />
                    <span>{category}</span>
                  </label>
                ))}
              </>
            )}
          </div>
        )}
      </div>

      {/* Etiquetas */}
      <div className="blog-filters__section">
        <button
          className="blog-filters__toggle"
          onClick={() => toggleFilter('tags')}
        >
          <span>🏷️ Etiquetas</span>
          <span className="blog-filters__icon">
            {expandedFilters.tags ? '▼' : '▶'}
          </span>
        </button>

        {expandedFilters.tags && (
          <div className="blog-filters__tags">
            {tagsLoading ? (
              <p className="blog-filters__loading">Cargando...</p>
            ) : (
              tags.map(tag => (
                <label key={tag} className="blog-filters__tag-option">
                  <input
                    type="checkbox"
                    checked={selectedTags.includes(tag)}
                    onChange={() => handleTagChange(tag)}
                  />
                  <span>{tag}</span>
                </label>
              ))
            )}
          </div>
        )}
      </div>

      {/* Mostrar filtros activos */}
      {hasActiveFilters && (
        <div className="blog-filters__active">
          <p className="blog-filters__active-title">Filtros activos:</p>
          {selectedCategory && (
            <span className="blog-filters__active-tag">
              {selectedCategory}
              <button onClick={() => handleCategoryChange(null)}>✕</button>
            </span>
          )}
          {selectedTags.map(tag => (
            <span key={tag} className="blog-filters__active-tag">
              {tag}
              <button onClick={() => handleTagChange(tag)}>✕</button>
            </span>
          ))}
        </div>
      )}
    </aside>
  );
};

export default BlogFilters;
