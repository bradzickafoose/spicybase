import { useContext, useState } from 'react';
import { useRouter } from 'next/router';
import { axiosWithAuth } from 'utils';
import Plus from 'components/icons/Plus';
import { Button, Link } from 'components';
import { UserContext } from 'providers/UserProvider';
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
  const { user, setUser } = useContext(UserContext);

  const handleLogout = event => {
    event.preventDefault();
    localStorage.removeItem('accessToken');
    setUser(null);
    router.push('/');
  };

  return (
    <header>
      <nav className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex">
            <MobileMenuButton isOpen={isOpen} setIsOpen={setIsOpen} />
            <Logo />
          </div>
          {/* <HeaderLinks appLinks={appLinks} /> */}
          <div className="flex items-center">
            <div className="hidden md:ml-4 md:flex-shrink-0 md:flex md:items-center">
              {/* <!-- Profile dropdown --> */}

              {user ? (
                <div className="relative ml-3">
                  <DesktopMenuButton isOpen={isOpen} setIsOpen={setIsOpen} user={user} />
                  <DesktopMenu
                    accountLinks={accountLinks}
                    isOpen={isOpen}
                    handleLogout={handleLogout}
                  />
                </div>
              ) : (
                <Link href="/login">
                  <a>Login</a>
                </Link>
              )}
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
