import { StyleSheet } from 'react-native';
import { theme } from '../../global/styles/theme';

export const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    user: {
        flexDirection: 'row',
    },
    greeting: {
        fontFamily: theme.fonts.Rajdhani500Medium,
        fontSize: 24,
        color: theme.colors.heading,
        marginRight: 6,
    },
    username: {
        fontFamily: theme.fonts.Rajdhani700Bold,
        fontSize: 24,
        color: theme.colors.heading
    },
    message: {
        fontFamily: theme.fonts.Inter400Regular,
        color: theme.colors.highlight
    }

});