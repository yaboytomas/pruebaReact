import {
  Container,
  Stack,
  Flex,
  Box,
  Heading,
  Text,
  Button,
  Image,
  Icon,
  IconButton,
  createIcon,
  useColorModeValue,
  useToast,
} from '@chakra-ui/react';
import logoImage from '../assets/logo.png';
import muniImage from '../assets/muni.png';
import { useState, useRef } from 'react';

export default function HeroSection() {
  const [isLogoHovered, setIsLogoHovered] = useState(false);
  const [clickCount, setClickCount] = useState(0);
  const [showWelcomeMessage, setShowWelcomeMessage] = useState(false);
  const logoRef = useRef();
  const welcomeMessageRef = useRef();
  const toast = useToast();

  // Click event handler for logo
  const handleLogoClick = () => {
    setClickCount(prev => prev + 1);
    
    if (clickCount === 4) {
      toast({
        title: '¡Easter Egg!',
        description: 'Has encontrado un mensaje secreto de la municipalidad',
        status: 'success',
        duration: 3000,
        isClosable: true,
      });
      setClickCount(0);
    }
  };

  // Mouseover event handler for logo
  const handleLogoMouseOver = () => {
    setIsLogoHovered(true);
  };

  // Mouseout event handler for logo
  const handleLogoMouseOut = () => {
    setIsLogoHovered(false);
  };

  // Click event handler for services button
  const handleServicesClick = () => {
    // Dynamic DOM manipulation - add welcome message
    setShowWelcomeMessage(true);
    
    // Remove message after 3 seconds
    setTimeout(() => {
      setShowWelcomeMessage(false);
    }, 3000);
  };

  // Click event handler for learn more button
  const handleLearnMoreClick = () => {
    toast({
      title: 'Redirigiendo...',
      description: 'Serás dirigido al canal de YouTube de la municipalidad',
      status: 'info',
      duration: 2000,
      isClosable: true,
    });
  };

  return (
    <Box
      position="relative"
      minH="70vh"
      backgroundImage={`url(${muniImage})`}
      backgroundSize="cover"
      backgroundPosition="center"
      backgroundRepeat="no-repeat"
      backgroundAttachment="fixed"
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
        bg: 'blackAlpha.400',
        zIndex: 1,
      }}
    >
      <Container maxW={'7xl'} position="relative" zIndex={2}>
        <Stack
          align={'center'}
          spacing={{ base: 6, md: 8 }}
          py={{ base: 12, md: 16 }}
          direction={{ base: 'column' }}>
          
          {/* Main Content Row */}
          <Stack
            direction={{ base: 'column', md: 'row' }}
            spacing={{ base: 6, md: 8 }}
            align={'center'}
            w={'full'}>
            
            {/* Left Container - Text Content */}
            <Stack 
              flex={1} 
              spacing={{ base: 4, md: 6 }}
              bg={'blackAlpha.600'}
              p={6}
              borderRadius={'xl'}
              backdropFilter={'blur(10px)'}
              border={'1px solid'}
              borderColor={'whiteAlpha.200'}>
              <Heading
                lineHeight={1.1}
                fontWeight={600}
                fontSize={{ base: '3xl', sm: '4xl', lg: '6xl' }}
                color="white"
                textShadow="2px 2px 4px rgba(0,0,0,0.5)">
                <Text
                  as={'span'}
                  position={'relative'}
                  _after={{
                    content: "''",
                    width: 'full',
                    height: useColorModeValue('20%', '30%'),
                    position: 'absolute',
                    bottom: 1,
                    left: 0,
                    bg: '#00ACAC',
                    zIndex: -1,
                  }}>
                  Municipalidad
                </Text>
                <br />
                <Text as={'span'} color={'#FFC02B'}>
                  Muncholol
                </Text>
              </Heading>
              <Text color={'gray.100'} textShadow="1px 1px 2px rgba(0,0,0,0.7)" fontSize={'lg'}>
                Trabajamos por el desarrollo y bienestar de nuestra comunidad. 
                Ofrecemos servicios municipales eficientes y transparentes para 
                mejorar la calidad de vida de todos nuestros ciudadanos.
              </Text>
            </Stack>

            {/* Right Container - Logo Image */}
            <Flex
              flex={1}
              justify={'center'}
              align={'center'}
              position={'relative'}
              w={'full'}
              overflow={'visible'}>
              <Box
                display={'flex'}
                justifyContent={'center'}
                alignItems={'center'}
                position={'relative'}
                height={'400px'}
                width={'400px'}
                overflow={'visible'}>
                <Image
                  ref={logoRef}
                  alt={'Municipality Logo'}
                  src={logoImage}
                  width={'300px'}
                  height={'300px'}
                  maxWidth={'300px'}
                  maxHeight={'300px'}
                  objectFit={'contain'}
                  filter={'drop-shadow(0 8px 16px rgba(0,0,0,0.4))'}
                  cursor="pointer"
                  onClick={handleLogoClick}
                  onMouseOver={handleLogoMouseOver}
                  onMouseOut={handleLogoMouseOut}
                  transition="all 0.3s ease"
                  transform={isLogoHovered ? 'scale(1.1) rotate(5deg)' : 'scale(1) rotate(0deg)'}
                  _hover={{
                    filter: 'drop-shadow(0 12px 24px rgba(0,0,0,0.6))',
                  }}
                />
              </Box>
            </Flex>
          </Stack>

          {/* Buttons Section Below */}
          <Stack
            spacing={{ base: 4, sm: 6 }}
            direction={{ base: 'column', sm: 'row' }}
            justify={'center'}
            w={'full'}
            pt={4}>
            <Button
              rounded={'full'}
              size={'lg'}
              fontWeight={'normal'}
              px={8}
              onClick={handleServicesClick}
              bg={'#FFC02B'}
              color={'#0071A9'}
              _hover={{ bg: '#e6ab26', transform: 'translateY(-2px)' }}
              boxShadow={'lg'}>
              Servicios Online
            </Button>
            <Button
              rounded={'full'}
              size={'lg'}
              fontWeight={'normal'}
              onClick={handleLearnMoreClick}
              px={8}
              bg={'#00ACAC'}
              color={'white'}
              border={'2px solid'}
              borderColor={'#00ACAC'}
              _hover={{ 
                bg: '#008a8a',
                borderColor: '#008a8a',
                transform: 'translateY(-2px)'
              }}
              leftIcon={<PlayIcon h={4} w={4} color={'white'} />}>
              Conoce más
            </Button>
          </Stack>

          {/* Dynamic Welcome Message */}
          {showWelcomeMessage && (
            <Box
              ref={welcomeMessageRef}
              bg="green.500"
              color="white"
              p={4}
              borderRadius="lg"
              textAlign="center"
              animation="slideIn 0.5s ease-out"
              position="fixed"
              top="20px"
              right="20px"
              zIndex={1000}
              boxShadow="lg"
            >
              <Text fontWeight="bold">¡Bienvenido a nuestros servicios online!</Text>
              <Text fontSize="sm">Serás redirigido al portal de trámites</Text>
            </Box>
          )}
        </Stack>
      </Container>
    </Box>
  );
}

