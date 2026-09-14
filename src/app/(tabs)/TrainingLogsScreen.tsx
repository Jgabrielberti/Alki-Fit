import React, { useState, useEffect } from "react";
import {
  StyleSheet,
  View,
  ScrollView,
} from "react-native";
import { Colors } from "@/src/constants/theme";
import { useRouter } from "expo-router";
import { StartEmptyTrainingLog } from "@/src/components/training/StartEmptyTrainingLog";
import { ExistingWorkoutPlans } from "@/src/components/training/ExistingWorkoutPlans";
import { AppBackground } from "@/src/components/generic/AppBackground";

export default function TrainingLogsScreen() {

  return (
    <AppBackground colors={[Colors.training.primaryDark2, "#031d18", "#010e0b"]}>
      <ScrollView
        contentContainerStyle={styles.scrollContent}
        style={styles.scrollView}
      >
        <View style={styles.existingWorkoutPlansContainer}>
          <ExistingWorkoutPlans />
        </View>
        <View style={styles.emptyTrainingLogContainer}>
          <StartEmptyTrainingLog />
        </View>
      </ScrollView>
    </AppBackground>
  );
}

const styles = StyleSheet.create({
  scrollView: {
    flex: 1,
  },
  scrollContent: {
    justifyContent:"center",
    alignItems: "center",
  },
  emptyTrainingLogContainer: {
    width: "100%",
  },
  existingWorkoutPlansContainer: {
    marginTop: 70,
    width: "100%",
  },
});
