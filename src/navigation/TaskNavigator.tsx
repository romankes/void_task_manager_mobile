import {EmptyScreen, TaskListScreen} from '@/screens';
import {createStackNavigator} from '@react-navigation/stack';
import React from 'react';
import {Routes} from './Routes';

export type TaskStackParamList = {
  [Routes.TASK_LIST]: undefined;
  [Routes.TASK_DETAIL]: {id: string};
  [Routes.TASK_FORM]: {type: 'create' | 'update'};
};

const TaskStack = createStackNavigator<TaskStackParamList>();

export const TaskNavigator = () => {
  return (
    <TaskStack.Navigator screenOptions={{headerShown: false}}>
      <TaskStack.Screen name={Routes.TASK_LIST} component={TaskListScreen} />
      <TaskStack.Screen name={Routes.TASK_DETAIL} component={EmptyScreen} />
      <TaskStack.Screen name={Routes.TASK_FORM} component={EmptyScreen} />
    </TaskStack.Navigator>
  );
};
