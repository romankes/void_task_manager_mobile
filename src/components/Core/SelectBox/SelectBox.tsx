import React, {PropsWithChildren, ReactNode, useEffect, useMemo} from 'react';
import {Animated, TouchableOpacity, View, ViewProps} from 'react-native';
import {Text} from '../Text';

import {useAnimation} from './useAnimation';
import {useStyles} from './useStyles';

type GenericWithId<T> = T & {
  _id: string;
};

type TProps<T> = ViewProps & {
  data: T[];
  renderItem: (value: T) => ReactNode;
  onChange: (value: T) => any;

  renderCurrent: (value: T | null) => string;
  current: T | null;

  label?: string;

  margin?: {
    right?: number;
    bottom?: number;
    top?: number;
    left?: number;
  };
};

export const SelectBox = <T,>({
  data,
  onChange,
  renderItem,
  current,
  renderCurrent,
  label,
  margin,
  ...props
}: PropsWithChildren<TProps<GenericWithId<T>>>) => {
  const {styles} = useStyles();

  const {isOpened, onHide, onShow, ref, height} = useAnimation();

  const filtered = useMemo(
    () => data.filter(({_id}) => _id !== current?._id),
    [data, current],
  );

  const margins = useMemo(
    () => ({
      marginTop: margin?.top || 0,
      marginBottom: margin?.bottom || 0,
      marginLeft: margin?.left || 0,
      marginRight: margin?.right || 0,
    }),
    [margin],
  );

  //TODO: add arrow down and up with animation

  return (
    <View {...props} style={[margins, props.style]}>
      {!!label && (
        <Text family="bold" size={14} margin={{bottom: 14}}>
          {label}
        </Text>
      )}
      <Animated.View style={[styles.wrapper, {height}]}>
        <TouchableOpacity
          activeOpacity={filtered.length ? 0.6 : 1}
          onPress={() => {
            isOpened ? onHide() : onShow();
          }}
          style={styles.item}>
          <Text
            family={current ? 'medium' : 'regular'}
            color={current ? 'default' : 'gray'}
            size={14}>
            {renderCurrent(current)}
          </Text>
        </TouchableOpacity>

        <View
          onLayout={({nativeEvent}) => {
            ref.current = nativeEvent.layout.height;
          }}>
          {filtered.map(item => (
            <TouchableOpacity
              onPress={() => {
                isOpened ? onHide() : onShow();
                onChange(item);
              }}
              activeOpacity={0.6}
              key={`select-box-item-${item._id}`}
              style={styles.item}>
              {renderItem(item)}
            </TouchableOpacity>
          ))}
        </View>
      </Animated.View>
    </View>
  );
};
