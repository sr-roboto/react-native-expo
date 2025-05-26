import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NavigationContainer } from '@react-navigation/native';
import CharactersScreen from '../onepiece/CharactersScreen';
import FruitsScreen from '../onepiece/FruitsScreen';

const Tab = createBottomTabNavigator();

const DashboardScreen = () => {
  return (
    <NavigationContainer>
      <Tab.Navigator>
        <Tab.Screen name="Characters" component={CharactersScreen} />
        <Tab.Screen name="Fruits" component={FruitsScreen} />
      </Tab.Navigator>
    </NavigationContainer>
  );
};

export default DashboardScreen;
