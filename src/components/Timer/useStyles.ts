import {useTheme} from '@/hooks';
import {useMemo} from 'react';
import {StyleSheet} from 'react-native';

export const useStyles = () => {
  const {pallete} = useTheme();

  const styles = useMemo(
    () =>
      StyleSheet.create({
        wrapper: {
          height: 164,
          width: 164,

          justifyContent: 'center',
          alignItems: 'center',

          backgroundColor: pallete.background.dark,
          borderColor: pallete.border.action,
          borderWidth: 1,
          borderRadius: 164,
        },
      }),
    [pallete],
  );

  return {styles};
};
