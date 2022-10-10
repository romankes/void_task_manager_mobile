import {Auth} from '@/bus/auth';
import {useForm} from 'react-hook-form';
import {useDispatch} from 'react-redux';

export const useData = () => {
  const dispatch = useDispatch();

  const {handleSubmit, control} = useForm<Auth.ReqSignIn>({
    defaultValues: {
      email: '',
      password: '',
    },
  });

  const onSubmit = (data: Auth.ReqSignIn) => {};

  return {
    onSubmit: handleSubmit(onSubmit),
    control,
  };
};
