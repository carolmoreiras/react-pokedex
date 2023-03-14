import {  } from "./App.css";
import { GlobalProvider } from './contexts/globalcontext';
import { Router } from "./routes/Router"
import { ChakraProvider } from '@chakra-ui/react';


function App() {
  return (
    <ChakraProvider>
      <GlobalProvider>
        <Router />
      </GlobalProvider>
    </ChakraProvider>
  );
}

export default App;
