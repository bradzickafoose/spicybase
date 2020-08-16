import React, { useState, useEffect } from 'react';
import { PageTitle, JobLink } from '../../components';
import { axiosWithAuth } from '../../utils';

function Jobs() {
  const [jobs, setJobs] = useState([]);

  useEffect(() => {
    async function getJobs() {
      const { data } = await axiosWithAuth().get('/jobs');
      setJobs(data);
    }

    getJobs();
  }, []);

  return (
    <>
      <PageTitle title="My Jobs" />
      <div className="mx-auto max-w-7xl sm:px-6 lg:px-8">
        <section className="px-4 py-8 sm:px-0">
          <div className="overflow-hidden bg-white shadow sm:rounded-md">
            <ul>
              {jobs.map((job) => (
                <li key={job.id}>
                  <JobLink {...job} />
                </li>
              ))}
            </ul>
          </div>
        </section>
      </div>
    </>
  );
}

export default Jobs;
