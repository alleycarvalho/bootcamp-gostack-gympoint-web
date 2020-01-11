import styled from 'styled-components';
import colors from '~/styles/colors';

export const CustomInput = styled.input.attrs({
  disabled: true,
})`
  width: 100%;
  height: 40px;
  padding: 0 15px;
  margin-bottom: 20px;
  color: ${colors.grey3};
  background: ${colors.disabled};
  border: 1px solid ${colors.grey1};
  border-radius: 4px;
`;
