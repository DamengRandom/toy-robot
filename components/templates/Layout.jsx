import React from 'react';
// constants
import { queryHeading } from '../../constants';
// components
import QueryForm from '../organisms/QueryForm';

export default function Layout() {
  return (
    <div>
      <h5>{queryHeading}</h5>
      <QueryForm />
    </div>
  );
};
