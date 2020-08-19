import Head from 'next/head';
import { useState } from 'react';
import { PageTitle } from 'components';

function Me() {
  const [first_name] = useState('Bob');
  const [last_name] = useState('Iger');

  return (
    <>
      <Head>
        <title>{first_name}'s Profile</title>
      </Head>
      <PageTitle title={`${first_name} ${last_name}`} />
    </>
  );
}

export default Me;
