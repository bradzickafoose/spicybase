import Head from 'next/head';
import { PageTitle, JobForm } from 'components';
import { Category } from 'data/models';

function PostJob({ categories }) {
  return (
    <>
      <Head>
        <title>Create a job</title>
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
