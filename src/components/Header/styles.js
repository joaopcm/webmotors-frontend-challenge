import styled from 'styled-components';

export const Container = styled.div`
  padding: 0 30px;
`;

export const Content = styled.div`
  height: 64px;
  display: flex;
  justify-content: space-between;
  align-items: center;

  nav {
    display: flex;
    align-items: center;

    img {
      margin-right: 30px;
      padding-right: 30px;
    }
  }
`;
