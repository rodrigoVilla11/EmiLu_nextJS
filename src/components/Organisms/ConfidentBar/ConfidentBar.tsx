import ConfidentCard from "@/components/Molecules/ConfidentCard/ConfidentCard";
import { 
    SimpleGrid,
    Box
 } from "@chakra-ui/react";

export default function ConfidentBar () {
return(
    <Box bgColor="lavender" mb="2em" p="10px">
    <SimpleGrid columns={{ base: 1, md: 2, lg: 4 }} >
    <ConfidentCard />
    <ConfidentCard />
    <ConfidentCard />
    <ConfidentCard />
    </SimpleGrid>
    </Box>
)
}