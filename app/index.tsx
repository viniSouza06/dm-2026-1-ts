import React, { useState } from "react";
import { StyleSheet, Text, View, Switch, ActivityIndicator } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { ScrollViewApp } from "@/components/ScrollViewApp";

export default function Index() {
  const [isDarkMode, setIsDarkMode] = useState(false);
  const toggleSwitch = () => setIsDarkMode((previousState) => !previousState);

  const backgroundColor = isDarkMode ? "#121212" : "#f5f5f5";
  const textColor = isDarkMode ? "#ffffff" : "#333333";

  return (
    <SafeAreaView style={[styles.container, { backgroundColor }]}>
      
      <View style={styles.header}>
        <View>
          <Text style={[styles.title, { color: textColor }]}>Painel do Elevador</Text>
          <View style={styles.loadingContainer}>
            <ActivityIndicator size="small" color="#4caf50" />
            <Text style={{ color: textColor, fontSize: 12, marginLeft: 5 }}>Atualização em andamento...</Text>
          </View>
        </View>

        <View style={styles.switchContainer}>
          <Text style={{ color: textColor }}>Modo Escuro</Text>
          <Switch
            trackColor={{ false: "#767577", true: "#81b0ff" }}
            thumbColor={isDarkMode ? "#f5dd4b" : "#f4f3f4"}
            onValueChange={toggleSwitch}
            value={isDarkMode}
          />
        </View>
      </View>

      <View style={styles.updateBanner}>
        <Text style={styles.updateText}>✅ Sistema Atualizado!</Text>
      </View>

    
      <ScrollViewApp isDarkMode={isDarkMode} />

    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1 },
  header: { flexDirection: "row", justifyContent: "space-between", alignItems: "center", padding: 20 },
  title: { fontSize: 20, fontWeight: "bold" },
  loadingContainer: { flexDirection: "row", alignItems: "center", marginTop: 5 },
  switchContainer: { flexDirection: "row", alignItems: "center", gap: 10 },
  updateBanner: { backgroundColor: "#4caf50", padding: 10, alignItems: "center", marginHorizontal: 20, borderRadius: 8, marginBottom: 15 },
  updateText: { color: "#fff", fontWeight: "bold" },
});