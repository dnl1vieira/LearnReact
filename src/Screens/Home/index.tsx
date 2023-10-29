import React from 'react';
import { View, Text } from 'react-native';
import { styles } from './styles';

import { Profile } from '../../Components/Profile';

export function Home() {
    return (
        <View style={styles.container}>
            <View style={styles.header}>
                <Profile />
            </View>
        </View>
    );
}