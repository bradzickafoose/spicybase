import { useEffect } from 'react';
import { useRouter } from 'next/router';
import { useForm } from 'react-hook-form';
import { axiosWithAuth } from 'utils/axiosWithAuth';
import moment from 'moment';

export default function RegistrationForm() {
  const { register, handleSubmit, errors } = useForm();

  let router = useRouter();

  const onSubmit = async user => {
    user.birthday = moment(user.birthday, 'YYYY-MM-DD').format('MM-DD-YYYY').toString();
    user.role = 'contractor';

    axiosWithAuth()
      .post('/register', user)
      .then(response => {
        router.push('/profile');
      })
      .catch(error => console.log('RegistrationForm.js > onSubmit:', error.message));
  };

  useEffect(() => {
    router.prefetch('/profile');
  }, []);

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <div className="rounded-md shadow-sm">
        <div>
          <input
            name="firstName"
            placeholder="First name"
            autoComplete="off"
            type="text"
            ref={register({ required: 'First name is required.' })}
            className="relative block w-full px-3 py-2 text-gray-700 placeholder-gray-600 border border-gray-300 rounded-none appearance-none bg-gray-50 rounded-t-md focus:outline-none focus:shadow-outline-blue focus:border-blue-300 focus:z-10 sm:text-sm sm:leading-5"
          />
        </div>
        <div className="-mt-px">
          <input
            name="lastName"
            placeholder="Last name"
            autoComplete="off"
            type="text"
            ref={register({ required: 'Last name is required.' })}
            className="relative block w-full px-3 py-2 text-gray-700 placeholder-gray-600 border border-gray-300 rounded-none appearance-none bg-gray-50 rounded-b-md focus:outline-none focus:shadow-outline-blue focus:border-blue-300 focus:z-10 sm:text-sm sm:leading-5"
          />
        </div>
      </div>
      {errors.firstName && (
        <div className="my-1 text-xs text-red-600">{errors.firstName.message}</div>
      )}
      {errors.lastName && (
        <div className="my-1 text-xs text-red-600">{errors.lastName.message}</div>
      )}
      {!!(errors.firstName || errors.lastName) || (
        <div className="my-1 text-xs text-gray-600">
          Make sure it matches the name on your government ID.
        </div>
      )}
      <div className="mt-4">
        <input
          name="birthday"
          autoComplete="off"
          type="date"
          ref={register({ required: 'Select your birth date to continue.' })}
          className="relative block w-full px-3 py-2 text-gray-700 placeholder-gray-600 border border-gray-300 rounded-md appearance-none bg-gray-50 focus:outline-none focus:shadow-outline-blue focus:border-blue-300 focus:z-10 sm:text-sm sm:leading-5"
        />
        {errors.birthday ? (
          <div className="my-1 text-xs text-red-600">{errors.birthday.message}</div>
        ) : (
          <div className="my-1 text-xs text-gray-600">
            To sign up, you need to be at least 18. Your birthday won't be shared with other people
            who use Utiliteams.
          </div>
        )}
      </div>
      <div className="mt-4">
        <input
          name="email"
          placeholder="Email address"
          aria-label="Email address"
          autoComplete="off"
          type="email"
          ref={register({
            required: 'Email is required.',
            pattern: {
              value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i,
              message: 'Enter a valid email.',
            },
          })}
          className="relative block w-full px-3 py-2 text-gray-700 placeholder-gray-600 border border-gray-300 rounded-md appearance-none bg-gray-50 focus:outline-none focus:shadow-outline-blue focus:border-blue-300 focus:z-10 sm:text-sm sm:leading-5"
        />
        {errors.email ? (
          <div className="my-1 text-xs text-red-600">{errors.email.message}</div>
        ) : (
          <div className="my-1 text-xs text-gray-600">
            We'll email you confirmations and receipts.
          </div>
        )}
      </div>
      <div className="mt-4">
        <input
          name="password"
          aria-label="Password"
          placeholder="Password"
          autoCapitalize="none"
          spellCheck="false"
          autoComplete="off"
          type="password"
          ref={register({ required: 'Password is required.', minLength: 8 })}
          className="relative block w-full px-3 py-2 text-gray-700 placeholder-gray-600 border border-gray-300 rounded-md appearance-none bg-gray-50 focus:outline-none focus:shadow-outline-blue focus:border-blue-300 focus:z-10 sm:text-sm sm:leading-5"
        />
        {errors.password && (
          <div className="my-1 text-xs text-red-600">{errors.password.message}</div>
        )}
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
          Continue
        </button>
      </div>
    </form>
  );
}