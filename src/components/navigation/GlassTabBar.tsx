import { useEffect, useRef } from "react";
import { Platform, Pressable, StyleSheet, View } from "react-native";
import { BlurView } from "expo-blur";
import { LinearGradient } from "expo-linear-gradient";
import Animated, {
  useAnimatedStyle,
  withTiming,
} from "react-native-reanimated";
import { Tabs } from "expo-router";

import { Colors } from "@/src/constants/theme";

type GlassTabBarProps = Parameters<
  NonNullable<React.ComponentProps<typeof Tabs>["tabBar"]>
>[0];

const BAR_HEIGHT = 64;
const BAR_MARGIN_BOTTOM = 32;
const BAR_MARGIN_HORIZONTAL = 20;
const BORDER_RADIUS = 32;

export default function GlassTabBar({
  state,
  descriptors,
  navigation,
}: GlassTabBarProps) {
  const activeRoute = state.routes[state.index];
  const activeOptions = descriptors[activeRoute.key].options;
  const activeColor =
    (activeOptions.tabBarActiveTintColor as string | undefined) ??
    Colors.text.primary;

  // Anima a cor de fundo preenchendo a barra inteira
  const animatedGlowStyle = useAnimatedStyle(() => ({
    backgroundColor: withTiming(activeColor, { duration: 350 }),
  }), [activeColor]);

  const blurTargetRef = useRef<View>(null);

  return (
    <View style={styles.wrapper} pointerEvents="box-none">
      <View ref={blurTargetRef} style={styles.card}>
        <BlurView
          intensity={Platform.OS === "ios" ? 65 : 100}
          tint={Platform.OS === "ios" ? "systemThinMaterialDark" : "dark"}
          blurMethod="dimezisBlurView"
          blurTarget={blurTargetRef}
          style={StyleSheet.absoluteFill}
        />

        <Animated.View
          style={[StyleSheet.absoluteFill, animatedGlowStyle, { opacity: 0.4 }]}
          pointerEvents="none"
        />

        {/* Reflexo do vidro que agora vai do topo (0) até a base (1) */}
        <LinearGradient
          colors={["rgba(255,255,255,0.18)", "rgba(255,255,255,0)"]}
          start={{ x: 0, y: 0 }}
          end={{ x: 0, y: 1 }}
          style={StyleSheet.absoluteFill}
          pointerEvents="none"
        />

        <View style={styles.border} pointerEvents="none" />

        <View style={styles.iconsRow}>
          {state.routes.map((route, index) => {
            const { options } = descriptors[route.key];
            const focused = state.index === index;

            const onPress = () => {
              const event = navigation.emit({
                type: "tabPress",
                target: route.key,
                canPreventDefault: true,
              });
              if (!focused && !event.defaultPrevented) {
                navigation.navigate(route.name);
              }
            };

            const color = focused
              ? (options.tabBarActiveTintColor as string)
              : (options.tabBarInactiveTintColor as string);

            return (
              <Pressable
                key={route.key}
                onPress={onPress}
                style={styles.tabButton}
                hitSlop={8}
              >
                {options.tabBarIcon?.({ focused, color, size: 28 })}
              </Pressable>
            );
          })}
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  wrapper: {
    position: "absolute",
    left: BAR_MARGIN_HORIZONTAL,
    right: BAR_MARGIN_HORIZONTAL,
    bottom: BAR_MARGIN_BOTTOM,
  },
  card: {
    height: BAR_HEIGHT,
    borderRadius: BORDER_RADIUS,
    overflow: "hidden",
    backgroundColor: "rgba(20,20,20,0.2)",
  },
  border: {
    ...StyleSheet.absoluteFill,
    borderRadius: BORDER_RADIUS,
    borderWidth: 1,
    borderColor: "rgba(255,255,255,0.14)",
  },
  iconsRow: {
    flex: 1,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-around",
  },
  tabButton: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    height: "100%",
  },
});