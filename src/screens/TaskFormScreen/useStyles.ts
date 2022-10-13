import {useTheme} from '@/hooks';
import {useMemo} from 'react';
import {StyleSheet} from 'react-native';
import {useSafeAreaInsets} from 'react-native-safe-area-context';

export const useStyles = () => {
  const {pallete} = useTheme();

  const {bottom} = useSafeAreaInsets();

  const styles = useMemo(
    () =>
      StyleSheet.create({
        calendar: {
          marginHorizontal: -16,
        },
      }),
    [pallete],
  );

  return {styles, background: pallete.background.default as string};
};
