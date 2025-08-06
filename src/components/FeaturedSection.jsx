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
  Card,
  CardBody,
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
        <SimpleGrid columns={{ base: 1, md: 2, lg: 3 }} spacing={8}>
          {features.map((feature) => (
            <Card 
              key={feature.id}
              cursor="pointer"
              transition="all 0.3s ease"
              _hover={{
                transform: 'translateY(-8px)',
                shadow: 'xl',
                borderColor: 'green.400',
              }}
              border="1px"
              borderColor="gray.200"
              borderRadius="lg"
            >
              <CardBody p={6}>
                <HStack align={'top'} spacing={4}>
                  <Box 
                    color={'green.400'} 
                    fontSize="xl"
                    transition="all 0.3s ease"
                    _groupHover={{ transform: 'scale(1.1)' }}
                  >
                    <Icon as={CheckIcon} />
                  </Box>
                  <VStack align={'start'} spacing={3}>
                    <Text fontWeight={600} fontSize="lg" color="gray.800">
                      {feature.title}
                    </Text>
                    <Text color={'gray.600'} fontSize="md" lineHeight="1.6">
                      {feature.text}
                    </Text>
                  </VStack>
                </HStack>
              </CardBody>
            </Card>
          ))}
        </SimpleGrid>
      </Container>
    </Box>
  );
}