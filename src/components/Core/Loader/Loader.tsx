import {useTheme} from '@/hooks';
import React, {FC} from 'react';
import {ActivityIndicator, StyleSheet, View, ViewProps} from 'react-native';

type TProps = ViewProps & {
  width?: number;
  height?: number;
};

export const Loader: FC<TProps> = ({width, height, ...props}) => {
  const {pallete} = useTheme();

  return (
    <View
      {...props}
      style={[
        styles.wrapper,
        !!width && {width},
        !!height && {
          height,
        },
        props.style,
      ]}>
      <ActivityIndicator color={pallete.text.default} size={'large'} />
    </View>
  );
};

const styles = StyleSheet.create({
  wrapper: {
    alignItems: 'center',
    justifyContent: 'center',
  },
});
