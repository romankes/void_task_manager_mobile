import {Auth, authActions} from '@/bus/auth';
import {useForm} from 'react-hook-form';
import {useDispatch} from 'react-redux';

import {yupResolver} from '@hookform/resolvers/yup';
import {schema} from './validate';

export const useData = () => {
  const dispatch = useDispatch();

  const {handleSubmit, control} = useForm<Auth.ReqSignIn>({
    defaultValues: {
      email: 'test@test.com',
      password: 'polopolo',
    },
    resolver: yupResolver(schema),
  });

  const onSubmit = (data: Auth.ReqSignIn) => {
    dispatch(authActions.signInAsync(data));
  };

  return {
    onSubmit: handleSubmit(onSubmit),
    control,
  };
};
