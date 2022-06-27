import Tippy from '@tippyjs/react/headless';
import { Wapper as PopperWapper } from '../../Popper';
import className from 'classnames/bind';
import Styles from './Menu.module.scss';
import MenuItem from './MenuItem';
import Header from './header';
import { useState } from 'react';
import PropTypes from 'prop-types';
const cx = className.bind(Styles);
const defaultFn = () => {};
function Menu({ children, items = [], onChange = defaultFn, hideOnClick = false}) {
    const [history, setHistory] = useState([{ data: items }]);
    const current = history[history.length - 1];
    const renderItem = () => {
        return current.data.map((item, index) => {
            const isParent = !!item.children;
            return (
                <MenuItem
                    key={index}
                    data={item}
                    onClick={() => {
                        if (isParent) {
                            setHistory((prev) => [...prev, item.children]);
                        } else {
                            onChange(item);
                        }
                    }}
                />
            );
        });
    };
    return (
        <Tippy
            delay={500}
            interactive
            placement="bottom-end"
            hideOnClick={hideOnClick}
            render={(altrs) => (
                <div className={cx('content')} tabIndex="-1" {...altrs}>
                    <PopperWapper>
                        {history.length > 1 && (
                            <Header
                                title={current.title}
                                onBack={() => {
                                    setHistory((prev) => prev.slice(0, prev.length - 1));
                                }}
                            />
                        )}
                        <div className={cx('headers-icons')}>{renderItem()}</div>
                    </PopperWapper>
                </div>
            )}
            onHide={() => setHistory((prev) => prev.slice(0, 1))}
        >
            {children}
        </Tippy>
    );
}
 
Menu.propTypes = {
    children: PropTypes.node.isRequired,
    items: PropTypes.array,
    hideOnClick: PropTypes.bool,
    onChange: PropTypes.func,
}
export default Menu;
