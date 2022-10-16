import {Project} from '@/bus/project';
import {Task, taskActions} from '@/bus/task';
import {useDispatch} from 'react-redux';

export const useCreate = () => {
  const dispatch = useDispatch();

  const onCreate = (data: Task.Form<Project.Item | null>) => {
    dispatch(
      taskActions.createItemAsync({
        ...data,
        project: data.project?._id || '',
      }),
    );
  };

  return {onCreate};
};
