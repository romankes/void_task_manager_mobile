import {Routes} from '@/navigation';

import {ProjectNavigator} from '@/navigation/ProjectNavigator';
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
    Screen: EmptyScreen,
  },
  {
    name: Routes.USER_NAVIGATOR,
    title: 'user',
    Screen: EmptyScreen,
  },
];
