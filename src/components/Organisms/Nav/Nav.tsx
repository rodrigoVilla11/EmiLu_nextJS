import { Box, Text } from "@chakra-ui/react";

export default function Nav () {
    return(
        <Box display="flex" justifyContent="space-between" alignItems="center" bgColor="charcoal" w="90%" h="60px" borderRadius="30px" color="white" px="30%" position="fixed" m="2em">
            <Text>Inicio</Text>
            <Text>Productos</Text>
            <Text>Contacto</Text>
        </Box>
    )
    }