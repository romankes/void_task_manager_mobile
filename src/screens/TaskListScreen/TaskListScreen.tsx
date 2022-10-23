import React, {FC} from 'react';

import {Button, Loader, TaskGroupCard} from '@/components';
import {FlatList, View} from 'react-native';

import {TASK} from '@/constants';
import {useData} from './useData';
import {useStyles} from './useStyles';

import {Routes} from '@/navigation';
import {TaskStackParamList} from '@/navigation/TaskNavigator';
import {StackScreenProps} from '@react-navigation/stack';
import {useTranslation} from 'react-i18next';

import {ListLayout} from '@/layouts';

type TProps = StackScreenProps<TaskStackParamList, Routes.TASK_LIST>;

export const TaskListScreen: FC<TProps> = ({navigation}) => {
  const {styles} = useStyles();

  const {
    isLoading,
    onRefresh,
    refreshing,
    tasks,
    date,
    setDate,
    status,
    setStatus,
  } = useData();

  const {t} = useTranslation();

  return (
    <ListLayout
      onCreate={() => navigation.navigate(Routes.TASK_FORM, {type: 'create'})}
      title={t('task_list.title')}>
      <FlatList
        style={[styles.content, styles.container]}
        data={tasks}
        keyExtractor={([_id]) => `date-${_id}`}
        showsVerticalScrollIndicator={false}
        ListHeaderComponent={
          <>
            <View style={[styles.buttons, styles.container]}>
              {TASK.FILTER_BUTTONS.DATE.map(item => (
                <Button
                  color={date === item ? 'action' : 'outline'}
                  size="small"
                  key={`filter-button-${item}`}
                  onPress={() => setDate(item)}
                  style={styles.button}>
                  {t(`date_filters.${item}`)}
                </Button>
              ))}
            </View>
            <View style={[styles.buttons, styles.container]}>
              {TASK.FILTER_BUTTONS.STATUS.map(item => (
                <Button
                  color={status === item ? 'action' : 'outline'}
                  size="small"
                  key={`filter-button-${item}`}
                  onPress={() => setStatus(item)}
                  style={styles.button}>
                  {t(`status_filters.${item}`)}
                </Button>
              ))}
            </View>
          </>
        }
        renderItem={({item}) => (
          <TaskGroupCard
            date={item[0]}
            tasks={item[1]}
            onPress={id => navigation.navigate(Routes.TASK_DETAIL, {id})}
          />
        )}
        ListEmptyComponent={
          isLoading && !refreshing ? <Loader height={200} /> : null
        }
        onRefresh={onRefresh}
        refreshing={refreshing}
      />
    </ListLayout>
  );
};
