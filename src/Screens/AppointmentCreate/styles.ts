import { StyleSheet } from 'react-native';
import { theme } from '../../global/styles/theme';

export const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    label: {
        fontSize: 18,
        fontFamily: theme.fonts.Rajdhani700Bold,
        color: theme.colors.heading
    },
    form: {
        paddingHorizontal: 24,
        marginTop: 32
    },
    select: {
        height: 68,
        width: '100%',
        flexDirection: 'row',
        borderColor: theme.colors.secondary50,
        borderWidth: 1,
        borderRadius: 8,
        alignItems: 'center',
        paddingRight: 25,
        overflow: 'hidden',
    },
    selectBody: {
        flex: 1,
        alignItems: 'center',
    },
    image: {
        width: 64,
        height: 68,
        backgroundColor: theme.colors.secondary50,
        borderWidth: 1,
        borderRadius: 8,
    },
    field: {
        width: '100%',
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginTop: 30,
    },
    column: {
        flexDirection: 'row',
        alignItems: 'center',

    },
    separator: {
        marginRight: 4,
        fontSize: 18,
        fontFamily: theme.fonts.Rajdhani500Medium,
        color: theme.colors.highlight
    },
    charLimit: {
        fontSize: 13,
        fontFamily: theme.fonts.Inter400Regular,
        color: theme.colors.highlight
    },
    footer: {
        marginVertical: 20,
        marginBottom: 56,

    }
})