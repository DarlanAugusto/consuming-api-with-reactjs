import React, { useState } from 'react';
import { toast } from 'react-toastify';
import isEmail from 'validator/lib/isEmail';
import { get } from 'lodash';

import { Container, Title } from '../../styles/GlobalStyles';
import { Form } from './styled';
import axios from '../../services/axios';
import history from '../../services/history';

export default function Register() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const toastConfig = {
    theme: 'dark',
    closeButton: false,
    pauseOnFocusLoss: false,
  };

  const createUser = async () => {
    try {
      const user = { name, email, password };
      await axios.post('/users/store/', user);
      toast.success('Usuário cadastrado com sucesso!', toastConfig);
      history.push('/login');
      history.go(0);
    } catch (error) {
      const errors = get(error, 'response.data.errors', []);
      errors.map((err) => toast.error(err, toastConfig));
    }
  };

  const handleSubmit = (evt) => {
    evt.preventDefault();

    let formIsValid = true;

    if (name.length < 3 || name.length > 255) {
      formIsValid = false;
      toast.error('Nome precisa ter entre 3 e 255 caracteres', toastConfig);
    } // check name

    if (!isEmail(email)) {
      formIsValid = false;
      toast.error('Email inválido', toastConfig);
    } // check email

    if (password.length < 3 || password.length > 255) {
      formIsValid = false;
      toast.error('Senha precisa ter no mínimo 6 caracteres', toastConfig);
    } // check password

    if (!formIsValid) return;
    createUser();
  };

  return (
    <Container>
      <Title textCenter>Crie sua conta</Title>
      <Form onSubmit={handleSubmit}>
        <label htmlFor="name">
          Nome:
          <input
            type="text"
            value={name}
            onChange={(evt) => setName(evt.target.value)}
          />
        </label>

        <label htmlFor="email">
          E-mail:
          <input
            type="text"
            value={email}
            onChange={(evt) => setEmail(evt.target.value)}
          />
        </label>

        <label htmlFor="password">
          Senha:
          <input
            type="password"
            value={password}
            onChange={(evt) => setPassword(evt.target.value)}
          />
        </label>

        <button type="submit">Cadastrar</button>
      </Form>
    </Container>
  );
}
