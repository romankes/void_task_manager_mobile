import {Project, projectActions, projectSelectors} from '@/bus/project';
import {useFetch} from '@/hooks';
import {useMemo} from 'react';
import {useDispatch, useSelector} from 'react-redux';

export const useData = () => {
  const dispatch = useDispatch();

  const projects = useSelector(projectSelectors.getItems);

  const params: Project.ReqFetchItems = useMemo(() => ({}), []);

  const {isLoading, onRefresh, refreshing} = useFetch<Project.ReqFetchItems>({
    fetcher: projectActions.fetchItemsAsync,
    selectors: projectSelectors,
    loader: 'project',
    params,
  });

  return {isLoading, onRefresh, refreshing, projects};
};
