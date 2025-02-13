import React from "react";
import { StyleSheet, View, Pressable } from "react-native";
import { ThemedText } from "@/components/ThemedText";
import { ThemedView } from "@/components/ThemedView";
import { MaterialIcons } from "@expo/vector-icons";
import { router } from "expo-router";

type IconName = keyof typeof MaterialIcons.glyphMap;

export default function WelcomeScreen() {
  const tips = [
    {
      icon: "local-bar" as IconName,
      text: "Buy a drink to Direct Message a person that you like",
    },
    {
      icon: "swipe" as IconName,
      text: "Swipe to browsing between users",
    },
    {
      icon: "touch-app" as IconName,
      text: "Double-tap to drop a Like",
    },
  ];

  return (
    <ThemedView style={styles.container}>
      <View style={styles.header}>
        <ThemedText style={styles.title}>Welcome to Lovebird</ThemedText>
        <ThemedText style={styles.subtitle}>
          HERE IS THE TIPS TO ENJOY MAKING FRIEND ON LOVEBIRD
        </ThemedText>
      </View>

      <View style={styles.tipsContainer}>
        {tips.map((tip, index) => (
          <View key={index} style={styles.tipItem}>
            <View style={styles.iconContainer}>
              <MaterialIcons name={tip.icon} size={24} color="#FFFFFF" />
            </View>
            <ThemedText style={styles.tipText}>{tip.text}</ThemedText>
          </View>
        ))}
      </View>

      <Pressable style={styles.button} onPress={() => router.push("/sign-in")}>
        <ThemedText style={styles.buttonText}>GETTING STARTED</ThemedText>
      </Pressable>
    </ThemedView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#000000",
    padding: 24,
  },
  header: {
    marginTop: 60,
    marginBottom: 40,
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    color: "#FFFFFF",
    marginBottom: 8,
    textAlign: "center",
  },
  subtitle: {
    fontSize: 12,
    color: "#666666",
    textAlign: "center",
    letterSpacing: 0.5,
  },
  tipsContainer: {
    gap: 16,
  },
  tipItem: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#1A1B1E",
    borderRadius: 12,
    padding: 16,
    gap: 16,
  },
  iconContainer: {
    width: 40,
    height: 40,
    borderRadius: 20,
    backgroundColor: "#2A2B2E",
    justifyContent: "center",
    alignItems: "center",
  },
  tipText: {
    flex: 1,
    color: "#FFFFFF",
    fontSize: 14,
  },
  button: {
    backgroundColor: "#8B5CF6",
    borderRadius: 25,
    padding: 16,
    alignItems: "center",
    height: 56,
    justifyContent: "center",
    marginTop: "auto",
    marginBottom: 24,
  },
  buttonText: {
    color: "#FFFFFF",
    fontSize: 16,
    fontWeight: "600",
    letterSpacing: 1,
  },
});
