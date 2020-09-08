import Link from 'next/link';
import { Transition } from '@tailwindui/react';

export default function Dropdown({ accountLinks, isOpen, handleLogout }) {
  return (
    <Transition
      show={isOpen}
      enter="transition ease-out duration-100 transform"
      enterFrom="opacity-0 scale-95"
      enterTo="opacity-100 scale-100"
      leave="transition ease-in duration-75 transform"
      leaveFrom="opacity-100 scale-100"
      leaveTo="opacity-0 scale-95"
    >
      <div className="absolute right-0 w-48 mt-2 origin-top-right rounded-md shadow-lg">
        <div
          className="py-1 bg-white rounded-md shadow-xs"
          role="menu"
          aria-orientation="vertical"
          aria-labelledby="user-menu"
        >
          <Link href="/profile">
            <a className="block px-4 py-2 text-sm leading-5 text-gray-700 transition duration-150 ease-in-out hover:bg-gray-100 focus:outline-none focus:bg-gray-100">
              Your Profile
            </a>
          </Link>
          <Link href="/account-settings">
            <a className="block px-4 py-2 text-sm leading-5 text-gray-700 transition duration-150 ease-in-out hover:bg-gray-100 focus:outline-none focus:bg-gray-100">
              Account
            </a>
          </Link>
          <span onClick={handleLogout}>
            <a className="block px-4 py-2 text-sm leading-5 text-gray-700 transition duration-150 ease-in-out hover:bg-gray-100 focus:outline-none focus:bg-gray-100">
              Sign out
            </a>
          </span>
        </div>
      </div>
    </Transition>
  );
}
