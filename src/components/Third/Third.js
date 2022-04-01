import GoHome from 'components/GoHome/GoHome';
import { Notify } from 'notiflix';
import React, { useState } from 'react';
import { Button, Container, Form } from 'react-bootstrap';
import styles from './third.module.scss';

const initialState = { p1: 0, p2: 0, c1: 0, c2: 0 };

const Third = () => {
  const [state, setState] = useState(initialState);
  const [result, setResult] = useState(0);

  const onChange = e => {
    const { name, value } = e.target;
    if (value < 0 || isNaN(value)) {
      Notify.failure(`Значення має бути невід'ємним числом!`);
      return;
    }

    setState(prev => ({ ...prev, [name]: Number(value) }));
  };

  const onSubmit = e => {
    e.preventDefault();
    const { p1, p2, c1, c2 } = state;

    if (p1 === 0 || c1 === 0) {
      Notify.failure('Початкові значення мають бути додатними!');
      return;
    }

    if (p2 === p1 || c1 === c2) {
      Notify.failure('Початкове та кінцеве значення повинно відрізнятися!');
      return;
    }

    const res = (p2 - p1) / p1 / ((c2 - c1) / c1);

    Notify.success(`Результат обчислень: ${res}`);
    setResult(res);
  };
  const clean = () => {
    setState(initialState);
    setResult(0);
  };

  return (
    <Container className={styles.container}>
      <GoHome />

      <Form onSubmit={onSubmit}>
        <Form.Group className="mb-3" controlId="p1">
          <Form.Label>Введіть початковий обсяг пропозиції</Form.Label>
          <Form.Control
            type="text"
            name="p1"
            onChange={onChange}
            value={state.p1}
          />
        </Form.Group>
        <Form.Group className="mb-3" controlId="p2">
          <Form.Label>Введіть кінцевий обсяг пропозиції</Form.Label>
          <Form.Control
            type="text"
            name="p2"
            onChange={onChange}
            value={state.p2}
          />
        </Form.Group>

        <Form.Group className="mb-3" controlId="c1">
          <Form.Label>Введіть початкову ціну</Form.Label>
          <Form.Control
            type="text"
            name="c1"
            onChange={onChange}
            value={state.c1}
          />
        </Form.Group>
        <Form.Group className="mb-3" controlId="c2">
          <Form.Label>Введіть кінцеву ціну</Form.Label>
          <Form.Control
            type="text"
            name="c2"
            onChange={onChange}
            value={state.c2}
          />
        </Form.Group>

        <div className={styles.wrapper}>
          <Button variant="primary" type="submit">
            Підрахувати
          </Button>

          <Button variant="secondary" type="button" onClick={clean}>
            Скинути дані
          </Button>
        </div>
      </Form>

      <h1 className={styles.result}>
        Коефіцієнт цінової еластичності: {result}
      </h1>
    </Container>
  );
};

export default Third;
