import React, {FC} from 'react';

import {Button, Text} from '@/components';
import {RefreshControl, SafeAreaView, ScrollView} from 'react-native';
import {DetailLayout} from '@/layouts';

import {useData} from './useData';
import {useStyles} from './useStyles';

import {Routes} from '@/navigation';
import {ProjectStackParamList} from '@/navigation/ProjectNavigator';
import {StackScreenProps} from '@react-navigation/stack';

type TProps = StackScreenProps<ProjectStackParamList, Routes.PROJECT_DETAIL>;

export const ProjectDetailScreen: FC<TProps> = ({navigation, route}) => {
  const {styles} = useStyles();

  const {detail, ...props} = useData(route.params);

  console.log(detail);

  return (
    <DetailLayout
      {...props}
      title={detail?.title || ''}
      renderFooter={<Button>Tete</Button>}
      onBack={navigation.goBack}>
      <Text margin={{top: 12}}>{detail?.description}</Text>
    </DetailLayout>
  );
};
