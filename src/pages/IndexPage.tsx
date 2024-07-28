import { ConnectButton } from '@mysten/dapp-kit'
import { observer } from 'mobx-react-lite'
import { BlockPicker } from 'react-color'
import Layout from '~~/components/Layout'
import ThemeSwitcher from '~~/components/ThemeSwitcher'
import { useSettingsStore } from '~~/hooks/useSettingsStore'

const IndexPage = observer(() => {
  const { lightColor, darkColor, setLightColor, setDarkColor } =
    useSettingsStore()

  const handleLightColorChange = (color: any) => {
    setLightColor(color.hex)
  }
  const handleDarkColorChange = (color: any) => {
    setDarkColor(color.hex)
  }

  return (
    <Layout>
      <div className="flex flex-row items-center justify-center gap-5 my-6">
        <div className="flex flex-col items-center justify-center gap-4">
          <div>Light</div>
          <BlockPicker
            color={lightColor}
            onChangeComplete={handleLightColorChange}
          />
        </div>
        <div className="flex flex-col items-center justify-center gap-4">
          <div>Dark</div>
          <BlockPicker
            color={darkColor}
            onChangeComplete={handleDarkColorChange}
          />
        </div>
      </div>

      <ConnectButton />

      <div>
        <ThemeSwitcher />
      </div>
    </Layout>
  )
})

export default IndexPage
