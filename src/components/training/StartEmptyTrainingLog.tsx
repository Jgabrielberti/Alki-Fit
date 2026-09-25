import { StyleSheet, View, Pressable, Text } from "react-native";
import { BlurView } from "expo-blur";
import { useRouter } from "expo-router";
import { Colors } from "@/src/constants/theme";

export function StartEmptyTrainingLog() {
  const router = useRouter();

  return (
    <View style={styles.wrapper}>
      <BlurView intensity={100} tint="systemMaterialDark" style={styles.container}>
        <Pressable
          style={styles.button}
          onPress={() => {
            router.push({ pathname: "/TrainingStructuredNotesScreen" });
          }}
        >
          <Text style={styles.buttonText}>Iniciar Treino Vazio</Text>
        </Pressable>
      </BlurView>
    </View>
  );
}

const styles = StyleSheet.create({
  wrapper: {
    flex: 1,
  },
  container: {
    overflow: "hidden",

    borderRadius: 20,

    borderWidth: 1,
    borderBottomWidth: 5,
    borderColor: Colors.training.secondary,

    paddingVertical: 18,
    marginHorizontal: 24,
    marginBottom: 32,
  },
  button: {
    justifyContent: "center",
    alignItems: "center",
    
    width: "100%",    
  },
  buttonText: {
    fontSize: 24,
    color: Colors.text.primary,
    fontWeight: "bold",
  },
});
