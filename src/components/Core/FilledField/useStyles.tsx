import {useTheme} from '@/hooks';
import {InputKeys} from '@/themes/palletes/types';
import {useMemo} from 'react';
import {StyleSheet} from 'react-native';

type TArg = {
  color: keyof InputKeys;
  error: any;
};

export const useStyles = ({color, error}: TArg) => {
  const {pallete, fonts} = useTheme();

  const styles = useMemo(
    () =>
      StyleSheet.create({
        inputWrapper: {
          borderRadius: 8,
          borderWidth: 1,

          minHeight: 48,
          paddingHorizontal: 8,

          flexDirection: 'row',
          alignItems: 'center',

          backgroundColor: pallete.input.background[color],
          borderColor: pallete.input.border[color],
        },
        input: {
          color: pallete.input.text[color],
          fontFamily: fonts.regular,
          fontSize: 14,

          flexShrink: 1,
          flexGrow: 1,
        },
        rightIcon: {flexShrink: 0, paddingRight: 5},
        leftIcon: {flexShrink: 0, paddingRight: 5},
      }),
    [pallete, color, error],
  );

  return {
    styles,
    placeholderColors: pallete.text.gray,
  };
};
