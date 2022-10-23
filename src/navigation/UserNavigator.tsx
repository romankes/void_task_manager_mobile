import {EmptyScreen, UserDetailScreen, UserUpdateScreen} from '@/screens';
import {createStackNavigator} from '@react-navigation/stack';
import React from 'react';
import {Routes} from './Routes';

export type UserStackParamList = {
  [Routes.USER_DETAIL]: undefined;
  [Routes.USER_UPDATE]: undefined;
};

const UserStack = createStackNavigator<UserStackParamList>();

export const UserNavigator = () => {
  return (
    <UserStack.Navigator screenOptions={{headerShown: false}}>
      <UserStack.Screen
        name={Routes.USER_DETAIL}
        component={UserDetailScreen}
      />
      <UserStack.Screen
        name={Routes.USER_UPDATE}
        component={UserUpdateScreen}
      />
    </UserStack.Navigator>
  );
};
