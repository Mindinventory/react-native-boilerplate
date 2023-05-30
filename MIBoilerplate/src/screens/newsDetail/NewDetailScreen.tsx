import React from 'react';
import { ScrollView, View } from 'react-native';

import { Text } from '@app/blueprints';

import { BaseLayout } from '@src/components';

import useNewsDetail from './useNewsDetail';

const NewsDetailScreen = () => {
  const { styles, data, getImages, contents, getPublishedMonth } =
    useNewsDetail();

  return (
    <BaseLayout>
      <ScrollView bounces={false} style={styles.scrollViewContainer}>
        {getImages(data.imageUrl, {
          resizeMode: 'cover',
          style: styles.newsImage,
        })}
        <View style={styles.infoContainer}>
          <Text preset="h5">
            {data.categories
              ? data.categories
              : contents('newsDetail', 'anonymous')}
          </Text>
          <Text preset="h5">{getPublishedMonth(data.published_on)}</Text>
        </View>
        <Text preset="h1">{data.title}</Text>
        <Text preset="h5" style={styles.descriptionText}>
          {data.body}
        </Text>
      </ScrollView>
    </BaseLayout>
  );
};

export default React.memo(NewsDetailScreen);
