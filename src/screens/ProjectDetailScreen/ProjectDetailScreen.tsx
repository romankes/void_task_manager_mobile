import React, {FC} from 'react';

import {Button, Text} from '@/components';
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

  const {detail, ...props} = useData(route.params);

  const {t} = useTranslation();

  return (
    <DetailLayout
      {...props}
      title={detail?.title || ''}
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
    </DetailLayout>
  );
};
