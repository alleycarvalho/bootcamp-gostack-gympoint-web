import styled from 'styled-components';
import colors from '~/styles/colors';

export const Container = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  align-items: center;

  svg {
    position: relative;
    left: 30px;
    color: ${colors.grey2};
  }
`;

export const Search = styled.input`
  background: rgba(255, 255, 255, 1);
  border: 1px solid ${colors.grey1};
  border-radius: 4px;
  height: 35px;
  padding: 0px 15px 0px 35px !important;
  color: ${colors.grey3};

  &::placeholder {
    color: ${colors.grey2};
  }
`;
