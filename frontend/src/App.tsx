import './App.css';
import Container from './components/Container/Container.tsx';
import { Route, Routes } from 'react-router-dom';
import Header from './components/Header/Header.tsx';
import MainPage from './pages/MainPage/MainPage.tsx';
import TodoPage from './pages/TodoPage/TodoPage.tsx';
import RegistrationPage from './pages/RegistrationPage/RegistrationPage.tsx';
import EntryPage from './pages/EntryPage/EntryPage.tsx';

function App() {
  return (
    <Container>
      <Header />
      <Routes>
        <Route path={'/'} element={<MainPage />} />
        <Route path={`todos/:id`} element={<TodoPage />} />
        <Route path={'/registration'} element={<RegistrationPage />} />
        <Route path={'/entry'} element={<EntryPage />} />
      </Routes>
    </Container>
  );
}

export default App;
