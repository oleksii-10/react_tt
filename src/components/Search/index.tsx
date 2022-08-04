import { List, Alert, Input, Divider, InputProps } from 'antd';
import { FC, memo, ReactNode, useEffect, useState } from 'react';
import { useDebounce } from '../../hooks';
import Loader from '../Loader';
import styles from './style.module.css';

type Props = {
  renderItem(item: any, index: number): ReactNode;
  inputProps?: InputProps;
  initialValue?: string;
  onChange(value: string): void;
  isLoading: boolean;
  isError: boolean;
  list: any[];
  height?: string | number;
};

const Search: FC<Props> = ({
  renderItem,
  inputProps,
  initialValue = '',
  onChange,
  isLoading,
  isError,
  list,
  height,
}) => {
  const [value, setValue] = useState(initialValue);
  const debouncedValue = useDebounce<string>(value, 300);

  useEffect(() => {
    onChange(debouncedValue.trim());
  }, [debouncedValue, onChange]);

  const handleChangeSearchValue = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    setValue(event.target.value);
  };

  if (isLoading) {
    return <Loader />;
  }

  if (isError) {
    return <Alert type="error" message="An error occurred" />;
  }

  return (
    <div>
      <Input
        size="large"
        {...inputProps}
        value={value}
        onChange={handleChangeSearchValue}
      />
      <Divider />
      <List
        bordered
        dataSource={list}
        className={styles.list}
        renderItem={renderItem}
        style={{ maxHeight: height }}
        rowKey={({ id }) => id}
      />
    </div>
  );
};

export default memo(Search);
