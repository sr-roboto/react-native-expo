import React from 'react';
import { View, Text, FlatList, StyleSheet, ListRenderItem } from 'react-native';
import CharacterCard from '../../components/CharacterCard';
import { Character } from '../../types/index';

const charactersData: Character[] = [
  {
    id: 1,
    name: 'Monkey D. Luffy',
    description: 'Captain of the Straw Hat Pirates',
  },
  {
    id: 2,
    name: 'Roronoa Zoro',
    description: 'Swordsman of the Straw Hat Pirates',
  },
  { id: 3, name: 'Nami', description: 'Navigator of the Straw Hat Pirates' },
  { id: 4, name: 'Usopp', description: 'Sniper of the Straw Hat Pirates' },
  { id: 5, name: 'Sanji', description: 'Cook of the Straw Hat Pirates' },
];

const CharactersScreen = () => {
  const renderItem: ListRenderItem<Character> = ({ item }) => (
    <CharacterCard name={item.name} description={item.description} />
  );

  return (
    <View style={styles.container}>
      <Text style={styles.title}>One Piece Characters</Text>
      <FlatList
        data={charactersData}
        renderItem={renderItem}
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
