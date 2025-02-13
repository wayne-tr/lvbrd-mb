import { View, StyleSheet, Pressable } from "react-native";
import { ThemedText } from "@/components/ThemedText";
import { router } from "expo-router";
import { MaterialIcons } from "@expo/vector-icons";

export default function HomeScreen() {
  return (
    <View style={styles.container}>
      <ThemedText style={styles.title}>Welcome to Lovebird</ThemedText>

      <View style={styles.genderCard}>
        <Pressable
          style={styles.genderHalf}
          onPress={() => router.push("/sign-in")}
        >
          <MaterialIcons name="male" size={40} color="#8B5CF6" />
        </Pressable>

        <View style={styles.divider} />

        <Pressable
          style={styles.genderHalf}
          onPress={() => router.push("/sign-in")}
        >
          <MaterialIcons name="female" size={40} color="#8B5CF6" />
        </Pressable>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#000000",
    padding: 24,
    alignItems: "center",
    justifyContent: "center",
  },
  title: {
    fontSize: 24,
    fontWeight: "600",
    color: "#FFFFFF",
    marginBottom: 40,
  },
  genderCard: {
    width: "100%",
    aspectRatio: 1,
    backgroundColor: "#1A1B1E",
    borderRadius: 16,
    flexDirection: "row",
    overflow: "hidden",
  },
  genderHalf: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  divider: {
    width: 1,
    backgroundColor: "#333",
    transform: [{ rotate: "45deg" }],
    position: "absolute",
    top: 0,
    left: "50%",
    height: "141.4%", // to account for rotation
  },
});
