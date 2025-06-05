import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        'deep-koamaru': {
          '50': '#f2f5ff',
          '100': '#e7ecff',
          '200': '#d2dbff',
          '300': '#aebdff',
          '400': '#8193ff',
          '500': '#4e5fff',
          '600': '#2931fe',
          '700': '#181ce9',
          '800': '#1316c4',
          '900': '#1214a0',
          '950': '#090f79',
        },
        black: {
          '950': '#090f79' // opcional si quieres extender black
        }
      }
    }
  },
  plugins: [],
};

export default config;
