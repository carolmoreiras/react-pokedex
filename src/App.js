import './App.css';
import { GlobalProvider } from './contexts/globalcontext';
import { GlobalStyle } from './GlobalStyle';
import { Router } from "./routes/Router"

function App() {
  return (
    <GlobalProvider>
      <GlobalStyle />
      <Router/>
    </GlobalProvider>
  );
}

export default App;
