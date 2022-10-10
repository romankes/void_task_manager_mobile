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

          height: '100%',
        },
        header: {
          flexDirection: 'row',
          justifyContent: 'space-between',
          alignItems: 'center',
        },
        content: {
          flex: 1,
        },
        logo: {
          justifyContent: 'center',
          alignItems: 'center',

          marginVertical: 48,
        },
        footer: {
          paddingVertical: 8,
        },
      }),
    [pallete],
  );

  return {styles};
};
