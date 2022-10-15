import React, {FC} from 'react';

import {Text, ChevronIcon} from '@/components';
import {TouchableOpacity, View} from 'react-native';

import {Task} from '@/bus/task';

import {useStyles} from './useStyles';

type TProps = {
  task: Task.Item;

  onPress: () => any;
};

export const TaskCard: FC<TProps> = ({onPress, task}) => {
  const {styles} = useStyles();

  return (
    <TouchableOpacity
      style={styles.wrapper}
      activeOpacity={0.6}
      onPress={onPress}>
      <View>
        <Text family="medium" size={16}>
          {task.title}
        </Text>
        <Text color="action">{task.project.title}</Text>
      </View>
      <ChevronIcon color="default" size={24} />
    </TouchableOpacity>
  );
};
