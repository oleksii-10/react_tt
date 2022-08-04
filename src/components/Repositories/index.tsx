import { List } from 'antd';
import { FC, useState } from 'react';
import usersApi from '../../api/users';
import { Repository } from '../../types/repository';
import RepositoryRow from '../RepositoryRow';
import Search from '../Search';

type Props = {
  userName: string;
};

const Repositories: FC<Props> = ({ userName }) => {
  const [searchValue, setSearchValue] = useState('');

  const {
    isError,
    isLoading,
    data: list,
  } = usersApi.useGetRepositoriesQuery({
    userName,
    searchValue: encodeURIComponent(searchValue),
  });

  return (
    <Search
      inputProps={{
        placeholder: "Search for User's Repositories",
      }}
      onChange={setSearchValue}
      list={list || []}
      isError={isError}
      isLoading={isLoading}
      renderItem={(repository: Repository) => (
        <List.Item>
          <RepositoryRow
            forksCount={repository.forks_count}
            name={repository.name}
            starsCount={repository.stargazers_count}
          />
        </List.Item>
      )}
      height="calc(100vh - 460px)"
    />
  );
};

export default Repositories;
