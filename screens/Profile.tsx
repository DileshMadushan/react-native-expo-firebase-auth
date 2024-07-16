// screens/Profile.tsx
import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { NativeStackScreenProps } from '@react-navigation/native-stack';

type RootStackParamList = {
    Profile: undefined;
    Login: undefined;
};

type Props = NativeStackScreenProps<RootStackParamList, 'Profile'>;

const Profile = ({ navigation }: Props) => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>My App</Text>
      <View style={styles.infoContainer}>
        <Text style={styles.label}>Name</Text>
        <Text style={styles.value}>Example Application</Text>
      </View>
      <View style={styles.infoContainer}>
        <Text style={styles.label}>Email</Text>
        <Text style={styles.value}>example@app.com</Text>
      </View>
      <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('Login')}>
        <Text style={styles.buttonText}>Log out</Text>
      </TouchableOpacity>
    </View>
  );
};

export default Profile;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#000',
    padding: 20,
  },
  title: {
    color: '#fff',
    fontSize: 24,
    marginBottom: 20,
  },
  infoContainer: {
    width: '100%',
    backgroundColor: '#333',
    padding: 15,
    borderRadius: 4,
    marginBottom: 10,
  },
  label: {
    color: '#aaa',
    fontSize: 14,
    marginBottom: 5,
  },
  value: {
    color: '#fff',
    fontSize: 18,
  },
  button: {
    width: '100%',
    height: 50,
    backgroundColor: '#FFC107',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 4,
    marginVertical: 10,
  },
  buttonText: {
    color: '#000',
    fontSize: 18,
  },
});
