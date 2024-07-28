import { createContext } from 'react'
import SettingsStore from '~~/store/SettingsStore'

export const SettingsStoreContext = createContext<SettingsStore>(
  new SettingsStore()
)
