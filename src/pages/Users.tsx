import React from 'react';
import usersApi from '../api/users';
import { Search, UserRow } from '../components';
import { useAppDispatch, useAppSelector } from '../hooks';
import usersSearchSlice from '../store/usersSearch/slice';

const { change: changeSearchValue } = usersSearchSlice.actions;

const Users: React.FC = () => {
  const dispatch = useAppDispatch();
  const searchValue = useAppSelector(state => state.usersSearch.value);

  const {
    isError,
    isLoading,
    data: list,
  } = usersApi.useGetUsersQuery(encodeURIComponent(searchValue));

  return (
    <div>
      <Search
        inputProps={{
          placeholder: 'Search for Users',
        }}
        onChange={value => dispatch(changeSearchValue(value))}
        initialValue={searchValue}
        list={list || []}
        isError={isError}
        isLoading={isLoading}
        renderItem={user => (
          <UserRow avatarUrl={user.avatar_url} login={user.login} />
        )}
        height="calc(100vh - 240px)"
      />
    </div>
  );
};

export default Users;
