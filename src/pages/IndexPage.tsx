import { ConnectButton } from '@mysten/dapp-kit'
import { Button } from '@radix-ui/themes'
import { CheckIcon, CopyIcon } from 'lucide-react'
import { observer } from 'mobx-react-lite'
import { useEffect, useState } from 'react'
import { ChromePicker } from 'react-color'
import Layout from '~~/components/Layout'
import ThemeSwitcher from '~~/components/ThemeSwitcher'
import { generateThemeCode } from '~~/helpers/code'
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
    setCode(generateThemeCode(themes))
  }, [lightColor, darkColor])

  return (
    <Layout>
      <h1 className="mt-2 md:mt-6 px-4 py-4 text-center text-4xl font-medium">
        {import.meta.env.VITE_APP_NAME}
      </h1>
      <h2 className='text-2xl font-medium1 opacity-80'>2 colors -&gt; 2 themes</h2>

      <div className="my-6 flex grow flex-col items-center justify-center gap-8 px-4">
        <div className="mt-5 flex flex-col items-center justify-center">
          <h3 className="mb-5 p-2 text-center text-2xl font-medium">
            Choose colors
          </h3>

          <div className="flex flex-col items-center justify-center gap-8 md:flex-row">
            <div className="flex flex-col items-center justify-center gap-4">
              <div>Light mode</div>
              <ChromePicker
                color={lightColor}
                onChangeComplete={handleLightColorChange}
                disableAlpha={true}
              />
            </div>
            <div className="flex flex-col items-center justify-center gap-4">
              <div>Dark mode</div>
              <ChromePicker
                color={darkColor}
                onChangeComplete={handleDarkColorChange}
                disableAlpha={true}
              />
            </div>
          </div>
        </div>

        <div className="mt-5 flex flex-col items-center justify-center">
          <h3 className="mb-5 p-2 text-center text-2xl font-medium">
            Get the themes
          </h3>

          <div className="flex flex-col items-center justify-start gap-8 md:flex-row">
            <div className="relative flex h-80 w-full grow flex-col items-center justify-center rounded border border-gray-300 md:w-1/2">
              <ConnectButton />

              <div className="absolute bottom-0 left-0">
                <ThemeSwitcher />
              </div>
            </div>
            <div className="flex h-80 w-full flex-col items-start justify-start overflow-auto rounded border border-gray-300 p-3 text-sm md:w-1/2">
              <pre className="whitespace-pre-wrap md:whitespace-pre">
                <code>{code}</code>
              </pre>
            </div>
          </div>

          <Button
            variant="classic"
            className="mt-5 flex flex-row items-center justify-center gap-2"
            onClick={() => copyToClipboard()}
          >
            {copied ? (
              <CheckIcon className="h-5 w-5 text-green-600 dark:text-green-300" />
            ) : (
              <CopyIcon className="h-5 w-5" />
            )}{' '}
            Copy code
          </Button>
        </div>

        <div className="px-4 text-center font-medium">
          To install the generated theme, follow{' '}
          <a
            className="text-green-600 dark:text-green-300"
            href="https://sdk.mystenlabs.com/dapp-kit/themes"
            target="_blank"
            rel="noopener noreferrer"
          >
            the official guide
          </a>
        </div>
      </div>
    </Layout>
  )
})

export default IndexPage
