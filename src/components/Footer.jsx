import {
  Box,
  Container,
  Stack,
  Text,
  HStack,
  VStack,
  Link,
  Divider,
} from '@chakra-ui/react';

export default function Footer() {
  return (
    <Box
      bg="linear-gradient(135deg, #0071A9 0%, #005a8a 50%, #004d7a 100%)"
      color="white"
      borderRadius="3xl"
      mx={4}
      mb={2}
      py={{ base: 4, md: 6 }}
      overflow="hidden"
    >
      <Container maxW="6xl">
        <VStack spacing={{ base: 3, md: 4 }}>
          {/* Main Content */}
          <Stack
            direction={{ base: 'column', md: 'row' }}
            justify={{ base: 'center', md: 'center' }}
            align="center"
            w="full"
            spacing={{ base: 3, md: 8 }}
            textAlign="center"
          >
            {/* Left: Municipality Info */}
            <VStack spacing={1} align="center">
              <Text fontSize={{ base: 'lg', md: 'xl' }} fontWeight="bold" color="#FFC02B">
                Municipalidad Cholchol
              </Text>
              <Text fontSize={{ base: 'xs', md: 'sm' }} opacity={0.9}>
                Servicios municipales modernos y transparentes
              </Text>
            </VStack>

            {/* Right: Contact */}
            <VStack spacing={1} align="center">
              <HStack spacing={2}>
                <Text fontSize="sm">📞</Text>
                <Link href="tel:+562452734200" fontSize="sm" _hover={{ color: "#FFC02B" }}>
                  (452) 734200
                </Link>
              </HStack>
              <HStack spacing={2}>
                <Text fontSize="sm">✉️</Text>
                <Link 
                  href="mailto:oficina@municholchol.cl" 
                  fontSize="sm" 
                  _hover={{ color: "#FFC02B" }}
                >
                  oficina@municholchol.cl
                </Link>
              </HStack>
            </VStack>
          </Stack>

          {/* Divider */}
          <Divider borderColor="rgba(255,255,255,0.2)" />

          {/* Bottom: Copyright & Links */}
          <Stack
            direction={{ base: 'column', md: 'row' }}
            justify="center"
            align="center"
            w="full"
            spacing={{ base: 2, md: 6 }}
          >
            <Text fontSize="xs" opacity={0.8}>
              © 2025 Municipalidad de Cholchol
            </Text>
            
            <HStack spacing={4} fontSize="xs">
              <Link href="#" _hover={{ color: "#FFC02B" }}>
                Servicios
              </Link>
              <Link href="#" _hover={{ color: "#FFC02B" }}>
                Contacto
              </Link>
              <Link href="#" _hover={{ color: "#FFC02B" }}>
                Transparencia
              </Link>
            </HStack>
          </Stack>
        </VStack>
      </Container>
    </Box>
  );
}