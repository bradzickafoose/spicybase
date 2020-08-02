import React, { useState } from 'react';
import { PageTitle } from '../components';

function Me() {
  const [first_name] = useState('Bob');
  const [last_name] = useState('Iger');

  return (
    <>
      <PageTitle title={`${first_name} ${last_name}`} />
    </>
  );
}

export default Me;
