import {Task, taskActions, taskSelectors} from '@/bus/task';
import {useFetch} from '@/hooks';
import {useMemo, useState} from 'react';
import {useDispatch, useSelector} from 'react-redux';

const DATE = new Date();

const END_DATE = {
  today: new Date(new Date().setDate(DATE.getDate() + 1)),
  week: new Date(new Date().setDate(DATE.getDate() + 7)),
  month: new Date(new Date().setDate(DATE.getDate() + 30)),
};

export const useData = () => {
  const dispatch = useDispatch();

  const tasks = useSelector(taskSelectors.getItems);

  const [type, setType] = useState<Task.FilterType>('today');

  const params: Task.ReqFetchItems = useMemo(
    () => ({
      endDate: END_DATE[type].toISOString(),
    }),
    [type],
  );

  const res = useFetch<Task.ReqFetchItems>({
    fetcher: taskActions.fetchItemsAsync,
    loader: 'task',
    selectors: taskSelectors,
    params,
  });

  return {...res, tasks, type, setType};
};
