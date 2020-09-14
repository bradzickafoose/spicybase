import { Layout, Container, CreateJobForm } from 'components';

export default function CreateJobPage({ categories }) {
  return (
    <Layout title="Create a job" footer={false}>
      <Container>
        <CreateJobForm categories={categories} />
      </Container>
    </Layout>
  );
}
