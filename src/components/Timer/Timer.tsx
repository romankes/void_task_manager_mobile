import React, {FC} from 'react';

import {TouchableOpacity, View} from 'react-native';
import {Text} from '@/components';
import {useData} from './useData';
import {useStyles} from './useStyles';

type TProps = {
  startDate?: string | null;
  endDate?: string | null;

  onPress: () => any;
};

export const Timer: FC<TProps> = ({startDate, endDate, onPress}) => {
  const {date} = useData({startDate, endDate});

  const {styles} = useStyles();

  return (
    <TouchableOpacity
      style={styles.wrapper}
      activeOpacity={startDate ? 1 : 0.6}
      onPress={onPress}>
      <Text size={20} family="medium" color="light">
        {date}
      </Text>
    </TouchableOpacity>
  );
};
