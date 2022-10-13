import React from 'react';

import {ThemeLayout} from './layouts';

import 'react-native-gesture-handler';
import '@/i18n';

import {Provider} from 'react-redux';
import {store} from '@/store';

import {AppNavigator} from './navigation/AppNavigator';

import {LocaleConfig} from 'react-native-calendars';
import {CALENDAR} from '@/constants';

LocaleConfig.locales.ua = CALENDAR.LOCALES.ua;

export const App = () => (
  <Provider store={store}>
    <ThemeLayout>
      <AppNavigator />
    </ThemeLayout>
  </Provider>
);
