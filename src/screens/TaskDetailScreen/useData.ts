import {taskActions, taskSelectors} from '@/bus/task';
import {useFetch} from '@/hooks';
import {useMemo} from 'react';
import {useDispatch, useSelector} from 'react-redux';

type TArgs = {
  id: string;
};

export const useData = ({id}: TArgs) => {
  const dispatch = useDispatch();

  const detail = useSelector(taskSelectors.getDetail);

  const params = useMemo(() => ({id}), [id]);

  const {onLoad, ...res} = useFetch({
    fetcher: taskActions.fetchDetailAsync,
    loader: 'task',
    selectors: taskSelectors,
    params,
  });

  return {...res, detail};
};
