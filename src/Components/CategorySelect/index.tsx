import React from 'react';
import { View, Text, ScrollView } from 'react-native';
import { styles } from './styles';
import { Categories } from '../../Utils/Categories';
import { Category } from '../Category';

type MyProps = {
  categorySelected: string;
  setCategory: (categoryId: string) => void;
  hasCheckbox?: boolean;
};

export function CategorySelect({
  categorySelected,
  hasCheckbox = false,
  setCategory,
}: MyProps) {
  return (
    <ScrollView
      horizontal
      style={styles.container}
      showsHorizontalScrollIndicator={false}
      contentContainerStyle={{ paddingRight: 40 }}
    >
      {Categories.map((category) => (
        <Category
          key={category.id}
          title={category.title}
          icon={category.icon}
          checked={category.id == categorySelected}
          onPress={() => setCategory(category.id)}
          hasCheckbox={hasCheckbox}
        />
      ))}
    </ScrollView>
  );
}
