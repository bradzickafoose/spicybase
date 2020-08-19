import Head from 'next/head';
import { PageTitle, JobForm } from 'components';
import { Category } from 'data/models';
import { APP_NAME } from 'utils/constants';

function PostJob({ categories }) {
  return (
    <>
      <Head>
        <title>Create a job - {APP_NAME}</title>
      </Head>
      <PageTitle title="Create a new job" />
      <div className="mx-auto max-w-7xl sm:px-6 lg:px-8">
        <JobForm categories={categories} />
      </div>
    </>
  );
}

export async function getServerSideProps() {
  try {
    const categories = await Category.forge().fetchAll();

    return {
      props: { categories: categories.serialize() },
    };
  } catch (err) {
    console.log(err);
  }
}

export default PostJob;
