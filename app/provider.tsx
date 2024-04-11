'use client'

import { CacheProvider } from '@chakra-ui/next-js'
import { ChakraProvider } from '@chakra-ui/react'
import { PrivyProvider } from '@privy-io/react-auth'
import { base } from 'viem/chains'
import { theme } from './style'

export function Providers({ children }: { children: React.ReactNode }) {
	const defaultChain = base
	const supportedChains = [defaultChain]

	return (
		<PrivyProvider
			appId={process.env.NEXT_PUBLIC_PRIVY_APP_ID || ''}
			config={{
				loginMethods: ['wallet'],
				appearance: {
					theme: 'dark',
					accentColor: '#D5EE5A',
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
				defaultChain: defaultChain,
				supportedChains: supportedChains,
				walletConnectCloudProjectId:
					process.env.NEXT_PUBLIC_WALLET_CONNECT_PROJECT_ID ?? '',
				legal: {
					termsAndConditionsUrl: 'https://www.privy.io/user-terms-of-service',
					privacyPolicyUrl: 'https://www.privy.io/privacy-policy',
				},
			}}
		>
			<CacheProvider>
				<ChakraProvider theme={theme}>{children}</ChakraProvider>
			</CacheProvider>
		</PrivyProvider>
	)
}
