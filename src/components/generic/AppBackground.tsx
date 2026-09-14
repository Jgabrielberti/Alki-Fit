import {
  ColorValue,
  StyleSheet,
  ImageBackground,
  ImageSourcePropType,
} from "react-native";
import { LinearGradient } from "expo-linear-gradient";

import { Colors } from "@/src/constants/theme";

type Props = {
  children: React.ReactNode;
  colors?: readonly [string, string, ...string[]];
  image?: ImageSourcePropType;
};

export function AppBackground({ children, colors, image }: Props) {
  const gradientColors: readonly [ColorValue, ColorValue, ...ColorValue[]] =
    colors ?? [Colors.background, Colors.background];

  const content = (
    <LinearGradient
      colors={gradientColors}
      start={{ x: 0.5, y: 0 }}
      end={{ x: 0.5, y: 1 }}
      style={styles.appBackground}
    >
      {children}
    </LinearGradient>
  );

  if (image) {
    return (
      <ImageBackground
        source={image}
        style={styles.appBackground}
        resizeMode="cover"
      >
        {content}
      </ImageBackground>
    );
  }

  return content;
}

const styles = StyleSheet.create({
  appBackground: {
    flex: 1,
  },
});