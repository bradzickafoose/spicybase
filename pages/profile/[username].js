import { useState, useContext, useEffect } from 'react';
import { Avatar, Button, Container, Layout, ProfileForm, SectionHeading } from 'components';
import { UserContext } from 'providers/UserProvider';
import { useRouter } from 'next/router';
import axios from 'axios';
import withAuth from 'utils/withAuth';
import Icon from 'components/common/icon/Icon';
import HomeIcon from 'components/icons/Home';

function ProfileAbout({ user }) {
  const { bio, languages } = user;
  return (
    <>
      {bio ? (
        <p>{bio}</p>
      ) : (
        <div>
          <p>
            Your <em>about me</em> is currently blank.
          </p>
        </div>
      )}
      <div>
        {!!languages && (
          <div>
            <span>
              <Icon />
            </span>
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

function ProfileMeta({ user }) {
  const { availability, currentLocation, profileImage, verified } = user;
  return (
    <div className="flex items-end sm:block">
      <Avatar src={profileImage} size="xlarge" className="mb-4" />
      <div className="p-6 border rounded-lg">
        {currentLocation && (
          <div className="mb-4">
            <h3 className="font-semibold">Location</h3>
            <p>{currentLocation}</p>
          </div>
        )}

        <h3 className="font-semibold">Availability</h3>
        <p className="mb-4">
          {availability ? `${availability}` : `Please update job search status`}
        </p>
        <h3 className="font-semibold">Identity verification</h3>
        <p className="mb-4">Show others you're really you with the identity verification badge.</p>
        {verified ? <div>Verified</div> : <Button variant="outlined">Get the badge</Button>}
      </div>
    </div>
  );
}

function ProfilePage({ user }) {
  const [editAccount, setEditAccount] = useState(true);
  const { user: currentUser } = useContext(UserContext);
  const router = useRouter();
  const { username } = router.query;

  return (
    <Layout title={`${user.firstName}'s Profile`} pageTitle={false} footer={false}>
      <Container>
        <div className="grid grid-cols-4 grid-rows-1 gap-10 mt-10">
          <div className="col-span-1 row-span-1">
            <ProfileMeta user={user} />
          </div>
          <div className="col-span-3 row-span-1">
            <SectionHeading title={`${user.firstName} ${user.lastName}`}>
              {
                !!currentUser && currentUser.username === username && 
                <Button variant="outlined" onClick={() => setEditAccount(!editAccount)}>
                  {editAccount ? 'View Profile' : 'Edit Profile'}
                </Button>
              }
            </SectionHeading>
            <section className="pb-8 mb-8 border-b">
              <h2 className="text-2xl">About</h2>
              {editAccount ? (
                <ProfileForm user={user} setEditAccount={setEditAccount} />
              ) : (
                <ProfileAbout user={user} />
              )}
            </section>
            <section>
              <h2 className="text-2xl">
                {user.reviews ? `${user.reviews.length} ` : `No `}reviews
              </h2>
            </section>
          </div>
        </div>
      </Container>
    </Layout>
  );
}


export async function getServerSideProps(ctx) {
  const {username} = ctx.params;
  let user;

  try {
    const { data } = await axios.get(`http://localhost:5000/user/${username}`);
    user = data.user;
  }
  catch (err) {
    console.log(err.message);
  }
  finally {
    return {
      props: { user }
    }
  }
}

export default ProfilePage;
// export default withAuth(ProfilePage);

