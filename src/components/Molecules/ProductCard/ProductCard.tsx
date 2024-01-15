'use client'
import {
  Card,
  CardBody,
  Image,
  Heading,
  Text,
  CardFooter,
  CardHeader,
  Button,
} from '@chakra-ui/react'

export default function ProductCard() {
return (
    
  <Card w='300px' h='450px' bgGradient='linear(to-t, black, charcoal)' align="center" color="white">
    <CardHeader>
        <Heading size='md'>Tapial Simil Ladrillo</Heading>
    </CardHeader>
    <CardBody>
        <Image
            src='https://premoldeadoshormigon.celotti.com.ar/wp-content/uploads/2023/05/tapial_hormigon_premoldeado_simil_ladrillo_visto-1080x945.png'
            alt='tapial_simil_ladrillo'
            borderRadius='lg'
            w="250px"
            h="200px"
        />
      <Text>Muro de hormigón armado prefabricado para la realización de cercos perimetrales</Text>
    </CardBody>
    <CardFooter>
    <Button bg="lavender">
        Consultar precio
      </Button>
    </CardFooter>
  </Card>
)
}