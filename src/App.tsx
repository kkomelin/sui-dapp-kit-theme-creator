import {
  createNetworkConfig,
  lightTheme,
  SuiClientProvider,
  WalletProvider,
} from "@mysten/dapp-kit";
import "@mysten/dapp-kit/dist/index.css";
import { getFullnodeUrl } from "@mysten/sui/client";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import IndexPage from "./pages/IndexPage";

// Config options for the networks you want to connect to
const { networkConfig } = createNetworkConfig({
  localnet: { url: getFullnodeUrl("localnet") },
  mainnet: { url: getFullnodeUrl("mainnet") },
});

const queryClient = new QueryClient();

const darkTheme = lightTheme;

const App = () => {
  return (
    <QueryClientProvider client={queryClient}>
      <SuiClientProvider networks={networkConfig} defaultNetwork="localnet">
        <WalletProvider
          theme={[
            {
              // default to light theme
              variables: lightTheme,
            },
            {
              // Adds theme inside a media query
              mediaQuery: "(prefers-color-scheme: dark)",
              variables: darkTheme,
            },
          ]}
        >
          <IndexPage />
        </WalletProvider>
      </SuiClientProvider>
    </QueryClientProvider>
  );
};

export default App;
