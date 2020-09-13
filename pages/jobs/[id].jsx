import { Layout } from 'components';

export default function JobPage({ job }) {
  let { title, location } = job;

  return (
    <Layout title={title}>
      <div className="mx-auto max-w-7xl sm:px-6 lg:px-8">
        <div className="px-4 py-8 sm:px-0">
          <div className="overflow-hidden bg-white shadow sm:rounded-md">{location}</div>
        </div>
      </div>
    </Layout>
  );
}
