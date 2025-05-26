import React, { useState } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import Input from '../../components/common/Input';
import Button from '../../components/common/Button';

const RegisterScreen = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleRegister = () => {
    // Aquí se manejaría la lógica de registro
    console.log('Usuario registrado:', username);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Registro</Text>
      <Input
        placeholder="Nombre de usuario"
        value={username}
        onChangeText={setUsername}
      />
      <Input
        placeholder="Contraseña"
        value={password}
        onChangeText={setPassword}
        secureTextEntry
      />
      <Button title="Registrarse" onPress={handleRegister} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    padding: 16,
    backgroundColor: '#fff',
  },
  title: {
    fontSize: 24,
    marginBottom: 20,
    textAlign: 'center',
  },
});

export default RegisterScreen;
