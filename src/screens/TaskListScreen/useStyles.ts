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
          height: '100%',
        },
        content: {
          flex: 1,
        },
        container: {
          paddingHorizontal: 16,
        },
        buttons: {
          flexDirection: 'row',
          justifyContent: 'space-between',

          marginVertical: 4,
        },
        button: {
          width: width * 0.33 - 16,
        },
        footer: {
          paddingVertical: 12,
        },
      }),
    [pallete],
  );

  return {styles};
};
