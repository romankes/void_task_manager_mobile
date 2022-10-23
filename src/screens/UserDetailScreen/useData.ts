import {appActions} from '@/bus/app';
import {authActions} from '@/bus/auth';
import {userActions, userSelectors} from '@/bus/user';
import {Languages} from '@/i18n';
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
    dispatch(userActions.removeItemAsync());
    setIsOpened(false);
  }, []);

  const onUpdateLanguage = useCallback((language: Languages) => {
    dispatch(appActions.updateLanguageAsync({language}));
  }, []);

  return {detail, onLogout, isOpened, setIsOpened, onRemove, onUpdateLanguage};
};
