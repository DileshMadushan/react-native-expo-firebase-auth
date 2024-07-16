// screens/Splash.tsx
import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const Splash = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>My App</Text>
    </View>
  );
};

export default Splash;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#000',
  },
  title: {
    color: '#fff',
    fontSize: 24,
  },
});
