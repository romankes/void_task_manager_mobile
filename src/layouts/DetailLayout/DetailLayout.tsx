import {BackArrowIcon, IconButton, Loader, Text} from '@/components';
import React, {FC, ReactNode} from 'react';

import {
  RefreshControl,
  SafeAreaView,
  ScrollView,
  StyleSheet,
  View,
} from 'react-native';
import {useStyles} from './useStyles';

type TProps = {
  title: string;
  onBack: () => any;

  renderFooter: ReactNode | ReactNode[];

  children: ReactNode | ReactNode[];

  onRefresh: () => any;
  refreshing: boolean;
  isLoading?: boolean;
};

export const DetailLayout: FC<TProps> = ({
  children,
  onBack,
  title,
  renderFooter,
  onRefresh,
  refreshing,
  isLoading,
}) => {
  const {styles} = useStyles();

  return (
    <SafeAreaView style={styles.wrapper}>
      <View style={[styles.header, styles.container]}>
        <IconButton size={32} onPress={onBack}>
          <BackArrowIcon size={24} color="default" />
        </IconButton>
        <Text family="medium" size={20}>
          {title}
        </Text>
        <View style={{width: 32}} />
      </View>
      <ScrollView
        style={[styles.content, styles.container]}
        refreshControl={
          <RefreshControl refreshing={refreshing} onRefresh={onRefresh} />
        }>
        {isLoading && !refreshing ? <Loader height={200} /> : children}
      </ScrollView>
      <View style={[styles.footer, styles.container]}>{renderFooter}</View>
    </SafeAreaView>
  );
};
