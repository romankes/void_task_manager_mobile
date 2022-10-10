import React, {ReactNode, useState} from 'react';

import {StatusBar, SafeAreaView, View} from 'react-native';

//app themes
import {themes, ThemeContext, ThemesName} from '@/themes';
import {useTheme} from '@/hooks';

type PropTypes = {
  children: ReactNode;
};

export const ThemeLayout: React.FC<PropTypes> = (props: PropTypes) => {
  return (
    <ThemeContext.Provider value={themes[ThemesName.LIGHT]}>
      <ThemeLayoutContent {...props} />
    </ThemeContext.Provider>
  );
};

const ThemeLayoutContent: React.FC<PropTypes> = ({children}) => {
  const {statusBarStyle, pallete} = useTheme();

  return (
    <View style={{flex: 1, backgroundColor: pallete.background.default}}>
      <StatusBar
        barStyle={statusBarStyle}
        translucent={true}
        backgroundColor={'transparent'}
      />
      {children}
    </View>
  );
};
