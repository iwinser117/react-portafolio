import { useEffect, useMemo } from "react";
import { useLocation } from "react-router-dom";
import posts from "../data/posts.json";

const SITE_URL = "https://iwinsersanchez.netlify.app";
const DEFAULT_IMAGE = "https://user-images.githubusercontent.com/77251836/209884092-ec32bcf0-3e05-4633-972d-2f13afba4de6.svg";

const pageContent = {
  es: {
    home: ["Iwinser Sanchez | Desarrollador Web Full Stack", "Desarrollador web Full Stack especializado en JavaScript, React, HTML, CSS e integraciones SAP. Conoce mis proyectos, servicios y experiencia."],
    services: ["Servicios de desarrollo web e integraciones SAP | Iwinser Sanchez", "Desarrollo de aplicaciones web, automatización de procesos, integraciones SAP y consultoría tecnológica."],
    portfolio: ["Portafolio de proyectos web | Iwinser Sanchez", "Explora proyectos de desarrollo web creados con React, Node.js, APIs y tecnologías modernas."],
    blog: ["Blog de desarrollo web y SAP | Iwinser Sanchez", "Artículos sobre desarrollo web, React, APIs, SAP e integración de sistemas."],
  },
  en: {
    home: ["Iwinser Sanchez | Full Stack Web Developer", "Full Stack web developer specialized in JavaScript, React, HTML, CSS, and SAP integrations. Explore my projects, services, and experience."],
    services: ["Web development and SAP integration services | Iwinser Sanchez", "Web application development, process automation, SAP integrations, and technology consulting."],
    portfolio: ["Web project portfolio | Iwinser Sanchez", "Explore web development projects built with React, Node.js, APIs, and modern technologies."],
    blog: ["Web development and SAP blog | Iwinser Sanchez", "Articles about web development, React, APIs, SAP, and systems integration."],
  },
};

const setMeta = (selector, attributes) => {
  let element = document.head.querySelector(selector);
  if (!element) {
    element = document.createElement("meta");
    document.head.appendChild(element);
  }
  Object.entries(attributes).forEach(([key, value]) => element.setAttribute(key, value));
};

const setLink = (rel, href, hreflang) => {
  const selector = hreflang ? `link[rel="${rel}"][hreflang="${hreflang}"]` : `link[rel="${rel}"]:not([hreflang])`;
  let element = document.head.querySelector(selector);
  if (!element) {
    element = document.createElement("link");
    element.rel = rel;
    if (hreflang) element.hreflang = hreflang;
    document.head.appendChild(element);
  }
  element.href = href;
};

const Seo = () => {
  const location = useLocation();
  const seo = useMemo(() => {
    const segments = location.pathname.split("/").filter(Boolean);
    const language = segments[0] === "en" ? "en" : "es";
    const route = segments[0] === "es" || segments[0] === "en" ? segments.slice(1) : segments;
    const section = route[0] || "home";
    const post = section === "blog" && route[1] ? posts.find((item) => item.slug === route[1]) : null;
    const [defaultTitle, defaultDescription] = pageContent[language][section] || pageContent[language].home;
    const title = post ? `${post.title} | Iwinser Sanchez` : defaultTitle;
    const description = post?.excerpt || defaultDescription;
    const path = post ? `/es/blog/${post.slug}` : `/${language}${route.length ? `/${route.join("/")}` : ""}`;
    const image = Array.isArray(post?.image) ? post.image[0] : post?.image || DEFAULT_IMAGE;

    return { language: post ? "es" : language, post, title, description, canonical: `${SITE_URL}${path}`, image, route };
  }, [location.pathname]);

  useEffect(() => {
    const { language, post, title, description, canonical, image, route } = seo;
    document.documentElement.lang = language;
    document.title = title;
    setMeta('meta[name="description"]', { name: "description", content: description });
    setMeta('meta[property="og:title"]', { property: "og:title", content: title });
    setMeta('meta[property="og:description"]', { property: "og:description", content: description });
    setMeta('meta[property="og:url"]', { property: "og:url", content: canonical });
    setMeta('meta[property="og:image"]', { property: "og:image", content: image });
    setMeta('meta[property="og:type"]', { property: "og:type", content: post ? "article" : "website" });
    setMeta('meta[name="twitter:card"]', { name: "twitter:card", content: "summary_large_image" });
    setMeta('meta[name="twitter:title"]', { name: "twitter:title", content: title });
    setMeta('meta[name="twitter:description"]', { name: "twitter:description", content: description });
    setMeta('meta[name="twitter:image"]', { name: "twitter:image", content: image });
    setLink("canonical", canonical);

    const isTranslatablePage = !post;
    if (isTranslatablePage) {
      const localizedRoute = route.length ? `/${route.join("/")}` : "";
      setLink("alternate", `${SITE_URL}/es${localizedRoute}`, "es");
      setLink("alternate", `${SITE_URL}/en${localizedRoute}`, "en");
      setLink("alternate", `${SITE_URL}/es${localizedRoute}`, "x-default");
    }

    const structuredData = post
      ? {
          "@context": "https://schema.org",
          "@type": "BlogPosting",
          headline: post.title,
          description,
          image,
          datePublished: post.date,
          dateModified: post.date,
          author: { "@type": "Person", name: post.author || "Iwinser Sanchez" },
          mainEntityOfPage: canonical,
        }
      : {
          "@context": "https://schema.org",
          "@type": "Person",
          name: "Iwinser Sanchez",
          url: SITE_URL,
          jobTitle: language === "en" ? "Full Stack Web Developer" : "Desarrollador Web Full Stack",
          sameAs: [],
        };
    let jsonLd = document.head.querySelector('script[data-seo="structured-data"]');
    if (!jsonLd) {
      jsonLd = document.createElement("script");
      jsonLd.type = "application/ld+json";
      jsonLd.dataset.seo = "structured-data";
      document.head.appendChild(jsonLd);
    }
    jsonLd.textContent = JSON.stringify(structuredData);
  }, [seo]);

  return null;
};

export default Seo;
