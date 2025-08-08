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
  useToast,
  Badge,
  IconButton,
} from '@chakra-ui/react';
import { CheckIcon, StarIcon, InfoIcon } from '@chakra-ui/icons';
import { useState, useEffect, useRef } from 'react';

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
  const [expandedCard, setExpandedCard] = useState(null);
  const [favoriteServices, setFavoriteServices] = useState([]);
  const [lastAction, setLastAction] = useState(null);
  const toast = useToast();
  const isInitialMount = useRef(true);

  // Click event handler for card expansion
  const handleCardClick = (featureId) => {
    setExpandedCard(expandedCard === featureId ? null : featureId);
  };

  // Click event handler for favorite toggle
  const handleFavoriteClick = (featureId, e) => {
    e.preventDefault();
    e.stopPropagation(); // Prevent card expansion
    
    setFavoriteServices(prev => {
      const isFavorite = prev.includes(featureId);
      const newFavorites = isFavorite 
        ? prev.filter(id => id !== featureId)
        : [...prev, featureId];
      
      // Set the action to trigger useEffect
      setLastAction({
        type: isFavorite ? 'removed' : 'added',
        featureId
      });
      
      return newFavorites;
    });
  };

  // Mouseover event handler for card hover effects
  const handleCardMouseOver = (featureId) => {
    // Dynamic content update - add hover effect
    const card = document.getElementById(`feature-card-${featureId}`);
    if (card) {
      card.style.transform = 'translateY(-8px) scale(1.02)';
    }
  };

  // Mouseout event handler for card hover effects
  const handleCardMouseOut = (featureId) => {
    // Dynamic content update - remove hover effect
    const card = document.getElementById(`feature-card-${featureId}`);
    if (card) {
      card.style.transform = 'translateY(0) scale(1)';
    }
  };

  // Handle toast notifications for favorite actions
  useEffect(() => {
    if (isInitialMount.current) {
      isInitialMount.current = false;
      return;
    }

    if (lastAction) {
      if (lastAction.type === 'added') {
        toast({
          title: 'Servicio agregado a favoritos',
          description: 'El servicio ha sido agregado a tus favoritos',
          status: 'success',
          duration: 2000,
          isClosable: true,
        });
      } else if (lastAction.type === 'removed') {
        toast({
          title: 'Servicio removido de favoritos',
          description: 'El servicio ha sido removido de tus favoritos',
          status: 'info',
          duration: 2000,
          isClosable: true,
        });
      }
      
      // Clear the action after showing toast
      setLastAction(null);
    }
  }, [lastAction, toast]);

  return (
    <Box 
      py={8} 
      px={4}
      bg="linear-gradient(135deg, #f7fafc 0%, #edf2f7 50%, #e2e8f0 100%)"
      position="relative"
      borderRadius="3xl"
      mx={4}
      my={2}
      overflow="hidden"
      _before={{
        content: '""',
        position: 'absolute',
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        background: 'linear-gradient(135deg, rgba(0, 113, 169, 0.05) 0%, rgba(255, 192, 43, 0.03) 50%, rgba(0, 172, 172, 0.05) 100%)',
        pointerEvents: 'none',
        zIndex: 0,
      }}
    >
      <Stack spacing={4} as={Container} maxW={'3xl'} textAlign={'center'} position="relative" zIndex={1}>
        <Heading fontSize={'3xl'} color="#0071A9">Nuestros Servicios Destacados</Heading>
        <Text color={'gray.600'} fontSize={'xl'}>
          Conoce los principales servicios que ofrecemos para mejorar la calidad 
          de vida en nuestra comunidad
        </Text>
      </Stack>

      <Container maxW={'6xl'} mt={10} position="relative" zIndex={1}>
        <SimpleGrid columns={{ base: 1, md: 2, lg: 3 }} spacing={8}>
          {features.map((feature) => (
            <Card 
              key={feature.id}
              id={`feature-card-${feature.id}`}
              cursor="pointer"
              transition="all 0.3s ease"
              onClick={() => handleCardClick(feature.id)}
              onMouseOver={() => handleCardMouseOver(feature.id)}
              onMouseOut={() => handleCardMouseOut(feature.id)}
                             border="1px"
               borderColor="gray.200"
               borderRadius="lg"
               position="relative"
               bg="white"
               boxShadow="0 4px 6px rgba(0, 0, 0, 0.05), 0 1px 3px rgba(0, 0, 0, 0.1)"
               _hover={{
                 transform: 'translateY(-8px)',
                 shadow: 'xl',
                 borderColor: '#FFC02B',
                 boxShadow: '0 20px 25px rgba(0, 0, 0, 0.1), 0 10px 10px rgba(0, 0, 0, 0.04)',
               }}
            >
              <CardBody p={6}>
                <HStack align={'top'} spacing={4}>
                  <Box 
                    color={'#00ACAC'} 
                    fontSize="xl"
                    transition="all 0.3s ease"
                    _groupHover={{ transform: 'scale(1.1)' }}
                  >
                    <Icon as={CheckIcon} />
                  </Box>
                  <VStack align={'start'} spacing={3} flex={1}>
                    <HStack justify="space-between" w="full">
                      <Text fontWeight={600} fontSize="lg" color="gray.800">
                        {feature.title}
                      </Text>
                                             <IconButton
                         icon={<StarIcon />}
                         size="sm"
                         variant="ghost"
                         color={favoriteServices.includes(feature.id) ? '#FFC02B' : 'gray.400'}
                         onClick={(e) => handleFavoriteClick(feature.id, e)}
                         onMouseDown={(e) => e.stopPropagation()}
                         aria-label={`${favoriteServices.includes(feature.id) ? 'Remover de' : 'Agregar a'} favoritos`}
                         _hover={{
                           color: favoriteServices.includes(feature.id) ? '#e6ab26' : '#FFC02B',
                           transform: 'scale(1.1)',
                         }}
                       />
                    </HStack>
                    <Text color={'gray.600'} fontSize="md" lineHeight="1.6">
                      {feature.text}
                    </Text>
                    
                    {/* Dynamic expanded content */}
                    {expandedCard === feature.id && (
                      <Box
                        mt={3}
                        p={3}
                        bg="#0071A9"
                        color="white"
                        borderRadius="md"
                        border="1px solid"
                        borderColor="#00ACAC"
                        animation="fadeIn 0.3s ease-in"
                      >
                        <HStack spacing={2} mb={2}>
                          <Icon as={InfoIcon} color="#FFC02B" />
                          <Text fontSize="sm" fontWeight="semibold" color="white">
                            Información adicional
                          </Text>
                        </HStack>
                        <Text fontSize="sm" color="white">
                          Este servicio está disponible las 24 horas del día a través de nuestro portal online.
                          Para más información, contacta directamente con la unidad correspondiente.
                        </Text>
                        <Badge bg="#FFC02B" color="#0071A9" mt={2}>
                          Disponible 24/7
                        </Badge>
                      </Box>
                    )}
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