import React from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';

interface CharacterCardProps {
  name: string;
  reward: string;
  ocupation: string;
  image: string;
}

const CharacterCard: React.FC<CharacterCardProps> = ({
  name,
  reward,
  ocupation,
  image,
}) => {
  return (
    <View style={styles.card}>
      <Image source={{ uri: `${image}` }} style={styles.image} />
      <Text style={styles.name}>{name}</Text>
      <Text style={styles.subtitle}>{reward}</Text>
      <Text style={styles.description}>{ocupation}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  card: {
    backgroundColor: '#fff',
    borderRadius: 10,
    padding: 10,
    margin: 10,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.2,
    shadowRadius: 2,
    elevation: 3,
  },
  image: {
    width: '100%',
    height: 150,
    borderRadius: 10,
  },
  name: {
    fontSize: 18,
    fontWeight: 'bold',
    marginTop: 5,
  },
  subtitle: {
    fontSize: 16,
    color: '#888',
    marginBottom: 5,
  },
  description: {
    fontSize: 14,
    color: '#666',
  },
});

export default CharacterCard;
