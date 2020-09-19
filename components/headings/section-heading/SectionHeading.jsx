export default function SectionHeading({ title, children }) {
  return (
    <div className="pb-5 space-y-3 sm:flex sm:items-center sm:justify-between sm:space-x-4 sm:space-y-0">
      <h3 className="text-3xl font-semibold leading-6 text-gray-900">{title}</h3>
      <div>{children}</div>
    </div>
  );
}
