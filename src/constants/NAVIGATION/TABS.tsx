import {Routes} from '@/navigation';

import {ProjectNavigator} from '@/navigation/ProjectNavigator';
import {TaskNavigator} from '@/navigation/TaskNavigator';
import {UserNavigator} from '@/navigation/UserNavigator';

import {ProjectIcon, TaskIcon, UserIcon} from '@/components';

export const TABS = [
  {
    name: Routes.PROJECT_NAVIGATOR,
    title: 'project',
    Screen: ProjectNavigator,
    Icon: ProjectIcon,
  },
  {
    name: Routes.TASK_NAVIGATOR,
    title: 'task',
    Screen: TaskNavigator,
    Icon: TaskIcon,
  },
  {
    name: Routes.USER_NAVIGATOR,
    title: 'user',
    Screen: UserNavigator,
    Icon: UserIcon,
  },
];
