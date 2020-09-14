import { Breadcrumbs, Container, Layout, PageHeading, PlaceholderSection } from 'components';

export default function PersonalInfoPage() {
  return (
    <Layout title="Personal info" pageTitle={false}>
      <PageHeading title="Personal info">
        <Breadcrumbs title="Personal info" />
      </PageHeading>
      <Container>
        <PlaceholderSection />
      </Container>
    </Layout>
  );
}
