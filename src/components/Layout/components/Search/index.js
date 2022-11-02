import HeadlessTippy from '@tippyjs/react/headless';
import { Wapper as PopperWrapper } from '~/components/Popper';
import AccountItem from '../AccountItem';

import styles from './Search.module.scss';
import classNames from 'classnames/bind';

import { useState, useEffect, useRef } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faCircleXmark,
  faSpinner,
  faMagnifyingGlass,
} from '@fortawesome/free-solid-svg-icons';

import { useDebounce } from '~/hooks';

const cx = classNames.bind(styles);

function Search() {
  const [searchValue, setSearchValue] = useState('');
  const [searchResult, setSearchResult] = useState([]);
  const [showResult, setShowResult] = useState(true);
  const [loading, setLoading] = useState(false);

  const debounce = useDebounce(searchValue, 500);

  const inputRef = useRef();

  useEffect(() => {
    //? dù có nhấn dấu cách thì cũng k bị trả về rỗng
    if (!debounce.trim()) {
      setSearchResult([]); //? xóa hết kí tự thì cũng xóa hết cái tìm kiếm
      return;
    }

    setLoading(true);

    //? cái ở dưới dùng encodeURIComponent là mã hóa kí tự nhập vào để tránh bị trùng
    fetch(
      `https://tiktok.fullstack.edu.vn/api/users/search?q=${encodeURIComponent(
        debounce,
      )}&type=less`,
    )
      .then((res) => res.json())
      .then((res) => {
        setSearchResult(res.data);
        setLoading(false);
      })
      .catch(() => {
        setLoading(false); //? để catch vì khi mất mạng hay load chậm thì cũng để hiện dấu này
      });
  }, [debounce]);

  const handleClear = () => {
    setSearchValue('');
    setSearchResult([]);
    inputRef.current.focus();
  };

  const handlleHideResult = () => {
    setShowResult(false);
  };

  return (
    <HeadlessTippy
      interactive
      visible={showResult && searchResult.length > 0}
      render={(atrrs) => (
        <div className={cx('search-result')} tabIndex="-1" {...atrrs}>
          <PopperWrapper>
            <h4 className={cx('search-title')}>Account</h4>
            {searchResult.map((result) => (
              <AccountItem key={result.id} data={result} />
            ))}
          </PopperWrapper>
        </div>
      )}
      onClickOutside={handlleHideResult}
    >
      <div className={cx('search')}>
        <input
          ref={inputRef}
          value={searchValue}
          placeholder="Search video and account..."
          spellCheck={false}
          onChange={(e) => setSearchValue(e.target.value)}
          onFocus={() => setShowResult(true)}
        />
        {!!searchValue && !loading && (
          <button className={cx('clear')} onClick={handleClear}>
            <FontAwesomeIcon icon={faCircleXmark} />
          </button>
        )}
        {loading && (
          <FontAwesomeIcon className={cx('loading')} icon={faSpinner} />
        )}
        <button className={cx('search-btn')}>
          <FontAwesomeIcon icon={faMagnifyingGlass} />
        </button>
      </div>
    </HeadlessTippy>
  );
}

export default Search;
