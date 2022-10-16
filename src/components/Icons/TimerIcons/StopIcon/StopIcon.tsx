import React, {FC} from 'react';
import {useTheme} from '@/hooks';
import {Icon} from '@/themes/palletes/types';
import {View} from 'react-native';

type TProps = {
  size: number;
  color: keyof Icon;
};

export const StopIcon: FC<TProps> = ({color, size}) => {
  const {pallete} = useTheme();

  return (
    <View
      style={{
        backgroundColor: pallete.icon[color],
        width: size,
        height: size,
        borderRadius: size / 4,

        marginBottom: 13,
        marginTop: 10,
      }}
    />
  );
};
