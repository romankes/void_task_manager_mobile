import {Routes} from '@/navigation';

import {ProjectNavigator} from '@/navigation/ProjectNavigator';
import {TaskNavigator} from '@/navigation/TaskNavigator';

import {EmptyScreen} from '@/screens';

export const TABS = [
  {
    name: Routes.PROJECT_NAVIGATOR,
    title: 'project',
    Screen: ProjectNavigator,
  },
  {
    name: Routes.TASK_NAVIGATOR,
    title: 'task',
    Screen: TaskNavigator,
  },
  {
    name: Routes.USER_NAVIGATOR,
    title: 'user',
    Screen: EmptyScreen,
  },
];
