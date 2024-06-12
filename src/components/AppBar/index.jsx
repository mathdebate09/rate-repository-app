import { View, StyleSheet, ScrollView } from 'react-native';
import { useNavigate } from 'react-router-native';

import AppBarTab from './AppBarTab'
import config from '../../utils/config'
import themes from '../../utils/themes'

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
  },
  horizontalFlow: {
    display: 'flex',
    flexDirection: 'row',
    columnGap: 20
  }
});

const AppBar = () => {
  const navigate = useNavigate();

  return (
    <View style={styles.container}>
      <ScrollView horizontal >
        <View style={styles.horizontalFlow}>
          <AppBarTab text={'Repositories'} onPress={() => navigate("/")} />
          <AppBarTab text={'Sign In'} onPress={() => navigate("/login")} />
        </View>
      </ScrollView>
    </View>
  );
};

export default AppBar;