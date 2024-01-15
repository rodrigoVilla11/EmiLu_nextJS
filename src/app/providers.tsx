'use client'
import { theme } from "@/app/theme"
import Nav from "@/components/Organisms/Nav/Nav"
import { ChakraProvider } from '@chakra-ui/react'

export function Providers({ children }: { children: React.ReactNode }) {
  return <ChakraProvider theme={theme} cssVarsRoot={undefined}>
    <>
    <Nav />
    {children}
    </></ChakraProvider>
}