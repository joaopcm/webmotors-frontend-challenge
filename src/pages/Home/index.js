import React, { useState } from 'react';
import { Form, Check, Input } from '@rocketseat/unform';
import { MdDirectionsCar, MdMotorcycle } from 'react-icons/md';
import { Row, Col } from 'react-grid-system';
import ReactSelect from '~/components/ReactSelect';

import { Container, Content, Header, HeaderItem, Card } from './styles';

export default function Home() {
  const [vehicleSize, setVehicleSize] = useState('car');
  const [ratios] = useState([
    {
      id: 50,
      title: '50km',
    },
    {
      id: 100,
      title: '100km',
    },
    {
      id: 250,
      title: '250km',
    },
    {
      id: 500,
      title: '500km',
    },
  ]);
  const [brands] = useState([]);
  const [models] = useState([]);
  const [years] = useState([]);
  const [priceRanges] = useState([]);
  const [versions] = useState([]);

  function handleSetVehicleSize(size) {
    setVehicleSize(size);
  }

  return (
    <Container>
      <Content>
        <Header>
          <ul>
            <HeaderItem active={vehicleSize === 'car'}>
              <button type="button" onClick={() => handleSetVehicleSize('car')}>
                <div>
                  <MdDirectionsCar size={32} />
                </div>
                <div className="label">
                  <span>comprar</span>
                  <h1>Carros</h1>
                </div>
              </button>
            </HeaderItem>
            <HeaderItem active={vehicleSize === 'motorcycle'}>
              <button
                type="button"
                onClick={() => handleSetVehicleSize('motorcycle')}
              >
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
        <Card>
          <Form>
            <Row className="checkbox-row">
              <Col>
                <Check name="news" label="Novos" className="checkbox" />
                <Check name="used" label="Usados" className="checkbox" />
              </Col>
            </Row>
            <Row>
              <Col>
                <Row>
                  <Col>
                    <Input name="where" label="Onde:" />
                  </Col>
                  <Col>
                    <ReactSelect
                      placeholder="Raio: 200km"
                      name="ratio"
                      label="Raio:"
                      options={ratios}
                    />
                  </Col>
                </Row>
              </Col>
              <Col>
                <Row>
                  <Col>
                    <ReactSelect name="brand" label="Marca:" options={brands} />
                  </Col>
                  <Col>
                    <ReactSelect
                      name="model"
                      label="Modelo:"
                      options={models}
                    />
                  </Col>
                </Row>
              </Col>
            </Row>
            <Row>
              <Col>
                <Row>
                  <Col>
                    <ReactSelect
                      name="year"
                      label="Ano desejado:"
                      options={years}
                    />
                  </Col>
                  <Col>
                    <ReactSelect
                      name="price"
                      label="Faixa de preço:"
                      options={priceRanges}
                    />
                  </Col>
                </Row>
              </Col>
              <Col>
                <Row>
                  <Col>
                    <ReactSelect
                      name="version"
                      label="Versão:"
                      options={versions}
                    />
                  </Col>
                </Row>
              </Col>
            </Row>
          </Form>
        </Card>
      </Content>
    </Container>
  );
}
