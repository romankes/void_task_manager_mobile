import {useTheme} from '@/hooks';
import {useMemo} from 'react';
import {StyleSheet} from 'react-native';

export const useStyles = () => {
  const {pallete} = useTheme();

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

          marginHorizontal: -16,
        },
        button: {
          flex: 0.32,
        },
        footer: {
          paddingVertical: 12,
        },
      }),
    [pallete],
  );

  return {styles};
};
