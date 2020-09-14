import { Breadcrumbs, Container, Layout, PageHeading, PlaceholderSection } from 'components';

export default function PaymentsPage() {
  return (
    <Layout title="Payments &amp; payouts" pageTitle={false}>
      <PageHeading title="Payments &amp; payouts">
        <Breadcrumbs title="Payments &amp; payouts" />
      </PageHeading>
      <Container>
        <PlaceholderSection />
      </Container>
    </Layout>
  );
}
