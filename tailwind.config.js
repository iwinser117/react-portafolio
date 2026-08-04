// tailwind.config.js
module.exports = {
    darkMode: 'class', // Usar clase 'dark' para activar dark mode
    content: [
        "./src/**/*.{js,jsx,ts,tsx}",
    ],
    theme: {
        extend: {
            colors: {
                // Puedes agregar colores personalizados aquí si lo necesitas
            },
            animation: {
                'slideDown': 'slideDown 0.2s ease',
                'slideInRight': 'slideInRight 0.3s cubic-bezier(0.16, 1, 0.3, 1)',
                'fadeIn': 'fadeIn 0.2s ease',
                'popIn': 'popIn 0.25s cubic-bezier(0.16, 1, 0.3, 1)',
            },
            keyframes: {
                slideDown: {
                    '0%': {
                        opacity: '0',
                        transform: 'translateY(-4px)'
                    },
                    '100%': {
                        opacity: '1',
                        transform: 'translateY(0)'
                    },
                },
                slideInRight: {
                    '0%': {
                        transform: 'translateX(100%)'
                    },
                    '100%': {
                        transform: 'translateX(0)'
                    },
                },
                fadeIn: {
                    '0%': {
                        opacity: '0'
                    },
                    '100%': {
                        opacity: '1'
                    },
                },
                popIn: {
                    '0%': {
                        opacity: '0',
                        transform: 'translateY(-6px)'
                    },
                    '100%': {
                        opacity: '1',
                        transform: 'translateY(0)'
                    },
                },
            },
        },
    },
    plugins: [],
};