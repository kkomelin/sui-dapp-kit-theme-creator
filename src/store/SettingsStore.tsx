import { makeAutoObservable } from 'mobx'

class SettingsStore {
  lightColor: string = '#F6F7F9'
  darkColor: string = '#011631'

  constructor() {
    makeAutoObservable(this)
  }

  setLightColor = (color: string) => {
    this.lightColor = color
  }
  setDarkColor = (color: string) => {
    this.darkColor = color
  }
}

export default SettingsStore
