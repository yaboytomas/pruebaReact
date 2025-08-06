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
    <Text fontWeight={'500'} fontSize={'md'} mb={1}>
      {children}
    </Text>
  );
};

export default function Footer() {
  return (
    <Box
      bg={useColorModeValue('gray.50', 'gray.900')}
      color={useColorModeValue('gray.700', 'gray.200')}>
      <Container as={Stack} maxW={'6xl'} py={6}>
        <SimpleGrid
          templateColumns={{ sm: '1fr 1fr', md: '2fr 1fr 1fr 1fr 1fr' }}
          spacing={6}>
          <Stack spacing={3}>
            <Box>
              <Logo color={useColorModeValue('gray.700', 'white')} />
            </Box>
            <Text fontSize={'xs'}>
              Trabajamos por el desarrollo y bienestar de nuestra comunidad,
              ofreciendo servicios municipales eficientes y transparentes.
            </Text>
            <Stack direction={'row'} spacing={3}>
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
            <Link href={'#'} fontSize="sm">Trámites Online</Link>
            <Link href={'#'} fontSize="sm">Certificados</Link>
            <Link href={'#'} fontSize="sm">Pagos</Link>
            <Link href={'#'} fontSize="sm">Consultas</Link>
          </Stack>
          <Stack align={'flex-start'}>
            <ListHeader>Información</ListHeader>
            <Link href={'#'} fontSize="sm">Noticias</Link>
            <Link href={'#'} fontSize="sm">Eventos</Link>
            <Link href={'#'} fontSize="sm">Proyectos</Link>
            <Link href={'#'} fontSize="sm">Transparencia</Link>
          </Stack>
          <Stack align={'center'}>
            <ListHeader>Gobierno</ListHeader>
            <Link href={'#'} fontSize="sm">Alcalde</Link>
            <Link href={'#'} fontSize="sm">Concejo Municipal</Link>
            <Link href={'#'} fontSize="sm">Organigrama</Link>
            <Link href={'#'} fontSize="sm">Presupuesto</Link>
          </Stack>
          <Stack align={'center'}>
            <ListHeader>Contacto</ListHeader>
            <Link 
              href="https://maps.google.com/?q=JOSÉ JOAQUÍN PéReZ, 449, Cholchol" 
              fontSize="xs" 
              isExternal
              _hover={{ textDecoration: 'underline' }}
            >
              📍 JOSÉ JOAQUÍN PéReZ, 449, Cholchol
            </Link>
            <Link 
              href="tel:+562452734200" 
              fontSize="xs"
              _hover={{ textDecoration: 'underline' }}
            >
              📞 (452) 734200
            </Link>
            <Link 
              href="mailto:oficinadepartes@municholchol.cl" 
              fontSize="xs"
              _hover={{ textDecoration: 'underline' }}
            >
              ✉️ oficinadepartes@municholchol.cl
            </Link>
            <Text fontSize="xs">🕐 Lun-Vie: 8:00-17:00</Text>
          </Stack>
        </SimpleGrid>
      </Container>
      <Box py={4}>
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
        <Text pt={3} fontSize={'xs'} textAlign={'center'}>
          © 2025 Municipalidad de Muncholol. Todos los derechos reservados.
        </Text>
      </Box>
    </Box>
  );
}