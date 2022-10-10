import {Project} from '@/bus/project';
import {useEffect} from 'react';
import {useForm} from 'react-hook-form';
import {useDispatch} from 'react-redux';
import {useCreate} from './useCreate';
import {useUpdate} from './useUpdate';

type TArgs = {
  type?: 'create' | 'update';
};

const INIT_VALUE: Project.Form = {
  title: '',
  description: '',
  maxHours: 0,
};

export const useData = ({type = 'create'}: TArgs) => {
  const dispatch = useDispatch();

  const {onCreate} = useCreate();
  const {initValue, onUpdate} = useUpdate();

  const {control, handleSubmit, reset} = useForm<Project.Form>({
    defaultValues: initValue || INIT_VALUE,
  });

  useEffect(() => {
    if (type === 'update') {
      reset(initValue || INIT_VALUE);
    }
  }, [type, initValue]);

  return {
    handleSubmit: handleSubmit(type === 'create' ? onCreate : onUpdate),
    control,
  };
};
