import React, { useState, useEffect } from 'react';
import { View, Text, FlatList, ActivityIndicator } from 'react-native';
import FruitCard from '../../components/FruitCard';
import { Fruit } from '../../types/index';

const FruitsScreen = () => {
  const [fruits, setFruits] = React.useState<Fruit[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  const fruitsData = async () => {
    try {
      setLoading(true);

      const response = await fetch('https://api.api-onepiece.com/v2/fruits/en');

      if (!response.ok) {
        throw new Error('Error al cargar los datos de las frutas');
      }
      const data = await response.json();
      setFruits(data);
      setError(null);
    } catch (error) {
      setError(error instanceof Error ? error.message : 'Error desconocido');
    }
  };

  useEffect(() => {
    fruitsData();
  }, []);

  return (
    <View style={{ flex: 1, padding: 16 }}>
      <FlatList
        data={fruits}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item }) => (
          <FruitCard
            name={item.roman_name}
            type={item.type}
            image={item.filename}
          />
        )}
      />
    </View>
  );
};

export default FruitsScreen;
