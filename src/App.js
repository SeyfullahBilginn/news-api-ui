import { BrowserRouter } from 'react-router-dom';
import './App.css';
import Header from './components/Header';
import Router from './components/Router';
import { PaginationProvider } from './contexts/LayoutContext';

function App() {

  return (
    <PaginationProvider>
      <BrowserRouter>
        <Header />
        <div className="App">
          <Router />
        </div>
      </BrowserRouter>
    </PaginationProvider>
  );
}

export default App;
