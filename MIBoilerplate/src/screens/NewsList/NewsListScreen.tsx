import React from 'react';
import { FlatList, TouchableOpacity, View } from 'react-native';

import { Text } from '@app/blueprints';

import { Icons } from '@src/assets';
import { BaseLayout } from '@src/components';
import type { NewsResult } from '@src/services';

import useNewsList from './useNewsList';

const NewsListScreen = () => {
  const {
    styles,
    data,
    getIcons,
    getImages,
    contents,
    handleNavigationNetwork,
    handleNavigationNewsItem,
  } = useNewsList();

  return (
    <BaseLayout>
      <FlatList
        bounces={false}
        showsHorizontalScrollIndicator={false}
        showsVerticalScrollIndicator={false}
        data={data}
        style={styles.flatlistStyles}
        keyExtractor={(item, index) => {
          return `${item.id}${index}`;
        }}
        renderItem={({ item }: { item: NewsResult }) => {
          return (
            <TouchableOpacity
              style={styles.newsItemContainer}
              onPress={handleNavigationNewsItem(item)}>
              {getImages(item.imageUrl, {
                resizeMode: 'cover',
                style: styles.newsImage,
              })}
              <View style={styles.newsTextView}>
                <Text preset="h6">
                  {item?.source ? item.source : contents('newsList', 'general')}
                </Text>
                <Text preset="title">{item.title}</Text>
              </View>
            </TouchableOpacity>
          );
        }}
        ListHeaderComponent={() => {
          return (
            <View style={styles.headerContainer}>
              <Text preset="h1">{contents('newsList', 'breakingNews')}</Text>
              <TouchableOpacity
                style={styles.networkButton}
                onPress={handleNavigationNetwork}>
                {getIcons(Icons.DEBUG_ICONS, {
                  resizeMode: 'contain',
                  style: styles.debugIcon,
                })}
              </TouchableOpacity>
            </View>
          );
        }}
      />
    </BaseLayout>
  );
};

export default React.memo(NewsListScreen);
