import { Breadcrumbs, Container, Layout, PageHeading, PlaceholderSection } from 'components';

export default function NotificationsPage() {
  return (
    <Layout title="Notifications" pageTitle={false}>
      <PageHeading title="Notifications">
        <Breadcrumbs title="Notifications" />
      </PageHeading>
      <Container>
        <PlaceholderSection />
      </Container>
    </Layout>
  );
}
