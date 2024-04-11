'use client'

import Blobby from '@/components/svg/blobby'
import { usePrivy } from '@privy-io/react-auth'
import Head from 'next/head'

const Index = () => {
	const { ready, authenticated, login, logout, exportWallet } = usePrivy()

	return (
		<>
			<Head>
				<title>Privy PWA Template</title>
			</Head>
			<main>
				<div className='flex h-screen w-screen flex-col items-center mt-8'>
					<Blobby />
					<h2 className='my-4 text-xl font-semibold text-gray-800'>
						Privy PWA Template
					</h2>
					<div className='w-full px-8'>
						<button
							className='my-4 w-full rounded-md bg-indigo-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm disabled:bg-indigo-400'
							onClick={login}
							// Always check that Privy is `ready` and the user is not `authenticated` before calling `login`
							disabled={!ready || authenticated}
						>
							Login
						</button>

						<button
							className='my-4 w-full rounded-md bg-indigo-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm disabled:bg-indigo-400'
							onClick={logout}
							// Always check that Privy is `ready` and the user is not `authenticated` before calling `login`
							disabled={!authenticated}
						>
							Logout
						</button>
					</div>

					<div className='fixed bottom-10 left-8 right-8'>
						<p className='text-sm'>Fixed components</p>
						<button
							className='my-4 w-full rounded-md bg-indigo-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm disabled:bg-indigo-400'
							onClick={login}
							// Always check that Privy is `ready` and the user is not `authenticated` before calling `login`
							disabled={!ready || authenticated}
						>
							Login
						</button>

						<button
							className='my-4 w-full rounded-md bg-indigo-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm disabled:bg-indigo-400'
							onClick={exportWallet}
							// Always check that Privy is `ready` and the user is not `authenticated` before calling `login`
							disabled={!authenticated}
						>
							Export Wallet
						</button>
					</div>
				</div>
			</main>
		</>
	)
}

export default Index
