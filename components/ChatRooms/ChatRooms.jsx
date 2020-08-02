import React from 'react';

import { RoomsList, ChatHeader, ChatBody, ChatFooter } from './';

function ChatRooms() {
  return (
    <>
      <section className="flex flex-col flex-none w-24 overflow-auto transition-all duration-300 ease-in-out lg:max-w-sm md:w-2/5">
        <RoomsList />
      </section>
      <section className="flex flex-col flex-auto border-l border-gray-200">
        <ChatHeader />
        <ChatBody />
        <ChatFooter />
      </section>
    </>
  );
}

export default ChatRooms;
