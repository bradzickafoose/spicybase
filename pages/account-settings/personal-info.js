import { Breadcrumbs, ContentPlaceholder, PageTitle, Layout } from 'components';

export default function PersonalInfoPage() {
  return (
    <Layout title="Personal info" pageTitle={false}>
      <PageTitle title="Personal info">
        <Breadcrumbs title="Personal info" />
      </PageTitle>
      <div className="mx-auto max-w-7xl sm:px-6 lg:px-8">
        <ContentPlaceholder />
      </div>
    </Layout>
  );
}
