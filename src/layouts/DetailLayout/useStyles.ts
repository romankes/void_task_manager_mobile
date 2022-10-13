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
        wrapper: {
          height: '100%',
        },
        header: {
          flexDirection: 'row',
          justifyContent: 'space-between',
          alignItems: 'center',
        },
        content: {
          flex: 1,
        },
        container: {
          paddingHorizontal: 16,
        },
        footer: {
          shadowColor: pallete.background.dark,

          shadowOffset: {
            height: 0,
            width: 0,
          },

          shadowOpacity: 0.4,
          shadowRadius: 6,
          elevation: 12,

          backgroundColor: pallete.background.default,

          paddingTop: 24,
          borderTopLeftRadius: 32,
          borderTopRightRadius: 32,

          height: bottom + 76,

          marginBottom: -bottom,
        },
      }),
    [pallete],
  );

  return {styles};
};
