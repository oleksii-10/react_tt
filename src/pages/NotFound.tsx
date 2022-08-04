import { Button, Result } from 'antd';
import React from 'react';
import { Link } from 'react-router-dom';

const NotFound: React.FC = () => (
  <Result
    status="403"
    title="403"
    subTitle="Page is not found."
    extra={
      <Link to="/">
        <Button type="primary">Back Home</Button>
      </Link>
    }
  />
);

export default NotFound;
