import { 
    Box, Icon, Image, Text
 } from "@chakra-ui/react";

export default function ClientsCard () {
return(
    <Box bgColor="lavender" w="100%" h="auto" display="flex" flexDirection="column" alignItems="center" justifyContent="center" borderRadius="30px">
        <Image src="/assets/icons/clock-icon.png" alt="icon-clock" w="60px" />
        <Text fontSize='lg'>Cliente</Text>
    </Box>
)
}