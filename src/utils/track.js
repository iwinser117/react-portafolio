const TRACKER_CONFIG = {
    apiUrl: 'https://trakecrsites-production.up.railway.app/api/track',
    siteName: 'Portafolio Iwinser Sanchez'
};

// Función para enviar visita
function trackPageView() {
    const data = {
        siteName: TRACKER_CONFIG.siteName,
        url: window.location.href,
        additionalData: {
            pageTitle: document.title,
            referrer: document.referrer,
            screenSize: `${window.screen.width}x${window.screen.height}`,
            timestamp: new Date().toISOString()
        }
    };

    fetch(TRACKER_CONFIG.apiUrl, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(data)
    }).catch(err => {
        console.error('Error tracking page view:', err);
    });
}

// Rastrear la visita cuando se carga la página
window.addEventListener('load', trackPageView);

// Rastrear la visita cuando se navega a una nueva ruta (para SPA)
window.addEventListener('popstate', trackPageView);

export { trackPageView };