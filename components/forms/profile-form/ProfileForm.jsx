import { useContext, useRef } from 'react';
import { useForm } from 'react-hook-form';
import { axiosWithAuth } from 'utils/axiosWithAuth';
import { UserContext } from 'providers/UserProvider';

export default function ProfileForm({ user, setEditAccount }) {
  const { register, handleSubmit, errors } = useForm({ defaultValues: { ...user } });
  const { setUser } = useContext(UserContext);
  const profileImageRef = useRef();

  const convertProfileImageToBase64 = (file) => {
    return new Promise((resolve, reject) => {
      const reader = new FileReader();
      reader.readAsDataURL(file)
      reader.onload = () => resolve(reader.result);
      reader.onerror = (error) => reject(error);
    })
  }

  const onSubmit = async user => {
    const files = profileImageRef.current.files;

    if (!!files.length) {
      user.profileImage = await convertProfileImageToBase64(files[0]);
    }

    axiosWithAuth()
      .put('/user/profile', user)
      .then(response => {
        setUser(response.data.user);
        setEditAccount(false);
      })
      .catch(error => console.log('ProfileForm.js > onSubmit:', error.message));
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <div className="mt-6">
        <div>
          <div>
            <h3 className="text-lg font-medium leading-6 text-gray-900">Profile</h3>
            <p className="mt-1 text-sm leading-5 text-gray-500">
              This information will be displayed publicly so be careful what you share.
            </p>
          </div>
          <div className="grid grid-cols-1 row-gap-6 col-gap-4 mt-6 sm:grid-cols-6">
            <div className="sm:col-span-4">
              <label
                htmlFor="username"
                className="block text-sm font-medium leading-5 text-gray-700"
              >
                Username
              </label>
              <div className="flex mt-1 rounded-md shadow-sm">
                <span className="inline-flex items-center px-3 text-gray-500 bg-transparent border border-r-0 border-gray-300 rounded-l-md sm:text-sm">
                  utiliteams.com/
                </span>
                <input
                  name="username"
                  id="username"
                  ref={register}
                  className="flex-1 block w-full min-w-0 transition duration-150 ease-in-out rounded-none form-input rounded-r-md sm:text-sm sm:leading-5"
                />
              </div>
            </div>

            <div className="sm:col-span-6">
              <label htmlFor="about" className="block text-sm font-medium leading-5 text-gray-700">
                About
              </label>
              <div className="mt-1 rounded-md shadow-sm">
                <textarea
                  name="bio"
                  id="about"
                  rows="3"
                  ref={register}
                  className="block w-full transition duration-150 ease-in-out form-textarea sm:text-sm sm:leading-5"
                />
              </div>
              <p className="mt-2 text-sm text-gray-500">Write a few sentences about yourself.</p>
            </div>

            <div className="sm:col-span-6">
              <label htmlFor="photo" className="block text-sm font-medium leading-5 text-gray-700">
                Photo
              </label>
              <div className="flex items-center mt-2">
                <span className="w-12 h-12 overflow-hidden bg-gray-100 rounded-full">
                  <svg
                    className="w-full h-full text-gray-300"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M24 20.993V24H0v-2.996A14.977 14.977 0 0112.004 15c4.904 0 9.26 2.354 11.996 5.993zM16.002 8.999a4 4 0 11-8 0 4 4 0 018 0z" />
                  </svg>
                </span>
                <span className="ml-5 rounded-md shadow-sm">
                  <input name="profileImage" type="file" ref={profileImageRef} className="px-3 py-2 text-sm font-medium leading-4 text-gray-700 transition duration-150 ease-in-out bg-white border border-gray-300 rounded-md hover:text-gray-500 focus:outline-none focus:border-blue-300 focus:shadow-outline-blue active:bg-gray-50 active:text-gray-800"/>
                </span>
              </div>
            </div>
          </div>
        </div>
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
        <div className="pt-8 mt-8 border-t border-gray-200">
          <div>
            <h3 className="text-lg font-medium leading-6 text-gray-900">Notifications</h3>
            <p className="mt-1 text-sm leading-5 text-gray-500">
              We'll always let you know about important changes, but you pick what else you want to
              hear about.
            </p>
          </div>
          <div className="mt-6">
            <fieldset>
              <legend className="text-base font-medium text-gray-900">By Email</legend>
              <div className="mt-4">
                <div className="relative flex items-start">
                  <div className="flex items-center h-5">
                    <input
                      id="comments"
                      type="checkbox"
                      className="w-4 h-4 text-green-600 transition duration-150 ease-in-out form-checkbox"
                    />
                  </div>
                  <div className="ml-3 text-sm leading-5">
                    <label htmlFor="comments" className="font-medium text-gray-700">
                      Comments
                    </label>
                    <p className="text-gray-500">
                      Get notified when someones posts a comment on a posting.
                    </p>
                  </div>
                </div>
                <div className="mt-4">
                  <div className="relative flex items-start">
                    <div className="flex items-center h-5">
                      <input
                        id="candidates"
                        type="checkbox"
                        className="w-4 h-4 text-green-600 transition duration-150 ease-in-out form-checkbox"
                      />
                    </div>
                    <div className="ml-3 text-sm leading-5">
                      <label htmlFor="candidates" className="font-medium text-gray-700">
                        Candidates
                      </label>
                      <p className="text-gray-500">
                        Get notified when a candidate applies for a job.
                      </p>
                    </div>
                  </div>
                </div>
                <div className="mt-4">
                  <div className="relative flex items-start">
                    <div className="flex items-center h-5">
                      <input
                        id="offers"
                        type="checkbox"
                        className="w-4 h-4 text-green-600 transition duration-150 ease-in-out form-checkbox"
                      />
                    </div>
                    <div className="ml-3 text-sm leading-5">
                      <label htmlFor="offers" className="font-medium text-gray-700">
                        Offers
                      </label>
                      <p className="text-gray-500">
                        Get notified when a candidate accepts or rejects an offer.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </fieldset>
            <fieldset className="mt-6">
              <legend className="text-base font-medium text-gray-900">Push Notifications</legend>
              <p className="text-sm leading-5 text-gray-500">
                These are delivered via SMS to your mobile phone.
              </p>
              <div className="mt-4">
                <div className="flex items-center">
                  <input
                    id="push_everything"
                    name="push_notifications"
                    type="radio"
                    className="w-4 h-4 text-green-600 transition duration-150 ease-in-out form-radio"
                  />
                  <label htmlFor="push_everything" className="ml-3">
                    <span className="block text-sm font-medium leading-5 text-gray-700">
                      Everything
                    </span>
                  </label>
                </div>
                <div className="flex items-center mt-4">
                  <input
                    id="push_email"
                    name="push_notifications"
                    type="radio"
                    className="w-4 h-4 text-green-600 transition duration-150 ease-in-out form-radio"
                  />
                  <label htmlFor="push_email" className="ml-3">
                    <span className="block text-sm font-medium leading-5 text-gray-700">
                      Same as email
                    </span>
                  </label>
                </div>
                <div className="flex items-center mt-4">
                  <input
                    id="push_nothing"
                    name="push_notifications"
                    type="radio"
                    className="w-4 h-4 text-green-600 transition duration-150 ease-in-out form-radio"
                  />
                  <label htmlFor="push_nothing" className="ml-3">
                    <span className="block text-sm font-medium leading-5 text-gray-700">
                      No push notifications
                    </span>
                  </label>
                </div>
              </div>
            </fieldset>
          </div>
        </div>
      </div>
      <div className="pt-5 mt-8 border-t border-gray-200">
        <div className="flex justify-end">
          <span className="inline-flex rounded-md shadow-sm">
            <button
              type="button"
              onClick={()=> setEditAccount(false)}
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
