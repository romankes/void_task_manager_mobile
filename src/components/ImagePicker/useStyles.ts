import {useTheme} from '@/hooks';
import {useMemo} from 'react';
import {StyleSheet} from 'react-native';
import {useSafeAreaInsets} from 'react-native-safe-area-context';

export const useStyles = () => {
  const {pallete} = useTheme();

  const insets = useSafeAreaInsets();

  const styles = useMemo(
    () =>
      StyleSheet.create({
        container: {
          height: insets.bottom + 110,
          backgroundColor: pallete.background.default,
          paddingHorizontal: 32,
          paddingVertical: 18,

          borderTopRightRadius: 32,
          borderTopLeftRadius: 32,

          paddingBottom: 16,
        },
        item: {
          marginTop: 10,

          borderBottomColor: pallete.border.default,

          alignItems: 'center',
          flexDirection: 'row',

          height: 32,
        },
      }),
    [pallete],
  );

  return {styles};
};
