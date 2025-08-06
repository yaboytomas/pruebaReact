import {
  Box,
  Container,
  Link,
  SimpleGrid,
  Stack,
  Text,
  Flex,
  Tag,
  useColorModeValue,
  Image,
  Heading,
} from '@chakra-ui/react';
import logoImage from '../assets/logo.png';

const Logo = (props) => {
  return (
    <Flex align="center" {...props}>
      <Image
        src={logoImage}
        alt="Logo"
        height="40px"
        mr={3}
      />
      <Text fontSize="lg" fontWeight="bold">
        Municipalidad Muncholol
      </Text>
    </Flex>
  );
};

const ListHeader = ({ children }) => {
  return (
    <Text fontWeight={'500'} fontSize={'lg'} mb={2}>
      {children}
    </Text>
  );
};

export default function Footer() {
  return (
    <Box
      bg={useColorModeValue('gray.50', 'gray.900')}
      color={useColorModeValue('gray.700', 'gray.200')}>
      <Container as={Stack} maxW={'6xl'} py={10}>
        <SimpleGrid
          templateColumns={{ sm: '1fr 1fr', md: '2fr 1fr 1fr 1fr 1fr' }}
          spacing={8}>
          <Stack spacing={6}>
            <Box>
              <Logo color={useColorModeValue('gray.700', 'white')} />
            </Box>
            <Text fontSize={'sm'}>
              Trabajamos por el desarrollo y bienestar de nuestra comunidad,
              ofreciendo servicios municipales eficientes y transparentes.
            </Text>
            <Stack direction={'row'} spacing={6}>
              <Tag size="sm" variant="solid" colorScheme="blue">
                Servicios 24/7
              </Tag>
              <Tag size="sm" variant="solid" colorScheme="green">
                Transparencia
              </Tag>
            </Stack>
          </Stack>
          <Stack align={'flex-start'}>
            <ListHeader>Servicios</ListHeader>
            <Link href={'#'}>Trámites Online</Link>
            <Link href={'#'}>Certificados</Link>
            <Link href={'#'}>Pagos</Link>
            <Link href={'#'}>Consultas</Link>
            <Link href={'#'}>Reclamos</Link>
          </Stack>
          <Stack align={'flex-start'}>
            <ListHeader>Información</ListHeader>
            <Link href={'#'}>Noticias</Link>
            <Link href={'#'}>Eventos</Link>
            <Link href={'#'}>Proyectos</Link>
            <Link href={'#'}>Licitaciones</Link>
            <Link href={'#'}>Transparencia</Link>
          </Stack>
          <Stack align={'flex-start'}>
            <ListHeader>Gobierno</ListHeader>
            <Link href={'#'}>Alcalde</Link>
            <Link href={'#'}>Concejo Municipal</Link>
            <Link href={'#'}>Organigrama</Link>
            <Link href={'#'}>Presupuesto</Link>
            <Link href={'#'}>Ordenanzas</Link>
          </Stack>
          <Stack align={'flex-start'}>
            <ListHeader>Contacto</ListHeader>
            <Text fontSize="sm">📍 Dirección Principal, Muncholol</Text>
            <Text fontSize="sm">📞 (123) 456-7890</Text>
            <Text fontSize="sm">✉️ info@muncholol.cl</Text>
            <Text fontSize="sm">🕐 Lun-Vie: 8:00-17:00</Text>
          </Stack>
        </SimpleGrid>
      </Container>
      <Box py={10}>
        <Flex
          align={'center'}
          _before={{
            content: '""',
            borderBottom: '1px solid',
            borderColor: useColorModeValue('gray.200', 'gray.700'),
            flexGrow: 1,
            mr: 8,
          }}
          _after={{
            content: '""',
            borderBottom: '1px solid',
            borderColor: useColorModeValue('gray.200', 'gray.700'),
            flexGrow: 1,
            ml: 8,
          }}>
          <Logo />
        </Flex>
        <Text pt={6} fontSize={'sm'} textAlign={'center'}>
          © 2025 Municipalidad de Muncholol. Todos los derechos reservados.
        </Text>
      </Box>
    </Box>
  );
}