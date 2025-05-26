import React, { useState } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import Input from '../../components/common/Input';
import Button from '../../components/common/Button';

interface LoginScreenProps {
  navigation: any;
  onLogin: () => void; // Ahora es requerida
}

const LoginScreen: React.FC<LoginScreenProps> = ({ onLogin }) => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = () => {
    // Login hardcodeado - cualquier texto funciona
    if (username.trim() && password.trim()) {
      console.log('Iniciar sesión con:', username, password);
      onLogin();
    } else {
      alert('Por favor completa ambos campos');
    }
  };

  return (
    <View style={styles.container}>
      <View style={styles.loginBox}>
        <Text style={styles.title}>🏴‍☠️ One Piece Login</Text>
        <Text style={styles.subtitle}>¡Únete a la tripulación!</Text>

        <Input
          placeholder="Nombre de pirata"
          value={username}
          onChangeText={setUsername}
        />

        <Input
          placeholder="Contraseña secreta"
          value={password}
          onChangeText={setPassword}
          secureTextEntry
        />

        <Button title="⚓ Zarpar" onPress={handleLogin} />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#1e3a8a',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 20,
  },
  loginBox: {
    width: '100%',
    maxWidth: 350,
    backgroundColor: 'rgba(255, 255, 255, 0.95)',
    borderRadius: 20,
    padding: 30,
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 10 },
    shadowOpacity: 0.3,
    shadowRadius: 20,
    elevation: 10,
  },
  title: {
    fontSize: 28,
    fontWeight: 'bold',
    marginBottom: 10,
    color: '#1e3a8a',
    textAlign: 'center',
  },
  subtitle: {
    fontSize: 16,
    color: '#666',
    marginBottom: 20,
    textAlign: 'center',
  },
});

export default LoginScreen;
