import styled from 'styled-components';

function getWidthGrid(value) {
  const width = value ? (value / 12) * 100 : null;
  const result = width ? `width: ${width}%;` : '';

  return result;
}

export const CustomColumn = styled.div`
  float: left;
  min-height: 1px;

  @media only screen and (max-width: 768px) {
    ${({ mobile }) => mobile && getWidthGrid(mobile)}
  }

  @media only screen and (min-width: 768px) {
    ${({ tablet }) => tablet && getWidthGrid(tablet)}
  }

  @media only screen and (min-width: 1000px) {
    ${({ desktop }) => desktop && getWidthGrid(desktop)}
  }
`;
