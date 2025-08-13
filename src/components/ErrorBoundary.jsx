// Enhanced error boundary component for better error handling
import React from 'react';
import { Box, Heading, Text, Button, VStack } from '@chakra-ui/react';

class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false, error: null, errorInfo: null };
  }

  static getDerivedStateFromError() {
    // Update state so the next render will show the fallback UI
    return { hasError: true };
  }

  componentDidCatch(error, errorInfo) {
    // Log error details
    console.error('Error caught by boundary:', error, errorInfo);
    this.setState({
      error: error,
      errorInfo: errorInfo
    });
  }

  handleReset = () => {
    this.setState({ hasError: false, error: null, errorInfo: null });
  };

  render() {
    if (this.state.hasError) {
      return (
        <Box
          display="flex"
          alignItems="center"
          justifyContent="center"
          minH="100vh"
          bg="gray.50"
          p={8}
        >
          <VStack spacing={6} textAlign="center" maxW="md">
            <Heading size="lg" color="red.500">
              ¡Oops! Algo salió mal
            </Heading>
            <Text color="gray.600">
              Ha ocurrido un error inesperado. Por favor, intenta recargar la página.
            </Text>
            <Button
              colorScheme="blue"
              onClick={this.handleReset}
              size="lg"
            >
              Intentar de nuevo
            </Button>
            {import.meta.env.DEV && (
              <Box
                mt={4}
                p={4}
                bg="red.50"
                borderRadius="md"
                border="1px solid"
                borderColor="red.200"
                textAlign="left"
                fontSize="sm"
                maxW="100%"
                overflow="auto"
              >
                <Text fontWeight="bold" color="red.700" mb={2}>
                  Error Details (Development Only):
                </Text>
                <Text color="red.600" whiteSpace="pre-wrap">
                  {this.state.error && this.state.error.toString()}
                </Text>
                <Text color="red.600" fontSize="xs" mt={2} whiteSpace="pre-wrap">
                  {this.state.errorInfo.componentStack}
                </Text>
              </Box>
            )}
          </VStack>
        </Box>
      );
    }

    return this.props.children;
  }
}

export default ErrorBoundary;
