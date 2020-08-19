import Head from 'next/head'
import Link from 'next/link';
import { useState } from 'react';
import { useRouter } from 'next/router';
import { axiosWithAuth } from 'utils/axiosWithAuth';

function Login() {
  const [credentials, setCredentials] = useState({
    email: '',
    password: '',
  });

  let router = useRouter();

  const handleChange = (event) => {
    setCredentials({
      ...credentials,
      [event.target.name]: event.target.value,
    });
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    axiosWithAuth()
      .post('/login', credentials)
      .then((response) => {
        console.log(response)
        localStorage.setItem('token', response.data.token);
        router.push('/dashboard');
      })
      .catch((error) =>
        console.error('Login.js > handleSubmit:', error.message),
      );
  };

  return (
    <>
    <Head>Login</Head>
      <div className="flex items-center justify-center min-h-screen px-4 py-12 bg-gray-50 sm:px-6 lg:px-8">
        <div className="w-full max-w-md">
          <div>
            <h2 className="mt-6 text-3xl font-extrabold leading-9 text-center text-gray-900">
              Log in to your account
            </h2>
          </div>
          <form className="mt-8" onSubmit={handleSubmit}>
            <input type="hidden" name="remember" value="true" />
            <div className="rounded-md shadow-sm">
              <div>
                <input
                  onChange={handleChange}
                  value={credentials.email}
                  aria-label="Email address"
                  name="email"
                  type="email"
                  required
                  className="relative block w-full px-3 py-2 text-gray-900 placeholder-gray-500 border border-gray-300 rounded-none appearance-none rounded-t-md focus:outline-none focus:shadow-outline-blue focus:border-blue-300 focus:z-10 sm:text-sm sm:leading-5"
                  placeholder="Email"
                />
              </div>
              <div className="-mt-px">
                <input
                  onChange={handleChange}
                  value={credentials.password}
                  aria-label="Password"
                  name="password"
                  type="password"
                  required
                  className="relative block w-full px-3 py-2 text-gray-900 placeholder-gray-500 border border-gray-300 rounded-none appearance-none rounded-b-md focus:outline-none focus:shadow-outline-blue focus:border-blue-300 focus:z-10 sm:text-sm sm:leading-5"
                  placeholder="Password"
                />
              </div>
            </div>

            <div className="flex items-center justify-between mt-6">
              <div className="flex items-center">
                <input
                  id="remember_me"
                  type="checkbox"
                  className="w-4 h-4 text-red-600 transition duration-150 ease-in-out form-checkbox"
                />
                <label
                  htmlFor="remember_me"
                  className="block ml-2 text-sm leading-5 text-gray-900"
                >
                  Remember me
                </label>
              </div>

              <div className="text-sm leading-5">
                <Link href="#">
                  <a className="font-medium text-red-600 transition duration-150 ease-in-out hover:text-red-500 focus:outline-none focus:underline">
                    Forgot your password?
                  </a>
                </Link>
              </div>
            </div>

            <div className="mt-6">
              <button
                type="submit"
                className="relative flex justify-center w-full px-4 py-2 text-sm font-medium leading-5 text-white transition duration-150 ease-in-out bg-red-600 border border-transparent rounded-md group hover:bg-red-500 focus:outline-none focus:border-red-700 focus:shadow-outline-red active:bg-red-700"
              >
                <span className="absolute inset-y-0 left-0 flex items-center pl-3">
                  <svg
                    className="w-5 h-5 text-red-500 transition duration-150 ease-in-out group-hover:text-red-400"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path
                      fillRule="evenodd"
                      d="M5 9V7a5 5 0 0110 0v2a2 2 0 012 2v5a2 2 0 01-2 2H5a2 2 0 01-2-2v-5a2 2 0 012-2zm8-2v2H7V7a3 3 0 016 0z"
                      clipRule="evenodd"
                    />
                  </svg>
                </span>
                Log in
              </button>
            </div>
          </form>
          <p className="mt-6 text-sm leading-5 text-center text-gray-600">
            Or
            <Link href="/register">
              <a className="pl-1 font-medium text-red-600 transition duration-150 ease-in-out hover:text-red-500 focus:outline-none focus:underline">
                create new account
              </a>
            </Link>
          </p>
        </div>
      </div>
    </>
  );
}

export default Login;
