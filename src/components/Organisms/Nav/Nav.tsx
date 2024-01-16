import { Box, Text,useTheme  } from "@chakra-ui/react";

export default function Nav() {
        const theme = useTheme();
        const bgColor = theme.colors.charcoal + '90';
    return (
        <Box display="flex" justifyContent="space-between" alignItems="center" bgColor={bgColor} w="100%" h="60px" color="white" px="30%" position="fixed" zIndex="5">
            <Box display="flex" alignItems="center" justifyContent="space-between" w="100%" h="100%" opacity="1">
                <Text cursor="pointer">Inicio</Text>
                <Text cursor="pointer">Productos</Text>
                <Text cursor="pointer">Contacto</Text>
            </Box>
        </Box>
    );
}