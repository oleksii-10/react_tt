import { Avatar, Col, List, Row, Skeleton, Typography } from 'antd';
import { FC, memo } from 'react';
import { useNavigate } from 'react-router-dom';
import usersApi from '../../api/users';
import styles from './style.module.css';

type Props = {
  avatarUrl: string;
  login: string;
};

const UserRow: FC<Props> = ({ avatarUrl, login }) => {
  const navigate = useNavigate();

  const { data, isLoading } = usersApi.useGetOneUserQuery(login);

  return (
    <List.Item
      className={styles.item}
      onClick={() => navigate(`/users/${login}`)}
    >
      <Row gutter={32} align="middle" className={styles.row}>
        <Col>
          <Avatar src={avatarUrl} />
        </Col>
        <Col flex={1}>
          <Typography.Text>{login}</Typography.Text>
        </Col>
        <Col className={styles.repository}>
          <Typography.Text>Repo: </Typography.Text>
          {isLoading ? (
            <Skeleton title={false} paragraph={{ rows: 1, width: 50 }} active />
          ) : (
            <strong>
              {'#'}
              {data?.public_repos}
            </strong>
          )}
        </Col>
      </Row>
    </List.Item>
  );
};

export default memo(UserRow);
