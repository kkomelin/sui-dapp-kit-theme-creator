import { ConnectButton } from '@mysten/dapp-kit'
import { observer } from 'mobx-react-lite'
import { BlockPicker } from 'react-color'
import Layout from '~~/components/Layout'
import ThemeSwitcher from '~~/components/ThemeSwitcher'
import { getThemes } from '~~/helpers/theme'
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

  const themes = getThemes(lightColor, darkColor)

  return (
    <Layout>
      <div className="my-6 flex flex-row items-center justify-center gap-5">
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

      <div className="m-3 flex grow flex-col items-center justify-start overflow-auto rounded border border-gray-300 p-3 text-sm">
        <pre>
          <code>{JSON.stringify(themes, null, 2)}</code>
        </pre>
      </div>
    </Layout>
  )
})

export default IndexPage
