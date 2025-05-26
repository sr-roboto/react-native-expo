import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import DashboardScreen from '../screens/dashboard/DashboardScreen';
import CharactersScreen from '../screens/onepiece/CharactersScreen';
import FruitsScreen from '../screens/onepiece/FruitsScreen';
import { Ionicons } from '@expo/vector-icons';

const Tab = createBottomTabNavigator();

interface TabNavigatorProps {
  onLogout: () => void;
}

const TabNavigator: React.FC<TabNavigatorProps> = ({ onLogout }) => {
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        tabBarIcon: ({ focused, color, size }) => {
          let iconName: keyof typeof Ionicons.glyphMap = 'ellipse';

          if (route.name === 'Inicio') {
            iconName = focused ? 'home' : 'home-outline';
          } else if (route.name === 'Personajes') {
            iconName = focused ? 'people' : 'people-outline';
          } else if (route.name === 'Frutas') {
            iconName = focused ? 'leaf' : 'leaf-outline';
          }

          return <Ionicons name={iconName} size={size} color={color} />;
        },
        tabBarActiveTintColor: '#FF6B35',
        tabBarInactiveTintColor: 'gray',
        headerStyle: {
          backgroundColor: '#2C3E50',
        },
        headerTintColor: '#fff',
        headerTitleStyle: {
          fontWeight: 'bold',
        },
      })}
    >
      <Tab.Screen name="Inicio">
        {() => <DashboardScreen onLogout={onLogout} />}
      </Tab.Screen>
      <Tab.Screen name="Personajes" component={CharactersScreen} />
      <Tab.Screen name="Frutas" component={FruitsScreen} />
    </Tab.Navigator>
  );
};

export default TabNavigator;