const PlayIcon = createIcon({
  displayName: 'PlayIcon',
  viewBox: '0 0 58 58',
  d: 'M28.9999 0.562988C13.3196 0.562988 0.562378 13.3202 0.562378 29.0005C0.562378 44.6808 13.3196 57.438 28.9999 57.438C44.6801 57.438 57.4374 44.6808 57.4374 29.0005C57.4374 13.3202 44.6801 0.562988 28.9999 0.562988ZM39.2223 30.272L23.5749 39.7247C23.3506 39.8591 23.0946 39.9314 22.8332 39.9342C22.5717 39.9369 22.3142 39.8701 22.0871 39.7406C21.86 39.611 21.6715 39.4234 21.5408 39.1969C21.4102 38.9705 21.3421 38.7133 21.3436 38.4519V19.5491C21.3421 19.2877 21.4102 19.0305 21.5408 18.8041C21.6715 18.5776 21.86 18.3899 22.0871 18.2604C22.3142 18.1308 22.5717 18.064 22.8332 18.0668C23.0946 18.0696 23.3506 18.1419 23.5749 18.2763L39.2223 27.729C39.4404 27.8619 39.6207 28.0486 39.7458 28.2713C39.8709 28.494 39.9366 28.7451 39.9366 29.0005C39.9366 29.2559 39.8709 29.507 39.7458 29.7297C39.6207 29.9523 39.4404 30.1391 39.2223 30.272Z',
});

