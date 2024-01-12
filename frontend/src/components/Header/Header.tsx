import { Link } from 'react-router-dom';
import styles from './Header.module.css';

function Header() {
  return (
    <header className={styles.header}>
      <Link to={'/'}>Календарь</Link>
      <Link to={'/notifications'}>Уведомления</Link>
      <Link to={'/registration'}>Регистрация</Link>
      <Link to={'/profile'}>Профиль</Link>
    </header>
  );
}

export default Header;
