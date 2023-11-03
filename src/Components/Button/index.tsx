import React from 'react';
import { Text } from 'react-native';

import { RectButton, RectButtonProps } from 'react-native-gesture-handler';

import { styles } from './styles';

type MyProps = RectButtonProps & {
  btnText: string;
};

export function Button({ btnText, ...rest }: MyProps) {
  return (
    <RectButton style={styles.container} {...rest}>
      <Text style={styles.title}>{btnText}</Text>
    </RectButton>
  );
}
