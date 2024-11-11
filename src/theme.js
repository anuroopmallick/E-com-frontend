import { createTheme } from "@mui/material/styles";
import { light } from "@mui/material/styles/createPalette";

export const shades = {
  primary: {
    100: "#e8cce8",
    200: "#d199d1",
    300: "#b966b9",
    400: "#a233a2",
    500: "#8b008b",
    600: "#6f006f",
    700: "#530053",
    800: "#380038",
    900: "#1c001c",
  },
  secondary: {
    100: "#feeed5",
    200: "#fddeab",
    300: "#fdcd82",
    400: "#fcbd58",
    500: "#fbac2e",
    600: "#c98a25",
    700: "#97671c",
    800: "#644512",
    900: "#322209",
  },
  neutral: {
    100: "#e6e6e6",
    200: "#cccccc",
    300: "#b3b3b3",
    400: "#999999",
    500: "#808080",
    600: "#666666",
    700: "#4d4d4d",
    800: "#333333",
    900: "#1a1a1a",
  },
};

export const theme = createTheme({
  palette: {
    primary: {
      main: shades.primary[500],
    },
    secondary: {
      main: shades.secondary[500],
    },
    neutral: {
      dark: shades.neutral[800],
      main: shades.neutral[500],
      light: shades.neutral[100],
    },
  },
  typography: {
    fontFamily: ["Fauna One", "sans-serif"].join(","),
    fontSize: 11,
    h1: {
      fontFamily: ["Cinzel", "sans-serif"].join(","),
      fontSize: 48,
    },
    h2: {
      fontFamily: ["Cinzel", "sans-serif"].join(","),
      fontSize: 36,
    },
    h3: {
      fontFamily: ["Cinzel", "sans-serif"].join(","),
      fontSize: 20,
    },
    h4: {
      fontFamily: ["Cinzel", "sans-serif"].join(","),
      fontSize: 14,
    },
  },
});
