import {Project, projectSelectors} from '@/bus/project';
import {Task, taskActions} from '@/bus/task';
import {useForm} from 'react-hook-form';
import {useDispatch, useSelector} from 'react-redux';

export const useData = () => {
  const dispatch = useDispatch();

  const projects = useSelector(projectSelectors.getItems);

  const {control, handleSubmit} = useForm<Task.Form<Project.Item | null>>({
    defaultValues: {
      date: '',
      description: 'Test description',
      project: null,
      title: 'Test',
    },
  });

  const onSubmit = (data: Task.Form<Project.Item | null>) => {
    dispatch(
      taskActions.createItemAsync({
        ...data,
        project: data.project?._id || '',
      }),
    );
  };

  return {handleSubmit: handleSubmit(onSubmit), control, projects};
};
