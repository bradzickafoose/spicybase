import { useEffect, useContext } from 'react';
import { useRouter } from 'next/router';
import { useForm } from 'react-hook-form';
import { axiosWithAuth } from 'utils/axiosWithAuth';
import { UserContext } from 'providers/UserProvider';
import moment from 'moment';

export default function RegistrationForm() {
  const { register, handleSubmit, errors } = useForm();
  const { setUser } = useContext(UserContext);

  let router = useRouter();

  const onSubmit = async user => {
    user.birthday = moment(user.birthday, 'YYYY-MM-DD').format('MM-DD-YYYY').toString();
    user.role = 'contractor';

    axiosWithAuth()
      .post('/register', user)
      .then(response => {
        setUser(response.data.user);
        localStorage.setItem('accessToken', response.data.accessToken);
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
            className="relative block w-full px-3 py-3 text-lg text-gray-700 placeholder-gray-600 border border-gray-300 rounded-none appearance-none bg-gray-50 rounded-t-md focus:outline-none focus:shadow-outline-blue focus:border-blue-300 focus:z-10 sm:text-sm sm:leading-5"
          />
        </div>
        <div className="-mt-px">
          <input
            name="lastName"
            placeholder="Last name"
            autoComplete="off"
            type="text"
            ref={register({ required: 'Last name is required.' })}
            className="relative block w-full px-3 py-3 text-lg text-gray-700 placeholder-gray-600 border border-gray-300 rounded-none appearance-none bg-gray-50 rounded-b-md focus:outline-none focus:shadow-outline-blue focus:border-blue-300 focus:z-10 sm:text-sm sm:leading-5"
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
          className="relative block w-full px-3 py-3 text-lg text-gray-700 placeholder-gray-600 border border-gray-300 rounded-md appearance-none bg-gray-50 focus:outline-none focus:shadow-outline-blue focus:border-blue-300 focus:z-10 sm:text-sm sm:leading-5"
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
          className="relative block w-full px-3 py-3 text-lg text-gray-700 placeholder-gray-600 border border-gray-300 rounded-md appearance-none bg-gray-50 focus:outline-none focus:shadow-outline-blue focus:border-blue-300 focus:z-10 sm:text-sm sm:leading-5"
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
          className="relative block w-full px-3 py-3 text-lg text-gray-700 placeholder-gray-600 border border-gray-300 rounded-md appearance-none bg-gray-50 focus:outline-none focus:shadow-outline-blue focus:border-blue-300 focus:z-10 sm:text-sm sm:leading-5"
        />
        {errors.password && (
          <div className="my-1 text-xs text-red-600">{errors.password.message}</div>
        )}
      </div>
      <div className="mt-6">
        <button
          type="submit"
          className="relative flex justify-center w-full px-4 py-3 text-lg font-semibold leading-5 text-white transition duration-150 ease-in-out bg-green-600 border border-transparent rounded-md group hover:bg-green-500 focus:outline-none focus:border-green-700 focus:shadow-outline-green active:bg-green-700"
        >
          Continue
        </button>
      </div>
    </form>
  );
}
