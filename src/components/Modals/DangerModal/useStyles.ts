import {useTheme} from '@/hooks';
import {useMemo} from 'react';
import {StyleSheet, useWindowDimensions} from 'react-native';

export const useStyles = () => {
  const {pallete} = useTheme();

  const {width} = useWindowDimensions();

  const styles = useMemo(
    () =>
      StyleSheet.create({
        wrapper: {
          flex: 1,

          justifyContent: 'center',
          alignItems: 'center',

          backgroundColor: pallete.background.outline,
        },
        content: {
          backgroundColor: pallete.background.default,

          minHeight: 162,
          width: width - 42,

          borderRadius: 16,

          paddingHorizontal: 18,
          paddingVertical: 24,
        },
        header: {
          position: 'relative',

          flex: 1,
        },
        close: {
          position: 'absolute',

          right: -8,
          top: -18,
        },
        footer: {
          flexDirection: 'row',

          justifyContent: 'space-between',

          marginTop: 8,
        },

        half: {
          flex: 0.47,
        },
      }),
    [pallete, width],
  );

  return {styles};
};
