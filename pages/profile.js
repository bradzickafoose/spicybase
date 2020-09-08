import { useState } from 'react';
import { Layout, PageHeading } from 'components';

export default function ProfilePage() {
  const [first_name] = useState('Bob');
  const [last_name] = useState('Iger');

  return (
    <Layout title={`${first_name}'s Profile`} pageTitle={false}>
      <PageHeading title={`${first_name} ${last_name}`} />
    </Layout>
  );
}
