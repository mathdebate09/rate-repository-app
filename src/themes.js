import { Platform } from 'react-native';

const themes = {
    backgroundColor: {
        primary: '#ffffff',
        separator: 'rgb(225,229,232)',
        appBar: '#25292C',
        input: '#EDEDED'
    },
    textColor: {
        primary: 'black',
        secondary: '#ffffff',
        tertiary: '#7d7d7d'
    },
    fonts: {
        main: Platform.select({
            android: './assets/fonts/Roboto.ttf',
            ios: './assets/fonts/Arial.ttf',
            default: 'System',
        }),
    },
}

export default themes