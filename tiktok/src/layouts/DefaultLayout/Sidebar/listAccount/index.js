import AccountItem from '../../../../Components/AccountItem';

import { useEffect, useState } from 'react';
import * as searchServices from '../../../../services/searchServices';
import Styles from '../../../../layouts/components/Search/Search.module.scss';
import className from 'classnames/bind';
import Tippys from '@tippyjs/react/headless';
import { Wapper as PopperWapper } from '../../../../Components/Popper';
import Button from '../../../../Components/Button';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheckCircle } from '@fortawesome/free-solid-svg-icons';
const cx = className.bind(Styles);
function List() {
    const [searchResult, setSearchResult] = useState([]);

    useEffect(() => {
        const fetchApi = async () => {
            const result = await searchServices.Search('l', 'more');
            setSearchResult(result);
        };
        fetchApi();
    }, []);

    return (
        <div>
            <div className={cx('user-offer')}>
                <h4 className={cx('search-title')}>Tài khoản đề xuất</h4>
                {searchResult.map((result) => (
                    <Tippys
                        content="following"
                        placement="bottom"
                        key={result.id}
                        appendTo={() => document.body}
                        interactive
                        // visible={true}
                        // delay={500}
                        render={(altrs) => (
                            <div className={cx('search-result')} tabIndex="-1">
                                <PopperWapper>
                                    <div className={cx('user-item')}>
                                        <img
                                            className={cx('user-image')}
                                            src={result.avatar}
                                            alt=""
                                        />
                                        <Button primary> following</Button>
                                    </div>
                                    <h4 className={cx('user-title')}>
                                        {result.full_name}

                                        {result.tick && (
                                            <FontAwesomeIcon
                                                className={cx('check')}
                                                icon={faCheckCircle}
                                            />
                                        )}
                                    </h4>
                                    <span className={cx('user-name')}>{result.nickname}</span>
                                    <div className={cx('user-description')}>
                                        <div className={cx('follow')}>
                                            <span>2000</span>
                                            <p>Follower</p>
                                        </div>
                                        <div className={cx('follow')}>
                                            <span>211</span>
                                            <p>Like</p>
                                        </div>
                                    </div>
                                </PopperWapper>
                            </div>
                        )}
                    >
                        <div>
                            <AccountItem data={result} />
                        </div>
                    </Tippys>
                ))}
                <div className={cx('user-status')}>xem tất cả</div>
            </div>
            <div>
                <Tippys>
                    <div className={cx('search-result')} tabIndex="-1" >
                    
                            <h4 className={cx('search-title')}>Các tài khoản đang follow</h4>
                            {searchResult.map((result) => (
                                <AccountItem key={result.id} data={result} />
                            ))}
                        <div className={cx('user-status')}>xem thêm</div>
                    </div>
                </Tippys>
            </div>
        </div>
    );
}

export default List;
