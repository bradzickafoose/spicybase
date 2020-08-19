import { useState } from 'react';
import Link from 'next/link';
import { PageTitle } from 'components';

function Settings() {
  const [first_name] = useState('Bob');
  const [last_name] = useState('Iger');
  const [email] = useState('admin@test.com');

  return (
    <div className="py-10">
      <PageTitle title="Account" />
      <div className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
        <span className="font-semibold">
          {first_name} {last_name},
        </span>
        <span className="pl-1">{email} •</span>
        <Link href="/me">
          <a className="pl-1 text-red-500">Go to profile</a>
        </Link>
      </div>
      <main>
        <div className="mx-auto max-w-7xl sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 gap-5 mt-5 sm:grid-cols-3">
            <div className="overflow-hidden bg-white rounded-lg shadow">
              <div className="px-4 py-5 sm:p-6">
                <dl>
                  <dt className="text-lg font-semibold leading-6 text-gray-900 truncate sm:flex">
                    <Link href="settings/personal-info">
                      <a>Personal info</a>
                    </Link>
                    <svg
                      className="flex-shrink-0 w-5 text-red-400"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                    >
                      <path
                        fillRule="evenodd"
                        d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
                        clipRule="evenodd"
                      />
                    </svg>
                  </dt>
                  <dd className="mt-1 text-gray-900 font-regular">
                    Provide personal details and how we can reach you
                  </dd>
                </dl>
              </div>
            </div>
            <div className="overflow-hidden bg-white rounded-lg shadow">
              <div className="px-4 py-5 sm:p-6">
                <dl>
                  <dt className="text-lg font-semibold leading-6 text-gray-900 truncate sm:flex">
                    <Link href="settings/login-and-security">
                      <a>Login &amp; security</a>
                    </Link>
                    <svg
                      className="flex-shrink-0 w-5 text-red-400"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                    >
                      <path
                        fillRule="evenodd"
                        d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
                        clipRule="evenodd"
                      />
                    </svg>
                  </dt>
                  <dd className="mt-1 text-gray-900 font-regular">
                    Update your password and secure your account
                  </dd>
                </dl>
              </div>
            </div>
            <div className="overflow-hidden bg-white rounded-lg shadow">
              <div className="px-4 py-5 sm:p-6">
                <dl>
                  <dt className="text-lg font-semibold leading-6 text-gray-900 truncate sm:flex">
                    <Link href="settings/payment-methods">
                      <a>Payments &amp; payouts</a>
                    </Link>
                    <svg
                      className="flex-shrink-0 w-5 text-red-400"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                    >
                      <path
                        fillRule="evenodd"
                        d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
                        clipRule="evenodd"
                      />
                    </svg>
                  </dt>
                  <dd className="mt-1 text-gray-900 font-regular">
                    Review payments, payouts, and taxes
                  </dd>
                </dl>
              </div>
            </div>
            <div className="overflow-hidden bg-white rounded-lg shadow">
              <div className="px-4 py-5 sm:p-6">
                <dl>
                  <dt className="text-lg font-semibold leading-6 text-gray-900 truncate sm:flex">
                    <Link href="settings/notifications">
                      <a>Notifications</a>
                    </Link>
                    <svg
                      className="flex-shrink-0 w-5 text-red-400"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                    >
                      <path
                        fillRule="evenodd"
                        d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
                        clipRule="evenodd"
                      />
                    </svg>
                  </dt>
                  <dd className="mt-1 text-gray-900 font-regular">
                    Choose notification preferences and how you want to be
                    contacted
                  </dd>
                </dl>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}

export default Settings;
