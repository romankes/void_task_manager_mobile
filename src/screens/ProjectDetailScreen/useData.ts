import {Project, projectActions, projectSelectors} from '@/bus/project';
import {useFetch} from '@/hooks';
import {useMemo} from 'react';
import {useDispatch, useSelector} from 'react-redux';

type TArgs = {
  id: string;
};

export const useData = ({id}: TArgs) => {
  const dispatch = useDispatch();

  const detail = useSelector(projectSelectors.getDetail);

  console.log(detail);

  const params: Project.ReqFetchDetail = useMemo(() => ({id}), [id]);

  const {isLoading, onRefresh, refreshing} = useFetch<Project.ReqFetchDetail>({
    fetcher: projectActions.fetchDetailAsync,
    loader: 'project',
    selectors: projectSelectors,
    params,
  });

  return {isLoading, onRefresh, refreshing, detail};
};
