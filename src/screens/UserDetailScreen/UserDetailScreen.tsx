import React, {FC} from 'react';

import {
  Avatar,
  BackArrowIcon,
  Button,
  IconButton,
  Text,
  TrashIcon,
} from '@/components';
import {ScrollView, View} from 'react-native';

import {useStatusBar} from '@/hooks';
import {useTranslation} from 'react-i18next';

import {useData} from './useData';
import {useStyles} from './useStyles';

import {Routes} from '@/navigation';
import {UserStackParamList} from '@/navigation/UserNavigator';
import {StackScreenProps} from '@react-navigation/stack';

type TProps = StackScreenProps<UserStackParamList, Routes.USER_DETAIL>;

export const UserDetailScreen: FC<TProps> = ({navigation}) => {
  useStatusBar('light-content');

  const {styles} = useStyles();

  const {detail} = useData();

  const {t} = useTranslation();
  console.log(detail);

  return (
    <View style={styles.wrapper}>
      <View style={[styles.header, styles.container]}>
        <IconButton
          size={32}
          style={{marginRight: 16}}
          onPress={navigation.goBack}>
          <BackArrowIcon size={24} color="light" />
        </IconButton>
        <Avatar size="small" fromApi url={null} />
        <View style={styles.mainHeader}>
          <Text size={16} family="medium" color="light">
            {detail?.username}
          </Text>
          <Text family="light" color="link">
            {detail?.email}
          </Text>
        </View>
        <IconButton size={32}>
          <TrashIcon size={28} color="danger" />
        </IconButton>
      </View>
      <ScrollView style={styles.content} />
      <View style={[styles.footer, styles.container]}>
        <Button variant="round" color="danger_outline">
          {t('buttons.logout')}
        </Button>
      </View>
    </View>
  );
};
