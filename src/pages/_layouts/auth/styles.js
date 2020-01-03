import styled from 'styled-components';
import { darken } from 'polished';

export const Wrapper = styled.div`
  height: 100%;
  background: #ee4d64;
  display: flex;
  justify-content: center;
  align-items: center;
  overflow: auto;
`;

export const Content = styled.div`
  width: 100%;
  max-width: 380px;
  text-align: center;

  form {
    display: flex;
    flex-direction: column;
    padding: 30px;
    background: #fff;
    border-radius: 4px;

    img {
      width: 153px;
      margin: 30px auto;
    }

    label {
      margin: 10px 0;
      text-align: left;
      text-transform: uppercase;
      font-weight: bold;
      font-size: 14px;
      color: #444444;
    }

    input {
      height: 44px;
      padding: 0 15px;
      margin: 0 0 10px;
      border: 1px solid #999999;
      border-radius: 4px;
      color: #999999;
    }

    button {
      height: 44px;
      margin: 10px 0 0;
      background: #ee4d64;
      color: #fff;
      border: 0;
      border-radius: 4px;
      font-size: 16px;
      font-weight: bold;
      transition: background 0.2s;
      &:hover {
        background: ${darken(0.03, '#ee4d64')};
      }
    }
  }
`;
