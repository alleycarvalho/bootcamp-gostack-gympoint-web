import styled from 'styled-components';

export const Container = styled.div`
  background: #fff;
  padding: 0 30px;
  border-bottom: 1px solid #ddd;
`;

export const Content = styled.div`
  height: 64px;
  max-width: 1200px;
  margin: 0 auto;
  display: flex;
  justify-content: space-between;
  align-items: center;

  nav {
    display: flex;
    align-items: center;

    img {
      height: 25px;
      margin-top: 3px;
    }

    .separator {
      height: 30px;
      margin: 0 20px;
      border-right: 1px solid #eee;
    }

    a {
      font-size: 15px;
      font-weight: bold;
      color: #999999;
      text-transform: uppercase;

      & + a {
        margin-left: 20px;
      }

      &:hover {
        opacity: 0.7;
      }
    }

    .selected {
      color: #444444;
    }
  }
`;

export const Profile = styled.div`
  display: flex;
  flex-direction: column;
  text-align: right;

  strong {
    font-size: 14px;
    color: #666666;
    margin-bottom: 5px;
  }

  button {
    color: #de3b3b;
    border: 0;
    background: transparent;

    &:hover {
      opacity: 0.7;
    }
  }
`;
