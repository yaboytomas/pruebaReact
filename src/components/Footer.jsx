import {
  Box,
  Container,
  Link,
  SimpleGrid,
  Stack,
  Text,
  Flex,
  Tag,
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
      bg="#0071A9"
      color="white">
      <Container as={Stack} maxW={'6xl'} py={6}>
        <SimpleGrid
          templateColumns={{ sm: '1fr 1fr', md: '2fr 1fr 1fr 1fr 1fr' }}
          spacing={6}>
          <Stack spacing={3}>
            <Box>
              <Logo color="white" />
            </Box>
            <Text fontSize={'xs'}>
              Trabajamos por el desarrollo y bienestar de nuestra comunidad,
              ofreciendo servicios municipales eficientes y transparentes.
            </Text>
            <Stack direction={'row'} spacing={3}>
              <Tag size="sm" variant="solid" bg="#FFC02B" color="#0071A9">
                Servicios 24/7
              </Tag>
              <Tag size="sm" variant="solid" bg="#00ACAC" color="white">
                Transparencia
              </Tag>
            </Stack>
          </Stack>
          <Stack align={'flex-start'}>
            <ListHeader>Servicios</ListHeader>
            <Link href={'#'} fontSize="sm" color="white" _hover={{ color: "#FFC02B" }}>Trámites Online</Link>
            <Link href={'#'} fontSize="sm" color="white" _hover={{ color: "#FFC02B" }}>Certificados</Link>
            <Link href={'#'} fontSize="sm" color="white" _hover={{ color: "#FFC02B" }}>Pagos</Link>
            <Link href={'#'} fontSize="sm" color="white" _hover={{ color: "#FFC02B" }}>Consultas</Link>
          </Stack>
          <Stack align={'flex-start'}>
            <ListHeader>Información</ListHeader>
            <Link href={'#'} fontSize="sm" color="white" _hover={{ color: "#FFC02B" }}>Noticias</Link>
            <Link href={'#'} fontSize="sm" color="white" _hover={{ color: "#FFC02B" }}>Eventos</Link>
            <Link href={'#'} fontSize="sm" color="white" _hover={{ color: "#FFC02B" }}>Proyectos</Link>
            <Link href={'#'} fontSize="sm" color="white" _hover={{ color: "#FFC02B" }}>Transparencia</Link>
          </Stack>
          <Stack align={'center'}>
            <ListHeader>Gobierno</ListHeader>
            <Link href={'#'} fontSize="sm" color="white" _hover={{ color: "#FFC02B" }}>Alcalde</Link>
            <Link href={'#'} fontSize="sm" color="white" _hover={{ color: "#FFC02B" }}>Concejo Municipal</Link>
            <Link href={'#'} fontSize="sm" color="white" _hover={{ color: "#FFC02B" }}>Organigrama</Link>
            <Link href={'#'} fontSize="sm" color="white" _hover={{ color: "#FFC02B" }}>Presupuesto</Link>
          </Stack>
          <Stack align={'center'}>
            <ListHeader>Contacto</ListHeader>
            <Link 
              href="https://maps.google.com/?q=JOSÉ JOAQUÍN PéReZ, 449, Cholchol" 
              fontSize="xs" 
              isExternal
              color="white"
              _hover={{ textDecoration: 'underline', color: "#FFC02B" }}
            >
              📍 JOSÉ JOAQUÍN PéReZ, 449, Cholchol
            </Link>
            <Link 
              href="tel:+562452734200" 
              fontSize="xs"
              color="white"
              _hover={{ textDecoration: 'underline', color: "#FFC02B" }}
            >
              📞 (452) 734200
            </Link>
            <Link 
              href="mailto:oficinadepartes@municholchol.cl" 
              fontSize="xs"
              color="white"
              _hover={{ textDecoration: 'underline', color: "#FFC02B" }}
            >
              ✉️ oficinadepartes@municholchol.cl
            </Link>
            <Text fontSize="xs" color="white">🕐 Lun-Vie: 8:00-17:00</Text>
          </Stack>
        </SimpleGrid>
      </Container>
      <Box py={4}>
        <Flex
          align={'center'}
          _before={{
            content: '""',
            borderBottom: '1px solid',
            borderColor: '#00ACAC',
            flexGrow: 1,
            mr: 8,
          }}
          _after={{
            content: '""',
            borderBottom: '1px solid',
            borderColor: '#00ACAC',
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