import React, {FC} from 'react';

import {Button, Loader} from '@/components';
import {FlatList, SafeAreaView, View} from 'react-native';

import {TASK} from '@/constants';
import {useData} from './useData';
import {useStyles} from './useStyles';

import {Routes} from '@/navigation';
import {TaskStackParamList} from '@/navigation/TaskNavigator';
import {StackScreenProps} from '@react-navigation/stack';
import {useTranslation} from 'react-i18next';

//TODO: Real need react-calendars?

type TProps = StackScreenProps<TaskStackParamList, Routes.TASK_LIST>;

export const TaskListScreen: FC<TProps> = ({navigation}) => {
  const {styles} = useStyles();

  const {isLoading, onRefresh, refreshing, tasks, type, setType} = useData();

  const {t} = useTranslation();

  return (
    <SafeAreaView style={styles.wrapper}>
      <View style={[styles.buttons, styles.container]}>
        {TASK.FILTER_BUTTONS.map(item => (
          <Button
            color={type === item ? 'action' : 'outline'}
            size="small"
            key={`filter-button-${item}`}
            onPress={() => setType(item)}
            style={styles.button}>
            {t(`date_filters.${item}`)}
          </Button>
        ))}
      </View>
      <FlatList
        style={[styles.content, styles.container]}
        data={tasks}
        keyExtractor={({_id}) => `task-${_id}`}
        renderItem={() => null}
        ListEmptyComponent={
          isLoading && !refreshing ? <Loader height={200} /> : null
        }
        onRefresh={onRefresh}
        refreshing={refreshing}
      />
      <View style={[styles.footer, styles.container]}>
        <Button
          onPress={() =>
            navigation.navigate(Routes.TASK_FORM, {type: 'create'})
          }>
          Create
        </Button>
      </View>
    </SafeAreaView>
  );
};
