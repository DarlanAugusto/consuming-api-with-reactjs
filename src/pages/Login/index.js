import React from 'react';

import { useDispatch } from 'react-redux';
import { Title, Description } from './styled';
import { Container } from '../../styles/GlobalStyles';
import * as exampleActions from '../../store/modules/example/actions';

export default function Login() {
  const dispatch = useDispatch();

  const handleClick = (e) => {
    e.preventDefault();

    dispatch(exampleActions.buttonClickRequest());
  };

  return (
    <Container alignCenter>
      <Title>Login</Title>
      <Description>Lorem ipsum dolor sit amet.</Description>
      <button type="button" onClick={handleClick}>
        Enviar
      </button>
    </Container>
  );
}
