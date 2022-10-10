import React from 'react';

import {View} from 'react-native';

import {useData} from './useData';
import {useStyles} from './useStyles';

import {AuthStackParamList} from '@/navigation/AuthNavigator';
import {StackScreenProps} from '@react-navigation/stack';
import {Routes} from '@/navigation';

type TProps = StackScreenProps<AuthStackParamList, Routes.FORGOT_PASSWORD>;

export const ForgotPasswordScreen = () => {
  const {styles} = useStyles();

  const {} = useData();

  return <View />;
};
