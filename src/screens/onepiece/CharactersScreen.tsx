import React, { useEffect, useState } from 'react';
import { View, Text, FlatList, StyleSheet, ListRenderItem } from 'react-native';
import CharacterCard from '../../components/CharacterCard';
import { Character } from '../../types/index';

const CharactersScreen = () => {
  const [characters, setCharacter] = React.useState<Character[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  const charactersData = async () => {
    try {
      setLoading(true);
      const response = await fetch(
        'https://api.api-onepiece.com/v2/characters/en'
      );

      if (!response.ok) {
        throw new Error('Error al cargar los datos de los personajes');
      }
      const data = await response.json();
      setCharacter(data);
      setError(null);
    } catch (error) {
      setError(error instanceof Error ? error.message : 'Error desconocido');
    }
    setLoading(false);
  };

  useEffect(() => {
    charactersData();
  }, []);

  return (
    <View style={styles.container}>
      <FlatList
        data={characters}
        renderItem={({ item }) => (
          <CharacterCard
            name={item.name}
            image={item.filename}
            reward={item.bounty}
            ocupation={item.job}
          />
        )}
        keyExtractor={(item) => item.id.toString()}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    backgroundColor: '#fff',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 16,
  },
});

export default CharactersScreen;
