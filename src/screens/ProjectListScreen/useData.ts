import {Project, projectActions, projectSelectors} from '@/bus/project';
import {useFetch} from '@/hooks';
import {useCallback, useEffect, useMemo, useState} from 'react';
import {DragEndParams} from 'react-native-draggable-flatlist';
import {useDispatch, useSelector} from 'react-redux';

export const useData = () => {
  const dispatch = useDispatch();

  const projects = useSelector(projectSelectors.getItems);

  const [projectsData, setProjectsData] = useState(projects);

  console.log(projects);

  useEffect(() => {
    setProjectsData(projects);
  }, [projects]);

  const params: Project.ReqFetchItems = useMemo(() => ({}), []);

  const {isLoading, onRefresh, refreshing} = useFetch<Project.ReqFetchItems>({
    fetcher: projectActions.fetchItemsAsync,
    selectors: projectSelectors,
    loader: 'project',
    params,
  });

  const updated = useMemo(
    () => projectsData.some(({_id}, i) => projects[i]?._id !== _id),
    [projects, projectsData],
  );

  const onUpdatePriority = useCallback(
    ({data, from, to}: DragEndParams<Project.Item>) => {
      console.log(data.length, from, to);
      //TODO: update
      setProjectsData(data);
    },
    [],
  );

  return {
    isLoading,
    onRefresh,
    refreshing,
    projects: projectsData,
    onUpdatePriority,
    updated,
  };
};
