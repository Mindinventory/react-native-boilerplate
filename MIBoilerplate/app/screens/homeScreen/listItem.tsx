import React from 'react';
import { TouchableOpacity } from 'react-native';
import { AppText } from 'app-components';
import { default as themeStyles } from './styles';
import { packageObj } from 'app-services';
import { useTheme } from 'app-theme';
interface ListItemProps {
  listItem: packageObj;
  onPressCard: () => void;
}

const ListItem = (props: ListItemProps) => {
  const { listItem, onPressCard } = props;
  const { palette } = useTheme();
  const styles = themeStyles(palette);

  return (
    <TouchableOpacity
      style={[styles.cardLayout, { backgroundColor: listItem.backgroundColor }]}
      key={listItem.package.name}
      onPress={onPressCard}
    >
      <AppText preset="bold" style={styles.cardText}>
        {listItem.package.name}
      </AppText>
      <AppText preset="default" style={styles.cardText}>
        version: {listItem.package.version}
      </AppText>
    </TouchableOpacity>
  );
};

export default React.memo(ListItem);
