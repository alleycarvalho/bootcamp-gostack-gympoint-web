import styled from 'styled-components';

export const CustomButtonLikeLink = styled.button`
  display: inline;
  margin: 0;
  padding: 0;
  background-color: transparent;
  border: none;
  color: ${props => props.color};
  text-decoration: none;
  cursor: pointer;
`;
