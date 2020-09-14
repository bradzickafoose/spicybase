import { Container, Layout, Link } from 'components';
import { useEffect, useState } from 'react';
import { axiosWithAuth } from 'utils';

function ProfileCard({ user }) {
  return (
    <div className="pb-1">
      <img
        src={user.profileImage}
        loading="lazy"
        alt={`Photo of ${user.fullName}`}
        className="rounded-lg"
      />
      <h4 className="text-lg">{user.fullName}</h4>
      <div>
        {user.skills.map(skill => (
          <span>{skill.name}</span>
        ))}
      </div>

    </div>
  );
}

function ProfilesPage() {
  const [profiles, setProfiles] = useState([]);
  useEffect(() => {
    axiosWithAuth()
      .get('/user/new')
      .then(response => {
        setProfiles(response.data.users);
      })
      .catch(error => console.log('Profiles.js:', error.message));
  }, []);

  return (
    <Layout footer={false}>
      <Container>
        <h2 className="mb-4 text-2xl font-semibold leading-6 text-gray-900">New this week</h2>
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5">
          {profiles.map(profile => (
            <ProfileCard key={profile._id} user={profile} />
          ))}
        </div>
      </Container>
    </Layout>
  );
}

export default ProfilesPage;
