import React, {FC} from 'react';

import {
  Avatar,
  BackArrowIcon,
  Button,
  DangerModal,
  IconButton,
  SelectBox,
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
import {Languages} from '@/i18n';

type TProps = StackScreenProps<UserStackParamList, Routes.USER_DETAIL>;

const LANGS = [{_id: Languages.UA}, {_id: Languages.RU}];

export const UserDetailScreen: FC<TProps> = ({navigation}) => {
  useStatusBar('light-content');

  const {styles} = useStyles();

  const {detail, onLogout, isOpened, setIsOpened, onRemove, onUpdateLanguage} =
    useData();

  const {
    t,
    i18n: {language},
  } = useTranslation();

  return (
    <View style={styles.wrapper}>
      <View style={[styles.header, styles.container]}>
        <IconButton
          size={32}
          style={{marginRight: 16}}
          onPress={navigation.goBack}>
          <BackArrowIcon size={24} color="light" />
        </IconButton>
        <Avatar size="small" fromApi url={detail?.avatar?.url} />
        <View style={styles.mainHeader}>
          <Text size={16} family="medium" color="light">
            {detail?.username}
          </Text>
          <Text family="light" color="link">
            {detail?.email}
          </Text>
        </View>
        <IconButton size={32} onPress={() => setIsOpened(true)}>
          <TrashIcon size={28} color="danger" />
        </IconButton>
      </View>
      <View style={styles.content}>
        <View>
          <SelectBox
            data={LANGS}
            current={{_id: language} as {_id: Languages}}
            renderCurrent={current =>
              current ? t(`locales.${current._id}`) : ''
            }
            renderItem={({_id}) => <Text>{t(`locales.${_id}`)}</Text>}
            onChange={({_id}) => {
              onUpdateLanguage(_id);
            }}
          />
        </View>
        <Button
          color="action"
          onPress={() => navigation.navigate(Routes.USER_UPDATE)}>
          {t('buttons.update')}
        </Button>
      </View>
      <View style={[styles.footer, styles.container]}>
        <Button variant="round" color="danger_outline" onPress={onLogout}>
          {t('buttons.logout')}
        </Button>
      </View>

      <DangerModal
        onClose={() => setIsOpened(false)}
        onSubmit={onRemove}
        visible={isOpened}>
        <Text size={18} align="center">
          {t('titles.user_remove')}
        </Text>
      </DangerModal>
    </View>
  );
};
