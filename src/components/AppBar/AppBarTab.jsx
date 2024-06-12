import React from 'react';
import { StyleSheet, Pressable } from 'react-native';
import themes from '../../utils/themes';
import Text from '../Text'

const styles = StyleSheet.create({
  text: {
    color: themes.textColor.secondary,
    fontWeight: 'bold',
    fontSize: 17
  }
});

const AppBarTab = ({ text, onPress }) => {
  return (
    <Pressable onPress={onPress}>
      <Text style={styles.text}>{text}</Text>
    </Pressable>
  );
};

export default AppBarTab;