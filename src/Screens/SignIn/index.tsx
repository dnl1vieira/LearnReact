import React from 'react';
import {
    View,
    Text,
    Image,
    StatusBar
} from 'react-native';

import { styles } from './styles'
import { ButtonIcon } from '../../Components/ButtonIcon'

import IllustrationImg from '../../assets/illustration.png';

export function SignIn() {
    let title = 'Conecte-se \n e organize suas \n jogatinas';
    let subtitle = 'Crie grupos para jogar seus games \n favoritos com seus amigos';
    let btnText = 'Entrar com Discord';

    return (
        <View style={styles.container}>
            <Image
                source={IllustrationImg}
                style={styles.image}
                resizeMode='stretch'
            />

            <View style={styles.content}>
                <Text style={styles.title}>
                    {title}
                </Text>

                <Text style={styles.subtitle}>
                    {subtitle}
                </Text>
                <ButtonIcon
                    btnText={btnText}
                    activeOpacity={0.6}
                />
            </View>
        </View>
    );
}
