import React, {FC, RefObject, useCallback} from 'react';
import {useTranslation} from 'react-i18next';

import {TouchableOpacity, View} from 'react-native';
import ActionSheet, {ActionSheetRef} from 'react-native-actions-sheet';
import {Text, CameraIcon, GalleryIcon} from '@/components';

import {useStyles} from './useStyles';

import {
  Asset,
  launchCamera,
  launchImageLibrary,
} from 'react-native-image-picker';

type TProps = {
  onUpload: (assets: Asset[]) => any;

  customRef: RefObject<ActionSheetRef>;
};

const ACTIONS = {
  camera: () => launchCamera({mediaType: 'photo'}),
  gallery: () => launchImageLibrary({mediaType: 'photo'}),
};

export const ImagePicker: FC<TProps> = ({customRef, onUpload}) => {
  const {styles} = useStyles();

  const {t} = useTranslation();

  const onPick = useCallback(
    (key: keyof typeof ACTIONS) => async () => {
      const response = await ACTIONS[key]();

      if (!response.didCancel && response.assets) {
        onUpload(response.assets);
      }

      customRef.current?.hide();
    },
    [onUpload],
  );

  return (
    <ActionSheet ref={customRef} containerStyle={styles.container}>
      <TouchableOpacity
        style={styles.item}
        activeOpacity={0.6}
        onPress={onPick('camera')}>
        <CameraIcon size={24} color="default" />
        <Text size={16} margin={{left: 8}}>
          {t('image_picker.camera')}
        </Text>
      </TouchableOpacity>

      <TouchableOpacity
        style={styles.item}
        activeOpacity={0.6}
        onPress={onPick('gallery')}>
        <GalleryIcon size={24} color="default" />
        <Text size={16} margin={{left: 8}}>
          {t('image_picker.gallery')}
        </Text>
      </TouchableOpacity>
    </ActionSheet>
  );
};
