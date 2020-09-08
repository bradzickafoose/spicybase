export default function SelectMenu({ label, options }) {
  return (
    <div>
      <label
        for={label}
        className="block text-sm font-medium leading-5 text-gray-700"
      >
        {label}
      </label>
      <select
        id={label}
        className="block w-full py-2 pl-3 pr-10 mt-1 text-base leading-6 border-gray-300 form-select focus:outline-none focus:shadow-outline-blue focus:border-blue-300 sm:text-sm sm:leading-5"
      >
        {options.map((option) => {
          return (
            <option key={option.id} value={option.id}>
              {option.name}
            </option>
          );
        })}
      </select>
    </div>
  );
}
