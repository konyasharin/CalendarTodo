import './App.css';
import Container from './components/Container/Container.tsx';
import { Route, Routes } from 'react-router-dom';
import MainPage from './pages/MainPage.tsx';
import TodoPage from './pages/TodoPage.tsx';
import RegistrationPage from './pages/RegistrationPage.tsx';
import Header from './components/Header/Header.tsx';

function App() {
  return (
    <Container>
      <Header />
      <Routes>
        <Route path={'/'} element={<MainPage />} />
        <Route path={`todos/:id`} element={<TodoPage />} />
        <Route path={'/registration'} element={<RegistrationPage />} />
      </Routes>
    </Container>
  );
}

export default App;
