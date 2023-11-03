import { StyleSheet } from 'react-native';
import { theme } from '../../global/styles/theme';

export const styles = StyleSheet.create({
    container: {
        width: '100%',
        flexDirection: 'row',
        alignItems: 'center',
        paddingHorizontal: 24,
    },
    content: {
        flex: 1,
        justifyContent: 'center',
        marginLeft: 20
    },
    title: {
        fontFamily: theme.fonts.Rajdhani700Bold,
        color: theme.colors.heading,
        fontSize: 18,
        marginBottom: 8,
    },
    type: {
        fontFamily: theme.fonts.Inter400Regular,
        color: theme.colors.highlight,
        fontSize: 13,
    }
});