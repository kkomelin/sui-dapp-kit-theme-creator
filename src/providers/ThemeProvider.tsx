// Borrowed from Sui dApp Starter https://github.com/kkomelin/sui-dapp-starter

import { Theme } from '@radix-ui/themes'
import { FC, PropsWithChildren } from 'react'

const ThemeProvider: FC<PropsWithChildren> = ({ children }) => {
  return (
    <Theme className="w-full bg-white text-black dark:bg-black dark:text-white">
      {children}
    </Theme>
  )
}

export default ThemeProvider
