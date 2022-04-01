import GoHome from 'components/GoHome/GoHome';
import { Notify } from 'notiflix';
import React, { useState } from 'react';
import { Button, Container, Form } from 'react-bootstrap';
import styles from './second.module.scss';

const initialState = { q1: 0, q2: 0, p1: 0, p2: 0 };

const Second = () => {
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
    const { q1, q2, p1, p2 } = state;

    if (q1 === 0 || p1 === 0) {
      Notify.failure('Початкові значення мають бути додатними!');
      return;
    }

    if (p2 === p1 || q1 === q2) {
      Notify.failure('Початкове та кінцеве значення повинно відрізнятися!');
      return;
    }

    const res = (q2 - q1) / q1 / ((p2 - p1) / p1);

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
        <Form.Group className="mb-3" controlId="Q1">
          <Form.Label>
            Введіть минулий показник попиту(Q<sub>1</sub>)
          </Form.Label>
          <Form.Control
            type="text"
            name="q1"
            onChange={onChange}
            value={state.q1}
            placeholder="Минулий показник попиту"
          />
        </Form.Group>
        <Form.Group className="mb-3" controlId="Q2">
          <Form.Label>
            Введіть новий показник попиту(Q<sub>2</sub>)
          </Form.Label>
          <Form.Control
            type="text"
            name="q2"
            onChange={onChange}
            value={state.q2}
            placeholder="Новий показник попиту"
          />
        </Form.Group>
        <Form.Group className="mb-3" controlId="P1">
          <Form.Label>
            Введіть минулий показник ціни товару(P<sub>1</sub>)
          </Form.Label>
          <Form.Control
            type="text"
            name="p1"
            onChange={onChange}
            value={state.p1}
            placeholder="Минулий показник ціни товару"
          />
        </Form.Group>
        <Form.Group className="mb-3" controlId="P2">
          <Form.Label>
            Введіть новий показник ціни товару(P<sub>2</sub>)
          </Form.Label>
          <Form.Control
            type="text"
            name="p2"
            onChange={onChange}
            value={state.p2}
            placeholder="Новий показник ціни товару"
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
        Коефіцієнт еластичності попиту: {result}
      </h1>
    </Container>
  );
};

export default Second;
