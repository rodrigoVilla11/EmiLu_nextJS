import { Box, Text  } from "@chakra-ui/react";

export default function Footer() {
    return (
        <Box bgColor="charcoal" h="40vh" w="100%" display="flex" justifyContent="space-between" px="4em" color="white">
           <Box>Productos</Box>
           <Box>Nosotros</Box>
           <Box>Contacto</Box>
           <Box>Redes Sociales</Box>
        </Box>
    );
}