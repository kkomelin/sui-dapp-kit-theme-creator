// Borrowed from Sui dApp Starter https://github.com/kkomelin/sui-dapp-starter

export const detectBrowserTheme = (): 'light' | 'dark' => {
  return !('theme' in localStorage) &&
    window.matchMedia('(prefers-color-scheme: dark)').matches
    ? 'dark'
    : 'light'
}
