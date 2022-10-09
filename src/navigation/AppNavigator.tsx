import React, {FC, useCallback, useEffect} from 'react';
import {NavigationContainer, DefaultTheme} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import {useSelector, useDispatch} from 'react-redux';
import SplashScreen from 'react-native-splash-screen';
import {Routes} from './Routes';

import {AuthNavigator} from './AuthNavigator';
import {TabNavigator} from './TabNavigator';
import {authSelectors} from '@/bus/auth';
import {appActions, appSelectors} from '@/bus/app';

import {navigationRef} from './RootNavigation';
import {useTheme} from '@/hooks';

export type AppStackParamList = {
  [Routes.AUTH_NAVIGATOR]: undefined;
  [Routes.TABS_NAVIGATOR]: undefined;
  [Routes.USER_DETAIL]: undefined;
};

const AppStack = createStackNavigator<AppStackParamList>();

export const AppNavigator: FC = () => {
  const dispatch = useDispatch();

  const logged = useSelector(authSelectors.getLogged);
  const initialized = useSelector(appSelectors.getInitialized);

  const {pallete} = useTheme();

  useEffect(() => {
    if (!initialized) {
      dispatch(appActions.bootstrapAsync());
    } else {
      SplashScreen.hide();
    }
  }, [initialized, dispatch]);

  // usePush();

  if (!initialized) {
    return null;
  }

  return (
    <NavigationContainer
      ref={navigationRef}
      theme={{
        ...DefaultTheme,
        colors: {
          ...DefaultTheme.colors,
          background: pallete.background.default as string,
        },
      }}>
      <AppStack.Navigator
        screenOptions={{
          headerShown: false,
        }}>
        {!logged ? (
          <AppStack.Screen
            name={Routes.AUTH_NAVIGATOR}
            component={AuthNavigator}
          />
        ) : (
          <AppStack.Screen
            name={Routes.TABS_NAVIGATOR}
            component={TabNavigator}
          />
        )}
      </AppStack.Navigator>
    </NavigationContainer>
  );
};
