import { Layout, CreateJobForm } from 'components';
import { Category } from 'data/models';

export default function CreateJobPage({ categories }) {
  return (
    <Layout title="Create a job">
      <div className="mx-auto max-w-7xl sm:px-6 lg:px-8">
        <CreateJobForm categories={categories} />
      </div>
    </Layout>
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
