import React from 'react';
import Link from 'next/link';

function ChatBody() {
  return (
    <div className="flex-1 p-4 overflow-y-scroll chat-body">
      {/* Message Group 1 */}
      <div className="flex flex-row justify-start">
        <div className="relative flex flex-shrink-0 w-8 h-8 mr-4">
          <img
            className="object-cover w-full h-full rounded-full shadow-md"
            src="https://randomuser.me/api/portraits/women/33.jpg"
            alt=""
          />
        </div>
        <div className="grid grid-flow-row gap-2 text-sm text-gray-700 messages">
          <div className="flex items-center group">
            <p className="max-w-xs px-6 py-3 bg-gray-100 rounded-t-lg rounded-r-lg lg:max-w-md">
              Hey! How are you?
            </p>
          </div>
          <div className="flex items-center group">
            <p className="max-w-xs px-6 py-3 bg-gray-100 rounded-r-lg lg:max-w-md">
              Shall we go for Hiking this weekend?
            </p>
          </div>
          <div className="flex items-center group">
            <p className="max-w-xs px-6 py-3 bg-gray-100 rounded-b-lg rounded-r-lg lg:max-w-md">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua.
              Volutpat lacus laoreet non curabitur gravida.
            </p>
          </div>
        </div>
      </div>
      {/* Message Group 1 Timestamp */}
      <p className="p-4 text-sm text-center text-gray-500">FRI 3:04 PM</p>
      {/* Message Group 2 */}
      <div className="flex flex-row justify-end">
        <div className="grid grid-flow-row gap-2 text-sm text-white messages">
          <div className="flex flex-row-reverse items-center group">
            <p className="max-w-xs px-6 py-3 bg-blue-500 rounded-t-lg rounded-l-lg lg:max-w-md">
              Hey! How are you?
            </p>
            <button
              type="button"
              className="flex flex-shrink-0 hidden block w-8 h-8 p-2 mx-2 text-gray-500 bg-gray-100 rounded-full group-hover:block focus:outline-none hover:text-gray-800 hover:bg-gray-200"
            >
              <svg viewBox="0 0 20 20" className="w-full h-full fill-current">
                <path
                  d="M10.001,7.8C8.786,7.8,7.8,8.785,7.8,10s0.986,2.2,2.201,2.2S12.2,11.215,12.2,10S11.216,7.8,10.001,7.8z
M3.001,7.8C1.786,7.8,0.8,8.785,0.8,10s0.986,2.2,2.201,2.2S5.2,11.214,5.2,10S4.216,7.8,3.001,7.8z M17.001,7.8
C15.786,7.8,14.8,8.785,14.8,10s0.986,2.2,2.201,2.2S19.2,11.215,19.2,10S18.216,7.8,17.001,7.8z"
                ></path>
              </svg>
            </button>
            <button
              type="button"
              className="flex flex-shrink-0 hidden block w-8 h-8 p-2 mx-2 text-gray-500 bg-gray-100 rounded-full group-hover:block focus:outline-none hover:text-gray-800 hover:bg-gray-200"
            >
              <svg viewBox="0 0 20 20" className="w-full h-full fill-current">
                <path d="M19,16.685c0,0-2.225-9.732-11-9.732V2.969L1,9.542l7,6.69v-4.357C12.763,11.874,16.516,12.296,19,16.685z"></path>
              </svg>
            </button>
            <button
              type="button"
              className="flex flex-shrink-0 hidden block w-8 h-8 p-2 mx-2 text-gray-500 bg-gray-100 rounded-full group-hover:block focus:outline-none hover:text-gray-800 hover:bg-gray-200"
            >
              <svg viewBox="0 0 24 24" className="w-full h-full fill-current">
                <path d="M12 22a10 10 0 1 1 0-20 10 10 0 0 1 0 20zm0-2a8 8 0 1 0 0-16 8 8 0 0 0 0 16zm-3.54-4.46a1 1 0 0 1 1.42-1.42 3 3 0 0 0 4.24 0 1 1 0 0 1 1.42 1.42 5 5 0 0 1-7.08 0zM9 11a1 1 0 1 1 0-2 1 1 0 0 1 0 2zm6 0a1 1 0 1 1 0-2 1 1 0 0 1 0 2z"></path>
              </svg>
            </button>
          </div>
          <div className="flex flex-row-reverse items-center group">
            <p className="max-w-xs px-6 py-3 bg-blue-500 rounded-l-lg lg:max-w-md">
              Shall we go for Hiking this weekend?
            </p>
          </div>
          <div className="flex flex-row-reverse items-center group">
            <p className="max-w-xs px-6 py-3 bg-blue-500 rounded-b-lg rounded-l-lg lg:max-w-md">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua.
              Volutpat lacus laoreet non curabitur gravida.
            </p>
          </div>
        </div>
      </div>
      {/* Message Group 2 Timestamp  */}
      <p className="p-4 text-sm text-center text-gray-500">SAT 2:10 PM</p>
      {/* Message Group 3 */}
      <div className="flex flex-row justify-start">
        <div className="relative flex flex-shrink-0 w-8 h-8 mr-4">
          <img
            className="object-cover w-full h-full rounded-full shadow-md"
            src="https://randomuser.me/api/portraits/women/33.jpg"
            alt=""
          />
        </div>
        <div className="grid grid-flow-row gap-2 text-sm text-gray-700 messages">
          <div className="flex items-center group">
            <p className="max-w-xs px-6 py-3 bg-gray-100 rounded-t-lg rounded-r-lg lg:max-w-md">
              Hey! How are you?
            </p>
          </div>
          <div className="flex items-center group">
            <p className="max-w-xs px-6 py-3 bg-gray-100 rounded-r-lg lg:max-w-md">
              Shall we go for Hiking this weekend?
            </p>
          </div>
          <div className="flex items-center group">
            <p className="max-w-xs px-6 py-3 bg-gray-100 rounded-b-lg rounded-r-lg lg:max-w-md">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua.
              Volutpat lacus laoreet non curabitur gravida.
            </p>
          </div>
        </div>
      </div>
      {/* Message Group 3 Timestamp */}
      <p className="p-4 text-sm text-center text-gray-500">12:40 PM</p>
      {/* Message Group 4 */}
      <div className="flex flex-row justify-end">
        <div className="grid grid-flow-row gap-2 text-sm text-white messages">
          <div className="flex flex-row-reverse items-center group">
            <p className="max-w-xs px-6 py-3 bg-blue-500 rounded-t-lg rounded-l-lg lg:max-w-md">
              Hey! How are you?
            </p>
          </div>
          <div className="flex flex-row-reverse items-center group">
            <p className="max-w-xs px-6 py-3 bg-blue-500 rounded-l-lg lg:max-w-md">
              Shall we go for Hiking this weekend?
            </p>
          </div>
          <div className="flex flex-row-reverse items-center group">
            <Link href="#">
              <a className="relative flex flex-shrink-0 block w-64 h-64 max-w-xs lg:max-w-md">
                <img
                  className="absolute object-cover w-full h-full rounded-l-lg shadow-md"
                  src="https://unsplash.com/photos/8--kuxbxuKU/download?force=true&amp;w=640"
                  alt="hiking"
                />
              </a>
            </Link>
          </div>
          <div className="flex flex-row-reverse items-center group">
            <p className="max-w-xs px-6 py-3 bg-blue-500 rounded-b-lg rounded-l-lg lg:max-w-md">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua.
              Volutpat lacus laoreet non curabitur gravida.
            </p>
          </div>
        </div>
      </div>
      {/* Message Group 4 Timestamp  */}
      <p className="p-4 text-sm text-center text-gray-500">2:10 PM</p>
    </div>
  );
}
export default ChatBody;
