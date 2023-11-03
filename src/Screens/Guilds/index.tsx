import React from 'react';

import { View, FlatList } from 'react-native';
import { ListSeparator } from '../../Components/ListSeparator';

import { styles } from './styles';
import { Guild } from '../../Components/Guild';
import { GuildProps } from '../../Components/Guild';

type MyProps = {
  handleGuildSelect: (guild: GuildProps) => void;
};

export function Guilds({ handleGuildSelect }: MyProps) {
  const guilds = [
    {
      id: '1',
      name: 'Spartans',
      icon: 'image.png',
      owner: true,
    },
    {
      id: '2',
      name: 'New Icons',
      icon: 'image.png',
      owner: true,
    },
    {
      id: '3',
      name: 'Lendários',
      icon: 'image.png',
      owner: true,
    },
  ];

  return (
    <View style={styles.container}>
      <FlatList
        data={guilds}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <Guild data={item} onPress={() => handleGuildSelect(item)} />
        )}
        showsVerticalScrollIndicator={false}
        ItemSeparatorComponent={() => <ListSeparator isCentered />}
        contentContainerStyle={{ paddingBottom: 68 }}
        style={styles.guilds}
      />
    </View>
  );
}
