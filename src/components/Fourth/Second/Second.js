import { Notify } from 'notiflix';
import React, { useState } from 'react';
import { Button, Container, Form } from 'react-bootstrap';
import GoToTheFourth from '../GoToTheFourth';
import styles from './second.module.scss';

const initialState = { p: 0, ov: 0, sv: 0, x: 0 };

const Second = () => {
  const [state, setState] = useState(initialState);
  const [n, setN] = useState(0);
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
    const { p, ov, sv, x } = state;

    if (sv === 0 || x === 0) {
      Notify.failure(
        'Виробнича собівартість одиниці продукції та обсяг виробництва мають бути додатними!'
      );
      return;
    }

    const nats = (p + ov) / (x * sv);
    const res = sv + (sv * nats) / 100;
    Notify.success(`Результат обчислень: ${res}`);
    setN(nats);
    setResult(res);
  };

  const clean = () => {
    setState(initialState);
    setN(0);
    setResult(0);
  };

  return (
    <Container className={styles.container}>
      <GoToTheFourth />

      <Form onSubmit={onSubmit}>
        <Form.Group className="mb-3" controlId="p">
          <Form.Label>Введіть запланований прибуток(П)</Form.Label>
          <Form.Control
            type="text"
            name="p"
            onChange={onChange}
            value={state.p}
          />
        </Form.Group>

        <Form.Group className="mb-3" controlId="ov">
          <Form.Label>Введіть операційні витрати(Ов)</Form.Label>
          <Form.Control
            type="text"
            name="ov"
            onChange={onChange}
            value={state.ov}
          />
        </Form.Group>

        <Form.Group className="mb-3" controlId="sv">
          <Form.Label>
            Введіть виробничу собівартість одиниці продукції(Св)
          </Form.Label>
          <Form.Control
            type="text"
            name="sv"
            onChange={onChange}
            value={state.sv}
          />
        </Form.Group>

        <Form.Group className="mb-3" controlId="x">
          <Form.Label>Введіть обсяг виробництва(x)</Form.Label>
          <Form.Control
            type="text"
            name="x"
            onChange={onChange}
            value={state.x}
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

      <h1 className={styles.result}>Націнка: {n}</h1>

      <h1 className={styles.result}>Ціна за одиницю продукції: {result}</h1>
    </Container>
  );
};

export default Second;
