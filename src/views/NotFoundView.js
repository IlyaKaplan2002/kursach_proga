import React from 'react';
import { Navigate } from 'react-router-dom';

const NotFoundView = () => {
  return <Navigate to="/" />;
};

export default NotFoundView;
