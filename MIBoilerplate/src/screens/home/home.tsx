import React from 'react';
import { Button, FlatList, View } from 'react-native';

import { Text } from '@app/blueprints';

import { BaseLayout } from '@src/components';
import { ContentLanguage } from '@src/context';
import { scaleHeight } from '@src/utils';

import { useHome } from './useHome';

const Home = () => {
  const {
    loader,
    styles,
    contents,
    setLanguageInApp,
    language,
    users,
    appTheme,
    setAppTheme,
  } = useHome();

  return (
    <BaseLayout>
      <View style={styles.container}>
        <Text
          preset="h1"
          onPress={() => (loader?.isLoading ? loader.hide : loader?.show())}>
          {contents('common', 'coming_soon_title')}
        </Text>
        <FlatList
          data={users}
          renderItem={({ item }) => (
            <Text preset="h3" color={styles.text.color}>
              {item.id}. {item.firstName} {item.lastName}
            </Text>
          )}
          ItemSeparatorComponent={() => (
            <View
              style={{
                marginVertical: scaleHeight(20),
              }}
            />
          )}
          ListEmptyComponent={() => <Text preset="h2">No data</Text>}
          ListFooterComponent={() => (
            <Button
              title="Press"
              onPress={() => {
                language === ContentLanguage.English
                  ? setLanguageInApp(ContentLanguage.Hindi)
                  : setLanguageInApp(ContentLanguage.English);
                appTheme === 'dark'
                  ? setAppTheme('light')
                  : setAppTheme('dark');
              }}
            />
          )}
        />
      </View>
    </BaseLayout>
  );
};

export default Home;
