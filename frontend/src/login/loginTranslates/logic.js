import en from './en/en';
import ru from './ru/ru';

const translates = { en, ru, };

export const getTranslatesByLocale = locale => {
    return translates[locale];
};

export const getCurrentLocale = () => {
    return 'en';
};