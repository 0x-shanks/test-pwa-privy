import { ToastProviderProps, extendTheme } from '@chakra-ui/react'

export const toastOption: ToastProviderProps = {
	defaultOptions: {
		position: 'bottom',
		isClosable: true,
		containerStyle: {
			fontSize: '1rem',
		},
		duration: 1000,
	},
}

export const theme = extendTheme({
	styles: {
		global: {
			body: {
				backgroundColor: 'black',
				color: 'white',
			},
		},
	},
	config: {
		initialColorMode: 'dark',
		useSystemColorMode: false,
	},
	breakpoints: {
		sm: '390px',
		md: '500px',
		lg: '768px',
	},
	colors: {
		primary: {
			500: '#D5EE5A',
		},
		secondary: {
			500: '#7672FE',
		},
		'card-bg': '#21212F',
		'bg-primary': '#565656',
	},
})
