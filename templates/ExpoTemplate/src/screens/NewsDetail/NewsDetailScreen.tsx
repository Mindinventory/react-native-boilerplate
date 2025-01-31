import React from 'react';
import { ScrollView, View } from 'react-native';

import { Button, Text } from '@app/blueprints';

import { AppImage, BaseLayout } from '@src/components';
import { contents } from '@src/context';
import { scaleHeight } from '@src/utils';

import useNewsDetail from './useNewsDetail';

const NewsDetailScreen = () => {
  const { data, getPublishedMonth, handleGoBack, styles } = useNewsDetail();

  return (
    <BaseLayout>
      <ScrollView bounces={false} style={styles.scrollViewContainer}>
        <Text style={styles.title}>{data.title}</Text>
        <AppImage source={data.imageUrl} style={styles.newsImage} />
        <View style={styles.infoContainer}>
          <Text>
            {data.categories
              ? data.categories
              : contents('newsDetail.anonymous')}
          </Text>
          <Text>{getPublishedMonth(data.published_on)}</Text>
        </View>

        <Text style={styles.descriptionText}>{data.body}</Text>
        <Button
          buttonContainerStyle={{ marginTop: scaleHeight(15) }}
          title="Go back"
          onPress={handleGoBack}
        />
      </ScrollView>
    </BaseLayout>
  );
};

export default React.memo(NewsDetailScreen);
