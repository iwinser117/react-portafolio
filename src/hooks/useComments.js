import { useState } from 'react';
import BlogService from '../services/blogService';

/**
 * Hook para gestionar comentarios
 */
export const useComments = (slug) => {
  const [comments, setComments] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [success, setSuccess] = useState(false);

  const addComment = async (commentData) => {
    try {
      setLoading(true);
      setError(null);
      setSuccess(false);

      const newComment = await BlogService.addComment(slug, commentData);
      setComments(prev => [newComment, ...prev]);
      setSuccess(true);

      // Limpiar mensaje de éxito después de 3 segundos
      setTimeout(() => setSuccess(false), 3000);

      return newComment;
    } catch (err) {
      setError(err.message);
      throw err;
    } finally {
      setLoading(false);
    }
  };

  const clearError = () => setError(null);
  const clearSuccess = () => setSuccess(false);

  return {
    comments,
    setComments,
    addComment,
    loading,
    error,
    success,
    clearError,
    clearSuccess,
  };
};
