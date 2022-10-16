import React, {FC, useMemo} from 'react';

import {TouchableOpacity, View} from 'react-native';
import {Text, PlayIcon, StopIcon} from '@/components';

import {useData} from './useData';
import {useStyles} from './useStyles';

type TStatus = 'waiting' | 'started' | 'stopped';

type TProps = {
  startDate?: string | null;
  endDate?: string | null;

  onPress: (status: TStatus) => any;
};

export const Timer: FC<TProps> = ({startDate, endDate, onPress}) => {
  const {date} = useData({startDate, endDate});

  const {styles} = useStyles();

  const renderIcon = useMemo(() => {
    if (!startDate) {
      return <PlayIcon size={52} color="light" />;
    }

    if (!endDate) {
      return <StopIcon size={28} color="light" />;
    }
    return null;
  }, [endDate, startDate]);

  const status: TStatus = useMemo(() => {
    if (!startDate) {
      return 'waiting';
    }

    if (!endDate) {
      return 'started';
    }
    return 'stopped';
  }, [endDate, startDate]);

  return (
    <TouchableOpacity
      style={styles.wrapper}
      activeOpacity={0.9}
      onPress={() => onPress(status)}>
      {renderIcon}
      <Text
        size={20}
        family="medium"
        color="light"
        margin={{bottom: renderIcon ? 16 : 0}}>
        {date}
      </Text>
    </TouchableOpacity>
  );
};
