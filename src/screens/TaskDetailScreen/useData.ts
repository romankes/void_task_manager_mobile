import {taskActions, taskSelectors} from '@/bus/task';
import {useFetch} from '@/hooks';
import {useCallback, useMemo} from 'react';
import {useDispatch, useSelector} from 'react-redux';

type TArgs = {
  id: string;
};

type TStatus = 'waiting' | 'started' | 'stopped';

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

  const onUpdate = useCallback(
    (status: TStatus) => {
      if (detail) {
        if (status === 'waiting') {
          dispatch(
            taskActions.updateItemAsync({
              id: detail._id,
              task: {startDate: new Date().toISOString()},
            }),
          );
        }

        if (status === 'started') {
          dispatch(
            taskActions.updateItemAsync({
              id: detail._id,
              task: {endDate: new Date().toISOString()},
            }),
          );
        }
      }
    },
    [detail],
  );

  return {...res, onUpdate, detail};
};
