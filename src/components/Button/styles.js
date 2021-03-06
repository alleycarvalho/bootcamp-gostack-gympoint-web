import styled from 'styled-components';
import { darken } from 'polished';
import colors from '~/styles/colors';

export const CustomButton = styled.button`
  height: 34px;
  background: ${props => props.color};
  border: 0;
  border-radius: 4px;
  color: ${colors.white};
  font-size: 14px;
  font-weight: bold;
  padding: 0 15px;
  text-transform: uppercase;
  transition: background 0.2s;

  &:hover {
    background: ${props => darken(0.05, props.color)};
  }

  display: flex;
  justify-content: center;
  align-items: center;

  svg {
    margin-right: 8px;
  }
`;
