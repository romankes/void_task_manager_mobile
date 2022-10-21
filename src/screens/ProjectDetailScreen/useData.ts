import {Project, projectActions, projectSelectors} from '@/bus/project';
import {useFetch} from '@/hooks';
import {useCallback, useMemo, useState} from 'react';
import {useDispatch, useSelector} from 'react-redux';

type TArgs = {
  id: string;
};

export const useData = ({id}: TArgs) => {
  const dispatch = useDispatch();

  const detail = useSelector(projectSelectors.getDetail);

  const [isOpened, setIsOpened] = useState(false);

  const params: Project.ReqFetchDetail = useMemo(() => ({id}), [id]);

  const {isLoading, onRefresh, refreshing} = useFetch<Project.ReqFetchDetail>({
    fetcher: projectActions.fetchDetailAsync,
    loader: 'project',
    selectors: projectSelectors,
    params,
  });

  const onRemove = useCallback(() => {
    if (detail) {
      dispatch(projectActions.removeItemAsync({id: detail._id}));
    }
    setIsOpened(false);
  }, [detail]);

  return {
    isLoading,
    onRefresh,
    refreshing,
    detail,
    onRemove,
    setIsOpened,
    isOpened,
  };
};
