import {getCurrent, Routes} from '@/navigation';
import {useFocusEffect} from '@react-navigation/native';
import {useMemo, useState} from 'react';

const HIDDEN_ROUTES: Routes[] = [Routes.PROJECT_DETAIL];

export const useTabBar = () => {
  const [route, setRoute] = useState<Routes | ''>('');

  useFocusEffect(() => {
    const currentRoute = getCurrent() as Routes | undefined;

    if (currentRoute) {
      setRoute(currentRoute);
    }
  });

  const isShow = useMemo(() => {
    return !route || !HIDDEN_ROUTES.includes(route);
  }, [route]);

  return {isShow};
};
