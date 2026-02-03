import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/blog.css';

const BlogCard = ({ post }) => {
  const formatDate = (dateString) => {
    const options = { year: 'numeric', month: 'long', day: 'numeric' };
    return new Date(dateString).toLocaleDateString('es-ES', options);
  };

  return (
    <Link to={`/blog/${post.slug}`} className="blog-card-link">
      <article className="blog-card">
        <div className="blog-card__image">
          <img src={post.image} alt={post.title} />
          <span className="blog-card__category">{post.category}</span>
        </div>

        <div className="blog-card__content">
          <div className="blog-card__meta">
            <span className="blog-card__date">{formatDate(post.date)}</span>
            <span className="blog-card__views">👁️ {post.views}</span>
          </div>

          <h3 className="blog-card__title">{post.title}</h3>

          <p className="blog-card__excerpt">{post.excerpt}</p>

          <div className="blog-card__tags">
            {post.tags.map(tag => (
              <span key={tag} className="blog-card__tag">
                #{tag}
              </span>
            ))}
          </div>

          <div className="blog-card__footer">
            <span className="blog-card__author">Por {post.author}</span>
            <span className="blog-card__comments">
              💬 {post.comments?.length || 0} comentarios
            </span>
          </div>
        </div>
      </article>
    </Link>
  );
};

export default BlogCard;
