import { StyleSheet } from 'react-native';
import { theme } from '../../global/styles/theme';
import { getBottomSpace } from 'react-native-iphone-x-helper';

export const styles = StyleSheet.create({
    banner: {
        width: '100%',
        height: 250,
        marginBottom: 30
    },
    title: {
        fontFamily: theme.fonts.Rajdhani700Bold,
        fontSize: 28,
        color: theme.colors.heading,
    },
    description: {
        fontFamily: theme.fonts.Inter400Regular,
        fontSize: 13,
        color: theme.colors.heading,
    },
    bannerContent: {
        flex: 1,
        justifyContent: 'flex-end',
        paddingHorizontal: 24,
        marginBottom: 30
    },
    members: {
        marginLeft: 24,
        marginTop: 27
    },
    footer: {
        marginHorizontal: 24,
        marginBottom: getBottomSpace() + 24
    }
})