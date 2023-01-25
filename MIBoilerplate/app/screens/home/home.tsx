import React from 'react';
import { View, Image, FlatList } from 'react-native';
import { miLogoImg } from 'app-assets';
import { RootStackParams } from 'app-navigation';
import { RouteProp } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import homeStyles from './home.styles';
import { useHome } from './useHome';
import { packageObj } from 'app-services';
import { useTheme } from 'app-contexts';
import ListItem from './listItem';
import { useLocalization } from 'app-contexts';
import { AppText } from 'app-components';

export type HomeNavigationProps = NativeStackNavigationProp<
  RootStackParams,
  'Home'
>;

export type HomeRouteProps = RouteProp<RootStackParams, 'Home'>;

const Home = () => {
  const { packagesListData } = useHome();

  const { palette } = useTheme();
  const { t } = useLocalization();

  const styles = homeStyles(palette);

  const renderPackagesList = ({ item }: { item: packageObj }): JSX.Element => {
    return <ListItem listItem={item} />;
  };

  return (
    <View style={styles.appContainer}>
      <View style={styles.imgContainer}>
        <AppText preset="bold" style={styles.headerText}>
          {t('welcome')}
        </AppText>
        <Image source={miLogoImg} resizeMode="contain" style={styles.logo} />
        <AppText style={styles.headerText}>www.mindinventory.com</AppText>
      </View>
      <FlatList
        data={packagesListData}
        contentContainerStyle={styles.flatListContainer}
        keyExtractor={(_item, index) => index.toString()}
        showsVerticalScrollIndicator={false}
        renderItem={renderPackagesList}
      />
    </View>
  );
};

export default Home;
