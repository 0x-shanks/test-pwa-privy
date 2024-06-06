'use client'

import { useMainWalletAddress } from '@/hooks/useMainWalletAddress'
import { useSessionWalletAddress } from '@/hooks/useSessionWalletAddress'
import { Button, Center, Spinner, VStack, Text } from '@chakra-ui/react'
import { usePrivy } from '@privy-io/react-auth'
import { useAccount } from 'wagmi'

const Index = () => {
	const { ready, authenticated, login, logout, exportWallet } = usePrivy()
	const { address: mainAddress } = useMainWalletAddress()
	const { address: sessionAddress } = useSessionWalletAddress()
	const account = useAccount()

	if (!ready) {
		return (
			<main>
				<Center w='full' h='100vh'>
					<Spinner size='lg' />
				</Center>
			</main>
		)
	}

	if (!authenticated) {
		return (
			<main>
				<Center w='full' h='100vh'>
					<Button onClick={login}>Login</Button>
				</Center>
			</main>
		)
	}

	return (
		<>
			<main>
				<Center w='full' h='100vh'>
					<VStack>
						<VStack>
							<Text>Connected embedded wallet: {sessionAddress}</Text>
							<Text>Connected external wallet: {mainAddress}</Text>
							<Text>Wagmi connect wallet: {account.address}</Text>
						</VStack>
						<Button onClick={logout}>Logout</Button>
					</VStack>
				</Center>
			</main>
		</>
	)
}

export default Index
