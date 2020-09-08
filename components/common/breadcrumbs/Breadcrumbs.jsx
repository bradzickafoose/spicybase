import Link from 'next/link';

export default function Breadcrumbs({ title }) {
  return (
    <nav className="items-center hidden text-sm font-medium leading-5 sm:flex">
      <Link href="/account-settings">
        <a className="text-gray-500 transition duration-150 ease-in-out hover:text-gray-700">
          Account
        </a>
      </Link>
      <svg
        className="flex-shrink-0 w-5 h-5 mx-2 text-gray-400"
        viewBox="0 0 20 20"
        fill="currentColor"
      >
        <path
          fillRule="evenodd"
          d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
          clipRule="evenodd"
        />
      </svg>
      <span className="text-gray-500">{title}</span>
    </nav>
  );
}
