import { View, StyleSheet } from 'react-native';
import Text from './Text'

import config from '../config'
import themes from '../themes'

const styles = StyleSheet.create({
    parentContainer: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-around',
        padding: config.deviceWidth * 0.04,
    },
    childContainer: {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center'
    },
    data: {
        fontSize: 16,
        fontWeight: 'bold',
    },
    label: {
        fontSize: 16,
        color: themes.textColor.tertiary,
    }
})

const approxCalc = (num) => {
    if (num >= 1000) {
        return `${(num / 1000).toFixed(1)}k`;
    } else {
        return String(num);
    }
}

const Repositorystats = ({ stars, forks, reviews, ratings }) => {
    const starsDisplay = approxCalc(stars)
    const forksDisplay = approxCalc(forks)
    const reviewsDisplay = approxCalc(reviews)
    const ratingsDisplay = approxCalc(ratings)

    return (
        <View style={styles.parentContainer}>
            <View style={styles.childContainer}>
                <Text style={styles.data}>{starsDisplay}</Text>
                <Text style={styles.label}>Stars</Text>
            </View>
            <View style={styles.childContainer}>
                <Text style={styles.data}>{forksDisplay}</Text>
                <Text style={styles.label}>Forks</Text>
            </View>
            <View style={styles.childContainer}>
                <Text style={styles.data}>{reviewsDisplay}</Text>
                <Text style={styles.label}>Reviews</Text>
            </View>
            <View style={styles.childContainer}>
                <Text style={styles.data}>{ratingsDisplay}</Text>
                <Text style={styles.label}>Ratings</Text>
            </View>
        </View>
    )
}

export default Repositorystats