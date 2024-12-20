import React, { useState, useEffect } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, Alert, Image } 
from 'react-native';
import { useRouter } from 'expo-router';

// Hardcoded users
const users = [
  { username: 'user1', password: 'password1' },
  { username: 'user2', password: 'password2' },
];

const LoginScreen: React.FC = () => {
  const router = useRouter();
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [attempts, setAttempts] = useState(0);
  const [isLocked, setIsLocked] = useState(false);
  const [timer, setTimer] = useState(30);

  useEffect(() => {
    let countdown: NodeJS.Timeout;
    if (isLocked) {
      countdown = setInterval(() => {
        setTimer((prev) => {
          if (prev === 1) {
            clearInterval(countdown);
            setIsLocked(false);
            setAttempts(0);
            setTimer(30);
            return 30;
          }
          return prev - 1;
        });
      }, 1000);
    }
    return () => clearInterval(countdown);
  }, [isLocked]);

  const handleLogin = () => {
    
    if (username.trim() === '' || password.trim() === '') {
      Alert.alert('Input Error', 'Usuario y contraseña no pueden estar vacias.');
      return;
    }

    const user = users.find(
      (user) => user.username === username && user.password === password
    );

    if (user) {
      router.push('/home');
      setAttempts(0); 
    } else {
      const newAttempts = attempts + 1;
      setAttempts(newAttempts);
      
      if (newAttempts >= 3) {
        setIsLocked(true);
        Alert.alert('Muchos intentos fallidos', 'Por favor espera y vuelvelo a intentar en 30 segundos.');
      } else {
        Alert.alert('Login Failed', 'Invalid username or password');
      }
    }
  };

  return (
    <View style={styles.container}>
      <View style={styles.logoContainer}>
        <Image source={require('../assets/images/marc0_logo.png')} style={styles.logo} />
      </View>

      <Text style={styles.label}>USERNAME</Text>
      <TextInput
        style={styles.input}
        placeholder="Enter a username"
        placeholderTextColor="#aaa"
        value={username}
        onChangeText={setUsername}
        editable={!isLocked}
      />

      <Text style={styles.label}>PASSWORD</Text>
      <TextInput
        style={styles.input}
        placeholder="Enter a password"
        placeholderTextColor="#aaa"
        secureTextEntry
        value={password}
        onChangeText={setPassword}
        editable={!isLocked} 
      />

      <TouchableOpacity
        style={[styles.button, isLocked && styles.buttonDisabled]} 
        onPress={handleLogin}
        disabled={isLocked}
      >
        <Text style={styles.buttonText}>
          {isLocked ? `Wait ${timer}s` : 'LOGIN'}
        </Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#e97cb0',
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
  },
  logoContainer: {
    width: '100%',
    alignItems: 'center',
    marginBottom: 40,
  },
  logo: {
    width: '100%',
    height: 80,
    marginBottom: 40,
  },
  label: {
    fontSize: 16,
    color: '#fff',
    alignSelf: 'flex-start',
    marginLeft: '10%',
    marginBottom: 5,
  },
  input: {
    width: '80%',
    height: 50,
    backgroundColor: '#fff',
    borderRadius: 8,
    paddingHorizontal: 10,
    fontSize: 16,
    marginBottom: 20,
  },
  button: {
    width: '80%',
    height: 50,
    backgroundColor: '#fff',
    borderRadius: 8,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 20,
  },
  buttonDisabled: {
    backgroundColor: '#ccc',
  },
  buttonText: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#000',
  },
});

export default LoginScreen;
