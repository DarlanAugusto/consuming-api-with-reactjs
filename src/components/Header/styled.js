import styled, { css } from 'styled-components';

import { primary, secondary } from '../../config/colors';

export const Nav = styled.div`
  color: #fff;
  background: ${primary};
  width: 100%;
  padding: 5px 10%;
  display: flex;
  justify-content: space-between;
  align-items: center;

  ${(props) =>
    props.secondary &&
    css`
      background: ${secondary};
    `} // secondary

  div {
    display: flex;
    justify-content: space-between;
    align-items: center;
    gap: 2rem;

    .links {
      gap: 1rem;
    }
  }

  a {
    color: #fff;
    display: flex;
    justify-content: center;
    gap: 0.3rem;
    align-items: center;
    font-weight: 700;
  }
`;
