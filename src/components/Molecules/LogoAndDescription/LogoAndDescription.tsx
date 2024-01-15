'use client'
import {
  useMediaQuery,
  Box,
  Image,
  Text,
  Container
} from '@chakra-ui/react'

export default function LogoAndDescription() {
  const [isLargerThan768px] = useMediaQuery('(min-width: 768px)');
  
    return (
            <Box w={isLargerThan768px ? "30%" : "100%"} h="100vh" display="flex" flexDirection="column" alignItems="center" justifyContent="center">
            <Image src="/assets/Artboard 1 (white-recto).png" alt='logo'/>
            <Container ml="40px">
            <Text fontSize='xl' color="white">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quis non repellendus sit ipsum excepturi cumque officiis optio ex, rerum modi maiores tempora assumenda ratione voluptatem veniam vitae repudiandae! Officia, iusto.</Text>
            </Container>
            </Box>
        )

  }
  