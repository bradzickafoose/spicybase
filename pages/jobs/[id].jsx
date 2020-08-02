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

export async function getServerSideProps (context) {
  const { data } = await axios.get('http://localhost:3000/api/jobs');

  const job = data.find(j => j.id === Number(context.params.id));

  return { props: {
    job
  } };
}

export default Job;


