import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NavigationContainer } from '@react-navigation/native';
import DashboardScreen from '../screens/dashboard/DashboardScreen';
import CharactersScreen from '../screens/onepiece/CharactersScreen';
import FruitsScreen from '../screens/onepiece/FruitsScreen';
import { Ionicons } from '@expo/vector-icons';

const Tab = createBottomTabNavigator();

const TabNavigator = () => {
  return (
    <NavigationContainer>
      <Tab.Navigator
        screenOptions={({ route }) => ({
          tabBarIcon: ({ focused, color, size }) => {
            let iconName;

            if (route.name === 'Inicio') {
              iconName = focused ? 'home' : 'home-outline';
            } else if (route.name === 'Personajes') {
              iconName = focused ? 'people' : 'people-outline';
            } else if (route.name === 'Frutas') {
              iconName = focused ? 'leaf' : 'leaf-outline';
            }

            return <Ionicons name={iconName} size={size} color={color} />;
          },
        })}
      >
        <Tab.Screen name="Inicio" component={DashboardScreen} />
        <Tab.Screen name="Personajes" component={CharactersScreen} />
        <Tab.Screen name="Frutas" component={FruitsScreen} />
      </Tab.Navigator>
    </NavigationContainer>
  );
};

export default TabNavigator;
