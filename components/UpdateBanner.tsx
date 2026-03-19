import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

export function UpdateBanner() {
  return (
    <View style={styles.updateBanner}>
      <Text style={styles.updateText}>⚠️ Atualização em Andamento...</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  updateBanner: {
    backgroundColor: '#ffcc00',
    padding: 10,
    alignItems: 'center',
    marginHorizontal: 20,
    borderRadius: 8,
    marginBottom: 15,
    marginTop: 15,
  },
  updateText: {
    color: '#000',
    fontWeight: 'bold',
  },
});