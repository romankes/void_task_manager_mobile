import React, {FC} from 'react';

import {AuthLayout} from '@/layouts';

import {useData} from './useData';
import {useStyles} from './useStyles';

import {useTranslation} from 'react-i18next';

import {StackScreenProps} from '@react-navigation/stack';
import {AuthStackParamList} from '@/navigation/AuthNavigator';
import {Routes} from '@/navigation';
import {View} from 'react-native';
import {Button, FilledField} from '@/components';
import {Controller} from 'react-hook-form';

type TProps = StackScreenProps<AuthStackParamList, Routes.SIGN_UP>;

export const SignUpScreen: FC<TProps> = ({navigation}) => {
  const {styles} = useStyles();

  const {control, handleSubmit} = useData();

  const {t} = useTranslation();

  return (
    <AuthLayout
      renderFooter={
        <Button onPress={handleSubmit}>{t('buttons.sign_up')}</Button>
      }
      title={t('sign_up.title')}
      hasBack
      onBack={navigation.goBack}>
      <Controller
        control={control}
        name="email"
        render={({field: {onChange, onBlur, value}, fieldState: {error}}) => (
          <FilledField
            value={value}
            onChangeText={onChange}
            error={error?.message}
            onBlur={onBlur}
            placeholder={t('form.placeholders.email')}
            label={t('form.labels.email')}
            autoCapitalize="none"
          />
        )}
      />
      <Controller
        control={control}
        name="username"
        render={({field: {onChange, onBlur, value}, fieldState: {error}}) => (
          <FilledField
            value={value}
            onChangeText={onChange}
            error={error?.message}
            onBlur={onBlur}
            placeholder={t('form.placeholders.username')}
            label={t('form.labels.username')}
            autoCapitalize="none"
          />
        )}
      />

      <Controller
        control={control}
        name="password"
        render={({field: {onChange, onBlur, value}, fieldState: {error}}) => (
          <FilledField
            value={value}
            onChangeText={onChange}
            error={error?.message}
            onBlur={onBlur}
            placeholder={t('form.placeholders.password')}
            label={t('form.labels.password')}
            autoCapitalize="none"
          />
        )}
      />

      <Controller
        control={control}
        name="confirmPassword"
        render={({field: {onChange, onBlur, value}, fieldState: {error}}) => (
          <FilledField
            value={value}
            onChangeText={onChange}
            error={error?.message}
            onBlur={onBlur}
            placeholder={t('form.placeholders.password')}
            label={t('form.labels.confirm_password')}
            autoCapitalize="none"
          />
        )}
      />
    </AuthLayout>
  );
};
