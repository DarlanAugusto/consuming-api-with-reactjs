import React from 'react';
import { Switch } from 'react-router-dom';

import Register from '../pages/Register';
import Login from '../pages/Login';
import Fotos from '../pages/Fotos';
import Aluno from '../pages/Aluno';
import Alunos from '../pages/Alunos';
import Page404 from '../pages/Page404';
import PrivateRoute from './PrivateRoute';

export default function Routes() {
  return (
    <Switch>
      {/* autenticação */}
      <PrivateRoute exact path="/register" component={Register} />
      <PrivateRoute exact path="/login" component={Login} />

      {/* fotos */}
      <PrivateRoute exact path="/fotos/:id" component={Fotos} isClosed />

      {/* alunos */}
      <PrivateRoute exact path="/alunos" component={Alunos} />
      <PrivateRoute exact path="/aluno/" component={Aluno} isClosed />
      <PrivateRoute exact path="/aluno/:id" component={Aluno} />
      <PrivateRoute exact path="/aluno/edit/:id" component={Aluno} isClosed />

      {/* 404 */}
      <PrivateRoute path="*" component={Page404} />
    </Switch>
  );
}
