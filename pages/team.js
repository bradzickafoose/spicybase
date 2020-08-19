import Head from 'next/head'
import Link from 'next/link';
import { PageTitle } from 'components';
import { APP_NAME } from 'utils/constants'

function Team({ first_name, last_name }) {
  return (
    <>
      <Head>
        <title>Team - {APP_NAME}</title>
      </Head>
      <PageTitle title="Team" />
      <div className="mx-auto max-w-7xl sm:px-6 lg:px-8">
        <div className="px-4 py-8 sm:px-0">
          <ul className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
            <li className="col-span-1 bg-white rounded-lg shadow">
              <div className="flex items-center justify-between w-full p-6 space-x-6">
                <div className="flex-1 truncate">
                  <div className="flex items-center space-x-3">
                    <h3 className="text-sm font-medium leading-5 text-gray-900 truncate">
                      Jane Cooper
                    </h3>
                    <span className="flex-shrink-0 inline-block px-2 py-0.5 text-teal-800 text-xs leading-4 font-medium bg-teal-100 rounded-full">
                      Admin
                    </span>
                  </div>
                  <p className="mt-1 text-sm leading-5 text-gray-500 truncate">
                    Regional Paradigm Technician
                  </p>
                </div>
                <img
                  className="flex-shrink-0 w-10 h-10 bg-gray-300 rounded-full"
                  src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&amp;ixid=eyJhcHBfaWQiOjEyMDd9&amp;auto=format&amp;fit=facearea&amp;facepad=4&amp;w=256&amp;h=256&amp;q=60"
                  alt=""
                />
              </div>
              <div className="border-t border-gray-200">
                <div className="flex -mt-px">
                  <div className="flex flex-1 w-0 border-r border-gray-200">
                    <Link href="#">
                      <a className="relative inline-flex items-center justify-center flex-1 w-0 py-4 -mr-px text-sm font-medium leading-5 text-gray-700 transition duration-150 ease-in-out border border-transparent rounded-bl-lg hover:text-gray-500 focus:outline-none focus:shadow-outline-blue focus:border-blue-300 focus:z-10">
                        <svg
                          className="w-5 h-5 text-gray-400"
                          viewBox="0 0 20 20"
                          fill="currentColor"
                        >
                          <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
                          <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
                        </svg>
                        <span className="ml-3">Message</span>
                      </a>
                    </Link>
                  </div>
                  <div className="flex flex-1 w-0 -ml-px">
                    <Link href="#">
                      <a className="relative inline-flex items-center justify-center flex-1 w-0 py-4 text-sm font-medium leading-5 text-gray-700 transition duration-150 ease-in-out border border-transparent rounded-br-lg hover:text-gray-500 focus:outline-none focus:shadow-outline-blue focus:border-blue-300 focus:z-10">
                        Invite to Job
                      </a>
                    </Link>
                  </div>
                </div>
              </div>
            </li>
          </ul>
        </div>
      </div>
    </>
  );
}

export default Team;
