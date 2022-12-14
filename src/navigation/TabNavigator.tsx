import React, {FC} from 'react';

import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {Routes} from './Routes';

import {EmptyScreen} from '@/screens';

import {useTabBar, useTheme} from '@/hooks';
import {useSafeAreaInsets} from 'react-native-safe-area-context';
import {View} from 'react-native';
import {NAVIGATION} from '@/constants';
import {useTranslation} from 'react-i18next';
import {Text} from '@/components';

export type TabStackParamList = {
  [Routes.PROJECT_NAVIGATOR]: undefined;
  [Routes.TASK_NAVIGATOR]: undefined;
  [Routes.USER_NAVIGATOR]: undefined;
};

const TabStack = createBottomTabNavigator<TabStackParamList>();

export const TabNavigator = () => {
  const {pallete} = useTheme();

  const insets = useSafeAreaInsets();

  const {t} = useTranslation();

  const {isShow} = useTabBar();

  return (
    <TabStack.Navigator
      screenOptions={{
        headerShown: false,
        tabBarStyle: {
          backgroundColor: pallete.background.dark,
          height: 60 + insets.bottom,
          paddingBottom: insets.bottom,
          paddingTop: 8,

          display: isShow ? 'flex' : 'none',

          borderTopRightRadius: 22,
          borderTopLeftRadius: 22,
        },

        tabBarActiveTintColor: pallete.text.light as string,
        // tabBarInactiveTintColor: pallete.text.default as string,
      }}>
      {NAVIGATION.TABS.map(({name, title, Screen, Icon}) => (
        <TabStack.Screen
          key={`tab-${name}`}
          options={() => ({
            tabBarIcon: ({focused}) => (
              <Icon color={focused ? 'action' : 'light'} size={24} />
            ),
            tabBarLabel: ({focused}) => (
              <Text color={focused ? 'action' : 'light'} family="medium">
                {t(`tabs.${title}`)}
              </Text>
            ),
          })}
          name={name as keyof TabStackParamList}
          component={Screen}
        />
      ))}
    </TabStack.Navigator>
  );
};
