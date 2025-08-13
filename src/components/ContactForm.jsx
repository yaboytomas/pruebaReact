import {
  Box,
  Container,
  Heading,
  Text,
  FormControl,
  FormLabel,
  Input,
  Textarea,
  Button,
  VStack,
  HStack,
  useToast,
  FormErrorMessage,
  Icon,
  Flex,
  VisuallyHidden,
} from '@chakra-ui/react';
import { EmailIcon, PhoneIcon, InfoIcon } from '@chakra-ui/icons';
import { useState, useRef } from 'react';

export default function ContactForm() {
  const [formData, setFormData] = useState({
    nombre: '',
    email: '',
    mensaje: ''
  });
  
  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const toast = useToast();
  
  // Refs for focus management
  const nombreRef = useRef();
  const emailRef = useRef();
  const mensajeRef = useRef();
  const submitButtonRef = useRef();

  // Email validation function
  const validateEmail = (email) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

  // Real-time validation
  const validateField = (name, value) => {
    let newErrors = { ...errors };

    switch (name) {
      case 'nombre':
        if (!value.trim()) {
          newErrors.nombre = 'El nombre es obligatorio';
        } else if (value.trim().length < 2) {
          newErrors.nombre = 'El nombre debe tener al menos 2 caracteres';
        } else {
          delete newErrors.nombre;
        }
        break;
      
      case 'email':
        if (!value.trim()) {
          newErrors.email = 'El correo electrónico es obligatorio';
        } else if (!validateEmail(value)) {
          newErrors.email = 'Ingrese un correo electrónico válido';
        } else {
          delete newErrors.email;
        }
        break;
      
      case 'mensaje':
        if (!value.trim()) {
          newErrors.mensaje = 'El mensaje es obligatorio';
        } else if (value.trim().length < 10) {
          newErrors.mensaje = 'El mensaje debe tener al menos 10 caracteres';
        } else {
          delete newErrors.mensaje;
        }
        break;
      
      default:
        break;
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  // Handle input changes with real-time validation
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
    
    // Real-time validation
    validateField(name, value);
  };

  // Handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();
    
    // Validate all fields
    const isNombreValid = validateField('nombre', formData.nombre);
    const isEmailValid = validateField('email', formData.email);
    const isMensajeValid = validateField('mensaje', formData.mensaje);

    if (!isNombreValid || !isEmailValid || !isMensajeValid) {
      toast({
        title: 'Error de validación',
        description: 'Por favor, corrija los errores en el formulario',
        status: 'error',
        duration: 3000,
        isClosable: true,
      });
      // Focus on first error field
      if (!isNombreValid) nombreRef.current?.focus();
      else if (!isEmailValid) emailRef.current?.focus();
      else if (!isMensajeValid) mensajeRef.current?.focus();
      return;
    }

    setIsSubmitting(true);

    // Simulate form submission
    setTimeout(() => {
      setIsSubmitting(false);
      toast({
        title: 'Mensaje enviado',
        description: 'Gracias por contactarnos. Nos pondremos en contacto contigo pronto.',
        status: 'success',
        duration: 5000,
        isClosable: true,
      });
      
      // Reset form and focus on first field
      setFormData({
        nombre: '',
        email: '',
        mensaje: ''
      });
      setErrors({});
      nombreRef.current?.focus();
    }, 2000);
  };

  // Handle keyboard navigation
  const handleKeyDown = (e, nextField) => {
    if (e.key === 'Enter' && e.target.tagName !== 'TEXTAREA') {
      e.preventDefault();
      nextField?.current?.focus();
    }
  };

  return (
    <Box 
      bg="linear-gradient(135deg, #f8fafc 0%, #f1f5f9 50%, #e2e8f0 100%)"
      py={8}
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
        background: 'linear-gradient(135deg, rgba(0, 113, 169, 0.03) 0%, rgba(255, 192, 43, 0.02) 50%, rgba(0, 172, 172, 0.03) 100%)',
        pointerEvents: 'none',
        zIndex: 0,
      }}
    >
             <Container maxW="4xl" position="relative" zIndex={1}>
         <VStack spacing={8} textAlign="center">
          <Box>
                         <Heading 
               fontSize={{ base: '2xl', md: '3xl' }}
               color="#0071A9"
               mb={4}
               id="contact-form-heading"
             >
               Contáctanos
             </Heading>
            <Text 
              color="gray.600" 
              fontSize="lg"
              maxW="2xl"
            >
              ¿Tienes alguna consulta o necesitas información sobre nuestros servicios? 
              Completa el formulario y nos pondremos en contacto contigo.
            </Text>
          </Box>

                     <Box 
             bg="white" 
             p={8} 
             borderRadius="xl" 
             boxShadow="0 10px 15px rgba(0, 0, 0, 0.1), 0 4px 6px rgba(0, 0, 0, 0.05)"
             w="full"
             maxW="2xl"
             role="region"
             aria-labelledby="contact-form-heading"
             border="1px solid"
             borderColor="gray.100"
           >
            <form onSubmit={handleSubmit} aria-label="Formulario de contacto">
              <VStack spacing={6}>
                {/* Nombre Field */}
                <FormControl isInvalid={!!errors.nombre}>
                  <FormLabel htmlFor="nombre" fontWeight="semibold">
                    Nombre completo *
                  </FormLabel>
                  <Input
                    id="nombre"
                    name="nombre"
                    type="text"
                    value={formData.nombre}
                    onChange={handleInputChange}
                    onKeyDown={(e) => handleKeyDown(e, emailRef)}
                    placeholder="Ingresa tu nombre completo"
                    size="lg"
                    ref={nombreRef}
                    aria-required="true"
                    aria-describedby={errors.nombre ? 'nombre-error' : undefined}
                    borderColor={errors.nombre ? 'red.300' : 'gray.300'}
                                         _focus={{
                       borderColor: errors.nombre ? 'red.500' : '#0071A9',
                       boxShadow: errors.nombre ? '0 0 0 1px #E53E3E' : '0 0 0 1px #0071A9'
                     }}
                  />
                  <FormErrorMessage id="nombre-error">
                    {errors.nombre}
                  </FormErrorMessage>
                </FormControl>

                {/* Email Field */}
                <FormControl isInvalid={!!errors.email}>
                  <FormLabel htmlFor="email" fontWeight="semibold">
                    Correo electrónico *
                  </FormLabel>
                  <Input
                    id="email"
                    name="email"
                    type="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    onKeyDown={(e) => handleKeyDown(e, mensajeRef)}
                    placeholder="ejemplo@correo.com"
                    size="lg"
                    ref={emailRef}
                    aria-required="true"
                    aria-describedby={errors.email ? 'email-error' : undefined}
                    borderColor={errors.email ? 'red.300' : 'gray.300'}
                                         _focus={{
                       borderColor: errors.email ? 'red.500' : '#0071A9',
                       boxShadow: errors.email ? '0 0 0 1px #E53E3E' : '0 0 0 1px #0071A9'
                     }}
                  />
                  <FormErrorMessage id="email-error">
                    {errors.email}
                  </FormErrorMessage>
                </FormControl>

                {/* Mensaje Field */}
                <FormControl isInvalid={!!errors.mensaje}>
                  <FormLabel htmlFor="mensaje" fontWeight="semibold">
                    Mensaje *
                  </FormLabel>
                  <Textarea
                    id="mensaje"
                    name="mensaje"
                    value={formData.mensaje}
                    onChange={handleInputChange}
                    placeholder="Escribe tu mensaje aquí..."
                    size="lg"
                    rows={5}
                    resize="vertical"
                    ref={mensajeRef}
                    aria-required="true"
                    aria-describedby={errors.mensaje ? 'mensaje-error' : undefined}
                    borderColor={errors.mensaje ? 'red.300' : 'gray.300'}
                                         _focus={{
                       borderColor: errors.mensaje ? 'red.500' : '#0071A9',
                       boxShadow: errors.mensaje ? '0 0 0 1px #E53E3E' : '0 0 0 1px #0071A9'
                     }}
                  />
                  <FormErrorMessage id="mensaje-error">
                    {errors.mensaje}
                  </FormErrorMessage>
                </FormControl>

                {/* Submit Button */}
                                 <Button
                   type="submit"
                   bg="#FFC02B"
                   color="#0071A9"
                   size="lg"
                   w="full"
                   isLoading={isSubmitting}
                   loadingText="Enviando..."
                   leftIcon={<EmailIcon />}
                   ref={submitButtonRef}
                   _hover={{
                     transform: 'translateY(-2px)',
                     boxShadow: 'lg',
                     bg: '#e6ab26'
                   }}
                   transition="all 0.2s"
                   aria-describedby="submit-button-description"
                 >
                   Enviar Mensaje
                 </Button>
                <VisuallyHidden id="submit-button-description">
                  Botón para enviar el formulario de contacto
                </VisuallyHidden>
              </VStack>
            </form>
          </Box>

          {/* Contact Information */}
                     <Box 
             bg="linear-gradient(135deg, #0071A9 0%, #005a8a 50%, #004d7a 100%)"
             color="white"
             p={6} 
             borderRadius="lg"
             w="full"
             maxW="2xl"
             boxShadow="0 8px 16px rgba(0, 113, 169, 0.3)"
             border="1px solid"
             borderColor="rgba(255, 192, 43, 0.2)"
           >
             <VStack spacing={4}>
               <Heading size="md" color="#FFC02B">
                 Información de Contacto
               </Heading>
               <HStack spacing={8} justify="center" flexWrap="wrap">
                 <Flex align="center" color="white">
                   <Icon as={PhoneIcon} mr={2} />
                   <Text 
                     as="a" 
                     href="tel:+56452734200" 
                     fontSize="sm"
                     textDecoration="none"
                     _hover={{ 
                       textDecoration: 'underline',
                       color: '#FFC02B',
                       cursor: 'pointer'
                     }}
                     transition="all 0.2s"
                   >
                     (452) 734200
                   </Text>
                 </Flex>
                 <Flex align="center" color="white">
                   <Icon as={EmailIcon} mr={2} />
                   <Text 
                     as="a" 
                     href="mailto:oficinadepartes@municholchol.cl" 
                     fontSize="sm"
                     textDecoration="none"
                     _hover={{ 
                       textDecoration: 'underline',
                       color: '#FFC02B',
                       cursor: 'pointer'
                     }}
                     transition="all 0.2s"
                   >
                     oficinadepartes@municholchol.cl
                   </Text>
                 </Flex>
                 <Flex align="center" color="white">
                   <Icon as={InfoIcon} mr={2} />
                   <Text fontSize="sm">Lun-Vie: 8:00-17:00</Text>
                 </Flex>
               </HStack>
             </VStack>
           </Box>
        </VStack>
      </Container>
    </Box>
  );
}
