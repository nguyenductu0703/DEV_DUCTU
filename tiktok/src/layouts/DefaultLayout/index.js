import PropTypes from 'prop-types';
import Header from '../components/Header';
import Sidebar from './Sidebar';
import Styles from './DefaultLayout.module.scss';
import className from 'classnames/bind';

const cx = className.bind(Styles);
function DefaultLayout({ children }) {
    return (
        <div className={cx('wrapper')}>
            <Header />
            <div className={cx('Container')}>
                <Sidebar />
                <div className={cx('content')}>{children}</div>
            </div>
        </div>
    );
}
 
DefaultLayout.propTypes = {
    children: PropTypes.node.isRequired,
}
export default DefaultLayout;
