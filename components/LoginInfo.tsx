import {
	Box,
	Container,
	VStack,
	Text,
	Button,
	Image,
	HStack,
	Checkbox,
} from '@chakra-ui/react'
import Link from 'next/link'
// import useTranslation from 'next-translate/useTranslation';
import { FC, useState } from 'react'
import { useLocalStorage } from 'usehooks-ts'

// import { poppins } from '@/common/fonts';

type Props = {
	login: () => void
}

export const LoginInfo: FC<Props> = ({ login }) => {
	// const { t, lang } = useTranslation('common');
	const [checked, setChecked] = useState(false)

	const handleCheck = (isChecked: boolean) => {
		setChecked(isChecked)
	}

	return (
		// NOTE: Cause of the bug: position:fixed
		<Box position='fixed' top={0} left={0} right={0} w='full'>
			<VStack h='100vh' w='full' justify='center' alignItems='center'>
				<Container w='full' maxW='container.lg'>
					<VStack w='full' spacing={20}>
						<Box bgColor='gray' w='70%' aspectRatio={1} />

						<Box px={4}>
							<Text fontSize='0.75rem'>
								Lorem ipsum dolor sit amet consectetur adipisicing elit. Illo
								tempore cupiditate ipsam? Consectetur architecto similique,
								velit repudiandae debitis facilis facere asperiores, magnam
								tempore omnis sint? Quo incidunt earum aspernatur quos?
							</Text>
						</Box>
						<VStack spacing={6}>
							<HStack spacing={3}>
								<Checkbox
									size='lg'
									colorScheme='gray'
									borderColor='white'
									onChange={(event) => handleCheck(event.target.checked)}
									isChecked={checked}
								/>

								<Text fontSize='0.75rem'>
									I agree to the{' '}
									<Text as='u' textColor='primary.500'>
										End User Terms
									</Text>
									and{' '}
									<Text as='u' textColor='primary.500'>
										Privacy Policy
									</Text>
								</Text>
							</HStack>

							<Button
								rounded='full'
								borderWidth={1}
								borderColor='primary.500'
								bgColor='black'
								w={60}
								size={{ base: 'sm', sm: 'md' }}
								// className={poppins.className}
								onClick={() => login()}
								isDisabled={!checked}
							>
								Get Started
							</Button>
						</VStack>
					</VStack>
				</Container>
			</VStack>
		</Box>
	)
}
