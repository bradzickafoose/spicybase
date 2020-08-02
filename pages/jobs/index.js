import React, { useState } from 'react';
import { PageTitle, JobLink } from '../../components';

function Jobs() {
  const [jobs, setJobs] = useState([
    {
      id: 1,
      title: 'Frontier Communications',
      category: 'IR Techs',
      location: 'Charlotte, NC',
    },
    {
      id: 2,
      title: 'Windstream',
      category: 'Fiber',
      location: 'Wappinger Falls, NY',
    },
    {
      id: 3,
      title: 'CenturyLink',
      category: 'Buried Service Wire',
      location: 'Orlando, FL',
    },
  ]);

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
