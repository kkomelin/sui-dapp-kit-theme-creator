import { ThemeVars, WalletProvider } from '@mysten/dapp-kit'
import { observer } from 'mobx-react-lite'
import { FC, PropsWithChildren, useEffect, useState } from 'react'
import { getThemes } from '../helpers/theme'
import { useSettingsStore } from '../hooks/useSettingsStore'

export const ThemedWalletProvider: FC<PropsWithChildren> = observer(
  ({ children }) => {
    const { lightColor, darkColor } = useSettingsStore()
    const [{ lightTheme, darkTheme }, setThemes] = useState<{
      lightTheme: ThemeVars
      darkTheme: ThemeVars
    }>(getThemes(lightColor, darkColor))

    useEffect(() => {
      const themes = getThemes(lightColor, darkColor)
      setThemes(themes)
    }, [lightColor, darkColor])

    return (
      <WalletProvider
        theme={[
          {
            // Default to light theme.
            variables: lightTheme,
          },
          {
            // Reacts to the dark class.
            selector: '.dark',
            variables: darkTheme,
          },
        ]}
      >
        {children}
      </WalletProvider>
    )
  }
)
