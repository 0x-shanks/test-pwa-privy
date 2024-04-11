import Meta from '@/components/meta'
import { Providers } from './provider'

// NOTE: Cause of the bug
import './globals.css'

export default function RootLayout({
	children,
}: {
	children: React.ReactNode
}) {
	return (
		<html>
			<Meta />
			<body suppressHydrationWarning={true}>
				<Providers>{children}</Providers>
			</body>
		</html>
	)
}
