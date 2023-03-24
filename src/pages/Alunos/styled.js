import styled from 'styled-components';

export const AlunoItem = styled.div`
  background-color: rgba(0, 0, 0, 0.05);
  padding: 8px;
  border-radius: 10px;
  transition: all 0.3s;

  :hover {
    background-color: rgba(0, 0, 0, 0.1);
  }
`;

export const AlunoItemHeader = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;

  div {
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 8px;

    span {
      font-weight: bold;
    }
  }
`;

export const AlunoItemDescription = styled.div`
  opacity: 0.7;
  font-weight: 500;
  display: flex;
  padding-left: 44px;
`;

export const AlunoList = styled.div`
  margin-top: 20px;
  display: flex;
  flex-direction: column;
  gap: 16px;
`;
export const ProfilePicture = styled.div`
  img {
    width: 36px;
    height: 36px;
    border-radius: 50%;
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.3);
  }
`;
