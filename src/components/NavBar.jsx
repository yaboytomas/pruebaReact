import {
  Box,
  Flex,
  HStack,
  Link,
  IconButton,
  Button,
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  MenuDivider,
  useDisclosure,
  Stack,
  Avatar,
} from '@chakra-ui/react';
import { HamburgerIcon, CloseIcon } from '@chakra-ui/icons';
import { Link as RouterLink, useLocation } from 'react-router-dom';

const Links = [
  { name: 'Inicio', path: '/' },
  { name: 'Municipio', path: '/municipio' },
  { name: 'Unidades Municipales', path: '/unidades-municipales' },
  { name: 'Contacto', path: '/contacto' },
  { name: 'Webmail', path: '/webmail' }
];

const NavLink = ({ children, to, isActive }) => (
  <Link
    as={RouterLink}
    to={to}
    px={2}
    py={1}
    rounded={'md'}
    color="white"
    bg={isActive ? '#FFC02B' : 'transparent'}
    fontWeight={isActive ? 'bold' : 'normal'}
    _hover={{
      textDecoration: 'none',
      bg: isActive ? '#FFC02B' : '#0071A9',
      color: isActive ? '#0071A9' : 'white'
    }}>
    {children}
  </Link>
);

export default function NavBar() {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const location = useLocation();

  return (
    <>
      <Box 
        bg="#00ACAC"
        px={4} 
        position="relative" 
        zIndex={10}
        borderBottom="1px solid"
        borderColor="#0071A9"
        borderRadius="3xl"
        mx={4}
        mt={2}
        boxShadow="sm"
        overflow="hidden">
        <Flex h={16} alignItems={'center'} justifyContent={'center'} position="relative">
          {/* Mobile Menu Button - Left */}
          <IconButton
            size={'md'}
            icon={isOpen ? <CloseIcon /> : <HamburgerIcon />}
            aria-label={'Open Menu'}
            display={{ md: 'none' }}
            onClick={isOpen ? onClose : onOpen}
            color="white"
            bg="transparent"
            _hover={{ bg: '#0071A9' }}
            position="absolute"
            left={0}
          />
          
          {/* Desktop Content - Centered */}
          <HStack spacing={8} alignItems={'center'} display={{ base: 'none', md: 'flex' }}>
            <Link 
              as={RouterLink} 
              to="/" 
              fontWeight="bold" 
              fontSize="lg" 
              color="white"
              _hover={{ 
                textDecoration: 'none',
                color: "#FFC02B"
              }}>
              Municipalidad Muncholol
            </Link>
            
            <HStack as={'nav'} spacing={6}>
              {Links.map((link) => (
                <NavLink 
                  key={link.name} 
                  to={link.path}
                  isActive={location.pathname === link.path}>
                  {link.name}
                </NavLink>
              ))}
            </HStack>
            
            <Menu>
              <MenuButton
                as={Button}
                rounded={'full'}
                variant={'link'}
                cursor={'pointer'}
                minW={0}>
                <Avatar
                  size={'sm'}
                  src={'/src/assets/logo.png'}
                />
              </MenuButton>
              <MenuList>
                <MenuItem>Mi Perfil</MenuItem>
                <MenuItem>Configuración</MenuItem>
                <MenuDivider />
                <MenuItem>Cerrar Sesión</MenuItem>
              </MenuList>
            </Menu>
          </HStack>

          {/* Mobile Content - Left aligned */}
          <HStack spacing={4} alignItems={'center'} display={{ base: 'flex', md: 'none' }}>
            <Link 
              as={RouterLink} 
              to="/" 
              fontWeight="bold" 
              fontSize="lg" 
              color="white"
              _hover={{ 
                textDecoration: 'none',
                color: "#FFC02B"
              }}>
              Municipalidad Muncholol
            </Link>
          </HStack>

          {/* Mobile Avatar - Right */}
          <Box display={{ base: 'block', md: 'none' }} position="absolute" right={0}>
            <Menu>
              <MenuButton
                as={Button}
                rounded={'full'}
                variant={'link'}
                cursor={'pointer'}
                minW={0}>
                <Avatar
                  size={'sm'}
                  src={'/src/assets/logo.png'}
                />
              </MenuButton>
              <MenuList>
                <MenuItem>Mi Perfil</MenuItem>
                <MenuItem>Configuración</MenuItem>
                <MenuDivider />
                <MenuItem>Cerrar Sesión</MenuItem>
              </MenuList>
            </Menu>
          </Box>
        </Flex>

        {isOpen ? (
          <Box pb={4} display={{ md: 'none' }}>
            <Stack as={'nav'} spacing={4}>
              {Links.map((link) => (
                <NavLink 
                  key={link.name} 
                  to={link.path}
                  isActive={location.pathname === link.path}>
                  {link.name}
                </NavLink>
              ))}
            </Stack>
          </Box>
        ) : null}
      </Box>
    </>
  );
}