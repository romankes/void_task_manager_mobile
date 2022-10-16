import {useTheme} from '@/hooks';
import {useMemo} from 'react';
import {StyleSheet} from 'react-native';

export const useStyles = () => {
  const {pallete} = useTheme();

  const styles = useMemo(
    () =>
      StyleSheet.create({
        timer: {
          alignItems: 'center',

          marginTop: 24,
        },
      }),
    [pallete],
  );

  return {styles};
};
