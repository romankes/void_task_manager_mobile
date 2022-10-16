import {Project, projectSelectors} from '@/bus/project';
import {Task, taskActions} from '@/bus/task';
import {useEffect} from 'react';
import {useForm} from 'react-hook-form';
import {useDispatch, useSelector} from 'react-redux';
import {useCreate} from './useCreate';
import {useUpdate} from './useUpdate';

type TArgs = {
  type?: 'create' | 'update';
};

const INIT_VALUE: Task.Form<Project.Item | null> = {
  date: '',
  description: 'Test description',
  project: null,
  title: 'Testssss',
};

export const useData = ({type = 'create'}: TArgs) => {
  const dispatch = useDispatch();

  const {onCreate} = useCreate();
  const {initValue, onUpdate} = useUpdate();

  const projects = useSelector(projectSelectors.getItems);

  const {control, handleSubmit, reset} = useForm<
    Task.Form<Project.Item | null>
  >({
    defaultValues: initValue || INIT_VALUE,
  });

  useEffect(() => {
    if (type === 'update' && initValue) {
      reset(initValue);
    }
  }, [initValue, type]);

  return {
    handleSubmit: handleSubmit(type === 'create' ? onCreate : onUpdate),
    control,
    projects,
  };
};
