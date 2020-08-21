import { PageTitle } from 'components';
import { Job as JobModel } from 'data/models';
import requireLogin from 'utils/requireLogin';

function Job({ job }) {
  return (
    <>
      <PageTitle title={job.title} />
      <div className="mx-auto max-w-7xl sm:px-6 lg:px-8">
        <div className="px-4 py-8 sm:px-0">
          <div className="overflow-hidden bg-white shadow sm:rounded-md">
            {job.location}
          </div>
        </div>
      </div>
    </>
  );
}

async function fetchJob(decoded, ctx) {
  const job = await new JobModel()
    .where({ created_by: decoded.id, id: +ctx.params.id })
    .fetch();
  const serialized = job.serialize({ hidden: ['created_at', 'updated_at'] });
  return { props: { job: serialized } };
}

export const getServerSideProps = requireLogin(fetchJob);

export default Job;
