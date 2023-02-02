import {combineComponents} from 'app-utils';

import {LocalizationProvider} from './localisationContext';
import {ThemeProvider} from './themeContext';

const providers = [ThemeProvider, LocalizationProvider];
export const AppContextProvider = combineComponents(...providers);
