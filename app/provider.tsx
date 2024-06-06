'use client'

import { CacheProvider } from '@chakra-ui/next-js'
import { ChakraProvider } from '@chakra-ui/react'
import { PrivyProvider } from '@privy-io/react-auth'
import { createConfig, WagmiProvider } from '@privy-io/wagmi'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import {
	FC,
	createContext,
	useContext,
	useEffect,
	useRef,
	useState,
} from 'react'
import { fallback, http, webSocket } from 'viem'
import { base, baseSepolia } from 'viem/chains'

export const PWAContext = createContext<boolean>(false)

export function Providers({ children }: { children: React.ReactNode }) {
	const [mounted, setMounted] = useState(false)

	const supportedChains = [baseSepolia]

	const queryClient = new QueryClient()

	const wagmiConfig = createConfig({
		chains: [base, baseSepolia],
		transports: {
			[base.id]: fallback([http()]),
			[baseSepolia.id]: fallback([http()]),
		},
	})

	const ref = useRef()

	useEffect(() => {
		setMounted(true)
	}, [ref])

	return (
		<>
			{mounted && (
				<PrivyProvider
					appId={process.env.NEXT_PUBLIC_PRIVY_APP_ID || ''}
					config={{
						loginMethods: ['wallet'],
						appearance: {
							theme: 'dark',
							accentColor: '#D5EE5A',
							logo: 'images/logo-privy.png',
							walletList: [
								'detected_wallets',
								'coinbase_wallet',
								'metamask',
								'zerion',
								'wallet_connect',
							],
						},
						embeddedWallets: {
							createOnLogin: 'all-users',
							requireUserPasswordOnCreate: false,
							noPromptOnSignature: true,
						},
						defaultChain: baseSepolia,
						supportedChains: supportedChains,
						walletConnectCloudProjectId:
							process.env.NEXT_PUBLIC_WALLET_CONNECT_PROJECT_ID ?? '',
					}}
				>
					<QueryClientProvider client={queryClient}>
						<WagmiProvider config={wagmiConfig}>
							<CacheProvider>
								<ChakraProvider>{children}</ChakraProvider>
							</CacheProvider>
						</WagmiProvider>
					</QueryClientProvider>
				</PrivyProvider>
			)}
		</>
	)
}
