import axios from '../axios.ts';

export type registrationData = {
  userName: string;
  token: string;
};

async function registration(
  login: string,
  password: string,
): Promise<registrationData | undefined> {
  try {
    await axios
      .post(
        'auth/registration',
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

export default registration;
