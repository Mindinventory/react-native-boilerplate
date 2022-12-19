import React from 'react';
import { View, Image, FlatList } from 'react-native';
import { miLogoImg } from 'app-assets';
import { RootStackParams } from 'app-navigation';
import { RouteProp } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { default as themeStyles } from './styles';
import { useHomeScreen } from './useHomeScreen';
import { packageObj } from 'app-services';
import { useTheme } from 'app-theme';
import ListItem from './listItem';
import { useLocalization } from 'app-utils';
import { AppText } from 'app-components';

export type HomeScreenNavigationProps = NativeStackNavigationProp<
  RootStackParams,
  'HomeScreen'
>;

export type HomeScreenRouteProps = RouteProp<RootStackParams, 'HomeScreen'>;

const HomeScreen = () => {
  const { packagesListData, onPressCard } = useHomeScreen();

  const { palette } = useTheme();
  const { locale } = useLocalization();
  console.log('1 >>> ', locale);

  const styles = themeStyles(palette);

  const renderTodoList = ({ item }: { item: packageObj }): JSX.Element => {
    return <ListItem listItem={item} onPressCard={onPressCard} />;
  };

  return (
    <View style={styles.appContainer}>
      <View style={styles.imgContainer}>
        <AppText style={{ color: '#000', marginTop: 0 }}>Welocome to</AppText>
        <Image source={miLogoImg} resizeMode="contain" style={styles.logo} />
      </View>
      <FlatList
        data={packagesListData}
        contentContainerStyle={styles.flatListContainer}
        keyExtractor={(_item, index) => index.toString()}
        showsVerticalScrollIndicator={false}
        renderItem={renderTodoList}
      />
    </View>
  );
};

export default HomeScreen;
