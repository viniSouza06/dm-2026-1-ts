import { ScrollView, StyleSheet, Text, View } from "react-native";

const news = [
  { title: "Manutenção Preventiva", content: "Manutenção no elevador social amanhã às 10h.", date: "19/03/2026 - 09:00" },
  { title: "Assembleia Geral", content: "Reunião de condomínio na próxima sexta-feira.", date: "18/03/2026 - 14:30" },
  { title: "Nova Portaria", content: "Novo sistema de segurança ativado na portaria.", date: "17/03/2026 - 08:15" },
];

export function ScrollViewApp({ isDarkMode }: { isDarkMode: boolean }) {

  const textColor = isDarkMode ? "#ffffff" : "#333333";
  const cardColor = isDarkMode ? "#1e1e1e" : "#ffffff";
  const dateColor = isDarkMode ? "#aaaaaa" : "#666666";

  return (
    <ScrollView style={styles.container}>
      {news.map((item, index) => (
        <View key={index} style={[styles.card, { backgroundColor: cardColor }]}>
          <Text style={[styles.cardTitle, { color: textColor }]}>{item.title}</Text>
          <Text style={{ color: textColor }}>{item.content}</Text>
          <Text style={[styles.cardDate, { color: dateColor }]}>{item.date}</Text>
        </View>
      ))}
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: { paddingHorizontal: 20, flex: 1 },
  card: { padding: 15, borderRadius: 8, marginBottom: 10, elevation: 2 },
  cardTitle: { fontSize: 16, fontWeight: "bold", marginBottom: 5 },
  cardDate: { fontSize: 12, marginTop: 10, textAlign: "right" }
});