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
        container: {
          paddingHorizontal: 16,
        },
        content: {
          flex: 1,
        },
      }),
    [pallete],
  );

  return {styles};
};
