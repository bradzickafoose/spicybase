import Head from 'next/head';
import {useState, useEffect} from 'react';
import {PageTitle, JobLink} from 'components';
import {APP_NAME} from 'utils/constants';
import requireLogin from 'utils/requireLogin';
import {Job} from 'data/models';


function Jobs({jobs}) {

	return (
		<>
			<Head>
				<title>My Jobs - {APP_NAME}</title>
			</Head>
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

async function fetchJobs(decoded) {
	const jobs = await new Job()
		.where({created_by: decoded.id})
		.fetchAll({withRelated: 'job_categories'});

	const serialized = jobs.serialize({hidden: ['created_at', 'updated_at']});
	return {props: {jobs: serialized}};
}

export const getServerSideProps = requireLogin(fetchJobs);

export default Jobs;
