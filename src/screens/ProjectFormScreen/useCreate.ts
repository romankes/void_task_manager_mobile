import {Project, projectActions} from '@/bus/project';
import {useDispatch} from 'react-redux';

export const useCreate = () => {
  const dispatch = useDispatch();

  const onCreate = (data: Project.Form) => {
    dispatch(projectActions.createItemAsync(data));
  };

  return {onCreate};
};
