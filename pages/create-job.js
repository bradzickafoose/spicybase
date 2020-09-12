import { Layout, Container, CreateJobForm } from 'components';
import { Category } from 'data/models';

export default function CreateJobPage({ categories }) {
  return (
    <Layout title="Create a job" footer={false}>
      <Container>
        <CreateJobForm categories={categories} />
      </Container>
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
