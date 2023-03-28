import React, { useState } from 'react';
import { toast } from 'react-toastify';
import { isEmail } from 'validator';
import { useDispatch } from 'react-redux';

import * as actions from '../../store/modules/auth/actions';

import { Container, Title } from '../../styles/GlobalStyles';
import { Form } from './styled';

export default function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const dispatch = useDispatch();

  const toastConfig = {
    theme: 'dark',
    closeButton: false,
    pauseOnHover: false,
  };

  const authUser = async () => {
    const user = { email, password };

    dispatch(actions.loginRequest(user));
  };

  const handleSubmit = (evt) => {
    evt.preventDefault();

    let formIsValid = true;

    if (!isEmail(email)) {
      formIsValid = false;
      toast.error('E-mail inválido!', toastConfig);
    }

    if (password.length < 6) {
      formIsValid = false;
      toast.error('Senha inválida!', toastConfig);
    }

    if (!formIsValid) return;
    authUser();
  };

  return (
    <Container>
      <Title textCenter>Login</Title>

      <Form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Digite seu E-mail"
          value={email}
          onChange={(evt) => setEmail(evt.target.value)}
        />

        <input
          type="password"
          placeholder="Digite sua Senha"
          value={password}
          onChange={(evt) => setPassword(evt.target.value)}
        />

        <button type="submit">Entrar</button>
      </Form>
    </Container>
  );
}
