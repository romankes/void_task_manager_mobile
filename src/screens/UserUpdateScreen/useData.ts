import {User, userActions, userSelectors} from '@/bus/user';
import {useEffect} from 'react';
import {useForm} from 'react-hook-form';
import {useDispatch, useSelector} from 'react-redux';

const INIT: User.ReqUpdateDetail = {
  username: '',
  avatar: null,
};

export const useData = () => {
  const dispatch = useDispatch();

  const user = useSelector(userSelectors.getDetail);

  const {control, reset, handleSubmit} = useForm<User.ReqUpdateDetail>({
    defaultValues: INIT,
  });

  useEffect(() => {
    if (user) {
      reset({
        username: user.username,
        avatar: user.avatar ? {uri: user.avatar.url, fromApi: true} : null,
      });
    }
  }, [user]);

  const onSubmit = (data: User.ReqUpdateDetail) => {
    dispatch(userActions.updateItemAsync(data));
  };

  return {control, handleSubmit: handleSubmit(onSubmit)};
};
