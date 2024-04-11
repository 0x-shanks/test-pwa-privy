'use client'

import { PrivyProvider } from '@privy-io/react-auth'
import { base } from 'viem/chains'

export function Providers({ children }: { children: React.ReactNode }) {
	const defaultChain = base
	const supportedChains = [defaultChain]

	return (
		<PrivyProvider
			appId={process.env.NEXT_PUBLIC_PRIVY_APP_ID || ''}
			// onSuccess={(user, isNewUser) => {
			// 	sendConnectWalletEvent(user, isNewUser)
			// }}
			config={{
				loginMethods: ['wallet'],
				appearance: {
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
			{children}
		</PrivyProvider>
	)
}
