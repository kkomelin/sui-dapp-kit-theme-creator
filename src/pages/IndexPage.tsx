import { ConnectButton } from '@mysten/dapp-kit'
import Layout from '~~/components/Layout'
import ThemeSwitcher from '~~/components/ThemeSwitcher'

const IndexPage = () => {
  return (
    <Layout>
      <ConnectButton />

      <div>
        <ThemeSwitcher />
      </div>
    </Layout>
  )
}

export default IndexPage
