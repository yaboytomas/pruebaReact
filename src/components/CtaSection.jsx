import {
  Box,
  Button,
  Container,
  Flex,
  Heading,
  Stack,
  Text,
  useToast,
  Progress,
  VStack,
  Image,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalBody,
  ModalCloseButton,
  useDisclosure,
  HStack,
} from '@chakra-ui/react';
import { useState } from 'react';
import image1 from '../assets/1.jpg';
import image2 from '../assets/2.jpg';
import image3 from '../assets/3.jpg';

export default function CtaSection() {
  const [isRegistering, setIsRegistering] = useState(false);
  const [registrationProgress, setRegistrationProgress] = useState(0);
  const [showProgress, setShowProgress] = useState(false);
  const [hasCompleted, setHasCompleted] = useState(false);
  const [selectedImage, setSelectedImage] = useState(null);
  const { isOpen, onOpen, onClose } = useDisclosure();
  const toast = useToast();

  // Click event handler for registration button
  const handleRegisterClick = () => {
    if (isRegistering || hasCompleted) return; // Prevent multiple clicks
    
    setIsRegistering(true);
    setShowProgress(true);
    setRegistrationProgress(0);
    setHasCompleted(false);

    // Simulate registration process with progress updates
    const interval = setInterval(() => {
      setRegistrationProgress(prev => {
        if (prev >= 100) {
          clearInterval(interval);
          setIsRegistering(false);
          setShowProgress(false);
          setHasCompleted(true);
          
          // Only show toast once
          if (!hasCompleted) {
            toast({
              title: '¡Registro exitoso!',
              description: 'Has sido registrado en nuestro portal ciudadano',
              status: 'success',
              duration: 4000,
              isClosable: true,
            });
          }
          return 0;
        }
        return prev + 10;
      });
    }, 200);
  };

  // Click event handler for learn more button
  const handleLearnMoreClick = () => {
    toast({
      title: 'Información adicional',
      description: 'Te redirigiremos a la página de información detallada',
      status: 'info',
      duration: 2000,
      isClosable: true,
    });
  };

  // Click event handler for image fullscreen
  const handleImageClick = (imageSrc) => {
    setSelectedImage(imageSrc);
    onOpen();
  };

  const images = [
    { src: image1, alt: 'Imagen 1 de la municipalidad' },
    { src: image2, alt: 'Imagen 2 de la municipalidad' },
    { src: image3, alt: 'Imagen 3 de la municipalidad' },
  ];

  return (
    <>
      <Box
        bg="linear-gradient(135deg, #0071A9 0%, #005a8a 50%, #004d7a 100%)"
        py={16}
        position="relative"
        borderRadius="3xl"
        mx={4}
        my={4}
        overflow="hidden"
        _before={{
          content: '""',
          position: 'absolute',
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          background: 'linear-gradient(135deg, rgba(255, 192, 43, 0.1) 0%, rgba(0, 172, 172, 0.1) 50%, rgba(255, 192, 43, 0.05) 100%)',
          pointerEvents: 'none',
          zIndex: 0,
        }}
      >
        <Container maxW={'6xl'} position="relative" zIndex={1}>
          {/* Main Hero Section */}
          <VStack spacing={8} textAlign="center" mb={16}>
            <Heading
              fontWeight={700}
              fontSize={{ base: '3xl', sm: '4xl', md: '5xl', lg: '6xl' }}
              lineHeight={'110%'}
              color="white">
              Únete a la{' '}
              <Text as={'span'} color={'#FFC02B'}>
                transformación digital
              </Text>{' '}
              de nuestra municipalidad
            </Heading>
            
            <Text 
              color={'white'} 
              maxW={'4xl'} 
              fontSize={{ base: 'md', md: 'lg' }}
              opacity={0.95}
              lineHeight={1.6}>
              Sé parte del cambio hacia una gestión municipal más moderna, 
              eficiente y cercana a la ciudadanía. Regístrate para acceder 
              a todos nuestros servicios digitales.
            </Text>

            {/* Action Buttons */}
            <HStack spacing={6} flexWrap="wrap" justify="center">
              <Button
                size="lg"
                rounded={'full'}
                px={8}
                py={6}
                bg={'#FFC02B'}
                color={'#0071A9'}
                fontWeight={600}
                fontSize="lg"
                onClick={hasCompleted ? () => {
                  setHasCompleted(false);
                  setRegistrationProgress(0);
                  setShowProgress(false);
                } : handleRegisterClick}
                isLoading={isRegistering}
                loadingText="Registrando..."
                _hover={{ bg: '#e6ab26', transform: 'translateY(-2px)' }}
                transition="all 0.3s ease"
                boxShadow="0 4px 15px rgba(255, 192, 43, 0.4)">
                {hasCompleted ? 'Registrarse Nuevamente' : 'Registrarse Ahora'}
              </Button>
              
              <Button 
                size="lg"
                rounded={'full'} 
                px={8}
                py={6}
                variant={'outline'}
                borderColor={'white'}
                borderWidth={2}
                color={'white'}
                fontWeight={600}
                fontSize="lg"
                onClick={handleLearnMoreClick}
                _hover={{ 
                  bg: 'white', 
                  color: '#0071A9',
                  transform: 'translateY(-2px)'
                }}
                transition="all 0.3s ease">
                Conocer Más
              </Button>
            </HStack>

            {/* Progress Bar */}
            {showProgress && (
              <Box w="full" maxW="500px">
                <Text fontSize="md" color="white" mb={3} textAlign="center" fontWeight={500}>
                  Procesando registro... {registrationProgress}%
                </Text>
                <Progress 
                  value={registrationProgress} 
                  bg="rgba(255,255,255,0.2)"
                  colorScheme="yellow"
                  size="lg"
                  borderRadius="full"
                  hasStripe
                  isAnimated
                />
              </Box>
            )}
          </VStack>

          {/* Portal Digital Section */}
          <Box
            bg="rgba(255, 255, 255, 0.1)"
            backdropFilter="blur(10px)"
            borderRadius="2xl"
            p={8}
            mb={16}
            border="1px solid rgba(255, 255, 255, 0.2)"
            boxShadow="0 8px 32px rgba(0, 0, 0, 0.3)">
            
            <VStack spacing={6}>
              <Heading 
                size="xl" 
                color="#FFC02B" 
                textAlign="center"
                fontWeight={600}>
                Portal Ciudadano Digital
              </Heading>
              
              <Text 
                color="white" 
                fontSize="lg"
                textAlign="center"
                opacity={0.9}
                maxW="2xl">
                Una plataforma moderna para conectar gobierno y ciudadanía
              </Text>

              <HStack 
                spacing={6} 
                justify="center" 
                flexWrap="wrap"
                pt={4}>
                <Box 
                  bg="#FFC02B" 
                  px={6} 
                  py={4} 
                  borderRadius="xl"
                  transition="all 0.3s ease"
                  _hover={{ transform: 'translateY(-3px)', boxShadow: '0 8px 25px rgba(255, 192, 43, 0.4)' }}
                  cursor="pointer">
                  <Text fontSize="lg" fontWeight="bold" color="#0071A9">
                    Trámites
                  </Text>
                </Box>
                
                <Box 
                  bg="#00ACAC" 
                  px={6} 
                  py={4} 
                  borderRadius="xl"
                  transition="all 0.3s ease"
                  _hover={{ transform: 'translateY(-3px)', boxShadow: '0 8px 25px rgba(0, 172, 172, 0.4)' }}
                  cursor="pointer">
                  <Text fontSize="lg" fontWeight="bold" color="white">
                    Pagos
                  </Text>
                </Box>
                
                <Box 
                  bg="#FFC02B" 
                  px={6} 
                  py={4} 
                  borderRadius="xl"
                  transition="all 0.3s ease"
                  _hover={{ transform: 'translateY(-3px)', boxShadow: '0 8px 25px rgba(255, 192, 43, 0.4)' }}
                  cursor="pointer">
                  <Text fontSize="lg" fontWeight="bold" color="#0071A9">
                    Consultas
                  </Text>
                </Box>
              </HStack>
            </VStack>
          </Box>

          {/* Gallery Section */}
          <Box>
            <VStack spacing={6}>
              <Heading 
                size="lg" 
                color="#FFC02B" 
                textAlign="center"
                fontWeight={600}>
                Galería de Imágenes
              </Heading>
              
              <Text 
                color="white" 
                fontSize="md" 
                textAlign="center" 
                opacity={0.9}
                maxW="2xl">
                Explora nuestra galería y conoce más sobre los proyectos y espacios de nuestra municipalidad
              </Text>
              
              <HStack 
                spacing={6} 
                justify="center" 
                flexWrap="wrap"
                pt={4}>
                {images.map((image, index) => (
                  <Box
                    key={index}
                    cursor="pointer"
                    transition="all 0.4s ease"
                    _hover={{
                      transform: 'scale(1.05) translateY(-5px)',
                      boxShadow: '0 15px 35px rgba(0, 0, 0, 0.4)',
                    }}
                    onClick={() => handleImageClick(image.src)}
                    borderRadius="2xl"
                    overflow="hidden"
                    boxShadow="0 8px 25px rgba(0, 0, 0, 0.3)"
                    border="2px solid rgba(255, 192, 43, 0.3)"
                    bg="rgba(255, 255, 255, 0.1)"
                    backdropFilter="blur(5px)">
                    <Image
                      src={image.src}
                      alt={image.alt}
                      w={{ base: '250px', md: '300px' }}
                      h={{ base: '180px', md: '220px' }}
                      objectFit="cover"
                      transition="all 0.4s ease"
                    />
                  </Box>
                ))}
              </HStack>
            </VStack>
          </Box>
        </Container>
      </Box>

      {/* Fullscreen Modal */}
      <Modal isOpen={isOpen} onClose={onClose} size="full">
        <ModalOverlay bg="blackAlpha.800" />
        <ModalContent bg="black" maxW="100vw" maxH="100vh">
          <ModalCloseButton 
            color="white" 
            zIndex={10} 
            size="lg"
            _hover={{ bg: 'whiteAlpha.200' }}
          />
          <ModalBody p={0} display="flex" alignItems="center" justifyContent="center">
            {selectedImage && (
              <Image
                src={selectedImage}
                alt="Imagen en pantalla completa"
                maxW="95%"
                maxH="95%"
                objectFit="contain"
                cursor="pointer"
                onClick={onClose}
                borderRadius="md"
              />
            )}
          </ModalBody>
        </ModalContent>
      </Modal>
    </>
  );
}