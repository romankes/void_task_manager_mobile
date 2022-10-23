import {useTheme} from '@/hooks';
import {useMemo} from 'react';
import {StatusBar, StyleSheet} from 'react-native';
import {useSafeAreaInsets} from 'react-native-safe-area-context';

export const useStyles = () => {
  const {pallete} = useTheme();

  const {bottom, top} = useSafeAreaInsets();

  const styles = useMemo(
    () =>
      StyleSheet.create({
        wrapper: {
          height: '100%',
        },
        content: {
          flex: 1,

          paddingHorizontal: 16,
          paddingVertical: 24,

          justifyContent: 'space-between',
        },
        header: {
          height: 148,

          backgroundColor: pallete.background.dark,

          borderBottomLeftRadius: 32,
          borderBottomRightRadius: 32,

          shadowColor: pallete.background.dark,

          shadowOffset: {
            height: 4,
            width: 0,
          },

          paddingTop: top + (StatusBar.currentHeight || 0),

          paddingBottom: 42,

          shadowOpacity: 0.65,
          shadowRadius: 8,
          elevation: 12,

          flexDirection: 'row',
          alignItems: 'center',
        },
        mainHeader: {
          flex: 1,

          marginLeft: 12,
        },
        container: {
          paddingHorizontal: 16,
        },
        footer: {
          shadowColor: pallete.background.dark,

          shadowOffset: {
            height: 0,
            width: 0,
          },

          shadowOpacity: 0.4,
          shadowRadius: 6,
          elevation: 12,

          backgroundColor: pallete.background.default,

          paddingTop: 24,
          borderTopLeftRadius: 32,
          borderTopRightRadius: 32,

          height: bottom + 98,

          marginBottom: -bottom,
        },
      }),
    [pallete],
  );

  return {styles};
};
