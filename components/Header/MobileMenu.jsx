import { Link } from 'components';

function MobileMenu({ links, handleLogout }) {
  return (
    <div className="block md:hidden">
      <div className="pt-2 pb-3">
        {links.map(({ href, label }) => (
          <Link id={`${href}${label}`} activeClassName="active" href={href}>
            {/* activeClassName="text-red-700 border-red-500 bg-red-5 focus:text-red-800 focus:bg-red-100 focus:border-red-700" */}
            <a className="block py-2 pl-3 pr-4 mt-1 text-base font-medium text-gray-600 transition duration-150 ease-in-out border-l-4 border-transparent hover:text-gray-800 hover:bg-gray-50 hover:border-gray-300 focus:outline-none focus:text-gray-800 focus:bg-gray-50 focus:border-gray-300 sm:pl-5 sm:pr-6">
              {label}
            </a>
          </Link>
        ))}
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
            <a className="block px-4 py-2 mt-1 text-base font-medium text-gray-500 transition duration-150 ease-in-out hover:text-gray-800 hover:bg-gray-100 focus:outline-none focus:text-gray-800 focus:bg-gray-100 sm:px-6">
              Your Profile
            </a>
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
  );
}

export default MobileMenu;
