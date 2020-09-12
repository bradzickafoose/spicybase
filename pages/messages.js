import { Layout, ChatRooms } from 'components';
import requireUser from 'utils/requireUser';

export default function MessagesPage() {
  return (
    <Layout title="Messages" footer={false}>
      <div className="flex flex-row flex-grow min-h-0 px-4 mx-auto bg-white sm:px-0 max-w-7xl sm:px-6 lg:px-8">
        <ChatRooms />
      </div>
    </Layout>
  );
}

export const getServerSideProps = requireUser();
