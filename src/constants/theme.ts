import { Platform } from "react-native";
import { ColorValue } from "react-native";

export const Colors = {
  background: "#202020",

  text: {
    primary: "#ECEDEE",
    secondary: "rgba(255, 255, 255, 0.6)",
    muted: "rgba(255, 255, 255, 0.38)",
    black: "#121212",
  },

  systemStateColors: {
    success: "#33CC99",
    danger: "#E74C3C",
    warning: "#F1C40F",
  },

  status: {
    primary: "#800020",
    secondary: "#215a60",
    complementary: "#f3e5ab",
  },

  training: {
    primary: "#00ff9d",
    primaryLight: "#33CC99",
    primaryDark1: "#1AA06D",
    primaryDark2: "#052F28",
    secondary: "#41dfd0",
    secondaryDark: "rgba(23, 81, 255, 1)",
    surfaceHighlight: "rgba(51, 204, 153, 0.1)",
  },

  nutrition: {
    primary: "#b96eff",
    primaryDark: "#7E22CE",  
    secondary: "#F15BB5",     
    surfaceHighlight: "rgba(168, 85, 247, 0.1)", 
  },

  social: {
    primary: "#6366F1",        
    aiAccent: "#38BDF8",      
    surfaceHighlight: "rgba(99, 102, 241, 0.1)",
  },

  profile: {
    primary: "#FF0080",
    secondary: "#215a60",
  }
};

type GradientColors = [ColorValue, ColorValue, ...ColorValue[]];

export const gradient: GradientColors = [
  "#6D2D52",
  "#F5709D",
  "#F5709D",
  "#11FFC9",
  "#2FA6C6",
  "#204162",
];

export const darkGradient: GradientColors = [
  "#2D0B1E",
  "#57122C",
  "#4A1027",
  "#004D3C",
  "#0A3845",
  "#081321",
];

export const winePetrol: GradientColors = [
  "#800020",
  "#215a60",
];

export const Fonts = Platform.select({
  ios: {
    /** iOS `UIFontDescriptorSystemDesignDefault` */
    sans: "system-ui",
    /** iOS `UIFontDescriptorSystemDesignSerif` */
    serif: "ui-serif",
    /** iOS `UIFontDescriptorSystemDesignRounded` */
    rounded: "ui-rounded",
    /** iOS `UIFontDescriptorSystemDesignMonospaced` */
    mono: "ui-monospace",
  },
  default: {
    sans: "normal",
    serif: "serif",
    rounded: "normal",
    mono: "monospace",
  },
  web: {
    sans: "system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif",
    serif: "Georgia, 'Times New Roman', serif",
    rounded:
      "'SF Pro Rounded', 'Hiragino Maru Gothic ProN', Meiryo, 'MS PGothic', sans-serif",
    mono: "SFMono-Regular, Menlo, Monaco, Consolas, 'Liberation Mono', 'Courier New', monospace",
  },
});
