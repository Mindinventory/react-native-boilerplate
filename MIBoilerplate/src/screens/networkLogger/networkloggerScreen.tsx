import React from 'react';

import NetworkLogger from 'react-native-network-logger';

import { BaseLayout } from '@src/components';

const NetworkloggerScreen = () => {
  return (
    <BaseLayout>
      <NetworkLogger theme={'light'} />
    </BaseLayout>
  );
};

export default React.memo(NetworkloggerScreen);
