import './App.css'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Box } from '@chakra-ui/react';
import Home from './pages/home.jsx';

function App() {
  return (
    <Box 
      overflowX="hidden" 
      width="100vw" 
      minHeight="100vh"
      margin={0}
      padding={0}
      position="relative">
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
        </Routes>
      </Router>
    </Box>
  )
}

export default App
