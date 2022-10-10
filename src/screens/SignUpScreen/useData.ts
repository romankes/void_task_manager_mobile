import {Auth} from '@/bus/auth';
import {useForm} from 'react-hook-form';
import {useDispatch} from 'react-redux';

export const useData = () => {
  const dispatch = useDispatch();

  const {control, handleSubmit} = useForm<Auth.SignUpForm>({
    defaultValues: {
      email: '',
      password: '',
      confirmPassword: '',
    },
  });

  const onSubmit = ({confirmPassword, ...data}: Auth.SignUpForm) => {};

  return {control, handleSubmit: handleSubmit(onSubmit)};
};
