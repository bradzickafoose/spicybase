import React from 'react';
import { PageTitle, JobForm } from '../components';

function PostJob() {
  return (
    <>
      <PageTitle title="Create a job" />
      <div className="mx-auto max-w-7xl sm:px-6 lg:px-8">
        <JobForm />
      </div>
    </>
  );
}

export default PostJob;
