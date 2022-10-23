import React, {FC} from 'react';

import {SafeAreaView, ScrollView, View} from 'react-native';

import {Calendar} from 'react-native-calendars';

import {useData} from './useData';
import {useStyles} from './useStyles';

import {Routes} from '@/navigation';
import {TaskStackParamList} from '@/navigation/TaskNavigator';
import {StackScreenProps} from '@react-navigation/stack';
import {Controller} from 'react-hook-form';
import {Button, FilledField, SelectBox, Text} from '@/components';
import {useTranslation} from 'react-i18next';
import {Project} from '@/bus/project';
import {DetailLayout} from '@/layouts';

type TProps = StackScreenProps<TaskStackParamList, Routes.TASK_FORM>;

export const TaskFormScreen: FC<TProps> = ({navigation, route}) => {
  const {styles, background} = useStyles();

  const {control, handleSubmit, projects} = useData({type: route.params?.type});

  const {t} = useTranslation();

  return (
    <DetailLayout
      onBack={navigation.goBack}
      title={`${t(`form.titles.${route.params?.type || 'create'}`)} ${t(
        'task_form.title',
      )}`}
      isLoading={false}
      renderFooter={
        <Button variant="round" onPress={handleSubmit}>
          {t(`buttons.${route.params?.type === 'create' ? 'create' : 'save'}`)}
        </Button>
      }>
      <View style={styles.calendar}>
        <Controller
          control={control}
          name="date"
          render={({field: {onChange, value}}) => (
            <Calendar
              theme={{
                calendarBackground: background,
              }}
              minDate={new Date().toString()}
              onDayPress={v => onChange(v.dateString)}
              markedDates={value ? {[value]: {selected: true}} : {}}
            />
          )}
        />
      </View>

      <Controller
        control={control}
        name="title"
        render={({field: {value, onChange, onBlur}, fieldState: {error}}) => (
          <FilledField
            onChange={onChange}
            value={value}
            onBlur={onBlur}
            error={error?.message}
            label={t('form.labels.task_title')}
            placeholder={t('form.placeholders.task_title')}
          />
        )}
      />

      <Controller
        control={control}
        name="description"
        render={({field: {value, onChange, onBlur}, fieldState: {error}}) => (
          <FilledField
            onChange={onChange}
            value={value}
            onBlur={onBlur}
            error={error?.message}
            label={t('form.labels.task_description')}
            placeholder={t('form.placeholders.task_description')}
            numberOfLines={4}
            multiline
          />
        )}
      />
      <Controller
        control={control}
        name="project"
        render={({field: {onChange, value}}) => (
          <SelectBox<Project.Item>
            margin={{bottom: 18}}
            current={value || null}
            renderCurrent={current =>
              current?.title || t('form.placeholders.project')
            }
            label={t('form.labels.project')}
            data={projects}
            onChange={onChange}
            renderItem={item => <Text>{item.title}</Text>}
          />
        )}
      />
    </DetailLayout>
  );
};
