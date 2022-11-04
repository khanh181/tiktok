import classNames from 'classnames/bind';
import styles from './Button.module.scss';
import { Link } from 'react-router-dom';
// import { info } from 'sass';

const cx = classNames.bind(styles);

//? to là link nội bộ ( router), href là link ngoài, onClick là lắng nghe click
function Button({
  to,
  href,
  primary = false,
  outline = false,
  large = false,
  small = false,
  text = false,
  disabled = false,
  rounder = false,
  children,
  className,
  onClick,
  leftIcon,
  ...passProps
}) {
  let Comp = 'button';
  //! props là link nội bộ
  const props = {
    onClick,
    ...passProps,
  };
  // ! remover listener when event disabled
  if (disabled) {
    Object.keys(props).forEach((key) => {
      if (key.startsWith('on') && typeof props[key] === 'function') {
        delete props[key];
      }
    });
  }

  if (to) {
    props.to = to;
    Comp = Link;
  } else if (href) {
    props.href = href;
    Comp = 'a';
  }

  const classes = cx('wrapper', {
    primary, //! sử dụng es6 literal để lấy thêm class primary vào classes
    outline,
    small,
    large,
    text,
    disabled,
    rounder,
    [className] : className,
  });

  return (
    //? cái span này dùng để dễ thêm icons đằng trước hoặc sau ( nếu có)
    <Comp className={classes} {...props}>
      {leftIcon && <span className={cx('icon')}>{leftIcon}</span>}
      <span className={cx('title')}>{children}</span>
    </Comp>
  );
}

export default Button;
