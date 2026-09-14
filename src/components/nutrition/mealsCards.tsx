import { StyleSheet, Text, Pressable, View } from "react-native";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { Ionicons } from "@expo/vector-icons";
import { router } from "expo-router";
import { Colors } from "@/src/constants/theme";

type MealType = "breakfast" | "lunch" | "afternoonSnack" | "dinner" | "snacks";

type Meal = {
  key: MealType;
  title: string;
  icon: keyof typeof MaterialCommunityIcons.glyphMap;
};

const MEALS: Meal[] = [
  { key: "breakfast", title: "Café da Manhã", icon: "coffee-outline" },
  { key: "lunch", title: "Almoço", icon: "silverware-fork-knife" },
  { key: "afternoonSnack", title: "Café da Tarde", icon: "food-outline" },
  { key: "dinner", title: "Jantar", icon: "silverware-variant" },
  { key: "snacks", title: "Lanches", icon: "cookie-outline" },
];

export type MealsCardsProps = {
  onRegisterMeal?: (mealType: MealType) => void;
};

export default function MealsCards({ onRegisterMeal }: MealsCardsProps) {
  const handleRegisterMeal = (mealType: MealType) => {
    if (onRegisterMeal) {
      onRegisterMeal(mealType);
      return;
    }

    router.push({ pathname: "/RegisterMealScreen", params: { mealType } });
  };

  return (
    <View style={styles.wrapper}>
      {MEALS.map((meal) => (
        <View key={meal.key} style={styles.card}>
          <View style={styles.mealInfo}>
            <View style={styles.iconContainer}>
              <MaterialCommunityIcons name={meal.icon} size={26} color={Colors.nutrition.secondary} />
            </View>
            <Text style={styles.mealTitle}>{meal.title}</Text>
          </View>

          <Pressable
            style={styles.mealsButton}
            onPress={() => handleRegisterMeal(meal.key)}
          >
            <Ionicons 
              name={"chevron-forward"}
              size={24}
              color={Colors.nutrition.secondary}
            />
          </Pressable>
        </View>
      ))}
    </View>
  );
}

const styles = StyleSheet.create({
  wrapper: {
    width: "100%",
    backgroundColor: "transparent",
    gap: 10,
  },
  card: {
    minHeight: 72,
    width: "100%",
    backgroundColor: "#222222",
    borderRadius: 10,
    paddingHorizontal: 14,
    paddingVertical: 12,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
  mealInfo: {
    flex: 1,
    flexDirection: "row",
    alignItems: "center",
    gap: 12,
    paddingRight: 12,
  },
  iconContainer: {
    width: 40,
    height: 40,
    borderRadius: 12,
    backgroundColor: "transparent",
    alignItems: "center",
    justifyContent: "center",
  },
  mealTitle: {
    flexShrink: 1,
    color: Colors.text.primary,
    fontSize: 15,
    fontWeight: "600",
  },
  mealsButton: {
    minWidth: 72,
    paddingHorizontal: 14,
    paddingVertical: 9,
    borderRadius: 10,
    alignItems: "center",
    justifyContent: "center",
    
  },
});
