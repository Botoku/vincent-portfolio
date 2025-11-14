'use client'

import { useLang } from "@/utils/LangContext"

export const LangSwitch = () => {
  const { lang, setLang } = useLang()

  return (
    <button onClick={() => setLang(lang === "en" ? "es" : "en")}>
       <p><span className={`${lang === "es" && "font-bold  text-blue-100"}`}>ES</span>/<span>EN</span></p>
    </button>
  )
}