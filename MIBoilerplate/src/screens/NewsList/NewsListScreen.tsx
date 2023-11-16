import React from 'react';
import { FlatList, TouchableOpacity, View } from 'react-native';

import { AnimatedTouchableOpacity, Text } from '@app/blueprints';

import { Icons, SVGIcons } from '@src/assets';
import { AppImage, BaseLayout, Icon, SvgIcon } from '@src/components';
import { contents } from '@src/context';
import type { NewsResult } from '@src/services';
import { scaled } from '@src/utils';

import useNewsList from './useNewsList';

const NewsListScreen = () => {
  const {
    color,
    data,
    handleNavigationNetwork,
    handleNavigationNewsItem,
    handleSetting,
    styles,
  } = useNewsList();

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
            <AnimatedTouchableOpacity
              onPress={handleSetting}
              containerStyle={styles.settingBtn}>
              <SvgIcon
                pathFill={color.primaryColor}
                icon={SVGIcons.SETTING}
                {...scaled(25)}
              />
            </AnimatedTouchableOpacity>
          </View>
        }
      />
    </BaseLayout>
  );
};

export default React.memo(NewsListScreen);
