import styled from 'styled-components';
import colors from '~/styles/colors';

export const CustomLabel = styled.label`
  display: flex;

  font-style: normal;
  font-weight: bold;
  font-size: 14px;
  line-height: 16px;
  color: ${colors.grey5};
  text-align: left;
  margin-bottom: 8px;
`;
