import classNames from 'classnames/bind';
import styles from './Button.module.scss';
import { Link } from 'react-router-dom';
import { info } from 'sass';

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
  children,
  onClick,
  ...passProps
}) {
  let Comp = 'button';
  //! props là link nội bộ
  const props = {
    onClick,
    ...passProps,
  };

  if (disabled) {
    delete props.onClick;
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
  });

  return (
    //? cái span này dùng để dễ thêm icons đằng trước hoặc sau ( nếu có)
    <Comp className={classes} {...props}>
      <span>{children}</span>
    </Comp>
  );
}

export default Button;
