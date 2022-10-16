import React, {FC} from 'react';

import {Button, Loader, ProjectCard} from '@/components';
import {RefreshControl, SafeAreaView, View} from 'react-native';

import FlatList from 'react-native-draggable-flatlist';

import {useData} from './useData';
import {useStyles} from './useStyles';

import {Routes} from '@/navigation';
import {ProjectStackParamList} from '@/navigation/ProjectNavigator';
import {StackScreenProps} from '@react-navigation/stack';

type TProps = StackScreenProps<ProjectStackParamList, Routes.PROJECT_LIST>;

export const ProjectListScreen: FC<TProps> = ({navigation}) => {
  const {styles} = useStyles();

  const {isLoading, onRefresh, projects, refreshing, onUpdatePriority} =
    useData();

  return (
    <SafeAreaView style={styles.wrapper}>
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

      <View style={[styles.footer, styles.container]}>
        <Button
          onPress={() =>
            navigation.navigate(Routes.PROJECT_FORM, {type: 'create'})
          }>
          Create
        </Button>
      </View>
    </SafeAreaView>
  );
};
