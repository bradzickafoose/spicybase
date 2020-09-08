export default function RoomsList() {
  return (
    <div className="flex-1 p-2 overflow-y-scroll rooms">
      {/* Room 1 */}
      <div className="relative flex items-center justify-between p-3 rounded-lg hover:bg-gray-100">
        <div className="relative flex flex-shrink-0 w-16 h-16">
          <img
            className="object-cover w-full h-full rounded-full shadow-md"
            src="https://randomuser.me/api/portraits/women/61.jpg"
            alt=""
          />
        </div>
        <div className="flex-auto hidden min-w-0 ml-4 mr-6 md:block">
          <p>Angelina Jolie</p>
          <div className="flex items-center text-sm text-gray-600">
            <div className="min-w-0">
              <p className="truncate">Ok, see you at the subway in a bit.</p>
            </div>
            <p className="ml-2 whitespace-no-wrap">Just now</p>
          </div>
        </div>
      </div>
      {/* Room 2 */}
      <div className="relative flex items-center justify-between p-3 rounded-lg hover:bg-gray-100">
        <div className="relative flex flex-shrink-0 w-16 h-16">
          <img
            className="object-cover w-full h-full rounded-full shadow-md"
            src="https://randomuser.me/api/portraits/men/97.jpg"
            alt=""
          />
          <div className="absolute bottom-0 right-0 p-1 bg-white rounded-full">
            <div className="w-3 h-3 bg-green-500 rounded-full"></div>
          </div>
        </div>
        <div className="flex-auto hidden min-w-0 ml-4 mr-6 md:block">
          <p className="font-bold">Tony Stark</p>
          <div className="flex items-center text-sm font-bold">
            <div className="min-w-0">
              <p className="truncate">Hey, Are you there?</p>
            </div>
            <p className="ml-2 whitespace-no-wrap">10min</p>
          </div>
        </div>
        <div className="flex flex-shrink-0 hidden w-3 h-3 bg-blue-500 rounded-full md:block"></div>
      </div>
      {/* Room 3 */}
      <div className="relative flex items-center justify-between p-3 bg-gray-200 rounded-lg">
        <div className="relative flex flex-shrink-0 w-16 h-16">
          <img
            className="object-cover w-full h-full rounded-full shadow-md"
            src="https://randomuser.me/api/portraits/women/33.jpg"
            alt=""
          />
        </div>
        <div className="flex-auto hidden min-w-0 ml-4 mr-6 md:block">
          <p>Scarlett Johansson</p>
          <div className="flex items-center text-sm text-gray-600">
            <div className="min-w-0">
              <p className="truncate">You sent a photo.</p>
            </div>
            <p className="ml-2 whitespace-no-wrap">1h</p>
          </div>
        </div>
      </div>
      {/* Room 4 */}
      <div className="relative flex items-center justify-between p-3 rounded-lg hover:bg-gray-100">
        <div className="relative flex flex-shrink-0 w-16 h-16">
          <img
            className="absolute object-cover w-10 h-10 ml-6 rounded-full shadow-md"
            src="https://randomuser.me/api/portraits/men/22.jpg"
            alt="User2"
          />
          <img
            className="absolute object-cover w-10 h-10 mt-6 rounded-full shadow-md"
            src="https://randomuser.me/api/portraits/men/55.jpg"
            alt="User2"
          />
          <div className="absolute bottom-0 right-0 p-1 bg-white rounded-full">
            <div className="w-3 h-3 bg-green-500 rounded-full"></div>
          </div>
        </div>
        <div className="flex-auto hidden min-w-0 ml-4 mr-6 md:block">
          <p>TailwindCSS Team</p>
          <div className="flex items-center text-sm text-gray-600">
            <div className="min-w-0">
              <p className="truncate">Adam: Hurray, Version 2 is out now!!.</p>
            </div>
            <p className="ml-2 whitespace-no-wrap">23 Jan</p>
          </div>
        </div>
      </div>
      {/* Room 5 */}
      <div className="relative flex items-center justify-between p-3 rounded-lg hover:bg-gray-100">
        <div className="relative flex flex-shrink-0 w-16 h-16">
          <img
            className="object-cover w-full h-full rounded-full shadow-md"
            src="https://randomuser.me/api/portraits/men/45.jpg"
            alt="User2"
          />
        </div>
        <div className="flex-auto hidden min-w-0 ml-4 mr-6 md:block">
          <p>Bruce Lee</p>
          <div className="flex items-center text-sm text-gray-600">
            <div className="min-w-0">
              <p className="truncate">You are a great human being.</p>
            </div>
            <p className="ml-2 whitespace-no-wrap">23 Jan</p>
          </div>
        </div>
        <div className="flex flex-shrink-0 hidden w-4 h-4 md:block">
          <img
            className="object-cover w-full h-full rounded-full"
            alt="user2"
            src="https://randomuser.me/api/portraits/men/45.jpg"
          />
        </div>
      </div>
      {/* Room 6 */}
      <div className="relative flex items-center justify-between p-3 rounded-lg hover:bg-gray-100">
        <div className="relative flex flex-shrink-0 w-16 h-16">
          <img
            className="object-cover w-full h-full rounded-full shadow-md"
            src="https://randomuser.me/api/portraits/men/20.jpg"
            alt="User2"
          />
          <div className="absolute bottom-0 right-0 p-1 bg-white rounded-full">
            <div className="w-3 h-3 bg-green-500 rounded-full"></div>
          </div>
        </div>
        <div className="flex-auto hidden min-w-0 ml-4 mr-6 md:block">
          <p>Leonardo Dicaprio</p>
          <div className="flex items-center text-sm text-gray-600">
            <div className="min-w-0">
              <p className="truncate">
                How can you leave Rose dude. I hate you!
              </p>
            </div>
            <p className="ml-2 whitespace-no-wrap">26 Oct</p>
          </div>
        </div>
      </div>
    </div>
  );
}