import Styles from '../Header/Header.module.scss';
import className from 'classnames/bind';
import images from '../../../asset/image';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import 'tippy.js/dist/tippy.css';
import Search from '../Search';
import {
    faEllipsisVertical,
    faPlus,
    faLanguage,
    faCircleQuestion,
    faKeyboard,
    faMessage,
    faCloudUpload,
    faUser,
    faCoins,
    faGear,
    faRightFromBracket,
} from '@fortawesome/free-solid-svg-icons';

import Tippys from '@tippyjs/react';

import Button from '../../../Components/Button';
import config from '../../../config';
import Menu from '../../../Components/Popper/Menu';
import { Link } from 'react-router-dom';
const cx = className.bind(Styles);

const MENU_ITEM = [
    {
        icon: <FontAwesomeIcon icon={faLanguage} />,
        title: 'English',
        children: {
            title: 'Language',
            data: [
                {
                    type: 'Language',
                    code: 'en',
                    title: 'English',
                },
                {
                    type: 'Language',
                    code: 'Vi',
                    title: 'Tiếng Việt',
                },
                {
                    type: 'Language',
                    code: 'en',
                    title: 'English',
                },
                {
                    type: 'Language',
                    code: 'Vi',
                    title: 'Tiếng Việt',
                },
                {
                    type: 'Language',
                    code: 'en',
                    title: 'English',
                },
                {
                    type: 'Language',
                    code: 'Vi',
                    title: 'Tiếng Việt',
                },
                {
                    type: 'Language',
                    code: 'en',
                    title: 'English',
                },
                {
                    type: 'Language',
                    code: 'Vi',
                    title: 'Tiếng Việt',
                },
                {
                    type: 'Language',
                    code: 'en',
                    title: 'English',
                },
                {
                    type: 'Language',
                    code: 'Vi',
                    title: 'Tiếng Việt',
                },
                {
                    type: 'Language',
                    code: 'en',
                    title: 'English',
                },
                {
                    type: 'Language',
                    code: 'Vi',
                    title: 'Tiếng Việt',
                },
                {
                    type: 'Language',
                    code: 'en',
                    title: 'English',
                },
                {
                    type: 'Language',
                    code: 'Vi',
                    title: 'Tiếng Việt',
                },
                {
                    type: 'Language',
                    code: 'en',
                    title: 'English',
                },
                {
                    type: 'Language',
                    code: 'Vi',
                    title: 'Tiếng Việt',
                },

            ],
        },
    },
    {
        icon: <FontAwesomeIcon icon={faCircleQuestion} />,
        title: 'Phản hồi trợ giúp',
        to: '/feedback',
    },
    {
        icon: <FontAwesomeIcon icon={faKeyboard} />,
        title: 'Phím tắt bàn phím',
    },
];
const USE_MENU = [
    {
        icon: <FontAwesomeIcon icon={faUser} />,
        title: 'Xem hồ sơ',
    },
    {
        icon: <FontAwesomeIcon icon={faCoins} />,
        title: 'Nhận xu',
    },
    {
        icon: <FontAwesomeIcon icon={faGear} />,
        title: 'Cài đặt',
        to: '/setting',
    },
    ...MENU_ITEM,
    {
        icon: <FontAwesomeIcon icon={faRightFromBracket} />,
        title: 'Đăng xuất',
        to: 'logout',
        separate: true,
    },
];
function Header() {
    const handleMenu = (menuItem) => {
        switch (menuItem.type) {
            case 'Language':
                break;
            default:
        }
    };
    const currentUser = true;
    return (
        <header className={cx('wrapper')}>
            <div className={cx('inner')}>
                <div className={cx('logo')}>
                    <Link to={config.routes.home} className={cx('logo-link')}>
                        <img src={images.logo} alt="tiktok" />
                    </Link>
                </div>
                <Search />
                <div className={cx('action')}>
                    {currentUser ? (
                        <>
                            <Tippys content="Upload">
                                <button className={cx('upload-user')}>
                                    <FontAwesomeIcon icon={faCloudUpload} />
                                </button>
                            </Tippys>
                            <Tippys content="Message">
                                <button className={cx('message-user')}>
                                    <FontAwesomeIcon icon={faMessage} />
                                    <span className={cx('message-notifi')}>12</span>
                                </button>
                            </Tippys>
                        </>
                    ) : (
                        <>
                            <Button text letIcon={<FontAwesomeIcon icon={faPlus} />}>
                                Tải lên
                            </Button>
                            <Button primary>Đăng Nhập</Button>
                        </>
                    )}
                    <Menu items={currentUser ? USE_MENU : MENU_ITEM} onChange={handleMenu}>
                        {currentUser ? (
                            <img
                                src="https://p16-sign-va.tiktokcdn.com/tos-useast2a-avt-0068-giso/97988aafb3865cbf5c9dca85d4b71d98~c5_100x100.jpeg?x-expires=1655956800&x-signature=rX%2Ff9spOrKPwsVC%2F5IEGUp%2FJVk4%3D"
                                className={cx('user-avatar')}
                                alt=""
                            />
                        ) : (
                            <button className={cx('icon-menu')}>
                                <FontAwesomeIcon icon={faEllipsisVertical} />
                            </button>
                        )}
                    </Menu>
                </div>
            </div>
        </header>
    );
}

export default Header;
