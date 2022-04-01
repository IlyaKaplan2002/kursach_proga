import { Notify } from 'notiflix';
import React, { useState } from 'react';
import { Button, Container, Form } from 'react-bootstrap';
import GoToTheFourth from '../GoToTheFourth';
import styles from './fourth.module.scss';

const initialState = { p: 0, sp: 0, x: 0 };

const Fourth = () => {
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
    const { p, sp, x } = state;

    if (sp === 0 || x === 0) {
      Notify.failure(
        'Повна собівартість одиниці продукції та обсяг виробництва мають бути додатними!'
      );
      return;
    }

    const nats = p / (x * sp);
    const res = sp + (sp * nats) / 100;
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

        <Form.Group className="mb-3" controlId="sp">
          <Form.Label>
            Введіть повну собівартість одиниці продукції(Сп)
          </Form.Label>
          <Form.Control
            type="text"
            name="sp"
            onChange={onChange}
            value={state.sp}
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

export default Fourth;
