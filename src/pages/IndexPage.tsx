import { ConnectButton } from '@mysten/dapp-kit'
import { Button } from '@radix-ui/themes'
import { CheckIcon, CopyIcon } from 'lucide-react'
import { observer } from 'mobx-react-lite'
import { useEffect, useState } from 'react'
import { BlockPicker } from 'react-color'
import Layout from '~~/components/Layout'
import ThemeSwitcher from '~~/components/ThemeSwitcher'
import { generateCode } from '~~/helpers/code'
import { getThemes } from '~~/helpers/theme'
import { useSettingsStore } from '~~/hooks/useSettingsStore'

const IndexPage = observer(() => {
  const { lightColor, darkColor, setLightColor, setDarkColor } =
    useSettingsStore()
  const [code, setCode] = useState<string>('')
  const [copied, setCopied] = useState<boolean>(false)

  const handleLightColorChange = (color: any) => {
    setLightColor(color.hex)
  }
  const handleDarkColorChange = (color: any) => {
    setDarkColor(color.hex)
  }

  const copyToClipboard = async () => {
    try {
      await navigator.clipboard.writeText(code)
      setCopied(true)
      setTimeout(() => {
        setCopied(false)
      }, 800)
    } catch (err) {
      setCopied(false)
      alert('Cannot copy for some reason')
    }
  }

  useEffect(() => {
    const themes = getThemes(lightColor, darkColor)
    setCode(generateCode(themes))
  }, [lightColor, darkColor])

  return (
    <Layout>
      <h1 className="mt-10 p-4 text-3xl font-bold">
        Sui dApp Kit Theme Generator
      </h1>

      <div className="my-6 flex grow flex-col items-center justify-center gap-8">
        <h2 className="p-2 text-xl font-bold">Choose your primary colors</h2>

        <div className="flex flex-row items-center justify-center gap-5">
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

        <h2 className="mt-4 p-2 text-xl font-bold">Test your themes</h2>

        <div className="flex flex-row items-center justify-start gap-3">
          <div className="relative flex h-full w-1/2 grow flex-col items-center justify-center border border-gray-300">
            <ConnectButton />

            <div className="absolute bottom-0 left-0">
              <ThemeSwitcher />
            </div>
          </div>
          <div className="flex h-full max-h-80 w-1/2 flex-col items-start justify-start overflow-scroll border border-gray-300 p-3 text-sm">
            <pre>
              <code>{code}</code>
            </pre>
          </div>
        </div>

        <Button
          variant="classic"
          className="flex flex-row items-center justify-center gap-2"
          onClick={() => copyToClipboard()}
        >
          {copied ? (
            <CheckIcon className="h-5 w-5 text-green-300" />
          ) : (
            <CopyIcon className="h-5 w-5" />
          )}{' '}
          Copy code
        </Button>
      </div>
    </Layout>
  )
})

export default IndexPage
