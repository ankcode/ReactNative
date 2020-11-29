import React from 'react';
import {StyleSheet, Text} from 'react-native';
import {Icon, Header} from 'react-native-elements';
import GlobalStyles from '@app/config/styles';
import colors from '@app/config/colors';

export default function AppHeader({
  leftIcon,
  leftIconType,
  leftIconPress,
  title,
  titleStyle,
  containerStyle,
  size = 32,
  color = colors.white,
}) {
  return (
    <Header
      statusBarProps={{barStyle: 'light-content'}}
      barStyle="light-content" // or directly
      leftComponent={
        <Icon
          name={leftIcon}
          type={leftIconType}
          size={size}
          color={color}
          onPress={leftIconPress}
        />
      }
      centerComponent={
        <Text style={[GlobalStyles.text, styles.title]}>{title}</Text>
      }
      containerStyle={[styles.header, containerStyle]}
    />
  );
}

const styles = StyleSheet.create({
  header: {
    backgroundColor: colors.primary,
  },
  title: {
    color: colors.white,
    fontWeight: '600',
  },
});
