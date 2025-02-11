import React, { useState } from "react";
import { StyleSheet, View, TextInput } from "react-native";
import { ThemedText } from "@/components/ThemedText";
import { ThemedView } from "@/components/ThemedView";
import Checkbox from "expo-checkbox";

export default function SignInTab() {
  const [email, setEmail] = useState("");
  const [isChecked, setIsChecked] = useState(false);

  return (
    <ThemedView style={styles.container}>
      <ThemedText style={styles.title}>What's your email address?</ThemedText>

      <ThemedText style={styles.subtitle}>
        We only need your email to sign you in. We keep your email private and
        won't send spam.
      </ThemedText>

      <TextInput
        style={styles.input}
        placeholder="Enter your email"
        placeholderTextColor="#666"
        value={email}
        onChangeText={setEmail}
        keyboardType="email-address"
        autoCapitalize="none"
      />

      <View style={styles.checkboxContainer}>
        <Checkbox
          value={isChecked}
          onValueChange={setIsChecked}
          color={isChecked ? "#8B5CF6" : undefined}
          style={styles.checkbox}
        />
        <ThemedText style={styles.checkboxText}>
          I agree to the{" "}
          <ThemedText style={styles.link}>Terms of Service</ThemedText> and{" "}
          <ThemedText style={styles.link}>Privacy Policy</ThemedText>
        </ThemedText>
      </View>
    </ThemedView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 24,
    backgroundColor: "#1A1B1E",
    justifyContent: "center",
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    color: "#FFFFFF",
    marginBottom: 12,
  },
  subtitle: {
    fontSize: 16,
    color: "#9CA3AF",
    marginBottom: 24,
  },
  input: {
    backgroundColor: "#2A2B2E",
    borderRadius: 8,
    padding: 16,
    color: "#FFFFFF",
    fontSize: 16,
    marginBottom: 24,
  },
  checkboxContainer: {
    flexDirection: "row",
    alignItems: "flex-start",
    gap: 12,
  },
  checkbox: {
    marginTop: 4,
  },
  checkboxText: {
    flex: 1,
    color: "#9CA3AF",
    fontSize: 14,
  },
  link: {
    color: "#8B5CF6",
    textDecorationLine: "underline",
  },
});
