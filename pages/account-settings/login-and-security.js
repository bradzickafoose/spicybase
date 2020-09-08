import { Breadcrumbs, Container, PlaceholderSection, PageHeading, Layout } from 'components';

export default function LoginAndSecurityPage() {
  return (
    <Layout title="Login &amp; security" pageTitle={false}>
      <PageHeading title="Login &amp; security">
        <Breadcrumbs title="Login &amp; security"/>
      </PageHeading>
      <Container>
        <PlaceholderSection />
      </Container>
    </Layout>
  );
}
