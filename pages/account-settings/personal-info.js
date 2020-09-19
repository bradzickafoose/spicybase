import { useContext } from 'react';
import { Breadcrumbs, Container, Layout, PageHeading, PersonalInfoForm } from 'components';
import { UserContext } from 'providers/UserProvider';

export default function PersonalInfoPage() {
  const { user } = useContext(UserContext);

  return (
    <Layout title="Personal info" pageTitle={false} footer={false}>
      <PageHeading title="Personal info">
        <Breadcrumbs title="Personal info" />
      </PageHeading>
      <Container>
        <PersonalInfoForm user={user} />
      </Container>
    </Layout>
  );
}
