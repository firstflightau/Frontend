// /** @type {import('tailwindcss').Config} */
// export default {
//   content: [
//     "./index.html",
//     "./src/**/*.{js,ts,jsx,tsx}",
//   ],
//   theme: {
//     extend: {},
//   },
//   plugins: [],
// }

/** @type {import('tailwindcss').Config} */

function customColors(cssVar) {
  return ({ opacityVariable, opacityValue }) => {
    if (opacityValue !== undefined) {
      return `rgba(var(${cssVar}), ${opacityValue})`;
    }
    if (opacityVariable !== undefined) {
      return `rgba(var(${cssVar}), var(${opacityVariable}, 1))`;
    }
    return `rgb(var(${cssVar}))`;
  };
}

export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    container: {
      center: true,
      padding: {
        DEFAULT: "1rem",
        "2xl": "128px",
      },
    },
    extend: {
      fontFamily: {
        kaushan: ['"Kaushan Script"', "serif"], // Define your font here
        sans: ["DM Sans", "sans-serif"], // Optionally include DM Sans
      },
      colors: {
        "light-blue": "rgba(63, 196, 251, 1)",
        purple: "rgba(76, 70, 252, 1)",
        customBlue: {
          500: "#00005a",
        },

        primary: {
          50: customColors("--c-primary-50"),
          100: customColors("--c-primary-100"),
          200: customColors("--c-primary-200"),
          300: "#ff7a7a",
          400: "#fc5b5b",
          500: "#ff3c3c",
          6000: "#fe0000",
          700: "#d50000",
          800: customColors("--c-primary-800"),
          900: customColors("--c-primary-900"),
        },
        secondary: {
          50: "#c2ccdf",
          100: "#879abf",
          200: "#6c82ae",
          300: "#37528d",
          400: "#1e3b7c",
          500: "#07226b",
          6000: "#00005a",
          700: "#000058",
          800: customColors("--c-secondary-800"),
          900: customColors("--c-secondary-900"),
        },
        tertiary: {
          500: "#ffeea2",
          6000: "#ffeb8f",
          700: "#ffe364",
        },
        neutral: {
          50: customColors("--c-neutral-50"),
          100: customColors("--c-neutral-100"),
          200: customColors("--c-neutral-200"),
          300: customColors("--c-neutral-300"),
          400: customColors("--c-neutral-400"),
          500: customColors("--c-neutral-500"),
          6000: customColors("--c-neutral-600"),
          700: customColors("--c-neutral-700"),
          800: customColors("--c-neutral-800"),
          900: customColors("--c-neutral-900"),
        },
      },

      animation: {
        shake: "shake 1s ease-in-out",
      },
      keyframes: {
        shake: {
          "0%, 100%": { transform: "translateX(0)" },
          "25%": { transform: "translateX(-5px)" },
          "50%": { transform: "translateX(5px)" },
          "75%": { transform: "translateX(-5px)" },
        },
      },
    },
    variants: {
      extend: {},
    },
  },
  plugins: [],
};
