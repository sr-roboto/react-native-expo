import React from 'react';
import { View, Text, FlatList, ListRenderItem } from 'react-native';
import FruitCard from '../../components/FruitCard';
import { Fruit } from '../../types/index';

const fruitsData: Fruit[] = [
  {
    id: 1,
    name: 'Gomu Gomu no Mi',
    type: 'Paramecia',
    description: 'Allows the user to stretch their body like rubber.',
  },
  {
    id: 2,
    name: 'Mera Mera no Mi',
    type: 'Logia',
    description: 'Grants the user the ability to control fire.',
  },
  {
    id: 3,
    type: 'Logia',
    name: 'Hie Hie no Mi',
    description: 'Allows the user to create and control ice.',
  },
  {
    id: 4,
    type: 'Paramecia',
    name: 'Yami Yami no Mi',
    description: 'Grants the user the power of darkness.',
  },
];

const FruitsScreen = () => {
  return (
    <View style={{ flex: 1, padding: 16 }}>
      <Text style={{ fontSize: 24, fontWeight: 'bold', marginBottom: 16 }}>
        Fruits of the Devil
      </Text>
      <FlatList
        data={fruitsData}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item }) => (
          <FruitCard name={item.name} description={item.description} />
        )}
      />
    </View>
  );
};

export default FruitsScreen;
