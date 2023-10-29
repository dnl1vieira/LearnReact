import { StyleSheet } from 'react-native';
import { theme } from '../../global/styles/theme';

export const styles = StyleSheet.create({
    container: {
        width: '100%',
        flexDirection: 'row',
        justifyContent: 'space-between',
        paddingHorizontal: 24
    },
    title: {
        fontFamily: theme.fonts.Rajdhani700Bold,
        color: theme.colors.heading,
        fontSize: 18
    },
    subtitle: {
        fontFamily: theme.fonts.Inter400Regular,
        color: theme.colors.highlight,
        fontSize: 13
    }
})
