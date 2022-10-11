import React, {FC} from 'react';

import {SafeAreaView} from 'react-native';

import {useData} from './useData';
import {useStyles} from './useStyles';

type TProps = {};

export const TaskListScreen: FC<TProps> = ({}) => {
  const {} = useStyles();

  const {} = useData();

  return <SafeAreaView />;
};
