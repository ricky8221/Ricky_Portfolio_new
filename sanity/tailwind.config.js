module.exports = {
    content: [
  './pages/**/*.{js,ts,jsx,tsx}',
  './components/**/*.{js,ts,jsx,tsx}',
  './app/**/*.{js,ts,jsx,tsx}',
  ],
    theme: {
      extend: {},
    },
    plugins: [
      "@sanity/base",
      "@sanity/desk-tool",
      "@sanity/components",
      "@sanity/dashboard",
      "@sanity/default-layout",
      "@sanity/default-login",
      "@sanity/vision"
    ],
  }