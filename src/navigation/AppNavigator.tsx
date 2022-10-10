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
import {userSelectors} from '@/bus/user';
import {ProjectFormScreen} from '@/screens';

export type AppStackParamList = {
  [Routes.AUTH_NAVIGATOR]: undefined;
  [Routes.TABS_NAVIGATOR]: undefined;
  [Routes.PROJECT_FORM]: {type?: 'create' | 'update'};
};

const AppStack = createStackNavigator<AppStackParamList>();

export const AppNavigator: FC = () => {
  const dispatch = useDispatch();

  const logged = useSelector(authSelectors.getLogged);
  const initialized = useSelector(appSelectors.getInitialized);
  const user = useSelector(userSelectors.getDetail);

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
        ) : user?.hasProjects ? (
          <AppStack.Screen
            name={Routes.TABS_NAVIGATOR}
            component={TabNavigator}
          />
        ) : (
          <AppStack.Screen
            name={Routes.PROJECT_FORM}
            component={ProjectFormScreen}
          />
        )}
      </AppStack.Navigator>
    </NavigationContainer>
  );
};
