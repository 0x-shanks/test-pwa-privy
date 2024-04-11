'use client'

import { LoginInfo } from '@/components/LoginInfo'
import { Button, Center, Spinner, VStack } from '@chakra-ui/react'
import { usePrivy } from '@privy-io/react-auth'

const Index = () => {
	const { ready, authenticated, login, logout, exportWallet } = usePrivy()

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
				<LoginInfo login={login} />
			</main>
		)
	}

	return (
		<>
			<main>
				<VStack>
					<Button onClick={logout}>Logout</Button>
					<Button onClick={exportWallet}>Export Wallet</Button>
				</VStack>
			</main>
		</>
	)
}

export default Index
