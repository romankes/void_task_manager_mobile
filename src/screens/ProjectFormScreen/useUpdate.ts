import {Project, projectSelectors} from '@/bus/project';
import {useMemo} from 'react';
import {useSelector} from 'react-redux';

export const useUpdate = () => {
  const detail = useSelector(projectSelectors.getDetail);

  const onUpdate = (data: Project.Form) => {
    console.log(data);
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
