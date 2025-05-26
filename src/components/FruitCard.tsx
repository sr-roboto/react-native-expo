import React from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';

interface FruitCardProps {
  name: string;
  type: string;
  image: string;
}

const FruitCard: React.FC<FruitCardProps> = ({ name, image, type }) => {
  return (
    <View style={styles.card}>
      <Image source={{ uri: `${image}` }} style={styles.image} />
      <Text style={styles.title}>{name}</Text>
      <Text style={styles.subtitle}>{type}</Text>
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
    height: 100,
    borderRadius: 10,
    resizeMode: 'contain',
  },
  title: {
    fontSize: 18,
    fontWeight: 'bold',
    marginVertical: 5,
    textAlign: 'center',
  },
  subtitle: {
    fontSize: 16,
    color: '#888',
    marginBottom: 5,
    textAlign: 'center',
  },
  description: {
    fontSize: 14,
    color: '#666',
  },
});

export default FruitCard;
