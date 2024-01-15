'use client'
import LogoAndDescription from '@/components/Molecules/LogoAndDescription/LogoAndDescription';
import {
  useMediaQuery,
  Box
} from '@chakra-ui/react'
import ProductsCards from '../ProductsCards/ProductsCards';
import ConfidentBar from '../ConfidentBar/ConfidentBar';
import ClientsBar from '../ClientsBar/ClientsBar';

export default function LandingPage() {
  const [isLargerThan768px] = useMediaQuery('(min-width: 768px)');

  const bgStyle = isLargerThan768px ? 
    { bgImage: "/assets/FondoWEB.png" } : 
    { bgColor: "richBlack" };

    return (
        <Box w='100%' h='100vh' {...bgStyle} > 
            <LogoAndDescription />
            <Box w="100%" h="auto" bgColor="richBlack" pt="2em">
            <ConfidentBar />
            <ProductsCards />
            <ClientsBar />
            </Box>
          </Box>
    )
  }
  