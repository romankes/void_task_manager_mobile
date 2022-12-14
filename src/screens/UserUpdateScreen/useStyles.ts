import {useTheme} from '@/hooks';
import {useMemo} from 'react';
import {StyleSheet} from 'react-native';

export const useStyles = () => {
  const {pallete} = useTheme();

  const styles = useMemo(
    () =>
      StyleSheet.create({
        avatar: {
          alignSelf: 'center',
        },
      }),
    [pallete],
  );

  return {styles};
};
