import {Auth, authActions} from '@/bus/auth';
import {yupResolver} from '@hookform/resolvers/yup';
import {useForm} from 'react-hook-form';
import {useDispatch} from 'react-redux';
import {schema} from '../SignInScreen/validate';

export const useData = () => {
  const dispatch = useDispatch();

  const {
    control,
    handleSubmit,
    formState: {errors},
  } = useForm<Auth.SignUpForm>({
    defaultValues: {
      email: 'test@test.com',
      username: 'romankes',
      password: 'polopolo',
      confirmPassword: 'polopolo',
    },
    resolver: yupResolver(schema),
  });

  const onSubmit = ({confirmPassword, ...data}: Auth.SignUpForm) => {
    console.log(errors);

    dispatch(authActions.signUpAsync(data));
  };

  return {control, handleSubmit: handleSubmit(onSubmit)};
};
