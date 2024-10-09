/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  mode: "jit",
  theme: {
    extend: {
      colors: {
        primary: "#678477",//verde oscuro
        // primary: "#FFFFFF",
        secondary: "#F8D0D1",//rosado boton
        tertiary: "#FEF9F5",//fondo blanco
        selected: '#5E17EB',//morado mdw
        verdeclaro: "#678477",//verde menu
        verdeoscuro: "#2B5C58",
        customGray: '#D9D9D9',
        "black-100": "#100d25",
        "black-200": "#090325",
        "white-100": "#f3f3f3",
      },
      boxShadow: {
        card: "0px 35px 120px -15px #211e35",
      },
      screens: {
        xs: "450px",
      },
      backgroundImage: {
        "hero-mobile": "url('/src/assets/sm-herobg.avif')",
        "hero-gr": "linear-gradient(180deg, #FFF 77.5%, rgba(255, 255, 255, 0.00) 100%);",
        "tul-serv": "url('/src/assets/tul-serv-bg.avif')",
        "tul-serv-mobile": "url('/src/assets/sm-tul-serv-bg.avif')",
        "pink-gr": "linear-gradient(180deg, rgba(255, 255, 255, 0.52) 0%, #F8D0D1 30%, #F8D0D1 100%);",
        "serv-gr": "linear-gradient(180deg, rgba(255, 255, 255, 0.00) 0%, #FFF 55.08%);",
        "serv-gr2": "linear-gradient(180deg, #FEF9F5 0%, rgba(254, 249, 245, 0.62) 100%)",
        "agendar": "url('/src/assets/agenda-bg.avif')",
        "agendar-gr": "linear-gradient(90deg, #448D6C 0%, #1A5652 100%);",
        "testimonios-gr": "linear-gradient(270deg, #024143 31.86%, #FFF 68.39%);",
        "art-gr": "linear-gradient(180deg, rgba(0, 0, 0, 0.00) 0%, #000 55.08%);",
        "book-cover": "url('/src/assets/portada.avif')",
        "book-cover-mb": "url('/src/assets/portadasm.avif')",
        "blog-sec-bg": "url('/src/assets/BlogSecBg.avif')",
      },
    },
  },
  plugins: [],
};
