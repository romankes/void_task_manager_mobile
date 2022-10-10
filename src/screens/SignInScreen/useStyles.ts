import {useTheme} from '@/hooks';
import {useMemo} from 'react';
import {StyleSheet} from 'react-native';

export const useStyles = () => {
  const {pallete} = useTheme();

  const styles = useMemo(
    () =>
      StyleSheet.create({
        footer: {
          flexDirection: 'row',
          alignItems: 'center',
          justifyContent: 'center',

          marginTop: 16,
        },
      }),
    [pallete],
  );

  return {styles};
};
