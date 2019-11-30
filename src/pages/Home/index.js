import React, { useState, useEffect } from 'react';
import { Form, Check, Input } from '@rocketseat/unform';
import { MdDirectionsCar, MdMotorcycle, MdSend } from 'react-icons/md';
import { Row, Col } from 'react-grid-system';
import * as Yup from 'yup';
import ReactSelect from '~/components/ReactSelect';

import {
  Container,
  Content,
  Header,
  HeaderItem,
  Card,
  ClearFiltersButton,
  SeeOffersButton,
  VehicleList,
  Pagination,
} from './styles';

import { formatPrice, formatNumber } from '~/util/format';
import api from '~/services/api';

export default function Home() {
  const [loading, setLoading] = useState(false);
  const [vehicleSize, setVehicleSize] = useState('car');
  const [ratios] = useState([
    {
      id: 1,
      title: '50km',
    },
    {
      id: 2,
      title: '100km',
    },
    {
      id: 3,
      title: '250km',
    },
    {
      id: 4,
      title: '500km',
    },
  ]);
  const [brands, setBrands] = useState([]);
  const [models, setModels] = useState([]);
  const [years] = useState([
    {
      id: 1,
      title: '2016',
    },
    {
      id: 2,
      title: '2017',
    },
    {
      id: 3,
      title: '2018',
    },
    {
      id: 4,
      title: '2019',
    },
  ]);
  const [priceRanges] = useState([
    {
      id: 1,
      title: 'R$ 0,00 - R$ 10.000,00',
    },
    {
      id: 2,
      title: 'R$ 10.000,01 - R$ 30.000,00',
    },
    {
      id: 3,
      title: 'R$ 30.000,01 - R$ 100.000,00',
    },
  ]);
  const [versions, setVersions] = useState([]);
  const [brand, setBrand] = useState();
  const [model, setModel] = useState();
  const [, setVersion] = useState();
  const [vehicles, setVehicles] = useState([]);
  const [filteredVehicles, setFilteredVehicles] = useState([]);
  const [page, setPage] = useState(1);

  const schema = Yup.object().shape({
    brand: Yup.string().required('A marca é obrigatória.'),
    model: Yup.string().required('O modelo é obrigatório.'),
    version: Yup.string().required('A versão é obrigatória.'),
    year: Yup.string().required('O ano desejado é obrigatório.'),
    price: Yup.string().required('A faixa de preço é obrigatória.'),
  });

  useEffect(() => {
    async function loadBrands() {
      try {
        setLoading(true);

        const response = await api.get('Make');

        const { data } = response;

        const dataFormatted = data.map(brandItem => ({
          id: brandItem.ID,
          title: brandItem.Name,
        }));

        setBrands(dataFormatted);
      } catch (error) {
        console.tron.log(error.response.data);
      }

      setLoading(false);
    }

    async function loadVehicles() {
      try {
        setLoading(true);

        const response = await api.get('Vehicles', { params: { Page: page } });

        const { data } = response;

        const dataFormatted = data.map(vehicle => ({
          id: vehicle.ID,
          brand: vehicle.Make,
          model: vehicle.Model,
          version: vehicle.Version,
          image: vehicle.Image,
          km: vehicle.KM,
          kmFormatted: formatNumber(parseFloat(vehicle.KM)),
          price: vehicle.Price,
          priceFormatted: formatPrice(parseFloat(vehicle.Price)),
          yearModel: vehicle.YearModel,
          yearFab: vehicle.YearFab,
          color: vehicle.Color,
        }));

        setVehicles(dataFormatted);
        setFilteredVehicles(dataFormatted);
      } catch (error) {
        console.tron.log(error.response.data);
      }

      setLoading(false);
    }

    loadBrands();
    loadVehicles();

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    async function loadPage() {
      try {
        setLoading(true);

        const response = await api.get('Vehicles', { params: { Page: page } });

        const { data } = response;

        const dataFormatted = data.map(vehicle => ({
          id: vehicle.ID,
          brand: vehicle.Make,
          model: vehicle.Model,
          version: vehicle.Version,
          image: vehicle.Image,
          km: vehicle.KM,
          kmFormatted: formatNumber(parseFloat(vehicle.KM)),
          price: vehicle.Price,
          priceFormatted: formatPrice(parseFloat(vehicle.Price)),
          yearModel: vehicle.YearModel,
          yearFab: vehicle.YearFab,
          color: vehicle.Color,
        }));

        setVehicles([...vehicles, ...dataFormatted]);
        setFilteredVehicles([...vehicles, ...dataFormatted]);
      } catch (error) {
        console.tron.log(error);
      }

      setLoading(false);
    }

    loadPage();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [page]);

  useEffect(() => {
    async function loadModels() {
      try {
        setLoading(true);

        const response = await api.get('Model', {
          params: { MakeId: brand.id },
        });

        const { data } = response;

        const dataFormatted = data.map(item => ({
          id: item.ID,
          title: item.Name,
        }));

        setModels(dataFormatted);
      } catch (error) {
        console.tron.log(error.response.data);
      }

      setLoading(false);
    }

    if (brand) {
      loadModels();
    }
  }, [brand]);

  useEffect(() => {
    async function loadVersions() {
      try {
        setLoading(true);

        const response = await api.get('Version', {
          params: { ModelID: model.id },
        });

        const { data } = response;

        const dataFormatted = data.map(item => ({
          id: item.ID,
          title: item.Name,
        }));

        setVersions(dataFormatted);
      } catch (error) {
        console.tron.log(error.response.data);
      }

      setLoading(false);
    }

    if (model) {
      loadVersions();
    }
  }, [model]);

  function handleSetVehicleSize(size) {
    setVehicleSize(size);
  }

  function handleSubmit(data) {
    try {
      const brandFilter = brands.find(
        brandItem => brandItem.id === parseInt(data.brand, 10)
      );

      const modelFilter = models.find(
        modelItem => modelItem.id === parseInt(data.model, 10)
      );

      const versionFilter = versions.find(
        versionItem => versionItem.id === parseInt(data.version, 10)
      );

      const yearFilter = years.find(
        yearItem => yearItem.id === parseInt(data.year, 10)
      );

      const priceFilter = priceRanges.find(
        priceItem => priceItem.id === parseInt(data.price, 10)
      );

      const minPrice = parseFloat(
        priceFilter.title
          .split(' - ')[0]
          .replace('R$ ', '')
          .replace('.', '')
          .replace(',', '.')
      );

      const maxPrice =
        parseFloat(
          priceFilter.title
            .split(' - ')[1]
            .replace('R$ ', '')
            .replace('.', '')
            .replace(',', '.')
        ) || 999999999;

      const response = vehicles.filter(vehicle => {
        return (
          vehicle.brand === brandFilter.title &&
          vehicle.model === modelFilter.title &&
          vehicle.version === versionFilter.title &&
          vehicle.yearModel === parseInt(yearFilter.title, 10) &&
          parseFloat(vehicle.price.replace(',', '.')) >= minPrice &&
          parseFloat(vehicle.price.replace(',', '.')) <= maxPrice
        );
      });

      setFilteredVehicles(response);
    } catch (error) {
      console.tron.log(error);
    }
  }

  function handleClearFilters() {
    setFilteredVehicles(vehicles);
  }

  function loadMore() {
    setPage(page + 1);
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
          <Form
            schema={schema}
            onSubmit={handleSubmit}
            initialData={{
              where: 'São Paulo - SP',
              ratio: 1,
              year: 4,
              price: 1,
            }}
            loading
          >
            <Row className="checkbox-row">
              <Col>
                <Check name="news" label="Novos" className="checkbox" />
                <Check name="used" label="Usados" className="checkbox" />
              </Col>
            </Row>
            <Row>
              <Col sm={12} md={6}>
                <Row>
                  <Col sm={12} md={6}>
                    <Input
                      disabled={loading ? 1 : 0}
                      name="where"
                      label="Onde:"
                    />
                  </Col>
                  <Col sm={12} md={6}>
                    <ReactSelect
                      isDisabled={loading ? 1 : 0}
                      placeholder="Selecione um raio"
                      name="ratio"
                      label="Raio:"
                      options={ratios}
                    />
                  </Col>
                </Row>
              </Col>
              <Col sm={12} md={6}>
                <Row>
                  <Col sm={12} md={6}>
                    <ReactSelect
                      name="brand"
                      isDisabled={loading ? 1 : 0}
                      placeholder="Selecione uma marca"
                      onChange={setBrand}
                      label="Marca:"
                      options={brands}
                    />
                  </Col>
                  <Col sm={12} md={6}>
                    <ReactSelect
                      name="model"
                      isDisabled={loading ? 1 : 0}
                      onChange={setModel}
                      label="Modelo:"
                      placeholder="Selecione um modelo"
                      options={models}
                    />
                  </Col>
                </Row>
              </Col>
            </Row>
            <Row>
              <Col sm={12} md={6}>
                <Row>
                  <Col sm={12} md={6}>
                    <ReactSelect
                      name="year"
                      isDisabled={loading ? 1 : 0}
                      label="Ano desejado:"
                      placeholder="Ano desejado"
                      options={years}
                    />
                  </Col>
                  <Col sm={12} md={6}>
                    <ReactSelect
                      isDisabled={loading ? 1 : 0}
                      name="price"
                      placeholder="Faixa de preço"
                      label="Faixa de preço:"
                      options={priceRanges}
                    />
                  </Col>
                </Row>
              </Col>
              <Col sm={12} md={6}>
                <Row>
                  <Col sm={12}>
                    <ReactSelect
                      name="version"
                      isDisabled={loading ? 1 : 0}
                      onChange={setVersion}
                      label="Versão:"
                      placeholder="Selecione uma versão"
                      options={versions}
                    />
                  </Col>
                </Row>
              </Col>
            </Row>
            <div className="bottom-row">
              <a href="https://webmotors.com.br" target="__blank">
                ❯ Busca avançada
              </a>
              <div>
                <ClearFiltersButton
                  type="button"
                  onClick={() => handleClearFilters()}
                >
                  Limpar filtros
                </ClearFiltersButton>
                <SeeOffersButton disabled={loading ? 1 : 0} type="submit">
                  Ver ofertas
                </SeeOffersButton>
              </div>
            </div>
          </Form>
        </Card>
        <VehicleList>
          {filteredVehicles.map(vehicle => (
            <li key={vehicle.id}>
              <img src={vehicle.image} alt={vehicle.name} />
              <strong>
                {vehicle.model} - {vehicle.version}
              </strong>

              <div className="tags">
                <span>{vehicle.brand}</span>
                <span>{vehicle.kmFormatted} KM</span>
                <span>ano {vehicle.yearModel}</span>
              </div>

              <button type="button">
                <div>
                  <MdSend size={20} color="#fff" />{' '}
                </div>

                <span>{vehicle.priceFormatted}</span>
              </button>
            </li>
          ))}
        </VehicleList>
        <Pagination>
          <button
            type="button"
            disabled={loading ? 1 : 0}
            onClick={() => loadMore()}
          >
            Carregar mais
          </button>
        </Pagination>
      </Content>
    </Container>
  );
}
