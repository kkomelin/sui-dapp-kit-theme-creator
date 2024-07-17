import {
  createNetworkConfig,
  lightTheme,
  SuiClientProvider,
  WalletProvider,
} from '@mysten/dapp-kit'
import '@mysten/dapp-kit/dist/index.css'
import { getFullnodeUrl } from '@mysten/sui/client'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import IndexPage from './pages/IndexPage'
import ThemeProvider from './providers/ThemeProvider'

// Config options for the networks you want to connect to
const { networkConfig } = createNetworkConfig({
  localnet: { url: getFullnodeUrl('localnet') },
  mainnet: { url: getFullnodeUrl('mainnet') },
})

const queryClient = new QueryClient()

const darkTheme = lightTheme

const App = () => {
  return (
    <QueryClientProvider client={queryClient}>
      <SuiClientProvider networks={networkConfig} defaultNetwork="localnet">
        <ThemeProvider>
          <WalletProvider
            theme={[
              {
                // Default to light theme.
                variables: lightTheme,
              },
              {
                // React to the color scheme media query.
                mediaQuery: '(prefers-color-scheme: dark)',
                variables: darkTheme,
              },
              {
                // Reacts to the dark class.
                selector: '.dark',
                variables: darkTheme,
              },
            ]}
          >
            <IndexPage />
          </WalletProvider>
        </ThemeProvider>
      </SuiClientProvider>
    </QueryClientProvider>
  )
}

export default App
