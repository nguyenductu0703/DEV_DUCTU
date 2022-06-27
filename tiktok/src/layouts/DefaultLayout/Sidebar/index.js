import Styles from '../Sidebar/Sidebar.module.scss';
import className from 'classnames/bind';
import Menu from '../Sidebar/menu';
import List from '../Sidebar/listAccount';
import { MenuItem } from '../Sidebar/menu';
import config from '../../../config';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCamera, faHome, faUserGroup } from '@fortawesome/free-solid-svg-icons';

const cx = className.bind(Styles);
function Sidebar() {
    return (
        <aside className={cx('wrapper')}>
            <div className={cx('Menu')}>
                <Menu>
                    <MenuItem
                        title="For you"
                        to={config.routes.home}
                        icon={<FontAwesomeIcon icon={faHome} />}
                    />
                    <MenuItem
                        title="Following"
                        to={config.routes.following}
                        icon={<FontAwesomeIcon icon={faUserGroup} />}
                    />
                    <MenuItem
                        title="Live"
                        to={config.routes.live}
                        icon={<FontAwesomeIcon icon={faCamera} />}
                        />
                </Menu>
            </div>
            <div className={cx('list-accounts')}>

                < List/>
                </div>
        </aside>
    );
}

export default Sidebar;
