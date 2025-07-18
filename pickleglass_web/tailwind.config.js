/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ['./pages/**/*.{js,ts,jsx,tsx,mdx}', './components/**/*.{js,ts,jsx,tsx,mdx}', './app/**/*.{js,ts,jsx,tsx,mdx}'],
    theme: {
        extend: {
            colors: {
                primary: '#C0A062',
                secondary: '#333333',
                accent: '#EADBC8',
                'subtle-bg': '#FDFBF5',
                'subtle-active-bg': '#FBF5E9',
            },
        },
    },
    plugins: [],
};
