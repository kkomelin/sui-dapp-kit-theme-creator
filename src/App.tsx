import { createNetworkConfig, SuiClientProvider } from '@mysten/dapp-kit'
import '@mysten/dapp-kit/dist/index.css'
import { getFullnodeUrl } from '@mysten/sui/client'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import IndexPage from './pages/IndexPage'
import { SettingsStoreProvider } from './providers/SettingsStoreProvider'
import { ThemedWalletProvider } from './providers/ThemedWalletProvider'
import ThemeProvider from './providers/ThemeProvider'
import SettingsStore from './store/SettingsStore'

// Config options for the networks you want to connect to
const { networkConfig } = createNetworkConfig({
  localnet: { url: getFullnodeUrl('localnet') },
  mainnet: { url: getFullnodeUrl('mainnet') },
})

const queryClient = new QueryClient()

const initialSettings = new SettingsStore()

const App = () => {
  return (
    <QueryClientProvider client={queryClient}>
      <SuiClientProvider networks={networkConfig} defaultNetwork="localnet">
        <ThemeProvider>
          <SettingsStoreProvider value={initialSettings}>
            <ThemedWalletProvider>
              <IndexPage />
            </ThemedWalletProvider>
          </SettingsStoreProvider>
        </ThemeProvider>
      </SuiClientProvider>
    </QueryClientProvider>
  )
}

export default App
