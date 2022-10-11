import React, {FC} from 'react';

import {Button, Loader, ProjectCard} from '@/components';
import {FlatList, SafeAreaView, View} from 'react-native';

import {useData} from './useData';
import {useStyles} from './useStyles';

import {Routes} from '@/navigation';
import {ProjectStackParamList} from '@/navigation/ProjectNavigator';
import {StackScreenProps} from '@react-navigation/stack';

type TProps = StackScreenProps<ProjectStackParamList, Routes.PROJECT_LIST>;

export const ProjectListScreen: FC<TProps> = ({navigation}) => {
  const {styles} = useStyles();

  const {isLoading, onRefresh, projects, refreshing} = useData();

  return (
    <SafeAreaView style={styles.wrapper}>
      <FlatList
        style={[styles.content, styles.container]}
        showsVerticalScrollIndicator={false}
        data={projects}
        ListEmptyComponent={isLoading && !refreshing ? <Loader /> : null}
        keyExtractor={({_id}) => `project-${_id}`}
        renderItem={({item}) => (
          <ProjectCard
            project={item}
            onPress={() =>
              navigation.navigate(Routes.PROJECT_DETAIL, {id: item._id})
            }
          />
        )}
        refreshing={refreshing}
        onRefresh={onRefresh}
      />

      <View style={[styles.footer, styles.container]}>
        <Button>Create</Button>
      </View>
    </SafeAreaView>
  );
};
