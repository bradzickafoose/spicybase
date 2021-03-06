import { useRouter } from 'next/router';
import { useForm } from 'react-hook-form';
import { axiosWithAuth } from 'utils';
import { Button } from 'components';

export default function CreateJobForm({ categories }) {
  const { register, errors, handleSubmit } = useForm();
  const router = useRouter();

  const onSubmit = data => {
    console.log(data);
    data.job_category_id = parseInt(data.job_category_id);

    axiosWithAuth()
      .post('/jobs', data)
      .then(res => {
        console.log(res.data);
        router.push('/dashboard');
      })
      .catch(err => console.log(err));
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <section className="px-4 py-5 mt-8 bg-white shadow sm:rounded-lg sm:p-6">
        <div className="md:grid md:grid-cols-3 md:gap-6">
          <div className="md:col-span-1">
            <h3 className="text-lg font-medium leading-6 text-gray-900">Title</h3>
          </div>
          <div className="mt-5 md:mt-0 md:col-span-2">
            <div className="grid grid-cols-3 gap-6">
              <div className="col-span-6 sm:col-span-4">
                <label
                  htmlFor="jobTitle"
                  className="block text-sm font-medium leading-5 text-gray-700"
                >
                  Enter the name of your job post
                </label>
                <input
                  name="title"
                  className="block w-full px-3 py-2 mt-1 transition duration-150 ease-in-out border border-gray-300 rounded-md shadow-sm form-input focus:outline-none focus:shadow-outline-blue focus:border-blue-300 sm:text-sm sm:leading-5"
                  ref={register({ required: true, maxLength: 255 })}
                />
                {errors.jobTitle && (
                  <p class="mt-1 text-red-500 text-xs">This field is required.</p>
                )}
              </div>
              <div className="col-span-6 sm:col-span-2">
                <label
                  htmlFor="jobCategory"
                  className="block text-sm font-medium leading-5 text-gray-700"
                >
                  Job Category
                </label>
                <select
                  name="job_category_id"
                  className="block w-full px-3 py-2 mt-1 transition duration-150 ease-in-out bg-white border border-gray-300 rounded-md shadow-sm form-select focus:outline-none focus:shadow-outline-blue focus:border-blue-300 sm:text-sm sm:leading-5"
                  ref={register}
                >
                  <option>Select a category</option>
                  {categories &&
                    categories.map(category => {
                      return (
                        <option key={category.id} value={category.id}>
                          {category.name}
                        </option>
                      );
                    })}
                </select>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="px-4 py-5 mt-8 bg-white shadow sm:rounded-lg sm:p-6">
        <div className="md:grid md:grid-cols-3 md:gap-6">
          <div className="md:col-span-1">
            <h3 className="text-lg font-medium leading-6 text-gray-900">Description</h3>
          </div>
          <div className="mt-5 md:mt-0 md:col-span-2">
            <div className="grid grid-cols-3 gap-6">
              <div className="col-span-6 sm:col-span-4">
                <label
                  htmlFor="jobDescription"
                  className="block text-sm font-medium leading-5 text-gray-700"
                >
                  Enter the description of your job post
                </label>
                <textarea
                  name="description"
                  rows="5"
                  className="block w-full px-3 py-2 mt-1 transition duration-150 ease-in-out border border-gray-300 rounded-md shadow-sm form-input focus:outline-none focus:shadow-outline-blue focus:border-blue-300 sm:text-sm sm:leading-5"
                  ref={register({ required: true })}
                />
                {errors.jobDescription && (
                  <p class="mt-1 text-red-500 text-xs">This field is required.</p>
                )}
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="px-4 py-5 mt-8 bg-white shadow sm:rounded-lg sm:p-6">
        <div className="md:grid md:grid-cols-3 md:gap-6">
          <div className="md:col-span-1">
            <h3 className="text-lg font-medium leading-6 text-gray-900">Location</h3>
          </div>
          <div className="mt-5 md:mt-0 md:col-span-2">
            <div className="grid grid-cols-3 gap-6">
              <div className="col-span-6 sm:col-span-4">
                <label
                  htmlFor="job_address"
                  className="block text-sm font-medium leading-5 text-gray-700"
                >
                  Enter the job address or city
                </label>
                <input
                  name="location"
                  placeholder=""
                  className="block w-full px-3 py-2 mt-1 transition duration-150 ease-in-out border border-gray-300 rounded-md shadow-sm form-input focus:outline-none focus:shadow-outline-blue focus:border-blue-300 sm:text-sm sm:leading-5"
                  ref={register({ required: true })}
                />
                {errors.jobAddress && (
                  <p class="mt-1 text-red-500 text-xs">This field is required.</p>
                )}
              </div>
            </div>
          </div>
        </div>
      </section>
      <footer className="mt-8">
        <div className="flex justify-end">
          <span className="inline-flex ml-3 rounded-md shadow-sm">
            <Button type="submit">Create job</Button>
          </span>
        </div>
      </footer>
    </form>
  );
}
