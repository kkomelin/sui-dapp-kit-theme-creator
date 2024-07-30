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

  return `import type { ThemeVars } from '@mysten/dapp-kit'\n\nexport const lightTheme: ThemeVars = ${lightThemeString}\n\nexport const darkTheme: ThemeVars = ${darkThemeString}\n`
}
