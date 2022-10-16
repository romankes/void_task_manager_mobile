import {Project, projectActions, projectSelectors} from '@/bus/project';
import {useMemo} from 'react';
import {useDispatch, useSelector} from 'react-redux';

export const useUpdate = () => {
  const dispatch = useDispatch();
  const detail = useSelector(projectSelectors.getDetail);

  const onUpdate = (project: Project.Form) => {
    if (detail) {
      dispatch(projectActions.updateItemAsync({id: detail._id, project}));
    }
  };

  const initValue: Project.Form | null = useMemo(
    () =>
      detail && {
        title: detail.title,
        maxHours: detail.maxHours,
        description: detail.description,
      },
    [detail],
  );

  return {initValue, onUpdate};
};
