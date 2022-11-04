import HeadlessTippy from '@tippyjs/react/headless';
import { Wrapper as PopperWrapper } from '~/components/Popper';
import AccountItem from '../AccountItem';
import * as searchService from '~/services/searchServices';

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

  const debounced = useDebounce(searchValue, 500);

  const inputRef = useRef();

  useEffect(() => {
    //? dù có nhấn dấu cách thì cũng k bị trả về rỗng
    if (!debounced.trim()) {
      setSearchResult([]); //? xóa hết kí tự thì cũng xóa hết cái tìm kiếm
      return;
    }
    const fetchApi = async () => {
      setLoading(true);

      const results = await searchService.search(debounced);
      setSearchResult(results);

      setLoading(false);
    };

    fetchApi();
  }, [debounced]);

  const handleClear = () => {
    setSearchValue('');
    setSearchResult([]);
    inputRef.current.focus();
  };

  const handleHideResult = () => {
    setShowResult(false);
  };

  const handleChange = (e) => {
    const searchValue = e.target.value;
    if (!searchValue.startsWith(' ')) {
      setSearchValue(e.target.value);
    }
  };

  return (
    //? div fix lỗi warning cho tipy
    //? Using a wrapper <div> or <span> tag around the reference element solves this by creating a new parentNode context.
    <div>
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
        onClickOutside={handleHideResult}
      >
        <div className={cx('search')}>
          <input
            ref={inputRef}
            value={searchValue}
            placeholder="Search video and account..."
            spellCheck={false}
            onChange={handleChange}
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
          <button
            className={cx('search-btn')}
            onMouseDown={(e) => e.preventDefault()}
          >
            <FontAwesomeIcon icon={faMagnifyingGlass} />
          </button>
        </div>
      </HeadlessTippy>
    </div>
  );
}

export default Search;
