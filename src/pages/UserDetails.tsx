import { Alert } from 'antd';
import { FC } from 'react';
import { useParams } from 'react-router-dom';
import usersApi from '../api/users';
import { Loader, UserDetailsHeader } from '../components';
import Repositories from '../components/Repositories';

const UserDetails: FC = () => {
  const { login = '' } = useParams();
  const { data: user, isLoading, isError } = usersApi.useGetOneUserQuery(login);

  if (isLoading) {
    return <Loader />;
  }

  if (isError || !user) {
    return <Alert type="error" message="An error occurred" />;
  }

  return (
    <div>
      <UserDetailsHeader
        avatarUrl={user.avatar_url}
        email={user.email}
        followersCount={user.followers}
        followingCount={user.following}
        joinDate={user.created_at}
        location={user.location}
        userName={user.login}
        bio={user.bio}
      />

      <Repositories userName={login} />
    </div>
  );
};

export default UserDetails;
