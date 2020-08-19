import Head from 'next/head';
import { useState } from 'react';
import { PageTitle } from 'components';
import { APP_NAME } from 'utils/constants';

function Me() {
  const [first_name] = useState('Bob');
  const [last_name] = useState('Iger');

  return (
    <>
      <Head>
        <title>
          {first_name}'s Profile - {APP_NAME}
        </title>
      </Head>
      <PageTitle title={`${first_name} ${last_name}`} />
    </>
  );
}

export default Me;
