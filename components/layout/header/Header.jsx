import { useState } from 'react';
import { useRouter } from 'next/router';
import { axiosWithAuth } from 'utils';
import Plus from 'components/icons/Plus';
import { Button, Link } from 'components';
import {
  DesktopMenu,
  DesktopMenuButton,
  HeaderLinks,
  Logo,
  MobileMenu,
  MobileMenuButton,
} from 'components/layout/header';

const accountLinks = [
  { href: '/profile', label: 'Your Profile' },
  { href: '/account-settings', label: 'Account' },
];

const appLinks = [
  { href: '/', label: 'Home' },
  { href: '/profiles', label: 'Talent' },
  { href: '/jobs', label: 'Jobs' },
  { href: '/messages', label: 'Messages' },
];

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const router = useRouter();

  const handleLogout = event => {
    event.preventDefault();
    axiosWithAuth()
      .get('/logout')
      .then(() => router.push('/'))
      .catch(err => console.log(err));
  };

  return (
    <header>
      <nav className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex">
            <MobileMenuButton isOpen={isOpen} setIsOpen={setIsOpen} />
            <Logo />
            <HeaderLinks appLinks={appLinks} />
          </div>
          <div className="flex items-center">
            <div className="flex-shrink-0">
              {/* <Button icon={<Plus />}>Create new job</Button> */}
              <Link href="/create-job">
                <a className="relative inline-flex items-center px-4 py-2 text-sm font-medium leading-5 text-white transition duration-150 ease-in-out bg-red-600 border border-transparent rounded-full shadow-sm hover:bg-red-500 focus:outline-none focus:border-red-700 focus:shadow-outline-indigo active:bg-red-700">
                  <svg className="w-5 h-5 mr-2 -ml-1" fill="currentColor" viewBox="0 0 20 20">
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
                <DesktopMenuButton isOpen={isOpen} setIsOpen={setIsOpen} />
                <DesktopMenu
                  accountLinks={accountLinks}
                  isOpen={isOpen}
                  handleLogout={handleLogout}
                />
              </div>
            </div>
          </div>
        </div>
      </nav>
      {isOpen ? (
        <MobileMenu appLinks={appLinks} accountLinks={accountLinks} handleLogout={handleLogout} />
      ) : null}
    </header>
  );
}
