import Button from '~/components/Layout/components/Button';
import { Fragment } from 'react';
import classNames from 'classnames/bind';
import styles from './Menu.module.scss';

const cx = classNames.bind(styles);

function MenuItem({ data, onClick }) {
  const classes = cx('menu-item', {
    separate: data.separate,
  });
  return (
    <Button
      className={classes}
      leftIcon={data.icon}
      to={data.to}
      onClick={onClick}
    >
      {data.title}
    </Button>
  );
  // return (
  //   <Fragment>
  //     {data.map((item, index) => (
  //       <Button
  //         className={cx('menu-item')}
  //         key={index}
  //         leftIcon={item.icon}
  //         to={item.to}
  //         onClick={console.log('onClick')}
  //       >
  //         {item.title}
  //       </Button>
  //     ))}
  //   </Fragment>
  // );
}

export default MenuItem;
