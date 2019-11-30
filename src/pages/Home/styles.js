import styled from 'styled-components';
import { darken } from 'polished';

import colors from '~/styles/colors';

export const Container = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 30px;
`;

export const Content = styled.div`
  max-width: 100%;
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
  box-shadow: 0 0 20px rgba(0, 0, 0, 0.1);
  background: ${colors.white};
  padding: 15px 30px;

  span {
    color: ${colors.primary};
  }

  label {
    color: ${colors.dark};
    text-transform: uppercase;
  }

  .checkbox-row {
    label {
      margin-right: 15px;
      margin-left: 5px;
    }

    margin-bottom: 20px;
  }

  input#where {
    padding: 0 10px;
  }

  input#where,
  select {
    margin-bottom: 20px;
    height: 38px;
    width: 100%;
    background: transparent;
    border: 1px solid ${colors.grey};
    border-radius: 4px;
  }

  .bottom-row {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-top: 30px;

    div {
      width: 40%;
      display: flex;
      justify-content: space-between;
      align-items: center;
    }

    a {
      font-weight: bold;
    }
  }
`;

export const ClearFiltersButton = styled.button`
  background: transparent;
  border: 0;
  color: ${colors.dark};
`;

export const SeeOffersButton = styled.button`
  height: 50px;
  background: ${colors.primary};
  color: ${colors.white};
  width: 70%;
  border: 0;
  border-radius: 4px;
  text-transform: uppercase;
  font-weight: bold;

  &:hover {
    background: ${darken(0.03, colors.primary)};
  }
`;

export const VehicleList = styled.ul`
  margin-top: 30px;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-gap: 20px;
  list-style: none;

  li {
    display: flex;
    flex-direction: column;
    background: ${colors.white};
    border-radius: 4px;
    padding: 20px;
    box-shadow: 0 0 20px rgba(0, 0, 0, 0.1);

    img {
      align-self: center;
      max-width: 100%;
    }

    > strong {
      font-size: 16px;
      line-height: 20px;
      color: ${colors.dark};
      margin-top: 5px;
    }

    div.tags {
      display: flex;
      margin: 10px 0 20px 0;

      span {
        font-size: 12px;
        margin-right: 5px;
        padding: 0 10px;
        background: ${colors.dark};
        color: ${colors.white};
        border-radius: 4px;
        display: inline;
      }
    }

    button {
      background: ${colors.primary};
      border: 0;
      border-radius: 4px;
      overflow: hidden;
      margin-top: auto;
      display: flex;
      align-items: center;

      &:hover {
        background: ${darken(0.03, colors.primary)};
      }

      div {
        display: flex;
        align-items: center;
        padding: 12px;
        background: rgba(0, 0, 0, 0.1);
      }

      span {
        color: ${colors.white};
        flex: 1;
        text-align: center;
        font-weight: bold;
      }
    }
  }
`;

export const Pagination = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 60px 0;

  button {
    background: ${colors.primary};
    color: ${colors.white};
    border: 0;
    padding: 15px 25px;
    border-radius: 4px;
    text-transform: uppercase;
    font-weight: bold;
  }
`;
