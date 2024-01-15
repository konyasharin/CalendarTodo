import { useParams } from 'react-router-dom';

function TodoPage() {
  const { id } = useParams();
  return <>{id}</>;
}

export default TodoPage;
