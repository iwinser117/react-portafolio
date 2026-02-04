import React from "react";
import BlogListModern from "../containers/BlogListModern";
import Nav from "@components/Nav";
import Footer from "@components/Footer";
import BtnArriba from "@buttons/BtnArriba";

/**
 * Blog Page - Contenedor principal de la sección blog
 * Versión moderna con filtros más amigables
 */
const Blog = () => {
  return (
    <div className="data-bs-theme-dark letra-home">
      <Nav />
      <BlogListModern />
      <Footer />
      <BtnArriba />
    </div>
  );
};

export default Blog;
