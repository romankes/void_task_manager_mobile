import {useIsFocused} from '@react-navigation/native';
import {useEffect} from 'react';
import {StatusBar, StatusBarStyle} from 'react-native';

export const useStatusBar = (style: StatusBarStyle) => {
  const isFocused = useIsFocused();

  useEffect(() => {
    if (isFocused) {
      StatusBar.setBarStyle(style);
    } else {
      StatusBar.setBarStyle('dark-content');
    }
  }, [style, isFocused]);
};
