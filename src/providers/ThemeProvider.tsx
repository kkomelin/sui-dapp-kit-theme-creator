// Borrowed from Sui dApp Starter https://github.com/kkomelin/sui-dapp-starter

import { Theme } from '@radix-ui/themes'
import { FC, PropsWithChildren } from 'react'

const ThemeProvider: FC<PropsWithChildren> = ({ children }) => {
  return (
    <Theme className="w-full bg-light text-dark dark:bg-dark dark:text-light">
      {children}
    </Theme>
  )
}

export default ThemeProvider
