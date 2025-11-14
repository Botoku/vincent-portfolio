'use client'
import { createContext, useContext, useState, Dispatch, SetStateAction, ReactNode } from "react"

type Lang = "en" | "es"

type LangContextType = {
  lang: Lang
  setLang: Dispatch<SetStateAction<Lang>>
}

const LangContext = createContext<LangContextType | undefined>(undefined)

export const LangProvider = ({ children }: { children: ReactNode }) => {
  const [lang, setLang] = useState<Lang>("en")

  return (
    <LangContext.Provider value={{ lang, setLang }}>
      {children}
    </LangContext.Provider>
  )
}

export const useLang = () => {
  const ctx = useContext(LangContext)
  if (!ctx) throw new Error("useLang must be used inside LangProvider")
  return ctx
}