import Link from 'next/link';

export default function HeaderLinks({ appLinks }) {
  return (
    <div className="hidden md:ml-6 md:flex">
      {appLinks.map(({ href, label }) => (
        <Link key={`${href}${label}`} id={`${href}${label}`} activeClassName="active" href={href}>
          <a className="inline-flex items-center px-4 pt-1 text-xl font-semibold leading-5 transition duration-150 ease-in-out text-cool-gray-500 hover:text-cool-gray-700 focus:outline-none focus:text-cool-gray-700">
            {label}
          </a>
        </Link>
      ))}
    </div>
  );
}
