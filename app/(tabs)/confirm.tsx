import React, { useState } from "react";
import { StyleSheet, View, TextInput, Pressable, Image } from "react-native";
import { ThemedText } from "@/components/ThemedText";
import { ThemedView } from "@/components/ThemedView";
import { Ionicons } from "@expo/vector-icons";

export default function ConfirmInfoScreen() {
  const [username, setUsername] = useState("lovefish49");
  const [age, setAge] = useState("18");

  return (
    <ThemedView style={styles.container}>
      <Pressable style={styles.closeButton}>
        <Ionicons name="close" size={24} color="#FFFFFF" />
      </Pressable>

      <ThemedText style={styles.title}>
        Confirm your{"\n"}personal information
      </ThemedText>

      <View style={styles.avatarContainer}>
        <Image
          source={require("@/assets/images/react-logo.png")}
          style={styles.avatar}
        />
        <View style={styles.cameraButton}>
          <Ionicons name="camera" size={16} color="#FFFFFF" />
        </View>
      </View>

      <View style={styles.inputContainer}>
        <ThemedText style={styles.label}>USERNAME</ThemedText>
        <TextInput
          style={styles.input}
          value={username}
          onChangeText={setUsername}
          placeholderTextColor="#666"
        />
      </View>

      <View style={styles.inputContainer}>
        <ThemedText style={styles.label}>AGE</ThemedText>
        <TextInput
          style={styles.input}
          value={age}
          onChangeText={setAge}
          keyboardType="numeric"
          placeholderTextColor="#666"
        />
      </View>

      <Pressable style={styles.confirmButton}>
        <ThemedText style={styles.confirmText}>CONFIRM</ThemedText>
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
  closeButton: {
    position: "absolute",
    top: 48,
    right: 24,
    zIndex: 1,
  },
  title: {
    fontSize: 28,
    fontWeight: "600",
    color: "#FFFFFF",
    textAlign: "center",
    marginTop: 60,
    marginBottom: 32,
    lineHeight: 34,
  },
  avatarContainer: {
    alignSelf: "center",
    marginBottom: 40,
    position: "relative",
  },
  avatar: {
    width: 100,
    height: 100,
    borderRadius: 50,
    backgroundColor: "#333",
  },
  cameraButton: {
    position: "absolute",
    right: 0,
    bottom: 0,
    backgroundColor: "#8B5CF6",
    width: 32,
    height: 32,
    borderRadius: 16,
    justifyContent: "center",
    alignItems: "center",
  },
  inputContainer: {
    marginBottom: 24,
  },
  label: {
    color: "#666",
    fontSize: 12,
    marginBottom: 8,
    fontWeight: "500",
  },
  input: {
    backgroundColor: "#111111",
    borderRadius: 8,
    padding: 16,
    color: "#FFFFFF",
    fontSize: 16,
    borderBottomWidth: 1,
    borderBottomColor: "#8B5CF6",
  },
  confirmButton: {
    backgroundColor: "#8B5CF6",
    borderRadius: 25,
    padding: 16,
    alignItems: "center",
    marginTop: "auto",
    marginBottom: 24,
  },
  confirmText: {
    color: "#FFFFFF",
    fontSize: 16,
    fontWeight: "600",
  },
});
