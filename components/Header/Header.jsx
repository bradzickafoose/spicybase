import React, { useState } from 'react';
import Link from 'next/link';
import { Dropdown } from './';
import { axiosWithAuth } from '../../utils/axiosWithAuth';
import { useRouter } from 'next/router';

function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const router = useRouter();

  // TODO: Abstract for reuse
  const handleLogout = (event) => {
    event.preventDefault();
    axiosWithAuth()
      .post('/logout')
      .then(() => router.push('/'))
      .catch((err) => console.log(err));
  };

  return (
    <header className="bg-white shadow">
      <nav className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex">
            <div className="flex items-center mr-2 -ml-2 md:hidden">
              {/* <!-- Mobile menu button --> */}
              <button
                onClick={() => setIsOpen(!isOpen)}
                className="inline-flex items-center justify-center p-2 text-gray-400 transition duration-150 ease-in-out rounded-md hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:bg-gray-100 focus:text-gray-500"
                aria-label="Main menu"
                aria-expanded="false"
              >
                {/* <!-- Icon when menu is closed. --> */}
                {/* <!-- Menu open: "hidden", Menu closed: "block" --> */}
                <svg
                  className="block w-6 h-6"
                  stroke="currentColor"
                  fill="none"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                </svg>
                {/* <!-- Icon when menu is open. --> */}
                {/* <!-- Menu open: "block", Menu closed: "hidden" --> */}
                <svg
                  className="hidden w-6 h-6"
                  stroke="currentColor"
                  fill="none"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              </button>
            </div>
            {/* Logo */}
            <Link href="/">
              <a className="flex items-center flex-shrink-0">
                <h1 className="text-lg font-medium leading-tight text-red-600">
                  Utili<span className="font-bold text-gray-600">teams</span>
                </h1>
              </a>
            </Link>
            {/* Nav Links */}
            <div className="hidden md:ml-6 md:flex">
              <Link href="/dashboard">
                {/* activeClassName="border-red-500 text-gray-700" */}
                <a className="inline-flex items-center px-1 pt-1 text-sm font-medium leading-5 text-gray-500 transition duration-150 ease-in-out border-b-2 border-transparent hover:text-gray-700 hover:border-gray-300 focus:outline-none focus:text-gray-700 focus:border-gray-300">
                  Dashboard
                </a>
              </Link>
              <Link href="/jobs">
                <a className="inline-flex items-center px-1 pt-1 ml-8 text-sm font-medium leading-5 text-gray-500 transition duration-150 ease-in-out border-b-2 border-transparent hover:text-gray-700 hover:border-gray-300 focus:outline-none focus:text-gray-700 focus:border-gray-300">
                  Jobs
                </a>
              </Link>
              <Link href="/team">
                <a className="inline-flex items-center px-1 pt-1 ml-8 text-sm font-medium leading-5 text-gray-500 transition duration-150 ease-in-out border-b-2 border-transparent hover:text-gray-700 hover:border-gray-300 focus:outline-none focus:text-gray-700 focus:border-gray-300">
                  Team
                </a>
              </Link>
              <Link href="/messages">
                <a className="inline-flex items-center px-1 pt-1 ml-8 text-sm font-medium leading-5 text-gray-500 transition duration-150 ease-in-out border-b-2 border-transparent hover:text-gray-700 hover:border-gray-300 focus:outline-none focus:text-gray-700 focus:border-gray-300">
                  Messages
                </a>
              </Link>
            </div>
          </div>
          <div className="flex items-center">
            <div className="flex-shrink-0">
              <Link href="/post-job">
                <a className="btn btn-primary">
                  <svg
                    className="w-5 h-5 mr-2 -ml-1"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path
                      fillRule="evenodd"
                      d="M10 3a1 1 0 011 1v5h5a1 1 0 110 2h-5v5a1 1 0 11-2 0v-5H4a1 1 0 110-2h5V4a1 1 0 011-1z"
                      clipRule="evenodd"
                    />
                  </svg>
                  <span>Create new job</span>
                </a>
              </Link>
            </div>
            <div className="hidden md:ml-4 md:flex-shrink-0 md:flex md:items-center">
              {/* <!-- Profile dropdown --> */}
              <div className="relative ml-3">
                <div>
                  <button
                    type="button"
                    onClick={() => setIsOpen(!isOpen)}
                    className="flex text-sm transition duration-150 ease-in-out border-2 border-transparent rounded-full focus:outline-none focus:border-gray-300"
                    id="user-menu"
                    aria-label="User menu"
                    aria-haspopup="true"
                  >
                    <img
                      className="w-8 h-8 rounded-full"
                      src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
                      alt=""
                    />
                  </button>
                </div>
                <Dropdown isOpen={isOpen} />
              </div>
            </div>
          </div>
        </div>
      </nav>

      {/* <!--
        Mobile menu, toggle classes based on menu state.

        Menu open: "block", Menu closed: "hidden"
      --> */}
      <div className="hidden md:hidden">
        <div className="pt-2 pb-3">
          <Link href="/dashboard">
            <a className="block py-2 pl-3 pr-4 text-base font-medium text-red-700 transition duration-150 ease-in-out border-l-4 border-red-500 bg-red-50 focus:outline-none focus:text-red-800 focus:bg-red-100 focus:border-red-700 sm:pl-5 sm:pr-6">
              Dashboard
            </a>
          </Link>
          <Link href="/teams">
            <a className="block py-2 pl-3 pr-4 mt-1 text-base font-medium text-gray-600 transition duration-150 ease-in-out border-l-4 border-transparent hover:text-gray-800 hover:bg-gray-50 hover:border-gray-300 focus:outline-none focus:text-gray-800 focus:bg-gray-50 focus:border-gray-300 sm:pl-5 sm:pr-6">
              Teams
            </a>
          </Link>
          <Link href="/projects">
            <a className="block py-2 pl-3 pr-4 mt-1 text-base font-medium text-gray-600 transition duration-150 ease-in-out border-l-4 border-transparent hover:text-gray-800 hover:bg-gray-50 hover:border-gray-300 focus:outline-none focus:text-gray-800 focus:bg-gray-50 focus:border-gray-300 sm:pl-5 sm:pr-6">
              Projects
            </a>
          </Link>
        </div>
        <div className="pt-4 pb-3 border-t border-gray-200">
          <div className="flex items-center px-4 sm:px-6">
            <div className="flex-shrink-0">
              <img
                className="w-10 h-10 rounded-full"
                src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
                alt=""
              />
            </div>
            <div className="ml-3">
              <div className="text-base font-medium leading-6 text-gray-800">
                Bob Iger
              </div>
              <div className="text-sm font-medium leading-5 text-gray-500">
                bob@igerutility.com
              </div>
            </div>
          </div>
          <div className="mt-3">
            <Link href="/me">
              <a>Your Profile</a>
            </Link>
            <Link href="/account-settings">
              <a className="block px-4 py-2 mt-1 text-base font-medium text-gray-500 transition duration-150 ease-in-out hover:text-gray-800 hover:bg-gray-100 focus:outline-none focus:text-gray-800 focus:bg-gray-100 sm:px-6">
                Account
              </a>
            </Link>
            <button
              className="block px-4 py-2 mt-1 text-base font-medium text-gray-500 transition duration-150 ease-in-out hover:text-gray-800 hover:bg-gray-100 focus:outline-none focus:text-gray-800 focus:bg-gray-100 sm:px-6"
              onClick={handleLogout}
            >
              Sign out
            </button>
          </div>
        </div>
      </div>
    </header>
  );
}

export default Header;
