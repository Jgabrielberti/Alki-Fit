import { useState, useEffect } from "react";
import { StyleSheet, View, Pressable, Text, ScrollView } from "react-native";
import { useRouter } from "expo-router";
import { Colors } from "@/src/constants/theme";
import { AppBackground } from "@/src/components/generic/AppBackground";
import { WorkoutRepository } from "@/src/repositories/WorkoutRepository";
import { TrainingCalendar } from "@/src/components/calendar/TrainingCalendar";
import { TrainingLogsMonthlyStats } from "@/src/components/calendar/TrainingLogsMonthlyStats";

export default function StatusScreen() {
  const router = useRouter();
    const [selectedDate, setSelectedDate] = useState<Date | null>(null);
    const [trainingDays, setTrainingDays] = useState<string[]>([]);
  
    useEffect(() => {
        async function loadData() {
          const days = await WorkoutRepository.getTrainingDays();
          setTrainingDays(days);
        }
        loadData();
      }, []);
    
      const handleDayPress = (date: Date) => {
        const dateString : string = date.toString();
        setSelectedDate(date);
        router.push({
          pathname:'/TrainingNotesScreen',
          params: { date: dateString },
        })
      };
  
    return (
      <AppBackground colors={["#460011", "#2c000b", "#180006"]}>
        <ScrollView
          contentContainerStyle={styles.scrollContent}
          style={styles.scrollView}
        >{/*
          <TrainingCalendar
            trainingDays={trainingDays}
            onDayPress={handleDayPress}
          />
  
          <TrainingLogsMonthlyStats
            date={selectedDate}
          />
        */}
        <Pressable onPress={() => {router.push("/RegisterPreviewScreen")}} style={styles.devButton}>
          <Text style={styles.devButtonText}>Tela de Registro</Text>
        </Pressable>
        </ScrollView>
      </AppBackground>
    );
  }
  
  const styles = StyleSheet.create({
    scrollView: {
      flex: 1,
    },
    scrollContent: {
      alignItems: "center",
    },
    closeButton: {
      backgroundColor: "transparent",
    },
    closeButtonIcon: {
      color: Colors.training.primaryDark1,
    },
    dateText: {
      fontSize: 16,
      color: Colors.text.secondary,
    },
    devButton: {
      backgroundColor: Colors.background,
      padding: 12,
      height: 50,
      justifyContent: "center",
      alignItems: "center",
      marginTop: 60,
    },
    devButtonText: {
      color: Colors.status.secondary,
      fontSize: 14,
    },
  });
  
  