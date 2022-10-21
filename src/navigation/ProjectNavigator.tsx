import {
  EmptyScreen,
  ProjectDetailScreen,
  ProjectFormScreen,
  ProjectListScreen,
  TaskDetailScreen,
} from '@/screens';
import {createStackNavigator} from '@react-navigation/stack';
import React from 'react';
import {Routes} from './Routes';

export type ProjectStackParamList = {
  [Routes.PROJECT_LIST]: undefined;
  [Routes.PROJECT_DETAIL]: {id: string};
  [Routes.TASK_DETAIL]: {id: string};
  [Routes.PROJECT_FORM]: {type?: 'update' | 'create'};
};

const ProjectStack = createStackNavigator<ProjectStackParamList>();

export const ProjectNavigator = () => {
  return (
    <ProjectStack.Navigator screenOptions={{headerShown: false}}>
      <ProjectStack.Screen
        name={Routes.PROJECT_LIST}
        component={ProjectListScreen}
      />
      <ProjectStack.Screen
        name={Routes.PROJECT_DETAIL}
        component={ProjectDetailScreen}
      />
      <ProjectStack.Screen
        name={Routes.PROJECT_FORM}
        component={ProjectFormScreen}
      />
      <ProjectStack.Screen
        name={Routes.TASK_DETAIL}
        component={TaskDetailScreen}
      />
    </ProjectStack.Navigator>
  );
};
