import {Task} from '@/bus/task';

type TButtons = {
  DATE: Task.DateFilterType[];
  STATUS: Task.StatusFilterType[];
};

export const FILTER_BUTTONS: TButtons = {
  DATE: ['month', 'today', 'week'],
  STATUS: ['started', 'waiting', 'finished'],
};
