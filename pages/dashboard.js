import Head from 'next/head'
import {PageTitle} from 'components';
import {APP_NAME} from 'utils/constants';
import requireLogin from 'utils/requireLogin';

function Dashboard() {
	return (
		<>
			<Head>
				<title>Dashboard - {APP_NAME}</title>
			</Head>
			<PageTitle title="Dashboard" />
			<div className="mx-auto max-w-7xl sm:px-6 lg:px-8">
				{/* <!-- Replace with your content --> */}
				<section className="px-4 py-8 sm:px-0">
					<div className="border-4 border-gray-200 border-dashed rounded-lg h-96"></div>
				</section>
				{/* <!-- /End replace --> */}
			</div>
		</>
	);
}

export const getServerSideProps = requireLogin();

export default Dashboard;
