import React from 'react';
import {View} from 'react-native';

import {ThemeLayout} from './layouts';

import 'react-native-gesture-handler';

import {Provider} from 'react-redux';
import {store} from '@/store';

export const App = () => (
  <Provider store={store}>
    <ThemeLayout>
      <View />
    </ThemeLayout>
  </Provider>
);
