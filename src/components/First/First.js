import GoHome from 'components/GoHome/GoHome';
import { Notify } from 'notiflix';
import React, { useState } from 'react';
import { Button, Container, Form } from 'react-bootstrap';
import styles from './first.module.scss';

const initialState = { b: 0, a: 0, h: 0 };

const First = () => {
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
    const { b, a, h } = state;
    const res = b + a + h * (b + a);
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
        <Form.Group className="mb-3" controlId="B">
          <Form.Label>Введіть витрати виробництва(В)</Form.Label>
          <Form.Control
            type="text"
            name="b"
            onChange={onChange}
            value={state.b}
            placeholder="B"
          />
        </Form.Group>
        <Form.Group className="mb-3" controlId="A">
          <Form.Label>Введіть адміністративні витрати(А)</Form.Label>
          <Form.Control
            type="text"
            name="a"
            onChange={onChange}
            value={state.a}
            placeholder="A"
          />
        </Form.Group>
        <Form.Group className="mb-3" controlId="H">
          <Form.Label>
            Введіть середню норму прибутку на даному ринку(Н)
          </Form.Label>
          <Form.Control
            type="text"
            name="h"
            onChange={onChange}
            value={state.h}
            placeholder="H"
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

      <h1 className={styles.result}>Ціна: {result}</h1>
    </Container>
  );
};

export default First;
