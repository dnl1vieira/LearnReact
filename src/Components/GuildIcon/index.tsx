import React from 'react';
import { Image } from 'react-native';
import { styles } from './styles';


export function GuildIcon() {
    let uri = 'https://logowik.com/content/uploads/images/discord-icon9600.logowik.com.webp';
    return (
        <Image
            source={{ uri }}
            style={styles.image}
            resizeMode='cover'
        />

    );
}