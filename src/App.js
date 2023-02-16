import './App.css'
import {
  ReservoirKitProvider,
  darkTheme,
  BuyModal,
} from '@reservoir0x/reservoir-kit-ui'
import { WagmiConfig, createClient } from 'wagmi'
import { getDefaultProvider } from 'ethers'

const client = createClient({
  autoConnect: true,
  provider: getDefaultProvider(),
})

const theme = darkTheme({
  headlineFont: 'Sans Serif',
  font: 'Serif',
  primaryColor: '#323aa8',
  primaryHoverColor: '#252ea5',
})

function App() {
  return (
    <ReservoirKitProvider
      options={{
        chains: [
          {
            id: 1,
            baseApiUrl: 'https://api.reservoir.tools',
            default: true,
            apiKey: 'YOUR_KEY',
          },
        ],
        source: 'YOUR_SOURCE',
      }}
      theme={theme}
    >
      <WagmiConfig client={client}>
        <div className="App">
          <h1>Reservoir with React</h1>
          <BuyModal
            trigger={<button>Buy Token</button>}
            collectionId="0xf5de760f2e916647fd766b4ad9e85ff943ce3a2b"
            tokenId="1236715"
            onPurchaseComplete={(data) => console.log('Purchase Complete')}
            onPurchaseError={(error, data) =>
              console.log('Transaction Error', error, data)
            }
            onClose={(data, stepData, currentStep) =>
              console.log('Modal Closed')
            }
          />
        </div>
      </WagmiConfig>
    </ReservoirKitProvider>
  )
}

export default App
