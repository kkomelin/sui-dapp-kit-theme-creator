/// <reference types="vite/client" />

interface ImportMetaEnv {
  readonly VITE_APP_NAME: string
  readonly VITE_APP_DESCRIPTION: string
  readonly VITE_APP_URL: string
  readonly VITE_THEME_INSTALLATION_GUIDE: string
}

interface ImportMeta {
  readonly env: ImportMetaEnv
}
