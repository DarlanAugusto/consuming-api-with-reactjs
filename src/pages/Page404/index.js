import React from 'react';
import { toast } from 'react-toastify';
import { Container, Description, Title } from '../../styles/GlobalStyles';

export default function Page404() {
  toast.error('Página não encontrada!', {
    position: 'top-center',
    closeButton: false,
    pauseOnHover: false,
    draggableDirection: 'y',
    theme: 'dark',
    autoClose: 500,
    delay: false,
  });
  return (
    <Container alignCenter>
      <Title textCenter>Erro 404</Title>
      <Description textCenter>Página não encontrada!</Description>
    </Container>
  );
}
