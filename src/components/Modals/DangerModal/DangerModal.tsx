import React, {FC, ReactNode} from 'react';

import {
  Modal,
  TouchableOpacity,
  TouchableWithoutFeedback,
  View,
} from 'react-native';
import {IconButton, CloseIcon, Button} from '@/components';

import {useStyles} from './useStyles';
import {useTranslation} from 'react-i18next';

type TProps = {
  onClose: () => any;
  visible: boolean;

  children: ReactNode;

  onSubmit: () => any;
};

export const DangerModal: FC<TProps> = ({
  onClose,
  onSubmit,
  visible,
  children,
}) => {
  const {styles} = useStyles();

  const {t} = useTranslation();

  return (
    <Modal
      visible={visible}
      onRequestClose={onClose}
      transparent
      animationType="fade">
      <TouchableOpacity
        style={styles.wrapper}
        activeOpacity={0.8}
        onPress={onClose}>
        <TouchableWithoutFeedback>
          <View style={styles.content}>
            <View style={styles.header}>
              {children}
              <IconButton size={28} style={styles.close} onPress={onClose}>
                <CloseIcon size={18} color="default" />
              </IconButton>
            </View>
            <View style={styles.footer}>
              <Button
                style={styles.half}
                size="small"
                color="danger_outline"
                onPress={onSubmit}>
                {t('modals.danger.yes')}
              </Button>
              <Button
                style={styles.half}
                size="small"
                color="default"
                onPress={onClose}>
                {t('modals.danger.not')}
              </Button>
            </View>
          </View>
        </TouchableWithoutFeedback>
      </TouchableOpacity>
    </Modal>
  );
};
