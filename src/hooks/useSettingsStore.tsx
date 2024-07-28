import { useContext } from 'react'
import { SettingsStoreContext } from '~~/context/SettingsStoreContext'

export const useSettingsStore = () => useContext(SettingsStoreContext)
