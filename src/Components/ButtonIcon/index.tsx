import React from 'react';
import {
    Text,
    Image,
    View
} from 'react-native';

import { RectButton, RectButtonProps } from 'react-native-gesture-handler';

import DiscordImg from '../../assets/discord.png';
import { styles } from './styles';

type MyProps = RectButtonProps & {
    btnText: string,
}

export function ButtonIcon({ btnText, ...rest }: MyProps) {

    return (
        <View>
            <RectButton style={styles.container} {...rest}>
                <View style={styles.iconWrapper}>
                    <Image source={DiscordImg} style={styles.icon} />
                </View>

                <Text style={styles.title}>
                    {btnText}
                </Text>
            </RectButton>
        </View>
    );
}