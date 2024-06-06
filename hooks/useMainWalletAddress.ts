'use client'

import { useWallets } from '@privy-io/react-auth'
import { useSetActiveWallet } from '@privy-io/wagmi'
import { useMemo } from 'react'
import { Address } from 'viem'

export const useMainWalletAddress = () => {
	const { setActiveWallet } = useSetActiveWallet()
	const { wallets } = useWallets()

	const address = useMemo(() => {
		const connectedWallets = wallets.filter(
			(wallet) =>
				wallet.connectorType != 'embedded' && wallet.walletClientType != 'privy'
		)
		if (connectedWallets.length == 0) {
			return undefined
		}

		return connectedWallets[0].address as Address
	}, [wallets])

	const setMainWallet = () => {
		const connectedWallets = wallets.filter(
			(wallet) =>
				wallet.connectorType != 'embedded' && wallet.walletClientType != 'privy'
		)
		if (connectedWallets.length == 0) {
			return
		}
		setActiveWallet(connectedWallets[0])
	}

	return { address, setMainWallet }
}
