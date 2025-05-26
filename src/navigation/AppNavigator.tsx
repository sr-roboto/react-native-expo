import React, { useState } from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import LoginScreen from '../screens/auth/LoginScreen';
import TabNavigator from './TabNavigator';

const Stack = createStackNavigator();

export default function AppNavigator() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const handleLogin = () => {
    console.log('Login exitoso');
    setIsLoggedIn(true);
  };

  const handleLogout = () => {
    console.log('Cerrando sesión...');
    setIsLoggedIn(false);
  };

  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      {!isLoggedIn ? (
        <Stack.Screen name="Login">
          {({ navigation }) => (
            <LoginScreen navigation={navigation} onLogin={handleLogin} />
          )}
        </Stack.Screen>
      ) : (
        <Stack.Screen name="Main">
          {() => <TabNavigator onLogout={handleLogout} />}
        </Stack.Screen>
      )}
    </Stack.Navigator>
  );
}
