import { useState } from 'react';
import styles from '../RegistrationPage/RegistrationPage.module.css';
import Input from '../../components/Input/Input.tsx';
import Button from '../../components/Button/Button.tsx';
import { Link } from 'react-router-dom';
import entry from '../../api/entry.ts';

function EntryPage() {
  const [entryData, setEntryData] = useState({
    login: '',
    password: '',
  });

  return (
    <section className={styles.registration}>
      <h3 className={styles.title}>Вход</h3>
      <Input
        value={entryData.login}
        placeholder={'Логин'}
        onChange={value => {
          setEntryData({ ...entryData, login: value });
        }}
      />
      <Input
        value={entryData.password}
        placeholder={'Пароль'}
        onChange={value => {
          setEntryData({ ...entryData, password: value });
        }}
      />
      <Button
        className={styles.btn}
        onClick={() => entry(entryData.login, entryData.password)}
      >
        Авторизоваться
      </Button>
      <Link to={'/registration'} className={styles.link}>
        Нет аккаунта?
      </Link>
    </section>
  );
}

export default EntryPage;
