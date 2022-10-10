import {Auth, authActions} from '@/bus/auth';
import {useForm} from 'react-hook-form';
import {useDispatch} from 'react-redux';

import {yupResolver} from '@hookform/resolvers/yup';
import {schema} from './validate';

export const useData = () => {
  const dispatch = useDispatch();

  const {handleSubmit, control} = useForm<Auth.ReqSignIn>({
    defaultValues: {
      email: '',
      password: '',
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
