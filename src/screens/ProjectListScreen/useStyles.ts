import {useTheme} from '@/hooks';
import {useMemo} from 'react';
import {StyleSheet} from 'react-native';

export const useStyles = () => {
  const {pallete} = useTheme();

  const styles = useMemo(
    () =>
      StyleSheet.create({
        content: {
          flex: 1,
        },
        container: {
          paddingHorizontal: 16,
        },
        footer: {
          paddingVertical: 12,
        },
      }),
    [pallete],
  );

  return {styles};
};
