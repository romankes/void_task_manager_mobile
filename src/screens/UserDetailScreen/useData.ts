import {authActions} from '@/bus/auth';
import {userSelectors} from '@/bus/user';
import {useCallback, useState} from 'react';
import {useDispatch, useSelector} from 'react-redux';

export const useData = () => {
  const dispatch = useDispatch();

  const [isOpened, setIsOpened] = useState(false);

  const detail = useSelector(userSelectors.getDetail);

  const onLogout = useCallback(() => {
    dispatch(authActions.logoutAsync());
  }, []);

  const onRemove = useCallback(() => {
    setIsOpened(false);
  }, []);

  return {detail, onLogout, isOpened, setIsOpened, onRemove};
};
