import { useState } from 'react';
import Input from '../../components/Input/Input.tsx';
import styles from './RegistrationPage.module.css';
import Button from "../../components/Button/Button.tsx";
import {Link} from "react-router-dom";

function RegistrationPage() {
  const [registrationData, setRegistrationData] = useState({
    login: '',
    password: '',
    repeatPassword: '',
  });

  return (
    <section className={styles.registration}>
      <h3 className={styles.title}>Регистрация</h3>
      <Input
        value={registrationData.login}
        placeholder={'Логин'}
        onChange={value => {
          setRegistrationData({ ...registrationData, login: value });
        }}
      />
      <Input
        value={registrationData.password}
        placeholder={'Пароль'}
        onChange={value => {
          setRegistrationData({ ...registrationData, password: value });
        }}
      />
      <Input
        value={registrationData.repeatPassword}
        placeholder={'Повторите пароль'}
        onChange={value => {
          setRegistrationData({ ...registrationData, repeatPassword: value });
        }}
      />
      <Button className={styles.btn}>Зарегистрироваться</Button>
      <Link to={'/entry'} className={styles.link}>
        Уже есть аккаунт?
      </Link>
    </section>
  );
}

export default RegistrationPage;
