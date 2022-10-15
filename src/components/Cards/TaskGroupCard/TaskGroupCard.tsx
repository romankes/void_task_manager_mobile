import React, {FC} from 'react';

import {Text, TaskCard} from '@/components';
import {View} from 'react-native';

import {Task} from '@/bus/task';

import {format} from 'date-fns';
import {useStyles} from './useStyles';

type TProps = {
  date: string;
  tasks: Task.Item[];
  onPress: (id: string) => any;
};

export const TaskGroupCard: FC<TProps> = ({date, onPress, tasks}) => {
  const {styles} = useStyles();

  return (
    <View style={styles.wrapper}>
      <Text align="center" family="bold" size={16} margin={{bottom: 12}}>
        {format(new Date(date), 'dd.MM.yyyy')}
      </Text>
      {tasks.map(task => (
        <TaskCard
          key={`task-${task._id}`}
          task={task}
          onPress={() => onPress(task._id)}
        />
      ))}
    </View>
  );
};
