import React, { ReactNode } from 'react';

import { styles } from './styles';
import { View, Text } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { theme } from '../../global/styles/theme';
import { BorderlessButton } from 'react-native-gesture-handler';
import { Feather } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';

type MyProps = {
  title: string;
  action?: ReactNode;
};

export function Header({ title, action }: MyProps) {
  const { secondary100, secondary40, heading } = theme.colors;

  const navigation = useNavigation();

  function handleBack() {
    navigation.goBack();
  }

  return (
    <LinearGradient
      style={styles.container}
      colors={[secondary100, secondary40]}
    >
      <BorderlessButton onPress={handleBack}>
        <Feather name="arrow-left" size={24} color={heading} />
      </BorderlessButton>

      <Text style={styles.title}>{title}</Text>

      {action && <View>{action}</View>}
    </LinearGradient>
  );
}
