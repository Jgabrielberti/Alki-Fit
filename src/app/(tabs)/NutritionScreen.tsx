import { ScrollView, StyleSheet, View } from "react-native";
import { AppBackground } from "@/src/components/generic/AppBackground";
import { Colors } from "@/src/constants/theme";

import WeekDays from "@/src/components/nutrition/weekDays";
import MealsCards from "@/src/components/nutrition/mealsCards";
import DailyCaloriesCard from "@/src/components/nutrition/dailyCaloriesCard";
import DailyProteinCard from "@/src/components/nutrition/dailyProteinCard";
import DailyFatsCard from "@/src/components/nutrition/dailyFatsCard";
import DailyCarbohydratesCard from "@/src/components/nutrition/dailyCarbohydratesCard";

export default function NutritionScreen() {
  return (
    <AppBackground colors={["#3B0764", "#1d0331", "#0e0118"]}>
      <ScrollView
        style={styles.screen}
        contentContainerStyle={styles.content}
        showsVerticalScrollIndicator={false}
      >
        <WeekDays />

        <View style={styles.sectionSpacing}>
          <DailyCaloriesCard />
          <DailyProteinCard />
          <DailyFatsCard />
          <DailyCarbohydratesCard />
        </View>

        <View style={styles.sectionSpacing}>
          <MealsCards />
        </View>

      </ScrollView>
    </AppBackground>
  );
}

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    marginTop: 60,
  },
  content: {
    paddingHorizontal: 16,
    paddingTop: 12,
    paddingBottom: 28,
    backgroundColor: "transparent",
  },
  sectionSpacing: {
    marginTop: 32,
    gap: 16,
    backgroundColor: "transparent",
  },
});
