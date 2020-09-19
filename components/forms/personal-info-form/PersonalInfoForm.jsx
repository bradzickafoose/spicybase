import { useForm } from 'react-hook-form';
import { axiosWithAuth } from 'utils/axiosWithAuth';
export default function PersonalInfoForm({ user }) {
  const { register, handleSubmit, errors } = useForm({ defaultValues: { ...user } });

  const onSubmit = async user => {
    axiosWithAuth()
      .put('/user/profile', user)
      .then(response => {
        setUser(response.data.user);
        setEditAccount(false);
      })
      .catch(error => console.log('PersonalInfoForm.js > onSubmit:', error.message));
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <div className="pt-8 mt-8 border-t border-gray-200">
        <div>
          <h3 className="text-lg font-medium leading-6 text-gray-900">Personal Information</h3>
          <p className="mt-1 text-sm leading-5 text-gray-500">
            Use a permanent address where you can receive mail.
          </p>
        </div>
        <div className="grid grid-cols-1 row-gap-6 col-gap-4 mt-6 sm:grid-cols-6">
          <div className="sm:col-span-3">
            <label
              htmlFor="first_name"
              className="block text-sm font-medium leading-5 text-gray-700"
            >
              First name
            </label>
            <div className="mt-1 rounded-md shadow-sm">
              <input
                name="firstName"
                id="first_name"
                ref={register}
                className="block w-full transition duration-150 ease-in-out form-input sm:text-sm sm:leading-5"
              />
            </div>
          </div>

          <div className="sm:col-span-3">
            <label
              htmlFor="last_name"
              className="block text-sm font-medium leading-5 text-gray-700"
            >
              Last name
            </label>
            <div className="mt-1 rounded-md shadow-sm">
              <input
                name="lastName"
                id="last_name"
                ref={register}
                className="block w-full transition duration-150 ease-in-out form-input sm:text-sm sm:leading-5"
              />
            </div>
          </div>

          <div className="sm:col-span-4">
            <label htmlFor="email" className="block text-sm font-medium leading-5 text-gray-700">
              Email address
            </label>
            <div className="mt-1 rounded-md shadow-sm">
              <input
                name="email"
                id="email"
                type="email"
                ref={register}
                className="block w-full transition duration-150 ease-in-out form-input sm:text-sm sm:leading-5"
              />
            </div>
          </div>

          <div className="sm:col-span-3">
            <label
              htmlFor="street_address"
              className="block text-sm font-medium leading-5 text-gray-700"
            >
              Street address
            </label>
            <div className="mt-1 rounded-md shadow-sm">
              <input
                name="addressStreet"
                id="street_address"
                placeholder="Ex: 123 Main Street"
                ref={register}
                className="block w-full transition duration-150 ease-in-out form-input sm:text-sm sm:leading-5"
              />
            </div>
          </div>

          <div className="sm:col-span-3">
            <label
              htmlFor="optional_address"
              className="block text-sm font-medium leading-5 text-gray-700"
            >
              Apt, suite (optional)
            </label>
            <div className="mt-1 rounded-md shadow-sm">
              <input
                name="addressOptional"
                id="optional_address"
                placeholder="Ex: Apt #1015"
                ref={register}
                className="block w-full transition duration-150 ease-in-out form-input sm:text-sm sm:leading-5"
              />
            </div>
          </div>

          <div className="sm:col-span-2">
            <label htmlFor="city" className="block text-sm font-medium leading-5 text-gray-700">
              City
            </label>
            <div className="mt-1 rounded-md shadow-sm">
              <input
                name="city"
                id="city"
                placeholder="Ex: Mayberry"
                ref={register}
                className="block w-full transition duration-150 ease-in-out form-input sm:text-sm sm:leading-5"
              />
            </div>
          </div>

          <div className="sm:col-span-2">
            <label htmlFor="state" className="block text-sm font-medium leading-5 text-gray-700">
              State
            </label>
            <div className="mt-1 rounded-md shadow-sm">
              <input
                name="state"
                id="state"
                placeholder="Ex: NC"
                ref={register}
                className="block w-full transition duration-150 ease-in-out form-input sm:text-sm sm:leading-5"
              />
            </div>
          </div>

          <div className="sm:col-span-2">
            <label htmlFor="zip" className="block text-sm font-medium leading-5 text-gray-700">
              ZIP code
            </label>
            <div className="mt-1 rounded-md shadow-sm">
              <input
                name="zip"
                id="zip"
                placeholder="Ex: 27030"
                ref={register}
                className="block w-full transition duration-150 ease-in-out form-input sm:text-sm sm:leading-5"
              />
            </div>
          </div>
        </div>
      </div>
      <div className="pt-5 mt-8 border-t border-gray-200">
        <div className="flex justify-end">
          <span className="inline-flex rounded-md shadow-sm">
            <button
              type="button"
              onClick={() => setEditAccount(false)}
              className="px-4 py-2 text-sm font-medium leading-5 text-gray-700 transition duration-150 ease-in-out border border-gray-300 rounded-full hover:text-gray-500 focus:outline-none focus:border-blue-300 focus:shadow-outline-blue active:bg-gray-50 active:text-gray-800"
            >
              Cancel
            </button>
          </span>
          <span className="inline-flex ml-3 rounded-md shadow-sm">
            <button
              type="submit"
              className="inline-flex justify-center px-4 py-2 text-sm font-medium leading-5 text-white transition duration-150 ease-in-out bg-green-600 border border-transparent rounded-full hover:bg-green-500 focus:outline-none focus:border-green-700 focus:shadow-outline-green active:bg-green-700"
            >
              Save changes
            </button>
          </span>
        </div>
      </div>
    </form>
  );
}
