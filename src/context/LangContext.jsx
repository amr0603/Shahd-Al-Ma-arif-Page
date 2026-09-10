import { createContext, useContext, useState } from "react";
const LangContext = createContext();
export function LangProvider({ children }) {
  const [lang, setLang] = useState("ar");
  const t = (ar, en) => (lang === "ar" ? ar : en);
  return (
    <LangContext.Provider value={{ lang, setLang, t }}>
      <div dir={lang === "ar" ? "rtl" : "ltr"} lang={lang}>
        {children}
      </div>
    </LangContext.Provider>
  );
}
export const useLang = () => useContext(LangContext);
