/**
 * Blog Service - Manejo de datos del blog
 * Puede conectarse a Firebase, API REST o usar datos locales
 */

// Para desarrollo, usamos datos locales
import postsData from '../data/posts.json';

// Simular un retraso de red
const delay = (ms) => new Promise(resolve => setTimeout(resolve, ms));

class BlogService {
  /**
   * Obtener todos los posts
   */
  static async getAllPosts() {
    try {
      await delay(300); // Simular API call
      return postsData.sort((a, b) => new Date(b.date) - new Date(a.date));
    } catch (error) {
      console.error('Error fetching posts:', error);
      throw error;
    }
  }

  /**
   * Obtener un post por slug
   */
  static async getPostBySlug(slug) {
    try {
      await delay(300);
      const post = postsData.find(p => p.slug === slug);
      if (!post) throw new Error('Post no encontrado');
      return post;
    } catch (error) {
      console.error('Error fetching post:', error);
      throw error;
    }
  }

  /**
   * Obtener posts por categoría
   */
  static async getPostsByCategory(category) {
    try {
      await delay(300);
      return postsData.filter(p => p.category === category);
    } catch (error) {
      console.error('Error fetching posts by category:', error);
      throw error;
    }
  }

  /**
   * Obtener posts por etiqueta
   */
  static async getPostsByTag(tag) {
    try {
      await delay(300);
      return postsData.filter(p => p.tags.includes(tag));
    } catch (error) {
      console.error('Error fetching posts by tag:', error);
      throw error;
    }
  }

  /**
   * Obtener todas las categorías únicas
   */
  static async getCategories() {
    try {
      await delay(200);
      const categories = [...new Set(postsData.map(p => p.category))];
      return categories;
    } catch (error) {
      console.error('Error fetching categories:', error);
      throw error;
    }
  }

  /**
   * Obtener todas las etiquetas únicas
   */
  static async getTags() {
    try {
      await delay(200);
      const tags = [...new Set(postsData.flatMap(p => p.tags))];
      return tags;
    } catch (error) {
      console.error('Error fetching tags:', error);
      throw error;
    }
  }

  /**
   * Buscar posts por término
   */
  static async searchPosts(query) {
    try {
      await delay(300);
      const lowerQuery = query.toLowerCase();
      return postsData.filter(p =>
        p.title.toLowerCase().includes(lowerQuery) ||
        p.excerpt.toLowerCase().includes(lowerQuery) ||
        p.tags.some(tag => tag.toLowerCase().includes(lowerQuery))
      );
    } catch (error) {
      console.error('Error searching posts:', error);
      throw error;
    }
  }

  /**
   * Agregar comentario a un post
   * En producción, esto iría al backend/BD
   */
  static async addComment(slug, comment) {
    try {
      await delay(500);
      
      // Validaciones básicas
      if (!comment.author) throw new Error('El nombre es requerido');
      if (!comment.content) throw new Error('El comentario es requerido');
      if (comment.content.length < 3) throw new Error('El comentario es muy corto');
      
      // Aquí se enviaría al servidor/BD
      const newComment = {
        id: `comment-${Date.now()}`,
        author: comment.author || 'Anónimo',
        email: comment.email || null,
        content: comment.content,
        date: new Date().toISOString().split('T')[0],
        approved: false, // Moderación requerida
      };

      // En producción: await fetch('/api/comments', { method: 'POST', body: JSON.stringify(...) })
      
      return newComment;
    } catch (error) {
      console.error('Error adding comment:', error);
      throw error;
    }
  }

  /**
   * Incrementar contador de vistas
   */
  static async incrementViewCount(slug) {
    try {
      await delay(200);
      const post = postsData.find(p => p.slug === slug);
      if (post) {
        post.views = (post.views || 0) + 1;
      }
      // En producción: await fetch(`/api/posts/${slug}/views`, { method: 'POST' })
    } catch (error) {
      console.error('Error incrementing views:', error);
    }
  }
}

export default BlogService;
