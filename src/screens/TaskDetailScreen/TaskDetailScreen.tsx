import React, {FC} from 'react';

import {useData} from './useData';
import {useStyles} from './useStyles';

import {Routes} from '@/navigation';
import {TaskStackParamList} from '@/navigation/TaskNavigator';
import {StackScreenProps} from '@react-navigation/stack';
import {DetailLayout} from '@/layouts';
import {View} from 'react-native';
import {Timer} from '@/components';

type TProps = StackScreenProps<TaskStackParamList, Routes.TASK_DETAIL>;

export const TaskDetailScreen: FC<TProps> = ({navigation, route}) => {
  const {styles} = useStyles();

  const {detail, ...other} = useData(route.params);

  return (
    <DetailLayout
      {...other}
      title={detail?.title || ''}
      onBack={navigation.goBack}
      renderFooter={<></>}>
      <Timer
        startDate={detail?.startDate}
        endDate={detail?.endDate}
        onPress={() => {}}
      />
    </DetailLayout>
  );
};
