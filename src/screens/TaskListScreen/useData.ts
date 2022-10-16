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

const STATUSES = {
  waiting: {
    endDate: null,
    startDate: null,
  },
  started: {
    // endDate: null,
    //TODO: create a new mechanism
  },
  finished: {
    //TODO: create a new mechanism
  },
};

export const useData = () => {
  const dispatch = useDispatch();

  const tasks = useSelector(taskSelectors.getItems);

  const [date, setDate] = useState<Task.DateFilterType>('today');
  const [status, setStatus] = useState<Task.StatusFilterType>('waiting');

  const params: Task.ReqFetchItems = useMemo(
    () => ({
      date: END_DATE[date].toISOString(),
    }),
    [date],
  );

  const res = useFetch<Task.ReqFetchItems>({
    fetcher: taskActions.fetchItemsAsync,
    loader: 'task',
    selectors: taskSelectors,
    params,
  });

  return {...res, tasks, date, setDate, status, setStatus};
};
