import {userSelectors} from '@/bus/user';
import {useDispatch, useSelector} from 'react-redux';

export const useData = () => {
  const dispatch = useDispatch();

  const detail = useSelector(userSelectors.getDetail);

  return {detail};
};
