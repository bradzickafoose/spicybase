import { useState } from 'react';
import { useRouter } from 'next/router';
import { axiosWithAuth } from 'utils';
import { Link } from 'components';
import { Dropdown, MobileMenu } from 'components/Header';

const links = [
  { href: '/dashboard', label: 'Dashboard' },
  { href: '/jobs', label: 'Jobs' },
  { href: '/team', label: 'Team' },
  { href: '/messages', label: 'Messages' },
];

function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const router = useRouter();

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
                {isOpen ? (
                  <svg
                    className="w-6 h-6"
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
                ) : (
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
                )}
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
              {links.map(({ href, label }) => (
                <Link
                  id={`${href}${label}`}
                  activeClassName="active"
                  href={href}
                >
                  {/* activeClassName="border-red-500 text-gray-700" */}
                  <a className="inline-flex items-center px-1 pt-1 text-sm font-medium leading-5 text-gray-500 transition duration-150 ease-in-out border-b-2 border-transparent hover:text-gray-700 hover:border-gray-300 focus:outline-none focus:text-gray-700 focus:border-gray-300">
                    {label}
                  </a>
                </Link>
              ))}
            </div>
          </div>
          <div className="flex items-center">
            <div className="flex-shrink-0">
              <Link href="/post-job">
                <a className="relative inline-flex items-center px-4 py-2 text-sm font-medium leading-5 text-white transition duration-150 ease-in-out bg-red-600 border border-transparent rounded-md shadow-sm hover:bg-red-500 focus:outline-none focus:border-red-700 focus:shadow-outline-indigo active:bg-red-700">
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
                <Dropdown isOpen={isOpen} handleLogout={handleLogout} />
              </div>
            </div>
          </div>
        </div>
      </nav>
      {isOpen ? <MobileMenu links={links} handleLogout={handleLogout} /> : <></>}
    </header>
  );
}

export default Header;
