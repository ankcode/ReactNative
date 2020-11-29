import React, {useEffect, useState} from 'react';
import {Linking, View, Text, Button, StyleSheet, FlatList} from 'react-native';
import * as rssParser from 'react-native-rss-parser';
import moment from 'moment';

import entriesApi from '@app/api/entries';
import useApi from '@app/hooks/useApi';
import {Header, ActivityIndicator, Card} from '@app/components';
import colors from '@app/config/colors';

export default function Entries({route, navigation}) {
  const [entries, setEntries] = useState([]);

  const {title} = route.params;
  const getEntriesApi = useApi(entriesApi.getEntriesByQuery);

  const loadEntriesData = async () => {
    const response = await getEntriesApi.request(title);
    const results = await rssParser.parse(response.data);
    if (results && results.items) {
      results.items.sort(
        (a, b) =>
          moment(Date.parse(b.published)) - moment(Date.parse(a.published)),
      );
      setEntries(results.items);
    }
  };
  useEffect(() => {
    loadEntriesData();
  }, []);

  return (
    <View style={styles.screen}>
      <ActivityIndicator visible={getEntriesApi.loading} />
      {getEntriesApi.error && (
        <>
          <Text>Couldn't retrieve the entries.</Text>
          <Button title="Retry" onPress={() => getEntriesApi.request(title)} />
        </>
      )}
      {entries && entries.length > 0 && (
        <>
          <Header
            leftIcon="chevron-back-outline"
            leftIconType="ionicon"
            leftIconPress={() => navigation.goBack()}
            title={`${title} (${entries.length})`}
          />
          <FlatList
            style={{flexGrow: 1}}
            data={entries}
            keyExtractor={(entry) => entry.title}
            renderItem={({item}) => (
              <Card
                title={item.title}
                pubDate={item.published}
                onPress={() => Linking.openURL(item.links[0].url)}
              />
            )}
          />
        </>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  screen: {
    backgroundColor: colors.light,
    flex: 1,
  },
});
