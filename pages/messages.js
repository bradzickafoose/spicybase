import React from 'react';
import { PageTitle, ChatRooms } from '../components';

function Messages() {
  return (
    <>
      <PageTitle title="Messages" />
      <div className="flex flex-row flex-grow min-h-0 px-4 sm:px-0 mx-auto max-w-7xl sm:px-6 lg:px-8">
        <ChatRooms />
      </div>
    </>
  );
}

export default Messages;
