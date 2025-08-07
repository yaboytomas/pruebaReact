import {
  Box,
  Button,
  Container,
  Flex,
  Heading,
  Stack,
  Text,
  useColorModeValue,
  useToast,
  Progress,
  VStack,
} from '@chakra-ui/react';
import { useState } from 'react';

export default function CtaSection() {
  const [isRegistering, setIsRegistering] = useState(false);
  const [registrationProgress, setRegistrationProgress] = useState(0);
  const [showProgress, setShowProgress] = useState(false);
  const [hasCompleted, setHasCompleted] = useState(false);
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

  return (
         <Box
       bg="linear-gradient(135deg, #0071A9 0%, #005a8a 50%, #004d7a 100%)"
       py={12}
       position="relative"
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
      <Container maxW={'5xl'} position="relative" zIndex={1}>
             <Stack
         textAlign={'center'}
         align={'center'}
         spacing={{ base: 6, md: 8 }}
         py={{ base: 6, md: 8 }}>
        <Heading
          fontWeight={600}
          fontSize={{ base: '3xl', sm: '4xl', md: '6xl' }}
          lineHeight={'110%'}>
          Únete a la{' '}
          <Text as={'span'} color={'#FFC02B'}>
            transformación digital
          </Text>{' '}
          de nuestra municipalidad
        </Heading>
                 <Text color={'white'} maxW={'3xl'} opacity={0.9}>
           Sé parte del cambio hacia una gestión municipal más moderna, 
           eficiente y cercana a la ciudadanía. Regístrate para acceder 
           a todos nuestros servicios digitales.
         </Text>
        <VStack spacing={4}>
          <Stack spacing={6} direction={'row'}>
            <Button
              rounded={'full'}
              px={6}
              bg={'#FFC02B'}
              color={'#0071A9'}
              onClick={hasCompleted ? () => {
                setHasCompleted(false);
                setRegistrationProgress(0);
                setShowProgress(false);
              } : handleRegisterClick}
              isLoading={isRegistering}
              loadingText="Registrando..."
              _hover={{ bg: '#e6ab26' }}>
              {hasCompleted ? 'Registrarse Nuevamente' : 'Registrarse Ahora'}
            </Button>
            <Button 
              rounded={'full'} 
              px={6}
              variant={'outline'}
              borderColor={'#0071A9'}
              color={'#0071A9'}
              onClick={handleLearnMoreClick}
              _hover={{ bg: '#0071A9', color: 'white' }}>
              Conocer Más
            </Button>
          </Stack>

          {/* Dynamic Progress Bar */}
          {showProgress && (
            <Box w="full" maxW="400px" animation="slideDown 0.3s ease-out">
                             <Text fontSize="sm" color="white" mb={2} textAlign="center">
                 Procesando registro... {registrationProgress}%
               </Text>
               <Progress 
                 value={registrationProgress} 
                 bg="#e2e8f0"
                 colorScheme="custom"
                 size="sm"
                 borderRadius="full"
                 hasStripe
                 isAnimated
                 sx={{
                   '& > div': {
                     bg: '#FFC02B'
                   }
                 }}
               />
            </Box>
          )}
        </VStack>
                 <Flex w={'full'}>
           <Illustration
             height={{ sm: '20rem', lg: '24rem' }}
             mt={{ base: 8, sm: 10 }}
           />
                  </Flex>
       </Stack>
     </Container>
     </Box>
   );
 }

const Illustration = (props) => {
  return (
    <Box {...props}>
             <Box
         bg="#0071A9"
         color="white"
         borderRadius="lg"
         p={8}
         justifyContent={'center'}
         alignItems={'center'}
         display="flex"
         textAlign="center"
         boxShadow="lg">
         <Heading size="md" mb={4} color="#FFC02B">
           Portal Ciudadano Digital
         </Heading>
         <Text color="white">
           Una plataforma moderna para conectar gobierno y ciudadanía
         </Text>
         <Stack direction="row" spacing={4} justify="center" mt={6}>
           <Box bg="#FFC02B" p={3} borderRadius="md">
             <Text fontSize="sm" fontWeight="bold" color="#0071A9">
               Trámites
             </Text>
           </Box>
           <Box bg="#00ACAC" p={3} borderRadius="md">
             <Text fontSize="sm" fontWeight="bold" color="white">
               Pagos
             </Text>
           </Box>
           <Box bg="#FFC02B" p={3} borderRadius="md">
             <Text fontSize="sm" fontWeight="bold" color="#0071A9">
               Consultas
             </Text>
           </Box>
         </Stack>
       </Box>
    </Box>
  );
};