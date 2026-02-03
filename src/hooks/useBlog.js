import { useState, useEffect, useMemo } from 'react';
import BlogService from '../services/blogService';

/**
 * Hook para obtener todos los posts del blog
 */
export const useBlog = () => {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchPosts = async () => {
      try {
        setLoading(true);
        const data = await BlogService.getAllPosts();
        setPosts(data);
        setError(null);
      } catch (err) {
        setError(err.message);
        setPosts([]);
      } finally {
        setLoading(false);
      }
    };

    fetchPosts();
  }, []);

  return { posts, loading, error };
};

/**
 * Hook para obtener un post específico por slug
 */
export const useBlogPost = (slug) => {
  const [post, setPost] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    if (!slug) return;

    const fetchPost = async () => {
      try {
        setLoading(true);
        const data = await BlogService.getPostBySlug(slug);
        setPost(data);
        setError(null);
      } catch (err) {
        setError(err.message);
        setPost(null);
      } finally {
        setLoading(false);
      }
    };

    fetchPost();
  }, [slug]);

  return { post, loading, error };
};

/**
 * Hook para filtrar posts
 * Usa useMemo para evitar re-renders infinitos
 */
export const useBlogFilter = (posts, filters = {}) => {
  const { category, tags = [], search } = filters;

  const filteredPosts = useMemo(() => {
    let result = [...posts];

    if (category) {
      result = result.filter(p => p.category === category);
    }

    if (tags && tags.length > 0) {
      result = result.filter(p =>
        tags.some(tag => p.tags.includes(tag))
      );
    }

    if (search) {
      const query = search.toLowerCase();
      result = result.filter(p =>
        p.title.toLowerCase().includes(query) ||
        p.excerpt.toLowerCase().includes(query)
      );
    }

    return result;
  }, [posts, category, tags, search]);

  return filteredPosts;
};

/**
 * Hook para obtener categorías únicas
 */
export const useBlogCategories = () => {
  const [categories, setCategories] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchCategories = async () => {
      try {
        setLoading(true);
        const data = await BlogService.getCategories();
        setCategories(data);
        setError(null);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchCategories();
  }, []);

  return { categories, loading, error };
};

/**
 * Hook para obtener etiquetas únicas
 */
export const useBlogTags = () => {
  const [tags, setTags] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchTags = async () => {
      try {
        setLoading(true);
        const data = await BlogService.getTags();
        setTags(data);
        setError(null);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchTags();
  }, []);

  return { tags, loading, error };
};
