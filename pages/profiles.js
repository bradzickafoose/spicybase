import { Container, PlaceholderSection, Layout } from 'components';
import withAuth from 'utils/withAuth';

function ProfilesPage() {
  return (
    <Layout footer={false}>
      <Container>
        <PlaceholderSection />
      </Container>
    </Layout>
  );
}

export default withAuth(ProfilesPage);