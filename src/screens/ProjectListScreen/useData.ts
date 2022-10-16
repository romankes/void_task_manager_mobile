import {Project, projectActions, projectSelectors} from '@/bus/project';
import {useFetch} from '@/hooks';
import {useCallback, useMemo} from 'react';
import {DragEndParams} from 'react-native-draggable-flatlist';
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

  const onUpdatePriority = useCallback(
    ({data, from, to}: DragEndParams<Project.Item>) => {
      console.log(data[0]._id, from, to);
      //TODO: update
    },
    [],
  );

  return {isLoading, onRefresh, refreshing, projects, onUpdatePriority};
};
