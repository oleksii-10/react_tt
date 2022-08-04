import { Avatar, Col, Row, Typography } from 'antd';
import { FC, memo } from 'react';
import styles from './style.module.css';

type Props = {
  avatarUrl: string;
  userName: string;
  email: string | null;
  location: string;
  joinDate: string;
  followersCount: number;
  followingCount: number;
  bio: string;
};

const UserDetailsHeader: FC<Props> = ({
  avatarUrl,
  userName,
  email,
  location,
  joinDate,
  followersCount,
  followingCount,
  bio,
}) => {
  const info = [
    {
      label: 'User Name',
      value: userName,
    },
    {
      label: 'Email',
      value: email,
    },
    {
      label: 'Location',
      value: location,
    },
    {
      label: 'Registration Date',
      value: new Date(joinDate).toLocaleDateString(),
    },
    {
      label: 'Followers',
      value: followersCount,
    },
    {
      label: 'Following',
      value: followingCount,
    },
  ];

  return (
    <header>
      <Row gutter={40} align="middle">
        <Col>
          <Avatar src={avatarUrl} alt={userName} size={100} />
        </Col>
        <Col>
          {info
            .filter(({ value }) => value !== null)
            .map(({ label, value }) => (
              <p className={styles.infoItem} key={label}>
                {label}: <strong>{value}</strong>
              </p>
            ))}
        </Col>
      </Row>
      <div className={styles.bio}>
        <Typography.Paragraph>{bio}</Typography.Paragraph>
      </div>
    </header>
  );
};

export default memo(UserDetailsHeader);
