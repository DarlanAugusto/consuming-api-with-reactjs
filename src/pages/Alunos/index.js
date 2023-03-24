import React, { useEffect, useState } from 'react';
import { get } from 'lodash';
import { FaUserCircle, FaEdit, FaTrashAlt } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import axios from '../../services/axios';

import { Container } from '../../styles/GlobalStyles';
import {
  AlunoItem,
  AlunoItemDescription,
  AlunoItemHeader,
  AlunoList,
  ProfilePicture,
} from './styled';

export default function Alunos() {
  const [alunos, setAlunos] = useState([]);

  useEffect(() => {
    async function getData() {
      const response = await axios.get('/alunos/');
      setAlunos(response.data.alunos);
    }

    getData();
  }, []);

  return (
    <Container>
      <h1>Alunos</h1>
      <AlunoList>
        {alunos.map((aluno) => (
          <AlunoItem key={aluno.email}>
            <AlunoItemHeader>
              <div>
                <ProfilePicture>
                  {get(aluno, 'Photos[0].url', false) ? (
                    <img
                      src={aluno.Photos[0].url}
                      alt={`Foto do aluno ${aluno.name}`}
                      sizes={(36, 36)}
                    />
                  ) : (
                    <FaUserCircle size={36} opacity={0.5} />
                  )}
                </ProfilePicture>
                <span>
                  {aluno.name} {aluno.lastname}
                </span>
              </div>
              <div>
                <Link to={`/aluno/edit/${aluno.id}`}>
                  <FaEdit size={16} />
                </Link>
                <Link to={`/aluno/delete/${aluno.id}`}>
                  <FaTrashAlt size={16} />
                </Link>
              </div>
            </AlunoItemHeader>
            <AlunoItemDescription>
              <span>{aluno.email}</span>
            </AlunoItemDescription>
          </AlunoItem>
        ))}
      </AlunoList>
    </Container>
  );
}
