import axios from '../axios.ts';
import { registrationData } from './registration.ts';

async function entry(
  login: string,
  password: string,
): Promise<registrationData | undefined> {
  try {
    await axios
      .post(
        '/auth/entry',
        {
          userName: login,
          password: password,
        },
        {
          headers: {
            'Content-Type': 'application/json',
          },
        },
      )
      .then(response => response.data)
      .then(data => {
        return data;
      });
  } catch (e) {
    console.log(e);
    return;
  }
}

export default entry;
