import { useState, useContext } from 'react';
import { Button, Container, Layout, Link } from 'components';
import { UserContext } from 'providers/UserProvider';
import withAuth from 'utils/withAuth';
import ProfileForm from 'components/forms/profile-form/ProfileForm';
import SectionHeading from 'components/headings/section-heading/SectionHeading';

function Profile({ user }) {
  const { bio, currentLocation, languages } = user;
  return (
    <>
      {bio && <p>{bio}</p>}
      <div>
        {currentLocation && <div>Lives in {currentLocation}</div>}
        {!!languages.length && (
          <div>
            Speaks{' '}
            {languages.map(({ key, name }) => (
              <span lang={key}>{name}</span>
            ))}
          </div>
        )}
      </div>
    </>
  );
}

function ProfilePage() {
  const [editAccount, setEditAccount] = useState(true);
  const { user } = useContext(UserContext);

  return (
    <Layout title={`${user.firstName}'s Profile`} pageTitle={false} footer={false}>
      <Container>
        <SectionHeading title={`${user.firstName} ${user.lastName}`}>
          <Button variant='outlined' onClick={() => setEditAccount(!editAccount)}>{editAccount ? 'View Profile' : 'Edit Profile'}</Button>
        </SectionHeading>
        <section className="pb-8">
          {editAccount ? (
            <ProfileForm user={user} setEditAccount={setEditAccount} />
          ) : (
            <Profile user={user} />
          )}
        </section>
      </Container>
    </Layout>
  );
}

export default withAuth(ProfilePage);
