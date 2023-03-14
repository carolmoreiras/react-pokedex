import { GlobalProvider } from './contexts/globalcontext';
import { Router } from "./routes/Router"
import { ChakraProvider } from '@chakra-ui/react';
import { theme } from "./theme/theme";


function App() {
  return (
    <ChakraProvider theme={theme}>
      <GlobalProvider>
        <Router />
      </GlobalProvider>
    </ChakraProvider>
  );
}

export default App;
