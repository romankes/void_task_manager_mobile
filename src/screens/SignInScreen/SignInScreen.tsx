import React, {FC} from 'react';

import {TouchableOpacity, View} from 'react-native';
import {Button, FilledField, IconButton, Text} from '@/components';
import {AuthLayout} from '@/layouts';
import {Controller} from 'react-hook-form';

import {useData} from './useData';
import {useStyles} from './useStyles';

import {useTranslation} from 'react-i18next';

import {Routes} from '@/navigation';
import {StackScreenProps} from '@react-navigation/stack';
import {AuthStackParamList} from '@/navigation/AuthNavigator';

type TProps = StackScreenProps<AuthStackParamList, Routes.SIGN_IN>;

export const SignInScreen: FC<TProps> = ({navigation}) => {
  const {styles} = useStyles();

  const {t} = useTranslation();

  const {onSubmit, control} = useData();

  return (
    <AuthLayout
      renderFooter={
        <View>
          <Button onPress={onSubmit}>{t('buttons.sign_in')}</Button>
          <View style={styles.footer}>
            <Text>{t('sign_in.footer')} </Text>
            <TouchableOpacity
              activeOpacity={0.6}
              onPress={() => navigation.navigate(Routes.SIGN_UP)}>
              <Text color="link">{t('sign_in.sign_up')}</Text>
            </TouchableOpacity>
          </View>
        </View>
      }
      title={t('sign_in.title')}>
      <Controller
        name="email"
        control={control}
        render={({field: {value, onChange, onBlur}, fieldState: {error}}) => (
          <FilledField
            label={t('form.labels.email')}
            placeholder={t('form.placeholders.email')}
            value={value}
            onChangeText={onChange}
            onBlur={onBlur}
            error={error?.message}
            keyboardType="email-address"
            autoCapitalize="none"
          />
        )}
      />
      <Controller
        name="password"
        control={control}
        render={({field: {value, onChange, onBlur}, fieldState: {error}}) => (
          <FilledField
            label={t('form.labels.password')}
            placeholder={t('form.placeholders.password')}
            value={value}
            onChangeText={onChange}
            onBlur={onBlur}
            error={error?.message}
            secureTextEntry
          />
        )}
      />
      <TouchableOpacity
        activeOpacity={0.6}
        onPress={() => navigation.navigate(Routes.FORGOT_PASSWORD)}>
        <Text color="link">{t('sign_in.forgot_password')}</Text>
      </TouchableOpacity>
    </AuthLayout>
  );
};
