import React, { useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { useBlogPost } from '../hooks/useBlog';
import CommentSection from '../components/CommentSection';
import BlogService from '../services/blogService';
import '../styles/blog.css';

const BlogPost = () => {
  const { slug } = useParams();
  const { post, loading, error } = useBlogPost(slug);

  // Incrementar contador de vistas
  useEffect(() => {
    if (post && slug) {
      BlogService.incrementViewCount(slug);
    }
  }, [post, slug]);

  const formatDate = (dateString) => {
    const options = { year: 'numeric', month: 'long', day: 'numeric' };
    return new Date(dateString).toLocaleDateString('es-ES', options);
  };

  if (loading) {
    return (
      <div className="blog-post-container">
        <div className="blog-post-loading">
          <p>⏳ Cargando artículo...</p>
        </div>
      </div>
    );
  }

  if (error || !post) {
    return (
      <div className="blog-post-container">
        <div className="blog-post-error">
          <h1>❌ Artículo no encontrado</h1>
          <p>{error || 'El artículo que buscas no existe.'}</p>
          <Link to="/blog" className="blog-post-link">
            ← Volver al blog
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="blog-post-container">
      {/* Breadcrumb */}
      <nav className="blog-breadcrumb">
        <Link to="/blog">Blog</Link>
        <span>/</span>
        <span>{post.title}</span>
      </nav>

      <article className="blog-post">
        {/* Header del post */}
        <header className="blog-post__header">
          <div className="blog-post__meta">
            <span className="blog-post__category">{post.category}</span>
            <span className="blog-post__date">📅 {formatDate(post.date)}</span>
            <span className="blog-post__views">👁️ {post.views} vistas</span>
          </div>

          <h1 className="blog-post__title">{post.title}</h1>

          <div className="blog-post__author">
            <span>Por <strong>{post.author}</strong></span>
          </div>

          <img 
            src={post.image} 
            alt={post.title}
            className="blog-post__image"
          />
        </header>

        {/* Contenido del post */}
        <div 
          className="blog-post__content"
          dangerouslySetInnerHTML={{ __html: post.content }}
        />

        {/* Tags */}
        {post.tags && post.tags.length > 0 && (
          <div className="blog-post__tags">
            <h3>Etiquetas:</h3>
            <div className="blog-post__tags-list">
              {post.tags.map(tag => (
                <Link
                  key={tag}
                  to={`/blog?tag=${encodeURIComponent(tag)}`}
                  className="blog-post__tag"
                >
                  #{tag}
                </Link>
              ))}
            </div>
          </div>
        )}

        {/* Sección de comentarios */}
        <CommentSection 
          slug={slug} 
          initialComments={post.comments || []}
        />
      </article>

      {/* Navegación entre posts */}
      <nav className="blog-post__navigation">
        <Link to="/blog" className="blog-post__back-link">
          ← Volver a todos los artículos
        </Link>
      </nav>
    </div>
  );
};

export default BlogPost;
