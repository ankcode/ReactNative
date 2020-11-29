import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';

import {Feeds, Entries} from '@app/screens';

const Stack = createStackNavigator();

const defaultOptions = {
  headerShown: false,
  gestureEnabled: false,
};
export default function AppNavigator() {
  return (
    <Stack.Navigator screenOptions={defaultOptions}>
      <Stack.Screen name="Feeds" component={Feeds} />
      <Stack.Screen name="Entries" component={Entries} />
    </Stack.Navigator>
  );
}
