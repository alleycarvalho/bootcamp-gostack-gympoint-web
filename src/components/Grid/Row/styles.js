import styled from 'styled-components';

export const CustomRow = styled.div`
  display: flex;

  > div {
    & + div {
      margin-left: 15px;
    }
  }
`;
