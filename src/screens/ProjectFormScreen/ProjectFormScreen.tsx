import {Button, FilledField} from '@/components';
import {Routes} from '@/navigation';
import {ProjectStackParamList} from '@/navigation/ProjectNavigator';
import {StackScreenProps} from '@react-navigation/stack';
import React, {FC} from 'react';
import {Controller} from 'react-hook-form';
import {useTranslation} from 'react-i18next';
import {SafeAreaView, ScrollView, View} from 'react-native';
import {useData} from './useData';
import {useStyles} from './useStyles';

type TProps = StackScreenProps<ProjectStackParamList, Routes.PROJECT_FORM>;

export const ProjectFormScreen: FC<TProps> = ({route}) => {
  const {styles} = useStyles();

  const {control, handleSubmit} = useData({type: route.params?.type});

  const {t} = useTranslation();

  return (
    <SafeAreaView style={styles.wrapper}>
      <ScrollView style={styles.container} showsVerticalScrollIndicator={false}>
        <Controller
          name="maxHours"
          control={control}
          render={({field: {value, onChange, onBlur}, fieldState: {error}}) => (
            <FilledField
              label={t('form.labels.max_hours')}
              placeholder={t('form.placeholders.max_hours')}
              value={value.toString()}
              onChangeText={onChange}
              onBlur={onBlur}
              keyboardType="number-pad"
            />
          )}
        />
        <Controller
          name="title"
          control={control}
          render={({field: {value, onChange, onBlur}, fieldState: {error}}) => (
            <FilledField
              label={t('form.labels.project_title')}
              placeholder={t('form.placeholders.project_title')}
              value={value}
              onChangeText={onChange}
              onBlur={onBlur}
            />
          )}
        />
        <Controller
          name="description"
          control={control}
          render={({field: {value, onChange, onBlur}, fieldState: {error}}) => (
            <FilledField
              label={t('form.labels.project_description')}
              placeholder={t('form.placeholders.project_description')}
              value={value}
              onChangeText={onChange}
              onBlur={onBlur}
              numberOfLines={4}
              multiline
            />
          )}
        />
      </ScrollView>
      <View style={styles.container}>
        <Button onPress={handleSubmit}>
          {t(`buttons.${route.params?.type === 'create' ? 'create' : 'save'}`)}
        </Button>
      </View>
    </SafeAreaView>
  );
};
