import Button from '~/components/Layout/components/Button';
import { Fragment } from 'react';
import classNames from 'classnames/bind';
import styles from './Menu.module.scss';

const cx = classNames.bind(styles);

function MenuItem({ data }) {
  // const title = data.map((item) => <div>{item.title}</div>);
  // const icon = data.map((item) => <div>{item.icon}</div>);
  // return <Button leftIcon={icon}>{title}</Button>;
  return (
    <Fragment>
      {data.map((item, index) => (
        <Button
          className={cx('menu-item')}
          key={index}
          leftIcon={item.icon}
          to={item.to}
        >
          {item.title}
        </Button>
      ))}
    </Fragment>
  );
}

export default MenuItem;
