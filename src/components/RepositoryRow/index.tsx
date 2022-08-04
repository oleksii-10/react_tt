import { Col, Row, Typography } from 'antd';
import { FC, memo } from 'react';
import styles from './style.module.css';

type Props = {
  name: string;
  forksCount: number;
  starsCount: number;
};

const RepositoryRow: FC<Props> = ({ name, forksCount, starsCount }) => {
  const info = [
    {
      label: 'Forks',
      value: forksCount,
    },
    {
      label: 'Stars',
      value: starsCount,
    },
  ];

  return (
    <Row align="middle" justify="space-between" className={styles.row}>
      <Col>
        <Typography.Title className={styles.title} level={4}>
          {name}
        </Typography.Title>
      </Col>
      <Col>
        {info.map(({ label, value }) => (
          <div key={label}>
            {value} {label}
          </div>
        ))}
      </Col>
    </Row>
  );
};

export default memo(RepositoryRow);
