import {
  Box,
  Container,
  Heading,
  SimpleGrid,
  Icon,
  Text,
  Stack,
  HStack,
  VStack,
} from '@chakra-ui/react';
import { CheckIcon } from '@chakra-ui/icons';

// Replace test data with your data
const features = [
  {
    id: 1,
    title: 'Trámites Online',
    text: 'Realiza tus trámites municipales desde la comodidad de tu hogar, las 24 horas del día.',
  },
  {
    id: 2,
    title: 'Atención Ciudadana',
    text: 'Servicio personalizado y eficiente para resolver todas tus consultas y necesidades.',
  },
  {
    id: 3,
    title: 'Transparencia',
    text: 'Acceso completo a la información municipal y gestión transparente de recursos públicos.',
  },
  {
    id: 4,
    title: 'Participación Ciudadana',
    text: 'Espacios para que la comunidad participe activamente en las decisiones municipales.',
  },
  {
    id: 5,
    title: 'Desarrollo Sostenible',
    text: 'Proyectos orientados al cuidado del medio ambiente y desarrollo sustentable.',
  },
  {
    id: 6,
    title: 'Servicios Públicos',
    text: 'Mantenimiento y mejora continua de servicios básicos como alumbrado, limpieza y obras.',
  },
];

export default function FeaturedSection() {
  return (
    <Box p={4}>
      <Stack spacing={4} as={Container} maxW={'3xl'} textAlign={'center'}>
        <Heading fontSize={'3xl'}>Nuestros Servicios Destacados</Heading>
        <Text color={'gray.600'} fontSize={'xl'}>
          Conoce los principales servicios que ofrecemos para mejorar la calidad 
          de vida en nuestra comunidad
        </Text>
      </Stack>

      <Container maxW={'6xl'} mt={10}>
        <SimpleGrid columns={{ base: 1, md: 2, lg: 3 }} spacing={10}>
          {features.map((feature) => (
            <HStack key={feature.id} align={'top'}>
              <Box color={'green.400'} px={2}>
                <Icon as={CheckIcon} />
              </Box>
              <VStack align={'start'}>
                <Text fontWeight={600}>{feature.title}</Text>
                <Text color={'gray.600'}>{feature.text}</Text>
              </VStack>
            </HStack>
          ))}
        </SimpleGrid>
      </Container>
    </Box>
  );
}