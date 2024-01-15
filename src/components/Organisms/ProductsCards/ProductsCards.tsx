import ProductCard from "@/components/Molecules/ProductCard/ProductCard";
import { 
    SimpleGrid,
    Text,
    Box
 } from "@chakra-ui/react";

export default function ProductsCards () {
return(
    <Box bgColor="richBlack">
    <Text fontSize='4xl' color="white" align="center">Productos: </Text>
    <SimpleGrid columns={{ base: 1, md: 2, lg: 4 }} spacing={4}>
    <ProductCard />
    <ProductCard />
    <ProductCard />
    <ProductCard />
    </SimpleGrid>
    </Box>
)
}