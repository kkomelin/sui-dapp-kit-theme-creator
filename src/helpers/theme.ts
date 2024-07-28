// Borrowed from Sui dApp Starter https://github.com/kkomelin/sui-dapp-starter
import { ThemeVars } from '@mysten/dapp-kit'
import Color from 'color'

export const detectBrowserTheme = (): 'light' | 'dark' => {
  return !('theme' in localStorage) &&
    window.matchMedia('(prefers-color-scheme: dark)').matches
    ? 'dark'
    : 'light'
}

export const getThemes = (
  primaryLightColor: string,
  primaryDarkColor: string
) => {
  // const primaryLightColor = '#F6F7F9'
  const secondaryLightColor = Color(primaryLightColor).darken(0.02).hex()

  // const primaryDarkColor = '#011631' // '#373737'
  const secondaryDarkColor = Color(primaryDarkColor).darken(0.2).hex()

  const lightTheme: ThemeVars = {
    blurs: {
      modalOverlay: 'blur(0)',
    },
    backgroundColors: {
      primaryButton: primaryLightColor,
      primaryButtonHover: secondaryLightColor,
      outlineButtonHover: secondaryLightColor,
      modalOverlay: Color(primaryDarkColor).alpha(0.1).rgb().string(), // 'rgba(24 36 53 / 20%)',
      modalPrimary: primaryLightColor,
      modalSecondary: secondaryLightColor,
      iconButton: 'transparent',
      iconButtonHover: secondaryLightColor,
      dropdownMenu: primaryLightColor,
      dropdownMenuSeparator: secondaryLightColor,
      walletItemSelected: primaryLightColor,
      walletItemHover: secondaryLightColor,
    },
    borderColors: {
      outlineButton: secondaryLightColor,
    },
    colors: {
      primaryButton: primaryDarkColor,
      outlineButton: primaryDarkColor,
      iconButton: primaryDarkColor,
      body: primaryDarkColor,
      bodyMuted: Color(primaryDarkColor).alpha(0.7).rgb().string(),
      bodyDanger: '#FF794B',
    },
    radii: {
      small: '6px',
      medium: '8px',
      large: '12px',
      xlarge: '16px',
    },
    shadows: {
      primaryButton:
        '0px 4px 12px ' + Color(primaryLightColor).alpha(0.1).rgb().string(), // rgba(0, 0, 0, 0.1)',
      walletItemSelected:
        '0px 2px 6px ' + Color(primaryLightColor).alpha(0.05).rgb().string(), // rgba(0, 0, 0, 0.05)',
    },
    fontWeights: {
      normal: '400',
      medium: '500',
      bold: '600',
    },
    fontSizes: {
      small: '14px',
      medium: '16px',
      large: '18px',
      xlarge: '20px',
    },
    typography: {
      fontFamily: 'inherit',
      fontStyle: 'normal',
      lineHeight: '1.3',
      letterSpacing: '1',
    },
  }

  const darkTheme: ThemeVars = {
    blurs: {
      modalOverlay: 'blur(0)',
    },
    backgroundColors: {
      primaryButton: primaryDarkColor,
      primaryButtonHover: secondaryDarkColor,
      outlineButtonHover: secondaryDarkColor,
      modalOverlay: Color(primaryLightColor).alpha(0.1).rgb().string(), // 'rgba(255, 255, 255, 0.1)',
      modalPrimary: primaryDarkColor,
      modalSecondary: secondaryDarkColor,
      iconButton: 'transparent',
      iconButtonHover: secondaryDarkColor,
      dropdownMenu: primaryDarkColor,
      dropdownMenuSeparator: secondaryDarkColor,
      walletItemSelected: primaryDarkColor,
      walletItemHover: secondaryDarkColor,
    },
    borderColors: {
      outlineButton: secondaryDarkColor,
    },
    colors: {
      primaryButton: primaryLightColor,
      outlineButton: primaryLightColor,
      iconButton: primaryLightColor,
      body: primaryLightColor,
      bodyMuted: Color(primaryLightColor).alpha(0.7).rgb().string(),
      bodyDanger: '#FF794B',
    },
    radii: {
      small: '6px',
      medium: '8px',
      large: '12px',
      xlarge: '16px',
    },
    shadows: {
      primaryButton:
        '0px 4px 12px ' + Color(primaryDarkColor).alpha(0.1).rgb().string(), // rgba(0, 0, 0, 0.5)',
      walletItemSelected:
        '0px 2px 6px ' + Color(primaryDarkColor).alpha(0.05).rgb().string(), // rgba(0, 0, 0, 0.5)',
    },
    fontWeights: {
      normal: '400',
      medium: '500',
      bold: '600',
    },
    fontSizes: {
      small: '14px',
      medium: '16px',
      large: '18px',
      xlarge: '20px',
    },
    typography: {
      fontFamily: 'inherit',
      fontStyle: 'normal',
      lineHeight: '1.3',
      letterSpacing: '1',
    },
  }

  return {
    lightTheme,
    darkTheme,
  }
}
