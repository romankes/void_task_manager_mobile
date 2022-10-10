import {Button, Loader} from '@/components';
import React from 'react';
import {FlatList, SafeAreaView, View} from 'react-native';
import {useData} from './useData';
import {useStyles} from './useStyles';

export const ProjectListScreen = () => {
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
        renderItem={({item}) => null}
        refreshing={refreshing}
        onRefresh={onRefresh}
      />

      <View style={[styles.footer, styles.container]}>
        <Button>Create</Button>
      </View>
    </SafeAreaView>
  );
};
