import React, { useState } from 'react';
import { useComments } from '../hooks/useComments';
import '../styles/blog.css';

const CommentSection = ({ slug, initialComments = [] }) => {
  const { comments, addComment, loading, error, success, clearError } = useComments(slug);
  const [formData, setFormData] = useState({
    author: '',
    email: '',
    content: '',
  });
  const [charCount, setCharCount] = useState(0);

  const displayComments = comments.length > 0 ? comments : initialComments;

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value,
    }));

    if (name === 'content') {
      setCharCount(value.length);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    try {
      await addComment({
        author: formData.author || 'Anónimo',
        email: formData.email,
        content: formData.content,
      });

      // Limpiar formulario
      setFormData({
        author: '',
        email: '',
        content: '',
      });
      setCharCount(0);
    } catch (err) {
      // El error ya se maneja en el hook
    }
  };

  const isFormValid = formData.content.trim().length >= 3;

  return (
    <section className="comments-section">
      <h2 className="comments-section__title">Comentarios ({displayComments.length})</h2>

      {/* Formulario de comentarios */}
      <div className="comments-form">
        <h3 className="comments-form__title">Deja tu comentario</h3>
        <p className="comments-form__info">
          💬 Los comentarios son anónimos y requieren moderación antes de ser publicados.
        </p>

        {error && (
          <div className="comments-form__error">
            <p>{error}</p>
            <button 
              type="button" 
              onClick={clearError}
              className="comments-form__error-close"
            >
              ✕
            </button>
          </div>
        )}

        {success && (
          <div className="comments-form__success">
            ✓ Comentario enviado. Gracias por tu aporte, se publicará después de ser moderado.
          </div>
        )}

        <form onSubmit={handleSubmit} className="comments-form__form">
          <div className="comments-form__row">
            <div className="comments-form__group">
              <label htmlFor="author" className="comments-form__label">
                Nombre (opcional)
              </label>
              <input
                type="text"
                id="author"
                name="author"
                value={formData.author}
                onChange={handleInputChange}
                placeholder="Tu nombre (o Anónimo)"
                maxLength="50"
                className="comments-form__input"
              />
            </div>

            <div className="comments-form__group">
              <label htmlFor="email" className="comments-form__label">
                Email (no se publicará)
              </label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleInputChange}
                placeholder="tu@email.com"
                maxLength="100"
                className="comments-form__input"
              />
            </div>
          </div>

          <div className="comments-form__group">
            <div className="comments-form__label-row">
              <label htmlFor="content" className="comments-form__label">
                Tu comentario
              </label>
              <span className="comments-form__char-count">
                {charCount}/500
              </span>
            </div>
            <textarea
              id="content"
              name="content"
              value={formData.content}
              onChange={handleInputChange}
              placeholder="Comparte tu opinión o pregunta..."
              maxLength="500"
              rows="5"
              className="comments-form__textarea"
              required
            />
          </div>

          <button
            type="submit"
            disabled={!isFormValid || loading}
            className="comments-form__submit"
          >
            {loading ? 'Enviando...' : 'Publicar comentario'}
          </button>
        </form>
      </div>

      {/* Lista de comentarios */}
      <div className="comments-list">
        <h3 className="comments-list__title">
          {displayComments.length === 0 ? 'No hay comentarios' : 'Comentarios aprobados'}
        </h3>

        {displayComments.length > 0 ? (
          <ul className="comments-list__items">
            {displayComments.map(comment => (
              <li key={comment.id} className="comment-item">
                <div className="comment-item__header">
                  <span className="comment-item__author">
                    {comment.author === 'Anónimo' ? '👤 Anónimo' : `👤 ${comment.author}`}
                  </span>
                  <span className="comment-item__date">{comment.date}</span>
                </div>
                <p className="comment-item__content">{comment.content}</p>
              </li>
            ))}
          </ul>
        ) : (
          <p className="comments-list__empty">
            Sé el primero en comentar este post
          </p>
        )}
      </div>
    </section>
  );
};

export default CommentSection;
