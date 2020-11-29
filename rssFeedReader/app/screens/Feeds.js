import React from 'react';
import {StyleSheet, FlatList, View} from 'react-native';

import {ListItem, Header} from '@app/components';

const TOPICS = [
  'TOP STORIES',
  'WORLD',
  'NATION',
  'BUSINESS',
  'TECHNOLOGY',
  'ENTERTAINMENT',
  'SCIENCE',
  'SPORTS',
  'HEALTH',
  'NUTRITION',
];

export default function Feeds({navigation}) {
  const handleFeedPress = (item) => {
    navigation.navigate('Entries', {title: item});
  };

  return (
    <View style={styles.container}>
      <Header title={'FEEDS'} />

      <FlatList
        style={{flexGrow: 1}}
        data={TOPICS}
        keyExtractor={(item) => item}
        numColumns={2}
        renderItem={({item}) => (
          <ListItem item={item} onPress={() => handleFeedPress(item)} />
        )}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingBottom: 20,
  },
});
