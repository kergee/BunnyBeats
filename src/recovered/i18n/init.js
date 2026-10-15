import { i18n, initReactI18next } from "../vendor/i18n-runtime.js";
import { BrowserLanguageDetector } from "../vendor/language-detector.js";
import { enTranslation, zhTranslation } from "./translations.js";
i18n.use(BrowserLanguageDetector).use(initReactI18next).init({
  resources: {
    zh: {
      translation: zhTranslation
    },
    en: {
      translation: enTranslation
    }
  },
  fallbackLng: "zh",
  interpolation: {
    escapeValue: !1
  }
});
//# sourceMappingURL=init.js.map
