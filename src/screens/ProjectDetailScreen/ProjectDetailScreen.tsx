import React, {FC} from 'react';

import {Button, DangerModal, TaskCard, Text, TrashIcon} from '@/components';
import {RefreshControl, SafeAreaView, ScrollView, View} from 'react-native';
import {DetailLayout} from '@/layouts';

import {useData} from './useData';
import {useStyles} from './useStyles';

import {Routes} from '@/navigation';
import {ProjectStackParamList} from '@/navigation/ProjectNavigator';
import {StackScreenProps} from '@react-navigation/stack';
import {useTranslation} from 'react-i18next';

type TProps = StackScreenProps<ProjectStackParamList, Routes.PROJECT_DETAIL>;

export const ProjectDetailScreen: FC<TProps> = ({navigation, route}) => {
  const {styles} = useStyles();

  const {detail, isOpened, setIsOpened, onRemove, ...props} = useData(
    route.params,
  );

  const {t} = useTranslation();

  return (
    <DetailLayout
      {...props}
      title={detail?.title || ''}
      rightIcon={<TrashIcon color="danger" size={28} />}
      onPressRightIcon={() => setIsOpened(true)}
      renderFooter={
        <Button
          variant="round"
          onPress={() =>
            navigation.navigate(Routes.PROJECT_FORM, {type: 'update'})
          }>
          {t('buttons.update')}
        </Button>
      }
      onBack={navigation.goBack}>
      <View style={styles.description}>
        <Text>{detail?.description}</Text>
      </View>

      {detail?.tasks.map(task => (
        <TaskCard
          task={{...task, project: detail}}
          onPress={() =>
            navigation.navigate(Routes.TASK_DETAIL, {id: task._id})
          }
        />
      ))}

      <DangerModal
        visible={isOpened}
        onClose={() => setIsOpened(false)}
        onSubmit={onRemove}>
        <Text size={18} align="center">
          {t('titles.project_remove')}
        </Text>
      </DangerModal>
    </DetailLayout>
  );
};
