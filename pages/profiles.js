import { Container, PlaceholderSection, Layout } from 'components';
import requireUser from 'utils/requireUser';

export default function ProfilesPage() {
  return (
    <Layout footer={false}>
      <Container>
        <PlaceholderSection />
      </Container>
    </Layout>
  );
}

export const getServerSideProps = requireUser();
