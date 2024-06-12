import { Image, View, StyleSheet } from 'react-native';
import Text from './Text'
import config from '../config'
import themes from '../themes'

const styles = StyleSheet.create({
    parentContainer: {
        display: 'flex',
        backgroundColor: themes.backgroundColor.primary,
        paddingLeft: config.deviceWidth * 0.025,
        paddingRight: config.deviceWidth * 0.025,
        paddingTop: config.deviceWidth * 0.04,
        flexDirection: 'row'
    },
    infoContainer: {
        marginLeft: config.deviceWidth * 0.03,
        display: 'flex',
        gap: 6,
    },
    title: {
        fontWeight: 'bold',
        fontSize: 20,
    },
    description: {
        fontSize: 17,
        fontWeight: 'bold',
        color: themes.textColor.tertiary,
        display: 'flex',
        flexShrink: 1,
        maxWidth: config.deviceWidth * 0.8,
    },
    language: {
        borderRadius: 4,
        fontSize: 16,
        backgroundColor: '#0462D8',
        color: 'white',
        alignSelf: 'flex-start',
        padding: config.deviceWidth * 0.013,
    },
    image: {
        width: 60,
        height: 60,
        borderRadius: 6,
    }
})

const RepositoryInfo = ({ imageSrc, title, description, language }) => {
    return (
        <View style={styles.parentContainer} >
            <Image source={{ uri: imageSrc }}
                style={styles.image} />
            <View style={styles.infoContainer}>
                <Text style={styles.title}>{title}</Text>
                <Text style={styles.description}>{description}</Text>
                <Text style={styles.language}>{language}</Text>
            </View>
        </View>
    )
}

export default RepositoryInfo