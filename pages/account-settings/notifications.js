import { Breadcrumbs, ContentPlaceholder, PageTitle, Layout } from 'components';

export default function NotificationsPage() {
  return (
    <Layout title="Notifications" pageTitle={false}>
      <PageTitle title="Notifications">
        <Breadcrumbs title="Notifications"/>
      </PageTitle>
      <div className="mx-auto max-w-7xl sm:px-6 lg:px-8">
        <ContentPlaceholder />
      </div>
    </Layout>
  );
}
