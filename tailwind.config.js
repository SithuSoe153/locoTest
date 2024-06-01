/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        "muicom-nero": "#fff",
        "muicom-nero-48": "rgba(255, 255, 255, 0.48)",
        "muicom-regent-gray-20": "rgba(145, 158, 171, 0.2)",
        "muicom-allports": "#006c9c",
        "muicom-tropical-rain-forest": "#007867",
        "muicom-kaitoke-green-8": "rgba(255, 86, 48, 0.08)",
        "muicom-pale-sky": "#637381",
        "muicom-ebony-clay": "#212b36",
        "muicom-cerulean-8": "rgba(0, 184, 217, 0.08)",
        "muicom-jade-8": "rgba(0, 167, 111, 0.08)",
        "muicom-kaitoke-green-16": "rgba(255, 86, 48, 0.16)",
        "muicom-thunderbird": "#b71d18",
        "muicom-athens-gray": "#f4f6f8",
        "muicom-mountain-meadow-16": "rgba(34, 197, 94, 0.16)",
        "muicom-salem": "#118d57",
        "muicom-porcelain": "#f1f3f4",
        "muicom-japanese-laurel-16": "rgba(255, 171, 0, 0.16)",
        "muicom-indochine": "#b76e00",
        "muicom-regent-gray": "#919eab",
        "muicom-pastel-green": "#5be49b",
        "muicom-jade": "#00a76f",
        mediumseagreen: "#1ac28a",
        "muicom-sherpa-blue": "#004b50",
        "muicom-nero-80": "rgba(255, 255, 255, 0.8)",
        "muicom-regent-gray-8": "rgba(145, 158, 171, 0.08)",
        "muicom-kaitoke-green": "#ff5630",
        "muicom-regent-gray-16": "rgba(145, 158, 171, 0.16)",
        "muicom-mountain-meadow": "#22c55e",
        "muicom-cerulean-16": "rgba(0, 184, 217, 0.16)",
        "muicom-shark": "#24292e",
        "muicom-botticelli": "#dae2ed",
        "muicom-science-blue": "#006bd6",
        "muicom-nero-50": "rgba(255, 255, 255, 0.5)",
        gray: "rgba(255, 255, 255, 0.64)",
        lightgreen: "rgba(91, 228, 155, 0.32)",
      },
      spacing: {},
      fontFamily: {
        "muicom-public-sans-bold-12-title": "'Public Sans'",
        "muicom-inter-bold-14": "Inter",
        "muicom-ibm-plex-sans-semibold-13": "'IBM Plex Sans'",
      },
      borderRadius: {
        "smi-7": "12.7px",
        xl: "20px",
        "7xs-2": "5.2px",
        lg: "18px",
        "3xs": "10px",
      },
    },
    fontSize: {
      sm: "14px",
      "5xl": "24px",
      lgi: "19px",
      xs: "12px",
      lg: "18px",
      smi: "13px",
      "2xs": "11px",
      "13xl": "32px",
      "7xl": "26px",
      xl: "20px",
      base: "16px",
      inherit: "inherit",
    },
    screens: {
      lg: {
        max: "1200px",
      },
      mq1050: {
        raw: "screen and (max-width: 1050px)",
      },
      mq1000: {
        raw: "screen and (max-width: 1000px)",
      },
      mq975: {
        raw: "screen and (max-width: 975px)",
      },
      mq750: {
        raw: "screen and (max-width: 750px)",
      },
      mq725: {
        raw: "screen and (max-width: 725px)",
      },
      mq450: {
        raw: "screen and (max-width: 450px)",
      },
    },
  },
  corePlugins: {
    preflight: false,
  },
};
