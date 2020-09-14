import { useState, useContext } from 'react';
import { UserContext } from 'providers/UserProvider';
import { Container, Layout } from 'components';
import withAuth from 'utils/withAuth';
import Link from 'next/link';

function AccountSettingsPage() {
  const { user } = useContext(UserContext);

  return (
    <Layout title="Account" footer={false}>
      <Container>
        <span className="font-semibold">
          {user.firstName} {user.lastName},
        </span>
        <span className="pl-1">{user.email} •</span>
        <Link href="/profile">
          <a className="pl-1 text-green-500">Go to profile</a>
        </Link>

        <main>
          <div className="grid grid-cols-1 gap-5 mt-5 sm:grid-cols-3">
            <div className="overflow-hidden bg-white border-2 border-solid rounded-lg shadow-md border-gray-50">
              <div className="px-4 py-5 sm:p-6">
                <dl>
                  <dt className="text-lg font-semibold leading-6 text-gray-900 truncate sm:flex">
                    <Link href="account-settings/personal-info">
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
            <div className="overflow-hidden bg-white border-2 border-solid rounded-lg shadow-md border-gray-50">
              <div className="px-4 py-5 sm:p-6">
                <dl>
                  <dt className="text-lg font-semibold leading-6 text-gray-900 truncate sm:flex">
                    <Link href="account-settings/login-and-security">
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
            <div className="overflow-hidden bg-white border-2 border-solid rounded-lg shadow-md border-gray-50">
              <div className="px-4 py-5 sm:p-6">
                <dl>
                  <dt className="text-lg font-semibold leading-6 text-gray-900 truncate sm:flex">
                    <Link href="account-settings/payment-methods">
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
            <div className="overflow-hidden bg-white border-2 border-solid rounded-lg shadow-md border-gray-50">
              <div className="px-4 py-5 sm:p-6">
                <dl>
                  <dt className="text-lg font-semibold leading-6 text-gray-900 truncate sm:flex">
                    <Link href="account-settings/notifications">
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
                    Choose notification preferences and how you want to be contacted
                  </dd>
                </dl>
              </div>
            </div>
          </div>
        </main>
      </Container>
    </Layout>
  );
}

export default withAuth(AccountSettingsPage);
