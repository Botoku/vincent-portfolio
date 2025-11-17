'use client'

import { useLang } from "@/utils/LangContext"

export const LangSwitch = () => {
  const { lang, setLang } = useLang()

  return (
    <button className=" cursor-pointer" onClick={() => setLang(lang === "en" ? "es" : "en")}>
       <p className=""><span className={`${lang === "es" && "font-bold underline text-blue-100"}`}>ES</span>/<span className={`${lang === "en" && "font-bold underline text-blue-100"}`}>EN</span></p>
    </button>
  )
}