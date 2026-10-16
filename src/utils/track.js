const TRACKER_CONFIG = {
    apiUrl: 'https://trakecrsites-production.up.railway.app/api/track',
    siteName: 'Portafolio Iwinser Sanchez'
};

// Envía una visita al tracker. React Router se encarga de invocarla al cambiar de ruta.
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

    return fetch(TRACKER_CONFIG.apiUrl, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(data)
    }).catch(err => {
        console.error('Error tracking page view:', err);
    });
}

export { trackPageView };