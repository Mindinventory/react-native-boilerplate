import React from 'react';
import {View} from 'react-native';
import {AppText} from 'app-components';
import {default as themeStyles} from './home.styles';
import {PackageObj} from 'app-services';
import {useTheme} from 'app-contexts';
interface ListItemProps {
  listItem: PackageObj;
}

const ListItem = (props: ListItemProps) => {
  const {listItem} = props;
  const {palette} = useTheme();
  const styles = themeStyles(palette);

  return (
    <View
      style={[styles.cardLayout, {backgroundColor: listItem.backgroundColor}]}
      key={listItem.package.name}>
      <AppText preset="bold" style={styles.cardText}>
        {listItem.package.name}
      </AppText>
      <AppText preset="default" style={styles.cardText}>
        version: {listItem.package.version}
      </AppText>
    </View>
  );
};

export default React.memo(ListItem);
