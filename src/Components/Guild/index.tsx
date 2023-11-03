import React from 'react';

import {
  Text,
  View,
  TouchableOpacity,
  TouchableOpacityProps,
} from 'react-native';

import { GuildIcon } from '../GuildIcon';
import { Feather } from '@expo/vector-icons';

import { styles } from './styles';
import { theme } from '../../global/styles/theme';

export type GuildProps = {
  id: string;
  name: string;
  icon: string | null;
  owner: boolean;
};

type MyProps = TouchableOpacityProps & {
  data: GuildProps;
};

export function Guild({ data, ...rest }: MyProps) {
  return (
    <TouchableOpacity style={styles.container} activeOpacity={0.7} {...rest}>
      <GuildIcon />
      <View style={styles.content}>
        <View>
          <Text style={styles.title}>{data.name}</Text>
          <Text style={styles.type}>{data.owner ? 'Admin' : 'Convidado'}</Text>
        </View>
      </View>
      <Feather name="chevron-right" color={theme.colors.heading} size={24} />
    </TouchableOpacity>
  );
}
