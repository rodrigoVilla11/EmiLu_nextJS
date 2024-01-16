import ClientsCard from "@/components/Molecules/ClientsCard/ClientsCard";
import { 
    SimpleGrid,
    Box
 } from "@chakra-ui/react";

export default function ClientsBar () {
return(
    <Box bgColor="lavender" my="2em" p="10px">
    <SimpleGrid columns={{ base: 1, md: 2, lg: 4 }} >
    <ClientsCard />
    <ClientsCard />
    <ClientsCard />
    <ClientsCard />
    </SimpleGrid>
    </Box>
)
}