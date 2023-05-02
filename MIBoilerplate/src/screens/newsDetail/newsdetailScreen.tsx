import React from 'react';
import { ScrollView, View } from 'react-native';

import { Text } from '@app/blueprints';

import { BaseLayout } from '@src/components';

import useNewsdetail from './useNewsdetail';

const NewsdetailScreen = () => {
  const { styles, data, getImages, contents, getPublishedMonth } =
    useNewsdetail();

  return (
    <BaseLayout>
      <ScrollView bounces={false} style={styles.scrollViewContainer}>
        {getImages(data.urlToImage, {
          resizeMode: 'cover',
          style: styles.newsImage,
        })}
        <View style={styles.infoContainer}>
          <Text preset="h5">
            {data.author ? data.author : contents('common', 'anonymous')}
          </Text>
          <Text preset="h5">{getPublishedMonth(data.publishedAt)}</Text>
        </View>
        <Text preset="title">{data.title}</Text>
        <Text preset="h4" style={styles.descriptionText}>
          {data.description}
        </Text>
      </ScrollView>
    </BaseLayout>
  );
};

export default React.memo(NewsdetailScreen);
