import React from 'react';
import { View } from 'react-native';

import { Button, Text } from '@app/blueprints';

import { contents } from '@src/context';

import useForceUpdate from './useForceUpdate';

const ForceUpdateScreen = () => {
  const { styles } = useForceUpdate();

  return (
    <View style={styles.container}>
      <Text preset="h4" style={styles.messageStyle}>
        {contents('forceUpdate.updateMessage')}
      </Text>
      <Button
        title={contents('forceUpdate.update')}
        titleStyle={styles.updateText}
      />
      <Button
        title={contents('forceUpdate.retry')}
        buttonContainerStyle={styles.retryButton}
      />
    </View>
  );
};

export default React.memo(ForceUpdateScreen);
