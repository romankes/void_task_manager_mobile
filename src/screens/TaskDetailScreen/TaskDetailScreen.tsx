import React, {FC} from 'react';

import {View} from 'react-native';
import {Button, Text, Timer} from '@/components';
import {DetailLayout} from '@/layouts';

import {useData} from './useData';
import {useStyles} from './useStyles';

import {Routes} from '@/navigation';
import {TaskStackParamList} from '@/navigation/TaskNavigator';
import {StackScreenProps} from '@react-navigation/stack';
import {useTranslation} from 'react-i18next';

type TProps = StackScreenProps<TaskStackParamList, Routes.TASK_DETAIL>;

export const TaskDetailScreen: FC<TProps> = ({navigation, route}) => {
  const {styles} = useStyles();

  const {detail, onUpdate, ...other} = useData(route.params);

  const {t} = useTranslation();

  return (
    <DetailLayout
      {...other}
      title={detail?.title || ''}
      onBack={navigation.goBack}
      renderFooter={
        <Button
          variant="round"
          onPress={() =>
            navigation.navigate(Routes.TASK_FORM, {type: 'update'})
          }>
          {t('buttons.update')}
        </Button>
      }>
      <Text margin={{top: 12}} size={16}>
        {detail?.description}
      </Text>
      <View style={styles.timer}>
        <Timer
          startDate={detail?.startDate}
          endDate={detail?.endDate}
          onPress={onUpdate}
        />
      </View>
    </DetailLayout>
  );
};
