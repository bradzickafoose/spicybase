import Head from 'next/head';
import { PageTitle, ChatRooms } from 'components';
import { APP_NAME } from 'utils/constants';

function Messages() {
  return (
    <>
      <Head>
        <title>Messages - {APP_NAME}</title>
      </Head>
      <PageTitle title="Messages" />
      <div className="flex flex-row flex-grow min-h-0 px-4 mx-auto sm:px-0 max-w-7xl sm:px-6 lg:px-8">
        <ChatRooms />
      </div>
    </>
  );
}

export default Messages;
