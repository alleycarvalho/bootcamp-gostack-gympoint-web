import styled from 'styled-components';
import CurrencyInput from 'react-currency-input';
import colors from '~/styles/colors';

export const CustomInputCurrency = styled(CurrencyInput)`
  width: 100%;
  height: 40px;
  padding: 0 15px;
  margin-bottom: 20px;
  color: ${colors.grey3};
  background: rgba(255, 255, 255, 1);
  border: 1px solid ${colors.grey1};
  border-radius: 4px;
`;
