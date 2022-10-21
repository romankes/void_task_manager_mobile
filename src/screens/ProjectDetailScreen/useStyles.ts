import {useTheme} from '@/hooks';
import {useMemo} from 'react';
import {StyleSheet} from 'react-native';

export const useStyles = () => {
  const {pallete} = useTheme();

  const styles = useMemo(
    () =>
      StyleSheet.create({
        description: {
          backgroundColor: pallete.background.default,

          marginTop: 12,

          paddingHorizontal: 12,
          paddingVertical: 16,

          borderRadius: 8,
        },
      }),
    [pallete],
  );

  return {styles};
};
