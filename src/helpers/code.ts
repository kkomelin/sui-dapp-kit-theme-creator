import { ThemeVars } from '@mysten/dapp-kit'
import stringifyObject from 'stringify-object'

export const generateThemeCode = (themes: {
  lightTheme: ThemeVars
  darkTheme: ThemeVars
}) => {
  const lightThemeString = stringifyObject(themes.lightTheme, {
    indent: '  ',
  })

  const darkThemeString = stringifyObject(themes.darkTheme, {
    indent: '  ',
  })

  return `// Created with ${import.meta.env.VITE_APP_URL}\n// Installation guide ${import.meta.env.VITE_THEME_INSTALLATION_GUIDE}\n\n// Light color: ${themes.lightTheme.backgroundColors.primaryButton}\n// Dark color: ${themes.darkTheme.backgroundColors.primaryButton}\n\nimport type { ThemeVars } from '@mysten/dapp-kit'\n\nexport const lightTheme: ThemeVars = ${lightThemeString}\n\nexport const darkTheme: ThemeVars = ${darkThemeString}\n`
}
