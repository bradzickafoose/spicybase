import Link from 'next/link';
import { useEffect } from 'react';
import { useRouter } from 'next/router';
import { useForm } from 'react-hook-form';
import { axiosWithAuth } from 'utils/axiosWithAuth';

export default function LoginForm() {
  const { register, handleSubmit, errors } = useForm();

  let router = useRouter();

  const onSubmit = async user => {
    axiosWithAuth()
      .post('/login', user)
      .then(response => {
        localStorage.setItem('token', response.data.accessToken);
        router.push('/dashboard');
      })
      .catch(error => console.error('LoginForm.js > onSubmit:', error.message));
  };

  useEffect(() => {
    router.prefetch('/dashboard');
  }, []);

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <input type="hidden" name="remember" value="true" />
      <div className="rounded-md shadow-sm">
        <div>
          <input
            name="email"
            placeholder="Email address"
            aria-label="Email address"
            type="email"
            ref={register({
              required: 'Email is required.',
              pattern: {
                value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i,
                message: 'Enter a valid email.',
              },
            })}
            required
            className="relative block w-full px-3 py-2 text-gray-900 placeholder-gray-500 border border-gray-300 rounded-none appearance-none bg-gray-50 rounded-t-md focus:outline-none focus:shadow-outline-blue focus:border-blue-300 focus:z-10 sm:text-sm sm:leading-5"
          />
        </div>
        <div className="-mt-px">
          <input
            name="password"
            aria-label="Password"
            placeholder="Password"
            autoCapitalize="none"
            spellCheck="false"
            type="password"
            ref={register({ required: 'Password is required.', minLength: 8 })}
            required
            className="relative block w-full px-3 py-2 text-gray-900 placeholder-gray-500 border border-gray-300 rounded-none appearance-none bg-gray-50 rounded-b-md focus:outline-none focus:shadow-outline-blue focus:border-blue-300 focus:z-10 sm:text-sm sm:leading-5"
          />
        </div>
      </div>

      <div className="flex items-center justify-between mt-6">
        <div className="flex items-center">
          <input
            id="remember_me"
            type="checkbox"
            className="w-4 h-4 text-green-600 transition duration-150 ease-in-out form-checkbox"
          />
          <label htmlFor="remember_me" className="block ml-2 text-sm leading-5 text-gray-900">
            Remember me
          </label>
        </div>

        <div className="text-sm leading-5">
          <Link href="#">
            <a className="font-medium text-blue-600 transition duration-150 ease-in-out hover:text-blue-500 focus:outline-none focus:underline">
              Forgot your password?
            </a>
          </Link>
        </div>
      </div>

      <div className="mt-6">
        <button
          type="submit"
          className="relative flex justify-center w-full px-4 py-2 text-sm font-medium leading-5 text-white transition duration-150 ease-in-out bg-green-600 border border-transparent rounded-md group hover:bg-green-500 focus:outline-none focus:border-green-700 focus:shadow-outline-red active:bg-green-700"
        >
          <span className="absolute inset-y-0 left-0 flex items-center pl-3">
            <svg
              className="w-5 h-5 text-green-500 transition duration-150 ease-in-out group-hover:text-green-400"
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
  );
}
