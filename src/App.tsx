import './App.css';
import Container from './components/Container/Container.tsx';
import { Route, Routes } from 'react-router-dom';
import MainPage from './pages/MainPage.tsx';

function App() {
  return (
    <Container>
      <Routes>
        <Route path={'/'} element={<MainPage />} />
      </Routes>
    </Container>
  );
}

export default App;
