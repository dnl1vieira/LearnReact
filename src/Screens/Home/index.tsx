import React, { useState } from 'react';
import { View, Text, FlatList } from 'react-native';
import { styles } from './styles';

import { Profile } from '../../Components/Profile';
import { ButtonAdd } from '../../Components/ButtonAdd';
import { CategorySelect } from '../../Components/CategorySelect';
import { ListHeader } from '../../Components/ListHeader';
import { Appointment } from '../../Components/Appointment';
import { ListSeparator } from '../../Components/ListSeparator';
import { Background } from '../../Components/Background';

export function Home() {
  const [category, setCategory] = useState('');

  const appointments = [
    {
      id: '1',
      guild: {
        id: '1',
        name: 'Spartans',
        icon: null,
        owner: true,
      },
      category: '1',
      date: '29/10 as 20:40h',
      description: 'É hoje que pego rating 10k+ sem perder nenhuma partida',
    },
    {
      id: '2',
      guild: {
        id: '1',
        name: 'Lendários',
        icon: null,
        owner: true,
      },
      category: '2',
      date: '29/10 as 20:40h',
      description: 'É hoje que pego rating 10k+ sem perder nenhuma partida',
    },
  ];

  function handleCategorySelect(categoryId: string) {
    categoryId === category ? setCategory('') : setCategory(categoryId);
  }

  return (
    <Background>
      <View style={styles.container}>
        <View style={styles.header}>
          <Profile />
          <ButtonAdd />
        </View>

        <CategorySelect
          categorySelected={category}
          setCategory={handleCategorySelect}
        />

        <View style={styles.content}>
          <ListHeader title={'Partidas agendadas'} subtitle={'Total 6'} />
          <FlatList
            data={appointments}
            keyExtractor={(item) => item.id}
            renderItem={({ item }) => <Appointment data={item} />}
            style={styles.matches}
            showsVerticalScrollIndicator={false}
            ItemSeparatorComponent={() => <ListSeparator />}
          />
        </View>
      </View>
    </Background>
  );
}
