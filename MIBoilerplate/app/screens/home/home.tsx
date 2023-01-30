import React from 'react';
import {View, Image, FlatList} from 'react-native';
import {miLogoImg} from 'app-assets';
import homeStyles from './home.styles';
import {useHome} from './useHome';
import {PackageObj} from 'app-services';
import {useTheme, useLocalization} from 'app-contexts';
import ListItem from './listItem';
import {AppText} from 'app-components';

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
