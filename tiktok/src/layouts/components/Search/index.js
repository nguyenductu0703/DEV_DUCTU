import Tippy from '@tippyjs/react/headless';
import { Wapper as PopperWapper } from '../../../Components/Popper';
import AccountItem from '../../../Components/AccountItem';
import { faCircleXmark, faSpinner, faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons';
import { useEffect, useRef, useState } from 'react';
import * as searchServices from '../../../services/searchServices';
import Styles from './Search.module.scss';
import className from 'classnames/bind';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useDebounce } from '../../../hooks';
const cx = className.bind(Styles);
function Search() {
    const [searchValue, setSearchValue] = useState('');
    const [searchResult, setSearchResult] = useState([]);

    const [showResult, setShowResult] = useState(true);
    const [loading, setLoading] = useState(false);
    const debuonce = useDebounce(searchValue, 600);

    const inputRef = useRef();
    useEffect(() => {
        if (!debuonce.trim()) {
            setSearchResult([]);
            return;
        }

        const fetchApi = async () => {
            setLoading(true);
            const result = await searchServices.Search(debuonce);
            setSearchResult(result);
            setLoading(false);
        };
        fetchApi();
    }, [debuonce]);

    const handleClear = () => {
        setSearchValue('');
        setSearchResult([]);
        inputRef.current.focus();
    };

    const HandleResult = () => {
        setShowResult(false);
    };
    const HandleChange = (e) => {
        const searchValue = e.target.value;
        if (searchValue.startsWith(' ')) {
            return;
        }
        setSearchValue(searchValue);
    };

    return (
        <div>
            <Tippy
                interactive
                visible={showResult && searchResult.length > 0}
                render={(altrs) => (
                    <div className={cx('search-result')} tabIndex="-1" {...altrs}>
                        <PopperWapper>
                            <h4 className={cx('search-title')}>Accounts</h4>
                            {searchResult.map((result) => (
                                <AccountItem key={result.id} data={result} />
                            ))}
                        </PopperWapper>
                    </div>
                )}
                onClickOutside={HandleResult}
            >
                <div className={cx('search')}>
                    <input
                        ref={inputRef}
                        value={searchValue}
                        placeholder="Search accounts and videos"
                        spellCheck={false}
                        onChange={HandleChange}
                        onFocus={() => setShowResult(true)}
                    />
                    {!!searchValue && !loading && (
                        <button className={cx('clear')} onClick={handleClear}>
                            <FontAwesomeIcon icon={faCircleXmark} />
                        </button>
                    )}
                    {loading && <FontAwesomeIcon className={cx('loading')} icon={faSpinner} />}

                    <button className={cx('search-btn')} onMouseDown={(e) => e.preventDefault()}>
                        <FontAwesomeIcon icon={faMagnifyingGlass} />
                    </button>
                </div>
            </Tippy>
        </div>
    );
}

export default Search;
