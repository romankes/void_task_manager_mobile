import {Project} from '@/bus/project';
import {Task, taskActions, taskSelectors} from '@/bus/task';
import {useMemo} from 'react';
import {useDispatch, useSelector} from 'react-redux';

export const useUpdate = () => {
  const dispatch = useDispatch();

  const detail = useSelector(taskSelectors.getDetail);

  const initValue: Task.Form<Project.Item> | null = useMemo(
    () =>
      detail && {
        title: detail.title,
        project: detail.project,
        description: detail.description,
        date: detail.date,
      },
    [detail],
  );

  const onUpdate = (data: Task.Form<Project.Item | null>) => {
    if (detail) {
      dispatch(
        taskActions.updateItemAsync({
          id: detail._id,
          task: {...data, project: data.project?._id},
        }),
      );
    }
  };

  return {initValue, onUpdate};
};
