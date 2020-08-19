import jwt from 'jsonwebtoken';
import { PageTitle } from 'components';
import { Job as JobModel } from 'data/models';

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

export async function getServerSideProps(context) {
  const token = context.req.session.token;
  const jwtSecret =
    process.env.JWT_SECRET ||
    'add a .env file to root of project with the JWT_SECRET variable.';

  const promise = new Promise((resolve, reject) => {
    return jwt.verify(token, jwtSecret, (err, decoded) => {
      if (err) {
        reject(err);
      } else {
        resolve(decoded);
      }
    });
  });

  const decoded = await promise;

  const job = await new JobModel()
    .where({ created_by: decoded.id, id: +context.params.id })
    .fetch();
  const serialized = job.serialize({ hidden: ['created_at', 'updated_at'] });
  console.log(serialized);
  return { props: { job: serialized } };
}

export default Job;
