import React from 'react';
import {FlatList, Image, View} from 'react-native';

import {miLogoImg} from 'app-assets';
import {AppText} from 'app-components';
import {useLocalization, useTheme} from 'app-contexts';
import {PackageObj} from 'app-services';

import homeStyles from './home.styles';
import ListItem from './listItem';
import {useHome} from './useHome';

const Home = () => {
  const {packagesListData} = useHome();

  const {palette} = useTheme();
  const {t} = useLocalization();

  const styles = homeStyles(palette);

  const renderPackagesList = ({item}: {item: PackageObj}): JSX.Element => {
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
