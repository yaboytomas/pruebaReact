import {
  Box,
  Button,
  Container,
  Flex,
  Heading,
  Stack,
  Text,
  useColorModeValue,
} from '@chakra-ui/react';

export default function CtaSection() {
  return (
    <Container maxW={'5xl'}>
      <Stack
        textAlign={'center'}
        align={'center'}
        spacing={{ base: 8, md: 10 }}
        py={{ base: 20, md: 28 }}>
        <Heading
          fontWeight={600}
          fontSize={{ base: '3xl', sm: '4xl', md: '6xl' }}
          lineHeight={'110%'}>
          Únete a la{' '}
          <Text as={'span'} color={'blue.400'}>
            transformación digital
          </Text>{' '}
          de nuestra municipalidad
        </Heading>
        <Text color={'gray.500'} maxW={'3xl'}>
          Sé parte del cambio hacia una gestión municipal más moderna, 
          eficiente y cercana a la ciudadanía. Regístrate para acceder 
          a todos nuestros servicios digitales.
        </Text>
        <Stack spacing={6} direction={'row'}>
          <Button
            rounded={'full'}
            px={6}
            colorScheme={'blue'}
            bg={'blue.400'}
            _hover={{ bg: 'blue.500' }}>
            Registrarse Ahora
          </Button>
          <Button 
            rounded={'full'} 
            px={6}
            variant={'outline'}
            colorScheme={'blue'}>
            Conocer Más
          </Button>
        </Stack>
        <Flex w={'full'}>
          <Illustration
            height={{ sm: '24rem', lg: '28rem' }}
            mt={{ base: 12, sm: 16 }}
          />
        </Flex>
      </Stack>
    </Container>
  );
}

const Illustration = (props) => {
  return (
    <Box {...props}>
      <Box
        bg={useColorModeValue('blue.50', 'blue.900')}
        borderRadius="lg"
        p={8}
        textAlign="center"
        boxShadow="lg">
        <Heading size="md" mb={4} color="blue.600">
          Portal Ciudadano Digital
        </Heading>
        <Text color="gray.600">
          Una plataforma moderna para conectar gobierno y ciudadanía
        </Text>
        <Stack direction="row" spacing={4} justify="center" mt={6}>
          <Box bg="blue.100" p={3} borderRadius="md">
            <Text fontSize="sm" fontWeight="bold" color="blue.800">
              Trámites
            </Text>
          </Box>
          <Box bg="green.100" p={3} borderRadius="md">
            <Text fontSize="sm" fontWeight="bold" color="green.800">
              Pagos
            </Text>
          </Box>
          <Box bg="purple.100" p={3} borderRadius="md">
            <Text fontSize="sm" fontWeight="bold" color="purple.800">
              Consultas
            </Text>
          </Box>
        </Stack>
      </Box>
    </Box>
  );
};