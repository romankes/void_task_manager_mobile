import {useTheme} from '@/hooks';
import {useMemo} from 'react';
import {StyleSheet} from 'react-native';

export const useStyles = () => {
  const {pallete} = useTheme();

  const styles = useMemo(
    () =>
      StyleSheet.create({
        wrapper: {
          justifyContent: 'center',
          alignItems: 'center',

          backgroundColor: pallete.background.default,
        },

        image: {
          width: '100%',
          flex: 1,
        },
      }),
    [pallete],
  );

  return {styles};
};
