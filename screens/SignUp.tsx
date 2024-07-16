// screens/SignUp.tsx
import React, { useState } from 'react';
import { View, Text, TextInput, StyleSheet, TouchableOpacity, ActivityIndicator } from 'react-native';
import { FIREBASE_AUTH } from '../FirebaseConfig';
import { createUserWithEmailAndPassword } from 'firebase/auth';
import { NativeStackScreenProps } from '@react-navigation/native-stack';

type RootStackParamList = {
    Login: undefined;
    SignUp: undefined;
};

type Props = NativeStackScreenProps<RootStackParamList, 'SignUp'>;

const SignUp = ({ navigation }: Props) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [name, setName] = useState('');
  const [loading, setLoading] = useState(false);
  const [passwordValidation, setPasswordValidation] = useState({
    lowercase: false,
    uppercase: false,
    number: false,
    minLength: false,
  });

  const validatePassword = (password: string) => {
    const lowercase = /[a-z]/.test(password);
    const uppercase = /[A-Z]/.test(password);
    const number = /\d/.test(password);
    const minLength = password.length >= 8;
    setPasswordValidation({ lowercase, uppercase, number, minLength });
  };

  const signUp = async () => {
    if (password !== confirmPassword) {
      alert('Passwords do not match');
      return;
    }
    setLoading(true);
    try {
      await createUserWithEmailAndPassword(FIREBASE_AUTH, email, password);
      navigation.navigate('Login');
    } catch (error: any) {
      alert('Sign up failed: ' + error.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>My App</Text>
      <TextInput
        value={name}
        style={styles.input}
        placeholder="Name"
        autoCapitalize="none"
        onChangeText={setName}
      />
      <TextInput
        value={email}
        style={styles.input}
        placeholder="Email Address"
        autoCapitalize="none"
        onChangeText={setEmail}
      />
      <TextInput
        value={password}
        style={styles.input}
        placeholder="Password"
        autoCapitalize="none"
      
        secureTextEntry
        onChangeText={(text) => {
          setPassword(text);
          validatePassword(text);
        }}
      />
      <TextInput
        value={confirmPassword}
        style={styles.input}
        placeholder="Confirm Password"
        autoCapitalize="none"
        secureTextEntry
        onChangeText={setConfirmPassword}
      />
      <View style={styles.validationContainer}>
        <Text style={passwordValidation.lowercase ? styles.valid : styles.invalid}>
          ✓ One lowercase character
        </Text>
        <Text style={passwordValidation.uppercase ? styles.valid : styles.invalid}>
          ✓ One uppercase character
        </Text>
        <Text style={passwordValidation.number ? styles.valid : styles.invalid}>
          ✓ One number
        </Text>
        <Text style={passwordValidation.minLength ? styles.valid : styles.invalid}>
          ✓ 8 characters minimum
        </Text>
      </View>
      {loading ? (
        <ActivityIndicator size="large" color="#FFC107" />
      ) : (
        <>
          <TouchableOpacity style={styles.button} onPress={signUp}>
            <Text style={styles.buttonText}>Sign Up</Text>
          </TouchableOpacity>
          <Text style={styles.signupText}>
            Have an account?{' '}
            <Text style={styles.signupLink} onPress={() => navigation.navigate('Login')}>
              Sign In
            </Text>
          </Text>
        </>
      )}
    </View>
  );
};

export default SignUp;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#1c1c1c',
    padding: 20,
  },
  title: {
    color: '#fff',
    fontSize: 24,
    marginBottom: 20,
  },
  input: {
    width: '100%',
    marginVertical: 8,
    height: 50,
    borderWidth: 1,
    borderRadius: 10,
    padding: 10,
    backgroundColor: '#333',
    color: '#fff',
  },
  button: {
    width: '100%',
    height: 50,
    backgroundColor: '#FFC107',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 10,
    marginVertical: 20,
  },
  buttonText: {
    color: '#000',
    fontSize: 18,
  },
  signupText: {
    color: '#fff',
  },
  signupLink: {
    color: '#FFC107',
  },
  validationContainer: {
    alignItems: 'flex-start',
    width: '100%',
  },
  valid: {
    color: 'green',
    marginVertical: 2,
  },
  invalid: {
    color: 'white',
    marginVertical: 2,
  },
});
