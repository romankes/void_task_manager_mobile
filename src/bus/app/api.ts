import AsyncStorage from '@react-native-community/async-storage';
import {App} from '.';

export const apiApp = new (class Api {
  async updateLanguage({language}: App.UpdateLanguageAsync): Promise<boolean> {
    await AsyncStorage.setItem('LANGUAGE', language);

    return true;
  }
})();
