import Link from 'next/link';
import { Layout, LoginForm } from 'components';

export default function LoginPage() {
  return (
    <Layout header={false} footer={false} pageTitle={false}>
      <div className="flex items-center justify-center min-h-screen px-4 py-12 sm:px-6 lg:px-8">
        <div className="w-full max-w-md">
          <div>
            <h2 className="mt-6 text-3xl font-extrabold leading-9 text-center text-cool-gray-700">
              Log in to your account
            </h2>
          </div>
          <div className="p-6 mt-6 bg-white rounded-lg shadow-xl">
            <LoginForm />
          </div>
          <p className="mt-6 text-sm leading-5 text-center text-gray-600">
            Or
            <Link href="/register">
              <a className="pl-1 font-medium text-blue-600 transition duration-150 ease-in-out hover:text-blue-500 focus:outline-none focus:underline">
                create new account
              </a>
            </Link>
          </p>
        </div>
      </div>
    </Layout>
  );
}
