import i18n, {Resource, LanguageDetectorAsyncModule} from 'i18next';
import {initReactI18next} from 'react-i18next';

import ru from './locale/ru.json';

import ua from './locale/ua.json';

import ENV from '@/configs';
import AsyncStorage from '@react-native-community/async-storage';

import {LocaleConfig} from 'react-native-calendars';
import {CALENDAR} from '@/constants';

export enum Languages {
  UA = 'ua',
  RU = 'ru',
}

const languageDetector: LanguageDetectorAsyncModule = {
  type: 'languageDetector',
  async: true,
  detect: (callback: any) => {
    LocaleConfig.defaultLocale = ENV.DEFAULT_LOCALE;

    return callback(ENV.DEFAULT_LOCALE);
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
