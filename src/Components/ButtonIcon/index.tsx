import React from 'react';
import {
    Text,
    Image,
    View,
    TouchableOpacity,
    TouchableOpacityProps
} from 'react-native';

import DiscordImg from '../../assets/discord.png';
import { styles } from './styles';

type MyProps = TouchableOpacityProps & {
    btnText: string,
}

export function ButtonIcon({ btnText, ...rest }: MyProps) {

    return (
        <View>
            <TouchableOpacity style={styles.container} {...rest}>
                <View style={styles.iconWrapper}>
                    <Image source={DiscordImg} style={styles.icon} />
                </View>

                <Text style={styles.title}>
                    {btnText}
                </Text>
            </TouchableOpacity>
        </View>
    );
}