import React from 'react';
import { View, Text, Image } from 'react-native';

import { styles } from './styles';
import { theme } from '../../global/styles/theme';

import { LinearGradient } from 'expo-linear-gradient';

type MyProps = {
    urlImage: string;
}

export function Avatar({ urlImage }: MyProps) {
    const { secondary50, secondary70 } = theme.colors;


    return (
        <LinearGradient
            style={styles.container}
            colors={[secondary50, secondary70]}
        >
            <Image
                source={{ uri: urlImage }}
                style={styles.avatar}
            />
        </LinearGradient>
    );
}