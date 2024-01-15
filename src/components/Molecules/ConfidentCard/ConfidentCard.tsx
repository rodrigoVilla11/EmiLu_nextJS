import { 
    Box, Icon, Image, Text
 } from "@chakra-ui/react";

export default function ConfidentCard () {
return(
    <Box bgColor="lavender" w="100%" h="auto" display="flex" alignItems="center" justifyContent="center" borderRadius="30px">
        <Image src="/assets/icons/clock-icon.png" alt="icon-clock" w="60px" />
        <Box w="50%" ml="10px">
        <Text fontSize='lg'>Puntualidad</Text>
        <Text fontSize='sm'>Lorem ipsum dolor sit amet consectetur adipisicing elit.</Text>
        </Box>
    </Box>
)
}