import styled from 'styled-components';
import { primary } from '../../config/colors';

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  gap: 16px;
  justify-content: center;
  margin-top: 16px;
  flex: 1;

  label {
    display: flex;
    flex-direction: column;
    flex: 1;
  }

  input {
    height: 40px;
    font-size: 16px;
    padding-inline: 12px;
    border: 1px solid #ddd;
    border-radius: 8px;

    &:focus {
      border: 1px solid ${primary};
    }
  }

  button {
    margin: 0 auto;
  }
`;
