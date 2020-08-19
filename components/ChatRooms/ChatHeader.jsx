import Link from 'next/link';

function ChatHeader() {
  return (
    <header className="flex flex-row items-center justify-between flex-none px-6 py-4 border-b border-gray-200 chat-header">
      <div className="flex">
        <div className="relative flex flex-shrink-0 w-12 h-12 mr-4">
          <img
            className="object-cover w-full h-full rounded-full shadow-md"
            src="https://randomuser.me/api/portraits/women/33.jpg"
            alt=""
          />
        </div>
        <div className="text-sm">
          <p className="font-bold">Scarlett Johansson</p>
          <p>Orlando, FL – 3:58pm local time</p>
        </div>
      </div>

      <div className="flex">
        <Link href="#">
          <a className="block w-10 h-10 p-2 ml-4 bg-gray-100 rounded-full hover:bg-gray-200">
            <svg
              viewBox="0 0 20 20"
              className="w-full h-full text-gray-400 fill-current"
            >
              <path d="M2.92893219,17.0710678 C6.83417511,20.9763107 13.1658249,20.9763107 17.0710678,17.0710678 C20.9763107,13.1658249 20.9763107,6.83417511 17.0710678,2.92893219 C13.1658249,-0.976310729 6.83417511,-0.976310729 2.92893219,2.92893219 C-0.976310729,6.83417511 -0.976310729,13.1658249 2.92893219,17.0710678 Z M9,11 L9,10.5 L9,9 L11,9 L11,15 L9,15 L9,11 Z M9,5 L11,5 L11,7 L9,7 L9,5 Z"></path>
            </svg>
          </a>
        </Link>
      </div>
    </header>
  );
}
export default ChatHeader;
