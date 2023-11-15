import React from 'react';
import { FlatList, TouchableOpacity, View } from 'react-native';

import { AnimatedTouchableOpacity, Text } from '@app/blueprints';

import { Icons } from '@src/assets';
import { AppImage, BaseLayout, Icon } from '@src/components';
import { contents } from '@src/context';
import type { NewsResult } from '@src/services';

import useNewsList from './useNewsList';

const NewsListScreen = () => {
  const { data, handleNavigationNetwork, handleNavigationNewsItem, styles } =
    useNewsList();

  const renderItem = ({ item }: { item: NewsResult }) => {
    return (
      <AnimatedTouchableOpacity
        containerStyle={styles.newsItemContainer}
        onPress={handleNavigationNewsItem(item)}>
        <AppImage source={item.imageUrl} style={styles.newsImage} />
        <View style={styles.newsTextView}>
          <Text preset="h6">
            {item?.source ? item.source : contents('newsList.general')}
          </Text>
          <Text preset="title">{item.title}</Text>
        </View>
      </AnimatedTouchableOpacity>
    );
  };

  return (
    <BaseLayout>
      <FlatList
        bounces={false}
        showsHorizontalScrollIndicator={false}
        showsVerticalScrollIndicator={false}
        data={data}
        style={styles.flatlistStyles}
        initialNumToRender={5}
        keyExtractor={item => `${item.id}_${item.title}`}
        renderItem={renderItem}
        ListHeaderComponent={
          <View style={styles.headerContainer}>
            <Text preset="h1">{contents('newsList.breakingNews')}</Text>
            <TouchableOpacity
              style={styles.networkButton}
              onPress={handleNavigationNetwork}>
              <Icon icon={Icons.DEBUG_ICONS} style={styles.debugIcon} />
            </TouchableOpacity>
          </View>
        }
      />
    </BaseLayout>
  );
};

export default React.memo(NewsListScreen);