import i18next from "i18next";
import XHR from "i18next-xhr-backend";
import Backend from "i18next-xhr-backend";
import { withTranslation } from 'react-i18next';
import LanguageDetector from "i18next-browser-languagedetector";
import LocalStorageBackend from 'i18next-localstorage-backend'; 

const i18n = i18next
  .use(Backend)
  .use(XHR) 
  .use(LanguageDetector) 
  .init({
    react: {
      wait: false,
      bindI18n: "languageChanged loaded",
      bindStore: "added removed",
      nsMode: "default"
    },
    detection: {
      // order and from where user language should be detected
      order: [
        "querystring",
        "localStorage",
        "navigator",
        "htmlTag",
        "path",
        "subdomain"
      ],
      // keys or params to lookup language from
      lookupQuerystring: "lng",
      lookupCookie: "i18next",
      lookupLocalStorage: "i18nextLng",
      lookupFromPathIndex: 0,
      lookupFromSubdomainIndex: 0,

      // cache user language on
      caches: ["localStorage"],
      excludeCacheFor: ["cimode"],
      // languages to not persist (cookie, localStorage)
      // optional htmlTag with lang attribute, the default is:
      htmlTag: document.documentElement
    },
    cache: {
      expirationTime: 7 * 24 * 60 * 60 * 1000
    },
    backend: {
      backendOptions: [{
        prefix: "i18next_res_"
      }],
      backends: [
        LocalStorageBackend, // primary
        XHR // fallback
      ]
    },
    load: "currentOnly",
    keySeparator: false,
    fallbackLng: "en-US",
    fallbackNS: "default",
  });

export default i18n;

export const translate = withTranslation("translations");
