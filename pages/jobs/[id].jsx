import React from 'react';
import axios from 'axios';
import { PageTitle, JobDetail } from '../../components';

function Job({ job }) {
  return (
    <>
      <PageTitle title={job.title} />
      <JobDetail />
    </>
  )
}
export default Job;


