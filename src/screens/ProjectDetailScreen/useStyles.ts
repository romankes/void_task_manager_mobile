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
          shadowColor: pallete.background.dark,

          shadowOffset: {
            height: 0,
            width: 0,
          },

          shadowOpacity: 0.35,
          shadowRadius: 4,
          elevation: 21,

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
