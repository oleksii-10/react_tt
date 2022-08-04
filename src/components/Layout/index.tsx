import { Typography } from 'antd';
import { Link, Outlet } from 'react-router-dom';
import styles from './style.module.css';

const Layout: React.FC = () => {
  return (
    <div className={styles.layout}>
      <Link to="/">
        <Typography.Title level={1} className={styles.title}>
          GitHub Searcher
        </Typography.Title>
      </Link>

      <Outlet />
    </div>
  );
};

export default Layout;
