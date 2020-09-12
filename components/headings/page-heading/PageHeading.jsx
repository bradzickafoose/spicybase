export default function PageHeading({ title, children }) {
  return (
    <div className="max-w-6xl px-4 pt-10 mx-auto sm:px-6 lg:px-8">
      {children}
      <h1 className="text-3xl font-bold leading-tight text-gray-700">
        {title}
      </h1>
    </div>
  );
}
