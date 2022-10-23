import React, {FC, useRef} from 'react';

import {DetailLayout} from '@/layouts';
import {SafeAreaView, TouchableOpacity, View} from 'react-native';

import {useData} from './useData';
import {useStyles} from './useStyles';

import {Routes} from '@/navigation';
import {UserStackParamList} from '@/navigation/UserNavigator';
import {StackScreenProps} from '@react-navigation/stack';
import {
  Avatar,
  Button,
  FilledField,
  IconButton,
  ImagePicker,
  Text,
} from '@/components';
import {useTranslation} from 'react-i18next';
import {ActionSheetRef} from 'react-native-actions-sheet';
import {Controller} from 'react-hook-form';

type TProps = StackScreenProps<UserStackParamList, Routes.USER_UPDATE>;

export const UserUpdateScreen: FC<TProps> = ({navigation}) => {
  const {styles} = useStyles();
  const {control, handleSubmit} = useData();

  const {t} = useTranslation();

  const pickerRef = useRef<ActionSheetRef>(null);

  return (
    <DetailLayout
      onBack={navigation.goBack}
      title={`${t('form.titles.update')} ${t('user_update.title')}`}
      isLoading={false}
      renderFooter={
        <Button variant="round" onPress={handleSubmit}>
          {t('buttons.save')}
        </Button>
      }>
      <View>
        <Controller
          control={control}
          name="avatar"
          render={({field: {value, onChange}}) => (
            <>
              <IconButton
                size={130}
                style={styles.avatar}
                onPress={() => pickerRef.current?.show()}>
                <Avatar
                  fromApi={value?.fromApi}
                  size="large"
                  variant="round"
                  url={value?.uri}
                />
              </IconButton>
              <ImagePicker
                customRef={pickerRef}
                onUpload={assets => {
                  if (assets.length) {
                    const image = assets[0];

                    onChange({
                      uri: image.uri,
                      name: image.fileName,
                      type: image.type,
                    });
                  }
                }}
              />
            </>
          )}
        />

        <Controller
          control={control}
          name="username"
          render={({field: {onChange, value, onBlur}, fieldState: {error}}) => (
            <FilledField
              onChangeText={onChange}
              value={value}
              onBlur={onBlur}
              placeholder={t('form.placeholders.username')}
              label={t('form.labels.username')}
              error={error?.message}
            />
          )}
        />
      </View>
    </DetailLayout>
  );
};
