import { Text, View, StyleSheet, Pressable } from 'react-native';
import themes from '../themes'

const styles = StyleSheet.create({
    text: {
        color: themes.textColor.secondary,
        fontWeight: 'bold',
        fontSize: 17,
    }
});

const AppBarTab = ({ text }) => {
    return <Pressable onPress={() => console.log(`${text} was clicked`)}>
        <Text style={styles.text} >{text}</Text>
    </Pressable>
};

export default AppBarTab;