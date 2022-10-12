import {Button, Loader} from '@/components';
import {TASK} from '@/constants';
import React, {FC} from 'react';

import {FlatList, SafeAreaView, View} from 'react-native';

import {useData} from './useData';
import {useStyles} from './useStyles';

type TProps = {};

export const TaskListScreen: FC<TProps> = ({}) => {
  const {styles} = useStyles();

  const {isLoading, onRefresh, refreshing, tasks, type, setType} = useData();

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
            {item}
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
    </SafeAreaView>
  );
};