export const Blob = (props) => {
  return (
    <Icon
      width={'100%'}
      viewBox="0 0 578 440"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}>
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M239.184 439.443c-55.13-5.419-110.241-21.365-151.074-58.767C42.307 338.722-7.478 282.729.938 221.217c8.433-61.644 78.896-91.048 126.871-130.712 34.337-28.388 70.198-51.348 112.004-66.78C282.34 8.024 325.382-3.369 370.518.904c54.492 5.166 101.818 30.648 142.426 63.294 40.608 32.646 75.701 72.4 96.215 117.743 20.479 45.288 26.658 96.559 13.425 144.327-13.214 47.746-45.025 93.192-92.539 119.441-47.515 26.249-111.36 33.311-169.676 25.409-58.315-7.9-111.892-31.47-150.846-75.886C187.617 446.284 180.77 433.409 165.376 431.008c-15.394-2.401-42.844 19.426-65.376 6.144-22.532-13.282-47.045-48.725-47.045-48.725s30.513 11.018 47.045-6.144c16.532-17.162 65.376-31.007 65.376-31.007s-30.513 11.018-47.045-6.144c-16.532-17.162-65.376-31.007-65.376-31.007s30.513 11.018 47.045-6.144c16.532-17.162 65.376-31.007 65.376-31.007s-30.513 11.018-47.045-6.144c-16.532-17.162-65.376-31.007-65.376-31.007s30.513 11.018 47.045-6.144c16.532-17.162 65.376-31.007 65.376-31.007s-30.513 11.018-47.045-6.144c-16.532-17.162-65.376-31.007-65.376-31.007s30.513 11.018 47.045-6.144c16.532-17.162 65.376-31.007 65.376-31.007s-30.513 11.018-47.045-6.144c-16.532-17.162-65.376-31.007-65.376-31.007s30.513 11.018 47.045-6.144c16.532-17.162 65.376-31.007 65.376-31.007s-30.513 11.018-47.045-6.144c-16.532-17.162-65.376-31.007-65.376-31.007s30.513 11.018 47.045-6.144c16.532-17.162 65.376-31.007 65.376-31.007s-30.513 11.018-47.045-6.144c-16.532-17.162-65.376-31.007-65.376-31.007s30.513 11.018 47.045-6.144c16.532-17.162 65.376-31.007 65.376-31.007s-30.513 11.018-47.045-6.144c-16.532-17.162-65.376-31.007-65.376-31.007s30.513 11.018 47.045-6.144c16.532-17.162 65.376-31.007 65.376-31.007s-30.513 11.018-47.045-6.144c-16.532-17.162-65.376-31.007-65.376-31.007s30.513 11.018 47.045-6.144c16.532-17.162 65.376-31.007 65.376-31.007s-30.513 11.018-47.045-6.144c-16.532-17.162-65.376-31.007-65.376-31.007s30.513 11.018 47.045-6.144c16.532-17.162 65.376-31.007 65.376-31.007s-30.513 11.018-47.045-6.144c-16.532-17.162-65.376-31.007-65.376-31.007s30.513 11.018 47.045-6.144c16.532-17.162 65.376-31.007 65.376-31.007s-30.513 11.018-47.045-6.144c-16.532-17.162-65.376-31.007-65.376-31.007s30.513 11.018 47.045-6.144c16.532-17.162 65.376-31.007 65.376-31.007s-30.513 11.018-47.045-6.144c-16.532-17.162-65.376-31.007-65.376-31.007s30.513 11.018 47.045-6.144c16.532-17.162 65.376-31.007 65.376-31.007s-30.513 11.018-47.045-6.144c-16.532-17.162-65.376-31.007-65.376-31.007s30.513 11.018 47.045-6.144c16.532-17.162 65.376-31.007 65.376-31.007s-30.513 11.018-47.045-6.144c-16.532-17.162-65.376-31.007-65.376-31.007s30.513 11.018 47.045-6.144c16.532-17.162 65.376-31.007 65.376-31.007s-30.513 11.018-47.045-6.144c-16.532-17.162-65.376-31.007-65.376-31.007s30.513 11.018 47.045-6.144c16.532-17.162 65.376-31.007 65.376-31.007s-30.513 11.018-47.045-6.144c-16.532-17.162-65.376-31.007-65.376-31.007s30.513 11.018 47.045-6.144c16.532-17.162 65.376-31.007 65.376-31.007s-30.513 11.018-47.045-6.144c-16.532-17.162-65.376-31.007-65.376-31.007s30.513 11.018 47.045-6.144c16.532-17.162 65.376-31.007 65.376-31.007s-30.513 11.018-47.045-6.144c-16.532-17.162-65.376-31.007-65.376-31.007s30.513 11.018 47.045-6.144c16.532-17.162 65.376-31.007 65.376-31.007s-30.513 11.018-47.045-6.144c-16.532-17.162-65.376-31.007-65.376-31.007s30.513 11.018 47.045-6.144c16.532-17.162 65.376-31.007 65.376-31.007s-30.513 11.018-47.045-6.144c-16.532-17.162-65.376-31.007-65.376-31.007s30.513 11.018 47.045-6.144Z"
        fill="currentColor"
      />
    </Icon>
  );
};