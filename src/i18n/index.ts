import i18n, {Resource, LanguageDetectorAsyncModule} from 'i18next';
import {initReactI18next} from 'react-i18next';

import ru from './locale/ru.json';

import ua from './locale/ua.json';

import ENV from '@/configs';
import AsyncStorage from '@react-native-community/async-storage';

export enum Languages {
  UA = 'ua',
  RU = 'ru',
}

const languageDetector: LanguageDetectorAsyncModule = {
  type: 'languageDetector',
  async: true,
  detect: (callback: any) => {
    return AsyncStorage.getItem('LANGUAGE').then(
      (locale = ENV.DEFAULT_LOCALE) => {
        callback(locale);
      },
    );
  },
  init: () => {},
  cacheUserLanguage: () => {},
};

const resources: {[key in Languages]: Resource} = {
  ru: {
    translation: ru,
  },
  ua: {
    translation: ua,
  },
};

i18n
  .use(languageDetector)
  .use(initReactI18next)
  .init({
    compatibilityJSON: 'v3',
    resources,
    fallbackLng: ENV.DEFAULT_LOCALE,
    keySeparator: '.',
    debug: ENV.IS_DEVELOPMENT,
    interpolation: {
      escapeValue: false,
    },
  });

export default i18n;
