import en from "./en.json";
import ar from "./ar.json";
import { useRouter } from "next/router";
import { useCallback } from "react";

const locales = { en, ar };
const useTranslation = () => {
  const router = useRouter();

  const changeLanguage = (locale) => {
    if (locale !== router.locale) {
      // We change the language
      // and push the new route to the router
      router.push(
        {
          route: router.pathname,
          query: router.query,
        },
        router.asPath,
        { locale }
      );
    }
  };

  /* 
    We receive the string and 
    return the localized string,
    If the string is not found in the localization 
    file it will return the original string 
  */
  const t = useCallback(
    (str) => locales[router.locale][str] || str,
    [router.locale]
  );

  return { t, changeLanguage, currentLanguage: router.locale };
};

const withTranslation = (Component) => (props) => {
  const { t, changeLanguage, currentLanguage } = useTranslation();
  return (
    <Component
      {...props}
      t={t}
      changeLanguage={changeLanguage}
      currentLanguage={currentLanguage}
    />
  );
};

export { useTranslation, withTranslation };
