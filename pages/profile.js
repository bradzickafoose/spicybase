import { useContext } from 'react';
import { Layout, PageHeading } from 'components';
import { UserContext } from 'providers/UserProvider';
import withAuth from 'utils/withAuth';

function ProfilePage() {
  const { user } = useContext(UserContext);

  return (
    <Layout title={`${user.firstName}'s Profile`} pageTitle={false}>
      <PageHeading title={`${user.firstName} ${user.lastName}`} />
    </Layout>
  );
}

export default withAuth(ProfilePage);