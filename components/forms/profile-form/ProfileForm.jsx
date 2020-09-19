import { useContext, useRef } from 'react';
import { useForm } from 'react-hook-form';
import { axiosWithAuth } from 'utils/axiosWithAuth';
import { UserContext } from 'providers/UserProvider';
import Avatar from 'components/common/avatar/Avatar';

export default function ProfileForm({ user, setEditAccount }) {
  const { register, handleSubmit, errors } = useForm({ defaultValues: { ...user } });
  const { setUser } = useContext(UserContext);
  const profileImageRef = useRef();

  const convertProfileImageToBase64 = file => {
    return new Promise((resolve, reject) => {
      const reader = new FileReader();
      reader.readAsDataURL(file);
      reader.onload = () => resolve(reader.result);
      reader.onerror = error => reject(error);
    });
  };

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
          <div className="grid grid-cols-1 row-gap-6 col-gap-4 mt-6 sm:grid-cols-6">
            <div className="sm:col-span-4">
              <label
                htmlFor="username"
                className="block text-sm font-medium leading-5 text-gray-700"
              >
                Username
              </label>
              <div className="relative mt-1 rounded-md shadow-sm">
                <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                  <span className="text-gray-400 sm:text-sm sm:leading-5">utiliteams.com/</span>
                </div>
                <input
                  name="username"
                  id="username"
                  ref={register}
                  className="block w-full pl-16 form-input sm:pl-28 sm:text-sm sm:leading-5"
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

            <div className="sm:col-span-4">
              <label
                htmlFor="current_location"
                className="block text-sm font-medium leading-5 text-gray-700"
              >
                Current Location
              </label>
              <div className="mt-1 rounded-md shadow-sm">
                <input
                  name="currentLocation"
                  id="current_location"
                  type="text"
                  ref={register}
                  className="block w-full transition duration-150 ease-in-out form-input sm:text-sm sm:leading-5"
                />
              </div>
            </div>

            <div className="sm:col-span-6">
              <label htmlFor="photo" className="block text-sm font-medium leading-5 text-gray-700">
                Photo
              </label>
              <div className="flex items-center mt-2">
                <Avatar src={user.profileImage} size="small" />
                <span className="ml-5">
                  <input
                    name="profileImage"
                    accept="image/jpeg, image/png"
                    type="file"
                    ref={profileImageRef}
                    className="px-3 py-2 text-sm font-medium leading-4 text-gray-700 hover:text-gray-500 active:text-gray-800"
                  />
                </span>
              </div>
            </div>
          </div>
        </div>
        <div className="pt-8 mt-8 border-t border-gray-200">
          <div>
            <h3 className="text-lg font-medium leading-6 text-gray-900">Job preferences</h3>
            <p className="mt-1 text-sm leading-5 text-gray-500">
              We use this information to match you with the right jobs and help you save time on
              your job applications. It'll only be shown to companies if you've expressed interest
              in being contacted. Your salary is private and will never be shown to companies.
            </p>
          </div>

          <div className="mt-6">
            <fieldset>
              <legend className="text-base font-medium text-gray-900">Job search status</legend>
              <div className="mt-4">
                <div className="relative flex items-start">
                  <div className="flex items-center h-5">
                    <input
                      name="availability"
                      id="status_active"
                      type="radio"
                      className="w-4 h-4 text-green-600 transition duration-150 ease-in-out form-radio"
                    />
                  </div>
                  <div className="ml-3 text-sm leading-5">
                    <label htmlFor="status_active" className="font-medium text-gray-700">
                      Actively looking right now
                    </label>
                    <p className="text-gray-500">
                      Maximum matches. We'll get you in front of employers ASAP and send you any new
                      jobs that match your interests.
                    </p>
                  </div>
                </div>
                <div className="mt-4">
                  <div className="relative flex items-start">
                    <div className="flex items-center h-5">
                      <input
                        name="availability"
                        id="status_open"
                        type="radio"
                        className="w-4 h-4 text-green-600 transition duration-150 ease-in-out form-radio"
                      />
                    </div>
                    <div className="ml-3 text-sm leading-5">
                      <label htmlFor="status_open" className="font-medium text-gray-700">
                        Open, but not actively looking
                      </label>
                      <p className="text-gray-500">
                        Fewer matches. Employers can find you and we'll be selective with the
                        matches we send.
                      </p>
                    </div>
                  </div>
                </div>
                <div className="mt-4">
                  <div className="relative flex items-start">
                    <div className="flex items-center h-5">
                      <input
                        name="availability"
                        id="status_inactive"
                        type="radio"
                        className="w-4 h-4 text-green-600 transition duration-150 ease-in-out form-radio"
                      />
                    </div>
                    <div className="ml-3 text-sm leading-5">
                      <label htmlFor="status_inactive" className="font-medium text-gray-700">
                        Not interested in jobs
                      </label>
                      <p className="text-gray-500">
                        No matches. Employers won't find you and we won't send you any matches.
                      </p>
                    </div>
                  </div>
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
