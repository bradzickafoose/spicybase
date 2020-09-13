import { Layout, Container, JobLink } from 'components';

export default function JobsPage({ jobs }) {
  return (
    <Layout title="My Jobs" footer={false}>
      <Container>
        <section className="px-4 py-8 sm:px-0">
          <div className="overflow-hidden bg-white shadow sm:rounded-md">
            <ul>
              {jobs.map(job => (
                <li key={job.id}>
                  <JobLink {...job} />
                </li>
              ))}
            </ul>
          </div>
        </section>
      </Container>
    </Layout>
  );
}
