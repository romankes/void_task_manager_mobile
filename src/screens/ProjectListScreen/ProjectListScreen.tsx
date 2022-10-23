import React, {FC} from 'react';

import {Loader, ProjectCard} from '@/components';
import {RefreshControl} from 'react-native';

import FlatList from 'react-native-draggable-flatlist';

import {useData} from './useData';
import {useStyles} from './useStyles';

import {Routes} from '@/navigation';
import {ProjectStackParamList} from '@/navigation/ProjectNavigator';
import {StackScreenProps} from '@react-navigation/stack';
import {ListLayout} from '@/layouts';
import {useTranslation} from 'react-i18next';

type TProps = StackScreenProps<ProjectStackParamList, Routes.PROJECT_LIST>;

export const ProjectListScreen: FC<TProps> = ({navigation}) => {
  const {styles} = useStyles();

  const {isLoading, onRefresh, projects, refreshing, onUpdatePriority} =
    useData();

  const {t} = useTranslation();

  return (
    <ListLayout
      title={t('project_list.title')}
      onCreate={() =>
        navigation.navigate(Routes.PROJECT_FORM, {type: 'create'})
      }>
      <FlatList
        containerStyle={[styles.content]}
        showsVerticalScrollIndicator={false}
        data={projects}
        onDragEnd={onUpdatePriority}
        ListEmptyComponent={isLoading && !refreshing ? <Loader /> : null}
        keyExtractor={({_id}) => `project-${_id}`}
        renderItem={({item, drag}) => (
          <ProjectCard
            onDrag={drag}
            project={item}
            onPress={() =>
              navigation.navigate(Routes.PROJECT_DETAIL, {id: item._id})
            }
          />
        )}
        refreshControl={
          <RefreshControl refreshing={refreshing} onRefresh={onRefresh} />
        }
      />
    </ListLayout>
  );
};
