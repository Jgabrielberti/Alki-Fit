import { Tabs } from "expo-router";

import Ionicons from "@expo/vector-icons/Ionicons";
import MaterialCommunityIcons from "@expo/vector-icons/MaterialCommunityIcons";

import { Colors } from "@/src/constants/theme";
import GlassTabBar from "@/src/components/navigation/GlassTabBar";

export default function TabLayout() {
  const inactiveColor = Colors.text.secondary;

  return (
    <Tabs
      tabBar={(props) => <GlassTabBar {...props} />}
      screenOptions={{
        headerShown: false,
        tabBarInactiveTintColor: inactiveColor,
      }}
    >
      <Tabs.Screen
        name="index"
        options={{
          title: "",
          tabBarActiveTintColor: Colors.status.primaryLight,
          tabBarIcon: ({ color }) => (
            <Ionicons name="library-outline" size={28} color={color} />
          ),
        }}
      />

      <Tabs.Screen
        name="TrainingLogsScreen"
        options={{
          title: "",
          tabBarActiveTintColor: Colors.training.primary,
          tabBarIcon: ({ color }) => (
            <MaterialCommunityIcons name="dumbbell" size={28} color={color} />
          ),
        }}
      />

      <Tabs.Screen
        name="NutritionScreen"
        options={{
          title: "",
          tabBarActiveTintColor: Colors.nutrition.primary,
          tabBarIcon: ({ color }) => (
            <Ionicons name="leaf" size={28} color={color} />
          ),
        }}
      />

      <Tabs.Screen
        name="SocialScreen"
        options={{
          title: "",
          tabBarActiveTintColor: Colors.social.primary,
          tabBarIcon: ({ color }) => (
            <Ionicons name="chatbubbles-outline" size={28} color={color} />
          ),
        }}
      />

      <Tabs.Screen
        name="ProfileScreen"
        options={{
          title: "",
          tabBarActiveTintColor: Colors.status.secondaryLight,
          tabBarIcon: ({ color }) => (
            <Ionicons name="person" size={28} color={color} />
          ),
        }}
      />
    </Tabs>
  );
}