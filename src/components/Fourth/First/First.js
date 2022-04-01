import { Notify } from 'notiflix';
import React, { useState } from 'react';
import { Button, Container, Form } from 'react-bootstrap';
import GoToTheFourth from '../GoToTheFourth';
import styles from './first.module.scss';

const initialState = { zv: 0, p: 0, pv: 0, ov: 0, x: 0 };

const First = () => {
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
    const { zv, p, pv, ov, x } = state;

    if (zv === 0 || x === 0) {
      Notify.failure(
        'Змінні виробночі витрати та обсяг виробництва мають бути додатними!'
      );
      return;
    }

    const nats = (p + pv + ov) / (x * zv);
    const res = zv + (zv * nats) / 100;
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
        <Form.Group className="mb-3" controlId="zv">
          <Form.Label>
            Введіть змінні виробночі витрати на одиницю(Зв)
          </Form.Label>
          <Form.Control
            type="text"
            name="zv"
            onChange={onChange}
            value={state.zv}
          />
        </Form.Group>

        <Form.Group className="mb-3" controlId="p">
          <Form.Label>Введіть запланований прибуток(П)</Form.Label>
          <Form.Control
            type="text"
            name="p"
            onChange={onChange}
            value={state.p}
          />
        </Form.Group>

        <Form.Group className="mb-3" controlId="pv">
          <Form.Label>Введіть постійні витрати(Пв)</Form.Label>
          <Form.Control
            type="text"
            name="pv"
            onChange={onChange}
            value={state.pv}
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

export default First;
