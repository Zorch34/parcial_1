const loadTranslations = async (lang) => {
    try {
      const response = await fetch(`/locales/${lang}.json`);
      if (!response.ok) throw new Error("Error loading translations");
      return await response.json();
    } catch (error) {
      console.error(error);
      return {};
    }
  };
  
  export const getUserLocale = () => {
    const userLocale = navigator.language || navigator.userLanguage;
    return userLocale.startsWith('es') ? 'es' : 'en';
  };
  
  export const loadUserTranslations = async () => {
    const lang = getUserLocale();
    return await loadTranslations(lang);
  };