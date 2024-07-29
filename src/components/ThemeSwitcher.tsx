// Borrowed from Sui dApp Starter https://github.com/kkomelin/sui-dapp-starter

import * as Toggle from '@radix-ui/react-toggle'
import { Badge } from '@radix-ui/themes'
import { MoonIcon, SunIcon } from 'lucide-react'
import { useEffect } from 'react'
import { useLocalStorage } from 'react-use'
import { detectBrowserTheme } from '~~/helpers/theme'

const ThemeSwitcher = () => {
  const [theme, setTheme] = useLocalStorage('theme', detectBrowserTheme(), {
    raw: true,
  })

  useEffect(() => {
    document.documentElement.classList.remove('light', 'dark')
    document.documentElement.classList.add(theme!)
  }, [theme])

  const toggleTheme = () => {
    setTheme(theme === 'dark' ? 'light' : 'dark')
  }

  return (
    <Toggle.Root
      aria-label="Toggle theme"
      onPressedChange={toggleTheme}
      className="rounded border border-gray-300 px-2 py-1 text-sm rounded-br-none rounded-tl-none border-b-0"
    >
      <div className="flex flex-row items-center justify-center gap-1">
        <Badge highContrast={true}>
          {theme === 'dark' ? (
            <SunIcon className="h-5 w-5" />
          ) : (
            <MoonIcon className="h-5 w-5" />
          )}
        </Badge>
        Test in {theme === 'dark' ? 'Light' : 'Dark'} mode
      </div>
    </Toggle.Root>
  )
}

export default ThemeSwitcher
