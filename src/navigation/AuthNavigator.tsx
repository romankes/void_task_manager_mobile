import React, {FC, useEffect} from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import {useSelector, useDispatch} from 'react-redux';
// import SplashScreen from 'react-native-splash-screen';
import {Routes} from './Routes';

//navigator
import {EmptyScreen} from '@/screens';

export type AuthStackParamList = {
  [Routes.SIGN_IN]: undefined;
  [Routes.SIGN_UP]: undefined;
};

const AuthStack = createStackNavigator<AuthStackParamList>();

export const AuthNavigator = () => {
  return (
    <AuthStack.Navigator
      screenOptions={{
        headerShown: false,
      }}>
      <AuthStack.Screen name={Routes.SIGN_IN} component={EmptyScreen} />
      <AuthStack.Screen name={Routes.SIGN_UP} component={EmptyScreen} />
    </AuthStack.Navigator>
  );
};
