import './App.css';
import Container from './components/Container/Container.tsx';
import { Route, Routes } from 'react-router-dom';
import MainPage from './pages/MainPage.tsx';
import TodoPage from './pages/TodoPage.tsx';

function App() {
  return (
    <Container>
      <Routes>
        <Route path={'/'} element={<MainPage />} />
        <Route path={`todos/:id`} element={<TodoPage />} />
      </Routes>
    </Container>
  );
}

export default App;
