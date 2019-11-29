import React, { useState } from 'react';
import { MdDirectionsCar, MdMotorcycle } from 'react-icons/md';

import { Container, Content, Header, HeaderItem, Card } from './styles';

export default function Home() {
  const [size, setSize] = useState('car');

  function handleSetSize(size) {
    setSize(size);
  }

  return (
    <Container>
      <Content>
        <Header>
          <ul>
            <HeaderItem active={size === 'car'}>
              <button type="button" onClick={() => handleSetSize('car')}>
                <div>
                  <MdDirectionsCar size={32} />
                </div>
                <div className="label">
                  <span>comprar</span>
                  <h1>Carros</h1>
                </div>
              </button>
            </HeaderItem>
            <HeaderItem active={size === 'motorcycle'}>
              <button type="button" onClick={() => handleSetSize('motorcycle')}>
                <div>
                  <MdMotorcycle size={32} />
                </div>
                <div className="label">
                  <span>comprar</span>
                  <h1>Motos</h1>
                </div>
              </button>
            </HeaderItem>
          </ul>

          <a href="https://webmotors.com.br/vender" target="__blank">
            Vender meu carro
          </a>
        </Header>
        <Card>Card</Card>
      </Content>
    </Container>
  );
}
