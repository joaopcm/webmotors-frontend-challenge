import styled from 'styled-components';

import colors from '~/styles/colors';

export const Container = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 30px;
`;

export const Content = styled.div`
  width: 933px;
  height: 312px;
`;

export const Header = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;

  ul {
    display: flex;
  }

  a {
    border: 2px solid ${colors.orange};
    border-radius: 4px;
    color: ${colors.orange};
    padding: 10px 30px;
    font-weight: bold;
  }
`;

export const HeaderItem = styled.li`
  cursor: pointer;
  padding: 0 15px 10px;
  border-bottom: 3px solid
    ${props => (props.active ? colors.primary : colors.background)};

  button {
    border: 0;
    background: transparent;
    display: flex;
    justify-content: space-between;
    align-items: center;
  }

  div:first-child {
    padding: 0 10px;

    svg {
      color: ${props => (props.active ? colors.primary : colors.darkGrey)};
    }
  }

  div.label {
    text-align: left;
  }

  span {
    color: ${colors.darkGrey};
  }

  span {
    text-transform: uppercase;
  }

  h1 {
    color: ${props => (props.active ? colors.primary : colors.darkGrey)};
    font-weight: lighter;
    text-transform: uppercase;
  }
`;

export const Card = styled.div`
  background: ${colors.white};
  padding: 15px 30px;
`;
