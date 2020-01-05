import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { darken } from 'polished';

import colors from '~/styles/colors';

export const CustomButtonLink = styled(Link)`
  display: flex;
  justify-content: center;
  align-items: center;

  height: 34px;
  padding: 0 15px 0 5px;
  font-size: 14px;
  font-weight: bold;
  background: ${props => props.color};
  color: ${colors.white};
  border: 0;
  border-radius: 4px;
  text-transform: uppercase;
  transition: background 0.2s;

  &:hover {
    background: ${props => darken(0.05, props.color)};
  }

  span {
    display: flex;
    justify-content: center;
    align-items: center;
    margin-left: 5px;
  }
`;
