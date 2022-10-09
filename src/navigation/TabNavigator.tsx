import React from 'react';

import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {Routes} from './Routes';

import {EmptyScreen} from '@/screens';

import {useTheme} from '@/hooks';
import {useSafeAreaInsets} from 'react-native-safe-area-context';
import {View} from 'react-native';

export type TabStackParamList = {
  [Routes.PROJECT_NAVIGATOR]: undefined;
  [Routes.TASK_NAVIGATOR]: undefined;
  [Routes.USER_NAVIGATOR]: undefined;
};

const TabStack = createBottomTabNavigator<TabStackParamList>();

export const TabNavigator = () => {
  const {pallete} = useTheme();

  const insets = useSafeAreaInsets();

  return <View />;

  // return (
  //   <TabStack.Navigator
  //     screenOptions={{
  //       headerShown: false,
  //       tabBarStyle: {
  //         display: isShow ? 'flex' : 'none',
  //         backgroundColor: pallete.background.dark,
  //         height: 60 + insets.bottom,
  //         paddingBottom: insets.bottom,
  //       },
  //       tabBarShowLabel: false,

  //       tabBarActiveTintColor: pallete.text.action as string,
  //       tabBarInactiveTintColor: pallete.text.default as string,
  //     }}>
  //     <TabStack.Screen
  //       options={() => ({
  //         tabBarIcon: ({focused}) => (
  //           <ChatIcon color={focused ? 'action' : 'default'} size={24} />
  //         ),
  //       })}
  //       name={Routes.ROOM_NAVIGATOR}
  //       component={RoomNavigator}
  //     />
  //     <TabStack.Screen
  //       options={() => ({
  //         tabBarIcon: ({focused}) => (
  //           <InvitesIcon color={focused ? 'action' : 'default'} size={24} />
  //         ),
  //       })}
  //       name={Routes.INVITES_NAVIGATOR}
  //       component={InviteNavigator}
  //     />
  //     <TabStack.Screen
  //       options={() => ({
  //         tabBarIcon: ({focused}) => (
  //           <RoomCreateIcon color={focused ? 'action' : 'default'} size={24} />
  //         ),
  //         tabBarStyle: {
  //           display: 'none',
  //         },
  //       })}
  //       name={Routes.ROOM_CREATE_NAVIGATOR}
  //       component={RoomCreateNavigator}
  //     />
  //     <TabStack.Screen
  //       options={() => ({
  //         tabBarIcon: ({focused}) => (
  //           <ProfileIcon color={focused ? 'action' : 'default'} size={24} />
  //         ),
  //         tabBarStyle: {
  //           display: 'none',
  //         },
  //       })}
  //       name={Routes.USER_NAVIGATOR}
  //       component={UserNavigator}
  //     />
  //   </TabStack.Navigator>
  // );
};
