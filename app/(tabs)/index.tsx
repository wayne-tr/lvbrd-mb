import { View, StyleSheet, Pressable } from "react-native";
import { ThemedText } from "@/components/ThemedText";
import { router } from "expo-router";
import { MaterialIcons } from "@expo/vector-icons";

export default function HomeScreen() {
  return (
    <View style={styles.container}>
      <ThemedText style={styles.title}>Welcome</ThemedText>
      <Pressable style={styles.button} onPress={() => router.push("/sign-in")}>
        <ThemedText style={styles.buttonText}>Get Started</ThemedText>
        <MaterialIcons name="arrow-forward" size={24} color="#FFFFFF" />
      </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#000000",
    padding: 24,
    justifyContent: "space-between",
  },
  title: {
    fontSize: 32,
    fontWeight: "bold",
    color: "#FFFFFF",
    marginTop: 100,
  },
  button: {
    backgroundColor: "#8B5CF6",
    borderRadius: 25,
    padding: 16,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    marginBottom: 40,
  },
  buttonText: {
    color: "#FFFFFF",
    fontSize: 18,
    fontWeight: "600",
    marginRight: 8,
  },
});
