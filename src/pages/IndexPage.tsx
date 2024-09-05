import { ConnectButton } from '@mysten/dapp-kit'
import { Button } from '@radix-ui/themes'
import { CheckIcon, CopyIcon, HeartIcon } from 'lucide-react'
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
      <div className="-mr-5 mb-0 mt-6 flex flex-col items-center justify-center">
        <iframe
          className="overflow-hidden border-none"
          src="https://ghbtns.com/github-btn.html?user=kkomelin&repo=sui-dapp-kit-theme-creator&type=star&count=true&size=large"
          width="140"
          height="30"
          title="Star on Github"
        ></iframe>
      </div>

      <h1 className="mt-2 px-4 py-4 text-center text-4xl font-medium md:mt-6">
        {import.meta.env.VITE_APP_NAME}
      </h1>
      <h2 className="font-medium1 text-2xl opacity-70">
        choose 2 colors, get 2 themes
      </h2>

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
            Get themes
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

        <div className="my-5 p-2 text-center text-2xl font-medium">
          <a
            className="rounded border border-green-600 px-4 py-2 text-green-600 dark:border-green-300 dark:text-green-300"
            href={import.meta.env.VITE_THEME_INSTALLATION_GUIDE}
            target="_blank"
            rel="noopener noreferrer"
          >
            Install themes
          </a>
        </div>
      </div>

      <div className="mt-5 flex flex-row items-center justify-center gap-1">
        <span>Built with</span>
        <HeartIcon className="h-4 w-4" />
        <span>by</span>
        <a
          href="https://github.com/kkomelin"
          target="_blank"
          rel="noopener noreferrer"
          className="text-green-600 dark:text-green-300"
        >
          @kkomelin
        </a>
        <span>·</span>
        <a
          href="https://github.com/kkomelin/sui-dapp-kit-theme-creator/issues/new"
          target="_blank"
          rel="noopener noreferrer"
          className="text-green-600 dark:text-green-300"
        >
          Support
        </a>
      </div>
    </Layout>
  )
})

export default IndexPage
