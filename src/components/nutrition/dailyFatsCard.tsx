import { Pressable, StyleSheet, Text, View } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { useRouter } from "expo-router";
import { Colors } from "@/src/constants/theme";

export type DailyFatsCardProps = {
  fatsConsumed?: number;
  fatsGoal?: number;
};

export default function DailyFatsCard({
  fatsConsumed = 0,
  fatsGoal = 0,
}: DailyFatsCardProps) {
  const router = useRouter();

  const fatsRemaining = Math.max(fatsGoal - fatsConsumed, 0);
  const fatsProgress =
    fatsGoal > 0 ? Math.min(fatsConsumed / fatsGoal, 1) : 0;

  return (
    <View style={styles.card}>
      <View style={styles.titleRow}>
        <View style={styles.cardHeader}>
          <View style={styles.badge}></View>
          <Text style={styles.title}>Gorduras</Text>
        </View>
        <Pressable
          onPress={() => router.push("/NutritionGoalsScreen")}
          hitSlop={8}
        >
          <Ionicons
            name="pencil-outline"
            size={18}
            color={Colors.text.secondary}
          />
        </Pressable>
      </View>

      <View style={styles.valueRow}>
        <View style={styles.valueGroup}>
          <Text style={styles.primaryValue}>{fatsConsumed}g</Text>
          <Text style={styles.secondaryValue}> / {fatsGoal || "--"}{fatsGoal > 0 ? "g" : ""}</Text>
        </View>

        <View style={styles.valueGroup}>
          <Text style={styles.primaryValue}>{fatsRemaining}</Text>
          <Text style={styles.secondaryValue}> Restantes</Text>
        </View>
      </View>

      <View style={styles.progressTrack}>
        <View
          style={[styles.progressFill, { width: `${fatsProgress * 100}%` }]}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  card: {
    width: "100%",
    backgroundColor: Colors.background,
    borderRadius: 18,
    paddingHorizontal: 18,
    paddingVertical: 16,
  },
  titleRow: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    marginBottom: 11,
  },
  cardHeader: {
    flexDirection: "row",
    alignItems: "center",
  },
  title: {
    color: Colors.text.primary,
    fontSize: 15,
    fontWeight: "600",
  },
  badge: {
    width: 10,
    height: 10,
    borderRadius: 5,
    backgroundColor: Colors.profile.primary,
    marginRight: 8,
  },
  valueRow: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
  valueGroup: {
    flexDirection: "row",
    alignItems: "baseline",
  },
  primaryValue: {
    color: Colors.text.primary,
    fontSize: 27,
    fontWeight: "700",
  },
  secondaryValue: {
    color: Colors.text.secondary,
    fontSize: 14,
    fontWeight: "500",
  },
  progressTrack: {
    width: "100%",
    height: 8,
    backgroundColor: "#383838",
    borderRadius: 999,
    overflow: "hidden",
    marginTop: 16,
  },
  progressFill: {
    height: "100%",
    backgroundColor: Colors.profile.primary,
    borderRadius: 999,
  },
});
