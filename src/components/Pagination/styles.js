import styled from 'styled-components';
import colors from '~/styles/colors';

export const Paginator = styled.ul`
  display: flex;
  align-items: center;
  justify-content: ${props =>
    props.align === 'center' ? 'center' : 'flex-start'};
`;

export const PagePrev = styled.li`
  padding: 4px 4px 1px;
  margin-left: -1px;
  color: ${props => (props.active ? colors.white : colors.primary)};
  background-color: ${props => (props.active ? colors.primary : colors.white)};
  border: 1px solid ${colors.grey1};
  cursor: pointer;

  &:hover {
    background-color: ${colors.primary};
    color: ${colors.white};
  }
`;

export const PageItem = styled.li`
  padding: 0.5rem 0.75rem;
  margin-left: -1px;
  color: ${props => (props.active ? colors.white : colors.primary)};
  background-color: ${props => (props.active ? colors.primary : colors.white)};
  border: 1px solid ${colors.grey1};
  cursor: pointer;

  &:hover {
    background-color: ${props =>
    props.active ? colors.primary : colors.second};
    border-color: ${props => (props.active ? colors.primary : colors.grey1)};
  }
`;

export const PageNext = styled.li`
  padding: 4px 4px 1px;
  margin-left: -1px;
  color: ${props => (props.active ? colors.white : colors.primary)};
  background-color: ${props => (props.active ? colors.primary : colors.white)};
  border: 1px solid ${colors.grey1};
  cursor: pointer;

  &:hover {
    background-color: ${colors.primary};
    color: ${colors.white};
  }
`;
