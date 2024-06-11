import { View, StyleSheet } from 'react-native';
import AppBarTab from './AppBarTab'
import config from '../config'
import themes from '../themes'

const styles = StyleSheet.create({
  container: {
    paddingLeft: config.deviceWidth * 0.03,
    paddingTop: config.deviceWidth * 0.03,
    backgroundColor: themes.backgroundColor.appBar,
    color: themes.textColor.secondary,
    height: 80,
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    columnGap: 20
  }
});

const AppBar = () => {
  return <View style={styles.container}>
    <AppBarTab text={'Repositories'}/>
  </View>;
};

export default AppBar;