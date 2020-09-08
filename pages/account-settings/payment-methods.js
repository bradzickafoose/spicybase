import { Breadcrumbs, ContentPlaceholder, PageTitle, Layout } from 'components';

export default function PaymentsPage() {
  return (
    <Layout title="Payments &amp; payouts" pageTitle={false}>
      <PageTitle title="Payments &amp; payouts">
        <Breadcrumbs title="Payments &amp; payouts" />
      </PageTitle>
      <div className="mx-auto max-w-7xl sm:px-6 lg:px-8">
        <ContentPlaceholder />
      </div>
    </Layout>
  );
}
