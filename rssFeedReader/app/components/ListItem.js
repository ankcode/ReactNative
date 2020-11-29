import React from 'react';
import {StyleSheet, TouchableOpacity, Text} from 'react-native';
import GlobalStyles from '@app/config/styles';
import colors from '@app/config/colors';

function ListItem({item, onPress}) {
  return (
    <TouchableOpacity style={styles.container} onPress={onPress}>
      <Text style={[GlobalStyles.text, styles.label]}>{item}</Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 30,
    paddingVertical: 15,
    alignItems: 'center',
    backgroundColor: colors.secondary,
    width: '45%',
    margin: 10,
    justifyContent: 'center',
    borderRadius: 25,
    minHeight: 150,
  },
  label: {
    textAlign: 'center',
    color: colors.white,
  },
});

export default ListItem;
