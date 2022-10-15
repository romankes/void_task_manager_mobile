import {useTheme} from '@/hooks';
import {useMemo} from 'react';
import {StyleSheet} from 'react-native';

export const useStyles = () => {
  const {pallete} = useTheme();

  const styles = useMemo(
    () =>
      StyleSheet.create({
        wrapper: {
          paddingHorizontal: 16,
          paddingVertical: 12,

          backgroundColor: pallete.background.default,
          shadowColor: pallete.text.gray,

          shadowOffset: {
            height: 0,
            width: 0,
          },

          shadowOpacity: 0.35,
          shadowRadius: 6,
          elevation: 21,

          marginVertical: 12,

          borderRadius: 12,
        },
      }),
    [pallete],
  );

  return {styles};
};
