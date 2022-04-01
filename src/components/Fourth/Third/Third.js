import { Notify } from 'notiflix';
import React, { useState } from 'react';
import { Button, Container, Form } from 'react-bootstrap';
import GoToTheFourth from '../GoToTheFourth';
import styles from './third.module.scss';

const initialState = { p: 0, zzv: 0, zpv: 0, x: 0 };

const Third = () => {
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
    const { p, zzv, zpv, x } = state;

    if (zzv === 0 || x === 0) {
      Notify.failure(
        'Загальні змінні витрати та обсяг виробництва мають бути додатними!'
      );
      return;
    }

    const nats = (p + zpv) / (x * zzv);
    const res = zzv + (zzv * nats) / 100;
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

        <Form.Group className="mb-3" controlId="zzv">
          <Form.Label>Введіть загальні змінні витрати(Ззв)</Form.Label>
          <Form.Control
            type="text"
            name="zzv"
            onChange={onChange}
            value={state.zzv}
          />
        </Form.Group>

        <Form.Group className="mb-3" controlId="zpv">
          <Form.Label>Введіть загальні постійні витрати(Зпв)</Form.Label>
          <Form.Control
            type="text"
            name="zpv"
            onChange={onChange}
            value={state.zpv}
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

export default Third;
