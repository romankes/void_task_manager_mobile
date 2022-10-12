import React, {FC, useMemo} from 'react';
import {Image, View} from 'react-native';
import {useStyles} from './useStyles';

import {UserIcon} from '@/components';

import ENV from '@/configs';

type TProps = {
  url?: string | null;

  size?: 'small' | 'default' | 'large';
  variant?: 'round' | 'square';

  fromApi?: boolean;
};

export const Avatar: FC<TProps> = ({
  url,
  size = 'default',
  variant = 'round',

  fromApi = false,
}) => {
  const {styles} = useStyles();

  const hw = useMemo(() => {
    switch (size) {
      case 'small':
        return {height: 52, width: 52};
      case 'default':
        return {height: 64, width: 64};
      case 'large':
        return {height: 130, width: 130};
    }
  }, [size]);

  const borderRadius = useMemo(() => {
    switch (variant) {
      case 'round':
        return 120;
      case 'round':
        return 0;
    }
  }, [variant]);

  const renderImage = useMemo(() => {
    if (!url) {
      return <UserIcon isFilled color="default" size={hw.height / 2.2} />;
    }

    const uri = fromApi ? `${ENV.BASE_URL}${url}` : url;

    return <Image style={[styles.image, {borderRadius}]} source={{uri}} />;
  }, [url, fromApi, hw, borderRadius]);

  return (
    <View style={[styles.wrapper, {borderRadius}, hw]}>{renderImage}</View>
  );
};
