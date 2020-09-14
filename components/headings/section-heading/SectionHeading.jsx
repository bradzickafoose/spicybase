export default function SectionHeading({ title, children }) {
  return (
    <div className="pb-5 space-y-3 border-b border-gray-200 sm:flex sm:items-center sm:justify-between sm:space-x-4 sm:space-y-0">
      <h3 className="text-xl font-medium leading-6 text-gray-900">{title}</h3>
      <div>{children}</div>
    </div>
  );
}
