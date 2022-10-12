import {Task, taskActions, taskSelectors} from '@/bus/task';
import {useFetch} from '@/hooks';
import {useMemo, useState} from 'react';
import {useDispatch, useSelector} from 'react-redux';

export const useData = () => {
  const dispatch = useDispatch();

  const tasks = useSelector(taskSelectors.getItems);

  const [type, setType] = useState<Task.FilterType>('today');

  const params: Task.ReqFetchItems = useMemo(() => ({type}), [type]);

  const res = useFetch<Task.ReqFetchItems>({
    fetcher: taskActions.fetchItemsAsync,
    loader: 'task',
    selectors: taskSelectors,
    params,
  });

  return {...res, tasks, type, setType};
};
