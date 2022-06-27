import classNames from 'classnames/bind';
import PropTypes from 'prop-types';
import styles from './Popper.module.scss';
const cx = classNames.bind(styles);
function Wapper({ children }) {
    return <div className={cx('wapper')}>{children}</div>;
}


Wapper.propTypes ={
    children: PropTypes.node.isRequired,
    className: PropTypes.string,
}
export default Wapper;
